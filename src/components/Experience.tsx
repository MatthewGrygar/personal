"use client";

import React, { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { i18n, t } from "@/data/site";
import type { Lang } from "@/data/site";

const G = {
  panel: {
    background: "rgba(16,38,62,0.97)",
    backdropFilter: "blur(28px)",
    WebkitBackdropFilter: "blur(28px)",
    border: "1px solid rgba(200,145,58,0.38)",
    boxShadow: "inset 0 1px 0 rgba(200,145,58,0.12), 0 16px 56px rgba(0,0,0,0.55)",
  } as React.CSSProperties,
  impacts: {
    background: "rgba(200,145,58,0.07)",
    border: "1px solid rgba(200,145,58,0.22)",
    borderRadius: "0.75rem",
  } as React.CSSProperties,
  security: {
    background: "rgba(10,46,28,0.95)",
    backdropFilter: "blur(16px)",
    WebkitBackdropFilter: "blur(16px)",
    border: "1px solid rgba(52,211,153,0.45)",
    boxShadow: "inset 0 1px 0 rgba(52,211,153,0.18), 0 4px 20px rgba(0,0,0,0.3)",
    borderRadius: "0.75rem",
  } as React.CSSProperties,
};

export function Experience({ lang }: { lang: Lang }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const exp = i18n.experience;
  const [activeIdx, setActiveIdx] = useState(0);
  const [prev, setPrev] = useState(0);
  const [dropOpen, setDropOpen] = useState(false);

  const handleSelect = (i: number) => { setPrev(activeIdx); setActiveIdx(i); setDropOpen(false); };
  const active = exp.items[activeIdx] as any;
  const direction = activeIdx > prev ? 1 : -1;

  return (
    <div ref={ref} className="relative flex h-dvh w-full overflow-hidden"
      style={{ background: "transparent" }}>

      {/* ── DESKTOP ── */}
      <div className="m-exp-desktop relative z-10 flex h-full flex-col pl-20 pr-6 py-6 md:pr-10">

        <motion.p initial={{ opacity:0 }} animate={inView?{opacity:1}:{}}
          className="mb-0.5 text-xs uppercase tracking-widest"
          style={{ color:"var(--amber)", fontFamily:"DM Mono, monospace" }}>
          {t(i18n.nav.experience, lang)}
        </motion.p>
        <motion.h2 initial={{ opacity:0, y:14 }} animate={inView?{opacity:1,y:0}:{}} transition={{ delay:0.08 }}
          className="font-display mb-4 m-h2"
          style={{ fontSize:"clamp(1.6rem,2.8vw,2.8rem)", fontWeight:300, color:"var(--ink)", lineHeight:1.1 }}>
          {t(exp.headline, lang)}
        </motion.h2>

        <div className="flex min-h-0 flex-1 gap-4 m-exp-layout">

          {/* Sidebar */}
          <div className="flex flex-shrink-0 flex-col gap-1 m-exp-sidebar" style={{ width:"170px" }}>
            {exp.items.map((item: any, i: number) => {
              const isActive = activeIdx === i;
              return (
                <motion.button key={i}
                  initial={{ opacity:0, x:-12 }} animate={inView?{opacity:1,x:0}:{}}
                  transition={{ delay:0.15 + i*0.07 }}
                  onClick={() => handleSelect(i)}
                  className="relative text-left rounded-xl px-3 py-2.5 transition-all duration-200"
                  style={{
                    background: isActive ? "rgba(200,145,58,0.12)" : "transparent",
                    border: isActive ? "1px solid rgba(200,145,58,0.35)" : "1px solid transparent",
                  }}>
                  <p className="text-sm font-semibold"
                    style={{ color: isActive ? "var(--amber)" : "var(--ink-soft)" }}>
                    {item.company}
                  </p>
                  <p className="mt-0.5 text-xs"
                    style={{ color: isActive ? "var(--ink-soft)" : "var(--ink-muted)" }}>
                    {t(item.period, lang)}
                  </p>
                </motion.button>
              );
            })}
          </div>

          {/* Detail panel */}
          <div className="min-h-0 flex-1 overflow-hidden m-exp-detail">
            <AnimatePresence mode="wait" initial={false}>
              <motion.div key={activeIdx}
                initial={{ opacity:0, y: direction * 16 }}
                animate={{ opacity:1, y:0 }}
                exit={{ opacity:0, y: direction * -16 }}
                transition={{ duration:0.28, ease:[0.22,1,0.36,1] }}
                className="relative h-full rounded-2xl overflow-hidden flex flex-col"
                style={G.panel}>

                <span className="absolute top-3 left-3 pointer-events-none z-10"
                  style={{ display:"block", width:12, height:12, borderTop:"1.5px solid rgba(200,145,58,0.3)", borderLeft:"1.5px solid rgba(200,145,58,0.3)" }} />
                <span className="absolute bottom-3 right-3 pointer-events-none z-10"
                  style={{ display:"block", width:12, height:12, borderBottom:"1.5px solid rgba(200,145,58,0.3)", borderRight:"1.5px solid rgba(200,145,58,0.3)" }} />

                <div className="flex flex-col flex-1 min-h-0 p-5 overflow-hidden">

                  {/* Header: název + firma/datum */}
                  <div className="flex-shrink-0 mb-2">
                    <div className="flex flex-wrap items-baseline gap-x-3 gap-y-0.5">
                      <h3 className="font-display"
                        style={{ fontSize:"clamp(1rem,1.6vw,1.35rem)", fontWeight:400, color:"var(--ink)" }}>
                        {t(active.role, lang)}
                      </h3>
                      <span style={{ color:"var(--amber)", fontSize:"0.82rem" }}>
                        {active.company} · {t(active.period, lang)}
                      </span>
                    </div>
                  </div>

                  {/* 2-col body */}
                  <div className="flex-1 min-h-0 grid gap-3 m-2col" style={{ gridTemplateColumns:"1fr 1fr" }}>
                    {/* LEVÝ sloupec: popis + bullets */}
                    <div className="flex flex-col gap-1.5 overflow-hidden">
                      {/* Popis pozice nahoře — výrazný */}
                      {active.description && (
                        <p style={{ color:"var(--ink)", fontSize:"0.88rem", fontWeight:500,
                          lineHeight:1.5, fontStyle:"italic",
                          borderLeft:"2px solid rgba(200,145,58,0.4)",
                          paddingLeft:"0.7rem", marginBottom:"0.5rem", flexShrink:0 }}>
                          {t(active.description, lang)}
                        </p>
                      )}
                      {t(active.bullets, lang).map((b: string, i: number) => (
                        <div key={i} className="flex items-start gap-2">
                          <span className="mt-[7px] flex-shrink-0 rounded-full"
                            style={{ width:3, height:3, background:"var(--amber)", opacity:0.7 }} />
                          <p style={{ color:"var(--ink)", fontSize:"0.85rem", lineHeight:1.5 }}>{b}</p>
                        </div>
                      ))}
                    </div>
                    {/* PRAVÝ sloupec: tagy nahoře, pak security, pak impacts */}
                    <div className="flex flex-col gap-2.5 relative">
                      {/* Tagy — celá šířka pravého sloupce */}
                      <div className="flex flex-wrap gap-1.5 flex-shrink-0">
                        {active.tags.map((tag: string) => (
                          <span key={tag} className="tag-pill">{tag}</span>
                        ))}
                      </div>
                      {active.security && (
                        <div className="flex items-start gap-2.5 px-3.5 py-2.5 flex-shrink-0" style={G.security}>
                          <span style={{ fontSize:"0.95rem", flexShrink:0, marginTop:"1px" }}>🛡️</span>
                          <p style={{ color:"rgba(167,243,208,0.95)", fontWeight:300, fontSize:"0.82rem", lineHeight:1.5 }}>
                            {active.securityText ? t(active.securityText, lang) : (lang === "en" ? "Work in an environment with elevated security requirements." : "Práce v prostředí s vyššími bezpečnostními požadavky.")}
                          </p>
                        </div>
                      )}
                      <div className="p-3 flex-shrink-0" style={G.impacts}>
                        <p className="mb-1.5 text-xs uppercase tracking-widest"
                          style={{ color:"var(--amber)", fontFamily:"DM Mono, monospace" }}>
                          {lang==="en" ? "Key Impacts" : "Klíčové dopady"}
                        </p>
                        <div className="flex flex-col gap-1">
                          {t(active.impacts, lang).map((imp: string, i: number) => (
                            <div key={i} className="flex items-start gap-1.5">
                              <span style={{ color:"var(--amber)", fontSize:"0.5rem", flexShrink:0, marginTop:"5px" }}>✦</span>
                              <p style={{ color:"var(--ink)", fontSize:"0.82rem", lineHeight:1.45 }}>{imp}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                      {active.logo && (
                        <div className="flex-1 flex items-end justify-end pointer-events-none select-none pr-2 pb-1" style={{ minHeight:"60px" }}>
                          <img src={active.logo} alt=""
                            style={{ height:"80px", width:"auto", maxWidth:"180px", objectFit:"contain",
                              opacity:0.12, filter:"grayscale(1) brightness(4)" }} />
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* ── MOBILE ── */}
      <div className="m-exp-mobile m-section" style={{ zIndex:10, position:"relative" }}>

        {/* Header */}
        <p className="mb-0.5 text-xs uppercase tracking-widest"
          style={{ color:"var(--amber)", fontFamily:"DM Mono, monospace" }}>
          {t(i18n.nav.experience, lang)}
        </p>
        <h2 className="font-display mb-3 m-h2"
          style={{ fontSize:"clamp(1.4rem,5vw,1.9rem)", fontWeight:300, color:"var(--ink)", lineHeight:1.1 }}>
          {t(exp.headline, lang)}
        </h2>

        {/* Dropdown selector */}
        <div style={{ position:"relative", marginBottom:"1rem" }}>
          <button
            onClick={() => setDropOpen(v => !v)}
            style={{
              width:"100%", display:"flex", alignItems:"center", justifyContent:"space-between",
              padding:"0.75rem 1rem", borderRadius:"0.85rem",
              background:"rgba(16,38,62,0.98)",
              border:"1px solid rgba(200,145,58,0.45)",
              boxShadow:"inset 0 1px 0 rgba(200,145,58,0.1)",
              cursor:"pointer",
            }}>
            <div style={{ textAlign:"left" }}>
              <p style={{ fontSize:"0.9rem", fontWeight:600, color:"var(--amber)", marginBottom:"0.1rem" }}>
                {exp.items[activeIdx].company}
              </p>
              <p style={{ fontSize:"0.72rem", color:"var(--ink-soft)", fontFamily:"DM Mono,monospace" }}>
                {t((exp.items[activeIdx] as any).role, lang)}
              </p>
            </div>
            <motion.div animate={{ rotate: dropOpen ? 180 : 0 }} transition={{ duration:0.2 }}>
              <ChevronDown size={18} style={{ color:"var(--amber)", flexShrink:0 }} />
            </motion.div>
          </button>

          <AnimatePresence>
            {dropOpen && (
              <motion.div
                initial={{ opacity:0, y:-8, scaleY:0.92 }}
                animate={{ opacity:1, y:0, scaleY:1 }}
                exit={{ opacity:0, y:-8, scaleY:0.92 }}
                transition={{ duration:0.18 }}
                style={{
                  position:"absolute", top:"calc(100% + 0.4rem)", left:0, right:0,
                  zIndex:50, borderRadius:"0.85rem", overflow:"hidden",
                  background:"rgba(14,32,54,0.99)",
                  border:"1px solid rgba(200,145,58,0.38)",
                  boxShadow:"0 12px 40px rgba(0,0,0,0.6)",
                  transformOrigin:"top",
                }}>
                {exp.items.map((item: any, i: number) => (
                  <button key={i} onClick={() => handleSelect(i)}
                    style={{
                      width:"100%", display:"flex", alignItems:"center", justifyContent:"space-between",
                      padding:"0.7rem 1rem", textAlign:"left", cursor:"pointer",
                      background: activeIdx===i ? "rgba(200,145,58,0.12)" : "transparent",
                      borderBottom: i < exp.items.length-1 ? "1px solid rgba(200,145,58,0.1)" : "none",
                    }}>
                    <div>
                      <p style={{ fontSize:"0.88rem", fontWeight:600,
                        color: activeIdx===i ? "var(--amber)" : "var(--ink)", marginBottom:"0.1rem" }}>
                        {item.company}
                      </p>
                      <p style={{ fontSize:"0.68rem", color:"var(--ink-muted)", fontFamily:"DM Mono,monospace" }}>
                        {t(item.period, lang)}
                      </p>
                    </div>
                    {activeIdx===i && (
                      <span style={{ width:6, height:6, borderRadius:"50%", background:"var(--amber)", flexShrink:0 }} />
                    )}
                  </button>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Detail card */}
        <AnimatePresence mode="wait" initial={false}>
          <motion.div key={activeIdx}
            initial={{ opacity:0, y:12 }} animate={{ opacity:1, y:0 }} exit={{ opacity:0, y:-8 }}
            transition={{ duration:0.25 }}
            style={{ ...G.panel, borderRadius:"1rem", padding:"1rem", marginBottom:"0.75rem" }}>

            {/* Role + period */}
            <h3 className="font-display mb-0.5"
              style={{ fontSize:"1.05rem", fontWeight:400, color:"var(--ink)" }}>
              {t(active.role, lang)}
            </h3>
            <p style={{ fontSize:"0.78rem", color:"var(--amber)", marginBottom:"0.9rem",
              fontFamily:"DM Mono,monospace" }}>
              {active.company} · {t(active.period, lang)}
            </p>

            {/* Bullets */}
            <div style={{ display:"flex", flexDirection:"column", gap:"0.5rem", marginBottom:"0.9rem" }}>
              {t(active.bullets, lang).map((b: string, i: number) => (
                <div key={i} style={{ display:"flex", alignItems:"flex-start", gap:"0.6rem" }}>
                  <span style={{ marginTop:"7px", flexShrink:0, width:3, height:3, borderRadius:"50%",
                    background:"var(--amber)", opacity:0.7, display:"block" }} />
                  <p style={{ color:"var(--ink)", fontSize:"0.83rem", lineHeight:1.5 }}>{b}</p>
                </div>
              ))}
            </div>

            {/* Security badge */}
            {active.security && (
              <div style={{ ...G.security, display:"flex", gap:"0.6rem", padding:"0.7rem 0.85rem", marginBottom:"0.75rem" }}>
                <span style={{ fontSize:"0.9rem", flexShrink:0 }}>🛡️</span>
                <p style={{ color:"rgba(167,243,208,0.95)", fontWeight:300, fontSize:"0.78rem", lineHeight:1.5 }}>
                  {active.securityText ? t(active.securityText, lang) : (lang === "en" ? "Elevated security environment." : "Prostředí s vyššími bezpečnostními požadavky.")}
                </p>
              </div>
            )}

            {/* Key impacts */}
            <div style={{ ...G.impacts, padding:"0.75rem", marginBottom:"0.75rem" }}>
              <p style={{ fontSize:"0.6rem", textTransform:"uppercase", letterSpacing:"0.12em",
                color:"var(--amber)", fontFamily:"DM Mono,monospace", marginBottom:"0.5rem" }}>
                {lang==="en" ? "Key Impacts" : "Klíčové dopady"}
              </p>
              {t(active.impacts, lang).map((imp: string, i: number) => (
                <div key={i} style={{ display:"flex", gap:"0.5rem", marginBottom:"0.3rem" }}>
                  <span style={{ color:"var(--amber)", fontSize:"0.48rem", flexShrink:0, marginTop:"5px" }}>✦</span>
                  <p style={{ color:"var(--ink)", fontSize:"0.8rem", lineHeight:1.4 }}>{imp}</p>
                </div>
              ))}
            </div>

            {/* Tags — full width, wrap */}
            <div style={{ display:"flex", flexWrap:"wrap", gap:"0.4rem" }}>
              {active.tags.map((tag: string) => (
                <span key={tag} style={{
                  padding:"0.25rem 0.65rem", borderRadius:"99px",
                  fontSize:"0.62rem", fontWeight:500, letterSpacing:"0.06em",
                  textTransform:"uppercase",
                  background:"rgba(200,145,58,0.1)",
                  border:"1px solid rgba(200,145,58,0.22)",
                  color:"var(--amber)",
                }}>{tag}</span>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
