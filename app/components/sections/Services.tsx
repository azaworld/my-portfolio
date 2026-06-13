"use client";

import { services, availability, hireChannels } from "../../content";
import Section from "../ui/Section";
import Reveal from "../fx/Reveal";
import TiltCard from "../ui/TiltCard";
import Magnetic from "../fx/Magnetic";

export default function Services() {
  return (
    <Section id="services" kicker="hire me" title={<>Work With <span className="text-aurora">Me</span></>}>
      <div className="-mt-4 mb-8 flex flex-wrap items-center gap-3">
        <span className="inline-flex items-center gap-2 rounded-full border border-[#34d399]/40 bg-[#34d399]/10 px-3.5 py-1.5 text-sm text-[#34d399]">
          <span className="h-2 w-2 animate-pulse rounded-full bg-[#34d399]" aria-hidden />
          {availability.status}
        </span>
        <span className="text-sm text-muted">{availability.note}</span>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        {services.map((s, i) => (
          <Reveal key={s.name} delay={(i % 2) * 120}>
            <TiltCard className="h-full">
              <article
                className="glass relative flex h-full flex-col overflow-hidden rounded-2xl p-6"
                style={{ borderColor: `color-mix(in srgb, ${s.accent} 30%, transparent)` }}
              >
                <div
                  className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full opacity-20 blur-2xl"
                  style={{ background: s.accent }}
                  aria-hidden
                />
                <p className="text-3xl" aria-hidden>{s.icon}</p>
                <h3 className="font-display mt-3 text-lg font-bold" style={{ color: s.accent }}>
                  {s.name}
                </h3>
                <p className="mt-1 text-sm font-medium">{s.tagline}</p>
                <ul className="mt-4 space-y-2">
                  {s.points.map((p) => (
                    <li key={p} className="flex gap-2 text-sm leading-relaxed text-muted">
                      <span style={{ color: s.accent }} aria-hidden>▸</span>
                      {p}
                    </li>
                  ))}
                </ul>
                <p className="mt-4 border-t border-white/10 pt-3 text-xs leading-relaxed text-muted">
                  <span className="font-mono uppercase tracking-widest text-[10px]" style={{ color: s.accent }}>
                    ideal for ·{" "}
                  </span>
                  {s.ideal}
                </p>
              </article>
            </TiltCard>
          </Reveal>
        ))}
      </div>

      {/* Hire hub — direct channels */}
      <Reveal delay={150}>
        <div className="glass glow-border mt-8 rounded-2xl p-7 sm:p-9">
          <div className="text-center">
            <h3 className="font-display text-xl font-bold sm:text-2xl">
              Ready to <span className="text-aurora">hire</span>?
            </h3>
            <p className="mx-auto mt-2 max-w-md text-sm leading-relaxed text-muted">
              Pick the channel that suits you — see my gigs and reviews, send a brief, or just say hi.
              I reply within 24 hours.
            </p>
          </div>

          <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {hireChannels.map((c) => (
              <a
                key={c.label}
                href={c.href}
                target={c.href.startsWith("mailto:") ? undefined : "_blank"}
                rel="noreferrer"
                className="group flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.04] p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan/40"
              >
                <span className="text-2xl" aria-hidden>{c.icon}</span>
                <span className="min-w-0">
                  <span className="block text-sm font-semibold transition-colors group-hover:text-cyan">{c.label}</span>
                  <span className="block truncate text-xs text-muted">{c.sub}</span>
                </span>
              </a>
            ))}
          </div>

          <div className="mt-7 text-center">
            <Magnetic>
              <a
                href="#contact"
                className="inline-block rounded-xl bg-gradient-to-r from-violet via-magenta to-amber bg-[length:200%_auto] px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-violet/30 transition-all hover:bg-right"
              >
                Start a quest →
              </a>
            </Magnetic>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
