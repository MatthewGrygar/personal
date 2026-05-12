"use client";
import { useState } from "react";

export function Contact() {
  const [sent, setSent]             = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [form, setForm]             = useState({ name:"", email:"", phone:"", message:"" });

  const change = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error();
      setSent(true);
      setTimeout(() => setSent(false), 3200);
    } catch {
      // silent — button stays
    } finally {
      setSubmitting(false);
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
        <div className="reveal-left">
          <p className="contact-lead">
            If your team is hiring for <em>IT Risk, IAM,</em> or operational resilience — or if you simply want a second pair of eyes on an incident model — I&apos;m happy to talk.
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

        <form className="form reveal-right" onSubmit={submit}>
          <div className="form-row">
            <div className="field">
              <label>— Name</label>
              <input type="text" name="name" placeholder="Your name" required value={form.name} onChange={change} />
            </div>
            <div className="field">
              <label>— Email</label>
              <input type="email" name="email" placeholder="you@company.com" required value={form.email} onChange={change} />
            </div>
          </div>
          <div className="field">
            <label>— Phone (optional)</label>
            <input type="tel" name="phone" placeholder="+420 ..." value={form.phone} onChange={change} />
          </div>
          <div className="field">
            <label>— Message</label>
            <textarea rows={5} name="message" placeholder="What's on fire?" required value={form.message} onChange={change} />
          </div>
          <button type="submit" className="cta filled" disabled={submitting}>
            {sent ? "✓ Sent — talk soon" : submitting ? "Sending…" : "Send message →"}
          </button>
        </form>
      </div>
    </section>
  );
}
