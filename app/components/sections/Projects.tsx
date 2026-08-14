"use client";

import { projects } from "../../content";
import Section from "../ui/Section";
import Reveal from "../fx/Reveal";
import TiltCard from "../ui/TiltCard";

export default function Projects() {
  return (
    <Section id="projects" kicker="notable builds" title={<>Project <span className="text-aurora">Vault</span></>}>
      <p className="-mt-4 mb-8 max-w-2xl text-sm text-muted">
        Products I&apos;m proud to have shipped quality into — every card shows the real thing:
        live sites, government systems, app-store apps, and open GitHub repos.
      </p>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p, i) => {
          const isLink = p.link && !p.link.startsWith("{{");
          const Wrapper = isLink ? "a" : "div";
          const preview = "preview" in p ? (p.preview as string) : undefined;
          const isRepo = preview?.includes("opengraph.githubassets.com");
          return (
            <Reveal key={p.name} delay={(i % 3) * 90}>
              <TiltCard className="h-full">
                <Wrapper
                  {...(isLink ? { href: p.link, target: "_blank", rel: "noreferrer" } : {})}
                  className="glass glow-border group flex h-full flex-col overflow-hidden rounded-2xl"
                >
                  {/* Preview — real screenshot or GitHub's own repo card */}
                  {preview && (
                    <div className="relative aspect-[8/5] overflow-hidden border-b border-white/10">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={preview}
                        alt={`${p.name} — preview`}
                        loading="lazy"
                        className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                      />
                      <span
                        className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-70 transition-opacity duration-300 group-hover:opacity-30"
                        aria-hidden
                      />
                      <span className="absolute left-3 top-3 rounded-full bg-black/70 px-2.5 py-1 font-mono text-[10px] uppercase tracking-widest text-white backdrop-blur">
                        {isRepo ? "⌨ open source" : "● live"}
                      </span>
                      {"icon" in p && p.icon && (
                        <span className="absolute bottom-3 left-3 flex h-9 w-9 items-center justify-center rounded-lg bg-black/60 text-lg backdrop-blur" aria-hidden>
                          {p.icon as string}
                        </span>
                      )}
                    </div>
                  )}

                  <div className="flex flex-1 flex-col p-5">
                    <div className="flex items-start justify-between gap-3">
                      <h3 className="font-semibold leading-snug">{p.name}</h3>
                      {isLink && <span className="shrink-0 text-sm text-cyan">↗</span>}
                    </div>
                    <p className="mt-1 font-mono text-[11px] text-cyan">{p.org}</p>
                    <p className="font-mono text-[10px] text-muted">{p.period}</p>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">{p.blurb}</p>
                    <ul className="mt-4 flex flex-wrap gap-1.5">
                      {p.tags.map((t) => (
                        <li key={t} className="rounded-full bg-white/5 px-2.5 py-0.5 font-mono text-[10px] text-muted">
                          {t}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Wrapper>
              </TiltCard>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
