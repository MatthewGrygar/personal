"use client";
import { useState, useEffect, useRef, useCallback } from "react";
import { IntroOverlay } from "./IntroOverlay";

export function ClientInit() {
  const dotRef  = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [introShown, setIntroShown] = useState(true);

  const onIntroDone = useCallback(() => {
    document.body.classList.add("intro-done");
    setTimeout(() => setIntroShown(false), 1200);
  }, []);

  useEffect(() => {
    // Body classes
    document.body.classList.add("js-ready");
    requestAnimationFrame(() => document.body.classList.add("entered"));

    // Add intro-on at 1250ms — triggers name chars, ring, ticks, photo reveal
    const t1 = setTimeout(() => document.body.classList.add("intro-on"), 1250);

    // IntersectionObserver for scroll reveals
    const els = document.querySelectorAll(".reveal, .reveal-left, .reveal-right");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
        });
      },
      { threshold: 0.08, rootMargin: "-40px 0px" }
    );
    els.forEach((el) => io.observe(el));

    // Dual cursor
    const dot  = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring || window.matchMedia("(hover: none), (pointer: coarse)").matches) {
      return () => { clearTimeout(t1); io.disconnect(); };
    }
    document.body.classList.add("cursor-enabled");

    let dx = window.innerWidth / 2, dy = window.innerHeight / 2;
    let rx = dx, ry = dy, tx = dx, ty = dy;
    let alive = true;

    const onMove  = (e: MouseEvent) => { tx = e.clientX; ty = e.clientY; };
    const onLeave = () => { dot.classList.add("hide"); ring.classList.add("hide"); };
    const onEnter = () => { dot.classList.remove("hide"); ring.classList.remove("hide"); };
    const sel = "a, button, input, textarea, [data-hover]";
    const onOver = (e: MouseEvent) => { if ((e.target as Element).closest(sel)) ring.classList.add("lg"); };
    const onOut  = (e: MouseEvent) => { if ((e.target as Element).closest(sel)) ring.classList.remove("lg"); };

    window.addEventListener("mousemove", onMove);
    document.addEventListener("mouseleave", onLeave);
    document.addEventListener("mouseenter", onEnter);
    document.addEventListener("mouseover", onOver);
    document.addEventListener("mouseout", onOut);

    const loop = () => {
      dx += (tx - dx) * 0.55; dy += (ty - dy) * 0.55; // fast dot
      rx += (tx - rx) * 0.22; ry += (ty - ry) * 0.22; // soft ring
      if (dot)  dot.style.transform  = `translate3d(${dx}px,${dy}px,0) translate(-50%,-50%)`;
      if (ring) ring.style.transform = `translate3d(${rx}px,${ry}px,0) translate(-50%,-50%)`;
      if (alive) requestAnimationFrame(loop);
    };
    loop();

    return () => {
      alive = false;
      clearTimeout(t1); io.disconnect();
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", onLeave);
      document.removeEventListener("mouseenter", onEnter);
      document.removeEventListener("mouseover", onOver);
      document.removeEventListener("mouseout", onOut);
      document.body.classList.remove("cursor-enabled");
    };
  }, []);

  return (
    <>
      {introShown && <IntroOverlay onDone={onIntroDone} />}
      <div className="cursor-ring" ref={ringRef} />
      <div className="cursor-dot"  ref={dotRef}  />
    </>
  );
}
