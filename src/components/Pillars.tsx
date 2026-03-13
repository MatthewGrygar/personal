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

      <div className="pointer-events-none absolute inset-0" style={{ zIndex:0 }}>
        <motion.div animate={{ x:[0,16,-6,0], y:[0,-12,10,0] }}
          transition={{ duration:24, repeat:Infinity, ease:"easeInOut" }}
          style={{ position:"absolute", top:"-8%", left:"-4%", width:"36vw", height:"36vw",
            borderRadius:"50%", background:"radial-gradient(circle,rgba(30,58,95,0.22) 0%,transparent 70%)" }} />
      </div>

      <div className="relative z-10 flex h-full flex-col m-full-width"
        style={{
          width:"56%",
          paddingLeft:"clamp(5.5rem,7vw,8rem)",
          paddingRight:"2.5rem",
          paddingTop:"clamp(0.8rem,2vh,2rem)",
          paddingBottom:"clamp(0.6rem,1.5vh,1.5rem)",
        }}>

        <motion.p
          initial={{ opacity:0 }} animate={ inView ? { opacity:1 } : {} }
          transition={{ duration:0.4, delay:0.05 }}
          className="text-xs uppercase tracking-widest"
          style={{ color:"var(--amber)", fontFamily:"DM Mono,monospace",
            marginBottom:"clamp(0.1rem,0.4vh,0.35rem)" }}>
          {t(i18n.nav.about, lang)}
        </motion.p>

        <motion.h2
          initial={{ opacity:0, y:10 }} animate={ inView ? { opacity:1, y:0 } : {} }
          transition={{ duration:0.5, delay:0.1 }}
          className="font-display m-h2"
          style={{ fontSize:"clamp(1.4rem,2.4vw,2.8rem)", fontWeight:300,
            lineHeight:1.1, color:"var(--ink)",
            marginBottom:"clamp(0.4rem,1.2vh,1rem)" }}>
          {t(about.pillarsTitle, lang)}
        </motion.h2>

        {/* 5 cards — přirozená výška, rovnoměrné mezery */}
        <div className="flex-1 min-h-0 flex flex-col m-pillars-cards"
          style={{ gap:"clamp(0.25rem,0.9vh,0.65rem)", justifyContent:"flex-start" }}>
          {about.pillars.map((pillar, i) => {
            const { num, title, body } = parsePillar(t(pillar, lang));
            return (
              <motion.div
                key={i}
                initial={{ opacity:0, y:20, scale:0.97 }}
                animate={ inView ? { opacity:1, y:0, scale:1 } : {} }
                transition={{ duration:0.5, delay:0.1 + i*0.08, ease:[0.22,1,0.36,1] }}
                className="rounded-xl flex items-center gap-2.5 flex-shrink-0"
                style={{ ...G.panel,
                  padding:"clamp(0.4rem,1vh,0.7rem) clamp(0.5rem,0.8vw,0.9rem)" }}
              >
                {/* Číslo v malém boxíku vlevo */}
                <div style={{
                  width:"clamp(30px,3.2vh,40px)", minWidth:"clamp(30px,3.2vh,40px)",
                  height:"clamp(30px,3.2vh,40px)",
                  display:"flex", alignItems:"center", justifyContent:"center",
                  background:"rgba(200,145,58,0.1)",
                  border:"1px solid rgba(200,145,58,0.28)",
                  borderRadius:"8px", flexShrink:0,
                }}>
                  <span style={{ fontFamily:"DM Mono,monospace",
                    fontSize:"clamp(0.72rem,1.1vh,0.95rem)", fontWeight:700,
                    color:"var(--amber)", lineHeight:1 }}>{num}</span>
                </div>

                {/* Nadpis tučně, pak tělo */}
                <div style={{ flex:1, minWidth:0 }}>
                  <p style={{ fontSize:"clamp(0.82rem,1.2vh,0.95rem)", fontWeight:700,
                    color:"var(--ink)", lineHeight:1.2,
                    marginBottom:"clamp(0.1rem,0.3vh,0.18rem)" }}>
                    {title}
                  </p>
                  <p style={{ fontSize:"clamp(0.78rem,1.1vh,0.88rem)", color:"var(--ink)",
                    fontWeight:300, lineHeight:1.45, opacity:0.9 }}>
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
