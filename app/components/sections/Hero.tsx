"use client";

import Image from "next/image";
import portrait from "../../assets/arifuz.jpg";
import { profile, heroStats } from "../../content";
import ParticleField from "../fx/ParticleField";
import Typewriter from "../fx/Typewriter";
import AIBot from "../fx/AIBot";

// Social icons — one row, right under the portrait, so anyone can find him fast.
const SOCIALS = [
  {
    label: "LinkedIn",
    href: profile.linkedin,
    path: "M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.07 2.07 0 110-4.13 2.07 2.07 0 010 4.13zM7.12 20.45H3.55V9h3.57v11.45z",
  },
  {
    label: "GitHub",
    href: profile.github,
    path: "M12 2a10 10 0 00-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.11-1.47-1.11-1.47-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.08 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.56-1.11-4.56-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02a9.58 9.58 0 015 0c1.91-1.3 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85V21c0 .27.18.58.69.48A10 10 0 0012 2z",
  },
  {
    label: "X / Twitter",
    href: profile.twitter,
    path: "M18.24 2.25h3.31l-7.23 8.26 8.5 11.24h-6.66l-5.21-6.82L5 21.75H1.68l7.73-8.84L1.25 2.25h6.83l4.71 6.23 5.45-6.23zm-1.16 17.52h1.83L7.08 4.13H5.12l11.96 15.64z",
  },
  {
    label: "Facebook",
    href: profile.facebook,
    path: "M24 12.07C24 5.4 18.63 0 12 0S0 5.4 0 12.07C0 18.1 4.39 23.09 10.13 24v-8.44H7.08v-3.49h3.05V9.41c0-3.02 1.79-4.7 4.53-4.7 1.31 0 2.68.24 2.68.24v2.97h-1.51c-1.49 0-1.96.93-1.96 1.89v2.26h3.33l-.53 3.49h-2.8V24C19.61 23.09 24 18.1 24 12.07z",
  },
  {
    label: "YouTube",
    href: profile.youtube,
    path: "M23.5 6.19a3.02 3.02 0 00-2.12-2.14C19.5 3.55 12 3.55 12 3.55s-7.5 0-9.38.5A3.02 3.02 0 00.5 6.19C0 8.07 0 12 0 12s0 3.93.5 5.81a3.02 3.02 0 002.12 2.14c1.88.5 9.38.5 9.38.5s7.5 0 9.38-.5a3.02 3.02 0 002.12-2.14C24 15.93 24 12 24 12s0-3.93-.5-5.81zM9.55 15.57V8.43L15.82 12l-6.27 3.57z",
  },
  {
    label: "Upwork",
    href: profile.upwork,
    path: "M18.56 7.06c-2.06 0-3.66 1.34-4.4 3.54-1.14-1.71-2.02-3.67-2.53-5.36H9.04v6.47c0 1.28-1.04 2.32-2.32 2.32s-2.32-1.04-2.32-2.32V5.24H1.81v6.47c0 2.69 2.19 4.9 4.88 4.9s4.9-2.21 4.9-4.9v-1.08c.5 1.04 1.11 2.1 1.86 3.03l-1.58 7.47h2.65l1.14-5.4c1 .64 2.15 1.05 3.47 1.05 2.82 0 5.12-2.31 5.12-5.13 0-2.83-2.87-5.59-5.69-5.59zm.57 8.13c-1.04 0-2.01-.44-2.89-1.16l.26-1.05v-.04c.19-1.08.79-2.9 2.63-2.9 1.38 0 2.5 1.12 2.5 2.5.01 1.37-1.13 2.65-2.5 2.65z",
  },
];

function SocialRow() {
  return (
    <div className="flex items-center justify-center gap-2">
      {SOCIALS.map((s) => (
        <a
          key={s.label}
          href={s.href}
          target="_blank"
          rel="noreferrer"
          aria-label={s.label}
          title={s.label}
          className="group flex h-9 w-9 items-center justify-center rounded-full border border-white/12 bg-white/[0.04] text-muted transition-all duration-300 hover:-translate-y-1 hover:border-cyan hover:text-cyan hover:shadow-[0_0_16px_-4px_var(--cyan)]"
        >
          <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden>
            <path d={s.path} />
          </svg>
        </a>
      ))}
      <a
        href={`mailto:${profile.email}`}
        aria-label="Email"
        title="Email"
        className="group flex h-9 w-9 items-center justify-center rounded-full border border-white/12 bg-white/[0.04] text-muted transition-all duration-300 hover:-translate-y-1 hover:border-amber hover:text-amber hover:shadow-[0_0_16px_-4px_var(--amber)]"
      >
        <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
          <rect x="2" y="4" width="20" height="16" rx="2" />
          <path d="m2 7 10 6L22 7" />
        </svg>
      </a>
    </div>
  );
}
import Magnetic from "../fx/Magnetic";
import CountUp from "../fx/CountUp";

// Kinetic headline: each letter animates in individually.
// Letters are grouped per word so lines never break mid-word.
function KineticText({ text, baseDelay = 0 }: { text: string; baseDelay?: number }) {
  let letterIndex = 0;
  const words = text.split(" ");
  return (
    <span aria-label={text}>
      {words.map((word, wi) => (
        <span key={`${word}-${wi}`} className="inline-block" aria-hidden>
          {word.split("").map((char, ci) => {
            const delay = baseDelay + letterIndex++ * 35;
            return (
              <span key={`${char}-${ci}`} className="kinetic-letter" style={{ animationDelay: `${delay}ms` }}>
                {char}
              </span>
            );
          })}
          {wi < words.length - 1 ? " " : ""}
        </span>
      ))}
    </span>
  );
}

