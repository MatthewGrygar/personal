'use client';

/**
 * NameDock – jméno z hero sekce se při scrollu zmenšuje a stoupá do menu lišty
 * (scroll & scale), obsah pod ním ho „tlačí“ nahoru. Ke konci se „Grygar“
 * obloukem přesune vedle „Matthew“, jméno plynule dobrzdí do lišty a teprve
 * tehdy se linka pod lištou roztáhne přes celou šířku webu.
 * Během pohybu přes jméno přejede modrý odlesk; na začátku i na konci má barvu textu.
 *
 * Prvky se hledají podle data-atributů:
 *   [data-dock-header]      <header> (sticky, top: 0)
 *   [data-dock-line]        linka pod lištou – přes celou šířku lišty, na startu jen úsek nad obsahem
 *   [data-dock-nav]         <nav> – od jeho levého okraje linka začíná (když není fotka vedle textu)
 *   [data-dock-photo]       fotka v hero – na desktopu linka začíná stejně daleko od ní vlevo jako vpravo
 *   [data-dock-target="m"]  „Matthew“ v liště (cílové místo, neviditelné)
 *   [data-dock-target="g"]  „Grygar“ v liště
 *   [data-dock-hero="m"]    „Matthew“ v hero <h1>
 *   [data-dock-hero="g"]    „Grygar“ v hero <h1>
 */

import { useEffect, useRef } from 'react';
import styles from './NameDock.module.css';

type Pt = { x: number; y: number };
type Metrics = {
  hm: Pt; // levý horní roh „Matthew“ v hero (souřadnice dokumentu)
  tm: Pt; // levý horní roh „Matthew“ v liště (souřadnice viewportu)
  two: Pt; // „Grygar“ vůči „Matthew“ – dva řádky (v hero pixelech)
  one: Pt; // „Grygar“ vůči „Matthew“ – jeden řádek (v hero pixelech)
  sc: number;
  D: number;
  /** úsek linky na startu jako podíl šířky lišty (zleva, zprava) */
  lineL: number;
  lineR: number;
};

const clamp = (v: number) => Math.max(0, Math.min(1, v));
const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
const ease = (t: number) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);

type Props = {
  /** 0.06–1: jak moc pohyb dobíhá za scrollem (1 = přesně se scrollem) */
  smoothing?: number;
  /** modrý odlesk, který přes jméno přejede během pohybu */
  sheen?: boolean;
};

export default function NameDock({ smoothing = 0.18, sheen = true }: Props) {
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
    const ovM = mRef.current;
    const ovG = gRef.current;
    if (!heroM || !heroG || !tgtM || !tgtG || !header || !ovM || !ovG) return;

    const root = document.documentElement;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let m: Metrics | null = null;
    let sst = window.scrollY; // vyhlazený scroll (scrub)
    let active = false;
    let raf = 0;

    // odlesk je gradient v CSS (barva textu podle světlého/tmavého režimu); bez něj prostá barva textu
    for (const el of [ovM, ovG]) el.classList.toggle(styles.sheen, sheen);

    const measure = () => {
      const sy = window.scrollY;
      const hs = getComputedStyle(heroM);
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
      const sc = parseFloat(getComputedStyle(tgtM).fontSize) / parseFloat(hs.fontSize);

      const hmY = rm.top + sy; // dokument
      const H = rg.bottom - rm.top; // výška dvouřádkového bloku
      const tmY = tm.top - hr.top; // lišta je sticky na top: 0

      // linka: start = úsek nad obsahem (končí u pravého okraje obsahu), cíl = celá šířka lišty
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
        hm: { x: rm.left, y: hmY },
        tm: { x: tm.left, y: tmY },
        two: { x: rg.left - rm.left, y: rg.top - rm.top },
        one: { x: (tg.left - tm.left) / sc, y: (tg.top - tm.top) / sc },
        sc,
        // dráha scrollu, na které spodek jména drží krok s obsahem pod ním
        D: hmY - tmY + H * (1 - sc),
        lineL,
        lineR,
      };
    };

    const tick = () => {
      raf = requestAnimationFrame(tick);
      if (!m) return;
      const st = window.scrollY;
      sst += (st - sst) * (reduce ? 1 : smoothing);
      if (Math.abs(st - sst) < 0.1) sst = st;

      // většinu dráhy lineárně (obsah jméno tlačí), posledních 15 % plynule dobrzdí
      const r = sst / m.D;
      const a = 0.85;
      let p: number;
      if (r <= a) p = Math.max(0, r);
      else {
        const u = clamp((r - a) / (2 * (1 - a)));
        p = a + (1 - a) * u * (2 - u);
      }

      // v klidu nahoře je vidět skutečný <h1> (i s jeho úvodní animací)
      const nowActive = p > 0.0005;
      if (nowActive !== active) {
        active = nowActive;
        root.toggleAttribute('data-dock-active', active);
      }

      // vrstva je fixed: y z dokumentu se díky dráze D posouvá přesně tak, aby jméno drželo krok s obsahem
      const s = lerp(1, m.sc, p);
      const bx = lerp(m.hm.x, m.tm.x, p);
      const by = lerp(m.hm.y, m.tm.y, p);
      // „Grygar“ obloukem vedle „Matthew“: doprava a s mírným zpožděním nahoru
      const qx = ease(clamp((p - 0.5) / 0.38));
      const qy = ease(clamp((p - 0.66) / 0.34));
      const gx = bx + lerp(m.two.x, m.one.x, qx) * s;
      const gy = by + lerp(m.two.y, m.one.y, qy) * s;

      const tf = (x: number, y: number) => `translate3d(${x.toFixed(2)}px, ${y.toFixed(2)}px, 0) scale(${s.toFixed(4)})`;
      ovM.style.transform = tf(bx, by);
      ovG.style.transform = tf(gx, gy);

      // odlesk přejede během pohybu, na začátku i na konci čistá barva textu
      const bp = `${(100 - p * 100).toFixed(2)}% 0`;
      ovM.style.backgroundPosition = bp;
      ovG.style.backgroundPosition = bp;

      // linka se roztahuje do stran až ve chvíli, kdy jméno dosedá do lišty
      if (line) {
        const e = ease(clamp((p - 0.8) / 0.2));
        const l = lerp(m.lineL, 0, e);
        const rr = lerp(m.lineR, 1, e);
        line.style.transform = `translateX(${(l * 100).toFixed(3)}%) scaleX(${(rr - l).toFixed(4)})`;
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
  }, [smoothing, sheen]);

  return (
    <div className={styles.layer} aria-hidden="true">
      <span ref={mRef} className={styles.word}>Matthew</span>
      <span ref={gRef} className={styles.word}>Grygar</span>
    </div>
  );
}
