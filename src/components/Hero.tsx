"use client";
import { useEffect, useRef } from "react";

export function Hero() {
  const photoRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (window.matchMedia("(hover: none), (pointer: coarse)").matches) return;
    const onMove = (e: MouseEvent) => {
      if (!photoRef.current) return;
      const rect = photoRef.current.getBoundingClientRect();
      const dx = (e.clientX - (rect.left + rect.width / 2)) / window.innerWidth;
      const dy = (e.clientY - (rect.top + rect.height / 2)) / window.innerHeight;
      photoRef.current.style.transform = `translate3d(${dx * 12}px,${dy * 8}px,0)`;
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <section className="hero" id="top">
      <div className="hero-top">
        <div className="meta hero-enter">
          <span className="accent">●</span>&nbsp; PORTFOLIO / 2026
        </div>
        <div className="meta center hero-enter d1">
          50.0755° N &nbsp;·&nbsp; 14.4378° E
        </div>
        <div className="meta right hero-enter d2">
          <b>PRAGUE</b> · CZ &nbsp;<span className="accent">[ HYBRID · OPEN ]</span>
        </div>
      </div>

      <div className="hero-sub hero-enter d3">
        <span>IT RISK MANAGER</span>
        <span className="dotsep">/</span>
        <span>SYSTEMS ENGINEER</span>
        <span className="dotsep">/</span>
        <span>IAM SPECIALIST</span>
      </div>

      <div className="hero-stage">
        <div className="hero-ghost serif-it" aria-hidden="true">Grygar</div>
        <h1 className="hero-name">
          <span className="first hero-enter d4">Matthew</span>
          <span className="second hero-enter d5">Grygar.</span>
        </h1>
        <div className="hero-photo-wrap hero-enter d4">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className="hero-photo" ref={photoRef} src="/profile.png" alt="Matthew Grygar" />
        </div>
      </div>

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
