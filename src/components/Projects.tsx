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
      cs: "Vybudoval jsem turnajovou sérii pro českou komunitu Duel Commanderu — od konceptu a identity přes komunikaci a spolupráci s partnery až po produkci jednotlivých akcí. Série vyrostla na komunitu více než 130 unikátních hráčů.",
      en: "I built a tournament series for the Czech Duel Commander community, from the concept and identity through communication and partner relationships to producing each event. It grew into a community of more than 130 unique players.",
    },
    out: { cs: "Od nápadu k pravidelnému projektu, na který se lidé vracejí.", en: "From an idea to a regular event people keep coming back to." },
    link: { href: "https://grailseries.cz/", label: "grailseries.cz" },
  },
  {
    title: same("MtG DC ELO Ranking System"),
    kind: { cs: "Digitální produkt · data · komunita", en: "Digital product · data · community" },
    body: {
      cs: "Navrhl jsem a vytvořil webovou aplikaci pro českou Duel Commander komunitu. Propojil jsem návrh produktu, práci s daty, frontend a systém hodnocení ELO, aby hráči mohli sledovat svůj dlouhodobý vývoj.",
      en: "I designed and built a web app for the Czech Duel Commander community, bringing together product design, data work, the frontend and an ELO rating system so players can follow their progress over time.",
    },
    out: { cs: "430+ hráčů · produkt od konceptu po provoz.", en: "430+ players. A product taken from concept to production." },
    link: { href: "https://elo.grailseries.cz/cz/", label: "elo.grailseries.cz" },
  },
  {
    title: { cs: "Provoz a incidenty v kritických službách", en: "Operations and incidents in critical services" },
    kind: { cs: "Koordinace · stabilita · komunikace", en: "Coordination · stability · communication" },
    body: {
      cs: "V IT provozu jsem koordinoval řešení závažných incidentů, propojoval specialisty z různých týmů a pomáhal obnovit služby s vysokým dopadem na uživatele. Zkušenost zahrnuje státní digitální služby i produkční zařízení.",
      en: "In IT operations I coordinated the response to major incidents, brought together specialists from different teams and helped restore services with a high impact on users. That includes national digital services as well as devices in production.",
    },
    out: { cs: "Když je tlak největší, záleží na jasných rolích a srozumitelné komunikaci.", en: "When the pressure is highest, clear roles and plain communication matter most." },
  },
  {
    title: { cs: "Národní očkovací centrum", en: "National Vaccination Centre" },
    kind: { cs: "Provoz · týmová koordinace · služba ve velkém měřítku", en: "Operations · team coordination · service at scale" },
    body: {
      cs: "Podílel jsem se na každodenním IT provozu Národního očkovacího centra v O2 universu během 131 dnů krizového provozu. Zkušenost zahrnovala podporu infrastruktury, řešení incidentů, práci s databází, testování změn a koordinaci malého IT týmu.",
      en: "I was part of the day-to-day IT operations of the National Vaccination Centre at O2 universum during 131 days of crisis operation: infrastructure support, incident resolution, database work, testing changes and coordinating a small IT team.",
    },
    out: { cs: "IT podpora provozu služby, kterou využily stovky tisíc lidí.", en: "IT support for a service used by hundreds of thousands of people." },
  },
  {
    title: { cs: "JIRA a model provozní podpory", en: "JIRA and an operational support model" },
    kind: { cs: "Procesy · SLA · přehlednost", en: "Processes · SLA · clarity" },
    body: {
      cs: "Navrhl jsem strukturu podpůrného projektu v JIRA včetně závažností, SLA parametrů, workflow a eskalačních cest. Cílem bylo dát požadavkům i incidentům srozumitelný průběh od nahlášení po vyřešení.",
      en: "I designed the structure of a support project in JIRA, including severity levels, SLA parameters, workflow and escalation paths. The goal was to give every request and incident a clear path from report to resolution.",
    },
    out: { cs: "Jasnější odpovědnosti. Měřitelný průběh. Lepší přehled.", en: "Clearer ownership. Measurable progress. A better overview." },
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
          <h2 id="h-proj" className="h2"><L cs="Nejlépe mě vystihuje práce, která se opravdu stala." en="The work that actually happened says the most about me." /></h2>
          <p className={s.intro}>
            <L
              cs="Od produkčního provozu přes digitální nástroje až po komunitní akce. Každý projekt ukazuje jinou část toho, jak přemýšlím a pracuji."
              en="From production operations to digital tools and community events. Each project shows a different side of how I think and work."
            />
          </p>
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
