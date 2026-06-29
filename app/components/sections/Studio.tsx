"use client";

import { useState } from "react";
import { studio } from "../../content";
import Section from "../ui/Section";
import Reveal from "../fx/Reveal";
import TiltCard from "../ui/TiltCard";
import Magnetic from "../fx/Magnetic";

const waLink = `https://wa.me/${studio.whatsapp}?text=${encodeURIComponent(studio.whatsappText)}`;

export default function Studio() {
  const [v, setV] = useState({ name: "", email: "", role: "", pkg: "Signature", details: "" });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [failed, setFailed] = useState(false);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!v.name.trim() || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(v.email) || v.details.trim().length < 5) {
      setFailed(true);
      return;
    }
    setSending(true);
    setFailed(false);
    try {
      const res = await fetch(`https://formsubmit.co/ajax/${studio.email}`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name: v.name,
          email: v.email,
          role: v.role,
          package: v.pkg,
          details: v.details,
          _subject: `🛒 Site order — ${v.pkg} — ${v.name}`,
          _template: "box",
          _captcha: "false",
        }),
      });
      if (!res.ok) throw new Error();
      setSent(true);
    } catch {
      setFailed(true);
    } finally {
      setSending(false);
    }
  };

  const input = "glass w-full rounded-xl px-4 py-3 text-sm outline-none transition-all placeholder:text-muted/60 focus:border-cyan";

  return (
    <Section
      id="studio"
      kicker="✦ personal brand studio · get yours"
      title={
        <>
          Want a site <span className="text-aurora">like this?</span>
        </>
      }
    >
      <p className="-mt-4 mb-4 max-w-2xl text-sm leading-relaxed text-muted">{studio.intro}</p>
      <p className="mb-8">
        <a href="/personal-brand-studio" className="inline-flex items-center gap-1 text-sm font-semibold text-cyan hover:underline">
          Explore Personal Brand Studio →
        </a>
      </p>

      {/* Packages */}
      <div className="grid gap-6 lg:grid-cols-3">
        {studio.packages.map((p, i) => (
          <Reveal key={p.name} delay={(i % 3) * 110}>
            <TiltCard className="h-full">
              <article
                className={`relative flex h-full flex-col overflow-hidden rounded-2xl p-6 ${
                  p.highlight ? "border-2 border-cyan/50 bg-cyan/[0.05]" : "glass"
                }`}
              >
                {p.highlight && (
                  <span className="absolute right-4 top-4 rounded-full bg-cyan px-2.5 py-0.5 font-mono text-[10px] font-bold uppercase tracking-widest text-[#0b1026]">
                    Most popular
                  </span>
                )}
                <h3 className="font-display text-xl font-bold">{p.name}</h3>
                <p className="mt-0.5 text-xs text-muted">{p.forWho}</p>
                <p className="mt-4 font-display text-2xl font-bold text-cyan">{p.usd}</p>
                <p className="font-mono text-xs text-muted">{p.bdt}</p>
                <p className="mt-1 font-mono text-[10px] uppercase tracking-widest text-muted">⏱ {p.turnaround}</p>
                <ul className="mt-4 flex-1 space-y-2">
                  {p.points.map((pt) => (
                    <li key={pt} className="flex gap-2 text-sm leading-relaxed text-muted">
                      <span className="text-cyan" aria-hidden>▸</span>
                      {pt}
                    </li>
                  ))}
                </ul>
                <a
                  href="#studio-order"
                  onClick={() => setV((s) => ({ ...s, pkg: p.name }))}
                  className={`mt-5 rounded-xl px-4 py-2.5 text-center text-sm font-semibold transition-all ${
                    p.highlight
                      ? "bg-gradient-to-r from-violet to-cyan text-white hover:opacity-90"
                      : "glass hover:text-cyan"
                  }`}
                >
                  Order {p.name}
                </a>
              </article>
            </TiltCard>
          </Reveal>
        ))}
      </div>

      {/* Care plan + steps */}
      <div className="mt-6 grid gap-6 lg:grid-cols-[1fr_1.4fr]">
        <Reveal>
          <div className="glass flex h-full flex-col justify-center rounded-2xl p-6">
            <h3 className="font-semibold">{studio.carePlan.name} <span className="text-xs font-normal text-muted">· add-on</span></h3>
            <p className="mt-2 font-display text-xl font-bold text-amber">{studio.carePlan.usd}</p>
            <p className="font-mono text-xs text-muted">{studio.carePlan.bdt}</p>
            <p className="mt-2 text-sm leading-relaxed text-muted">{studio.carePlan.note}</p>
          </div>
        </Reveal>
        <Reveal delay={120}>
          <div className="glass h-full rounded-2xl p-6">
            <h3 className="font-mono text-xs uppercase tracking-[0.25em] text-cyan">How it works</h3>
            <ol className="mt-4 grid gap-3 sm:grid-cols-2">
              {studio.steps.map((s, i) => (
                <li key={s} className="flex gap-3 text-sm text-muted">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-violet to-cyan font-mono text-[11px] font-bold text-white">
                    {i + 1}
                  </span>
                  {s}
                </li>
              ))}
            </ol>
          </div>
        </Reveal>
      </div>

      {/* Order block */}
      <Reveal delay={150}>
        <div id="studio-order" className="glass glow-border mt-8 scroll-mt-28 rounded-2xl p-7 sm:p-9">
          <h3 className="font-display text-xl font-bold sm:text-2xl">
            Order your site <span className="text-aurora">today</span>
          </h3>
          <p className="mt-2 max-w-md text-sm text-muted">
            Send your details and I&apos;ll reply with next steps within 24 hours. Prefer to chat? WhatsApp or LinkedIn me directly.
          </p>

          {/* Quick channels */}
          <div className="mt-5 flex flex-wrap gap-3">
            <a href={waLink} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-xl bg-[#25D366] px-5 py-3 text-sm font-semibold text-[#0b1026] transition-transform hover:-translate-y-0.5">
              💬 WhatsApp
            </a>
            <a href={studio.linkedin} target="_blank" rel="noreferrer" className="glass inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold transition-colors hover:text-cyan">
              💼 LinkedIn
            </a>
            <a href={`mailto:${studio.email}?subject=Site%20order`} className="glass inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold transition-colors hover:text-cyan">
              📧 Email
            </a>
          </div>

          {/* Order form */}
          {sent ? (
            <div className="mt-6 rounded-xl border border-[#34d399]/30 bg-[#34d399]/10 p-5 text-sm">
              <p className="font-semibold text-[#34d399]">🎉 Order request received!</p>
              <p className="mt-1 text-muted">It just hit my inbox — I&apos;ll get back to you within 24 hours with next steps.</p>
            </div>
          ) : (
            <form onSubmit={submit} noValidate className="mt-6 grid gap-3 sm:grid-cols-2">
              <input className={input} placeholder="Your name" value={v.name} onChange={(e) => setV({ ...v, name: e.target.value })} />
              <input className={input} type="email" placeholder="Email" value={v.email} onChange={(e) => setV({ ...v, email: e.target.value })} />
              <input className={input} placeholder="Role / company (optional)" value={v.role} onChange={(e) => setV({ ...v, role: e.target.value })} />
              <select className={input} value={v.pkg} onChange={(e) => setV({ ...v, pkg: e.target.value })}>
                {studio.packages.map((p) => (
                  <option key={p.name} value={p.name} className="bg-bg-elevated">{p.name} — {p.usd}</option>
                ))}
                <option value="Not sure yet" className="bg-bg-elevated">Not sure yet — advise me</option>
              </select>
              <textarea className={`${input} sm:col-span-2`} rows={3} placeholder="Tell me about you — links, role, what you want to stand out for…" value={v.details} onChange={(e) => setV({ ...v, details: e.target.value })} />
              <div className="sm:col-span-2">
                <Magnetic>
                  <button type="submit" disabled={sending} className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-violet via-magenta to-amber bg-[length:200%_auto] px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-violet/30 transition-all hover:bg-right disabled:opacity-70">
                    {sending ? "Sending…" : "Send order request ✦"}
                  </button>
                </Magnetic>
                {failed && (
                  <p className="mt-2 text-xs text-magenta">
                    Please fill name, a valid email, and a few details — or just{" "}
                    <a href={waLink} target="_blank" rel="noreferrer" className="underline hover:text-cyan">WhatsApp me</a>.
                  </p>
                )}
              </div>
            </form>
          )}
        </div>
      </Reveal>
    </Section>
  );
}
