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

export function Skills({ lang }: { lang: Lang }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const skills = i18n.skills as any;

  const fi = (delay: number) => ({
    initial: { opacity:0, y:12 },
    animate: inView ? { opacity:1, y:0 } : {},
    transition: { duration:0.45, delay, ease:[0.22,1,0.36,1] as any },
  });

  return (
    <div ref={ref} className="relative flex h-dvh w-full overflow-hidden"
      style={{ background: "transparent" }}>

      <div className="relative z-10 flex h-full flex-col px-6 py-6 md:px-12 m-section" style={{ width:"100%" }}>

        <motion.p {...fi(0)} className="mb-0.5 text-xs uppercase tracking-widest"
          style={{ color:"var(--amber)", fontFamily:"DM Mono, monospace" }}>
          {t(i18n.nav.skills, lang)}
        </motion.p>

        <motion.h2 {...fi(0.08)} className="font-display mb-2 m-h2"
          style={{ fontSize:"clamp(1.3rem,2.2vw,2.2rem)", fontWeight:300, color:"var(--ink)", lineHeight:1.15 }}>
          {t(skills.headline, lang)}
        </motion.h2>

        <motion.p {...fi(0.13)} className="mb-4 text-sm leading-relaxed"
          style={{ color:"var(--ink-soft)", fontWeight:300, maxWidth:"72ch" }}>
          {t(skills.subheadline, lang)}
        </motion.p>

        {/* 2-column layout */}
        <div className="min-h-0 flex-1 grid gap-3 m-2col m-skills-cols" style={{ gridTemplateColumns:"1fr 1fr" }}>

          {/* ── LEFT COLUMN ── */}
          <div className="flex flex-col gap-2.5">
            {skills.groups.slice(0,2).map((group: any, gi: number) => (
              <motion.div key={gi} {...fi(0.16 + gi*0.07)}
                className="rounded-2xl p-3.5" style={G.panel}>
                <p className="mb-2 text-xs uppercase tracking-widest"
                  style={{ color:"#A8BDD0", fontFamily:"DM Mono, monospace" }}>
                  {t(group.title, lang)}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {group.items.map((item: string) => (
                    <span key={item} className="rounded-lg px-2.5 py-1.5 text-sm font-medium"
                      style={{ background:"rgba(200,145,58,0.07)", border:"1px solid rgba(200,145,58,0.2)", color:"var(--ink)" }}>
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}

            {/* Strengths */}
            <motion.div {...fi(0.32)} className="rounded-2xl p-3.5 flex-1" style={G.panel}>
              <p className="mb-2 text-xs uppercase tracking-widest"
                style={{ color:"#A8BDD0", fontFamily:"DM Mono, monospace" }}>
                {t(skills.strengthsTitle, lang)}
              </p>
              <div className="flex flex-col gap-1.5 skills-strengths-grid">
                {skills.strengths.map((s: any, i: number) => (
                  <div key={i} className="flex items-start gap-2">
                    <span style={{ color:"var(--amber)", fontSize:"0.5rem", flexShrink:0, marginTop:"4px" }}>✦</span>
                    <p className="text-sm leading-snug" style={{ color:"var(--ink)" }}>{t(s, lang)}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* ── RIGHT COLUMN ── */}
          <div className="flex flex-col gap-2.5">
            {skills.groups.slice(2,4).map((group: any, gi: number) => (
              <motion.div key={gi} {...fi(0.22 + gi*0.07)}
                className="rounded-2xl p-3.5" style={G.panel}>
                <p className="mb-2 text-xs uppercase tracking-widest"
                  style={{ color:"#A8BDD0", fontFamily:"DM Mono, monospace" }}>
                  {t(group.title, lang)}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {group.items.map((item: string) => (
                    <span key={item} className="rounded-lg px-2.5 py-1.5 text-sm font-medium"
                      style={{ background:"rgba(200,145,58,0.07)", border:"1px solid rgba(200,145,58,0.2)", color:"var(--ink)" }}>
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}

            {/* Goals / Mířím na */}
            <motion.div {...fi(0.38)} className="rounded-2xl p-3.5 flex-1" style={G.goals}>
              <p className="mb-2.5 text-xs uppercase tracking-widest"
                style={{ color:"var(--amber)", fontFamily:"DM Mono, monospace" }}>
                {lang==="en" ? "Aiming For" : "Mířím na"}
              </p>
              <div className="flex flex-col gap-2">
                {skills.goals.map((role: any, i: number) => (
                  <div key={i} className="flex items-center gap-2.5">
                    <span style={{ color:"var(--amber)", fontSize:"1rem", flexShrink:0, lineHeight:1 }}>→</span>
                    <p className="font-display italic"
                      style={{ fontSize:"clamp(0.9rem,1.2vw,1.1rem)", color:"var(--ink)", lineHeight:1.2 }}>
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
