"use client";

import { useEffect, useRef, useState } from "react";
import { freelance, missions, type Mission } from "../../content";
import Section from "../ui/Section";
import Reveal from "../fx/Reveal";
import TiltCard from "../ui/TiltCard";
import CountUp from "../fx/CountUp";
import { useGame } from "../game/GameProvider";

// Timeline chart bounds — extend END as time passes.
const CHART_START = 2018;
const CHART_END = 2026.6;
const CHART_NOW = 2026.45;

// Mission number = position from the oldest (M-01) to the newest.
const missionNumber = (m: Mission) => missions.length - missions.indexOf(m);

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
              M-{String(missionNumber(mission)).padStart(2, "0")} ·{" "}
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

// Career at a glance: every mission as a bar on a shared time axis.
// Overlapping bars make the parallel roles obvious. Click a bar → debrief.
function CareerTimeline({ onOpen }: { onOpen: (m: Mission) => void }) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setInView(true);
          obs.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const span = CHART_END - CHART_START;
  const pct = (v: number) => ((v - CHART_START) / span) * 100;
  const years = Array.from({ length: 9 }, (_, i) => CHART_START + i);

  return (
    <div ref={ref} className="glass overflow-x-auto rounded-2xl p-5 sm:p-6">
      <div className="flex flex-wrap items-baseline justify-between gap-2">
        <h3 className="text-sm font-semibold">Career at a glance</h3>
        <p className="font-mono text-[10px] uppercase tracking-widest text-muted">
          click a bar to open its debrief
        </p>
      </div>

      <div className="mt-4 min-w-[560px]">
        {/* year axis */}
        <div className="relative ml-[7.5rem] h-5 border-b border-white/10">
          {years.map((y) => (
            <span
              key={y}
              className="absolute -translate-x-1/2 font-mono text-[10px] text-muted"
              style={{ left: `${pct(y)}%` }}
            >
              {y}
            </span>
          ))}
        </div>

        {/* rows */}
        <div className="relative mt-1">
          {/* now line */}
          <div
            className="absolute bottom-0 top-0 ml-[7.5rem] w-px border-l border-dashed border-cyan/50"
            style={{ left: `calc(${pct(CHART_NOW)}% )` }}
            aria-hidden
          />
          {missions.map((m, i) => {
            const active = m.status === "ACTIVE";
            const left = pct(m.start);
            const width = Math.max(pct(m.end ?? CHART_NOW) - left, 2.5);
            return (
              <div key={m.id} className="flex items-center gap-3 py-1">
                <span className="w-[6.75rem] shrink-0 truncate text-right font-mono text-[10px] text-muted">
                  {m.short}
                </span>
                <div className="relative h-5 flex-1">
                  <button
                    onClick={() => onOpen(m)}
                    aria-label={`${m.role} at ${m.short}, ${m.period} — open debrief`}
                    title={`${m.codename} · ${m.role} · ${m.period}`}
                    className={`absolute top-0.5 h-4 rounded-full transition-all duration-700 ease-out hover:!opacity-100 hover:shadow-[0_0_14px_var(--glow)] ${
                      active
                        ? "bg-gradient-to-r from-violet via-magenta to-cyan opacity-95"
                        : "bg-white/20 opacity-80 hover:bg-white/30"
                    }`}
                    style={{
                      left: `${left}%`,
                      width: inView ? `${width}%` : "0%",
                      transitionDelay: `${i * 90}ms`,
                    }}
                  >
                    {active && (
                      <span className="absolute -right-1 top-1/2 h-2.5 w-2.5 -translate-y-1/2 animate-pulse rounded-full bg-cyan shadow-[0_0_10px_var(--cyan)]" aria-hidden />
                    )}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* legend */}
        <div className="ml-[7.5rem] mt-3 flex gap-5 font-mono text-[10px] text-muted">
          <span className="flex items-center gap-1.5">
            <span className="h-2 w-5 rounded-full bg-gradient-to-r from-violet to-cyan" aria-hidden /> active now
          </span>
          <span className="flex items-center gap-1.5">
            <span className="h-2 w-5 rounded-full bg-white/20" aria-hidden /> completed
          </span>
          <span className="flex items-center gap-1.5">
            <span className="h-3 border-l border-dashed border-cyan/50" aria-hidden /> today
          </span>
        </div>
      </div>
    </div>
  );
}

function MissionCard({ mission, onOpen, delay }: { mission: Mission; onOpen: (m: Mission) => void; delay: number }) {
  return (
    <Reveal delay={delay}>
      <TiltCard className="h-full">
        <button
          onClick={() => onOpen(mission)}
          className="glass glow-border flex h-full w-full flex-col rounded-2xl p-6 text-left"
        >
          <div className="flex items-center justify-between gap-2">
            <span className="flex items-center gap-2">
              <span className="font-mono text-[10px] font-bold text-violet">
                M-{String(missionNumber(mission)).padStart(2, "0")}
              </span>
              <span
                className={`rounded-full px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-widest ${
                  mission.status === "ACTIVE" ? "bg-cyan/15 text-cyan" : "bg-white/10 text-muted"
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

  const active = missions.filter((m) => m.status === "ACTIVE");
  const completed = missions.filter((m) => m.status === "COMPLETE");

  return (
    <Section id="missions" kicker="quest journal" title={<>Mission <span className="text-aurora">Log</span></>}>
      {/* Career timeline overview */}
      <Reveal>
        <CareerTimeline onOpen={openDebrief} />
      </Reveal>

      {/* Active missions */}
      <Reveal>
        <h3 className="mt-12 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.3em] text-cyan">
          <span className="inline-block h-2 w-2 animate-pulse rounded-full bg-cyan" aria-hidden />
          active now — {active.length} missions in parallel
        </h3>
      </Reveal>
      <div className="mt-5 grid gap-6 lg:grid-cols-3">
        {active.map((mission, i) => (
          <MissionCard key={mission.id} mission={mission} onOpen={openDebrief} delay={i * 100} />
        ))}
      </div>

      {/* Completed missions */}
      <Reveal>
        <h3 className="mt-14 font-mono text-xs uppercase tracking-[0.3em] text-muted">
          ✓ completed — the road here
        </h3>
      </Reveal>
      <div className="mt-5 grid gap-6 sm:grid-cols-2">
        {completed.map((mission, i) => (
          <MissionCard key={mission.id} mission={mission} onOpen={openDebrief} delay={(i % 2) * 100} />
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
