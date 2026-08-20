"use client";

import { useCallback, useEffect, useState } from "react";
import { useGame } from "../game/GameProvider";
import { useSectionViewer } from "./SectionViewer";
import useKonami from "../fx/useKonami";

const LINKS = [
  { label: "Verified", href: "#verified" },
  { label: "Ventures", href: "#my-ventures" },
  { label: "Tree", href: "#tree" },
  { label: "Origin", href: "#about" },
  { label: "Missions", href: "#missions" },
  { label: "Premium", href: "#premium" },
];

// Secondary sections — live in the "More ▾" dropdown (desktop) and the mobile menu.
const MORE_LINKS = [
  { label: "SDET CV", href: "/sdet" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#community" },
  { label: "Follow Me", href: "#media" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

// Headline "hot" buttons — always visible, animated.
const HOT = [
  { label: "✦ Get a Site Like This", href: "/personal-brand-studio", external: false },
  { label: "🎙 AZA Podcast", href: "https://azapodcast.com", external: true },
];

type Theme = "dark" | "light" | "crt";

export default function Navbar() {
  const [active, setActive] = useState("");
  const [theme, setTheme] = useState<Theme>("dark");
  const [menuOpen, setMenuOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const { unlock } = useGame();
  const { openView } = useSectionViewer();

  // Click-to-view: open the section in an overlay instead of jumping down.
  const handleNav = (href: string) => (e: React.MouseEvent) => {
    setMenuOpen(false);
    setMoreOpen(false);
    if (openView(href)) e.preventDefault();
  };

  // Close the More dropdown on outside click
  useEffect(() => {
    if (!moreOpen) return;
    const onDoc = (e: MouseEvent) => {
      if (!(e.target as HTMLElement).closest("[data-more-menu]")) setMoreOpen(false);
    };
    document.addEventListener("click", onDoc);
    return () => document.removeEventListener("click", onDoc);
  }, [moreOpen]);

  // Restore saved theme
  useEffect(() => {
    const saved = localStorage.getItem("antor-theme") as Theme | null;
    if (!saved) return;
    document.documentElement.dataset.theme = saved;
    const raf = requestAnimationFrame(() => setTheme(saved));
    return () => cancelAnimationFrame(raf);
  }, []);

  const applyTheme = useCallback((t: Theme) => {
    setTheme(t);
    document.documentElement.dataset.theme = t;
    localStorage.setItem("antor-theme", t);
  }, []);

  const toggleTheme = () => {
    applyTheme(theme === "light" ? "dark" : "light");
    unlock("theme-shifter");
  };

  // Konami code → CRT theme + achievement
  useKonami(
    useCallback(() => {
      applyTheme(document.documentElement.dataset.theme === "crt" ? "dark" : "crt");
      unlock("konami-master");
    }, [applyTheme, unlock])
  );

  // Close the mobile menu with Escape
  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setMenuOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  // Active-section highlighting
  useEffect(() => {
    const sections = LINKS.filter((l) => l.href.startsWith("#"))
      .map((l) => document.querySelector(l.href))
      .filter(Boolean) as Element[];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(`#${e.target.id}`);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    // the fixed header is the containing block for the absolute dropdown panel
    <header className="glass-solid fixed left-1/2 top-4 z-[70] w-[calc(100%-2rem)] max-w-5xl -translate-x-1/2 rounded-2xl px-4 shadow-lg">
      <nav className="flex items-center justify-between py-3" aria-label="Main">
        <a href="#top" className="font-display text-sm font-bold tracking-tight">
          <span className="text-aurora">ANTOR</span>
          <span className="text-muted">.os</span>
        </a>

        <div className="hidden items-center gap-1 xl:flex">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={handleNav(link.href)}
              className={`rounded-lg px-3 py-1.5 text-sm font-medium transition-all ${
                active === link.href
                  ? "bg-white/10 text-text"
                  : "text-text/85 hover:bg-white/5 hover:text-text"
              }`}
            >
              {link.label}
            </a>
          ))}

          {/* More ▾ dropdown */}
          <div className="relative" data-more-menu>
            <button
              onClick={() => setMoreOpen((o) => !o)}
              aria-expanded={moreOpen}
              aria-haspopup="menu"
              className={`flex items-center gap-1 rounded-lg px-3 py-1.5 text-sm font-medium transition-all ${
                moreOpen ? "bg-white/10 text-text" : "text-text/85 hover:bg-white/5 hover:text-text"
              }`}
            >
              More
              <svg
                viewBox="0 0 24 24"
                className={`h-3.5 w-3.5 transition-transform duration-200 ${moreOpen ? "rotate-180" : ""}`}
                fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
            </button>
            {moreOpen && (
              <div
                role="menu"
                className="menu-panel animate-pop-in absolute right-0 top-[calc(100%+0.6rem)] z-[80] flex w-44 flex-col gap-0.5 rounded-xl p-1.5"
              >
                {MORE_LINKS.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    role="menuitem"
                    onClick={handleNav(link.href)}
                    className="rounded-lg px-3 py-2 text-sm font-medium text-text/85 transition-colors hover:bg-white/10 hover:text-text"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="flex items-center gap-2">
          {/* Always-visible CV shortcut — opens a clean, shareable PDF URL. */}
          <a
            href="/cv.pdf"
            target="_blank"
            rel="noreferrer"
            aria-label="Open Arifuzzaman Antor's CV"
            className="inline-flex whitespace-nowrap rounded-lg border border-cyan/35 bg-cyan/10 px-2.5 py-1.5 text-xs font-bold text-cyan transition-all hover:-translate-y-0.5 hover:bg-cyan/20"
          >
            📘 CV
          </a>

          {/* Hot headline buttons — Personal Brand Studio + Podcast */}
          {HOT.map((b) => (
            <a
              key={b.href}
              href={b.href}
              {...(b.external ? { target: "_blank", rel: "noreferrer" } : {})}
              className="hot-gradient hidden whitespace-nowrap rounded-lg px-3 py-1.5 text-xs font-bold text-white transition-transform hover:-translate-y-0.5 sm:inline-block"
            >
              {b.label}
            </a>
          ))}

          {/* Hire Me — the money button */}
          <a
            href="#services"
            onClick={handleNav("#services")}
            className="hidden whitespace-nowrap rounded-lg bg-gradient-to-r from-violet via-magenta to-amber bg-[length:200%_auto] px-3 py-1.5 text-xs font-semibold text-white shadow-md shadow-violet/30 transition-all hover:bg-right sm:inline-block"
          >
            Hire Me
          </a>

          {/* Mobile-only quick podcast button (visible without opening the menu) */}
          <a
            href="https://azapodcast.com"
            target="_blank"
            rel="noreferrer"
            aria-label="AZA Podcast"
            className="hot-gradient whitespace-nowrap rounded-lg px-2.5 py-1.5 text-xs font-bold text-white sm:hidden"
          >
            🎙 Podcast
          </a>

          {/* Sun/moon morphing toggle */}
          <button
            onClick={toggleTheme}
            className="relative h-9 w-9 rounded-full transition-colors hover:bg-white/10"
            aria-label={`Switch to ${theme === "light" ? "dark" : "light"} theme`}
          >
            <svg viewBox="0 0 24 24" className="absolute inset-0 m-auto h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              {/* circle morphs: full sun ↔ moon via mask shift */}
              <circle cx="12" cy="12" r={theme === "light" ? 5 : 9} className="transition-all duration-500" />
              <g
                className="origin-center transition-all duration-500"
                style={{ opacity: theme === "light" ? 1 : 0, transform: theme === "light" ? "scale(1)" : "scale(0.4) rotate(90deg)" }}
              >
                <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
              </g>
              <circle
                cx={theme === "light" ? 26 : 17}
                cy={theme === "light" ? -2 : 7}
                r="7"
                className="transition-all duration-500"
                fill="var(--bg)"
                stroke="none"
              />
            </svg>
          </button>

          {/* Mobile menu */}
          <button
            className="rounded-lg p-2 text-muted transition-colors hover:text-text xl:hidden"
            onClick={() => setMenuOpen((o) => !o)}
            aria-expanded={menuOpen}
            aria-label="Toggle menu"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              {menuOpen ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
            </svg>
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div className="menu-panel animate-pop-in absolute left-0 right-0 top-[calc(100%+0.5rem)] z-[75] flex flex-col gap-1 rounded-2xl p-2 xl:hidden">
          {[...LINKS, ...MORE_LINKS].map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={handleNav(link.href)}
              className={`rounded-xl px-4 py-3 text-sm font-medium transition-colors ${
                active === link.href
                  ? "bg-white/10 text-text"
                  : "text-text/85 hover:bg-white/10 hover:text-text"
              }`}
            >
              {link.label}
            </a>
          ))}
          {HOT.map((b) => (
            <a
              key={b.href}
              href={b.href}
              {...(b.external ? { target: "_blank", rel: "noreferrer" } : {})}
              onClick={() => setMenuOpen(false)}
              className="hot-gradient mt-1 rounded-xl px-4 py-3 text-center text-sm font-bold text-white"
            >
              {b.label}
            </a>
          ))}
          <a
            href="#services"
            onClick={handleNav("#services")}
            className="rounded-xl bg-gradient-to-r from-violet via-magenta to-amber px-4 py-3 text-center text-sm font-semibold text-white"
          >
            Hire Me
          </a>
        </div>
      )}
    </header>
  );
}
