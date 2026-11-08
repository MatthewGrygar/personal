"use client";
import { useRef } from "react";
import { useLang } from "./Lang";
import { L, type Bi } from "./L";
import { useRevealBelowFold } from "./useRevealBelowFold";
import s from "./How.module.css";

const STEPS: Bi[] = [
  { cs: "Analyzovat", en: "Analyse" },
  { cs: "stabilizovat", en: "stabilise" },
  { cs: "komunikovat", en: "communicate" },
  { cs: "vylepšit.", en: "improve." },
];

const TRAITS: Bi[] = [
  { cs: "Kreativně hledám možnosti, ale nápady ověřuji v praxi.", en: "I look for options creatively, but I test ideas in practice." },
  { cs: "Dokážu zůstat klidný a srozumitelný i pod tlakem.", en: "I stay calm and clear under pressure." },
  { cs: "Přirozeně propojuji lidi s různým odborným jazykem.", en: "I naturally connect people who speak different professional languages." },
  { cs: "Umím převzít odpovědnost za další krok, i když ještě není jasné celé řešení.", en: "I can own the next step even before the whole solution is clear." },
];

export function How() {
  const { lang } = useLang();
  const root = useRef<HTMLDivElement>(null);
  useRevealBelowFold(root, `.${s.steps}`, s.pre, (el) =>
    Array.from(el.children).forEach((c, i) => ((c as HTMLElement).style.transitionDelay = `${i * 140}ms`)),
  );

  return (
    <section id="jak-pracuji" className={`sec ${s.how}`} aria-labelledby="h-jak">
      <div ref={root} className="wrap grid">
        <p className="no" aria-hidden="true">05</p>
        <h2 id="h-jak" className="h2"><L cs="Když je situace složitá, začnu tím, že ji zpřehledním." en="When things get complicated, I start by making them clear." /></h2>
        <p className={s.intro}>
          <L
            cs="Můj přirozený postup je jednoduchý: analyzovat, stabilizovat, komunikovat a vylepšit. Nejdřív zjistím, co se skutečně děje a koho se to týká. Pak pomůžu určit priority, domluvit lidi na dalším kroku a dotáhnout řešení. Nakonec hledám, co změnit, aby příště šlo všechno lépe."
            en="My natural approach is simple: analyse, stabilise, communicate, improve. First I find out what’s really going on and who it affects. Then I help set priorities, get people to agree on the next step and see the solution through. Finally I look for what to change so it goes better next time."
          />
        </p>
        <p className={s.steps} aria-label={lang === "en" ? "Analyse, stabilise, communicate, improve" : "Analyzovat, stabilizovat, komunikovat, vylepšit"}>
          {STEPS.map((st, i) => (
            <span key={i} aria-hidden="true">
              <L {...st} />
              {i < STEPS.length - 1 && <> <span className={s.ar}>→</span></>}
            </span>
          ))}
        </p>
        <ul className={s.traits}>
          {TRAITS.map((t, i) => <li key={i}><L {...t} /></li>)}
        </ul>
      </div>
    </section>
  );
}
