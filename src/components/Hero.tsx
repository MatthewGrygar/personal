"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown, Download, Mail } from "lucide-react";
import { profile, i18n, t } from "@/data/site";
import type { Lang } from "@/data/site";

const ROLES = [
  "System Engineer",
  "Operations Coordinator",
  "Incident Coordinator",
  "Senior Application Specialist",
];

const STATS = [
  { num:"5", unit_en:"YRS",  unit_cs:"LET",  label_en:"Years of\nexperience", label_cs:"Let\npraxe"       },
  { num:"3", unit_en:"YRS",  unit_cs:"ROKY", label_en:"Senior\nlevel",        label_cs:"Senior\nlevel"    },
  { num:"→", unit_en:"RISK", unit_cs:"RISK", label_en:"Next\nchapter",        label_cs:"Příští\nkapitola", isArrow:true },
];

const QUOTE = {
  en: { text: '"The best way to predict the future is to create it."', author: "— Peter Drucker" },
  cs: { text: '"Nejlepší způsob, jak předpovědět budoucnost, je vytvořit ji."',  author: "— Peter Drucker" },
};

// ── Animated network / node graph canvas ──────────────────────
function NetworkCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d")!;
    let raf: number;
    let w = 0, h = 0;

    const NODE_COUNT = 38;
    const MAX_DIST   = 160;
    const NODE_COLOR = "rgba(200,145,58,";   // amber nodes
    const LINE_COLOR = "rgba(168,189,208,";  // steel-blue lines

    type Node = { x:number; y:number; vx:number; vy:number };
    let nodes: Node[] = [];

    const resize = () => {
      w = canvas.width  = canvas.offsetWidth;
      h = canvas.height = canvas.offsetHeight;
    };

    const init = () => {
      resize();
      nodes = Array.from({ length: NODE_COUNT }, () => ({
        x:  Math.random() * w,
        y:  Math.random() * h,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
      }));
    };

    const draw = () => {
      ctx.clearRect(0, 0, w, h);

      // Update positions with gentle bounce
      for (const n of nodes) {
        n.x += n.vx;
        n.y += n.vy;
        if (n.x < 0 || n.x > w) n.vx *= -1;
        if (n.y < 0 || n.y > h) n.vy *= -1;
      }

      // Draw connections
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const d  = Math.sqrt(dx*dx + dy*dy);
          if (d < MAX_DIST) {
            const alpha = (1 - d / MAX_DIST) * 0.22;
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.strokeStyle = LINE_COLOR + alpha + ")";
            ctx.lineWidth   = 0.8;
            ctx.stroke();
          }
        }
      }

      // Draw nodes
      for (const n of nodes) {
        // Outer glow ring
        ctx.beginPath();
        ctx.arc(n.x, n.y, 3.5, 0, Math.PI * 2);
        ctx.fillStyle = NODE_COLOR + "0.12)";
        ctx.fill();
        // Core dot
        ctx.beginPath();
        ctx.arc(n.x, n.y, 1.5, 0, Math.PI * 2);
        ctx.fillStyle = NODE_COLOR + "0.45)";
        ctx.fill();
      }

      raf = requestAnimationFrame(draw);
    };

    init();
    draw();

    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position:"absolute", inset:0,
        width:"100%", height:"100%",
        zIndex:2, pointerEvents:"none",
        opacity:0.85,
      }}
    />
  );
}

