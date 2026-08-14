"use client";

import { useCallback, useState } from "react";
import { ventures } from "../../content";
import Reveal from "../fx/Reveal";

const themeColor: Record<string, string> = {
  cyan: "var(--cyan)",
  violet: "var(--violet)",
  amber: "var(--amber)",
  magenta: "var(--magenta)",
  emerald: "#34d399",
};

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
        <div className="flex items-center justify-between gap-4">
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

      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {ventures.map((v, i) => {
          const color = themeColor[v.theme] || "var(--cyan)";
          return (
            <Reveal key={v.name} delay={(i % 3) * 80}>
              <a
                href={v.link}
                target="_blank"
                rel="noreferrer"
                className="group relative flex items-start gap-4 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.06] hover:shadow-lg"
                style={{ borderColor: `color-mix(in srgb, ${color} 20%, transparent)` }}
              >
                <span
                  className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full opacity-15 blur-2xl transition-opacity group-hover:opacity-30"
                  style={{ background: color }}
                  aria-hidden
                />

                {v.preview ? (
                  <div className="h-14 w-14 shrink-0 overflow-hidden rounded-xl border border-white/10">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={v.preview}
                      alt={v.name}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                ) : (
                  <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl text-2xl" style={{ backgroundColor: `color-mix(in srgb, ${color} 15%, transparent)` }}>
                    {v.icon}
                  </span>
                )}

                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-2">
                    <h3 className="truncate font-display text-sm font-bold transition-colors group-hover:text-white" style={{ color }}>
                      {v.name}
                    </h3>
                    <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 shrink-0 text-muted/50 transition-all group-hover:translate-x-0.5 group-hover:text-white/70" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                      <path d="M7 17 17 7M7 7h10v10" />
                    </svg>
                  </div>
                  <p className="mt-0.5 text-xs text-muted">{v.tagline}</p>
                  <p className="mt-2 rounded-full border px-2 py-0.5 font-mono text-[10px]" style={{ color, borderColor: `color-mix(in srgb, ${color} 30%, transparent)`, backgroundColor: `color-mix(in srgb, ${color} 8%, transparent)` }}>
                    {v.stat}
                  </p>
                </div>
              </a>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
