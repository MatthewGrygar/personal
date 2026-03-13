"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { i18n, t } from "@/data/site";
import type { Lang } from "@/data/site";

const G = {
  card: {
    background: "rgba(16,38,62,0.97)",
    backdropFilter: "blur(22px)",
    WebkitBackdropFilter: "blur(22px)",
    border: "1px solid rgba(200,145,58,0.35)",
    boxShadow: "inset 0 1px 0 rgba(200,145,58,0.1), 0 8px 32px rgba(0,0,0,0.4)",
  } as React.CSSProperties,
};

// Tag color overrides
const TAG_COLORS: Record<string, { bg: string; border: string; color: string }> = {
  "Personal": { bg:"rgba(134,239,172,0.12)", border:"rgba(52,211,153,0.3)", color:"rgba(134,239,172,0.9)" },
  "Osobní":   { bg:"rgba(134,239,172,0.12)", border:"rgba(52,211,153,0.3)", color:"rgba(134,239,172,0.9)" },
};

const defaultTag = { bg:"rgba(200,145,58,0.09)", border:"rgba(200,145,58,0.25)", color:"var(--amber)" };

export function Projects({ lang }: { lang: Lang }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const proj = i18n.projects as any;

  return (
    <div ref={ref} className="relative flex h-dvh w-full overflow-hidden"
      style={{ background: "transparent" }}>

      <div className="relative z-10 flex h-full flex-col pl-20 pr-6 md:pr-12 m-section" style={{ width:"100%", paddingTop:"clamp(0.6rem,1.5vh,1.2rem)", paddingBottom:"clamp(0.4rem,1vh,0.8rem)", overflowY:"auto" }}>

        <motion.p initial={{ opacity:0 }} animate={inView?{opacity:1}:{}}
          className="mb-0.5 text-xs uppercase tracking-widest"
          style={{ color:"var(--amber)", fontFamily:"DM Mono, monospace" }}>
          {t(i18n.nav.projects, lang)}
        </motion.p>

        <motion.h2 initial={{ opacity:0, y:14 }} animate={inView?{opacity:1,y:0}:{}} transition={{ delay:0.08 }}
          className="font-display mb-2 m-h2"
          style={{ fontSize:"clamp(1.5rem,2.4vw,2.6rem)", fontWeight:300, color:"var(--ink)", lineHeight:1.1 }}>
          {t(proj.headline, lang)}
        </motion.h2>

        {/* 3×2 grid */}
        <div className="grid gap-3 m-3col m-projects-grid"
          style={{ gridTemplateColumns:"repeat(3,1fr)", alignContent:"start", gridAutoRows:"auto" }}>
          {proj.items.map((item: any, i: number) => (
            <motion.div key={i}
              initial={{ opacity:0, y:16, scale:0.98 }}
              animate={inView ? { opacity:1, y:0, scale:1 } : {}}
              transition={{ duration:0.45, delay:0.1 + i*0.07, ease:[0.22,1,0.36,1] }}
              className="rounded-2xl flex flex-col overflow-hidden group hover:brightness-110 transition-all duration-200"
              style={G.card}>

              {/* Banner image — thin strip, center-cropped */}
              {item.banner && (
                <div style={{ height:"52px", overflow:"hidden", flexShrink:0, position:"relative" }}>
                  <img src={item.banner} alt=""
                    style={{
                      width:"100%", height:"100%",
                      objectFit:"cover", objectPosition:"center 40%",
                      display:"block",
                      filter:"brightness(0.55) saturate(0.8)",
                    }} />
                  {/* Amber gradient overlay at bottom */}
                  <div style={{
                    position:"absolute", inset:0,
                    background:"linear-gradient(to bottom, transparent 30%, rgba(16,38,62,0.85) 100%)",
                  }} />
                </div>
              )}

              {/* Card body */}
              <div className="flex flex-col p-3.5">

                {/* Tags + link row */}
                <div className="flex items-start justify-between gap-1 mb-1.5">
                  <div className="flex flex-wrap gap-1">
                    {item.tags.map((tag: string) => {
                      const tc = TAG_COLORS[tag] ?? defaultTag;
                      return (
                        <span key={tag} style={{
                          fontSize:"0.57rem", fontFamily:"DM Mono,monospace",
                          letterSpacing:"0.1em", textTransform:"uppercase",
                          padding:"0.12rem 0.45rem", borderRadius:"99px",
                          background: tc.bg, border:`1px solid ${tc.border}`,
                          color: tc.color,
                        }}>{tag}</span>
                      );
                    })}
                  </div>
                  {item.url && (
                    <a href={item.url} target="_blank" rel="noopener noreferrer"
                      className="flex-shrink-0 transition-colors hover:text-amber-400"
                      style={{ color:"rgba(200,145,58,0.55)" }}
                      onClick={e => e.stopPropagation()}>
                      <ExternalLink size={12} />
                    </a>
                  )}
                </div>

                {/* Title */}
                <h3 className="font-display mb-1.5"
                  style={{ fontSize:"clamp(0.88rem,1.1vw,1rem)", fontWeight:500, color:"var(--ink)", lineHeight:1.25 }}>
                  {item.title}
                </h3>

                {/* Description */}
                <p className="leading-relaxed mb-2"
                  style={{ color:"var(--ink)", fontWeight:300, opacity:0.88, fontSize:"0.8rem" }}>
                  {t(item.description, lang)}
                </p>

                {/* Highlight */}
                <div className="flex items-center gap-1.5 rounded-lg px-2.5 py-1.5 mt-auto"
                  style={{ background:"rgba(200,145,58,0.07)", border:"1px solid rgba(200,145,58,0.18)" }}>
                  <span style={{ color:"var(--amber)", fontSize:"0.48rem", flexShrink:0 }}>✦</span>
                  <p className="text-sm italic" style={{ color:"var(--amber)", fontWeight:400 }}>
                    {t(item.highlight, lang)}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
