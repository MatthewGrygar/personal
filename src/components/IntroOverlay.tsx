"use client";
import { useState, useEffect } from "react";

export function IntroOverlay({ onDone }: { onDone: () => void }) {
  const [pct, setPct] = useState(0);

  useEffect(() => {
    const dur = 1300;
    const start = performance.now();
    let raf: number;
    const tick = (t: number) => {
      const e = Math.min(1, (t - start) / dur);
      const eased = 1 - Math.pow(1 - e, 3);
      setPct(Math.round(eased * 100));
      if (e < 1) raf = requestAnimationFrame(tick);
      else setTimeout(onDone, 150);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [onDone]);

  const padded = pct.toString().padStart(3, "0");

  return (
    <div className="intro-overlay" aria-hidden="true">
      <div className="intro-grid" />
      <div className="intro-frame">
        <span className="corner tl" /><span className="corner tr" />
        <span className="corner bl" /><span className="corner br" />
      </div>
      <div className="intro-meta tl">
        <div><b>MG</b> · <span className="accent">FILE 001</span></div>
        <div>Systems · Risk · IAM</div>
      </div>
      <div className="intro-meta tr">
        <div>50.0755° N · 14.4378° E</div>
        <div><b>Prague · CZ</b></div>
      </div>
      <div className="intro-meta bl">— Initialising secure session</div>
      <div className="intro-meta br">Build <span className="accent">2026.05</span></div>
      <div className="intro-center">
        <div className="intro-name">
          Matthew <span className="accent">Grygar</span>
        </div>
        <div className="intro-loader" />
        <div className="intro-pct">
          <span className="label">Load</span>
          <span className="num">{padded}%</span>
          <span className="label">Ready</span>
        </div>
      </div>
    </div>
  );
}
