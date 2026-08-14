"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { useGame } from "../game/GameProvider";

export default function Section({
  id,
  title,
  kicker,
  children,
  className = "",
}: {
  id: string;
  title: React.ReactNode;
  kicker: string;
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLElement>(null);
  const { markSection } = useGame();
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          markSection(id);
          observer.disconnect();
        }
      },
      { threshold: 0.25 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [id, markSection]);

  const copyLink = useCallback(() => {
    const url = `${window.location.origin}/#${id}`;
    navigator.clipboard.writeText(url).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }, [id]);

  return (
    <section id={id} ref={ref} className={`scroll-mt-28 py-20 sm:py-28 ${className}`}>
      <div className="flex items-start justify-between gap-4">
        <div className="min-w-0">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-cyan">{kicker}</p>
          <h2 className="font-display mt-3 text-3xl font-bold tracking-tight sm:text-4xl">{title}</h2>
        </div>
        <button
          onClick={copyLink}
          title="Copy shareable link"
          aria-label={`Copy link to ${id} section`}
          className="mt-5 flex shrink-0 items-center gap-1.5 rounded-lg border border-white/10 bg-white/[0.04] px-3 py-1.5 font-mono text-[10px] uppercase tracking-widest text-muted transition-all hover:border-cyan/40 hover:text-cyan"
        >
          {copied ? (
            <>
              <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 6 9 17l-5-5" />
              </svg>
              Copied
            </>
          ) : (
            <>
              <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
              </svg>
              Share
            </>
          )}
        </button>
      </div>
      <div className="mt-10">{children}</div>
    </section>
  );
}
