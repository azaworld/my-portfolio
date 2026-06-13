"use client";

import { credentials, education, volunteering } from "../../content";
import Section from "../ui/Section";
import Reveal from "../fx/Reveal";
import TiltCard from "../ui/TiltCard";

export default function Community() {
  return (
    <Section id="community" kicker="academics & community" title={<>Beyond the <span className="text-aurora">Code</span></>}>
      <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        {/* Education */}
        <Reveal variant="left">
          <div className="glass h-full rounded-2xl p-6">
            <h3 className="font-mono text-xs uppercase tracking-[0.25em] text-cyan">🎓 Education</h3>
            <ul className="mt-5 space-y-5">
              {education.map((e) => (
                <li key={e.school} className="border-l-2 border-white/10 pl-4">
                  <p className="font-semibold leading-snug">{e.school}</p>
                  <p className="mt-0.5 text-sm text-muted">{e.detail}</p>
                  {e.period && <p className="mt-0.5 font-mono text-[10px] text-muted">{e.period}</p>}
                </li>
              ))}
            </ul>

            {/* Certifications */}
            <h4 className="mt-7 font-mono text-xs uppercase tracking-[0.25em] text-cyan">📜 Certifications</h4>
            <ul className="mt-3 space-y-2">
              {credentials
                .filter((c) => c.link)
                .map((c) => (
                  <li key={c.text} className="flex items-start gap-2 text-sm leading-relaxed text-muted">
                    <span aria-hidden>{c.icon}</span>
                    <a href={c.link} target="_blank" rel="noreferrer" className="transition-colors hover:text-cyan hover:underline">
                      {c.text} ↗
                    </a>
                  </li>
                ))}
            </ul>
          </div>
        </Reveal>

        {/* Volunteering & leadership */}
        <Reveal variant="right">
          <div className="glass h-full rounded-2xl p-6">
            <h3 className="font-mono text-xs uppercase tracking-[0.25em] text-amber">🤝 Leadership & community</h3>
            <div className="mt-5 grid gap-4">
              {volunteering.map((v) => (
                <TiltCard key={v.org} maxTilt={4}>
                  <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4 transition-colors duration-300 hover:border-amber/40">
                    <div className="flex items-start gap-3">
                      <span className="text-xl" aria-hidden>{v.icon}</span>
                      <div className="min-w-0">
                        <p className="text-sm font-semibold">
                          {v.role} <span className="text-amber">· {v.org}</span>
                        </p>
                        <p className="font-mono text-[10px] text-muted">{v.period}</p>
                        <p className="mt-1.5 text-sm leading-relaxed text-muted">{v.note}</p>
                      </div>
                    </div>
                  </div>
                </TiltCard>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
