"use client";

import { Suspense, useEffect, useMemo, useRef, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Html, OrbitControls, Instances, Instance } from "@react-three/drei";
import * as THREE from "three";
import gsap from "gsap";
import { treeNodes } from "../../content";

const GREENS = ["#5b8c5a", "#6faf6e", "#82c281", "#4a7a4a", "#9bd199", "#3f6f3f", "#78b577", "#4d8a4d"];

function makeRng(seed: number) {
  return () => {
    seed |= 0;
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

// Node positions — flowchart tiers
function useNodePositions() {
  return useMemo(() => {
    const layout: [number, number][] = [
      [0, 6.2],
      [-3.2, 5.0],
      [3.2, 5.0],
      [-4.5, 3.5],
      [4.5, 3.5],
      [-3.0, 2.0],
      [3.0, 2.0],
      [-4.2, 0.8],
      [4.2, 0.8],
    ];
    return layout.map(([x, y]) => [x, y, 0] as [number, number, number]);
  }, []);
}

const CONNECTIONS: [number, number][] = [
  [0, 1], [0, 2],
  [1, 3], [2, 4],
  [3, 5], [1, 5],
  [2, 6], [4, 6],
  [5, 7], [6, 8],
];

// Organic branch tube between two points
function Branch({ from, to }: { from: [number, number, number]; to: [number, number, number] }) {
  const geo = useMemo(() => {
    const a = new THREE.Vector3(...from);
    const b = new THREE.Vector3(...to);
    const mid = new THREE.Vector3().lerpVectors(a, b, 0.5);
    mid.y += 0.3;
    mid.z += 0.15;
    return new THREE.TubeGeometry(new THREE.QuadraticBezierCurve3(a, mid, b), 12, 0.06, 6, false);
  }, [from, to]);
  return <mesh geometry={geo}><meshStandardMaterial color="#6b4a2f" flatShading roughness={1} /></mesh>;
}

// Branch from trunk to a node
function TrunkBranch({ target }: { target: [number, number, number] }) {
  const geo = useMemo(() => {
    const start = new THREE.Vector3(0, 3.0, 0);
    const end = new THREE.Vector3(...target);
    const dir = end.clone().sub(start);
    const m1 = start.clone().add(dir.clone().multiplyScalar(0.3));
    m1.y += 0.5; m1.z += (end.x > 0 ? 0.3 : -0.3);
    const m2 = start.clone().add(dir.clone().multiplyScalar(0.65));
    m2.y += 0.2;
    return new THREE.TubeGeometry(new THREE.CubicBezierCurve3(start, m1, m2, end), 16, 0.08, 6, false);
  }, [target]);
  return <mesh geometry={geo} castShadow><meshStandardMaterial color="#6b4a2f" flatShading roughness={1} /></mesh>;
}

// Spider web thread — thin drooping silk between two points
function WebThread({ from, to, sag, seed }: { from: [number, number, number]; to: [number, number, number]; sag: number; seed: number }) {
  const geo = useMemo(() => {
    const rng = makeRng(seed);
    const a = new THREE.Vector3(...from);
    const b = new THREE.Vector3(...to);
    const mid = new THREE.Vector3().lerpVectors(a, b, 0.4 + rng() * 0.2);
    mid.y -= sag;
    mid.z += (rng() - 0.5) * 0.5;
    return new THREE.TubeGeometry(new THREE.QuadraticBezierCurve3(a, mid, b), 16, 0.012, 4, false);
  }, [from, to, sag, seed]);
  return <mesh geometry={geo}><meshStandardMaterial color="#c0c0c0" transparent opacity={0.35} roughness={0.2} metalness={0.3} /></mesh>;
}

// Spider web network — drooping silk threads between nodes and dangling strands
function SpiderWebs({ positions }: { positions: [number, number, number][] }) {
  const webs = useMemo(() => {
    const rng = makeRng(42);
    const threads: { from: [number, number, number]; to: [number, number, number]; sag: number; seed: number }[] = [];

    // Threads between connected nodes (alongside branches)
    CONNECTIONS.forEach(([a, b], i) => {
      const from = positions[a];
      const to = positions[b];
      // 2-3 silk threads per connection, offset slightly
      for (let t = 0; t < 2; t++) {
        const ox = (rng() - 0.5) * 0.3;
        const oy = (rng() - 0.5) * 0.2;
        threads.push({
          from: [from[0] + ox, from[1] + oy, from[2] + (rng() - 0.5) * 0.4],
          to: [to[0] + ox, to[1] + oy, to[2] + (rng() - 0.5) * 0.4],
          sag: 0.5 + rng() * 1.2,
          seed: i * 100 + t,
        });
      }
    });

    // Dangling threads from each node going downward
    positions.forEach((p, i) => {
      const count = 2 + Math.floor(rng() * 2);
      for (let j = 0; j < count; j++) {
        const dropLen = 0.8 + rng() * 1.5;
        threads.push({
          from: [p[0] + (rng() - 0.5) * 0.5, p[1], p[2] + (rng() - 0.5) * 0.3],
          to: [p[0] + (rng() - 0.5) * 0.8, p[1] - dropLen, p[2] + (rng() - 0.5) * 0.5],
          sag: 0.1 + rng() * 0.3,
          seed: 500 + i * 10 + j,
        });
      }
    });

    return threads;
  }, [positions]);

  return <>{webs.map((w, i) => <WebThread key={i} {...w} />)}</>;
}

// Falling leaves — drift down like snow from the canopy
function FallingLeaves({ positions, count = 60 }: { positions: [number, number, number][]; count?: number }) {
  const ref = useRef<THREE.Points>(null);
  const { posArr, speeds, drifts } = useMemo(() => {
    const rng = makeRng(999);
    const posArr = new Float32Array(count * 3);
    const speeds = new Float32Array(count);
    const drifts = new Float32Array(count * 2);
    for (let i = 0; i < count; i++) {
      const src = positions[Math.floor(rng() * positions.length)];
      posArr[i * 3] = src[0] + (rng() - 0.5) * 2;
      posArr[i * 3 + 1] = src[1] + rng() * 3;
      posArr[i * 3 + 2] = src[2] + (rng() - 0.5) * 2;
      speeds[i] = 0.008 + rng() * 0.015;
      drifts[i * 2] = (rng() - 0.5) * 0.006;
      drifts[i * 2 + 1] = (rng() - 0.5) * 0.004;
    }
    return { posArr, speeds, drifts };
  }, [positions, count]);

  useFrame((state) => {
    const pts = ref.current;
    if (!pts) return;
    const arr = pts.geometry.attributes.position.array as Float32Array;
    const t = state.clock.elapsedTime;
    for (let i = 0; i < count; i++) {
      arr[i * 3] += drifts[i * 2] + Math.sin(t * 0.5 + i) * 0.002;
      arr[i * 3 + 1] -= speeds[i];
      arr[i * 3 + 2] += drifts[i * 2 + 1] + Math.cos(t * 0.4 + i) * 0.001;
      if (arr[i * 3 + 1] < -2.5) {
        const src = positions[i % positions.length];
        arr[i * 3] = src[0] + (Math.sin(i + t) * 0.5);
        arr[i * 3 + 1] = src[1] + 1 + Math.abs(Math.sin(i)) * 2;
        arr[i * 3 + 2] = src[2] + (Math.cos(i + t) * 0.5);
      }
    }
    pts.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[posArr, 3]} />
      </bufferGeometry>
      <pointsMaterial color="#9bd199" size={0.12} transparent opacity={0.7} sizeAttenuation />
    </points>
  );
}

// Leaf cluster at a node
function LeafCluster({ position, count = 18 }: { position: [number, number, number]; count?: number }) {
  const leaves = useMemo(() => {
    const rng = makeRng(position[0] * 1000 + position[1] * 100);
    const out: { pos: [number, number, number]; scale: [number, number, number]; rot: [number, number, number]; color: string }[] = [];
    for (let i = 0; i < count; i++) {
      const theta = rng() * Math.PI * 2;
      const phi = Math.acos(2 * rng() - 1);
      const r = 0.4 + rng() * 0.7;
      out.push({
        pos: [position[0] + r * Math.sin(phi) * Math.cos(theta), position[1] + r * Math.cos(phi) * 0.6, position[2] + r * Math.sin(phi) * Math.sin(theta)],
        scale: [0.3 + rng() * 0.25, 0.22 + rng() * 0.18, 0.3 + rng() * 0.25],
        rot: [rng() * Math.PI, rng() * Math.PI, rng() * Math.PI],
        color: GREENS[Math.floor(rng() * GREENS.length)],
      });
    }
    return out;
  }, [position, count]);
  return <>{leaves.map((l, i) => <Instance key={i} position={l.pos} rotation={l.rot} scale={l.scale} color={l.color} />)}</>;
}

// Full canopy: scatter + clusters
function FullCanopy({ positions, mobile }: { positions: [number, number, number][]; mobile: boolean }) {
  const bgLeaves = useMemo(() => {
    const rng = makeRng(1337);
    const count = mobile ? 60 : 120;
    const out: { pos: [number, number, number]; scale: [number, number, number]; rot: [number, number, number]; color: string }[] = [];
    for (let i = 0; i < count; i++) {
      const theta = rng() * Math.PI * 2;
      const r = 1 + rng() * 5;
      const y = 0.5 + rng() * 6;
      out.push({
        pos: [r * Math.cos(theta), y, (rng() - 0.5) * 3],
        scale: [0.3 + rng() * 0.3, 0.2 + rng() * 0.2, 0.3 + rng() * 0.3],
        rot: [rng() * Math.PI, rng() * Math.PI, rng() * Math.PI],
        color: GREENS[Math.floor(rng() * GREENS.length)],
      });
    }
    return out;
  }, [mobile]);

  const perNode = mobile ? 12 : 18;
  return (
    <Instances limit={bgLeaves.length + positions.length * perNode + 50} castShadow receiveShadow>
      <icosahedronGeometry args={[1, 0]} />
      <meshStandardMaterial flatShading roughness={0.8} metalness={0} />
      {bgLeaves.map((l, i) => <Instance key={`bg-${i}`} position={l.pos} rotation={l.rot} scale={l.scale} color={l.color} />)}
      {positions.map((p, i) => <LeafCluster key={`cl-${i}`} position={p} count={perNode} />)}
    </Instances>
  );
}

// Trunk
function Trunk() {
  const bark = "#6b4a2f";
  return (
    <group>
      <mesh position={[0, 0.5, 0]} castShadow>
        <cylinderGeometry args={[0.35, 0.7, 5, 12]} />
        <meshStandardMaterial color={bark} flatShading roughness={1} />
      </mesh>
      {[
        { p: [0.1, 1.5, 0.15], r: [0.2, 0, -0.6], l: 1.2 },
        { p: [-0.15, 2.0, -0.1], r: [0.3, 0, 0.7], l: 1.0 },
        { p: [0.08, 2.5, -0.2], r: [-0.4, 0, -0.3], l: 0.9 },
      ].map((b, i) => (
        <mesh key={i} position={b.p as [number, number, number]} rotation={b.r as [number, number, number]} castShadow>
          <cylinderGeometry args={[0.06, 0.13, b.l, 8]} />
          <meshStandardMaterial color={bark} flatShading roughness={1} />
        </mesh>
      ))}
    </group>
  );
}

// Glowing dots at each node
function NodeDots({ positions }: { positions: [number, number, number][] }) {
  const COLORS = ["#22D3EE", "#7C3AED", "#F59E0B", "#EC4899", "#10B981", "#6366F1", "#F43F5E", "#14B8A6", "#F97316"];
  return (
    <>
      {positions.map((p, i) => (
        <group key={i} position={p}>
          <mesh renderOrder={100}>
            <sphereGeometry args={[0.15, 16, 16]} />
            <meshStandardMaterial color={COLORS[i]} emissive={COLORS[i]} emissiveIntensity={0.8} toneMapped={false} />
          </mesh>
          <mesh renderOrder={99}>
            <sphereGeometry args={[0.3, 16, 16]} />
            <meshBasicMaterial color={COLORS[i]} transparent opacity={0.15} />
          </mesh>
        </group>
      ))}
    </>
  );
}

// Label
function TreeLabel({ node, position, onPick }: { node: (typeof treeNodes)[number]; position: [number, number, number]; onPick: (href: string) => void }) {
  const [hover, setHover] = useState(false);
  return (
    <Html position={position} center zIndexRange={[30, 0]} className="select-none">
      <button
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        onClick={() => onPick(node.href)}
        className="tree-label group relative flex flex-col items-center"
      >
        <span className={`whitespace-nowrap rounded-full border px-3 py-1.5 text-xs font-semibold backdrop-blur transition-all duration-300 ${hover ? "scale-110 border-amber bg-amber text-[#0b1026]" : "border-white/15 bg-black/70 text-white"}`}>
          {node.label}
        </span>
        <span className={`pointer-events-none absolute top-full mt-1.5 w-44 rounded-lg border border-white/10 bg-black/85 px-3 py-1.5 text-[11px] leading-snug text-muted backdrop-blur transition-all duration-200 ${hover ? "translate-y-0 opacity-100" : "-translate-y-1 opacity-0"}`}>
          {node.teaser}
        </span>
      </button>
    </Html>
  );
}

function Labels({ positions, onPick }: { positions: [number, number, number][]; onPick: (href: string) => void }) {
  return <>{treeNodes.map((n, i) => <TreeLabel key={n.href} node={n} position={positions[i]} onPick={onPick} />)}</>;
}

// Rain
function Rain({ count = 280 }: { count?: number }) {
  const ref = useRef<THREE.Points>(null);
  const { positions, speeds } = useMemo(() => {
    const rng = makeRng(7);
    const positions = new Float32Array(count * 3);
    const speeds = new Float32Array(count);
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (rng() - 0.5) * 22;
      positions[i * 3 + 1] = rng() * 18;
      positions[i * 3 + 2] = (rng() - 0.5) * 16;
      speeds[i] = 0.04 + rng() * 0.08;
    }
    return { positions, speeds };
  }, [count]);

  useFrame(() => {
    const pts = ref.current;
    if (!pts) return;
    const arr = pts.geometry.attributes.position.array as Float32Array;
    for (let i = 0; i < count; i++) {
      arr[i * 3 + 1] -= speeds[i];
      if (arr[i * 3 + 1] < -2) arr[i * 3 + 1] = 17;
    }
    pts.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <points ref={ref}>
      <bufferGeometry><bufferAttribute attach="attributes-position" args={[positions, 3]} /></bufferGeometry>
      <pointsMaterial color="#cfeccf" size={0.05} transparent opacity={0.4} sizeAttenuation />
    </points>
  );
}

// Scene
function Scene({ onPick, mobile }: { onPick: (href: string) => void; mobile: boolean }) {
  const group = useRef<THREE.Group>(null);
  const { camera } = useThree();
  const positions = useNodePositions();

  useEffect(() => {
    if (!group.current) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const tl = gsap.timeline();
    tl.from(group.current.scale, { x: 0, y: 0, z: 0, duration: 1.2, ease: "back.out(1.5)" });
    tl.from(camera.position, { y: -1, z: 18, duration: 1.5, ease: "power3.out" }, 0);
    return () => { tl.kill(); };
  }, [camera]);

  useFrame((state) => {
    if (!group.current) return;
    group.current.rotation.y += (state.pointer.x * 0.2 - group.current.rotation.y) * 0.05;
  });

  return (
    <>
      <hemisphereLight args={["#dfeffd", "#2c3a2c", 0.9]} />
      <directionalLight position={[6, 12, 5]} intensity={1.6} castShadow />
      <directionalLight position={[-6, 4, -4]} intensity={0.5} color="#7c3aed" />
      <group ref={group}>
        <Suspense fallback={null}>
          <Trunk />
          {positions.map((p, i) => <TrunkBranch key={i} target={p} />)}
          {CONNECTIONS.map(([a, b], i) => <Branch key={i} from={positions[a]} to={positions[b]} />)}
          <FullCanopy positions={positions} mobile={mobile} />
          <SpiderWebs positions={positions} />
          <FallingLeaves positions={positions} count={mobile ? 30 : 60} />
          <NodeDots positions={positions} />
          <Labels positions={positions} onPick={onPick} />
        </Suspense>
        <Rain count={mobile ? 140 : 280} />
        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -2, 0]} receiveShadow>
          <circleGeometry args={[9, 48]} />
          <meshStandardMaterial color="#3f6b3e" roughness={1} transparent opacity={0.5} />
        </mesh>
      </group>
      <OrbitControls makeDefault target={[0, 3.5, 0]} enablePan={false} enableZoom={false} minPolarAngle={Math.PI / 3.2} maxPolarAngle={Math.PI / 1.95} autoRotate autoRotateSpeed={0.8} enableDamping dampingFactor={0.08} />
    </>
  );
}

export default function TreeScene({ onPick }: { onPick: (href: string) => void }) {
  const mobile = typeof window !== "undefined" && window.matchMedia("(max-width: 640px)").matches;
  return (
    <Canvas camera={{ position: [0, 3.5, 15], fov: 45 }} dpr={[1, 1.6]} gl={{ alpha: true, antialias: true }} style={{ background: "transparent" }}>
      <Scene onPick={onPick} mobile={mobile} />
    </Canvas>
  );
}
