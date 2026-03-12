"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { Lang } from "@/data/site";

export function MobileNav({
  sections,
  activeId,
  lang,
  setLang,
}: {
  sections: { id: string; label: string }[];
  activeId: string;
  lang: Lang;
  setLang: (l: Lang) => void;
}) {
  const [open, setOpen] = useState(false);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      // Scroll section itself to top, then snap to section
      el.scrollTop = 0;
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setOpen(false);
  };

  return (
    <>
      {/* ── Trigger button — fixed top-right ── */}
      <button
        onClick={() => setOpen(v => !v)}
        aria-label="Menu"
        className="mobile-nav-trigger"
        style={{
          position: "fixed",
          top: "1rem",
          right: "1rem",
          zIndex: 300,
          width: 44,
          height: 44,
          borderRadius: "0.75rem",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 5,
          background: "linear-gradient(170deg, rgba(30,62,96,0.98) 0%, rgba(18,44,72,0.98) 100%)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          border: "1px solid rgba(200,145,58,0.42)",
          boxShadow: "0 4px 20px rgba(0,0,0,0.5), inset 0 1px 0 rgba(200,145,58,0.18)",
          cursor: "pointer",
        }}
      >
        {/* Animated hamburger lines */}
        <motion.span animate={{ rotate: open ? 45 : 0, y: open ? 7 : 0 }}
          transition={{ duration: 0.22 }}
          style={{ display: "block", width: 18, height: 1.5, background: "#C8913A", borderRadius: 2 }} />
        <motion.span animate={{ opacity: open ? 0 : 1, scaleX: open ? 0 : 1 }}
          transition={{ duration: 0.18 }}
          style={{ display: "block", width: 14, height: 1.5, background: "rgba(200,145,58,0.6)", borderRadius: 2 }} />
        <motion.span animate={{ rotate: open ? -45 : 0, y: open ? -7 : 0 }}
          transition={{ duration: 0.22 }}
          style={{ display: "block", width: 18, height: 1.5, background: "#C8913A", borderRadius: 2 }} />
      </button>

      {/* ── Drawer panel — slides in from top-right ── */}
      <AnimatePresence>
        {open && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setOpen(false)}
              style={{
                position: "fixed", inset: 0, zIndex: 200,
                background: "rgba(13,27,42,0.6)",
                backdropFilter: "blur(4px)",
                WebkitBackdropFilter: "blur(4px)",
              }}
            />

            {/* Menu panel */}
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: -8 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: -8 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              style={{
                position: "fixed",
                top: "3.8rem",
                right: "1rem",
                zIndex: 250,
                minWidth: 200,
                borderRadius: "1rem",
                padding: "1rem",
                background: "linear-gradient(170deg, rgba(22,52,80,0.99) 0%, rgba(14,32,54,0.99) 100%)",
                backdropFilter: "blur(28px)",
                WebkitBackdropFilter: "blur(28px)",
                border: "1px solid rgba(200,145,58,0.38)",
                boxShadow: "0 16px 60px rgba(0,0,0,0.65), inset 0 1px 0 rgba(200,145,58,0.18)",
              }}
            >
              {/* Amber shimmer top */}
              <div style={{
                position: "absolute", top: 0, left: "15%", right: "15%", height: 2,
                borderRadius: "0 0 3px 3px",
                background: "linear-gradient(to right, transparent, rgba(200,145,58,0.7), transparent)",
              }} />

              {/* Nav items */}
              <nav style={{ display: "flex", flexDirection: "column", gap: "0.15rem", marginBottom: "0.75rem" }}>
                {sections.map((s, i) => {
                  const active = s.id === activeId;
                  return (
                    <motion.button
                      key={s.id}
                      initial={{ opacity: 0, x: 10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.04, duration: 0.22 }}
                      onClick={() => scrollTo(s.id)}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "0.75rem",
                        padding: "0.55rem 0.75rem",
                        borderRadius: "0.6rem",
                        border: "none",
                        cursor: "pointer",
                        textAlign: "left",
                        background: active ? "rgba(200,145,58,0.12)" : "transparent",
                        transition: "background 0.15s",
                      }}
                    >
                      {/* Dot */}
                      <span style={{
                        width: active ? 7 : 5,
                        height: active ? 7 : 5,
                        borderRadius: "50%",
                        flexShrink: 0,
                        background: active ? "#C8913A" : "rgba(168,189,208,0.4)",
                        boxShadow: active ? "0 0 8px rgba(200,145,58,0.5)" : "none",
                        transition: "all 0.2s",
                      }} />
                      <span style={{
                        fontFamily: "DM Mono, monospace",
                        fontSize: "0.68rem",
                        letterSpacing: "0.1em",
                        textTransform: "uppercase",
                        color: active ? "#C8913A" : "rgba(168,189,208,0.8)",
                        fontWeight: active ? 500 : 400,
                      }}>
                        {s.label}
                      </span>
                    </motion.button>
                  );
                })}
              </nav>

              {/* Divider */}
              <div style={{ height: 1, background: "rgba(200,145,58,0.2)", margin: "0 0.25rem 0.75rem" }} />

              {/* Lang toggle */}
              <div style={{ display: "flex", gap: "0.4rem", paddingLeft: "0.5rem" }}>
                {(["en", "cs"] as Lang[]).map(l => (
                  <button
                    key={l}
                    onClick={() => setLang(l)}
                    style={{
                      padding: "0.3rem 0.7rem",
                      borderRadius: "0.4rem",
                      border: lang === l ? "1px solid rgba(200,145,58,0.42)" : "1px solid rgba(200,145,58,0.15)",
                      background: lang === l ? "rgba(200,145,58,0.15)" : "transparent",
                      color: lang === l ? "#C8913A" : "rgba(168,189,208,0.45)",
                      fontFamily: "DM Mono, monospace",
                      fontSize: "0.62rem",
                      fontWeight: 600,
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      cursor: "pointer",
                      transition: "all 0.15s",
                    }}
                  >
                    {l}
                  </button>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
