"use client";

import { useCallback, useEffect, useState } from "react";
import { freelance, testimonials } from "../../content";
import Section from "../ui/Section";

// Auto-rotating 3D carousel of quote cards.
export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const count = testimonials.length;

  const next = useCallback(() => setIndex((i) => (i + 1) % count), [count]);
  const prev = () => setIndex((i) => (i - 1 + count) % count);

  useEffect(() => {
    if (paused) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const t = setInterval(next, 5000);
    return () => clearInterval(t);
  }, [paused, next]);

  return (
    <Section id="testimonials" kicker="party members say" title={<>Testi<span className="text-aurora">monials</span></>}>
      <p className="-mt-4 mb-10 text-sm text-muted">
        Real client reviews from{" "}
        <a href={freelance.url} target="_blank" rel="noreferrer" className="text-cyan hover:underline">
          Upwork
        </a>{" "}
        — {freelance.completedJobs} jobs completed, every single one rated ★{freelance.rating.toFixed(1)},{" "}
        <span className="text-amber">{freelance.badge}</span> status earned.
      </p>
      <div
        className="relative mx-auto max-w-2xl overflow-hidden px-1"
        style={{ perspective: "1200px" }}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <div className="relative h-72 overflow-hidden sm:h-56">
          {testimonials.map((t, i) => {
            const offset = ((i - index) % count + count) % count; // 0 = front
            const pos = offset === 0 ? 0 : offset === 1 ? 1 : -1;
            return (
              <figure
                key={t.author}
                className="glass absolute inset-0 flex flex-col justify-between rounded-2xl p-7 transition-all duration-700"
                style={{
                  transform: `translateX(${pos * 55}%) translateZ(${pos === 0 ? 0 : -160}px) rotateY(${pos * -22}deg) scale(${pos === 0 ? 1 : 0.86})`,
                  opacity: pos === 0 ? 1 : 0.15,
                  filter: pos === 0 ? "none" : "blur(4px)",
                  zIndex: pos === 0 ? 2 : 1,
                  pointerEvents: pos === 0 ? "auto" : "none",
                }}
                aria-hidden={pos !== 0}
              >
                <blockquote className="text-base leading-relaxed sm:text-lg">
                  <span className="text-aurora font-display text-3xl leading-none" aria-hidden>“</span>
                  {t.quote}
                </blockquote>
                <figcaption className="mt-4 flex items-center gap-3">
                  {/* Avatar — replace with an <img> when you add real photos */}
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-violet to-cyan font-display text-sm font-bold text-white" aria-hidden>
                    {t.author.replace(/[{}]/g, "").charAt(0) || "?"}
                  </span>
                  <span>
                    <span className="block text-sm font-semibold">{t.author}</span>
                    <span className="block text-xs text-muted">{t.title}</span>
                  </span>
                </figcaption>
              </figure>
            );
          })}
        </div>

        <div className="mt-6 flex items-center justify-center gap-4">
          <button onClick={prev} className="glass rounded-full p-2.5 transition-transform hover:scale-110" aria-label="Previous testimonial">
            ←
          </button>
          <div className="flex gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className="h-2 w-2 rounded-full transition-all"
                style={{ background: i === index ? "var(--cyan)" : "rgba(255,255,255,0.2)", width: i === index ? 20 : 8 }}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>
          <button onClick={next} className="glass rounded-full p-2.5 transition-transform hover:scale-110" aria-label="Next testimonial">
            →
          </button>
        </div>

        {/* Client endorsements */}
        <ul className="mt-8 flex flex-wrap justify-center gap-2">
          {freelance.endorsements.map((tag) => (
            <li
              key={tag}
              className="rounded-full border border-amber/25 bg-amber/10 px-3.5 py-1.5 text-xs text-amber"
            >
              ✓ {tag}
            </li>
          ))}
        </ul>
        <p className="mt-3 text-center font-mono text-[10px] uppercase tracking-widest text-muted">
          endorsed by clients
        </p>
      </div>
    </Section>
  );
}
