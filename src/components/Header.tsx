"use client";
import { useEffect, useState } from "react";
import { useLang } from "./Lang";
import { L } from "./L";
import s from "./Header.module.css";

const NAV = [
  { id: "o-mne", cs: "O mně", en: "About" },
  { id: "co-prinasim", cs: "Co přináším", en: "What I bring" },
  { id: "projekty", cs: "Projekty", en: "Work" },
  { id: "zkusenosti", cs: "Zkušenosti", en: "Experience" },
  { id: "kontakt", cs: "Kontakt", en: "Contact" },
];

export function Header() {
  const { lang, setLang } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string | null>(null);

  // Header border + active section, both via IntersectionObserver (no scroll loop), as in the design.
  useEffect(() => {
    if (!("IntersectionObserver" in window)) return;
    const rule = document.querySelector("[data-hero-rule]");
    const hero = document.getElementById("top");
    const observers: IntersectionObserver[] = [];

    if (rule) {
      const io = new IntersectionObserver((es) => setScrolled(!es[0].isIntersecting), { rootMargin: "-60px 0px 0px 0px", threshold: 0 });
      io.observe(rule);
      observers.push(io);
    }
    const navIO = new IntersectionObserver(
      (es) => es.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-45% 0px -50% 0px" },
    );
    NAV.forEach((n) => {
      const el = document.getElementById(n.id);
      if (el) navIO.observe(el);
    });
    observers.push(navIO);
    if (hero) {
      const heroIO = new IntersectionObserver((es) => es[0].isIntersecting && setActive(null), { threshold: 0.5 });
      heroIO.observe(hero);
      observers.push(heroIO);
    }
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <header className={`${s.siteH}${scrolled ? ` ${s.scrolled}` : ""}`}>
      <div className={`wrap ${s.inner}`}>
        <a className={s.name} href="#top">Matthew Grygar</a>
        <nav className={s.nav} aria-label="Hlavní navigace">
          {NAV.map((n) => (
            <a key={n.id} href={`#${n.id}`} className={active === n.id ? s.on : undefined}>
              <L cs={n.cs} en={n.en} />
            </a>
          ))}
        </nav>
        <div className={s.lang} role="group" aria-label="Jazyk / Language">
          <button type="button" lang="cs" aria-pressed={lang === "cs"} onClick={() => setLang("cs")}>cz</button>
          <span aria-hidden="true">/</span>
          <button type="button" lang="en" aria-pressed={lang === "en"} onClick={() => setLang("en")}>en</button>
        </div>
      </div>
    </header>
  );
}
