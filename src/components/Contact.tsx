"use client";

import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Mail, Linkedin, Send, Download, Phone } from "lucide-react";
import { profile, i18n, t } from "@/data/site";
import type { Lang } from "@/data/site";

const G = {
  panel: {
    background: "rgba(16,38,62,0.97)",
    backdropFilter: "blur(26px)",
    WebkitBackdropFilter: "blur(26px)",
    border: "1px solid rgba(200,145,58,0.38)",
    boxShadow: "inset 0 1px 0 rgba(200,145,58,0.12), 0 16px 56px rgba(0,0,0,0.5)",
  } as React.CSSProperties,
  link: {
    background: "rgba(16,38,62,0.97)",
    backdropFilter: "blur(20px)",
    WebkitBackdropFilter: "blur(20px)",
    border: "1px solid rgba(200,145,58,0.38)",
    boxShadow: "inset 0 1px 0 rgba(200,145,58,0.1)",
    transition: "transform 0.2s ease, box-shadow 0.2s ease",
  } as React.CSSProperties,
  cv: {
    background: "rgba(200,145,58,0.1)",
    border: "1px solid rgba(200,145,58,0.45)",
    boxShadow: "inset 0 1px 0 rgba(200,145,58,0.18)",
    transition: "transform 0.2s ease, box-shadow 0.2s ease, background 0.2s ease",
  } as React.CSSProperties,
};

const inputCss: React.CSSProperties = {
  background: "rgba(11,28,46,0.95)",
  border: "1px solid rgba(200,145,58,0.3)",
  color: "var(--ink)",
  borderRadius: "0.75rem",
  padding: "0.6rem 0.85rem",
  fontSize: "0.875rem",
  width: "100%",
  outline: "none",
  transition: "border-color 0.2s, box-shadow 0.2s",
};

const labelCss: React.CSSProperties = {
  display: "block",
  marginBottom: "0.3rem",
  fontSize: "0.65rem",
  textTransform: "uppercase",
  letterSpacing: "0.12em",
  color: "#A8BDD0",
  fontFamily: "DM Mono, monospace",
};

const onFocus = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
  e.currentTarget.style.borderColor = "rgba(200,145,58,0.8)";
  e.currentTarget.style.boxShadow = "0 0 0 3px rgba(200,145,58,0.1)";
};
const onBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
  e.currentTarget.style.borderColor = "rgba(200,145,58,0.3)";
  e.currentTarget.style.boxShadow = "none";
};

