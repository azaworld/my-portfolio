"use client";

import { useEffect, useState } from "react";
import { azademySocials, media, mediaPlaylist, profile } from "../../content";
import Section from "../ui/Section";
import Reveal from "../fx/Reveal";
import TiltCard from "../ui/TiltCard";
import { useGame } from "../game/GameProvider";

// Lightbox that embeds the YouTube player only after the user clicks play —
// keeps the page light and Lighthouse-friendly (no iframes on initial load).
function VideoLightbox({ id, title, onClose }: { id: string; title: string; onClose: () => void }) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[95] flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-label={title}
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className="animate-pop-in w-full max-w-3xl">
        <div className="flex items-center justify-between gap-4 pb-3">
          <p className="text-sm font-medium">{title}</p>
          <button onClick={onClose} className="rounded-md px-2 py-1 text-muted transition-colors hover:text-text" aria-label="Close video">
            ✕
          </button>
        </div>
        <div className="glow-border overflow-hidden rounded-2xl">
          <div className="relative aspect-video">
            <iframe
              className="absolute inset-0 h-full w-full"
              src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0`}
              title={title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Media() {
  const [open, setOpen] = useState<{ id: string; title: string } | null>(null);
  const { addXp } = useGame();

  const play = (v: { id: string; title: string }) => {
    setOpen(v);
    addXp(10, `watch-${v.id}`);
  };

  return (
    <Section id="media" kicker="broadcast archive" title={<>Content & <span className="text-aurora">Interviews</span></>}>
      <p className="-mt-4 mb-8 max-w-2xl text-sm text-muted">
        I run real technical interviews on{" "}
        <a href={profile.youtube} target="_blank" rel="noreferrer" className="text-cyan hover:underline">
          AZADEMY
        </a>{" "}
        — from a hiring manager&apos;s seat. If you want to see how I evaluate engineers (and how strong
        candidates answer), press play.
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
