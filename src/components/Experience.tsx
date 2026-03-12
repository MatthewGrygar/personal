"use client";

import React, { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
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

  const handleSelect = (i: number) => { setPrev(activeIdx); setActiveIdx(i); };
  const active = exp.items[activeIdx] as any;
  const direction = activeIdx > prev ? 1 : -1;

  return (
    <div ref={ref} className="relative flex h-dvh w-full overflow-hidden pl-20"
      style={{ background: "transparent" }}>

      <div className="relative z-10 flex h-full flex-col px-6 py-6 md:px-10" style={{ width:"100%" }}>

        {/* Header */}
        <motion.p initial={{ opacity:0 }} animate={inView?{opacity:1}:{}}
          className="mb-0.5 text-xs uppercase tracking-widest"
          style={{ color:"var(--amber)", fontFamily:"DM Mono, monospace" }}>
          {t(i18n.nav.experience, lang)}
        </motion.p>
        <motion.h2 initial={{ opacity:0, y:14 }} animate={inView?{opacity:1,y:0}:{}} transition={{ delay:0.08 }}
          className="font-display mb-4"
          style={{ fontSize:"clamp(1.6rem,2.8vw,2.8rem)", fontWeight:300, color:"var(--ink)", lineHeight:1.1 }}>
          {t(exp.headline, lang)}
        </motion.h2>

        <div className="flex min-h-0 flex-1 gap-4">

          {/* ── Sidebar ── */}
          <div className="flex flex-shrink-0 flex-col gap-1" style={{ width:"170px" }}>
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

          {/* ── Detail panel ── */}
          <div className="min-h-0 flex-1 overflow-hidden">
            <AnimatePresence mode="wait" initial={false}>
              <motion.div key={activeIdx}
                initial={{ opacity:0, y: direction * 16 }}
                animate={{ opacity:1, y:0 }}
                exit={{ opacity:0, y: direction * -16 }}
                transition={{ duration:0.28, ease:[0.22,1,0.36,1] }}
                className="relative h-full rounded-2xl overflow-hidden flex flex-col"
                style={G.panel}>

                {/* Corner accents */}
                <span className="absolute top-3 left-3 pointer-events-none z-10"
                  style={{ display:"block", width:12, height:12, borderTop:"1.5px solid rgba(200,145,58,0.3)", borderLeft:"1.5px solid rgba(200,145,58,0.3)" }} />
                <span className="absolute bottom-3 right-3 pointer-events-none z-10"
                  style={{ display:"block", width:12, height:12, borderBottom:"1.5px solid rgba(200,145,58,0.3)", borderRight:"1.5px solid rgba(200,145,58,0.3)" }} />

                {/* Inner scrollable content */}
                <div className="flex flex-col flex-1 min-h-0 p-5 overflow-hidden">

                  {/* Header row: role + tags */}
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-3 flex-shrink-0">
                    <div>
                      <h3 className="font-display mb-0.5"
                        style={{ fontSize:"clamp(1rem,1.6vw,1.35rem)", fontWeight:400, color:"var(--ink)" }}>
                        {t(active.role, lang)}
                      </h3>
                      <p className="text-sm" style={{ color:"var(--amber)" }}>
                        {active.company} · {t(active.period, lang)}
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-1.5 justify-end" style={{ maxWidth:"52%" }}>
                      {active.tags.slice(0,6).map((tag: string) => (
                        <span key={tag} className="tag-pill">{tag}</span>
                      ))}
                    </div>
                  </div>

                  {/* ── 2-column body ── */}
                  <div className="flex-1 min-h-0 grid gap-3" style={{ gridTemplateColumns:"1fr 1fr" }}>

                    {/* LEFT: bullets */}
                    <div className="flex flex-col gap-1.5 overflow-hidden">
                      {t(active.bullets, lang).map((b: string, i: number) => (
                        <div key={i} className="flex items-start gap-2">
                          <span className="mt-[7px] flex-shrink-0 rounded-full"
                            style={{ width:3, height:3, background:"var(--amber)", opacity:0.7 }} />
                          <p style={{ color:"var(--ink)", fontSize:"0.85rem", lineHeight:1.5 }}>{b}</p>
                        </div>
                      ))}
                    </div>

                    {/* RIGHT: security badge (NAKIT only) + key impacts + logo space */}
                    <div className="flex flex-col gap-2.5 relative">

                      {/* NAKIT security badge — always at top if present */}
                      {active.security && (
                        <motion.div
                          initial={{ opacity:0, y:6 }} animate={{ opacity:1, y:0 }}
                          transition={{ delay:0.12 }}
                          className="flex items-start gap-2.5 px-3.5 py-2.5 flex-shrink-0"
                          style={G.security}>
                          <span style={{ fontSize:"0.95rem", flexShrink:0, marginTop:"1px" }}>🛡️</span>
                          <p style={{ color:"rgba(167,243,208,0.95)", fontWeight:300, fontSize:"0.82rem", lineHeight:1.5 }}>
                            {lang === "en"
                              ? "Work took place in an environment with elevated security requirements and regulation, placing emphasis on process discipline and risk management."
                              : "Práce probíhala v prostředí s vyššími bezpečnostními požadavky a regulací, což kladlo důraz na procesní disciplínu a řízení rizik."}
                          </p>
                        </motion.div>
                      )}

                      {/* Key impacts */}
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

                      {/* Logo — bottom right, transparent, with natural space */}
                      {active.logo && (
                        <div className="flex-1 flex items-end justify-end pointer-events-none select-none pr-2 pb-1"
                          style={{ minHeight:"60px" }}>
                          <img src={active.logo} alt=""
                            style={{
                              height:"80px", width:"auto", maxWidth:"180px",
                              objectFit:"contain", display:"block",
                              opacity:0.12, filter:"grayscale(1) brightness(4)",
                            }} />
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
    </div>
  );
}
