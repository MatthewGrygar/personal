'use client';

/**
 * NameDock – jméno z hero sekce při scrollu plynule přeletí do menu lišty
 * a zároveň se linka pod lištou roztáhne do stran přes celou šířku webu.
 *
 * Komponenta si prvky najde podle data-atributů:
 *   [data-dock-header]      <header>
 *   [data-dock-line]        linka pod lištou – přes celou šířku lišty, na startu jen úsek nad obsahem
 *   [data-dock-nav]         <nav> – od jeho levého okraje linka začíná
 *   [data-dock-photo]       fotka v hero – na desktopu linka začíná stejně daleko od ní vlevo jako vpravo
 *   [data-dock-target="m"]  „Matthew“ v liště (cílové místo)
 *   [data-dock-target="g"]  „Grygar“ v liště
 *   [data-dock-hero="m"]    „Matthew“ v hero <h1>
 *   [data-dock-hero="g"]    „Grygar“ v hero <h1>
 */

import { useEffect, useRef } from 'react';
import styles from './NameDock.module.css';

type Pt = { x: number; y: number };
type Metrics = {
  hm: Pt;
  hg: Pt;
  tm: Pt;
  tg: Pt;
  scale: number;
  start: number;
  end: number;
  /** úsek linky na startu jako podíl šířky lišty (zleva, zprava) */
  lineL: number;
  lineR: number;
};

const clamp = (v: number) => Math.max(0, Math.min(1, v));
const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
const ease = (t: number) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);

type Props = {
  /** 0.04–0.4: nižší = měkčí, víc „klouže“ */
  smoothing?: number;
  /** 0–0.3: o kolik se „Grygar“ zpozdí za „Matthew“ */
  stagger?: number;
};

export default function NameDock({ smoothing = 0.1, stagger = 0.12 }: Props) {
  const layerRef = useRef<HTMLDivElement>(null);
  const mRef = useRef<HTMLSpanElement>(null);
  const gRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const q = (s: string) => document.querySelector<HTMLElement>(s);
    const heroM = q('[data-dock-hero="m"]');
    const heroG = q('[data-dock-hero="g"]');
    const tgtM = q('[data-dock-target="m"]');
    const tgtG = q('[data-dock-target="g"]');
    const header = q('[data-dock-header]');
    const line = q('[data-dock-line]');
    const nav = q('[data-dock-nav]');
    const photo = q('[data-dock-photo]');
    const layer = layerRef.current;
    const ovM = mRef.current;
    const ovG = gRef.current;
    if (!heroM || !heroG || !tgtM || !tgtG || !header || !layer || !ovM || !ovG) return;

    const root = document.documentElement;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let m: Metrics | null = null;
    let cur = 0;
    let active = false;
    let raf = 0;

    const measure = () => {
      const sy = window.scrollY;
      const hs = getComputedStyle(heroM);
      // overlay převezme typografii hero nadpisu (i responzivní clamp velikosti); barva jde z CSS
      for (const el of [ovM, ovG]) {
        el.style.fontFamily = hs.fontFamily;
        el.style.fontWeight = hs.fontWeight;
        el.style.fontStretch = hs.fontStretch;
        el.style.fontSize = hs.fontSize;
        el.style.letterSpacing = hs.letterSpacing;
        el.style.lineHeight = hs.lineHeight;
      }
      const rm = heroM.getBoundingClientRect();
      const rg = heroG.getBoundingClientRect();
      const tm = tgtM.getBoundingClientRect();
      const tg = tgtG.getBoundingClientRect();
      const hr = header.getBoundingClientRect();
      const heroFs = parseFloat(hs.fontSize);
      const tgtFs = parseFloat(getComputedStyle(tgtM).fontSize);

      // start: úsek nad obsahem (končí u pravého okraje obsahu), cíl: celá šířka lišty
      let lineL = 0.6;
      let lineR = 1;
      if (line && line.parentElement && line.offsetWidth > 0) {
        const W = line.offsetWidth;
        const ir = line.parentElement.getBoundingClientRect();
        let l = ir.left + ir.width * 0.6;
        if (nav && nav.offsetWidth > 0) l = nav.getBoundingClientRect().left - 14;
        // desktop: fotka stojí vedle textu → linka přesahuje fotku vlevo o tolik, o kolik vpravo
        if (photo) {
          const pr = photo.getBoundingClientRect();
          if (pr.left > ir.left + ir.width / 3) l = pr.left - (ir.right - pr.right);
        }
        lineL = clamp((l - hr.left) / W);
        lineR = clamp((ir.right - hr.left) / W);
      }

      m = {
        hm: { x: rm.left, y: rm.top + sy },
        hg: { x: rg.left, y: rg.top + sy },
        // lišta je sticky nahoře → cíl měříme relativně k ní
        tm: { x: tm.left, y: tm.top - hr.top },
        tg: { x: tg.left, y: tg.top - hr.top },
        scale: tgtFs / heroFs,
        start: 24,
        end: rg.bottom + sy - hr.height + 30,
        lineL,
        lineR,
      };
    };

    const place = (node: HTMLElement, from: Pt, to: Pt, t: number, follow: number, scale: number) => {
      const x = lerp(from.x, to.x, t);
      const y = lerp(from.y - follow, to.y, t);
      const s = lerp(1, scale, t);
      node.style.transform = `translate3d(${x.toFixed(2)}px, ${y.toFixed(2)}px, 0) scale(${s.toFixed(4)})`;
    };

    const tick = () => {
      raf = requestAnimationFrame(tick);
      if (!m) return;
      const sy = window.scrollY;
      const target = clamp((sy - m.start) / (m.end - m.start));
      cur += (target - cur) * (reduce ? 1 : smoothing);
      if (Math.abs(target - cur) < 0.0004) cur = target;

      // v klidu nahoře necháme vidět skutečný <h1> (i s jeho úvodní animací)
      const nowActive = cur > 0.0005;
      if (nowActive !== active) {
        active = nowActive;
        root.toggleAttribute('data-dock-active', active);
      }

      const follow = Math.min(sy, m.end); // do konce přeletu jede jméno se stránkou
      place(ovM, m.hm, m.tm, ease(clamp(cur / (1 - stagger))), follow, m.scale);
      place(ovG, m.hg, m.tg, ease(clamp((cur - stagger) / (1 - stagger))), follow, m.scale);
      if (line) {
        const e = ease(cur);
        const l = lerp(m.lineL, 0, e);
        const r = lerp(m.lineR, 1, e);
        line.style.transform = `translateX(${(l * 100).toFixed(3)}%) scaleX(${(r - l).toFixed(4)})`;
      }
    };

    measure();
    document.fonts?.ready.then(measure);
    const t1 = window.setTimeout(measure, 400);
    const t2 = window.setTimeout(measure, 1500); // po doběhnutí úvodní animace hero
    window.addEventListener('resize', measure);
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      window.clearTimeout(t1);
      window.clearTimeout(t2);
      window.removeEventListener('resize', measure);
      root.removeAttribute('data-dock-active');
    };
  }, [smoothing, stagger]);

  return (
    <div ref={layerRef} className={styles.layer} aria-hidden="true">
      <span ref={mRef} className={styles.word}>Matthew</span>
      <span ref={gRef} className={styles.word}>Grygar</span>
    </div>
  );
}
