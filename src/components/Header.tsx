"use client";
import { useEffect, useState } from "react";
import { useLang } from "./Lang";
import { L } from "./L";
import s from "./Header.module.css";

const NAV = [
  { id: "o-mne", cs: "O mně", en: "About" },
  { id: "zkusenosti", cs: "Zkušenosti", en: "Experience" },
  { id: "projekty", cs: "Projekty", en: "Side projects" },
  { id: "kontakt", cs: "Kontakt", en: "Contact" },
];

export function Header() {
  const { lang, setLang } = useLang();
  const [active, setActive] = useState<string | null>(null);

  // Active section via IntersectionObserver; the rule under the bar is drawn by NameDock.
  useEffect(() => {
    if (!("IntersectionObserver" in window)) return;
    const hero = document.getElementById("top");
    const observers: IntersectionObserver[] = [];

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
    <header className={s.siteH} data-dock-header>
      <div className={`wrap ${s.inner}`}>
        <a className={s.name} href="#top" aria-label="Matthew Grygar">
          <span data-dock-target="m">Matthew</span>{" "}
          <span data-dock-target="g">Grygar</span>
        </a>
        <nav className={s.nav} aria-label="Hlavní navigace" data-dock-nav>
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
        <span data-dock-line aria-hidden="true" />
      </div>
    </header>
  );
}
