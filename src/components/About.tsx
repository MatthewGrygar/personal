"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { i18n, t } from "@/data/site";
import type { Lang } from "@/data/site";

const G = {
  panel: {
    background: "rgba(16,38,62,0.97)",
    backdropFilter: "blur(28px) saturate(1.3)",
    WebkitBackdropFilter: "blur(28px) saturate(1.3)",
    border: "1px solid rgba(200,145,58,0.38)",
    boxShadow: "inset 0 1px 0 rgba(200,145,58,0.12), 0 12px 40px rgba(0,0,0,0.45)",
  } as React.CSSProperties,
  badge: {
    background: "rgba(20,46,72,0.96)",
    backdropFilter: "blur(20px)",
    WebkitBackdropFilter: "blur(20px)",
    border: "1px solid rgba(200,145,58,0.38)",
    boxShadow: "inset 0 1px 0 rgba(200,145,58,0.1)",
  } as React.CSSProperties,
  pill: {
    background: "rgba(16,38,62,0.99)",
    border: "1px solid rgba(200,145,58,0.35)",
    color: "var(--ink)",
  } as React.CSSProperties,
};

export function About({ lang }: { lang: Lang }) {
  const ref    = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once:true, margin:"-60px" });
  const about  = i18n.about;

  const fi = (delay: number) => ({
    initial:    { opacity:0, y:14 },
    animate:    inView ? { opacity:1, y:0 } : {},
    transition: { duration:0.55, delay, ease:[0.22,1,0.36,1] as any },
  });

  return (
    <div ref={ref} className="relative flex w-full h-dvh overflow-hidden"
      style={{ background:"transparent" }}>

      {/* Content — left 56% */}
      <div className="relative z-10 flex h-full flex-col m-full-width"
        style={{
          width:"56%",
          paddingLeft:"clamp(5.5rem,7vw,8rem)",
          paddingRight:"2rem",
          paddingTop:"clamp(2rem,4vh,3.5rem)",
          paddingBottom:"clamp(1.5rem,3vh,2.5rem)",
        }}>

        {/* Label */}
        <motion.p {...fi(0.05)} className="mb-1 text-xs uppercase tracking-widest"
          style={{ color:"var(--amber)", fontFamily:"DM Mono,monospace" }}>
          {t(i18n.nav.about, lang)}
        </motion.p>

        {/* Headline */}
        <motion.h2 {...fi(0.1)} className="font-display mb-3 m-h2"
          style={{ fontSize:"clamp(1.5rem,2.4vw,2.4rem)", fontWeight:300, lineHeight:1.2, color:"var(--ink)" }}>
          {t(about.headline, lang)}
        </motion.h2>

        {/* 2-col grid — scrollable on small screens */}
        <div className="flex-1 min-h-0 grid gap-x-5 gap-y-4 m-2col"
          style={{ gridTemplateColumns:"1fr 1fr", alignContent:"start", overflowY:"auto", overflowX:"hidden", scrollbarWidth:"none" }}>

          {/* ── LEFT ── */}
          <div className="flex flex-col gap-3">

            {/* Body */}
            <motion.div {...fi(0.16)} className="rounded-2xl p-4" style={G.panel}>
              {t(about.body, lang).split("\n\n").map((p:string, i:number) => (
                <p key={i} className={`leading-relaxed${i>0?" mt-2.5":""}`}
                  style={{ color:"var(--ink)", fontWeight:300, fontSize:"0.95rem" }}>{p}</p>
              ))}
            </motion.div>

            {/* Currently — pulsing green-amber badge */}
            <motion.div {...fi(0.22)}
              className="flex items-center gap-3 rounded-2xl px-4 py-3 relative overflow-hidden"
              style={{
                background: "rgba(12,32,52,0.95)",
                border: "1px solid rgba(52,211,153,0.35)",
                boxShadow: "inset 0 1px 0 rgba(52,211,153,0.1), 0 4px 20px rgba(0,0,0,0.3)",
              }}>
              {/* Pulsing glow behind dot */}
              <div className="relative flex-shrink-0">
                <motion.span
                  animate={{ scale:[1, 2.2, 1], opacity:[0.5, 0, 0.5] }}
                  transition={{ duration:2.2, repeat:Infinity, ease:"easeInOut" }}
                  style={{
                    position:"absolute", inset:"-4px",
                    borderRadius:"50%",
                    background:"rgba(52,211,153,0.25)",
                  }} />
                <span style={{
                  display:"block", width:8, height:8, borderRadius:"50%",
                  background:"#34D399",
                  boxShadow:"0 0 8px rgba(52,211,153,0.7)",
                  position:"relative", zIndex:1,
                }} />
              </div>
              <span className="leading-snug" style={{ color:"var(--ink)", fontSize:"0.93rem" }}>
                <span style={{ fontWeight:600, color:"#34D399", fontSize:"0.78rem",
                  letterSpacing:"0.04em" }}>
                  {t(about.currently.label, lang)}:
                </span>{" "}
                {t(about.currently.value, lang)}
              </span>
            </motion.div>
          </div>

          {/* ── RIGHT ── */}
          <div className="flex flex-col gap-3">

            {/* Toolbox */}
            <motion.div {...fi(0.2)} className="rounded-2xl p-4" style={G.panel}>
              <p className="mb-2.5 text-xs uppercase tracking-widest"
                style={{ color:"#A8BDD0", fontFamily:"DM Mono,monospace" }}>
                {t(about.toolboxTitle, lang)}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {about.toolbox.map(tool => (
                  <span key={tool} className="rounded-xl px-2.5 py-1 text-xs font-medium" style={G.pill}>
                    {tool}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Direction — with large transparent arrow */}
            <motion.div {...fi(0.28)} className="rounded-2xl p-4 relative overflow-hidden" style={G.badge}>
              {/* Big transparent arrow watermark */}
              <div className="pointer-events-none select-none absolute"
                style={{
                  right:"-8px", bottom:"-14px",
                  fontSize:"7rem", lineHeight:1,
                  color:"transparent",
                  WebkitTextStroke:"1.5px rgba(200,145,58,0.18)",
                  fontFamily:"DM Sans,sans-serif",
                  fontWeight:700,
                  zIndex:0,
                }}>→</div>

              <p className="mb-1.5 text-xs uppercase tracking-widest relative z-10"
                style={{ color:"var(--amber)", fontFamily:"DM Mono,monospace" }}>
                {lang==="en" ? "Long-term direction" : "Moje směřování"}
              </p>
              <p className="leading-relaxed relative z-10" style={{ fontSize:"0.93rem", color:"var(--ink)", fontWeight:300 }}>
                {lang==="en"
                  ? "Going forward, I want to focus more on IT Risk Management and operational resilience. It makes sense for me to work at the intersection of technology, risk and business — finding solutions that help organisations stay stable even in demanding situations."
                  : "Do budoucna se chci více zaměřit na IT Risk Management a provozní odolnost systémů. Dává mi smysl pracovat na pomezí technologie, rizika a businessu a hledat řešení, která pomáhají organizaci fungovat stabilně i v náročných situacích."}
              </p>
            </motion.div>

            {/* Scroll hint */}
            <motion.div {...fi(0.38)}
              className="flex items-center gap-2 mt-auto"
              style={{ color:"#A8BDD0", fontFamily:"DM Mono,monospace",
                fontSize:"0.54rem", letterSpacing:"0.16em", textTransform:"uppercase" }}>
              <motion.span animate={{ y:[0,3,0] }} transition={{ repeat:Infinity, duration:2, ease:"easeInOut" }}>↓</motion.span>
              <span>{lang==="en" ? "scroll for more" : "skroluj dál"}</span>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
