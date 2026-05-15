"use client";
import { useEffect, useRef } from "react";

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

export function Hero() {
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

      {/* Meta bar */}
      <div className="hero-meta-row hero-enter d1">
        <div className="roles">
          <span>IT Risk Manager</span>
          <span className="sep">/</span>
          <span>Systems Engineer</span>
          <span className="sep">/</span>
          <span>IAM Specialist</span>
        </div>
        <div className="loc">
          <b>Prague · CZ</b>
          <span className="pill">Hybrid · Open</span>
        </div>
      </div>

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
            <SplitText text="Grygar." baseDelay={SECOND} step={0.05} />
          </span>
        </h1>

        <div className="hero-photo-wrap">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className="hero-photo" ref={photoRef} src="/profile.png" alt="Matthew Grygar" />
        </div>
      </div>

      {/* Bottom */}
      <div className="hero-bottom">
        <p className="hero-tagline hero-enter d5">
          <strong>Calm structure</strong> for complex problems. Stabilising critical systems when incidents escalate — and building processes so they don&apos;t happen again.
        </p>
        <div className="hero-actions hero-enter d6">
          <a href="#contact" className="cta filled">Get in touch →</a>
          <a href="/cv-matthew-grygar.pdf" className="cta" target="_blank" rel="noreferrer">Download CV ↓</a>
        </div>
        <div className="hero-stats hero-enter d7">
          <div className="stat">
            <div className="stat-n">05</div>
            <div className="stat-l">Years in live operations</div>
          </div>
          <div className="stat">
            <div className="stat-n green">P1</div>
            <div className="stat-l">Critical-incident response</div>
          </div>
          <div className="stat">
            <div className="stat-n italic">→</div>
            <div className="stat-l">Toward IT Risk lead</div>
          </div>
        </div>
      </div>
    </section>
  );
}
