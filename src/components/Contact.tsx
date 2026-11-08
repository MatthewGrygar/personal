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

  return (
    <section id="kontakt" className={`sec ${s.contact}`} aria-labelledby="h-kontakt">
      <div className="wrap grid">
        <p className="no" aria-hidden="true">04</p>
        <h2 id="h-kontakt" className="h2"><L cs="Máte projekt, který potřebuje rozhýbat?" en="Got a project that needs moving?" /></h2>
        <div className={s.left}>
          <p>
            <L
              cs="Hledám příležitosti, kde můžu spojit technické porozumění, komunikaci a odpovědnost za výsledek — v projektovém nebo provozním řízení, klientské spolupráci i při rozvoji digitálních služeb. Pokud řešíte něco podobného, rád si poslechnu, co potřebujete."
              en="I’m looking for roles where I can combine technical understanding, communication and ownership of results, whether in project or operations management, client work or developing digital services. If you’re working on something similar, I’d be glad to hear what you need."
            />
          </p>
          <span className="meta"><L cs="Nejrychleji mě zastihnete e-mailem" en="Email is the quickest way to reach me" /></span>
          <div className={s.mailrow}>
            <a ref={mailRef} className={`${s.mail} u`} href={`mailto:${EMAIL}`}>{EMAIL}</a>
            <button type="button" className={s.copy} onClick={copy}>
              {copied ? (lang === "en" ? "Copied" : "Zkopírováno") : lang === "en" ? "Copy" : "Kopírovat"}
            </button>
          </div>
          <div className="ctas">
            <a className="btn" href={LINKEDIN} target="_blank" rel="noopener">
              <L cs="Můj profil na LinkedInu" en="My LinkedIn profile" />
              <span className="ar" aria-hidden="true">↗</span>
              <NewTab />
            </a>
          </div>
        </div>
        <div className={s.form}>
          <form aria-labelledby="form-title" noValidate onSubmit={onSubmit} hidden={sentTo !== null}>
            <p id="form-title" className={s.formTitle}>
              <L
                cs="Nebo mi napište tady. Zpráva mi přijde do e-mailu a odpovím na adresu, kterou uvedete."
                en="Or write to me here. The message goes straight to my inbox and I’ll reply to the address you enter."
              />
            </p>
            <div className={s.frow}>
              <div className={s.field}>
                <label htmlFor="f-name"><L cs="Jméno" en="Name" /> *</label>
                <input id="f-name" name="name" autoComplete="name" aria-describedby="e-name" aria-invalid={bad.name || undefined} value={form.name} onChange={set("name")} />
                <span id="e-name" className={s.err} role="alert" hidden={!bad.name}><L cs="Vyplňte prosím jméno." en="Please enter your name." /></span>
              </div>
              <div className={s.field}>
                <label htmlFor="f-email">E-mail *</label>
                <input id="f-email" name="email" type="email" autoComplete="email" aria-describedby="e-email" aria-invalid={bad.email || undefined} value={form.email} onChange={set("email")} />
                <span id="e-email" className={s.err} role="alert" hidden={!bad.email}><L cs="Zadejte platnou e-mailovou adresu." en="Please enter a valid email address." /></span>
              </div>
            </div>
            <div className={s.frow}>
              <div className={s.field}>
                <label htmlFor="f-company"><L cs="Firma (nepovinné)" en="Company (optional)" /></label>
                <input id="f-company" name="company" autoComplete="organization" value={form.company} onChange={set("company")} />
              </div>
              <div className={s.field}>
                <label htmlFor="f-subject"><L cs="Téma" en="Subject" /></label>
                <select id="f-subject" name="subject" value={form.subject} onChange={set("subject")}>
                  {SUBJECTS.map((o) => <option key={o.v} value={o.v}>{o[lang]}</option>)}
                </select>
              </div>
            </div>
            <div className={s.field}>
              <div className={s.fhead}>
                <label htmlFor="f-message"><L cs="Zpráva" en="Message" /> *</label>
                <span aria-live="polite">{form.message.length} / 1000</span>
              </div>
              <textarea id="f-message" name="message" rows={5} maxLength={1000} aria-describedby="e-message" aria-invalid={bad.message || undefined} value={form.message} onChange={set("message")} />
              <span id="e-message" className={s.err} role="alert" hidden={!bad.message}><L cs="Napište prosím pár slov o tom, co řešíte." en="Please add a few words about what you need." /></span>
            </div>
            <p className={s.fmsg} role="alert" hidden={!sendError}>
              <L
                cs={`Zprávu se nepodařilo odeslat. Zkuste to prosím znovu, nebo napište přímo na ${EMAIL}.`}
                en={`The message couldn’t be sent. Please try again or email ${EMAIL} directly.`}
              />
            </p>
            <button type="submit" className="btn" disabled={busy}>
              {busy ? <L cs="Odesílám…" en="Sending…" /> : <L cs="Odeslat zprávu" en="Send message" />}
              <span className="ar" aria-hidden="true">→</span>
            </button>
          </form>
          <div className={s.sent} role="status" hidden={sentTo === null}>
            <p><L cs="Díky, zpráva odešla." en="Thanks, your message has been sent." /></p>
            <p><L cs={<>Odpovím vám na {sentTo}.</>} en={<>I’ll reply to {sentTo}.</>} /></p>
            {confirmed && (
              <p><L cs="Potvrzení s kopií zprávy vám právě přišlo do e-mailu." en="A confirmation with a copy of your message is on its way to your inbox." /></p>
            )}
            <button type="button" className={s.again} onClick={again}><L cs="Napsat další zprávu" en="Send another message" /></button>
          </div>
        </div>
      </div>
    </section>
  );
}
