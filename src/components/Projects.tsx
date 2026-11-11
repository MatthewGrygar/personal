"use client";
import { useRef } from "react";
import { L, NewTab, type Bi } from "./L";
import { useRevealBelowFold } from "./useRevealBelowFold";
import s from "./Projects.module.css";

type Project = { title: Bi; tags: Bi; body: Bi; num: string; label: Bi; out: Bi; href?: string };

const same = (t: string): Bi => ({ cs: t, en: t });

const PROJECTS: Project[] = [
  {
    title: same("Grail Series"),
    tags: { cs: "Komunita · organizace · partnerství", en: "Community · organisation · partnerships" },
    body: {
      cs: "Vybudoval jsem turnajovou sérii pro českou komunitu Duel Commanderu – od konceptu a identity přes komunikaci s partnery až po produkci jednotlivých akcí.",
      en: "I built a tournament series for the Czech Duel Commander community, from the concept and identity through partner relationships to producing each event.",
    },
    num: "130+",
    label: { cs: "unikátních hráčů", en: "unique players" },
    out: { cs: "Od nápadu k pravidelnému projektu, na který se lidé vracejí.", en: "From an idea to a regular event people keep coming back to." },
    href: "https://grailseries.cz/",
  },
  {
    title: same("MtG DC ELO Ranking System"),
    tags: { cs: "Digitální produkt · data · komunita", en: "Digital product · data · community" },
    body: {
      cs: "Vedle práce jsem pro stejnou komunitu navrhl a vytvořil webovou aplikaci. Propojil jsem návrh produktu, práci s daty, frontend a systém hodnocení ELO, aby hráči mohli sledovat svůj dlouhodobý vývoj.",
      en: "Alongside my job, I designed and built a web app for the same community, bringing together product design, data work, the frontend and an ELO rating system so players can follow their progress over time.",
    },
    num: "430+",
    label: { cs: "hráčů v žebříčku", en: "players in the ranking" },
    out: { cs: "Produkt od konceptu po provoz.", en: "A product taken from concept to production." },
  },
];

const Out = () => (
  <svg aria-hidden="true" width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="square"><path d="M5 13L13 5M6 5h7v7" /></svg>
);

export function Projects() {
  const list = useRef<HTMLOListElement>(null);
  useRevealBelowFold(list, `.${s.card}`, s.pre);

  return (
    <section id="projekty" className="sec" aria-labelledby="h-proj">
      <div className="wrap">
        <h2 id="h-proj" className={`h2 ${s.title}`}><L cs="Projekty mimo práci" en="Projects outside work" /></h2>
        <ol ref={list} className={s.list}>
          {PROJECTS.map((p, i) => {
            const title = p.title.cs === p.title.en ? p.title.cs : <L {...p.title} />;
            return (
              <li key={i} className={s.card}>
                <h3>
                  {p.href ? (
                    <a href={p.href} target="_blank" rel="noopener">{title} <Out /><NewTab /></a>
                  ) : title}
                </h3>
                <p className={s.tags}><L {...p.tags} /></p>
                <p className={s.desc}><L {...p.body} /></p>
                <div className={s.stat}>
                  <span className={s.num}>{p.num}</span>
                  <span className={s.lbl}><L {...p.label} /></span>
                </div>
                <p className={s.out}><L {...p.out} /></p>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
