"use client";
import { useEffect } from "react";

const EASE = "cubic-bezier(.2,.7,.2,1)";

/** Scroll progress, compact header, hero intro, portrait fade and reveal-on-scroll. Renders nothing. */
export function Motion() {
  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const hdr = document.querySelector<HTMLElement>("[data-hdr]");
    const prog = document.querySelector<HTMLElement>("[data-prog]");
    const hero = document.querySelector<HTMLElement>("[data-hero]");
    const fig = document.querySelector<HTMLElement>("[data-hero-fig]");
    const q = (sel: string) => Array.from(document.querySelectorAll<HTMLElement>(sel));

    // Hero intro: once per session, skipped entirely with reduced motion.
    if (!reduced) {
      let seen = false;
      try {
        seen = sessionStorage.getItem("mg-intro") === "1";
        sessionStorage.setItem("mg-intro", "1");
      } catch {}
      if (!seen) {
        const A = (els: HTMLElement[], kf: Keyframe[], delay: number, dur: number, step = 0) =>
          els.forEach((el, i) => el.animate?.(kf, { duration: dur, delay: delay + i * step, easing: EASE, fill: "backwards" }));
        A(q('[data-intro="line"]'), [{ transform: "scaleX(0)" }, { transform: "scaleX(1)" }], 0, 380);
        A(q('[data-intro="eye"]'), [{ opacity: 0, transform: "translateX(-6px)" }, { opacity: 1, transform: "none" }], 200, 320);
        for (const l of ["cs", "en"])
          A(q(`h1 [data-l="${l}"] [data-intro="h"]`), [{ opacity: 0, transform: "translateY(70%)" }, { opacity: 1, transform: "none" }], 300, 520, 80);
        A(q('[data-intro="fig"]'), [{ clipPath: "inset(0 0 100% 0)" }, { clipPath: "inset(0 0 0% 0)" }], 260, 740);
        A(q('[data-intro="rest"]'), [{ opacity: 0, transform: "translateY(8px)" }, { opacity: 1, transform: "none" }], 640, 380, 40);
      }
    }

    // Reveal: only elements that start below the fold, so nothing visible ever blinks out.
    const pending = new Set<HTMLElement>();
    if (!reduced) {
      const vh = window.innerHeight;
      for (const el of q("[data-reveal]")) {
        const r = el.getBoundingClientRect();
        if (r.top < vh && r.bottom > 0) continue;
        const d = (+(el.dataset.reveal || 0) || 0) * 90;
        el.style.opacity = "0";
        el.style.transform = "translateY(12px)";
        el.style.transition = `opacity .7s ease ${d}ms, transform .7s ease ${d}ms`;
        pending.add(el);
      }
    }

    let scrolled: boolean | undefined;
    const tick = () => {
      const y = window.scrollY;
      const H = document.documentElement.scrollHeight - window.innerHeight;
      if (prog) prog.style.transform = `scaleX(${H > 0 ? Math.min(1, y / H) : 0})`;
      const sc = y > 24;
      if (hdr && sc !== scrolled) {
        scrolled = sc;
        hdr.classList.toggle("is-scrolled", sc);
      }
      const h = window.innerHeight;
      pending.forEach((el) => {
        const r = el.getBoundingClientRect();
        if (r.top < h * 0.92 && r.bottom > 0) {
          el.style.opacity = "1";
          el.style.transform = "none";
          pending.delete(el);
        }
      });
      if (!fig || !hero) return;
      if (reduced || window.innerWidth < 980) {
        fig.style.transform = "";
        fig.style.opacity = "";
        return;
      }
      const p = Math.max(0, Math.min(1, y / Math.max(1, hero.offsetHeight * 0.9)));
      fig.style.transform = `scale(${1 - 0.05 * p})`;
      fig.style.opacity = String(1 - 0.4 * p);
    };

    let raf = 0;
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(() => { raf = 0; tick(); });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    tick();
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  return null;
}
