"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { i18n, t } from "@/data/site";
import type { Lang } from "@/data/site";

const G = {
  panel: {
    background: "rgba(16,38,62,0.97)",
    backdropFilter: "blur(28px)",
    WebkitBackdropFilter: "blur(28px)",
    border: "1px solid rgba(200,145,58,0.45)",
    boxShadow: "inset 0 1px 0 rgba(200,145,58,0.12), 0 8px 32px rgba(0,0,0,0.4)",
  } as React.CSSProperties,
};

export function Pillars({ lang }: { lang: Lang }) {
  const ref    = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once:true, margin:"-60px" });
  const about  = i18n.about;

  const parsePillar = (text: string) => {
    const m = text.match(/^(\d+)\s*—\s*([^:]+):\s*(.+)$/s);
    if (m) return { num: m[1], title: m[2].trim(), body: m[3].trim() };
    return { num:"", title:"", body: text };
  };

  return (
    <div ref={ref}
      className="relative flex w-full h-dvh overflow-hidden"
      style={{ background:"transparent" }}>

      {/* Blobs */}
      <div className="pointer-events-none absolute inset-0" style={{ zIndex:0 }}>
        <motion.div animate={{ x:[0,16,-6,0], y:[0,-12,10,0] }}
          transition={{ duration:24, repeat:Infinity, ease:"easeInOut" }}
          style={{ position:"absolute", top:"-8%", left:"-4%", width:"36vw", height:"36vw",
            borderRadius:"50%", background:"radial-gradient(circle,rgba(30,58,95,0.22) 0%,transparent 70%)" }} />
        <motion.div animate={{ x:[0,-10,5,0], y:[0,10,-8,0] }}
          transition={{ duration:20, repeat:Infinity, ease:"easeInOut", delay:3 }}
          style={{ position:"absolute", bottom:"-10%", left:"30%", width:"24vw", height:"24vw",
            borderRadius:"50%", background:"radial-gradient(circle,rgba(30,58,95,0.3) 0%,transparent 70%)" }} />
      </div>

      {/* Content — left 56% beside photo */}
      <div className="relative z-10 flex h-full flex-col m-full-width"
        style={{
          width:"56%",
          paddingLeft:"clamp(5.5rem,7vw,8rem)",
          paddingRight:"2.5rem",
          paddingTop:"clamp(1.4rem,2.5vh,2.5rem)",
          paddingBottom:"clamp(1rem,2vh,1.8rem)",
        }}>

        {/* Label */}
        <motion.p
          initial={{ opacity:0, y:-6 }} animate={ inView ? { opacity:1, y:0 } : {} }
          transition={{ duration:0.4, delay:0.05 }}
          className="mb-1 text-xs uppercase tracking-widest"
          style={{ color:"var(--amber)", fontFamily:"DM Mono,monospace" }}>
          {t(i18n.nav.about, lang)}
        </motion.p>

        {/* Title */}
        <motion.h2
          initial={{ opacity:0, y:10 }} animate={ inView ? { opacity:1, y:0 } : {} }
          transition={{ duration:0.5, delay:0.1 }}
          className="font-display mb-3 m-h2"
          style={{ fontSize:"clamp(1.6rem,2.6vw,2.8rem)", fontWeight:300,
            lineHeight:1.1, color:"var(--ink)" }}>
          {t(about.pillarsTitle, lang)}
        </motion.h2>

        {/* 5 cards — scroll on small screens */}
        <div className="flex-1 min-h-0 flex flex-col gap-2 m-pillars-cards" style={{ overflowY:"auto", overflowX:"hidden", justifyContent:"flex-start", scrollbarWidth:"none" }}>
          {about.pillars.map((pillar, i) => {
            const { num, title, body } = parsePillar(t(pillar, lang));
            return (
              <motion.div
                key={i}
                initial={{ opacity:0, y:28, scale:0.97 }}
                animate={ inView ? { opacity:1, y:0, scale:1 } : {} }
                transition={{
                  duration: 0.6,
                  delay: 0.12 + i * 0.09,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="rounded-xl flex items-center gap-2.5 group flex-shrink-0"
                style={{ ...G.panel, padding:"0.55rem 0.9rem" }}
              >
                {/* Number badge */}
                <div style={{
                  width:40, minWidth:40, height:40,
                  display:"flex", alignItems:"center", justifyContent:"center",
                  background:"rgba(200,145,58,0.1)",
                  border:"1px solid rgba(200,145,58,0.28)",
                  borderRadius:"10px",
                  flexShrink:0,
                }}>
                  <span style={{
                    fontFamily:"DM Mono,monospace",
                    fontSize:"1rem", fontWeight:700,
                    color:"var(--amber)", letterSpacing:"0.04em",
                    lineHeight:1,
                  }}>{num}</span>
                </div>

                <div style={{ flex:1, minWidth:0 }}>
                  <p style={{ fontSize:"0.97rem", fontWeight:600, color:"var(--ink)",
                    lineHeight:1.25, marginBottom:"0.18rem" }}>
                    {title}
                  </p>
                  <p style={{ fontSize:"0.875rem", color:"var(--ink)", fontWeight:300,
                    lineHeight:1.45, opacity:0.9 }}>
                    {body}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
