"use client";
import { useState, useEffect } from "react";

const LINKS = [
  ["00", "About",      "#about"],
  ["01", "Experience", "#experience"],
  ["02", "Projects",   "#projects"],
  ["03", "Skills",     "#skills"],
  ["04", "Contact",    "#contact"],
] as const;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen]         = useState(false);

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 40);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  return (
    <>
      <nav className={`nav${scrolled ? " scrolled" : ""}`}>
        <a href="#top" className="nav-logo">
          <span className="dot" />
          MG / GRYGAR
        </a>
        <div className="nav-links">
          {LINKS.map(([i, l, h]) => (
            <a key={l} href={h}>
              <span className="idx">{i}</span>{l}
            </a>
          ))}
        </div>
        <div className="nav-right">
          <span className="status">
            <span className="pulse" />
            Open to conversations
          </span>
          <a href="/cv-matthew-grygar.pdf" className="cta" target="_blank" rel="noreferrer">
            Download CV →
          </a>
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
        {LINKS.map(([i, l, h]) => (
          <a key={l} href={h} onClick={() => setOpen(false)}>
            <span className="idx">{i}</span>{l}
          </a>
        ))}
        <span className="status"><span className="pulse" />Open to conversations</span>
      </div>
    </>
  );
}
