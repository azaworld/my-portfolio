"use client";

import { useEffect, useRef, useState } from "react";
import { freelance, missions, type Mission } from "../../content";
import CountUp from "../fx/CountUp";
import Section from "../ui/Section";
import Reveal from "../fx/Reveal";
import TiltCard from "../ui/TiltCard";
import { useGame } from "../game/GameProvider";

function MissionModal({ mission, onClose }: { mission: Mission; onClose: () => void }) {
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    closeRef.current?.focus();
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[95] flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-label={`Mission debrief: ${mission.codename}`}
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className="glass animate-pop-in max-h-[85vh] w-full max-w-2xl overflow-y-auto rounded-2xl p-6 sm:p-8">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-cyan">
              {mission.status === "ACTIVE" ? "● mission active" : "✓ mission complete"}
            </p>
            <h3 className="font-display mt-2 text-2xl font-bold">{mission.codename}</h3>
            <p className="mt-1 text-sm text-muted">
              {mission.role} · {mission.org} · {mission.period}
            </p>
          </div>
          <button
            ref={closeRef}
            onClick={onClose}
            className="rounded-md px-2 py-1 text-muted transition-colors hover:text-text"
            aria-label="Close mission debrief"
          >
            ✕
          </button>
        </div>

        <p className="mt-5 leading-relaxed text-muted">{mission.brief}</p>

        <h4 className="mt-7 font-mono text-xs uppercase tracking-[0.25em] text-violet">⊕ Objectives</h4>
        <ul className="mt-3 space-y-2">
          {mission.objectives.map((o) => (
            <li key={o} className="flex gap-2 text-sm leading-relaxed text-muted">
              <span className="text-cyan" aria-hidden>▸</span> {o}
            </li>
          ))}
        </ul>

        <h4 className="mt-7 font-mono text-xs uppercase tracking-[0.25em] text-magenta">⚔ Boss fight</h4>
        <p className="mt-3 rounded-xl border border-magenta/20 bg-magenta/5 p-4 text-sm leading-relaxed text-muted">
          {mission.bossFight}
        </p>

        <h4 className="mt-7 font-mono text-xs uppercase tracking-[0.25em] text-amber">◆ Loot acquired</h4>
        <ul className="mt-3 flex flex-wrap gap-2">
          {mission.loot.map((l) => (
            <li key={l} className="rounded-full border border-amber/30 bg-amber/10 px-3.5 py-1.5 text-xs text-amber">
              {l}
            </li>
          ))}
        </ul>

        {mission.tech && (
          <>
            <h4 className="mt-7 font-mono text-xs uppercase tracking-[0.25em] text-cyan">⚙ Loadout</h4>
            <ul className="mt-3 flex flex-wrap gap-2">
              {mission.tech.map((t) => (
                <li key={t} className="rounded-md border border-cyan/25 bg-cyan/10 px-2.5 py-1 font-mono text-[11px] text-cyan">
                  {t}
                </li>
              ))}
            </ul>
          </>
        )}
      </div>
    </div>
  );
}

export default function MissionLog() {
  const [openMission, setOpenMission] = useState<Mission | null>(null);
  const { unlock, addXp } = useGame();

  const openDebrief = (m: Mission) => {
    setOpenMission(m);
    addXp(15, `mission-${m.id}`);
    unlock("deep-diver");
  };

  return (
    <Section id="missions" kicker="quest journal" title={<>Mission <span className="text-aurora">Log</span></>}>
      <div className="grid gap-6 sm:grid-cols-2">
        {missions.map((mission, i) => (
          <Reveal key={mission.id} delay={(i % 2) * 120}>
            <TiltCard className="h-full">
              <button
                onClick={() => openDebrief(mission)}
                className="glass glow-border flex h-full w-full flex-col rounded-2xl p-6 text-left"
              >
                <div className="flex items-center justify-between gap-2">
                  <span className="flex items-center gap-2">
                    <span className="font-mono text-[10px] font-bold text-violet">
                      M-{String(missions.length - i).padStart(2, "0")}
                    </span>
                    <span
                      className={`rounded-full px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-widest ${
                        mission.status === "ACTIVE"
                          ? "bg-cyan/15 text-cyan"
                          : "bg-white/10 text-muted"
                      }`}
                    >
                      {mission.status === "ACTIVE" ? "● active" : "✓ complete"}
                    </span>
                  </span>
                  <span className="font-mono text-[10px] text-muted">{mission.period}</span>
                </div>
                <h3 className="font-display mt-4 text-xl font-bold">{mission.codename}</h3>
                <p className="mt-1 text-sm font-medium text-cyan">{mission.role}</p>
                <p className="text-xs text-muted">{mission.org}</p>
                <p className="mt-4 flex-1 text-sm leading-relaxed text-muted">{mission.brief}</p>
                {mission.tech && (
                  <ul className="mt-4 flex flex-wrap gap-1.5">
                    {mission.tech.slice(0, 4).map((t) => (
                      <li key={t} className="rounded bg-white/5 px-2 py-0.5 font-mono text-[10px] text-muted">
                        {t}
                      </li>
                    ))}
                    {mission.tech.length > 4 && (
                      <li className="rounded bg-white/5 px-2 py-0.5 font-mono text-[10px] text-cyan">
                        +{mission.tech.length - 4} in debrief
                      </li>
                    )}
                  </ul>
                )}
                <p className="mt-4 font-mono text-xs text-violet transition-colors group-hover:text-cyan">
                  Open debrief → <span className="text-muted">(+15 XP)</span>
                </p>
              </button>
            </TiltCard>
          </Reveal>
        ))}
      </div>

      {/* Side quests — freelance track record */}
      <Reveal delay={120}>
        <a
          href={freelance.url}
          target="_blank"
          rel="noreferrer"
          className="glass glow-border mt-8 flex flex-wrap items-center justify-between gap-5 rounded-2xl p-6 transition-transform duration-300 hover:-translate-y-0.5"
        >
          <div className="min-w-52">
            <h3 className="font-display text-lg font-bold">
              ⚔️ Side Quests <span className="text-sm font-normal text-muted">— freelance</span>
            </h3>
            <p className="mt-1 max-w-md text-sm leading-relaxed text-muted">
              Manual testing, automation assessments, and QA consulting for clients worldwide —
              every quest rated a perfect score.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-6">
            <div className="text-center">
              <p className="font-display text-2xl font-bold text-text">
                <CountUp value={freelance.completedJobs} />
              </p>
              <p className="text-[10px] uppercase tracking-widest text-muted">quests done</p>
            </div>
            <div className="text-center">
              <p className="font-display text-2xl font-bold text-amber">★ {freelance.rating.toFixed(1)}</p>
              <p className="text-[10px] uppercase tracking-widest text-muted">every rating</p>
            </div>
            <div className="text-center">
              <p className="rounded-full bg-gradient-to-r from-violet to-cyan px-3 py-1 font-mono text-xs font-bold text-white">
                {freelance.badge.toUpperCase()}
              </p>
              <p className="mt-1 text-[10px] uppercase tracking-widest text-muted">on Upwork ↗</p>
            </div>
          </div>
        </a>
      </Reveal>

      {openMission && <MissionModal mission={openMission} onClose={() => setOpenMission(null)} />}
    </Section>
  );
}
