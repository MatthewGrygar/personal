"use client";
import { useState, type ChangeEvent, type FormEvent } from "react";
import { useLang } from "./Lang";
import { L, NewTab } from "./L";
import { EMAIL, LINKEDIN } from "./site";

type Form = { name: string; email: string; company: string; subject: string; message: string };
type Field = keyof Form;

const EMPTY: Form = { name: "", email: "", company: "", subject: "job", message: "" };
const MAX = 1000;

const SUBJECTS = {
  cs: [["job", "Pracovní příležitost"], ["project", "Spolupráce na projektu"], ["consult", "Konzultace"], ["other", "Jiné"]],
  en: [["job", "Job opportunity"], ["project", "Project collaboration"], ["consult", "Consultation"], ["other", "Other"]],
} as const;

export function Contact() {
  const { lang } = useLang();
  const [form, setForm] = useState<Form>(EMPTY);
  const [errors, setErrors] = useState<Partial<Record<Field, boolean>>>({});
  const [sending, setSending] = useState(false);
  const [sendError, setSendError] = useState(false);
  const [sentTo, setSentTo] = useState<string | null>(null);

  const set = (k: Field) => (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const v = k === "message" ? e.target.value.slice(0, MAX) : e.target.value;
    setForm((f) => ({ ...f, [k]: v }));
    setErrors((er) => ({ ...er, [k]: false }));
  };

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const errs = {
      name: !form.name.trim(),
      email: !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim()),
      message: !form.message.trim(),
    };
    const first = (["name", "email", "message"] as const).find((k) => errs[k]);
    if (first) {
      setErrors(errs);
      document.getElementById(`f-${first}`)?.focus();
      return;
    }
    setSending(true);
    setSendError(false);
    try {
      const subjectLabel = SUBJECTS.cs.find(([v]) => v === form.subject)?.[1] ?? form.subject;
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ ...form, subject: subjectLabel, lang }),
      });
      if (!res.ok) throw new Error(String(res.status));
      setSentTo(form.email.trim());
    } catch {
      setSendError(true);
    } finally {
      setSending(false);
    }
  };

  const reset = () => {
    setSentTo(null);
    setForm(EMPTY);
  };

  return (
    <section id="kontakt" className="sec contact" aria-labelledby="h-kontakt">
      <div className="contact-in">
        <p className="kicker"><L cs="Kontakt" en="Contact" /></p>
        <h2 id="h-kontakt" className="h2"><L cs="Máte projekt, který potřebuje rozhýbat?" en="Got a project that needs moving?" /></h2>
        <div className="contact-cols">
          <div className="contact-l">
            <p>
              <L
                cs="Hledám příležitosti, kde můžu spojit technické porozumění, komunikaci a odpovědnost za výsledek — v projektovém nebo provozním řízení, klientské spolupráci i při rozvoji digitálních služeb. Pokud řešíte něco podobného, rád si poslechnu, co potřebujete."
                en="I’m looking for roles where I can combine technical understanding, communication and ownership of results, whether in project or operations management, client work or developing digital services. If you’re working on something similar, I’d be glad to hear what you need."
              />
            </p>
            <p className="contact-hint"><L cs="Nejrychleji mě zastihnete e-mailem" en="Email is the quickest way to reach me" /></p>
            <a className="contact-mail" href={`mailto:${EMAIL}`}>{EMAIL}</a>
            <div className="contact-links">
              <a href={`mailto:${EMAIL}?subject=Rozhovor%20%2F%20Interview`}><L cs="Domluvit rozhovor" en="Schedule a call" /></a>
              <a href={LINKEDIN} target="_blank" rel="noopener">LinkedIn ↗<NewTab /></a>
            </div>
          </div>

          <div className="contact-r">
            {sentTo === null ? (
              <form className="form" noValidate onSubmit={onSubmit} aria-labelledby="form-title">
                <p id="form-title" className="form-intro">
                  <L
                    cs="Nebo mi napište tady. Zpráva mi přijde do e-mailu a odpovím na adresu, kterou uvedete."
                    en="Or write to me here. The message goes straight to my inbox and I’ll reply to the address you enter."
                  />
                </p>
                <div className="form-row">
                  <div className="field">
                    <label htmlFor="f-name"><L cs="Jméno" en="Name" /> *</label>
                    <input id="f-name" name="name" autoComplete="name" value={form.name} onChange={set("name")} aria-invalid={!!errors.name} aria-describedby={errors.name ? "e-name" : undefined} />
                    {errors.name && <span id="e-name" role="alert" className="field-err"><L cs="Vyplňte prosím jméno." en="Please enter your name." /></span>}
                  </div>
                  <div className="field">
                    <label htmlFor="f-email">E-mail *</label>
                    <input id="f-email" name="email" type="email" autoComplete="email" value={form.email} onChange={set("email")} aria-invalid={!!errors.email} aria-describedby={errors.email ? "e-email" : undefined} />
                    {errors.email && <span id="e-email" role="alert" className="field-err"><L cs="Zadejte platnou e-mailovou adresu." en="Please enter a valid email address." /></span>}
                  </div>
                </div>
                <div className="form-row">
                  <div className="field">
                    <label htmlFor="f-company"><L cs="Firma (nepovinné)" en="Company (optional)" /></label>
                    <input id="f-company" name="company" autoComplete="organization" value={form.company} onChange={set("company")} />
                  </div>
                  <div className="field">
                    <label htmlFor="f-subject"><L cs="Téma" en="Subject" /></label>
                    <select id="f-subject" name="subject" value={form.subject} onChange={set("subject")}>
                      {SUBJECTS[lang].map(([v, label]) => <option key={v} value={v}>{label}</option>)}
                    </select>
                  </div>
                </div>
                <div className="field">
                  <div className="field-top">
                    <label htmlFor="f-message"><L cs="Zpráva" en="Message" /> *</label>
                    <span className="field-count" aria-live="polite">{form.message.length} / {MAX}</span>
                  </div>
                  <textarea id="f-message" name="message" rows={5} maxLength={MAX} value={form.message} onChange={set("message")} aria-invalid={!!errors.message} aria-describedby={errors.message ? "e-message" : undefined} />
                  {errors.message && <span id="e-message" role="alert" className="field-err"><L cs="Napište prosím pár slov o tom, co řešíte." en="Please add a few words about what you need." /></span>}
                </div>
                {sendError && (
                  <p role="alert" className="form-err">
                    <L
                      cs={`Zprávu se nepodařilo odeslat. Zkuste to prosím znovu, nebo napište přímo na ${EMAIL}.`}
                      en={`The message couldn’t be sent. Please try again or email ${EMAIL} directly.`}
                    />
                  </p>
                )}
                <div className="form-actions">
                  <button type="submit" className="btn" disabled={sending}>
                    {sending ? <L cs="Odesílám…" en="Sending…" /> : <L cs="Odeslat zprávu" en="Send message" />}
                  </button>
                </div>
              </form>
            ) : (
              <div role="status" className="form-done">
                <p className="big"><L cs="Díky, zpráva odešla." en="Thanks, your message has been sent." /></p>
                <p className="small"><L cs={`Odpovím vám na ${sentTo}.`} en={`I’ll reply to ${sentTo}.`} /></p>
                <button type="button" className="linkbtn" onClick={reset}><L cs="Napsat další zprávu" en="Send another message" /></button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
