"use client";

import { useState } from "react";
import Image from "next/image";
import antorFace from "../../assets/arifuz.jpg";
import { studio } from "../../content";

const waLink = `https://wa.me/${studio.whatsapp}?text=${encodeURIComponent(studio.whatsappText)}`;

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

// Team avatar: Antor's bundled photo; others load /<img>.jpg from public/
// and fall back to polished initials.
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
          _subject: `🛒 Personal Brand Studio order — ${v.pkg} — ${v.name}`,
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
        <option value="Custom — to my requirements" className="bg-bg-elevated">Custom — built to my requirements</option>
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
    <div id="top" className="mx-auto w-full max-w-5xl px-6 pb-20">
      {/* Top bar */}
      <header className="glass sticky top-4 z-20 -mx-2 mt-4 flex items-center justify-between rounded-2xl px-4 py-3">
        <a href="#top" aria-label="Back to top" className="font-display text-lg font-bold transition-opacity hover:opacity-80">
          <span className="text-aurora">Personal Brand</span> Studio
        </a>
        <a href="#packages" className="rounded-lg bg-gradient-to-r from-violet to-cyan px-4 py-1.5 text-sm font-semibold text-white">
          Pick a package
        </a>
      </header>

      {/* Hero — one idea, three steps, two buttons */}
      <section className="py-16 text-center sm:py-24">
        <p className="animate-fade-up font-mono text-xs uppercase tracking-[0.3em] text-cyan">
          Personal Brand Studio · done-for-you
        </p>
        <h1 className="font-display animate-fade-up mx-auto mt-4 max-w-3xl text-4xl font-bold leading-[1.1] tracking-tight sm:text-6xl" style={{ animationDelay: "100ms" }}>
          We build your <span className="text-aurora">personal website</span> — for you.
        </h1>
        <p className="animate-fade-up mx-auto mt-5 max-w-xl text-lg leading-relaxed text-muted" style={{ animationDelay: "200ms" }}>
          Your story, work &amp; achievements in one premium site that makes people trust you in seconds.
          For doctors, consultants, founders &amp; executives.
        </p>
        <div className="animate-fade-up mx-auto mt-7 flex max-w-2xl flex-wrap items-center justify-center gap-x-3 gap-y-1 text-sm font-medium" style={{ animationDelay: "300ms" }}>
          <span className="text-cyan">1 · Pick a package</span>
          <span className="text-muted" aria-hidden>→</span>
          <span className="text-cyan">2 · We build everything</span>
          <span className="text-muted" aria-hidden>→</span>
          <span className="text-cyan">3 · Your site goes live</span>
        </div>
        <div className="animate-fade-up mt-9 flex flex-wrap justify-center gap-4" style={{ animationDelay: "400ms" }}>
          <a href="#packages" className="rounded-xl bg-gradient-to-r from-violet via-magenta to-amber bg-[length:200%_auto] px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-violet/30 transition-all hover:bg-right">
            Pick your package →
          </a>
          <a href="#demos" className="glass glow-border rounded-xl px-7 py-3.5 text-sm font-semibold transition-colors hover:text-cyan">
            See real examples
          </a>
        </div>
      </section>

      {/* Proof — real, clickable sites */}
      <section id="demos" className="scroll-mt-24 py-10">
        <h2 className="font-display text-center text-3xl font-bold">
          Real sites we <span className="text-aurora">built</span>
        </h2>
        <p className="mt-2 text-center text-sm text-muted">Open one — this is the exact quality you get.</p>
        <div className="mx-auto mt-10 grid max-w-4xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {studio.showcase.map((s) => (
            <a
              key={s.url}
              href={s.url}
              target="_blank"
              rel="noreferrer"
              className="glass glow-border group flex flex-col rounded-2xl p-6 transition-transform duration-300 hover:-translate-y-1"
            >
              <p className="font-display text-lg font-bold group-hover:text-cyan">{s.name}</p>
              <p className="mt-0.5 text-xs font-medium text-cyan">{s.role}</p>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">{s.blurb}</p>
              <span className="mt-4 text-sm font-semibold text-cyan">View live →</span>
            </a>
          ))}
        </div>
      </section>

      {/* Why us — the one reasons section */}
      <section className="py-10">
        <h2 className="font-display text-center text-3xl font-bold">
          Why <span className="text-aurora">us</span>
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

      {/* Packages — simple and scannable */}
      <section id="packages" className="scroll-mt-24 py-10">
        <h2 className="font-display text-center text-3xl font-bold">Pick your <span className="text-aurora">package</span></h2>
        <p className="mt-2 text-center text-sm text-muted">One clear price. Everything done for you. No hidden fees.</p>
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {studio.packages.map((p) => (
            <article
              key={p.name}
              className={`relative flex h-full flex-col overflow-hidden rounded-2xl p-7 ${
                p.highlight ? "border-2 border-cyan/50 bg-cyan/[0.05]" : "glass"
              }`}
            >
              {p.highlight && (
                <span className="absolute right-4 top-4 rounded-full bg-cyan px-2.5 py-0.5 font-mono text-[10px] font-bold uppercase tracking-widest text-[#0b1026]">
                  Most popular
                </span>
              )}
              <h3 className="font-display text-2xl font-bold">{p.name}</h3>
              <p className="mt-1 text-sm text-muted">{p.forWho}</p>
              <p className="mt-5 font-display text-4xl font-bold text-cyan">{p.usd.replace("From ", "")}</p>
              <p className="mt-0.5 text-sm text-muted">{p.bdt.replace("From ", "")} · ready in {p.turnaround}</p>
              <ul className="mt-6 flex-1 space-y-3">
                {p.points.map((pt) => (
                  <li key={pt} className="flex gap-2.5 text-sm leading-relaxed">
                    <span className="text-cyan" aria-hidden>✓</span>
                    {pt}
                  </li>
                ))}
              </ul>
              <a href="#order" className={`mt-7 rounded-xl px-4 py-3 text-center text-sm font-semibold transition-all ${p.highlight ? "bg-gradient-to-r from-violet to-cyan text-white hover:opacity-90" : "glass hover:text-cyan"}`}>
                Choose {p.name}
              </a>
            </article>
          ))}
        </div>

        {/* Custom + care plan — one quiet strip */}
        <div className="glass mt-6 flex flex-wrap items-center justify-between gap-4 rounded-2xl p-6 text-sm">
          <p className="text-muted">
            <span className="font-semibold text-text">Need something different?</span>{" "}
            We also build fully custom sites to your exact requirements — and an optional{" "}
            <span className="text-amber">Care Plan ({studio.carePlan.usd.toLowerCase()})</span> keeps your site updated for you.
          </p>
          <a href="#order" className="shrink-0 rounded-xl bg-gradient-to-r from-violet to-cyan px-5 py-2.5 font-semibold text-white transition-opacity hover:opacity-90">
            Get a custom quote →
          </a>
        </div>
      </section>

      {/* How it works — one compact row */}
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

      {/* Client words — only renders when real quotes exist */}
      {studio.clientQuotes.length > 0 && (
        <section className="py-10">
          <h2 className="font-display text-center text-3xl font-bold">
            What clients <span className="text-aurora">say</span>
          </h2>
          <div className="mx-auto mt-10 grid max-w-3xl gap-6 sm:grid-cols-2">
            {studio.clientQuotes.map((c) => (
              <figure key={c.author} className="glass rounded-2xl p-6">
                <blockquote className="text-sm leading-relaxed">
                  <span className="text-aurora font-display text-2xl leading-none" aria-hidden>“</span>
                  {c.quote}
                </blockquote>
                <figcaption className="mt-3">
                  <span className="block text-sm font-semibold">{c.author}</span>
                  <span className="block text-xs text-muted">{c.role}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </section>
      )}

      {/* Order */}
      <section id="order" className="scroll-mt-24 py-10">
        <div className="glass glow-border rounded-2xl p-7 sm:p-10">
          <h2 className="font-display text-2xl font-bold sm:text-3xl">
            Order your <span className="text-aurora">site</span>
          </h2>
          <p className="mt-2 max-w-md text-sm text-muted">
            Send your details and we&apos;ll reply within 24 hours — or just message us directly.
          </p>
          <p className="mt-3 inline-flex items-start gap-2 rounded-xl border border-[#34d399]/25 bg-[#34d399]/[0.07] px-4 py-2.5 text-sm leading-relaxed text-[#34d399]">
            <span aria-hidden>✓</span> {studio.guarantee}
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <a href={waLink} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-xl bg-[#25D366] px-5 py-3 text-sm font-semibold text-[#0b1026] transition-transform hover:-translate-y-0.5">
              💬 WhatsApp
            </a>
            <a href={studio.linkedin} target="_blank" rel="noreferrer" className="glass inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold transition-colors hover:text-cyan">
              💼 LinkedIn
            </a>
            <a href={`mailto:${studio.email}?subject=Personal%20Brand%20Studio%20order`} className="glass inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold transition-colors hover:text-cyan">
              📧 Email
            </a>
            <a href="/proposal.pdf" target="_blank" rel="noreferrer" className="glass inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold transition-colors hover:text-amber">
              📄 Download proposal (PDF)
            </a>
          </div>
          <div className="mt-6">
            <OrderForm />
          </div>
        </div>
      </section>

      <footer className="border-t border-border pt-8 text-center text-sm text-muted">
        <p>
          <span className="text-aurora">Personal Brand</span> Studio · by{" "}
          <a href="https://azantor.xyz" className="hover:text-cyan">Arifuzzaman Antor</a>
        </p>
        <p className="mt-1 text-xs">Premium personal-brand websites · built &amp; shipped, worldwide.</p>
        <p className="mt-2 text-xs">
          <a href="/proposal.pdf" target="_blank" rel="noreferrer" className="text-cyan hover:underline">
            📄 Client proposal (PDF)
          </a>
        </p>
      </footer>
    </div>
  );
}
