"use client";
import { useEffect, useRef } from "react";

export function ClientInit() {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.body.classList.add("js-ready");
    const t1 = requestAnimationFrame(() => document.body.classList.add("entered"));
    const t2 = setTimeout(() => document.body.classList.add("entered"), 200);

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

    const dot = cursorRef.current;
    if (!dot || window.matchMedia("(hover: none), (pointer: coarse)").matches) {
      return () => { cancelAnimationFrame(t1); clearTimeout(t2); io.disconnect(); };
    }
    document.body.classList.add("cursor-enabled");
    let x = window.innerWidth / 2, y = window.innerHeight / 2, tx = x, ty = y;

    const onMove  = (e: MouseEvent) => { tx = e.clientX; ty = e.clientY; };
    const onLeave = () => dot.classList.add("hide");
    const onEnter = () => dot.classList.remove("hide");
    const sel = "a, button, input, textarea, [data-hover]";
    const onOver = (e: MouseEvent) => { if ((e.target as Element).closest(sel)) dot.classList.add("lg"); };
    const onOut  = (e: MouseEvent) => { if ((e.target as Element).closest(sel)) dot.classList.remove("lg"); };
    window.addEventListener("mousemove", onMove);
    document.addEventListener("mouseleave", onLeave);
    document.addEventListener("mouseenter", onEnter);
    document.addEventListener("mouseover", onOver);
    document.addEventListener("mouseout", onOut);

    let raf: number;
    const loop = () => {
      // 0.30 lerp = faster tracking, still smooth
      x += (tx - x) * 0.30; y += (ty - y) * 0.30;
      if (dot) dot.style.transform = `translate(${x}px,${y}px) translate(-50%,-50%)`;
      raf = requestAnimationFrame(loop);
    };
    loop();

    return () => {
      cancelAnimationFrame(t1); clearTimeout(t2); io.disconnect();
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", onLeave);
      document.removeEventListener("mouseenter", onEnter);
      document.removeEventListener("mouseover", onOver);
      document.removeEventListener("mouseout", onOut);
      document.body.classList.remove("cursor-enabled");
    };
  }, []);

  return <div className="cursor" ref={cursorRef} />;
}
