"use client";

import { useEffect, useRef, useState } from "react";
import Reveal from "../fx/Reveal";

// Full life story, year by year — an ascending staircase you can read at a glance.
// Each step = one chapter. Desktop: SVG staircase. It scrolls horizontally on
// small screens so nothing is ever cramped.
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
];

const COLORS = [
  "#64748B", "#6366F1", "#14B8A6", "#3B82F6", "#F43F5E", "#EC4899",
  "#10B981", "#F59E0B", "#22D3EE", "#BE185D", "#7C3AED",
];

export default function LifeGraph() {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  const [picked, setPicked] = useState<number | null>(null);

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

  // Staircase geometry
  const n = STORY.length;
  const W = 1080;
  const H = 340;
  const PAD = 46;
  const stepW = (W - PAD * 2) / (n - 1);
  const stepH = (H - 130) / (n - 1);
  const pt = (i: number) => ({ x: PAD + i * stepW, y: H - 74 - i * stepH });

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
              11 chapters, 2020 → today. Tap a step for the details.
            </p>
          </div>
          <p className="font-mono text-[10px] uppercase tracking-widest text-muted">level 1 → 11</p>
        </div>

        <div className="no-scrollbar -mx-5 mt-4 overflow-x-auto px-5 sm:mx-0 sm:px-0">
          <svg
            viewBox={`0 0 ${W} ${H}`}
            className="min-w-[760px] sm:min-w-0 sm:w-full"
            role="img"
            aria-label="Career staircase from QA Engineer in 2020 to Founder & CEO in 2025"
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
            </defs>

            {/* area under the staircase */}
            <path
              d={`${path} L ${pt(n - 1).x} ${H - 20} L ${pt(0).x} ${H - 20} Z`}
              fill="url(#life-fill)"
              opacity={inView ? 1 : 0}
              style={{ transition: "opacity 1.2s ease 0.6s" }}
            />

            {/* the climbing line — draws itself in */}
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
              style={{ transition: "stroke-dashoffset 2.2s cubic-bezier(0.5, 0, 0.2, 1) 0.2s" }}
            />

            {STORY.map((s, i) => {
              const p = pt(i);
              const above = i % 2 === 0;
              const open = picked === i;
              return (
                <g
                  key={i}
                  opacity={inView ? 1 : 0}
                  style={{ transition: `opacity 0.5s ease ${0.35 + i * 0.14}s`, cursor: "pointer" }}
                  onClick={() => setPicked(open ? null : i)}
                >
                  {/* node */}
                  <circle cx={p.x} cy={p.y} r={open ? 17 : 14} fill="#0B1026" stroke={COLORS[i]} strokeWidth="2.5" />
                  <text x={p.x} y={p.y + 5} textAnchor="middle" fontSize="14">{s.icon}</text>

                  {/* year — always visible under the node */}
                  <text x={p.x} y={H - 40} textAnchor="middle" fontSize="12.5" fontWeight="700" fill={COLORS[i]}>
                    {s.year}
                  </text>
                  {/* level badge */}
                  <text x={p.x} y={H - 24} textAnchor="middle" fontSize="9.5" fill="#8B93B0" fontFamily="monospace">
                    lv {s.lv}
                  </text>

                  {/* role + org — alternate above/below the step to avoid overlap */}
                  <text
                    x={p.x}
                    y={above ? p.y - 40 : p.y + 34}
                    textAnchor="middle"
                    fontSize="11"
                    fontWeight="700"
                    fill="#E7EAF5"
                  >
                    {s.role}
                  </text>
                  <text
                    x={p.x}
                    y={above ? p.y - 27 : p.y + 47}
                    textAnchor="middle"
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
