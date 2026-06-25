"use client";

import { Suspense, useEffect, useMemo, useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Html, Float, OrbitControls, useTexture, Instances, Instance } from "@react-three/drei";
import * as THREE from "three";
import gsap from "gsap";
import face from "../../assets/arifuz.jpg";
import { treeNodes } from "../../content";

const GREENS = ["#5b8c5a", "#6faf6e", "#8fce8d", "#4a7a4a", "#a3d9a1"];

// Deterministic PRNG — keeps useMemo pure (and positions stable across renders).
function makeRng(seed: number) {
  return () => {
    seed |= 0;
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

// --- Canopy: many instanced leaves clustered in a rough dome --------------
function Canopy({ count = 140 }: { count?: number }) {
  const leaves = useMemo(() => {
    const rng = makeRng(1337);
    const out: { pos: [number, number, number]; scale: number; rot: number; color: string }[] = [];
    for (let i = 0; i < count; i++) {
      // distribute in a squashed sphere around the top of the tree
      const theta = rng() * Math.PI * 2;
      const phi = Math.acos(2 * rng() - 1);
      const r = 2.4 + rng() * 1.4;
      const x = r * Math.sin(phi) * Math.cos(theta);
      const y = 2.6 + r * Math.cos(phi) * 0.75 + rng() * 0.6;
      const z = r * Math.sin(phi) * Math.sin(theta);
      out.push({
        pos: [x, y, z],
        scale: 0.32 + rng() * 0.3,
        rot: rng() * Math.PI,
        color: GREENS[Math.floor(rng() * GREENS.length)],
      });
    }
    return out;
  }, [count]);

  return (
    <Instances limit={count} castShadow>
      <icosahedronGeometry args={[1, 0]} />
      <meshStandardMaterial flatShading roughness={0.85} />
      {leaves.map((l, i) => (
        <Instance key={i} position={l.pos} rotation={[l.rot, l.rot * 0.5, l.rot]} scale={[l.scale, l.scale * 0.6, l.scale]} color={l.color} />
      ))}
    </Instances>
  );
}

// --- Trunk + a few branches ------------------------------------------------
function Trunk() {
  const bark = "#6b4a2f";
  return (
    <group>
      <mesh position={[0, 0.4, 0]} castShadow>
        <cylinderGeometry args={[0.32, 0.55, 3.4, 12]} />
        <meshStandardMaterial color={bark} flatShading roughness={1} />
      </mesh>
      {/* branches */}
      {[
        { p: [0.1, 1.9, 0.2], r: [0, 0, -0.7], l: 1.6 },
        { p: [-0.15, 2.2, -0.1], r: [0.3, 0, 0.8], l: 1.4 },
        { p: [0.1, 2.5, -0.2], r: [-0.4, 0, -0.3], l: 1.2 },
      ].map((b, i) => (
        <mesh key={i} position={b.p as [number, number, number]} rotation={b.r as [number, number, number]} castShadow>
          <cylinderGeometry args={[0.1, 0.18, b.l, 8]} />
          <meshStandardMaterial color={bark} flatShading roughness={1} />
        </mesh>
      ))}
    </group>
  );
}

// --- The face medallion floating in the canopy -----------------------------
function FaceMedallion() {
  const tex = useTexture(face.src);
  return (
    <Float speed={2} rotationIntensity={0.15} floatIntensity={0.6}>
      <group position={[0, 3.1, 2.7]}>
        {/* glowing ring */}
        <mesh>
          <torusGeometry args={[1.02, 0.06, 16, 48]} />
          <meshStandardMaterial color="#fbbf24" emissive="#fbbf24" emissiveIntensity={1.4} toneMapped={false} />
        </mesh>
        {/* face disc — always faces camera-ish */}
        <mesh>
          <circleGeometry args={[0.95, 48]} />
          <meshBasicMaterial map={tex} toneMapped={false} />
        </mesh>
        {/* soft backing glow */}
        <mesh position={[0, 0, -0.05]}>
          <circleGeometry args={[1.15, 48]} />
          <meshBasicMaterial color="#7c3aed" transparent opacity={0.25} />
        </mesh>
      </group>
    </Float>
  );
}

// --- Falling rain ----------------------------------------------------------
function Rain({ count = 320 }: { count?: number }) {
  const ref = useRef<THREE.Points>(null);
  const { positions, speeds } = useMemo(() => {
    const rng = makeRng(7);
    const positions = new Float32Array(count * 3);
    const speeds = new Float32Array(count);
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (rng() - 0.5) * 18;
      positions[i * 3 + 1] = rng() * 14;
      positions[i * 3 + 2] = (rng() - 0.5) * 14;
      speeds[i] = 0.04 + rng() * 0.09;
    }
    return { positions, speeds };
  }, [count]);

  useFrame(() => {
    const pts = ref.current;
    if (!pts) return;
    const arr = pts.geometry.attributes.position.array as Float32Array;
    for (let i = 0; i < count; i++) {
      arr[i * 3 + 1] -= speeds[i];
      if (arr[i * 3 + 1] < -1) arr[i * 3 + 1] = 13;
    }
    pts.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial color="#bfe3c0" size={0.06} transparent opacity={0.5} sizeAttenuation />
    </points>
  );
}

// --- Floating clickable section labels -------------------------------------
function Labels({ onPick }: { onPick: (href: string) => void }) {
  // deterministic-ish positions around the canopy dome
  const positions = useMemo(() => {
    return treeNodes.map((_, i) => {
      const a = (i / treeNodes.length) * Math.PI * 2 + 0.4;
      const r = 3.1 + (i % 3) * 0.5;
      return [Math.cos(a) * r, 2.4 + (i % 4) * 0.7, Math.sin(a) * r] as [number, number, number];
    });
  }, []);

  return (
    <>
      {treeNodes.map((n, i) => (
        <Html key={n.href} position={positions[i]} center distanceFactor={9} zIndexRange={[20, 0]}>
          <button
            onClick={() => onPick(n.href)}
            className="tree-label whitespace-nowrap rounded-full border border-white/15 bg-black/70 px-3 py-1.5 text-xs font-medium text-white backdrop-blur transition-all duration-300 hover:scale-110 hover:border-amber hover:text-amber"
            style={{ animationDelay: `${1000 + i * 110}ms` }}
          >
            {n.label}
          </button>
        </Html>
      ))}
    </>
  );
}

// --- The whole scene -------------------------------------------------------
function Scene({ onPick, mobile }: { onPick: (href: string) => void; mobile: boolean }) {
  const group = useRef<THREE.Group>(null);
  const { camera } = useThree();

  useEffect(() => {
    if (!group.current) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const tl = gsap.timeline();
    tl.from(group.current.scale, { x: 0, y: 0, z: 0, duration: 1.2, ease: "back.out(1.6)" });
    tl.from(camera.position, { y: -2, z: 13, duration: 1.4, ease: "power3.out" }, 0);
    return () => {
      tl.kill();
    };
  }, [camera]);

  // gentle mouse parallax sway
  useFrame((state) => {
    if (!group.current) return;
    const target = state.pointer.x * 0.35;
    group.current.rotation.y += (target - group.current.rotation.y) * 0.03;
  });

  return (
    <>
      <ambientLight intensity={0.7} />
      <directionalLight position={[5, 8, 4]} intensity={1.4} castShadow />
      <directionalLight position={[-5, 3, -4]} intensity={0.4} color="#7c3aed" />
      <group ref={group}>
        <Suspense fallback={null}>
          <Trunk />
          <Canopy count={mobile ? 80 : 140} />
          <FaceMedallion />
          <Labels onPick={onPick} />
        </Suspense>
        <Rain count={mobile ? 150 : 320} />
        {/* ground disc */}
        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1.3, 0]} receiveShadow>
          <circleGeometry args={[6, 48]} />
          <meshStandardMaterial color="#3f6b3e" roughness={1} transparent opacity={0.55} />
        </mesh>
      </group>
      <OrbitControls
        enablePan={false}
        enableZoom={false}
        minPolarAngle={Math.PI / 3}
        maxPolarAngle={Math.PI / 1.9}
        autoRotate
        autoRotateSpeed={0.5}
      />
    </>
  );
}

export default function TreeScene({ onPick }: { onPick: (href: string) => void }) {
  const mobile = typeof window !== "undefined" && window.matchMedia("(max-width: 640px)").matches;
  return (
    <Canvas
      camera={{ position: [0, 2.5, 9], fov: 45 }}
      dpr={[1, 1.6]}
      gl={{ alpha: true, antialias: true }}
      style={{ background: "transparent" }}
    >
      <Scene onPick={onPick} mobile={mobile} />
    </Canvas>
  );
}
