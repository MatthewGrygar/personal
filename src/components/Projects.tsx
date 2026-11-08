"use client";
import { useRef } from "react";
import { L, NewTab, type Bi } from "./L";
import { useRevealBelowFold } from "./useRevealBelowFold";
import s from "./Projects.module.css";

type Project = { title: Bi; kind: Bi; body: Bi; out: Bi; link?: { href: string; label: string } };

const same = (t: string): Bi => ({ cs: t, en: t });

const PROJECTS: Project[] = [
  {
    title: same("Grail Series"),
    kind: { cs: "Komunita · organizace · partnerství", en: "Community · organisation · partnerships" },
    body: {
      cs: "Ve volném čase jsem vybudoval turnajovou sérii pro českou komunitu Duel Commanderu — od konceptu a identity přes komunikaci a spolupráci s partnery až po produkci jednotlivých akcí. Série vyrostla na komunitu více než 130 unikátních hráčů.",
      en: "In my free time I built a tournament series for the Czech Duel Commander community, from the concept and identity through communication and partner relationships to producing each event. It grew into a community of more than 130 unique players.",
    },
    out: { cs: "Od nápadu k pravidelnému projektu, na který se lidé vracejí.", en: "From an idea to a regular event people keep coming back to." },
    link: { href: "https://grailseries.cz/", label: "grailseries.cz" },
  },
  {
    title: same("MtG DC ELO Ranking System"),
    kind: { cs: "Digitální produkt · data · komunita", en: "Digital product · data · community" },
    body: {
      cs: "Vedle práce jsem pro stejnou komunitu navrhl a vytvořil webovou aplikaci. Propojil jsem návrh produktu, práci s daty, frontend a systém hodnocení ELO, aby hráči mohli sledovat svůj dlouhodobý vývoj.",
      en: "Alongside my job, I designed and built a web app for the same community, bringing together product design, data work, the frontend and an ELO rating system so players can follow their progress over time.",
    },
    out: { cs: "430+ hráčů · produkt od konceptu po provoz.", en: "430+ players. A product taken from concept to production." },
    link: { href: "https://elo.grailseries.cz/cz/", label: "elo.grailseries.cz" },
  },
];

export function Projects() {
  const list = useRef<HTMLOListElement>(null);
  useRevealBelowFold(list, `.${s.row}`, s.pre);

  return (
    <section id="projekty" className="sec" aria-labelledby="h-proj" style={{ paddingTop: 0 }}>
      <div className="wrap">
        <div className={`grid ${s.top}`}>
          <p className="no" aria-hidden="true">03</p>
          <h2 id="h-proj" className="h2"><L cs="Projekty mimo práci" en="Projects outside work" /></h2>
        </div>
        <ol ref={list} className={s.list}>
          {PROJECTS.map((p, i) => (
            <li key={i} className={s.row}>
              <span className={s.n}>{i + 1}</span>
              <div className={s.head}>
                <h3>{p.title.cs === p.title.en ? p.title.cs : <L {...p.title} />}</h3>
                <p className={`${s.kind} label`}><L {...p.kind} /></p>
              </div>
              <div className={s.body}>
                <p><L {...p.body} /></p>
                <p className={s.out}><L {...p.out} /></p>
                {p.link && (
                  <a className={s.go} href={p.link.href} target="_blank" rel="noopener">
                    {p.link.label} ↗<NewTab />
                  </a>
                )}
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