export function Contact({ lang }: { lang: Lang }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const contact = i18n.contact as any;
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    setError("");
    const fd = new FormData(e.currentTarget);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name:    fd.get("name"),
          email:   fd.get("email"),
          phone:   fd.get("phone"),
          message: fd.get("message"),
        }),
      });
      if (res.ok) { setSent(true); }
      else { setError(lang === "en" ? "Something went wrong, try again." : "Něco se nepodařilo, zkuste znovu."); }
    } catch {
      setError(lang === "en" ? "Network error." : "Chyba sítě.");
    } finally { setSending(false); }
  };

  const fi = (delay: number, axis: "x"|"y" = "y", val = 16) => ({
    initial: { opacity:0, [axis]: val },
    animate: inView ? { opacity:1, [axis]: 0 } : {},
    transition: { duration:0.5, delay, ease:[0.22,1,0.36,1] as any },
  });

  return (
    <div ref={ref} className="relative flex h-dvh w-full overflow-hidden pl-20 mobile-section"
      style={{ background: "transparent" }}>

      <div className="relative z-10 flex h-full flex-col px-6 py-6 md:px-12" style={{ width:"100%" }}>

        {/* Header */}
        <motion.p {...fi(0)} className="mb-0.5 text-xs uppercase tracking-widest"
          style={{ color:"var(--amber)", fontFamily:"DM Mono, monospace" }}>
          {t(i18n.nav.contact, lang)}
        </motion.p>

        <motion.h2 {...fi(0.07)} className="font-display mb-1 mobile-h2"
          style={{ fontSize:"clamp(1.6rem,3vw,3rem)", fontWeight:300, lineHeight:1.1, color:"var(--ink)" }}>
          {t(contact.headline, lang)}
        </motion.h2>

        <motion.p {...fi(0.13)} className="mb-4 text-sm leading-relaxed"
          style={{ color:"var(--ink-soft)", fontWeight:300, maxWidth:"68ch" }}>
          {t(contact.body, lang)}
        </motion.p>

        {/* 2-col: form LEFT | info RIGHT */}
        <div className="min-h-0 flex-1 grid gap-5 mobile-1col" style={{ gridTemplateColumns:"1.1fr 0.9fr" }}>

          {/* ── LEFT: Form ── */}
          <motion.div {...fi(0.18,"x",-16)}
            className="relative overflow-hidden rounded-2xl p-5"
            style={G.panel}>
            {/* Corner accents */}
            <span className="absolute top-3 left-3 pointer-events-none"
              style={{ display:"block", width:12, height:12, borderTop:"1.5px solid rgba(200,145,58,0.22)", borderLeft:"1.5px solid rgba(200,145,58,0.22)" }} />
            <span className="absolute bottom-3 right-3 pointer-events-none"
              style={{ display:"block", width:12, height:12, borderBottom:"1.5px solid rgba(200,145,58,0.22)", borderRight:"1.5px solid rgba(200,145,58,0.22)" }} />

            {sent ? (
              <div className="flex h-full flex-col items-center justify-center gap-3 text-center">
                <motion.span initial={{ scale:0 }} animate={{ scale:1 }} transition={{ type:"spring", stiffness:200 }}
                  style={{ fontSize:"2.5rem" }}>✦</motion.span>
                <p className="font-display text-xl" style={{ color:"var(--ink)" }}>
                  {lang==="en" ? "Message sent." : "Zpráva odeslána."}
                </p>
                <p className="text-sm" style={{ color:"var(--ink-soft)" }}>
                  {lang==="en" ? "Thank you, I'll be in touch." : "Děkuji, ozvu se."}
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex h-full flex-col gap-2.5">
                {/* Name + Email row */}
                <div className="grid gap-2.5 contact-name-email" style={{ gridTemplateColumns:"1fr 1fr" }}>
                  <div>
                    <label style={labelCss}>{t(contact.form.name, lang)}</label>
                    <input name="name" type="text" required style={inputCss} onFocus={onFocus} onBlur={onBlur} />
                  </div>
                  <div>
                    <label style={labelCss}>{t(contact.form.email, lang)}</label>
                    <input name="email" type="email" required style={inputCss} onFocus={onFocus} onBlur={onBlur} />
                  </div>
                </div>

                {/* Phone */}
                <div>
                  <label style={labelCss}>{t(contact.form.phone, lang)}</label>
                  <div style={{ position:"relative" }}>
                    <Phone size={13} style={{ position:"absolute", left:"0.75rem", top:"50%", transform:"translateY(-50%)", color:"rgba(200,145,58,0.5)", pointerEvents:"none" }} />
                    <input name="phone" type="tel" style={{ ...inputCss, paddingLeft:"2rem" }} onFocus={onFocus} onBlur={onBlur} />
                  </div>
                </div>

                {/* Message */}
                <div className="flex flex-1 flex-col">
                  <label style={labelCss}>{t(contact.form.message, lang)}</label>
                  <textarea name="message" required
                    style={{ ...inputCss, resize:"none", flex:1, minHeight:"80px" }}
                    onFocus={onFocus} onBlur={onBlur} />
                </div>

                {error && <p className="text-xs" style={{ color:"#F87171" }}>{error}</p>}

                <button type="submit" disabled={sending}
                  className="flex items-center justify-center gap-2 rounded-xl py-2.5 text-sm font-semibold transition-all duration-200 hover:opacity-90 hover:-translate-y-0.5 disabled:opacity-60"
                  style={{ background:"var(--amber)", color:"var(--bg)", boxShadow:"0 4px 20px rgba(200,145,58,0.3)" }}>
                  <Send size={13} />
                  {sending ? (lang==="en" ? "Sending…" : "Odesílám…") : t(contact.form.send, lang)}
                </button>

                <p className="text-center text-xs" style={{ color:"rgba(168,189,208,0.6)" }}>
                  {t(contact.form.note, lang)}
                </p>
              </form>
            )}
          </motion.div>

          {/* ── RIGHT: Info + CV + Signature ── */}
          <div className="flex flex-col gap-3">

            {/* Email link */}
            <motion.a {...fi(0.22,"x",16)}
              href={`mailto:${profile.email}`}
              className="flex items-center gap-4 rounded-2xl p-4 group"
              style={G.link}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)"; (e.currentTarget as HTMLElement).style.boxShadow = "0 12px 40px rgba(0,0,0,0.4)"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = "none"; (e.currentTarget as HTMLElement).style.boxShadow = ""; }}>
              <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl"
                style={{ background:"rgba(200,145,58,0.12)", color:"var(--amber)", border:"1px solid rgba(200,145,58,0.35)" }}>
                <Mail size={16} />
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest" style={{ color:"var(--ink-soft)", fontFamily:"DM Mono, monospace" }}>Email</p>
                <p className="text-sm font-medium" style={{ color:"var(--ink)" }}>{profile.email}</p>
              </div>
            </motion.a>

            {/* LinkedIn link */}
            <motion.a {...fi(0.28,"x",16)}
              href={profile.linkedin} target="_blank" rel="noreferrer"
              className="flex items-center gap-4 rounded-2xl p-4 group"
              style={G.link}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)"; (e.currentTarget as HTMLElement).style.boxShadow = "0 12px 40px rgba(0,0,0,0.4)"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = "none"; (e.currentTarget as HTMLElement).style.boxShadow = ""; }}>
              <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl"
                style={{ background:"rgba(200,145,58,0.12)", color:"var(--amber)", border:"1px solid rgba(200,145,58,0.35)" }}>
                <Linkedin size={16} />
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest" style={{ color:"var(--ink-soft)", fontFamily:"DM Mono, monospace" }}>LinkedIn</p>
                <p className="text-sm font-medium" style={{ color:"var(--ink)" }}>Matthew Grygar</p>
              </div>
            </motion.a>

            {/* CV Download */}
            <motion.a {...fi(0.34,"x",16)}
              href="/cv-matthew-grygar.pdf" download
              className="flex items-center gap-4 rounded-2xl p-4 group"
              style={G.cv}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)"; (e.currentTarget as HTMLElement).style.background = "rgba(200,145,58,0.18)"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = "none"; (e.currentTarget as HTMLElement).style.background = "rgba(200,145,58,0.1)"; }}>
              <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl"
                style={{ background:"rgba(200,145,58,0.15)", color:"var(--amber)", border:"1px solid rgba(200,145,58,0.5)" }}>
                <Download size={16} />
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest" style={{ color:"var(--amber)", fontFamily:"DM Mono, monospace" }}>
                  {lang==="en" ? "Curriculum Vitae" : "Životopis"}
                </p>
                <p className="text-sm font-medium" style={{ color:"var(--ink)" }}>
                  {lang==="en" ? "Download PDF" : "Stáhnout PDF"}
                </p>
              </div>
            </motion.a>

            {/* Signature */}
            <motion.div {...fi(0.44)}
              className="flex-1 flex items-end justify-center pb-2">
              <img src="/signature.png" alt="Signature"
                style={{ width:"clamp(140px,18vw,220px)", opacity:0.3, filter:"brightness(3)" }} />
            </motion.div>
          </div>

        </div>
      </div>
    </div>
  );
}
