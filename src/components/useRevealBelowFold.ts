"use client";
import { useEffect, type RefObject } from "react";

/**
 * Restrained entries from the design: elements that start below the fold get `preClass`
 * and lose it once they scroll into view. Skipped entirely with reduced motion.
 */
export function useRevealBelowFold(
  root: RefObject<HTMLElement | null>,
  selector: string,
  preClass: string,
  onEnter?: (el: HTMLElement) => void,
) {
  useEffect(() => {
    const rm = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (rm || !("IntersectionObserver" in window) || !root.current) return;
    const io = new IntersectionObserver(
      (es) =>
        es.forEach((e) => {
          if (!e.isIntersecting) return;
          io.unobserve(e.target);
          const t = e.target as HTMLElement;
          onEnter?.(t);
          t.classList.remove(preClass);
        }),
      { rootMargin: "0px 0px -12% 0px" },
    );
    root.current.querySelectorAll<HTMLElement>(selector).forEach((el) => {
      if (el.getBoundingClientRect().top > window.innerHeight) {
        el.classList.add(preClass);
        io.observe(el);
      }
    });
    return () => io.disconnect();
    // Runs once on mount, like the design's script.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
}
