"use client";

import { premium } from "../../content";
import Section from "../ui/Section";
import Reveal from "../fx/Reveal";
import TiltCard from "../ui/TiltCard";
import Magnetic from "../fx/Magnetic";

export default function Premium() {
  return (
    <Section
      id="premium"
      kicker="✦ premium · limited slots"
      title={
        <>
          Work With Me — <span className="bg-gradient-to-r from-amber via-[#fcd34d] to-amber bg-clip-text text-transparent">Premium</span>
        </>
      }
    >
      <div className="-mt-4 mb-8 max-w-2xl">
        <p className="text-sm leading-relaxed text-muted">{premium.intro}</p>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {premium.tiers.map((t, i) => (
          <Reveal key={t.name} delay={(i % 3) * 110}>
            <TiltCard className="h-full">
              <article
                className={`relative flex h-full flex-col overflow-hidden rounded-2xl p-6 ${
                  t.highlight ? "border-2 border-amber/50 bg-amber/[0.06]" : "glass"
                }`}
              >
                {t.highlight && (
                  <span className="absolute right-4 top-4 rounded-full bg-amber px-2.5 py-0.5 font-mono text-[10px] font-bold uppercase tracking-widest text-[#0b1026]">
                    Most wanted
                  </span>
                )}
                <span
                  className="pointer-events-none absolute -right-12 -top-12 h-36 w-36 rounded-full opacity-25 blur-2xl"
                  style={{ background: "var(--amber)" }}
                  aria-hidden
                />
                <p className="text-3xl" aria-hidden>{t.icon}</p>
                <h3 className="font-display mt-3 text-lg font-bold text-amber">{t.name}</h3>
                <p className="mt-1 font-mono text-[11px] uppercase tracking-widest text-muted">{t.price}</p>
                <ul className="mt-4 flex-1 space-y-2">
                  {t.points.map((p) => (
                    <li key={p} className="flex gap-2 text-sm leading-relaxed text-muted">
                      <span className="text-amber" aria-hidden>✦</span>
                      {p}
                    </li>
                  ))}
                </ul>
              </article>
            </TiltCard>
          </Reveal>
        ))}
      </div>

      {/* Perks + CTA */}
      <Reveal delay={150}>
        <div className="mt-8 flex flex-col items-center gap-6 rounded-2xl border border-amber/30 bg-gradient-to-b from-amber/[0.07] to-transparent p-8 text-center">
          <p className="font-display text-lg font-semibold sm:text-xl">{premium.tagline}</p>
          <ul className="flex flex-wrap justify-center gap-2.5">
            {premium.perks.map((perk) => (
              <li key={perk} className="rounded-full border border-amber/30 bg-amber/10 px-3.5 py-1.5 text-xs text-amber">
                ✦ {perk}
              </li>
            ))}
          </ul>
          <Magnetic>
            <a
              href="#contact"
              className="inline-block rounded-xl bg-gradient-to-r from-amber via-[#fcd34d] to-amber bg-[length:200%_auto] px-8 py-3.5 text-sm font-bold text-[#0b1026] shadow-lg shadow-amber/30 transition-all hover:bg-right"
            >
              Apply for a premium slot →
            </a>
          </Magnetic>
        </div>
      </Reveal>
    </Section>
  );
}
