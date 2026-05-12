"use client";

import { useState } from "react";

const inputStyle: React.CSSProperties = {
  background: "#0E1420",
  border: "1px solid #2A3245",
  color: "#E2DDD5",
  fontFamily: "'IBM Plex Sans',sans-serif",
  fontSize: "0.9rem",
  padding: "0.85rem 1rem",
  outline: "none",
  width: "100%",
  resize: "none" as const,
};

const labelStyle: React.CSSProperties = {
  fontFamily: "'IBM Plex Mono',monospace",
  fontSize: "0.65rem",
  letterSpacing: "0.15em",
  textTransform: "uppercase" as const,
  color: "#7A8090",
  display: "block",
  marginBottom: "0.5rem",
};

export function Contact() {
  const [form, setForm] = useState({ name:"", email:"", phone:"", message:"" });
  const [sent, setSent]             = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError]           = useState("");

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setSubmitting(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("failed");
      setSent(true);
    } catch {
      setError("Failed to send. Please try again or email me directly.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <section id="contact" style={{ padding:"8rem 4rem", borderTop:"1px solid rgba(255,255,255,0.07)" }}>
      <div className="reveal" style={{ display:"flex", alignItems:"baseline", gap:"2rem", marginBottom:"5rem" }}>
        <span style={{ fontFamily:"'IBM Plex Mono',monospace", fontSize:"0.7rem", letterSpacing:"0.2em", color:"#C9A84C", textTransform:"uppercase" }}>04 / Contact</span>
        <h2 style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:"clamp(2.5rem,4vw,4rem)", fontWeight:300, color:"#E2DDD5", lineHeight:1.1 }}>
          Let&apos;s manage risks<br />before they become<br /><em style={{ fontStyle:"italic", color:"#C9A84C" }}>incidents.</em>
        </h2>
      </div>

      <div className="reveal" style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"8rem", alignItems:"start" }}>
        {/* Left — info */}
        <div>
          <p style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:"1.8rem", fontWeight:300, color:"#E2DDD5", lineHeight:1.4, marginBottom:"2rem" }}>
            Looking for someone with hands-on experience in incident management and IT risk?
          </p>
          <p style={{ fontSize:"0.92rem", color:"#7A8090", lineHeight:1.8, marginBottom:"2.5rem" }}>
            Whether for an IT Risk Manager role or as an experienced member of an operations team — feel free to reach out. Open to conversations about Prague and hybrid opportunities.
          </p>
          <div style={{ display:"flex", flexDirection:"column" }}>
            {[
              { label:"Email",    value:"matthew.grygar@seznam.cz", href:"mailto:matthew.grygar@seznam.cz" },
              { label:"LinkedIn", value:"Matthew Grygar",           href:"https://www.linkedin.com/in/matthew-grygar-214b94232/" },
              { label:"CV",       value:"Download PDF",             href:"/cv-matthew-grygar.pdf" },
            ].map(c => (
              <a key={c.label} href={c.href} target={c.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer"
                style={{ display:"flex", alignItems:"center", gap:"1rem", textDecoration:"none", fontFamily:"'IBM Plex Mono',monospace", fontSize:"0.72rem", letterSpacing:"0.08em", color:"#7A8090", padding:"1rem 0", borderBottom:"1px solid rgba(255,255,255,0.07)", transition:"color 0.2s" }}
                onMouseOver={e => (e.currentTarget.style.color = "#E2DDD5")}
                onMouseOut={e  => (e.currentTarget.style.color = "#7A8090")}
              >
                <span style={{ color:"#C9A84C", textTransform:"uppercase", letterSpacing:"0.15em", minWidth:"5rem", fontSize:"0.65rem" }}>{c.label}</span>
                {c.value}
              </a>
            ))}
          </div>
        </div>

        {/* Right — form */}
        <div>
          {sent ? (
            <div style={{ padding:"3rem 0", textAlign:"center" }}>
              <div style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:"2rem", color:"#C9A84C", marginBottom:"1rem" }}>Message sent.</div>
              <p style={{ color:"#7A8090", fontSize:"0.9rem" }}>I&apos;ll get back to you shortly.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display:"flex", flexDirection:"column", gap:"1.2rem" }}>
              <div>
                <label style={labelStyle}>Name</label>
                <input name="name" required value={form.name} onChange={handleChange} placeholder="Your name" style={inputStyle} />
              </div>
              <div>
                <label style={labelStyle}>Email</label>
                <input name="email" type="email" required value={form.email} onChange={handleChange} placeholder="your@email.com" style={inputStyle} />
              </div>
              <div>
                <label style={labelStyle}>Phone (optional)</label>
                <input name="phone" type="tel" value={form.phone} onChange={handleChange} placeholder="+420 ..." style={inputStyle} />
              </div>
              <div>
                <label style={labelStyle}>Message</label>
                <textarea name="message" required rows={5} value={form.message} onChange={handleChange} placeholder="What are you reaching out about?" style={inputStyle} />
              </div>
              {error && <p style={{ color:"#E57373", fontSize:"0.82rem" }}>{error}</p>}
              <button type="submit" disabled={submitting} style={{ background:"#C9A84C", color:"#080C12", fontFamily:"'IBM Plex Mono',monospace", fontSize:"0.72rem", letterSpacing:"0.15em", textTransform:"uppercase", fontWeight:500, padding:"1rem 2rem", border:"none", cursor:submitting ? "not-allowed" : "pointer", alignSelf:"flex-start", opacity:submitting ? 0.7 : 1 }}>
                {submitting ? "Sending…" : "Send message"}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
