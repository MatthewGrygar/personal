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

      {/* Thin line + single info bar */}
      <div className="hero-metabar hero-enter d1">
        <div className="hero-metabar-roles">
          <span>IT RISK MANAGER</span>
          <span className="sep">/</span>
          <span>SYSTEMS ENGINEER</span>
          <span className="sep">/</span>
          <span>IAM SPECIALIST</span>
        </div>
        <div className="hero-metabar-loc">
          PRAGUE · CZ &nbsp;<span className="accent">[ HYBRID · OPEN ]</span>
        </div>
      </div>

      {/* Name + photo stage */}
      <div className="hero-stage">
        <div className="hero-ghost serif-it hero-enter d2" aria-hidden="true">Grygar</div>
        <h1 className="hero-name">
          <span className="first hero-anim-left">Matthew</span>
          <span className="second hero-anim-right">Grygar.</span>
        </h1>
        <div className="hero-photo-wrap hero-anim-photo">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className="hero-photo" ref={photoRef} src="/profile.png" alt="Matthew Grygar" />
        </div>
      </div>

      {/* Tagline, CTAs, Stats */}
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