export function Hero({ lang }: { lang: Lang }) {
  const [roleIdx, setRoleIdx] = useState(0);
  const [roleOut, setRoleOut] = useState(false);
  const hero = i18n.hero;

  useEffect(() => {
    const iv = setInterval(() => {
      setRoleOut(true);
      setTimeout(() => { setRoleIdx(i => (i+1) % ROLES.length); setRoleOut(false); }, 320);
    }, 2800);
    return () => clearInterval(iv);
  }, []);

  const fu = (delay: number) => ({
    initial: { opacity:0, y:14 }, animate: { opacity:1, y:0 },
    transition: { duration:0.65, delay, ease:[0.22,1,0.36,1] as any },
  });
  const fo = (delay: number) => ({
    initial: { opacity:0 }, animate: { opacity:1 },
    transition: { duration:0.55, delay },
  });

  const q = lang === "cs" ? QUOTE.cs : QUOTE.en;

  return (
    <div className="relative flex h-dvh w-full overflow-hidden" style={{ background:"var(--bg)" }}>

      {/* Network canvas — fills entire hero */}
      <NetworkCanvas />

      {/* Subtle radial vignette so text side is darker */}
      <div className="pointer-events-none absolute inset-0" style={{ zIndex:3,
        background:"radial-gradient(ellipse 60% 80% at 25% 50%, transparent 30%, rgba(13,27,42,0.55) 100%)" }} />

      {/* Vertical edge label */}
      <motion.div {...fo(3.0)}
        className="pointer-events-none absolute right-5 top-1/2 hidden lg:flex flex-col items-center gap-4"
        style={{ zIndex:10, writingMode:"vertical-rl", transform:"translateY(-50%) rotate(180deg)",
          fontFamily:"DM Mono,monospace", fontSize:"0.56rem", letterSpacing:"0.22em",
          color:"rgba(168,189,208,0.35)", textTransform:"uppercase" }}>
        <span>Prague · CZ</span>
        <span style={{ width:1, height:36, background:"rgba(168,189,208,0.2)", display:"block" }} />
        <span>Portfolio</span>
      </motion.div>

      {/* ── TEXT ── */}
      <div className="relative flex h-full flex-col justify-center hero-content"
        style={{ width:"56%", zIndex:20, paddingLeft:"clamp(5rem,8vw,9rem)", paddingRight:"2.5rem" }}>

        {/* Kicker */}
        <motion.p {...fu(2.2)}
          style={{ color:"var(--amber)", fontFamily:"DM Mono,monospace", fontSize:"0.65rem",
            letterSpacing:"0.22em", textTransform:"uppercase", marginBottom:"1.6rem", fontWeight:400 }}>
          {t(hero.kicker, lang)}
        </motion.p>

        {/* Name + signature */}
        <motion.div style={{ marginBottom:"2.2rem" }}>
          <div style={{ display:"flex", alignItems:"flex-end", gap:"0.6rem" }}>
            <h1 className="font-display"
              style={{ fontSize:"clamp(4.5rem,8vw,10rem)", fontWeight:600, color:"var(--ink)",
                letterSpacing:"-0.025em", lineHeight:0.88, flexShrink:0 }}>
              <motion.span initial={{ opacity:0, y:36 }} animate={{ opacity:1, y:0 }}
                transition={{ duration:0.85, delay:0.9, ease:[0.22,1,0.36,1] as any }}
                style={{ display:"block" }}>Matthew</motion.span>
              <motion.span initial={{ opacity:0, y:36 }} animate={{ opacity:1, y:0 }}
                transition={{ duration:0.85, delay:1.05, ease:[0.22,1,0.36,1] as any }}
                style={{ display:"block" }}>Grygar</motion.span>
            </h1>
            <motion.div
              style={{ paddingBottom:"0.4rem", flexShrink:0, overflow:"hidden" }}
              initial={{ width:0, opacity:0 }}
              animate={{ width:"clamp(130px,12vw,190px)", opacity:1 }}
              transition={{ duration:0.65, delay:1.55, ease:[0.4,0,0.2,1] as any }}>
              <img src="/signature.png" alt="Podpis"
                style={{ width:"clamp(130px,12vw,190px)", minWidth:"clamp(130px,12vw,190px)",
                  opacity:0.45, display:"block", transform:"rotate(-2deg)", transformOrigin:"left bottom" }} />
            </motion.div>
          </div>
        </motion.div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX:0 }} animate={{ scaleX:1 }}
          transition={{ duration:0.6, delay:2.05, ease:[0.22,1,0.36,1] as any }}
          style={{ height:"1px", background:"linear-gradient(to right,var(--amber),transparent)",
            transformOrigin:"left center", marginBottom:"1.2rem",
            width:"clamp(160px,24vw,280px)" }} />

        {/* Role */}
        <motion.div {...fo(2.25)} className="mb-4">
          <span className="font-display italic"
            style={{ fontSize:"clamp(1.2rem,2vw,1.75rem)", color:"var(--amber-light)", fontWeight:400,
              whiteSpace:"nowrap", transition:"opacity 0.28s ease,transform 0.28s ease",
              opacity: roleOut ? 0 : 1,
              transform: roleOut ? "translateY(-7px)" : "translateY(0)",
              display:"inline-block" }}>
            {ROLES[roleIdx]}
          </span>
        </motion.div>

        {/* Quote + Drucker — tight block */}
        <motion.div {...fu(2.4)} style={{ marginBottom:"2rem", maxWidth:"480px" }}>
          <p className="font-display italic"
            style={{ fontSize:"clamp(0.9rem,1.3vw,1.05rem)", color:"var(--ink-warm)",
              fontWeight:300, lineHeight:1.5, marginBottom:"0.35rem",
              whiteSpace:"nowrap" }}>
            {q.text}
          </p>
          {/* Drucker — immediately below quote, right-aligned to quote width */}
          <p style={{ fontFamily:"DM Mono,monospace", fontSize:"0.58rem",
            letterSpacing:"0.14em", textTransform:"uppercase",
            color:"var(--amber)", opacity:0.75 }}>
            {q.author}
          </p>
        </motion.div>

        {/* CTAs */}
        <motion.div {...fu(2.6)} className="flex flex-wrap items-center gap-3 mb-10 hero-stats-row">
          <a href="#contact"
            onClick={e => { e.preventDefault(); document.getElementById("contact")?.scrollIntoView({ behavior:"smooth" }); }}
            className="flex items-center justify-center gap-2 rounded-full px-7 py-3 text-sm font-medium transition-all hover:brightness-110"
            style={{ background:"var(--amber)", color:"#0D1B2A", fontWeight:600,
              boxShadow:"0 4px 20px rgba(200,145,58,0.35)", letterSpacing:"0.03em",
              minWidth:"148px" }}>
            <Mail size={13} />{t(hero.primaryCta, lang)}
          </a>
          <a href={profile.cvUrl} download
            className="flex items-center justify-center gap-2 rounded-full px-7 py-3 text-sm font-medium transition-all"
            style={{ borderColor:"rgba(200,145,58,0.35)", color:"var(--ink)",
              border:"1px solid rgba(200,145,58,0.35)",
              background:"rgba(30,62,95,0.6)", backdropFilter:"blur(10px)",
              minWidth:"148px", letterSpacing:"0.03em" }}
            onMouseEnter={e => { e.currentTarget.style.borderColor="var(--amber)"; e.currentTarget.style.color="var(--amber)"; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor="rgba(200,145,58,0.35)"; e.currentTarget.style.color="var(--ink)"; }}>
            <Download size={13} />{t(hero.secondaryCta, lang)}
          </a>
        </motion.div>

        {/* Stats — two rows, baseline-aligned numbers */}
        <motion.div {...fo(2.75)}>
          <div style={{ display:"flex", alignItems:"center", gap:0 }}>
            {STATS.map((s, i) => {
              const unit = lang === "en" ? s.unit_en : s.unit_cs;
              return (
                <React.Fragment key={i}>
                  {i > 0 && (
                    <div style={{ width:1, height:44, background:"rgba(200,145,58,0.2)",
                      margin:"0 1.6rem", alignSelf:"center", flexShrink:0 }} />
                  )}
                  <div style={{ width:"88px", flexShrink:0, display:"flex", alignItems:"center", gap:"0.22rem" }}>
                    <span className="font-display"
                      style={{ fontSize: "clamp(2.4rem,3.6vw,4rem)",
                        fontWeight:400, color:"var(--ink)", letterSpacing:"-0.03em", lineHeight:1 }}>
                      {s.num}
                    </span>
                    <span style={{ fontFamily:"DM Mono,monospace",
                      fontSize: s.isArrow ? "clamp(1rem,1.4vw,1.25rem)" : "clamp(0.65rem,0.88vw,0.8rem)",
                      color:"var(--amber)",
                      fontWeight:700, textTransform:"uppercase", letterSpacing:"0.1em", lineHeight:1 }}>
                      {unit}
                    </span>
                  </div>
                </React.Fragment>
              );
            })}
          </div>
          <div style={{ display:"flex", marginTop:"0.5rem" }}>
            {STATS.map((s, i) => {
              const label = lang === "en" ? s.label_en : s.label_cs;
              return (
                <React.Fragment key={i}>
                  {i > 0 && <div style={{ width:1, margin:"0 1.6rem", flexShrink:0 }} />}
                  <p style={{ width:"88px", flexShrink:0, fontFamily:"DM Mono,monospace",
                    fontSize:"0.58rem", letterSpacing:"0.13em", textTransform:"uppercase",
                    color:"var(--ink-soft)", lineHeight:1.6, whiteSpace:"pre-line" }}>
                    {label}
                  </p>
                </React.Fragment>
              );
            })}
          </div>
        </motion.div>
      </div>

      {/* Scroll hint */}
      <motion.button {...fo(3.1)}
        onClick={() => document.getElementById("about")?.scrollIntoView({ behavior:"smooth" })}
        className="absolute bottom-6 left-1/2 z-20 -translate-x-1/2 flex flex-col items-center gap-1.5"
        style={{ color:"var(--ink-muted)" }}>
        <span style={{ fontFamily:"DM Mono,monospace", fontSize:"0.54rem",
          letterSpacing:"0.2em", textTransform:"uppercase" }}>scroll</span>
        <motion.div animate={{ y:[0,4,0] }} transition={{ repeat:Infinity, duration:2, ease:"easeInOut" }}>
          <ArrowDown size={11} />
        </motion.div>
      </motion.button>
    </div>
  );
}
