"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import antorFace from "../../assets/arifuz.jpg";
import { studio } from "../../content";

const waLink = `https://wa.me/${studio.whatsapp}?text=${encodeURIComponent(studio.whatsappText)}`;

// Animated "credibility climb" bar graph — bars grow when scrolled into view.
function CredibilityClimb() {
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
      { threshold: 0.4 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return (
    <div ref={ref} className="glass rounded-2xl p-6 sm:p-8">
      <div className="flex h-56 items-end justify-between gap-3 sm:gap-6">
        {studio.ladder.map((b, i) => (
          <div key={b.label} className="flex flex-1 flex-col items-center justify-end">
            <span className={`mb-2 font-display text-sm font-bold ${b.highlight ? "text-cyan" : "text-muted"}`}>
              {inView ? `${b.value}%` : ""}
            </span>
            <div
              className={`w-full rounded-t-lg ${b.highlight ? "bg-gradient-to-t from-violet via-magenta to-cyan shadow-[0_0_24px_-4px_var(--glow)]" : "bg-white/12"}`}
              style={{
                height: inView ? `${(b.value / 100) * 190}px` : "0px",
                transition: `height 1.1s cubic-bezier(0.22,1,0.36,1) ${i * 140}ms`,
              }}
            />
            <span className={`mt-3 text-center text-xs ${b.highlight ? "font-semibold text-text" : "text-muted"}`}>{b.label}</span>
            <span className="mt-0.5 text-center text-[10px] leading-tight text-muted">{b.note}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="mx-auto mt-8 max-w-2xl space-y-3">
      {studio.faq.map((f, i) => (
        <div key={f.q} className="glass overflow-hidden rounded-xl">
          <button
            onClick={() => setOpen(open === i ? null : i)}
            aria-expanded={open === i}
            className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-sm font-semibold"
          >
            {f.q}
            <span className={`text-cyan transition-transform duration-300 ${open === i ? "rotate-45" : ""}`} aria-hidden>+</span>
          </button>
          <div className="grid transition-[grid-template-rows] duration-300 ease-out" style={{ gridTemplateRows: open === i ? "1fr" : "0fr" }}>
            <div className="overflow-hidden">
              <p className="px-5 pb-4 text-sm leading-relaxed text-muted">{f.a}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

// Team avatar: Antor's bundled photo; Sharif auto-loads /sharif.jpg (drop the
// file in public/) and falls back to polished initials until it's there.
function Avatar({ img, name }: { img: string; name: string }) {
  const [imgFailed, setImgFailed] = useState(false);
  const initials = name.split(" ").map((w) => w[0]).slice(0, 2).join("");

  if (img === "antor") {
    return (
      <div className="portrait-duotone h-20 w-20 shrink-0 !rounded-full ring-2 ring-violet/60">
        <Image src={antorFace} alt={name} className="h-full w-full object-cover" />
      </div>
    );
  }
  return (
    <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-full ring-2 ring-cyan/50">
      <span className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-cyan to-violet font-display text-2xl font-bold text-white">
        {initials}
      </span>
      {!imgFailed && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={`/${img}.jpg`}
          alt={name}
          onError={() => setImgFailed(true)}
          className="absolute inset-0 h-full w-full object-cover"
        />
      )}
    </div>
  );
}

function OrderForm() {
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
          _subject: `🛒 AZA Folio order — ${v.pkg} — ${v.name}`,
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

  const input =
    "glass w-full rounded-xl px-4 py-3 text-sm outline-none transition-all placeholder:text-muted/60 focus:border-cyan";

  if (sent) {
    return (
      <div className="rounded-xl border border-[#34d399]/30 bg-[#34d399]/10 p-6 text-sm">
        <p className="font-display text-lg font-bold text-[#34d399]">🎉 Order request received!</p>
        <p className="mt-1 text-muted">It just hit our inbox — we&apos;ll reply within 24 hours with next steps.</p>
      </div>
    );
  }

  return (
    <form onSubmit={submit} noValidate className="grid gap-3 sm:grid-cols-2">
      <input className={input} placeholder="Your name" value={v.name} onChange={(e) => setV({ ...v, name: e.target.value })} />
      <input className={input} type="email" placeholder="Email" value={v.email} onChange={(e) => setV({ ...v, email: e.target.value })} />
      <input className={input} placeholder="Role / company (optional)" value={v.role} onChange={(e) => setV({ ...v, role: e.target.value })} />
      <select className={input} value={v.pkg} onChange={(e) => setV({ ...v, pkg: e.target.value })}>
        {studio.packages.map((p) => (
          <option key={p.name} value={p.name} className="bg-bg-elevated">
            {p.name} — {p.usd}
          </option>
        ))}
        <option value="Not sure yet" className="bg-bg-elevated">Not sure — advise me</option>
      </select>
      <textarea
        className={`${input} sm:col-span-2`}
        rows={3}
        placeholder="Tell us about you — links, role, what you want to stand out for…"
        value={v.details}
        onChange={(e) => setV({ ...v, details: e.target.value })}
      />
      <div className="sm:col-span-2">
        <button
          type="submit"
          disabled={sending}
          className="rounded-xl bg-gradient-to-r from-violet via-magenta to-amber bg-[length:200%_auto] px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-violet/30 transition-all hover:bg-right disabled:opacity-70"
        >
          {sending ? "Sending…" : "Send order request ✦"}
        </button>
        {failed && (
          <p className="mt-2 text-xs text-magenta">
            Add your name, a valid email, and a few details — or just{" "}
            <a href={waLink} target="_blank" rel="noreferrer" className="underline hover:text-cyan">WhatsApp us</a>.
          </p>
        )}
      </div>
    </form>
  );
}

export default function AzaFolioLanding() {
  return (
    <div className="mx-auto w-full max-w-5xl px-6 pb-20">
      {/* Top bar */}
      <header className="glass sticky top-4 z-20 -mx-2 mt-4 flex items-center justify-between rounded-2xl px-4 py-3">
        <span className="font-display text-lg font-bold">
          <span className="text-aurora">AZA</span> Folio
        </span>
        <div className="flex items-center gap-2 text-sm">
          <a href="https://azantor.xyz" className="hidden text-muted transition-colors hover:text-text sm:inline">
            ← Live demo
          </a>
          <a href="#order" className="rounded-lg bg-gradient-to-r from-violet to-cyan px-4 py-1.5 font-semibold text-white">
            Order
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="py-16 text-center sm:py-24">
        <span className="animate-fade-up inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-4 py-1.5 text-xs text-muted">
          ✦ The site you&apos;re about to see the demo of is{" "}
          <a href="https://azantor.xyz" className="text-cyan hover:underline">azantor.xyz</a>
        </span>
        <h1 className="font-display animate-fade-up mt-6 text-5xl font-bold leading-[1.05] tracking-tight sm:text-7xl" style={{ animationDelay: "100ms" }}>
          <span className="text-aurora">AZA</span> Folio
        </h1>
        <p className="animate-fade-up mt-4 text-xl font-semibold text-text sm:text-2xl" style={{ animationDelay: "200ms" }}>
          {studio.tagline}
        </p>
        <p className="animate-fade-up mx-auto mt-5 max-w-2xl leading-relaxed text-muted" style={{ animationDelay: "300ms" }}>
          {studio.intro}
        </p>
        <div className="animate-fade-up mt-8 flex flex-wrap justify-center gap-4" style={{ animationDelay: "400ms" }}>
          <a href="#order" className="rounded-xl bg-gradient-to-r from-violet via-magenta to-amber bg-[length:200%_auto] px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-violet/30 transition-all hover:bg-right">
            Order your site →
          </a>
          <a href="https://azantor.xyz" target="_blank" rel="noreferrer" className="glass glow-border rounded-xl px-7 py-3.5 text-sm font-semibold transition-colors hover:text-cyan">
            See the live demo
          </a>
        </div>
      </section>

      {/* Outcomes — what it gets you */}
      <section className="py-10">
        <h2 className="font-display text-center text-3xl font-bold">
          What a great site <span className="text-aurora">gets you</span>
        </h2>
        <p className="mt-2 text-center text-sm text-muted">A site isn&apos;t a cost. It&apos;s the thing that gets you the yes.</p>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {studio.outcomes.map((o) => (
            <div key={o.title} className="glass rounded-2xl p-6 transition-transform duration-300 hover:-translate-y-1">
              <p className="text-3xl" aria-hidden>{o.icon}</p>
              <h3 className="mt-3 font-semibold">{o.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-muted">{o.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Credibility climb */}
      <section className="py-10">
        <h2 className="font-display text-center text-3xl font-bold">
          Where you land on the <span className="text-aurora">credibility ladder</span>
        </h2>
        <p className="mt-2 mb-10 text-center text-sm text-muted">
          People decide in seconds. AZA Folio puts you at the top of the ladder.
        </p>
        <CredibilityClimb />
      </section>

      {/* Why */}
      <section className="py-10">
        <h2 className="font-display text-center text-3xl font-bold">
          Why <span className="text-aurora">AZA Folio</span>
        </h2>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {studio.why.map((w) => (
            <div key={w.title} className="glass rounded-2xl p-6 transition-transform duration-300 hover:-translate-y-1">
              <p className="text-3xl" aria-hidden>{w.icon}</p>
              <h3 className="mt-3 font-semibold">{w.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-muted">{w.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Comparison */}
      <section className="py-10">
        <h2 className="font-display text-center text-3xl font-bold">
          AZA Folio vs <span className="text-aurora">the alternatives</span>
        </h2>
        <div className="mt-10 overflow-x-auto">
          <table className="w-full min-w-[560px] border-collapse text-sm">
            <thead>
              <tr>
                <th className="p-3 text-left font-medium text-muted"></th>
                {studio.compare.cols.map((c) => (
                  <th
                    key={c}
                    className={`p-3 text-center font-semibold ${c === "AZA Folio" ? "rounded-t-xl bg-cyan/10 text-cyan" : "text-muted"}`}
                  >
                    {c}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {studio.compare.rows.map((r) => (
                <tr key={r.feature} className="border-t border-white/10">
                  <td className="p-3 text-left text-muted">{r.feature}</td>
                  <td className="p-3 text-center text-muted">{r.template}</td>
                  <td className="p-3 text-center text-muted">{r.agency}</td>
                  <td className="p-3 text-center font-medium text-text bg-cyan/[0.06]">{r.shipfolio}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Packages */}
      <section className="py-10">
        <h2 className="font-display text-center text-3xl font-bold">Pick your <span className="text-aurora">package</span></h2>
        <p className="mt-2 text-center text-sm text-muted">Transparent pricing — USD & BDT. No hidden fees.</p>
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {studio.packages.map((p) => (
            <article
              key={p.name}
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
              <p className="mt-4 rounded-lg bg-white/[0.04] px-3 py-2 text-xs italic leading-snug text-cyan">
                → {p.outcome}
              </p>
              <a href="#order" className={`mt-4 rounded-xl px-4 py-2.5 text-center text-sm font-semibold transition-all ${p.highlight ? "bg-gradient-to-r from-violet to-cyan text-white hover:opacity-90" : "glass hover:text-cyan"}`}>
                Order {p.name}
              </a>
            </article>
          ))}
        </div>
        <div className="glass mt-6 flex flex-wrap items-center justify-between gap-4 rounded-2xl p-6">
          <div>
            <h3 className="font-semibold">{studio.carePlan.name} <span className="text-xs font-normal text-muted">· optional add-on</span></h3>
            <p className="mt-1 text-sm text-muted">{studio.carePlan.note}</p>
          </div>
          <p className="text-right">
            <span className="font-display text-xl font-bold text-amber">{studio.carePlan.usd}</span>
            <span className="block font-mono text-xs text-muted">{studio.carePlan.bdt}</span>
          </p>
        </div>
      </section>

      {/* How it works */}
      <section className="py-10">
        <h2 className="font-display text-center text-3xl font-bold">How it <span className="text-aurora">works</span></h2>
        <ol className="mx-auto mt-10 grid max-w-3xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {studio.steps.map((s, i) => (
            <li key={s} className="glass flex items-start gap-3 rounded-2xl p-5">
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-violet to-cyan font-mono text-xs font-bold text-white">{i + 1}</span>
              <span className="text-sm text-muted">{s}</span>
            </li>
          ))}
        </ol>
      </section>

      {/* FAQ */}
      <section className="py-10">
        <h2 className="font-display text-center text-3xl font-bold">Questions, <span className="text-aurora">answered</span></h2>
        <Faq />
      </section>

      {/* Team */}
      <section className="py-10">
        <h2 className="font-display text-center text-3xl font-bold">The <span className="text-aurora">team</span></h2>
        <div className="mx-auto mt-10 grid max-w-3xl gap-6 sm:grid-cols-2">
          {studio.team.map((m) => (
            <div key={m.name} className="glass glow-border rounded-2xl p-6">
              <div className="flex items-center gap-4">
                <Avatar img={m.img} name={m.name} />
                <div>
                  <p className="font-display text-lg font-bold">{m.name}</p>
                  <p className="text-sm font-medium text-cyan">{m.role}</p>
                </div>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-muted">{m.bio}</p>
              <p className="mt-3 font-mono text-[11px] uppercase tracking-widest text-muted">{m.cred}</p>
              <div className="mt-4 flex gap-2">
                <a
                  href={m.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="glass rounded-lg px-3 py-1.5 text-xs text-muted transition-colors hover:text-cyan"
                >
                  💼 LinkedIn
                </a>
                <a
                  href={`https://wa.me/${m.whatsapp}?text=${encodeURIComponent(studio.whatsappText)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-lg bg-[#25D366]/15 px-3 py-1.5 text-xs text-[#25D366] transition-colors hover:bg-[#25D366]/25"
                >
                  💬 WhatsApp
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Order */}
      <section id="order" className="scroll-mt-24 py-10">
        <div className="glass glow-border rounded-2xl p-7 sm:p-10">
          <h2 className="font-display text-2xl font-bold sm:text-3xl">
            Order your <span className="text-aurora">AZA Folio</span>
          </h2>
          <p className="mt-2 max-w-md text-sm text-muted">
            Send your details and we&apos;ll reply within 24 hours. Prefer to chat? WhatsApp or LinkedIn us directly.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <a href={waLink} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-xl bg-[#25D366] px-5 py-3 text-sm font-semibold text-[#0b1026] transition-transform hover:-translate-y-0.5">
              💬 WhatsApp
            </a>
            <a href={studio.linkedin} target="_blank" rel="noreferrer" className="glass inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold transition-colors hover:text-cyan">
              💼 LinkedIn
            </a>
            <a href={`mailto:${studio.email}?subject=AZA Folio%20order`} className="glass inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold transition-colors hover:text-cyan">
              📧 Email
            </a>
          </div>
          <div className="mt-6">
            <OrderForm />
          </div>
        </div>
      </section>

      <footer className="border-t border-border pt-8 text-center text-sm text-muted">
        <p>
          <span className="text-aurora">AZA</span> Folio · by{" "}
          <a href="https://azantor.xyz" className="hover:text-cyan">Arifuzzaman Antor</a>
        </p>
        <p className="mt-1 text-xs">Premium personal-brand sites · built &amp; shipped, worldwide.</p>
      </footer>
    </div>
  );
}