export default function Hero() {
  return (
    <section id="top" className="relative flex min-h-screen flex-col justify-center overflow-hidden pb-16 pt-28">
      <ParticleField />

      {/* Floating 3D-ish shapes */}
      <div className="animate-float-slow pointer-events-none absolute right-[8%] top-[18%] h-24 w-24 rounded-2xl border border-violet/40 bg-violet/10 backdrop-blur-sm [transform:rotate3d(1,1,0,30deg)]" aria-hidden />
      <div className="animate-float-slow pointer-events-none absolute left-[6%] top-[60%] h-16 w-16 rounded-full border border-cyan/40 bg-cyan/10 backdrop-blur-sm" style={{ animationDelay: "-3s" }} aria-hidden />
      <div className="animate-float-slow pointer-events-none absolute right-[20%] bottom-[12%] h-12 w-12 rotate-45 border border-magenta/40 bg-magenta/10 backdrop-blur-sm" style={{ animationDelay: "-5s" }} aria-hidden />

      <div className="relative grid items-center gap-12 lg:grid-cols-[1.25fr_0.75fr]">
        <div>
        {/* Portrait — centered above the headline on mobile, right column on desktop */}
        <div className="animate-fade-up mb-8 flex flex-col items-center gap-3 lg:hidden">
          <div className="portrait-frame animate-float-slow w-40">
            <div className="portrait-duotone">
              <Image src={portrait} alt="Portrait of Arifuzzaman Antor" priority className="h-auto w-full" />
            </div>
          </div>
          <SocialRow />
        </div>

        <p className="animate-fade-up font-mono text-sm text-cyan">
          {profile.identity}
        </p>

        <h1 className="font-display mt-5 text-5xl font-bold leading-[1.05] tracking-tight sm:text-7xl">
          <KineticText text={profile.shortName} baseDelay={200} />
          <span className="text-aurora block text-3xl sm:text-5xl">
            <KineticText text="turns chaos into shipped products." baseDelay={600} />
          </span>
        </h1>

        <p className="animate-fade-up mt-7 min-h-14 font-mono text-lg text-text sm:min-h-9 sm:text-2xl" style={{ animationDelay: "1.4s" }}>
          <Typewriter phrases={profile.roles} />
        </p>

        <p className="animate-fade-up mt-5 max-w-xl leading-relaxed text-muted" style={{ animationDelay: "1.6s" }}>
          {profile.pitch}
        </p>

        <div className="animate-fade-up mt-9 flex flex-wrap items-center gap-4" style={{ animationDelay: "1.8s" }}>
          <Magnetic>
            <a
              href="#missions"
              className="inline-block rounded-xl bg-gradient-to-r from-violet via-magenta to-amber bg-[length:200%_auto] px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-violet/30 transition-all hover:bg-right hover:shadow-violet/50"
            >
              View Missions
            </a>
          </Magnetic>
          <Magnetic>
            <a
              href="#contact"
              className="glass glow-border inline-block rounded-xl px-7 py-3.5 text-sm font-semibold transition-colors hover:text-cyan"
            >
              Hire Me
            </a>
          </Magnetic>
          <a
            href={profile.upwork}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-xl border border-amber/40 bg-amber/10 px-4 py-3.5 text-sm font-medium text-amber transition-all hover:-translate-y-0.5 hover:bg-amber/20"
          >
            ⭐ Top Rated on Upwork
          </a>
        </div>

        {/* Animated counters */}
        <div className="animate-fade-up mt-16 grid max-w-2xl grid-cols-2 gap-6 sm:grid-cols-4" style={{ animationDelay: "2s" }}>
          {heroStats.map((stat) => (
            <div key={stat.label}>
              <p className="font-display text-3xl font-bold text-text">
                <CountUp value={stat.value} suffix={stat.suffix} />
              </p>
              <p className="mt-1 text-xs leading-snug text-muted">{stat.label}</p>
            </div>
          ))}
        </div>
        </div>

        {/* Portrait — desktop right column */}
        <div className="animate-fade-up relative hidden flex-col items-center gap-4 lg:flex" style={{ animationDelay: "600ms" }}>
          <div className="portrait-frame animate-float-slow w-full max-w-sm">
            <div className="portrait-duotone">
              <Image src={portrait} alt="Portrait of Arifuzzaman Antor" priority className="h-auto w-full" />
            </div>
          </div>
          {/* Social links — right under the face, impossible to miss */}
          <SocialRow />
          {/* AI companion bot — peeks beside the portrait */}
          <div className="absolute -bottom-2 -left-4 opacity-90" title="antor.os AI companion">
            <AIBot size={92} />
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <a
        href="#about"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-muted transition-colors hover:text-cyan"
        aria-label="Scroll to About section"
      >
        <span className="relative flex h-10 w-6 items-start justify-center rounded-full border border-current p-1.5">
          <span className="h-2 w-1 animate-bounce rounded-full bg-current" />
        </span>
      </a>
    </section>
  );
}
