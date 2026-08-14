"use client";

import { useEffect, useRef, useState } from "react";
import Reveal from "../fx/Reveal";

// Full life story, year by year — an ascending staircase you can read at a glance.
// Animated: the line draws itself bottom→top, each step rises in, and a glowing
// orb continuously climbs the staircase. Scrolls horizontally on small screens.
const STORY = [
  { year: "2020", icon: "🎮", role: "QA Engineer (part-time)", org: "CarryBags · London", lv: 1 },
  { year: "2021", icon: "🌍", role: "Augmented Sr. SQA", org: "Intellex via TCS · US", lv: 2 },
  { year: "2021", icon: "🐣", role: "Jr. QA Engineer", org: "DSI · OpenCRVS + IPEMIS", lv: 3 },
  { year: "2022", icon: "💳", role: "Sr. Reliability Engineer", org: "Mastercard", lv: 4 },
  { year: "2022", icon: "🛡️", role: "QA Engineer & Lead", org: "REVE · govt. systems", lv: 5 },
  { year: "2023", icon: "🚑", role: "QA Engineer I", org: "Kinetik · New York", lv: 6 },
  { year: "2024", icon: "📱", role: "QA Engineer", org: "Grameenphone · MyGP", lv: 7 },
  { year: "2024", icon: "🛟", role: "Automation Eng II", org: "All Gen Tech · NY", lv: 8 },
  { year: "2024", icon: "🎯", role: "Technical Project Manager", org: "Platformz", lv: 9 },
  { year: "2025", icon: "🧠", role: "Sr. SDET", org: "Kintsugi · SF", lv: 10 },
  { year: "2025", icon: "👑", role: "Founder & CEO", org: "AZAI Labs · AZADEMY", lv: 11 },
  { year: "2026", icon: "🚀", role: "Co-Founder & CTO", org: "Upward · upwardbd.com", lv: 12 },
];

const COLORS = [
  "#64748B", "#6366F1", "#14B8A6", "#3B82F6", "#F43F5E", "#EC4899",
  "#10B981", "#F59E0B", "#22D3EE", "#BE185D", "#7C3AED", "#38BDF8",
];

