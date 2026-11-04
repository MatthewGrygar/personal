"use client";
import { useEffect, useState, type MouseEvent } from "react";
import { useLang } from "./Lang";
import { L, NewTab } from "./L";
import { EMAIL, LINKEDIN } from "./site";

const NAV = [
  { href: "#o-mne", cs: "O mně", en: "About" },
  { href: "#co-prinasim", cs: "Co přináším", en: "What I bring" },
  { href: "#projekty", cs: "Projekty", en: "Work" },
  { href: "#zkusenosti", cs: "Zkušenosti", en: "Experience" },
  { href: "#kontakt", cs: "Kontakt", en: "Contact" },
];

export function Header() {
  const { lang, setLang } = useLang();
  const [menuOpen, setMenuOpen] = useState(false);
  const navLabel = lang === "en" ? "Main navigation" : "Hlavní navigace";

  // Phone menu: lock page scroll while open, close on Escape or when the viewport grows past phone width.
  useEffect(() => {
    if (!menuOpen) return;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setMenuOpen(false);
    const mq = window.matchMedia("(min-width: 760px)");
    const onWide = () => mq.matches && setMenuOpen(false);
    window.addEventListener("keydown", onKey);
    mq.addEventListener("change", onWide);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
      mq.removeEventListener("change", onWide);
    };
  }, [menuOpen]);

  const menuGo = (e: MouseEvent<HTMLAnchorElement>) => {
    const id = e.currentTarget.getAttribute("href")!.slice(1);
    e.preventDefault();
    setMenuOpen(false);
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    // Wait a frame so the scroll lock is released before scrolling.
    requestAnimationFrame(() => document.getElementById(id)?.scrollIntoView({ behavior: reduced ? "auto" : "smooth" }));
    history.replaceState(null, "", `#${id}`);
  };

  return (
    <>
      <header className={`hdr${menuOpen ? " is-menu" : ""}`} data-hdr>
        <div className="hdr-in">
          <a href="#top" className="hdr-brand">Matthew Grygar</a>
          <nav className="hdr-nav" aria-label={navLabel}>
            {NAV.map((n) => (
              <a key={n.href} href={n.href}>
                <L cs={n.cs} en={n.en} />
              </a>
            ))}
          </nav>
          <div className="hdr-lang" role="group" aria-label="Jazyk / Language">
            <button type="button" data-lb="cs" lang="cs" aria-pressed={lang === "cs"} onClick={() => setLang("cs")}>cz</button>
            <span aria-hidden="true">/</span>
            <button type="button" data-lb="en" lang="en" aria-pressed={lang === "en"} onClick={() => setLang("en")}>en</button>
          </div>
          <button
            type="button"
            className="hdr-burger"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMenuOpen((o) => !o)}
          >
            <span className="sr-only">{menuOpen ? (lang === "en" ? "Close" : "Zavřít") : "Menu"}</span>
            <span className="hdr-burger-lines" aria-hidden="true"><span /><span /></span>
          </button>
        </div>
        <div className="hdr-prog" data-prog aria-hidden="true" />
      </header>

      {menuOpen && (
        <div id="mobile-menu" className="mmenu" role="dialog" aria-modal="true" aria-label="Menu">
          <nav aria-label={navLabel}>
            <ul>
              {NAV.map((n) => (
                <li key={n.href}>
                  <a href={n.href} onClick={menuGo}>
                    <L cs={n.cs} en={n.en} />
                    <span className="arr" aria-hidden="true">→</span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div className="mmenu-contact">
            <p className="kicker"><L cs="Napište mi" en="Get in touch" /></p>
            <a className="mmenu-mail" href={`mailto:${EMAIL}`}>{EMAIL}</a>
            <a className="mmenu-li" href={LINKEDIN} target="_blank" rel="noopener">LinkedIn ↗<NewTab /></a>
          </div>
        </div>
      )}
    </>
  );
}
