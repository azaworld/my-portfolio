"use client";

import { useCallback, useRef, useState } from "react";
import { ventures } from "../../content";
import Reveal from "../fx/Reveal";

const themeColor: Record<string, string> = {
  cyan: "var(--cyan)",
  violet: "var(--violet)",
  amber: "var(--amber)",
  magenta: "var(--magenta)",
  emerald: "#34d399",
};

const gradientBg: Record<string, string> = {
  cyan: "linear-gradient(135deg, rgba(6,182,212,0.18) 0%, rgba(6,182,212,0.04) 50%, rgba(10,16,36,0.95) 100%)",
  violet: "linear-gradient(135deg, rgba(124,58,237,0.18) 0%, rgba(124,58,237,0.04) 50%, rgba(10,16,36,0.95) 100%)",
  amber: "linear-gradient(135deg, rgba(245,158,11,0.18) 0%, rgba(245,158,11,0.04) 50%, rgba(10,16,36,0.95) 100%)",
  magenta: "linear-gradient(135deg, rgba(236,72,153,0.18) 0%, rgba(236,72,153,0.04) 50%, rgba(10,16,36,0.95) 100%)",
  emerald: "linear-gradient(135deg, rgba(52,211,153,0.18) 0%, rgba(52,211,153,0.04) 50%, rgba(10,16,36,0.95) 100%)",
};

