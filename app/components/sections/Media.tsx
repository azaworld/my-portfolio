"use client";

import { useState } from "react";
import { azademySocials, media, mediaPlaylist, podcast } from "../../content";
import Section from "../ui/Section";
import Reveal from "../fx/Reveal";
import TiltCard from "../ui/TiltCard";
import VideoLightbox from "../ui/VideoLightbox";
import { useGame } from "../game/GameProvider";

export default function Media() {
  const [open, setOpen] = useState<{ id: string; title: string } | null>(null);
  const { addXp } = useGame();

  const play = (v: { id: string; title: string }) => {
    setOpen(v);
    addXp(10, `watch-${v.id}`);
  };

  return (
    <Section id="media" kicker="academy & podcast" title={<><span className="text-aurora">AZADEMY</span></>}>
      <p className="-mt-4 mb-8 max-w-2xl text-sm text-muted">
        My academy where learning meets earning. Its podcast — <strong className="text-text">The AZA Execution Show</strong>{" "}
        — runs real technical interviews from a hiring manager&apos;s seat, so you can see exactly how I
        evaluate engineers and how strong candidates answer.{" "}
        <a href={podcast.channel} target="_blank" rel="noreferrer" className="text-cyan hover:underline">
          Watch on YouTube ↗
        </a>
      </p>

      <div className="grid gap-6 md:grid-cols-3">
        {media.map((item, i) => (
          <Reveal key={item.id} delay={(i % 3) * 100}>
            <TiltCard className="h-full">
              <button
                onClick={() => play(item)}
                className="glass glow-border group block h-full w-full overflow-hidden rounded-2xl text-left"
                aria-label={`Play: ${item.title}`}
              >
                {/* Real YouTube thumbnail */}
                <div className="relative aspect-video overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={`https://i.ytimg.com/vi/${item.id}/hqdefault.jpg`}
                    alt=""
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" aria-hidden />
                  <span className="absolute left-1/2 top-1/2 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white/15 backdrop-blur transition-transform duration-300 group-hover:scale-110">
                    <span className="absolute inset-0 rounded-full bg-white/15" style={{ animation: "pulse-ring 2s ease-out infinite" }} aria-hidden />
                    <svg viewBox="0 0 24 24" className="ml-1 h-6 w-6 fill-white" aria-hidden>
                      <path d="M8 5.14v14l11-7-11-7z" />
                    </svg>
                  </span>
                  <span className="absolute bottom-2 right-2 rounded bg-black/70 px-1.5 py-0.5 font-mono text-[10px] text-white">
                    ▶ interview
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="text-sm font-semibold leading-snug">{item.title}</h3>
                  <p className="mt-2 text-xs leading-relaxed text-muted">{item.description}</p>
                </div>
              </button>
            </TiltCard>
          </Reveal>
        ))}
      </div>

      {/* Watch the full playlist */}
      <Reveal delay={120}>
        <div className="mt-8 text-center">
          <a
            href={mediaPlaylist}
            target="_blank"
            rel="noreferrer"
            className="glass glow-border inline-block rounded-xl px-6 py-3 text-sm font-medium transition-colors hover:text-cyan"
          >
            ▶ Watch the full interview series on YouTube
          </a>
        </div>
      </Reveal>

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

      {open && <VideoLightbox id={open.id} title={open.title} onClose={() => setOpen(null)} />}
    </Section>
  );
}
