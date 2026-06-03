"use client";
import { useEffect, useRef } from "react";
import { useLang } from "@/context/LangContext";

function SplitText({ text, baseDelay = 0, step = 0.05 }: { text: string; baseDelay?: number; step?: number }) {
  return (
    <span className="split" aria-label={text}>
      {[...text].map((c, i) => (
        <span key={i} className="ch" aria-hidden="true" style={{ transitionDelay: `${baseDelay + i * step}s` }}>
          {c === " " ? " " : c}
        </span>
      ))}
    </span>
  );
}

const STATS = {
  en: [
    { n: "05", l: "Years in live operations", cls: "" },
    { n: "P1", l: "Critical-incident response", cls: " green" },
    { n: "→",  l: "Toward IT Risk lead",       cls: " italic" },
  ],
  cs: [
    { n: "05", l: "Let v ostrém provozu",        cls: "" },
    { n: "P1", l: "Řízení kritických incidentů", cls: " green" },
    { n: "→",  l: "Směrem k IT Risk leadu",      cls: " italic" },
  ],
};

export function Hero() {
  const { lang } = useLang();
  const photoRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (window.matchMedia("(hover: none), (pointer: coarse)").matches) return;
    const onMove = (e: MouseEvent) => {
      if (!photoRef.current) return;
      const rect = photoRef.current.getBoundingClientRect();
      const dx = (e.clientX - (rect.left + rect.width / 2)) / window.innerWidth;
      const dy = (e.clientY - (rect.top + rect.height / 2)) / window.innerHeight;
      photoRef.current.style.translate = `${dx * 14}px ${dy * 10}px`;
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  const FIRST  = 0.15;
  const SECOND = FIRST + "Matthew".length * 0.05 + 0.18;

  return (
    <section className="hero" id="top">

      {/* Stage */}
      <div className="hero-stage">
        <div className="hero-ring" aria-hidden="true" />
        <div className="hero-ticks" aria-hidden="true">
          <div className="hero-tick tl"><span className="accent">N</span> 50.0755°</div>
          <div className="hero-tick tr">14.4378° <span className="accent">E</span></div>
          <div className="hero-tick bl">PORTFOLIO / <span className="accent">2026</span></div>
          <div className="hero-tick br">FILE — <span className="accent">MG.001</span></div>
        </div>
        <div className="hero-ghost" aria-hidden="true">— SYSTEMS / RISK / IAM —</div>

        <h1 className="hero-name">
          <span className="line first">
            <SplitText text="Matthew" baseDelay={FIRST} step={0.05} />
          </span>
          <span className="line second">
            <SplitText text="Grygar" baseDelay={SECOND} step={0.05} />
          </span>
        </h1>

        <div className="hero-photo-wrap">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className="hero-photo" ref={photoRef} src="/portrait.png" alt="Matthew Grygar" />
        </div>
      </div>

      {/* Meta bar */}
      <div className="hero-meta-row hero-enter d2">
        <div className="roles">
          <span>IT Risk Manager</span>
          <span className="sep">/</span>
          <span>Systems Engineer</span>
          <span className="sep">/</span>
          <span>{lang === "cs" ? "IAM Specialista" : "IAM Specialist"}</span>
        </div>
        <div className="loc">
          <b>Prague · CZ</b>
          <span className="pill">{lang === "cs" ? "Hybrid · K dispozici" : "Hybrid · Open"}</span>
        </div>
      </div>

      {/* Bottom */}
      <div className="hero-bottom">
        <p className="hero-tagline hero-enter d5">
          {lang === "cs"
            ? <><strong>Klidná struktura</strong> pro složité problémy. Stabilizuji kritické systémy při eskalaci incidentů — a nastavuji procesy, aby se to neopakovalo.</>
            : <><strong>Calm structure</strong> for complex problems. Stabilising critical systems when incidents escalate — and building processes so they don&apos;t happen again.</>
          }
        </p>
        <div className="hero-actions hero-enter d6">
          <a href="#contact" className="cta filled">
            {lang === "cs" ? "Napište mi →" : "Get in touch →"}
          </a>
        </div>
        <div className="hero-stats hero-enter d7">
          {(STATS[lang as "en" | "cs"] ?? STATS.en).map((s) => (
            <div className="stat" key={s.l}>
              <div className={`stat-n${s.cls}`}>{s.n}</div>
              <div className="stat-l">{s.l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
