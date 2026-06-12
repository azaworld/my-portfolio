"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import portrait from "../../assets/arifuz.jpg";
import { characterStats, credentials, journey, originStory, profile } from "../../content";
import Section from "../ui/Section";
import Reveal from "../fx/Reveal";

// The level-up journey: zigzag quest map with a glowing spine.
function Journey() {
  return (
    <div className="relative mt-16">
      <p className="font-mono text-xs uppercase tracking-[0.3em] text-cyan">quest map</p>
      <h3 className="font-display mt-2 text-2xl font-bold">
        The <span className="text-aurora">level-up</span> journey
      </h3>

      <div className="relative mt-10">
        {/* glowing spine */}
        <div
          className="absolute bottom-2 left-[19px] top-2 w-0.5 sm:left-1/2 sm:-translate-x-1/2"
          style={{
            background: "linear-gradient(180deg, var(--violet), var(--cyan), var(--magenta), var(--amber))",
            boxShadow: "0 0 14px var(--glow)",
          }}
          aria-hidden
        />

        <ol className="space-y-10">
          {journey.map((step, i) => {
            const left = i % 2 === 0;
            return (
              <li key={step.lv} className="relative sm:grid sm:grid-cols-2 sm:gap-12">
                {/* node orb on the spine */}
                <span
                  className="absolute left-0 top-1 flex h-10 w-10 items-center justify-center rounded-full border-2 border-cyan bg-bg text-base shadow-[0_0_18px_var(--glow)] sm:left-1/2 sm:-translate-x-1/2"
                  aria-hidden
                >
                  {step.icon}
                </span>

                <Reveal
                  variant={left ? "left" : "right"}
                  className={`ml-14 sm:ml-0 ${left ? "sm:col-start-1 sm:pr-10 sm:text-right" : "sm:col-start-2 sm:pl-10"}`}
                >
                  <div
                    className={`glass inline-block rounded-2xl p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan/40 ${
                      step.lv === 9 ? "glow-border" : ""
                    }`}
                  >
                    <p className={`flex items-center gap-2 ${left ? "sm:justify-end" : ""}`}>
                      <span className="rounded-md bg-gradient-to-r from-violet to-cyan px-2 py-0.5 font-mono text-[10px] font-bold text-white">
                        LV{step.lv}
                      </span>
                      <span className="font-mono text-xs text-muted">{step.year}</span>
                    </p>
                    <h4 className="mt-2 font-semibold leading-snug">{step.title}</h4>
                    <p className="mt-0.5 text-sm font-medium text-cyan">{step.where}</p>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted">{step.note}</p>
                  </div>
                </Reveal>
              </li>
            );
          })}
        </ol>
      </div>
    </div>
  );
}

// RPG stat bar that fills when scrolled into view.
function StatBar({ name, value, color, delay }: { name: string; value: number; color: string; delay: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [filled, setFilled] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setFilled(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref}>
      <div className="flex items-center justify-between text-sm">
        <span className="font-medium">{name}</span>
        <span className="font-mono text-xs text-muted">{value}/100</span>
      </div>
      <div className="mt-2 h-2.5 overflow-hidden rounded-full bg-white/10" role="img" aria-label={`${name}: ${value} out of 100`}>
        <div
          className="h-full rounded-full transition-[width] duration-[1.4s] ease-out"
          style={{
            width: filled ? `${value}%` : "0%",
            background: `linear-gradient(90deg, ${color}, color-mix(in srgb, ${color} 50%, white))`,
            transitionDelay: `${delay}ms`,
            boxShadow: `0 0 12px ${color}`,
          }}
        />
      </div>
    </div>
  );
}

export default function About() {
  return (
    <Section id="about" kicker="character bio" title={<>Origin <span className="text-aurora">Story</span></>}>
      <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr]">
        <div className="space-y-5 leading-relaxed text-muted">
          {originStory.map((paragraph, i) => (
            <Reveal key={paragraph.slice(0, 24)} delay={i * 120}>
              <p>{paragraph}</p>
            </Reveal>
          ))}
          <Reveal delay={360}>
            <p className="font-mono text-xs">
              📍 {profile.location} · 🎙 Podcaster · 🤖 AI Tech Instructor · 🌱 Foundation founder
            </p>
          </Reveal>
        </div>

        <Reveal variant="right">
          <div className="glass glow-border rounded-2xl p-6">
            <div className="mb-5 flex items-center gap-4">
              <div className="portrait-duotone h-16 w-16 shrink-0 !rounded-full ring-2 ring-violet/60">
                <Image src={portrait} alt="" className="h-full w-full object-cover" />
              </div>
              <div>
                <p className="font-display font-bold leading-tight">{profile.name}</p>
                <p className="font-mono text-[10px] uppercase tracking-widest text-cyan">player one</p>
              </div>
            </div>
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-muted">Character stats</p>
            <div className="mt-5 space-y-5">
              {characterStats.map((stat, i) => (
                <StatBar key={stat.name} name={stat.name} value={stat.value} color={stat.color} delay={i * 150} />
              ))}
            </div>
            <p className="mt-5 border-t border-white/10 pt-4 font-mono text-[11px] text-muted">
              CLASS: Technical Program Manager · SPEC: Cross-functional team builder
            </p>

            <ul className="mt-4 space-y-2.5 border-t border-white/10 pt-4">
              {credentials.map((cred) => (
                <li key={cred.text} className="flex items-start gap-2 text-xs leading-relaxed text-muted">
                  <span aria-hidden>{cred.icon}</span>
                  {cred.link ? (
                    <a href={cred.link} target="_blank" rel="noreferrer" className="transition-colors hover:text-cyan hover:underline">
                      {cred.text} ↗
                    </a>
                  ) : (
                    <span>{cred.text}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>

      <Journey />
    </Section>
  );
}
