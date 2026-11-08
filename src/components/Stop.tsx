"use client";
import { useRef, useState, type PointerEvent } from "react";
import s from "./Hero.module.css";

const MAX = 180;

/** The headline's full stop: it can be pulled away on a tether and always springs back. */
export function Stop() {
  const [drag, setDrag] = useState(false);
  const start = useRef({ x: 0, y: 0 });
  const dot = useRef<HTMLSpanElement>(null);
  const teth = useRef<HTMLSpanElement>(null);

  const down = (e: PointerEvent<HTMLSpanElement>) => {
    start.current = { x: e.clientX, y: e.clientY };
    setDrag(true);
    e.currentTarget.setPointerCapture(e.pointerId);
    e.preventDefault();
  };
  const move = (e: PointerEvent<HTMLSpanElement>) => {
    if (!drag || !dot.current || !teth.current) return;
    let dx = e.clientX - start.current.x;
    let dy = e.clientY - start.current.y;
    let d = Math.hypot(dx, dy);
    if (d > MAX) {
      const k = MAX / d;
      dx *= k;
      dy *= k;
      d = MAX;
    }
    dot.current.style.transform = `translate(${dx}px,${dy}px)`;
    teth.current.style.width = `${d}px`;
    teth.current.style.transform = `rotate(${Math.atan2(dy, dx)}rad)`;
  };
  const release = () => {
    if (!drag) return;
    setDrag(false);
    if (dot.current) dot.current.style.transform = "";
    if (teth.current) teth.current.style.width = "0";
  };

  return (
    <span className={`${s.stop}${drag ? ` ${s.drag}` : ""}`} onPointerDown={down} onPointerMove={move} onPointerUp={release} onPointerCancel={release}>
      <span ref={teth} className={s.tether} />
      <span ref={dot} className={s.dot}>.</span>
    </span>
  );
}
