"use client";
import { useState, useEffect } from "react";

const SCRAMBLE_CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789#@&%/<>=*+-";

function ScrambleText({ text, startDelay = 0, settleDelay = 60, lockSpeed = 32 }: {
  text: string; startDelay?: number; settleDelay?: number; lockSpeed?: number;
}) {
  const [out, setOut] = useState(() => text.replace(/\S/g, " "));
  useEffect(() => {
    let cancelled = false;
    const chars = [...text];
    let frame = 0;
    let lockedUntil = -1;

    const tick = () => {
      if (cancelled) return;
      const next = chars.map((c, i) => {
        if (c === " " || c === ".") return c;
        if (i <= lockedUntil) return c;
        return SCRAMBLE_CHARS[(frame + i * 7) % SCRAMBLE_CHARS.length];
      }).join("");
      setOut(next);
      frame++;
      if (lockedUntil < chars.length - 1) {
        if (frame % Math.max(1, Math.round(settleDelay / 16)) === 0) {
          lockedUntil += 1;
        }
        setTimeout(tick, lockSpeed);
      } else {
        setOut(text);
      }
    };

    const start = setTimeout(tick, startDelay);
    return () => { cancelled = true; clearTimeout(start); };
  }, [text, startDelay, settleDelay, lockSpeed]);

  return <span className="scramble">{out}</span>;
}

export function IntroOverlay({ onDone }: { onDone: () => void }) {
  const [stage, setStage] = useState(0);
  const [pct, setPct] = useState(0);
  const [bytes, setBytes] = useState(0);

  useEffect(() => {
    const t1 = setTimeout(() => setStage(1), 1000);
    const t2 = setTimeout(() => setStage(2), 1250);
    const t3 = setTimeout(() => onDone(), 2100);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
  }, [onDone]);

  useEffect(() => {
    const dur = 1000;
    const start = performance.now();
    let raf: number;
    const tick = (t: number) => {
      const e = Math.min(1, (t - start) / dur);
      const eased = 1 - Math.pow(1 - e, 2.4);
      setPct(Math.round(eased * 100));
      if (e < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  useEffect(() => {
    const dur = 1000;
    const target = 1572864;
    const start = performance.now();
    let raf: number;
    const tick = (t: number) => {
      const e = Math.min(1, (t - start) / dur);
      const jitter = 1 + (Math.sin(e * 30) * 0.012);
      setBytes(Math.floor(target * (1 - Math.pow(1 - e, 2.6)) * jitter));
      if (e < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  const formattedBytes = bytes.toLocaleString("en-US");
  const padded = pct.toString().padStart(3, "0");

  return (
    <div className={`intro-overlay stage-${stage}`} aria-hidden="true">
      <div className="intro-veil" />
      <div className="intro-flash" />
      <div className="intro-burst" />
      <div className="intro-burst delay" />

      <div className="intro-grid" />
      <div className="intro-scan" />

      <div className="intro-frame">
        <span className="corner tl" /><span className="corner tr" />
        <span className="corner bl" /><span className="corner br" />
      </div>

      <div className="intro-meta tl">
        <div><b>MG</b> · <span className="accent">FILE 001</span></div>
      </div>
      <div className="intro-meta tr">
        <div><b>Prague · CZ</b></div>
      </div>
      <div className="intro-meta bl">
        <div>— SECURE SESSION</div>
      </div>
      <div className="intro-meta br">
        <div><span className="num accent">{padded}</span> / 100</div>
      </div>

      <div className="intro-center">
        <div className="intro-eyebrow">
          <span className="dot" />
          BOOTING DOSSIER
        </div>
        <h2 className="intro-name">
          <span className="line"><ScrambleText text="MATTHEW" startDelay={80} /></span>
          <span className="line accent"><ScrambleText text="GRYGAR" startDelay={160} /></span>
        </h2>
        <div className="intro-bar">
          <div className="fill" style={{ width: `${pct}%` }} />
        </div>
        <div className="intro-bytes">
          <span className="seg">
            <span className="v">{formattedBytes}</span>
            <span className="l">/ 1,572,864 B</span>
          </span>
          <span className="dotsep">·</span>
          <span className="seg">
            <span className="l">CHK</span>
            <span className="v">0x{(bytes & 0xffff).toString(16).padStart(4, "0").toUpperCase()}</span>
          </span>
        </div>
      </div>
    </div>
  );
}
