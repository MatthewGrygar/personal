"use client";
import { useLang } from "./Lang";
import { L } from "./L";

const NAV = [
  { href: "#o-mne", cs: "O mně", en: "About" },
  { href: "#co-prinasim", cs: "Co přináším", en: "What I bring" },
  { href: "#projekty", cs: "Projekty", en: "Work" },
  { href: "#zkusenosti", cs: "Zkušenosti", en: "Experience" },
  { href: "#kontakt", cs: "Kontakt", en: "Contact" },
];

export function Header() {
  const { lang, setLang } = useLang();
  return (
    <header className="hdr" data-hdr>
      <div className="hdr-in">
        <a href="#top" className="hdr-brand">Matthew Grygar</a>
        <nav className="hdr-nav" aria-label={lang === "en" ? "Main navigation" : "Hlavní navigace"}>
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
      </div>
      <div className="hdr-prog" data-prog aria-hidden="true" />
    </header>
  );
}
