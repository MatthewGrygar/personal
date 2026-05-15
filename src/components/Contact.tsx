"use client";
import { useState } from "react";

const SUBJECTS = ["Hiring", "Risk review", "IAM project", "Other"] as const;

export function Contact() {
  const [sent,     setSent]     = useState(false);
  const [sending,  setSending]  = useState(false);
  const [subject,  setSubject]  = useState<string>("Hiring");
  const [msg,      setMsg]      = useState("");
  const [name,     setName]     = useState("");
  const [email,    setEmail]    = useState("");
  const [company,  setCompany]  = useState("");

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSending(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, phone: company, subject, message: msg }),
      });
      if (!res.ok) throw new Error();
      setSent(true);
      setTimeout(() => setSent(false), 3500);
    } catch {
      // silent fallback
    } finally {
      setSending(false);
    }
  }

  return (
    <section className="section" id="contact">
      <div className="section-head">
        <div className="section-idx reveal">
          <span>05 / Contact</span>
          <span>— Let&apos;s talk</span>
        </div>
        <h2 className="section-title reveal">
          Let&apos;s manage risks <em>before they become incidents.</em>
        </h2>
      </div>

      <div className="contact-grid">
        {/* Left — info */}
        <div className="reveal-left">
          <p className="contact-lead">
            If your team is hiring for <em>IT Risk, IAM,</em> or operational resilience — or you simply want a second pair of eyes on an incident model — I&apos;m happy to talk.
          </p>
          <p className="contact-body">
            Best reached by email or LinkedIn. I usually answer within a day; if it&apos;s urgent, say so in the subject line and I&apos;ll prioritise.
          </p>
          <div className="contact-list">
            <a className="contact-row" href="mailto:matthew.grygar@seznam.cz" data-hover>
              <span className="label">— Email</span>
              <span className="val">matthew.grygar@seznam.cz</span>
              <span className="arr">↗</span>
            </a>
            <a className="contact-row" href="https://www.linkedin.com/in/matthew-grygar-214b94232/" target="_blank" rel="noopener noreferrer" data-hover>
              <span className="label">— LinkedIn</span>
              <span className="val">Matthew Grygar</span>
              <span className="arr">↗</span>
            </a>
            <a className="contact-row" href="/cv-matthew-grygar.pdf" target="_blank" rel="noreferrer" data-hover>
              <span className="label">— CV</span>
              <span className="val">Download PDF</span>
              <span className="arr">↓</span>
            </a>
          </div>
        </div>

        {/* Right — form card */}
        <form className="form-card reveal-right" onSubmit={onSubmit}>
          <div className="form-card-head">
            <span className="title">— Direct message</span>
            <span className="status">
              <span className="dot" /> Reply within 24h
            </span>
          </div>

          <div className="form">
            <div className="form-row">
              <div className="field">
                <label>Name<span className="req">*</span></label>
                <div className="field-wrap">
                  <input type="text" placeholder="Your name" required value={name} onChange={e => setName(e.target.value)} />
                </div>
              </div>
              <div className="field">
                <label>Email<span className="req">*</span></label>
                <div className="field-wrap">
                  <input type="email" placeholder="you@company.com" required value={email} onChange={e => setEmail(e.target.value)} />
                </div>
              </div>
            </div>

            <div className="field">
              <label>Company <span style={{ color: "var(--muted)" }}>(optional)</span></label>
              <div className="field-wrap">
                <input type="text" placeholder="Where you're writing from" value={company} onChange={e => setCompany(e.target.value)} />
              </div>
            </div>

            <div className="field">
              <label>Subject</label>
              <div className="subject-chips" role="radiogroup" aria-label="Message subject">
                {SUBJECTS.map((s) => (
                  <button
                    type="button" key={s} role="radio"
                    aria-checked={subject === s}
                    className={`chip-btn${subject === s ? " on" : ""}`}
                    onClick={() => setSubject(s)}
                    data-hover
                  >{s}</button>
                ))}
              </div>
            </div>

            <div className="field">
              <label>Message<span className="req">*</span></label>
              <div className="field-wrap">
                <textarea
                  rows={5}
                  placeholder="What's on fire? Or what's not, but you'd like to keep that way."
                  required
                  value={msg}
                  onChange={e => setMsg(e.target.value.slice(0, 1000))}
                />
              </div>
              <div className="char-count"><b>{msg.length}</b> / 1000</div>
            </div>

            <div className="form-actions">
              <div className="meta">
                Encrypted in transit · <b>No third-party tracking</b>
              </div>
              <button
                type="submit"
                className={`cta filled${sending ? " sending" : ""}${sent ? " sent" : ""}`}
                disabled={sending || sent}
                data-hover
              >
                {sent ? "✓ Sent — talk soon" : sending ? "Sending…" : "Send message →"}
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}
