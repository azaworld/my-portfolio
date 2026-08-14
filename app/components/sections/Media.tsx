"use client";

import { useEffect, useRef, useState } from "react";
import { azademySocials, media, mediaPlaylist, podcast, profile } from "../../content";
import Section from "../ui/Section";
import Reveal from "../fx/Reveal";
import TiltCard from "../ui/TiltCard";
import VideoLightbox from "../ui/VideoLightbox";
import { useGame } from "../game/GameProvider";

// The podcast launch film, playing silently behind the podcast card.
const LAUNCH_VIDEO = "2UdL9zfAXUk";

export default function Media() {
  const [open, setOpen] = useState<{ id: string; title: string } | null>(null);
  const [bgVideo, setBgVideo] = useState(false);
  const bgRef = useRef<HTMLDivElement>(null);
  const { addXp } = useGame();

  // Load the ambient background video only when the card scrolls into view,
  // and never for reduced-motion users.
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const el = bgRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setBgVideo(true);
          obs.disconnect();
        }
      },
      { rootMargin: "200px" }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const play = (v: { id: string; title: string }) => {
    setOpen(v);
    addXp(10, `watch-${v.id}`);
  };

  return (
    <Section id="media" kicker="academy & podcast" title={<><span className="text-aurora">AZADEMY</span></>}>
      <p className="-mt-4 mb-5 max-w-2xl text-sm text-muted">
        My academy where learning meets earning — CS, AI & tech, freelancing, landing remote jobs, and
        real interviews with experts on how to give and take technical interviews.{" "}
        <a href={profile.youtube} target="_blank" rel="noreferrer" className="text-cyan hover:underline">
          Watch on YouTube ↗
        </a>
      </p>

      {/* AZA Execution Podcast — live, with the launch film playing softly behind */}
      <div
        ref={bgRef}
        className="relative mb-8 overflow-hidden rounded-2xl border border-magenta/30 bg-gradient-to-r from-magenta/10 to-violet/10 p-5"
      >
        {/* Ambient background video — muted, looping, click-through */}
        {bgVideo && (
          <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
            <iframe
              src={`https://www.youtube-nocookie.com/embed/${LAUNCH_VIDEO}?autoplay=1&mute=1&loop=1&playlist=${LAUNCH_VIDEO}&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1&disablekb=1&iv_load_policy=3`}
              title=""
              tabIndex={-1}
              className="absolute left-1/2 top-1/2 aspect-video h-[140%] min-w-full -translate-x-1/2 -translate-y-1/2 opacity-30"
              allow="autoplay; encrypted-media"
              loading="lazy"
            />
            {/* readability scrim */}
            <span className="absolute inset-0 bg-gradient-to-r from-[#0B1026]/90 via-[#0B1026]/70 to-[#0B1026]/40" />
            <span className="absolute inset-0 bg-gradient-to-t from-[#0B1026]/85 via-transparent to-[#0B1026]/60" />
          </div>
        )}

        <div className="relative">
        <div className="flex flex-wrap items-center gap-3">
          <span className="flex items-center gap-1.5 rounded-full bg-magenta/20 px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-widest text-magenta">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-red-500" aria-hidden />
            🎙️ Now streaming
          </span>
          <strong className="text-text">{podcast.name}</strong>
        </div>
        <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted">
          <span className="text-text">“{podcast.tagline}”</span> — {podcast.description}
        </p>

        {/* Latest episodes — tap to play right here */}
        <div className="mt-4 grid gap-4 sm:grid-cols-3">
          {podcast.episodes.map((ep) => (
            <button
              key={ep.id}
              onClick={() => play(ep)}
              className="group overflow-hidden rounded-xl border border-white/10 bg-black/30 text-left transition-all duration-300 hover:-translate-y-0.5 hover:border-magenta/50"
              aria-label={`Play episode: ${ep.title}`}
            >
              <div className="relative aspect-video overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={`https://i.ytimg.com/vi/${ep.id}/hqdefault.jpg`}
                  alt=""
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" aria-hidden />
                <span className="absolute left-1/2 top-1/2 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white/15 backdrop-blur transition-transform duration-300 group-hover:scale-110">
                  <svg viewBox="0 0 24 24" className="ml-0.5 h-5 w-5 fill-white" aria-hidden>
                    <path d="M8 5.14v14l11-7-11-7z" />
                  </svg>
                </span>
                <span className="absolute bottom-1.5 right-1.5 rounded bg-black/70 px-1.5 py-0.5 font-mono text-[10px] text-white">
                  ▶ episode
                </span>
              </div>
              <p className="p-3 text-xs font-semibold leading-snug">{ep.title}</p>
            </button>
          ))}
        </div>

        <div className="mt-4 flex flex-wrap gap-2.5">
          <a href={podcast.site} target="_blank" rel="noreferrer" className="rounded-full bg-gradient-to-r from-magenta to-violet px-4 py-1.5 text-xs font-semibold text-white transition-transform hover:scale-105">
            azapodcast.com ↗
          </a>
          <a href={podcast.channel} target="_blank" rel="noreferrer" className="glass rounded-full px-4 py-1.5 text-xs text-muted transition-colors hover:text-magenta">
            YouTube @azapod
          </a>
          <a href={podcast.facebook} target="_blank" rel="noreferrer" className="glass rounded-full px-4 py-1.5 text-xs text-muted transition-colors hover:text-magenta">
            Facebook
          </a>
        </div>
        </div>
      </div>

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