export default function LifeGraph() {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => e.isIntersecting && (setInView(true), obs.disconnect()),
      { threshold: 0.25 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  // Staircase geometry — taller canvas so labels never touch the year axis,
  // wider side padding so edge labels never clip.
  const n = STORY.length;
  const W = 1080;
  const H = 390;
  const PAD = 46;
  const stepW = (W - PAD * 2) / (n - 1);
  const stepH = (H - 200) / (n - 1);
  const pt = (i: number) => ({ x: PAD + i * stepW, y: H - 116 - i * stepH });
  // keep edge labels inside the canvas
  const labelX = (x: number) => Math.min(Math.max(x, 84), W - 84);

  // staircase path: horizontal run then rise
  let path = `M ${pt(0).x} ${pt(0).y}`;
  for (let i = 1; i < n; i++) {
    const a = pt(i - 1);
    const b = pt(i);
    path += ` L ${b.x - stepW * 0.35} ${a.y} L ${b.x} ${b.y}`;
  }

  return (
    <Reveal>
      <div ref={ref} className="glass mt-6 overflow-hidden rounded-2xl p-5 sm:p-6">
        <div className="flex flex-wrap items-baseline justify-between gap-2">
          <div>
            <h3 className="text-sm font-semibold sm:text-base">📈 The full story — year by year</h3>
            <p className="mt-1 text-xs text-muted sm:text-sm">
              12 chapters, 2020 → today. Watch the climb — bottom to top.
            </p>
          </div>
          <p className="font-mono text-[10px] uppercase tracking-widest text-muted">level 1 → 12</p>
        </div>

        {/* The experience math — actual vs combined, and exactly how it's counted */}
        <div className="mt-4 flex flex-wrap gap-2">
          <span className="flex items-center gap-1.5 rounded-full border border-white/12 bg-white/[0.04] px-3 py-1.5 text-xs text-muted">
            🗓 <b className="text-text">6+ yrs</b>&nbsp;actual calendar time (Jul 2020 → today)
          </span>
          <span className="flex items-center gap-1.5 rounded-full border border-cyan/30 bg-cyan/10 px-3 py-1.5 text-xs text-cyan">
            Σ <b>≈16.5 yrs</b>&nbsp;combined — all 12 role durations added up
          </span>
          <span className="flex items-center gap-1.5 rounded-full border border-amber/30 bg-amber/10 px-3 py-1.5 text-xs text-amber">
            ⚡ peak: <b>5 roles at once</b>&nbsp;(2024–25)
          </span>
        </div>
        <p className="mt-2 font-mono text-[11px] leading-relaxed text-muted sm:text-xs">
          <span className="text-text">the math:</span>{" "}
          <span className="text-cyan">Σ 12 role durations = 198 mo ≈ 16.5 yrs</span>
          {"  ÷  "}
          <span className="text-text">72 mo calendar (2020→now)</span>
          {"  =  "}
          <span className="text-amber">2.7× roles in parallel, on average</span>
        </p>
        <div>
        </div>

        <div className="no-scrollbar -mx-5 mt-4 overflow-x-auto px-5 sm:mx-0 sm:px-0">
          <svg
            viewBox={`0 0 ${W} ${H}`}
            className="min-w-[820px] sm:min-w-0 sm:w-full"
            role="img"
            aria-label="Career staircase from QA Engineer in 2020 to Co-Founder & CTO of Upward in 2026"
          >
            <defs>
              <linearGradient id="life-line" x1="0" y1="1" x2="1" y2="0">
                <stop offset="0%" stopColor="#22D3EE" />
                <stop offset="55%" stopColor="#7C3AED" />
                <stop offset="100%" stopColor="#F472B6" />
              </linearGradient>
              <linearGradient id="life-fill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#7C3AED" stopOpacity="0.22" />
                <stop offset="100%" stopColor="#7C3AED" stopOpacity="0" />
              </linearGradient>
              <radialGradient id="climber-glow">
                <stop offset="0%" stopColor="#22D3EE" stopOpacity="0.9" />
                <stop offset="100%" stopColor="#22D3EE" stopOpacity="0" />
              </radialGradient>
            </defs>

            {/* area under the staircase */}
            <path
              d={`${path} L ${pt(n - 1).x} ${H - 44} L ${pt(0).x} ${H - 44} Z`}
              fill="url(#life-fill)"
              opacity={inView ? 1 : 0}
              style={{ transition: "opacity 1.2s ease 0.6s" }}
            />

            {/* the climbing line — draws itself in, bottom to top */}
            <path
              d={path}
              fill="none"
              stroke="url(#life-line)"
              strokeWidth="3.5"
              strokeLinejoin="round"
              strokeLinecap="round"
              pathLength={1}
              strokeDasharray={1}
              strokeDashoffset={inView ? 0 : 1}
              style={{ transition: "stroke-dashoffset 2.4s cubic-bezier(0.5, 0, 0.2, 1) 0.2s" }}
            />

            {/* glowing orb forever climbing the stairs, bottom → top */}
            {inView && (
              <g>
                <circle r="14" fill="url(#climber-glow)">
                  <animateMotion dur="8s" repeatCount="indefinite" path={path} keyPoints="0;1" keyTimes="0;1" calcMode="linear" />
                </circle>
                <circle r="5" fill="#22D3EE">
                  <animateMotion dur="8s" repeatCount="indefinite" path={path} keyPoints="0;1" keyTimes="0;1" calcMode="linear" />
                </circle>
              </g>
            )}

            {STORY.map((s, i) => {
              const p = pt(i);
              const above = i % 2 === 0;
              // Edge nodes anchor outward so their labels never crowd a neighbor:
              // first node hugs the left edge, last node hugs the right edge.
              const isFirst = i === 0;
              const isLast = i === n - 1;
              const lx = isFirst ? 10 : isLast ? W - 10 : labelX(p.x);
              const anchor = isFirst ? "start" : isLast ? "end" : "middle";
              return (
                <g
                  key={i}
                  opacity={inView ? 1 : 0}
                  style={{
                    transform: inView ? "translateY(0)" : "translateY(26px)",
                    transition: `opacity 0.55s ease ${0.3 + i * 0.16}s, transform 0.55s cubic-bezier(0.22, 1, 0.36, 1) ${0.3 + i * 0.16}s`,
                  }}
                >
                  {/* node */}
                  <circle cx={p.x} cy={p.y} r={14} fill="#0B1026" stroke={COLORS[i]} strokeWidth="2.5" />
                  <text x={p.x} y={p.y + 5} textAnchor="middle" fontSize="14">{s.icon}</text>

                  {/* year + level — fixed rows at the bottom, clear of all labels */}
                  <text x={p.x} y={H - 20} textAnchor="middle" fontSize="12.5" fontWeight="700" fill={COLORS[i]}>
                    {s.year}
                  </text>
                  <text x={p.x} y={H - 5} textAnchor="middle" fontSize="9.5" fill="#8B93B0" fontFamily="monospace">
                    lv {s.lv}
                  </text>

                  {/* role + org — alternate above/below the step to avoid overlap */}
                  <text
                    x={lx}
                    y={above ? p.y - 40 : p.y + 34}
                    textAnchor={anchor}
                    fontSize="11"
                    fontWeight="700"
                    fill="#E7EAF5"
                  >
                    {s.role}
                  </text>
                  <text
                    x={lx}
                    y={above ? p.y - 27 : p.y + 47}
                    textAnchor={anchor}
                    fontSize="9.5"
                    fill="#8B93B0"
                  >
                    {s.org}
                  </text>

                  {/* connector from label to node */}
                  <line
                    x1={p.x} y1={above ? p.y - 22 : p.y + 22}
                    x2={p.x} y2={above ? p.y - 16 : p.y + 16}
                    stroke={COLORS[i]} strokeWidth="1.5" opacity="0.6"
                  />
                </g>
              );
            })}
          </svg>
        </div>
      </div>
    </Reveal>
  );
}
