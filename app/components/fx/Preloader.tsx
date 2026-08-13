"use client";

import { useEffect, useState } from "react";
import AIBot from "./AIBot";

// AI-mascot preloader: blinking robot + cascading welcome text.
// Shows once per browser session; skipped for reduced motion.
const WELCOME = "Welcome to Arifuz Antor's Portfolio";
const SUB = "> booting antor.os v5.0 — AI modules online …";

export default function Preloader() {
  const [stage, setStage] = useState<"boot" | "exit" | "done">("boot");
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (
      sessionStorage.getItem("antor-booted") ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      const raf = requestAnimationFrame(() => setStage("done"));
      return () => cancelAnimationFrame(raf);
    }

    const progTimer = setInterval(
      () => setProgress((p) => Math.min(p + Math.random() * 11 + 5, 100)),
      140
    );
    const exitTimer = setTimeout(() => {
      setStage("exit");
      sessionStorage.setItem("antor-booted", "1");
      setTimeout(() => setStage("done"), 700);
    }, 2600);

    return () => {
      clearInterval(progTimer);
      clearTimeout(exitTimer);
    };
  }, []);

  if (stage === "done") return null;

  return (
    <div
      className={`fixed inset-0 z-[110] flex items-center justify-center bg-[#0B1026] transition-opacity duration-700 ${
        stage === "exit" ? "pointer-events-none opacity-0" : "opacity-100"
      }`}
      aria-hidden
    >
      <div className="flex w-full max-w-lg flex-col items-center px-6 text-center">
        {/* AI bot with blinking eyes */}
        <AIBot size={132} />

        {/* Welcome text — letters cascade in one by one */}
        <h1 className="mt-6 text-xl font-bold sm:text-2xl" style={{ fontFamily: "var(--font-display, inherit)" }}>
          {WELCOME.split("").map((ch, i) => (
            <span
              key={i}
              className="inline-block bg-gradient-to-r from-[#7C3AED] via-[#22D3EE] to-[#F472B6] bg-clip-text text-transparent"
              style={{
                animation: `welcome-in 0.5s cubic-bezier(0.22, 1, 0.36, 1) both`,
                animationDelay: `${0.35 + i * 0.028}s`,
                whiteSpace: ch === " " ? "pre" : undefined,
              }}
            >
              {ch}
            </span>
          ))}
        </h1>

        <p
          className="mt-3 font-mono text-xs text-[#22D3EE] opacity-0"
          style={{ animation: "fade-in 0.6s ease both", animationDelay: "1.4s" }}
        >
          {SUB}
        </p>

        {/* progress bar */}
        <div className="mt-6 h-1.5 w-full max-w-xs overflow-hidden rounded-full bg-white/10">
          <div
            className="h-full rounded-full bg-gradient-to-r from-[#7C3AED] via-[#22D3EE] to-[#F472B6] transition-[width] duration-200"
            style={{ width: `${progress}%` }}
          />
        </div>
        <p className="mt-2 font-mono text-xs text-[#8B93B0]">{Math.round(progress)}%</p>
      </div>
    </div>
  );
}
