"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { Lang } from "@/data/site";

export function SideRail({
  sections, activeId, lang, setLang,
}: {
  sections: { id: string; label: string }[];
  activeId: string;
  lang: Lang;
  setLang: (l: Lang) => void;
}) {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <aside className="fixed left-4 top-1/2 z-[100] -translate-y-1/2">
      {/* ── Entrance: slide in from left, delayed after hero intro ── */}
      <motion.div
        initial={{ x: -64, opacity: 0 }}
        animate={{ x: 0,   opacity: 1 }}
        transition={{ duration: 0.7, delay: 3.2, ease: [0.22, 1, 0.36, 1] }}
        className="relative flex flex-col items-center gap-2.5 rounded-2xl px-2.5 py-4"
        style={{
          background: "linear-gradient(170deg, rgba(30,62,96,0.98) 0%, rgba(18,44,72,0.98) 100%)",
          backdropFilter: "blur(28px) saturate(1.4)",
          WebkitBackdropFilter: "blur(28px) saturate(1.4)",
          border: "1px solid rgba(200,145,58,0.42)",
          boxShadow: [
            "inset 0 1px 0 rgba(200,145,58,0.2)",
            "0 8px 48px rgba(0,0,0,0.55)",
            "0 0 0 0.5px rgba(200,145,58,0.1)",
          ].join(", "),
        }}
      >
        {/* Amber top shimmer — pulses gently */}
        <motion.div
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          style={{
            position: "absolute", top: 0, left: "15%", right: "15%", height: 2,
            borderRadius: "0 0 3px 3px",
            background: "linear-gradient(to right, transparent, rgba(200,145,58,0.75), transparent)",
          }}
        />

        {/* Nav dots */}
        {sections.map((s, idx) => {
          const active = s.id === activeId;
          return (
            <motion.div
              key={s.id}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 3.3 + idx * 0.06, duration: 0.4, ease: "easeOut" }}
              className="relative flex items-center"
            >
              {/* Tooltip */}
              <AnimatePresence>
                {hovered === s.id && (
                  <motion.div
                    initial={{ opacity: 0, x: 8 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 8 }}
                    transition={{ duration: 0.14 }}
                    className="absolute left-full ml-3 whitespace-nowrap rounded-lg px-3 py-1.5"
                    style={{
                      background: "linear-gradient(135deg, rgba(30,62,96,0.99), rgba(18,44,72,0.99))",
                      color: "#E8EEF4",
                      border: "1px solid rgba(200,145,58,0.38)",
                      fontFamily: "DM Mono, monospace",
                      fontSize: "0.66rem",
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      pointerEvents: "none",
                      boxShadow: "0 4px 20px rgba(0,0,0,0.5)",
                    }}
                  >
                    <span className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-[5px]"
                      style={{
                        width: 0, height: 0,
                        borderTop: "4px solid transparent",
                        borderBottom: "4px solid transparent",
                        borderRight: "5px solid rgba(30,62,96,0.99)",
                      }} />
                    {s.label}
                  </motion.div>
                )}
              </AnimatePresence>

              <button
                onClick={() => document.getElementById(s.id)?.scrollIntoView({ behavior: "smooth" })}
                onMouseEnter={() => setHovered(s.id)}
                onMouseLeave={() => setHovered(null)}
                aria-label={s.label}
                className="relative flex h-7 w-7 items-center justify-center"
              >
                <motion.span
                  animate={{
                    width:  active ? 9 : 5,
                    height: active ? 9 : 5,
                    backgroundColor: active ? "#C8913A" : "rgba(168,189,208,0.45)",
                    boxShadow: active
                      ? "0 0 0 3px rgba(200,145,58,0.15), 0 0 10px rgba(200,145,58,0.5)"
                      : "none",
                  }}
                  transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
                  className="rounded-full block"
                />
                {active && (
                  <motion.span
                    layoutId="ring"
                    className="absolute inset-0 rounded-full"
                    style={{ border: "1.5px solid rgba(200,145,58,0.5)" }}
                    transition={{ duration: 0.25 }}
                  />
                )}
              </button>
            </motion.div>
          );
        })}

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }} animate={{ scaleX: 1 }}
          transition={{ delay: 3.7, duration: 0.4 }}
          className="w-5 rounded-full"
          style={{ height: 1, background: "rgba(200,145,58,0.3)", margin: "1px 0", transformOrigin: "center" }}
        />

        {/* Lang toggle */}
        {(["en", "cs"] as Lang[]).map((l, i) => (
          <motion.button
            key={l}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 3.75 + i * 0.07, duration: 0.35 }}
            onClick={() => setLang(l)}
            className="h-6 w-6 rounded-md transition-all duration-200"
            style={{
              fontFamily: "DM Mono, monospace",
              fontSize: "0.6rem",
              fontWeight: 600,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              background: lang === l ? "rgba(200,145,58,0.2)" : "transparent",
              color: lang === l ? "#C8913A" : "rgba(168,189,208,0.4)",
              border: lang === l ? "1px solid rgba(200,145,58,0.42)" : "1px solid transparent",
            }}
          >
            {l}
          </motion.button>
        ))}
      </motion.div>
    </aside>
  );
}
