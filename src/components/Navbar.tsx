"use client";
import { useState, useEffect } from "react";
import { useLang } from "@/context/LangContext";
import { i18n, t } from "@/data/site";

export function Navbar() {
  const { lang, setLang } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen]         = useState(false);

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 40);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  const links = [
    ["00", t(i18n.nav.about,      lang), "#about"],
    ["01", t(i18n.nav.experience, lang), "#experience"],
    ["02", t(i18n.nav.projects,   lang), "#projects"],
    ["03", t(i18n.nav.skills,     lang), "#skills"],
    ["04", t(i18n.nav.contact,    lang), "#contact"],
  ];

  return (
    <>
      <nav className={`nav${scrolled ? " scrolled" : ""}`}>
        <a href="#top" className="nav-logo">
          <span className="dot" />
          MG / GRYGAR
        </a>
        <div className="nav-links">
          {links.map(([idx, label, href]) => (
            <a key={href} href={href}>
              <span className="idx">{idx}</span>{label}
            </a>
          ))}
        </div>
        <div className="nav-right">
          <span className="status">
            <span className="pulse" />
            {lang === "cs" ? "K dispozici" : "Open to work"}
          </span>
          <div className="lang-switch" data-hover>
            <button
              className={lang === "en" ? "on" : ""}
              onClick={() => setLang("en")}
              aria-label="Switch to English"
            >EN</button>
            <span className="lang-div">/</span>
            <button
              className={lang === "cs" ? "on" : ""}
              onClick={() => setLang("cs")}
              aria-label="Přepnout do češtiny"
            >CZ</button>
          </div>
          <span
            className={`burger${open ? " open" : ""}`}
            onClick={() => setOpen(o => !o)}
            data-hover
          >
            <span /><span /><span />
          </span>
        </div>
      </nav>

      <div className={`mobile-menu${open ? " open" : ""}`}>
        {links.map(([idx, label, href]) => (
          <a key={href} href={href} onClick={() => setOpen(false)}>
            <span className="idx">{idx}</span>{label}
          </a>
        ))}
        <span className="status">
          <span className="pulse" />
          {lang === "cs" ? "K dispozici" : "Open to work"}
        </span>
        <div className="lang-switch mobile" data-hover>
          <button className={lang === "en" ? "on" : ""} onClick={() => setLang("en")}>EN</button>
          <span className="lang-div">/</span>
          <button className={lang === "cs" ? "on" : ""} onClick={() => setLang("cs")}>CZ</button>
        </div>
      </div>
    </>
  );
}
