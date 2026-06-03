"use client";
import { useState } from "react";
import { useLang } from "@/context/LangContext";
import { i18n, t } from "@/data/site";

const SUBJECTS = {
  en: ["Hiring", "Risk review", "IAM project", "Other"],
  cs: ["Nábor", "Revize rizik", "IAM projekt", "Jiné"],
};

export function Contact() {
  const { lang } = useLang();
  const [sent,    setSent]    = useState(false);
  const [sending, setSending] = useState(false);
  const [subject, setSubject] = useState(0);
  const [msg,     setMsg]     = useState("");
  const [name,    setName]    = useState("");
  const [email,   setEmail]   = useState("");
  const [company, setCompany] = useState("");

  const subjects = SUBJECTS[lang as "en" | "cs"] ?? SUBJECTS.en;
  const co = i18n.contact;

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSending(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          phone: company,
          subject: SUBJECTS.en[subject],
          message: msg,
        }),
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
          <span>05 / {t(i18n.nav.contact, lang)}</span>
          <span>— {lang === "cs" ? "Pojďme si promluvit" : "Let's talk"}</span>
        </div>
        <h2 className="section-title reveal">
          {lang === "cs"
            ? <>Pojďme řídit rizika <em>dřív, než se stanou incidenty.</em></>
            : <>Let&apos;s manage risks <em>before they become incidents.</em></>}
        </h2>
      </div>

      <div className="contact-grid">
        {/* Left — info */}
        <div className="reveal-left">
          <p className="contact-lead">{t(co.body, lang)}</p>
          <p className="contact-body">
            {lang === "cs"
              ? "Nejlépe mě zastihnete e-mailem nebo přes LinkedIn. Zpravidla odpovídám do jednoho dne; pokud je to urgentní, napište to do předmětu a dám vám přednost."
              : "Best reached by email or LinkedIn. I usually answer within a day; if it's urgent, say so in the subject line and I'll prioritise."}
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
          </div>
        </div>

        {/* Right — form */}
        <form className="form-card reveal-right" onSubmit={onSubmit}>
          <div className="form-card-head">
            <span className="title">{lang === "cs" ? "— Přímá zpráva" : "— Direct message"}</span>
            <span className="status">
              <span className="dot" />
              {lang === "cs" ? "Odpověď do 24 h" : "Reply within 24h"}
            </span>
          </div>

          <div className="form">
            <div className="form-row">
              <div className="field">
                <label>{lang === "cs" ? "Jméno" : "Name"}<span className="req">*</span></label>
                <div className="field-wrap">
                  <input
                    type="text"
                    placeholder={lang === "cs" ? "Vaše jméno" : "Your name"}
                    required
                    value={name}
                    onChange={e => setName(e.target.value)}
                  />
                </div>
              </div>
              <div className="field">
                <label>Email<span className="req">*</span></label>
                <div className="field-wrap">
                  <input
                    type="email"
                    placeholder="you@company.com"
                    required
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                  />
                </div>
              </div>
            </div>

            <div className="field">
              <label>
                {lang === "cs" ? "Firma" : "Company"}
                {" "}<span style={{ color: "var(--muted)" }}>({lang === "cs" ? "volitelné" : "optional"})</span>
              </label>
              <div className="field-wrap">
                <input
                  type="text"
                  placeholder={lang === "cs" ? "Odkud píšete" : "Where you're writing from"}
                  value={company}
                  onChange={e => setCompany(e.target.value)}
                />
              </div>
            </div>

            <div className="field">
              <label>{lang === "cs" ? "Předmět" : "Subject"}</label>
              <div className="subject-chips" role="radiogroup">
                {subjects.map((s, i) => (
                  <button
                    type="button"
                    key={s}
                    role="radio"
                    aria-checked={subject === i}
                    className={`chip-btn${subject === i ? " on" : ""}`}
                    onClick={() => setSubject(i)}
                    data-hover
                  >{s}</button>
                ))}
              </div>
            </div>

            <div className="field">
              <label>{lang === "cs" ? "Zpráva" : "Message"}<span className="req">*</span></label>
              <div className="field-wrap">
                <textarea
                  rows={5}
                  placeholder={lang === "cs"
                    ? "Co hoří? Nebo co hoří ještě nechcete, aby hořelo."
                    : "What's on fire? Or what's not, but you'd like to keep that way."}
                  required
                  value={msg}
                  onChange={e => setMsg(e.target.value.slice(0, 1000))}
                />
              </div>
              <div className="char-count"><b>{msg.length}</b> / 1000</div>
            </div>

            <div className="form-actions">
              <div className="meta">
                {lang === "cs"
                  ? <>Šifrováno při přenosu · <b>Žádné sledování třetích stran</b></>
                  : <>Encrypted in transit · <b>No third-party tracking</b></>}
              </div>
              <button
                type="submit"
                className={`cta filled${sending ? " sending" : ""}${sent ? " sent" : ""}`}
                disabled={sending || sent}
                data-hover
              >
                {sent
                  ? (lang === "cs" ? "✓ Odesláno — brzy se ozvu" : "✓ Sent — talk soon")
                  : sending
                    ? (lang === "cs" ? "Odesílám…" : "Sending…")
                    : (lang === "cs" ? "Odeslat →" : "Send message →")}
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}