function VentureCard({ v, i }: { v: (typeof ventures)[number]; i: number }) {
  const cardRef = useRef<HTMLAnchorElement>(null);
  const [mouse, setMouse] = useState({ x: 0.5, y: 0.5 });
  const [hovering, setHovering] = useState(false);
  const color = themeColor[v.theme] || "var(--cyan)";
  const bg = gradientBg[v.theme] || gradientBg.cyan;

  const handleMove = (e: React.MouseEvent) => {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;
    setMouse({
      x: (e.clientX - rect.left) / rect.width,
      y: (e.clientY - rect.top) / rect.height,
    });
  };

  return (
    <Reveal delay={(i % 3) * 100}>
      <a
        ref={cardRef}
        href={v.link}
        target="_blank"
        rel="noreferrer"
        onMouseEnter={() => setHovering(true)}
        onMouseLeave={() => setHovering(false)}
        onMouseMove={handleMove}
        className="group relative flex h-full flex-col overflow-hidden rounded-2xl border transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
        style={{
          borderColor: hovering
            ? `color-mix(in srgb, ${color} 60%, transparent)`
            : `color-mix(in srgb, ${color} 22%, transparent)`,
          background: bg,
          boxShadow: hovering
            ? `0 20px 60px -12px color-mix(in srgb, ${color} 35%, transparent), inset 0 1px 0 color-mix(in srgb, ${color} 15%, transparent)`
            : `inset 0 1px 0 color-mix(in srgb, ${color} 8%, transparent)`,
        }}
      >
        {/* Cursor spotlight */}
        <div
          className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          style={{
            background: `radial-gradient(400px circle at ${mouse.x * 100}% ${mouse.y * 100}%, color-mix(in srgb, ${color} 15%, transparent), transparent 50%)`,
          }}
        />

        {/* Top accent bar — thicker, more vivid */}
        <div
          className="h-[3px] w-full transition-opacity duration-500"
          style={{
            background: `linear-gradient(90deg, transparent 5%, ${color}, transparent 95%)`,
            opacity: hovering ? 1 : 0.7,
          }}
        />

        {/* Content */}
        <div className="relative flex flex-1 flex-col p-5">
          {/* Header */}
          <div className="flex items-center gap-3">
            {v.preview ? (
              <div
                className="h-14 w-14 shrink-0 overflow-hidden rounded-xl border-2 transition-all duration-500 group-hover:scale-110 group-hover:shadow-lg"
                style={{
                  borderColor: `color-mix(in srgb, ${color} 40%, transparent)`,
                  boxShadow: hovering ? `0 0 20px color-mix(in srgb, ${color} 30%, transparent)` : "none",
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={v.preview} alt={v.name} loading="lazy" className="h-full w-full object-cover" />
              </div>
            ) : (
              <span
                className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border-2 text-xl transition-all duration-500 group-hover:scale-110"
                style={{
                  backgroundColor: `color-mix(in srgb, ${color} 15%, transparent)`,
                  borderColor: `color-mix(in srgb, ${color} 30%, transparent)`,
                }}
              >
                {v.icon}
              </span>
            )}

            <div className="min-w-0 flex-1">
              <h3
                className="truncate font-display text-base font-bold transition-colors duration-300 group-hover:brightness-125"
                style={{ color }}
              >
                {v.name}
              </h3>
              <p className="mt-0.5 text-xs leading-snug text-muted/80">{v.tagline}</p>
            </div>

            <div
              className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-all duration-400 group-hover:scale-110"
              style={{
                backgroundColor: hovering ? `color-mix(in srgb, ${color} 20%, transparent)` : "transparent",
              }}
            >
              <svg
                viewBox="0 0 24 24"
                className="h-4 w-4 transition-all duration-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                style={{ color: hovering ? color : "rgba(255,255,255,0.3)" }}
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              >
                <path d="M7 17 17 7M7 7h10v10" />
              </svg>
            </div>
          </div>

          {/* Description */}
          <p className="mt-3.5 line-clamp-2 text-[13px] leading-relaxed text-muted/70 transition-colors duration-300 group-hover:text-muted">
            {v.description}
          </p>

          {/* Stat chip */}
          <div className="mt-auto pt-4">
            <span
              className="inline-flex items-center gap-2 rounded-full border px-3 py-1.5 font-mono text-[10px] font-semibold uppercase tracking-wider transition-all duration-500 group-hover:scale-105"
              style={{
                color,
                borderColor: `color-mix(in srgb, ${color} 30%, transparent)`,
                backgroundColor: `color-mix(in srgb, ${color} 10%, transparent)`,
              }}
            >
              <span
                className="h-2 w-2 animate-pulse rounded-full"
                style={{ backgroundColor: color }}
              />
              {v.stat}
            </span>
          </div>
        </div>

        {/* Shimmer sweep */}
        <div
          className="pointer-events-none absolute inset-0 -translate-x-full skew-x-[-20deg] bg-gradient-to-r from-transparent via-white/[0.04] to-transparent transition-transform duration-1000 ease-out group-hover:translate-x-full"
        />
      </a>
    </Reveal>
  );
}

export default function VentureStrip() {
  const [copied, setCopied] = useState(false);

  const copyLink = useCallback(() => {
    navigator.clipboard.writeText(`${window.location.origin}/#my-ventures`).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }, []);

  return (
    <section id="my-ventures" className="scroll-mt-28 py-16">
      <Reveal>
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-cyan">what i built</p>
            <h2 className="font-display mt-2 text-2xl font-bold tracking-tight sm:text-3xl">
              My Ventures
            </h2>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={copyLink}
              title="Copy shareable link"
              className="flex shrink-0 items-center gap-1.5 rounded-lg border border-white/10 bg-white/[0.04] px-3 py-1.5 font-mono text-[10px] uppercase tracking-widest text-muted transition-all hover:border-cyan/40 hover:text-cyan"
            >
              {copied ? (
                <>
                  <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>
                  Copied
                </>
              ) : (
                <>
                  <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
                  </svg>
                  Share
                </>
              )}
            </button>
            <a
              href="#ventures"
              className="hidden items-center gap-1 rounded-lg border border-white/10 bg-white/[0.04] px-3 py-1.5 font-mono text-[10px] uppercase tracking-widest text-muted transition-all hover:border-cyan/40 hover:text-cyan sm:flex"
            >
              See all details
              <svg viewBox="0 0 24 24" className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="m6 9 6 6 6-6" /></svg>
            </a>
          </div>
        </div>
      </Reveal>

      <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {ventures.map((v, i) => (
          <VentureCard key={v.name} v={v} i={i} />
        ))}
      </div>
    </section>
  );
}
