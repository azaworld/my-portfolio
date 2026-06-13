"use client";

import { useState } from "react";
import { audiobooks } from "../../content";
import Section from "../ui/Section";
import Reveal from "../fx/Reveal";
import TiltCard from "../ui/TiltCard";
import VideoLightbox from "../ui/VideoLightbox";
import { useGame } from "../game/GameProvider";

export default function Audiobooks() {
  const [open, setOpen] = useState<{ id: string; title: string } | null>(null);
  const { addXp } = useGame();

  const play = (v: { id: string; title: string }) => {
    setOpen(v);
    addXp(10, `listen-${v.id}`);
  };

  return (
    <Section id="audiobooks" kicker="founded world · listen2aza" title={<>The <span className="text-aurora">Audiobook</span> channel</>}>
      <p className="-mt-4 mb-8 max-w-2xl text-sm text-muted">
        Listen2AZA — I narrate books worth hearing in Bangla, from marketing classics to
        productivity. Stories and ideas you can press play on.{" "}
        <a href={audiobooks.channel} target="_blank" rel="noreferrer" className="text-cyan hover:underline">
          Subscribe on YouTube ↗
        </a>
      </p>

      <div className="grid gap-6 md:grid-cols-3">
        {audiobooks.videos.map((item, i) => (
          <Reveal key={item.id} delay={(i % 3) * 100}>
            <TiltCard className="h-full">
              <button
                onClick={() => play(item)}
                className="glass glow-border group block h-full w-full overflow-hidden rounded-2xl text-left"
                aria-label={`Play: ${item.title}`}
              >
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
                    <svg viewBox="0 0 24 24" className="h-6 w-6 fill-white" aria-hidden>
                      <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3a4.5 4.5 0 00-2.5-4.03v8.05A4.5 4.5 0 0016.5 12z" />
                    </svg>
                  </span>
                  <span className="absolute bottom-2 right-2 rounded bg-black/70 px-1.5 py-0.5 font-mono text-[10px] text-white">
                    🎧 audiobook
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

      <Reveal delay={120}>
        <div className="mt-8 text-center">
          <a
            href={audiobooks.channel}
            target="_blank"
            rel="noreferrer"
            className="glass glow-border inline-block rounded-xl px-6 py-3 text-sm font-medium transition-colors hover:text-magenta"
          >
            🎧 Browse the full audiobook library
          </a>
        </div>
      </Reveal>

      {open && <VideoLightbox id={open.id} title={open.title} onClose={() => setOpen(null)} />}
    </Section>
  );
}
