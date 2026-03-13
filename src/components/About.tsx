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

      <div className="relative z-10 flex h-full flex-col m-full-width"
        style={{
          width:"56%",
          paddingLeft:"clamp(5.5rem,7vw,8rem)",
          paddingRight:"2rem",
          paddingTop:"clamp(1rem,3vh,3rem)",
          paddingBottom:"clamp(0.8rem,2vh,2rem)",
        }}>

        <motion.p {...fi(0.05)} className="text-xs uppercase tracking-widest"
          style={{ color:"var(--amber)", fontFamily:"DM Mono,monospace",
            marginBottom:"clamp(0.1rem,0.4vh,0.35rem)" }}>
          {t(i18n.nav.about, lang)}
        </motion.p>

        <motion.h2 {...fi(0.1)} className="font-display m-h2"
          style={{ fontSize:"clamp(1.4rem,2.2vw,2.4rem)", fontWeight:300,
            lineHeight:1.2, color:"var(--ink)",
            marginBottom:"clamp(0.4rem,1.2vh,1rem)" }}>
          {t(about.headline, lang)}
        </motion.h2>

        {/* 2-col grid */}
        <div className="flex-1 min-h-0 grid m-2col"
          style={{ gridTemplateColumns:"1fr 1fr",
            gap:"clamp(0.5rem,1.2vh,1rem) clamp(0.8rem,1.5vw,1.5rem)",
            alignContent:"start" }}>

          {/* ── LEFT ── */}
          <div style={{ display:"flex", flexDirection:"column",
            gap:"clamp(0.4rem,1vh,0.75rem)", minHeight:0 }}>

            <motion.div {...fi(0.16)} className="rounded-2xl"
              style={{ ...G.panel, padding:"clamp(0.6rem,1.5vh,1rem)" }}>
              {t(about.body, lang).split("\n\n").map((p:string, i:number) => (
                <p key={i} style={{ color:"var(--ink)", fontWeight:300,
                  fontSize:"clamp(0.82rem,1.2vh,0.95rem)",
                  lineHeight:1.55, marginTop: i>0 ? "clamp(0.3rem,0.8vh,0.6rem)" : 0 }}>{p}</p>
              ))}
            </motion.div>

            <motion.div {...fi(0.22)}
              className="flex items-center gap-3 rounded-2xl relative overflow-hidden flex-shrink-0"
              style={{
                background: "rgba(12,32,52,0.95)",
                border: "1px solid rgba(52,211,153,0.35)",
                boxShadow: "inset 0 1px 0 rgba(52,211,153,0.1), 0 4px 20px rgba(0,0,0,0.3)",
                padding:"clamp(0.4rem,1vh,0.75rem) clamp(0.7rem,1.2vw,1rem)",
              }}>
              <div className="relative flex-shrink-0">
                <motion.span
                  animate={{ scale:[1,2.2,1], opacity:[0.5,0,0.5] }}
                  transition={{ duration:2.2, repeat:Infinity, ease:"easeInOut" }}
                  style={{ position:"absolute", inset:"-4px", borderRadius:"50%",
                    background:"rgba(52,211,153,0.25)" }} />
                <span style={{ display:"block", width:8, height:8, borderRadius:"50%",
                  background:"#34D399", boxShadow:"0 0 8px rgba(52,211,153,0.7)",
                  position:"relative", zIndex:1 }} />
              </div>
              <span style={{ color:"var(--ink)", fontSize:"clamp(0.72rem,1.1vh,0.93rem)", lineHeight:1.4 }}>
                <span style={{ fontWeight:600, color:"#34D399", fontSize:"clamp(0.65rem,0.9vh,0.78rem)",
                  letterSpacing:"0.04em" }}>
                  {t(about.currently.label, lang)}:
                </span>{" "}
                {t(about.currently.value, lang)}
              </span>
            </motion.div>
          </div>

          {/* ── RIGHT ── */}
          <div style={{ display:"flex", flexDirection:"column",
            gap:"clamp(0.4rem,1vh,0.75rem)", minHeight:0 }}>

            <motion.div {...fi(0.2)} className="rounded-2xl flex-shrink-0"
              style={{ ...G.panel, padding:"clamp(0.6rem,1.5vh,1rem)" }}>
              <p style={{ marginBottom:"clamp(0.3rem,0.7vh,0.6rem)", fontSize:"clamp(0.6rem,0.85vh,0.75rem)",
                textTransform:"uppercase", letterSpacing:"0.1em", color:"#A8BDD0",
                fontFamily:"DM Mono,monospace" }}>
                {t(about.toolboxTitle, lang)}
              </p>
              <div className="flex flex-wrap" style={{ gap:"clamp(0.2rem,0.5vh,0.375rem)" }}>
                {about.toolbox.map(tool => (
                  <span key={tool} className="rounded-xl font-medium" style={{
                    ...G.pill,
                    padding:"clamp(0.15rem,0.4vh,0.25rem) clamp(0.4rem,0.6vw,0.625rem)",
                    fontSize:"clamp(0.62rem,0.85vh,0.75rem)",
                  }}>
                    {tool}
                  </span>
                ))}
              </div>
            </motion.div>

            <motion.div {...fi(0.28)} className="rounded-2xl relative overflow-hidden"
              style={{ ...G.badge, padding:"clamp(0.6rem,1.5vh,1rem)" }}>
              <div className="pointer-events-none select-none absolute"
                style={{ right:"-8px", bottom:"-14px", fontSize:"7rem", lineHeight:1,
                  color:"transparent", WebkitTextStroke:"1.5px rgba(200,145,58,0.18)",
                  fontFamily:"DM Sans,sans-serif", fontWeight:700, zIndex:0 }}>→</div>
              <p style={{ marginBottom:"clamp(0.2rem,0.5vh,0.375rem)",
                fontSize:"clamp(0.6rem,0.85vh,0.75rem)", textTransform:"uppercase",
                letterSpacing:"0.1em", color:"var(--amber)", fontFamily:"DM Mono,monospace",
                position:"relative", zIndex:1 }}>
                {lang==="en" ? "Long-term direction" : "Moje směřování"}
              </p>
              <p style={{ fontSize:"clamp(0.72rem,1.1vh,0.93rem)", color:"var(--ink)",
                fontWeight:300, lineHeight:1.5, position:"relative", zIndex:1 }}>
                {lang==="en"
                  ? "Going forward, I want to focus more on IT Risk Management and operational resilience. It makes sense for me to work at the intersection of technology, risk and business — finding solutions that help organisations stay stable even in demanding situations."
                  : "Do budoucna se chci více zaměřit na IT Risk Management a provozní odolnost systémů. Dává mi smysl pracovat na pomezí technologie, rizika a businessu a hledat řešení, která pomáhají organizaci fungovat stabilně i v náročných situacích."}
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
