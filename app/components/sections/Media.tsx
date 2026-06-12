"use client";

import { azademySocials, media } from "../../content";
import Section from "../ui/Section";
import Reveal from "../fx/Reveal";
import TiltCard from "../ui/TiltCard";

export default function Media() {
  return (
    <Section id="media" kicker="broadcast archive" title={<>Content & <span className="text-aurora">Media</span></>}>
      <div className="grid gap-6 md:grid-cols-3">
        {media.map((item, i) => (
          <Reveal key={item.title} delay={i * 120}>
            <TiltCard className="h-full">
              <a
                href={item.url.startsWith("{{") ? "#media" : item.url}
                target={item.url.startsWith("{{") ? undefined : "_blank"}
                rel="noreferrer"
                className="glass glow-border group block h-full overflow-hidden rounded-2xl"
              >
                {/* Thumbnail area — replace with real video thumbnails */}
                <div className="relative flex aspect-video items-center justify-center bg-gradient-to-br from-violet/25 via-bg-elevated to-cyan/20">
                  <span className="relative flex h-14 w-14 items-center justify-center rounded-full bg-white/15 backdrop-blur transition-transform duration-300 group-hover:scale-110">
                    <span className="absolute inset-0 rounded-full bg-white/15" style={{ animation: "pulse-ring 2s ease-out infinite" }} aria-hidden />
                    <svg viewBox="0 0 24 24" className="ml-1 h-6 w-6 fill-white" aria-hidden>
                      <path d="M8 5.14v14l11-7-11-7z" />
                    </svg>
                  </span>
                  <span className="absolute bottom-2 right-2 rounded bg-black/60 px-1.5 py-0.5 font-mono text-[10px] text-white">
                    {item.duration}
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="text-sm font-semibold leading-snug">{item.title}</h3>
                  <p className="mt-2 text-xs leading-relaxed text-muted">{item.description}</p>
                </div>
              </a>
            </TiltCard>
          </Reveal>
        ))}
      </div>

      {/* AZADEMY everywhere */}
      <Reveal delay={200}>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-2.5">
          <span className="mr-1 font-mono text-xs uppercase tracking-[0.25em] text-muted">
            Follow AZADEMY
          </span>
          {azademySocials.map((s) => (
            <a
              key={s.label}
              href={s.url}
              target="_blank"
              rel="noreferrer"
              className="glass rounded-full px-3.5 py-1.5 text-xs text-muted transition-all duration-300 hover:-translate-y-0.5 hover:border-amber hover:text-amber"
            >
              {s.label}
            </a>
          ))}
        </div>
      </Reveal>
    </Section>
  );
}
