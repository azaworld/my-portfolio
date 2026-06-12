"use client";

import { useEffect, useRef, useState } from "react";
import { characterStats, originStory, profile } from "../../content";
import Section from "../ui/Section";
import Reveal from "../fx/Reveal";

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
              📍 {profile.location} · 🎙 Podcaster · 🤖 AI Instructor
            </p>
          </Reveal>
        </div>

        <Reveal variant="right">
          <div className="glass glow-border rounded-2xl p-6">
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-muted">Character stats</p>
            <div className="mt-5 space-y-5">
              {characterStats.map((stat, i) => (
                <StatBar key={stat.name} name={stat.name} value={stat.value} color={stat.color} delay={i * 150} />
              ))}
            </div>
            <p className="mt-5 border-t border-white/10 pt-4 font-mono text-[11px] text-muted">
              CLASS: Technical Program Manager · SPEC: Cross-functional team builder
            </p>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
