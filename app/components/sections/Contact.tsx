"use client";

import { useEffect, useRef, useState } from "react";
import { profile } from "../../content";
import Section from "../ui/Section";
import Reveal from "../fx/Reveal";
import Magnetic from "../fx/Magnetic";
import { useGame } from "../game/GameProvider";

type Errors = { name?: string; email?: string; quest?: string };

export default function Contact() {
  const [values, setValues] = useState({ name: "", email: "", quest: "" });
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const { unlock, burstConfetti, addXp } = useGame();

  // "First Contact" achievement when the section scrolls into view
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          unlock("first-contact");
          obs.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [unlock]);

  const validate = (): Errors => {
    const e: Errors = {};
    if (!values.name.trim()) e.name = "Every quest needs a hero name.";
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(values.email)) e.email = "That raven won't fly — check the email.";
    if (values.quest.trim().length < 10) e.quest = "Tell me a bit more about the quest (10+ characters).";
    return e;
  };

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length) return;

    // No backend on a static site — opens the visitor's mail client pre-filled.
    const body = encodeURIComponent(`${values.quest}\n\n— ${values.name} (${values.email})`);
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent("Quest invitation from " + values.name)}&body=${body}`;
    setSent(true);
    burstConfetti();
    addXp(40, "quest-form");
  };

  const field = (key: keyof typeof values) => ({
    value: values[key],
    onChange: (ev: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setValues((v) => ({ ...v, [key]: ev.target.value }));
      if (errors[key]) setErrors((er) => ({ ...er, [key]: undefined }));
    },
  });

  const inputClass = (hasError?: string) =>
    `glass w-full rounded-xl px-4 py-3 text-sm outline-none transition-all placeholder:text-muted/60 focus:border-cyan ${
      hasError ? "border-magenta animate-[shake_0.3s_ease]" : ""
    }`;

  return (
    <Section id="contact" kicker="new quest available" title={<>Start a <span className="text-aurora">Quest</span> with me</>}>
      <div ref={sectionRef} className="grid gap-10 lg:grid-cols-[1.2fr_1fr]">
        {sent ? (
          <div className="glass animate-pop-in flex flex-col items-center justify-center rounded-2xl p-10 text-center">
            <p className="text-4xl" aria-hidden>🎉</p>
            <h3 className="font-display mt-3 text-xl font-bold">Quest accepted!</h3>
            <p className="mt-2 max-w-sm text-sm text-muted">
              Your mail client should be open with everything pre-filled. Hit send and
              I&apos;ll get back to you fast — usually before your next standup.
            </p>
            <button
              onClick={() => setSent(false)}
              className="mt-5 text-sm text-cyan hover:underline"
            >
              Start another quest
            </button>
          </div>
        ) : (
          <form onSubmit={submit} noValidate className="space-y-4">
            <div>
              <label htmlFor="q-name" className="mb-1.5 block text-xs font-medium text-muted">
                Hero name
              </label>
              <input id="q-name" type="text" placeholder="Jane Doe" className={inputClass(errors.name)} {...field("name")} aria-invalid={!!errors.name} />
              {errors.name && <p className="mt-1.5 text-xs text-magenta">{errors.name}</p>}
            </div>
            <div>
              <label htmlFor="q-email" className="mb-1.5 block text-xs font-medium text-muted">
                Raven address (email)
              </label>
              <input id="q-email" type="email" placeholder="jane@company.com" className={inputClass(errors.email)} {...field("email")} aria-invalid={!!errors.email} />
              {errors.email && <p className="mt-1.5 text-xs text-magenta">{errors.email}</p>}
            </div>
            <div>
              <label htmlFor="q-quest" className="mb-1.5 block text-xs font-medium text-muted">
                The quest
              </label>
              <textarea id="q-quest" rows={4} placeholder="We need someone to lead our product teams / speak on our podcast / build a thing…" className={inputClass(errors.quest)} {...field("quest")} aria-invalid={!!errors.quest} />
              {errors.quest && <p className="mt-1.5 text-xs text-magenta">{errors.quest}</p>}
            </div>
            <Magnetic>
              <button
                type="submit"
                className="rounded-xl bg-gradient-to-r from-violet via-magenta to-amber bg-[length:200%_auto] px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-violet/30 transition-all hover:bg-right"
              >
                Send quest invitation ✦
              </button>
            </Magnetic>
          </form>
        )}

        <Reveal variant="right">
          <div className="glass rounded-2xl p-6">
            <h3 className="text-sm font-semibold">Direct channels</h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <a href={`mailto:${profile.email}`} className="flex items-center gap-3 text-muted transition-colors hover:text-cyan">
                  <span aria-hidden>📧</span> {profile.email}
                </a>
              </li>
              <li>
                <a href={profile.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-3 text-muted transition-colors hover:text-cyan">
                  <span aria-hidden>💼</span> LinkedIn — azantor
                </a>
              </li>
              <li>
                <a href={profile.github} target="_blank" rel="noreferrer" className="flex items-center gap-3 text-muted transition-colors hover:text-cyan">
                  <span aria-hidden>💻</span> GitHub — azaworld
                </a>
              </li>
              <li>
                <a href={profile.azailabs} target="_blank" rel="noreferrer" className="flex items-center gap-3 text-muted transition-colors hover:text-cyan">
                  <span aria-hidden>🤖</span> AZAI Labs — azailabs.dev
                </a>
              </li>
              <li>
                <a href={profile.azademy} target="_blank" rel="noreferrer" className="flex items-center gap-3 text-muted transition-colors hover:text-cyan">
                  <span aria-hidden>🎓</span> AZADEMY — azademy.org
                </a>
              </li>
              {!profile.calendar.startsWith("{{") && (
                <li>
                  <a href={profile.calendar} target="_blank" rel="noreferrer" className="flex items-center gap-3 text-muted transition-colors hover:text-cyan">
                    <span aria-hidden>📅</span> Book a call
                  </a>
                </li>
              )}
            </ul>
            <p className="mt-6 border-t border-white/10 pt-4 font-mono text-[11px] leading-relaxed text-muted">
              Response time: usually &lt; 24h.
              <br />
              Timezone: {profile.location}.
            </p>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
