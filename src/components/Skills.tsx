"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { i18n, t } from "@/data/site";
import type { Lang } from "@/data/site";

const G = {
  panel: {
    background: "rgba(16,38,62,0.97)",
    backdropFilter: "blur(22px)",
    WebkitBackdropFilter: "blur(22px)",
    border: "1px solid rgba(200,145,58,0.32)",
    boxShadow: "inset 0 1px 0 rgba(200,145,58,0.1), 0 8px 32px rgba(0,0,0,0.4)",
  } as React.CSSProperties,
  goals: {
    background: "rgba(200,145,58,0.07)",
    border: "1px solid rgba(200,145,58,0.28)",
    boxShadow: "inset 0 1px 0 rgba(200,145,58,0.1)",
  } as React.CSSProperties,
};

/* Sdílené font velikosti — stejné jako Experience bullets */
const FS = {
  label:  "clamp(0.6rem, 0.85vh, 0.72rem)",   /* sekční label nahoře */
  item:   "clamp(0.82rem, 1.2vh, 0.95rem)",    /* skill tagy + bullet text */
  arrow:  "clamp(0.88rem, 1.25vh, 1.05rem)",   /* goals */
};

export function Skills({ lang }: { lang: Lang }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const skills = i18n.skills as any;

  const fi = (delay: number) => ({
    initial: { opacity:0, y:12 },
    animate: inView ? { opacity:1, y:0 } : {},
    transition: { duration:0.45, delay, ease:[0.22,1,0.36,1] as any },
  });

  const pad = "clamp(0.55rem, 1.2vh, 0.875rem)";
  const gap = "clamp(0.3rem, 0.8vh, 0.625rem)";
  const colGap = "clamp(0.5rem, 1vh, 0.75rem)";

  return (
    <div ref={ref} className="relative flex h-dvh w-full overflow-hidden"
      style={{ background: "transparent" }}>

      <div className="relative z-10 flex h-full flex-col pl-20 pr-6 py-6 md:pr-12 m-section"
        style={{ width:"100%" }}>

        <motion.p {...fi(0)} className="text-xs uppercase tracking-widest"
          style={{ color:"var(--amber)", fontFamily:"DM Mono, monospace",
            marginBottom:"clamp(0.1rem,0.3vh,0.25rem)" }}>
          {t(i18n.nav.skills, lang)}
        </motion.p>

        <motion.h2 {...fi(0.08)} className="font-display m-h2"
          style={{ fontSize:"clamp(1.3rem,2.2vw,2.2rem)", fontWeight:300,
            color:"var(--ink)", lineHeight:1.15,
            marginBottom:"clamp(0.15rem,0.5vh,0.4rem)" }}>
          {t(skills.headline, lang)}
        </motion.h2>

        <motion.p {...fi(0.13)}
          style={{ color:"var(--ink-soft)", fontWeight:300, maxWidth:"72ch",
            fontSize:FS.item, lineHeight:1.5,
            marginBottom:"clamp(0.4rem,1.2vh,1rem)" }}>
          {t(skills.subheadline, lang)}
        </motion.p>

        {/* 2-column layout — alignContent:start aby se karty NEROZTAHOVALY */}
        <div className="min-h-0 flex-1 grid m-2col m-skills-cols"
          style={{ gridTemplateColumns:"1fr 1fr", gap:colGap, alignContent:"start" }}>

          {/* ── LEFT ── */}
          <div style={{ display:"flex", flexDirection:"column", gap:colGap }}>
            {skills.groups.slice(0,2).map((group: any, gi: number) => (
              <motion.div key={gi} {...fi(0.16 + gi*0.07)}
                className="rounded-2xl" style={{ ...G.panel, padding:pad }}>
                <p className="uppercase tracking-widest"
                  style={{ color:"#A8BDD0", fontFamily:"DM Mono, monospace",
                    fontSize:FS.label, marginBottom:"clamp(0.3rem,0.7vh,0.5rem)" }}>
                  {t(group.title, lang)}
                </p>
                <div style={{ display:"flex", flexWrap:"wrap", gap }}>
                  {group.items.map((item: string) => (
                    <span key={item} className="rounded-lg font-medium"
                      style={{ background:"rgba(200,145,58,0.07)",
                        border:"1px solid rgba(200,145,58,0.2)", color:"var(--ink)",
                        fontSize:FS.item,
                        padding:"clamp(0.2rem,0.5vh,0.375rem) clamp(0.4rem,0.7vw,0.625rem)" }}>
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}

            {/* Strengths */}
            <motion.div {...fi(0.32)} className="rounded-2xl" style={{ ...G.panel, padding:pad }}>
              <p className="uppercase tracking-widest"
                style={{ color:"#A8BDD0", fontFamily:"DM Mono, monospace",
                  fontSize:FS.label, marginBottom:"clamp(0.3rem,0.7vh,0.5rem)" }}>
                {t(skills.strengthsTitle, lang)}
              </p>
              <div style={{ display:"flex", flexDirection:"column", gap }}>
                {skills.strengths.map((s: any, i: number) => (
                  <div key={i} style={{ display:"flex", alignItems:"flex-start", gap:"0.5rem" }}>
                    <span style={{ color:"var(--amber)", fontSize:"0.5rem", flexShrink:0, marginTop:"5px" }}>✦</span>
                    <p style={{ color:"var(--ink)", fontSize:FS.item, lineHeight:1.45 }}>{t(s, lang)}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* ── RIGHT ── */}
          <div style={{ display:"flex", flexDirection:"column", gap:colGap }}>
            {skills.groups.slice(2,4).map((group: any, gi: number) => (
              <motion.div key={gi} {...fi(0.22 + gi*0.07)}
                className="rounded-2xl" style={{ ...G.panel, padding:pad }}>
                <p className="uppercase tracking-widest"
                  style={{ color:"#A8BDD0", fontFamily:"DM Mono, monospace",
                    fontSize:FS.label, marginBottom:"clamp(0.3rem,0.7vh,0.5rem)" }}>
                  {t(group.title, lang)}
                </p>
                <div style={{ display:"flex", flexWrap:"wrap", gap }}>
                  {group.items.map((item: string) => (
                    <span key={item} className="rounded-lg font-medium"
                      style={{ background:"rgba(200,145,58,0.07)",
                        border:"1px solid rgba(200,145,58,0.2)", color:"var(--ink)",
                        fontSize:FS.item,
                        padding:"clamp(0.2rem,0.5vh,0.375rem) clamp(0.4rem,0.7vw,0.625rem)" }}>
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}

            {/* Goals */}
            <motion.div {...fi(0.38)} className="rounded-2xl" style={{ ...G.goals, padding:pad }}>
              <p className="uppercase tracking-widest"
                style={{ color:"var(--amber)", fontFamily:"DM Mono, monospace",
                  fontSize:FS.label, marginBottom:"clamp(0.3rem,0.8vh,0.625rem)" }}>
                {lang==="en" ? "Aiming For" : "Mířím na"}
              </p>
              <div style={{ display:"flex", flexDirection:"column", gap }}>
                {skills.goals.map((role: any, i: number) => (
                  <div key={i} style={{ display:"flex", alignItems:"center", gap:"0.625rem" }}>
                    <span style={{ color:"var(--amber)", fontSize:"1rem", flexShrink:0, lineHeight:1 }}>→</span>
                    <p className="font-display italic"
                      style={{ fontSize:FS.arrow, color:"var(--ink)", lineHeight:1.2 }}>
                      {t(role, lang)}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
