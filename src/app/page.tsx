"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { SideRail }   from "@/components/SideRail";
import { Hero }       from "@/components/Hero";
import { About }      from "@/components/About";
import { Pillars }    from "@/components/Pillars";
import { Experience } from "@/components/Experience";
import { Projects }   from "@/components/Projects";
import { Skills }     from "@/components/Skills";
import { Contact }    from "@/components/Contact";
import { Footer }     from "@/components/Footer";
import { i18n, t }   from "@/data/site";
import type { Lang }  from "@/data/site";

const SECTION_IDS = ["home","about","pillars","experience","projects","skills","contact"];

// ── Fixed full-page network canvas ─────────────────────────
function NetworkCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d")!;
    let raf: number;
    let w = 0, h = 0;
    const NODE_COUNT = 48;
    const MAX_DIST   = 170;
    type Node = { x:number; y:number; vx:number; vy:number };
    let nodes: Node[] = [];

    const resize = () => {
      w = canvas.width  = canvas.offsetWidth;
      h = canvas.height = canvas.offsetHeight;
    };
    const init = () => {
      resize();
      nodes = Array.from({ length: NODE_COUNT }, () => ({
        x: Math.random() * w, y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.32,
        vy: (Math.random() - 0.5) * 0.32,
      }));
    };
    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      for (const n of nodes) {
        n.x += n.vx; n.y += n.vy;
        if (n.x < 0 || n.x > w) n.vx *= -1;
        if (n.y < 0 || n.y > h) n.vy *= -1;
      }
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const d  = Math.sqrt(dx*dx + dy*dy);
          if (d < MAX_DIST) {
            const a = (1 - d / MAX_DIST) * 0.2;
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.strokeStyle = `rgba(168,189,208,${a})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }
      for (const n of nodes) {
        ctx.beginPath();
        ctx.arc(n.x, n.y, 3.5, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(200,145,58,0.1)";
        ctx.fill();
        ctx.beginPath();
        ctx.arc(n.x, n.y, 1.5, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(200,145,58,0.42)";
        ctx.fill();
      }
      raf = requestAnimationFrame(draw);
    };
    init(); draw();
    const ro = new ResizeObserver(resize);
    ro.observe(canvas);
    return () => { cancelAnimationFrame(raf); ro.disconnect(); };
  }, []);

  return (
    <canvas ref={canvasRef} style={{
      position:"fixed", inset:0, width:"100%", height:"100%",
      zIndex:1, pointerEvents:"none",
    }} />
  );
}

// ── Fixed photo, scales on scroll ──────────────────────────
function ScrollPhoto() {
  const { scrollY } = useScroll();
  const [vh, setVh] = useState(900);
  useEffect(() => {
    const upd = () => setVh(window.innerHeight);
    upd();
    window.addEventListener("resize", upd);
    return () => window.removeEventListener("resize", upd);
  }, []);

  const sp = { stiffness:75, damping:18 };
  const rawScale   = useTransform(scrollY, [0, vh*0.5, vh*0.92], [1, 1, 1]);
  const rawRadius  = useTransform(scrollY, [vh*0.4, vh*0.92],    [0, 0]);
  const rawOpacity = useTransform(scrollY, [0, vh*2.75, vh*2.92], [1, 1, 0]);
  const shadowOp   = useTransform(scrollY, [vh*0.5, vh*0.92],    [0, 1]);
  const rawPhotoY   = useTransform(scrollY, [vh*2.65, vh*2.95],   [0, -320]);
  const photoY      = useSpring(rawPhotoY, { stiffness:180, damping:28 });
  const scale        = useSpring(rawScale,   sp);
  const borderRadius = useSpring(rawRadius,  sp);
  const opacity      = useSpring(rawOpacity, { stiffness:70, damping:20 });

  return (
    <motion.div
      initial={{ opacity:0 }}
      animate={{ opacity:1 }}
      transition={{ duration:1.1, ease:"easeOut", delay:0.2 }}
      style={{
        position:"fixed", right:0, top:0,
        width:"44%", height:"100dvh",
        zIndex:25, pointerEvents:"none",
        transformOrigin:"right bottom",
        scale, borderRadius, opacity, y: photoY, overflow:"hidden",
      }}
    >
      <motion.div style={{
        position:"absolute", inset:0, zIndex:2, pointerEvents:"none",
        borderRadius:"inherit",
        boxShadow:"0 24px 80px rgba(200,145,58,0.1), inset 0 1px 0 rgba(200,145,58,0.07)",
        opacity: shadowOp,
      }} />
      <img src="/profile.png" alt="Matthew Grygar"
        style={{ position:"absolute", bottom:0, left:"50%",
          transform:"translateX(-50%)",
          height:"100%", width:"auto", maxWidth:"none", display:"block" }} />
    </motion.div>
  );
}

export default function Page() {
  const [lang, setLang]         = useState<Lang>("en");
  const [activeId, setActiveId] = useState("home");

  // Cursor spotlight
  const spotlightRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      if (!spotlightRef.current) return;
      spotlightRef.current.style.left = `${e.clientX}px`;
      spotlightRef.current.style.top  = `${e.clientY}px`;
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  // Active section tracking
  const sections = SECTION_IDS.map(id => ({ id, label: t((i18n.nav as any)[id], lang) }));
  useEffect(() => {
    const obs: IntersectionObserver[] = [];
    SECTION_IDS.forEach(id => {
      const el = document.getElementById(id);
      if (!el) return;
      const o = new IntersectionObserver(
        ([e]) => { if (e.isIntersecting) setActiveId(id); },
        { threshold:0.4 }
      );
      o.observe(el); obs.push(o);
    });
    return () => obs.forEach(o => o.disconnect());
  }, []);

  return (
    <>
      {/* Fixed dark bg */}
      <div style={{ position:"fixed", inset:0, background:"var(--bg)", zIndex:0 }} />

      {/* Fixed network canvas — always visible behind everything */}
      <NetworkCanvas />

      {/* Cursor spotlight */}
      <div ref={spotlightRef} className="pointer-events-none fixed z-[999]"
        style={{ width:320, height:320, borderRadius:"50%",
          transform:"translate(-50%,-50%)",
          background:"radial-gradient(circle,rgba(200,145,58,0.05) 0%,transparent 70%)",
          transition:"left 0.1s ease,top 0.1s ease" }} />

      <ScrollPhoto />
      <SideRail sections={sections} activeId={activeId} lang={lang} setLang={setLang} />

      {/* Sections — transparent bg, content scrolls over fixed canvas */}
      <main className="relative" style={{ zIndex:10 }}>
        <section id="home"       data-slide><Hero       lang={lang} /></section>
        <section id="about"      data-slide><About      lang={lang} /></section>
        <section id="pillars"    data-slide><Pillars    lang={lang} /></section>
        <section id="experience" data-slide><Experience lang={lang} /></section>
        <section id="projects"   data-slide><Projects   lang={lang} /></section>
        <section id="skills"     data-slide><Skills     lang={lang} /></section>
        <section id="contact"    data-slide><Contact    lang={lang} /></section>
        <Footer lang={lang} />
      </main>
    </>
  );
}
