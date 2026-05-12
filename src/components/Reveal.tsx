"use client";
import { useEffect, useRef } from "react";

export function Reveal({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) e.target.classList.add("visible"); },
      { threshold: 0.1, rootMargin: "0px 0px -60px 0px" }
    );
    el.querySelectorAll(".reveal").forEach(r => obs.observe(r));
    return () => obs.disconnect();
  }, []);

  return <div ref={ref}>{children}</div>;
}
