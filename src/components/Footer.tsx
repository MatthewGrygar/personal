"use client";
import { useLang } from "@/context/LangContext";

export function Footer() {
  const { lang } = useLang();
  return (
    <footer className="footer">
      <div className="footer-sig-wrap">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className="footer-sig-img" src="/signature.png" alt="Matthew Grygar signature" />
      </div>
      <div className="footer-meta">
        <div><b>© 2026 Matthew Grygar</b></div>
        <div>IT Risk · Systems · Crisis</div>
        <div>{lang === "cs" ? "Praha, Česká republika" : "Prague, Czech Republic"}</div>
      </div>
      <a href="#top" className="footer-back" data-hover>
        {lang === "cs" ? "↑ Zpět nahoru" : "↑ Back to top"}
      </a>
    </footer>
  );
}
