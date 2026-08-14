"use client";

import { ventures } from "../../content";
import Section from "../ui/Section";
import Reveal from "../fx/Reveal";
import TiltCard from "../ui/TiltCard";

const THEME_STYLES = {
  violet: { color: "var(--violet)", emoji: "🪐" },
  cyan: { color: "var(--cyan)", emoji: "🌊" },
  amber: { color: "var(--amber)", emoji: "☀️" },
  magenta: { color: "var(--magenta)", emoji: "🎧" },
  emerald: { color: "#34d399", emoji: "🌱" },
} as const;

export default function Ventures() {
  return (
    <Section id="ventures" kicker="founded worlds" title={<>Entre<span className="text-aurora">preneurship</span></>}>
      <p className="-mt-4 mb-8 max-w-xl text-sm text-muted">
        Six ventures, all live — tap a preview to visit the real thing.
      </p>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {ventures.map((v, i) => {
          const t = THEME_STYLES[v.theme];
          return (
            <Reveal key={v.name} delay={i * 130}>
              <TiltCard className="h-full">
                <article
                  className="glass group relative flex h-full flex-col overflow-hidden rounded-2xl"
                  style={{ borderColor: `color-mix(in srgb, ${t.color} 35%, transparent)` }}
                >
                  {/* Live site preview — the venture's real front door */}
                  {"preview" in v && v.preview && (
                    <a
                      href={v.link}
                      target="_blank"
                      rel="noreferrer"
                      className="relative block aspect-[8/5] overflow-hidden border-b"
                      style={{ borderColor: `color-mix(in srgb, ${t.color} 25%, transparent)` }}
                      aria-label={`Visit ${v.name}`}
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={v.preview}
                        alt={`${v.name} — live site preview`}
                        loading="lazy"
                        className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                      />
                      <span
                        className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent opacity-80 transition-opacity duration-300 group-hover:opacity-40"
                        aria-hidden
                      />
                      {/* live chip */}
                      <span className="absolute left-3 top-3 flex items-center gap-1.5 rounded-full bg-black/70 px-2.5 py-1 font-mono text-[10px] uppercase tracking-widest text-white backdrop-blur">
                        <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" aria-hidden />
                        live
                      </span>
                      {/* icon badge */}
                      <span
                        className="absolute bottom-3 left-3 flex h-10 w-10 items-center justify-center rounded-xl text-xl backdrop-blur"
                        style={{ background: `color-mix(in srgb, ${t.color} 30%, rgba(0,0,0,0.6))` }}
                        aria-hidden
                      >
                        {"icon" in v && v.icon ? v.icon : t.emoji}
                      </span>
                    </a>
                  )}

                  <div className="relative flex flex-1 flex-col p-5">
                    {/* World glow */}
                    <div
                      className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full opacity-20 blur-2xl"
                      style={{ background: t.color }}
                      aria-hidden
                    />
                    <div className="flex items-baseline justify-between gap-2">
                      <h3 className="font-display text-lg font-bold" style={{ color: t.color }}>
                        {v.name}
                      </h3>
                      {"stat" in v && v.stat && (
                        <span className="shrink-0 rounded-full bg-white/5 px-2.5 py-0.5 font-mono text-[10px] text-muted">
                          {v.stat}
                        </span>
                      )}
                    </div>
                    <p className="mt-1 text-sm font-medium">{v.tagline}</p>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">{v.description}</p>
                    {v.link && !v.link.startsWith("{{") && (
                      <a
                        href={v.link}
                        target="_blank"
                        rel="noreferrer"
                        className="mt-4 inline-block text-sm font-medium hover:underline"
                        style={{ color: t.color }}
                      >
                        Visit world ↗
                      </a>
                    )}
                  </div>
                </article>
              </TiltCard>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
