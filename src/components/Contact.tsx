"use client";
import { useRef, useState, type ChangeEvent, type FormEvent } from "react";
import { useLang } from "./Lang";
import { L, NewTab } from "./L";
import { EMAIL, LINKEDIN } from "./site";
import s from "./Contact.module.css";

/** Where the form posts: the site's own API route, which delivers the message via Resend. */
const FORM_ENDPOINT = "/api/contact";

type Form = { name: string; email: string; company: string; subject: string; message: string };
type Field = "name" | "email" | "message";

const EMPTY: Form = { name: "", email: "", company: "", subject: "job", message: "" };

const SUBJECTS = [
  { v: "job", cs: "Pracovní příležitost", en: "Job opportunity" },
  { v: "project", cs: "Spolupráce na projektu", en: "Project collaboration" },
  { v: "consult", cs: "Konzultace", en: "Consultation" },
  { v: "other", cs: "Jiné", en: "Other" },
];

export function Contact() {
  const { lang } = useLang();
  const [form, setForm] = useState<Form>(EMPTY);
  const [bad, setBad] = useState<Partial<Record<Field, boolean>>>({});
  const [busy, setBusy] = useState(false);
  const [sendError, setSendError] = useState(false);
  const [sentTo, setSentTo] = useState<string | null>(null);
  const [confirmed, setConfirmed] = useState(false);
  const [copied, setCopied] = useState(false);
  const mailRef = useRef<HTMLAnchorElement>(null);

  const set = (k: keyof Form) => (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((f) => ({ ...f, [k]: e.target.value }));
    if (k === "name" || k === "email" || k === "message") setBad((b) => ({ ...b, [k]: false }));
  };

  const copy = () => {
    const done = () => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    };
    const select = () => {
      if (!mailRef.current) return;
      const r = document.createRange();
      r.selectNodeContents(mailRef.current);
      const sel = getSelection();
      sel?.removeAllRanges();
      sel?.addRange(r);
    };
    try {
      navigator.clipboard.writeText(EMAIL).then(done, select);
    } catch {
      select();
    }
  };

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const f = { ...form, name: form.name.trim(), email: form.email.trim(), company: form.company.trim(), message: form.message.trim() };
    const errs = { name: !f.name, email: !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.email), message: !f.message };
    const first = (["name", "email", "message"] as const).find((k) => errs[k]);
    setBad(errs);
    if (first) {
      document.getElementById(`f-${first}`)?.focus();
      return;
    }
    setSendError(false);
    setBusy(true);
    try {
      const r = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ ...f, lang }),
      });
      if (!r.ok) throw new Error(String(r.status));
      const data = await r.json().catch(() => ({}));
      setConfirmed(data.confirmation === true);
      setSentTo(f.email);
    } catch {
      setSendError(true);
    } finally {
      setBusy(false);
    }
  };

  const again = () => {
    setForm(EMPTY);
    setSentTo(null);
  };

  const copyLabel = copied ? (lang === "en" ? "Copied" : "Zkopírováno") : lang === "en" ? "Copy email" : "Kopírovat e-mail";

  return (
    <section id="kontakt" className="sec inv" aria-labelledby="h-kontakt">
      <div className="wrap">
        <h2 id="h-kontakt" className={`h2 ${s.title}`}><L cs="Máte projekt, který potřebuje rozhýbat?" en="Got a project that needs moving?" /></h2>
        <div className={s.cols}>
          <div className={s.left}>
            <p className={s.lead}>
              <L
                cs="Hledám příležitosti, kde můžu spojit technické porozumění, komunikaci a odpovědnost za výsledek — v projektovém nebo provozním řízení, klientské spolupráci i při rozvoji digitálních služeb. Pokud řešíte něco podobného, rád si poslechnu, co potřebujete."
                en="I’m looking for roles where I can combine technical understanding, communication and ownership of results, whether in project or operations management, client work or developing digital services. If you’re working on something similar, I’d be glad to hear what you need."
              />
            </p>
            <div className={s.contact}>
              <div className={s.crow}>
                <span className={s.ck}>E-mail</span>
                <a ref={mailRef} className={`${s.cv} ${s.mail}`} href={`mailto:${EMAIL}`}>{EMAIL}</a>
                <button type="button" className={`${s.copy}${copied ? ` ${s.ok}` : ""}`} onClick={copy} aria-label={copyLabel} title={copyLabel}>
                  {copied ? (
                    <svg aria-hidden="true" width="17" height="17" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2"><path d="M2.5 8.5l3.5 3.5 7.5-8" /></svg>
                  ) : (
                    <svg aria-hidden="true" width="17" height="17" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.6"><rect x="5" y="5" width="9" height="9" /><path d="M11 5V2H2v9h3" /></svg>
                  )}
                </button>
              </div>
              <a className={s.crow} href={LINKEDIN} target="_blank" rel="noopener">
                <span className={s.ck}>LinkedIn</span>
                <span className={s.cv}><L cs="Můj profil na LinkedInu" en="My LinkedIn profile" /><NewTab /></span>
                <svg className={s.arr} aria-hidden="true" width="14" height="14" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="square"><path d="M5 13L13 5M6 5h7v7" /></svg>
              </a>
            </div>
          </div>

          <div className={s.right}>
            <form aria-labelledby="form-title" noValidate onSubmit={onSubmit} hidden={sentTo !== null}>
              <p id="form-title" className={s.formintro}>
                <L
                  cs="Nebo mi napište tady. Zpráva mi přijde do e-mailu a odpovím na adresu, kterou uvedete."
                  en="Or write to me here. The message goes straight to my inbox and I’ll reply to the address you enter."
                />
              </p>
              <div className={s.grid}>
                <div className={s.f}>
                  <label htmlFor="f-name"><L cs="Jméno" en="Name" /> *</label>
                  <input id="f-name" name="name" autoComplete="name" aria-describedby="e-name" aria-invalid={bad.name || undefined} value={form.name} onChange={set("name")} />
                  <span id="e-name" className={s.msg} role="alert" hidden={!bad.name}><L cs="Vyplňte prosím jméno." en="Please enter your name." /></span>
                </div>
                <div className={s.f}>
                  <label htmlFor="f-email">E-mail *</label>
                  <input id="f-email" name="email" type="email" autoComplete="email" aria-describedby="e-email" aria-invalid={bad.email || undefined} value={form.email} onChange={set("email")} />
                  <span id="e-email" className={s.msg} role="alert" hidden={!bad.email}><L cs="Zadejte platný e-mail." en="Please enter a valid email." /></span>
                </div>
                <div className={s.f}>
                  <label htmlFor="f-company"><L cs="Firma" en="Company" /> <span className={s.opt}><L cs="(nepovinné)" en="(optional)" /></span></label>
                  <input id="f-company" name="company" autoComplete="organization" value={form.company} onChange={set("company")} />
                </div>
                <div className={s.f}>
                  <label htmlFor="f-subject"><L cs="Téma" en="Subject" /></label>
                  <select id="f-subject" name="subject" value={form.subject} onChange={set("subject")}>
                    {SUBJECTS.map((o) => <option key={o.v} value={o.v}>{o[lang]}</option>)}
                  </select>
                </div>
                <div className={`${s.f} ${s.full}`}>
                  <div className={s.lrow}>
                    <label htmlFor="f-message"><L cs="Zpráva" en="Message" /> *</label>
                    <span className={s.cnt} aria-live="polite">{form.message.length} / 1000</span>
                  </div>
                  <textarea id="f-message" name="message" maxLength={1000} aria-describedby="e-message" aria-invalid={bad.message || undefined} value={form.message} onChange={set("message")} />
                  <span id="e-message" className={s.msg} role="alert" hidden={!bad.message}><L cs="Napište prosím pár slov o tom, co potřebujete." en="Please add a few words about what you need." /></span>
                </div>
                <p className={`${s.fmsg} ${s.full}`} role="alert" hidden={!sendError}>
                  <L
                    cs={`Zprávu se nepodařilo odeslat. Zkuste to prosím znovu, nebo napište přímo na ${EMAIL}.`}
                    en={`The message couldn’t be sent. Please try again or email ${EMAIL} directly.`}
                  />
                </p>
                <div className={s.actions}>
                  <button type="submit" className={s.send} disabled={busy}>
                    {busy ? <L cs="Odesílám…" en="Sending…" /> : <L cs="Odeslat zprávu" en="Send message" />}
                  </button>
                </div>
              </div>
            </form>
            <div className={s.done} role="status" hidden={sentTo === null}>
              <p><strong><L cs="Díky, zpráva odešla." en="Thanks, your message has been sent." /></strong> <L cs={<>Ozvu se vám na {sentTo}.</>} en={<>I’ll get back to you at {sentTo}.</>} /></p>
              {confirmed && (
                <p><L cs="Potvrzení s kopií zprávy vám právě přišlo do e-mailu." en="A confirmation with a copy of your message is on its way to your inbox." /></p>
              )}
              <button type="button" className={s.again} onClick={again}><L cs="Napsat další zprávu" en="Send another message" /></button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
