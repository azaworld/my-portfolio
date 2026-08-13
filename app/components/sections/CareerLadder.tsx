"use client";

import { missions, type Mission } from "../../content";
import Reveal from "../fx/Reveal";

const MISSION_COLORS: Record<string, string> = {
  azailabs: "from-violet-600 to-violet-400",
  platformz: "from-cyan-600 to-cyan-400",
  kintsugi: "from-magenta-600 to-magenta-400",
  allgen: "from-amber-600 to-amber-400",
  grameenphone: "from-emerald-600 to-emerald-400",
  kinetik: "from-pink-600 to-pink-400",
  mastercard: "from-blue-600 to-blue-400",
  intellex: "from-indigo-600 to-indigo-400",
  reve: "from-rose-600 to-rose-400",
  dsi: "from-teal-600 to-teal-400",
  carrybags: "from-slate-600 to-slate-400",
};

function CareerLadderCard({ mission, index, onOpen }: { mission: Mission; index: number; onOpen: (m: Mission) => void }) {
  const color = MISSION_COLORS[mission.id] || "from-gray-600 to-gray-400";
  const isActive = mission.status === "ACTIVE";

  return (
    <Reveal delay={index * 60}>
      <button
        onClick={() => onOpen(mission)}
        className="group relative flex w-full items-center gap-4 rounded-xl border border-white/10 bg-white/[0.02] p-4 transition-all duration-300 hover:border-white/20 hover:bg-white/[0.05] sm:p-5"
      >
        {/* Left side: Number and vertical line */}
        <div className="flex flex-col items-center gap-2">
          {/* Level orb */}
          <div
            className={`flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br font-mono text-sm font-bold text-white ${color} shadow-lg`}
          >
            {index + 1}
          </div>

          {/* Connector line to next (if not last) */}
          {index < 10 && <div className={`h-8 w-0.5 bg-gradient-to-b ${color}`} />}
        </div>

        {/* Right side: Mission info */}
        <div className="flex-1 text-left">
          <div className="flex flex-col gap-0.5 sm:gap-1">
            <span className="font-mono text-xs uppercase tracking-widest text-muted">
              {mission.period.replace(" — Present", " → now")}
              {isActive && <span className="ml-2 inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-cyan" />}
            </span>
            <h4 className="font-semibold leading-tight sm:text-sm">{mission.short}</h4>
            <p className="text-xs leading-snug text-muted sm:text-sm">{mission.role}</p>
          </div>
        </div>

        {/* Right arrow indicator */}
        <span className="text-muted transition-transform duration-300 group-hover:translate-x-1">→</span>
      </button>
    </Reveal>
  );
}

export default function CareerLadder({ onMissionOpen }: { onMissionOpen: (m: Mission) => void }) {
  const ordered = [...missions].reverse();

  return (
    <div className="space-y-3 sm:space-y-4">
      <div className="mb-4 sm:mb-6">
        <h3 className="text-sm font-semibold sm:text-base">Career progression</h3>
        <p className="mt-1 text-xs text-muted sm:text-sm">Click any step to see the full mission debrief</p>
      </div>

      <div className="space-y-2 sm:space-y-3">
        {ordered.map((mission, idx) => (
          <CareerLadderCard key={mission.id} mission={mission} index={idx} onOpen={onMissionOpen} />
        ))}
      </div>
    </div>
  );
}
