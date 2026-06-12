"use client";

import { useCallback, useEffect, useState } from "react";
import { testimonials } from "../../content";
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
      <div
        className="relative mx-auto max-w-2xl"
        style={{ perspective: "1200px" }}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <div className="relative h-64 sm:h-56">
          {testimonials.map((t, i) => {
            const offset = ((i - index) % count + count) % count; // 0 = front
            const pos = offset === 0 ? 0 : offset === 1 ? 1 : -1;
            return (
              <figure
                key={t.author}
                className="glass absolute inset-0 flex flex-col justify-between rounded-2xl p-7 transition-all duration-700"
                style={{
                  transform: `translateX(${pos * 55}%) translateZ(${pos === 0 ? 0 : -160}px) rotateY(${pos * -22}deg) scale(${pos === 0 ? 1 : 0.86})`,
                  opacity: pos === 0 ? 1 : 0.35,
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
      </div>
    </Section>
  );
}
