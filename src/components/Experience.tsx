"use client";
import { useState } from "react";
import { L, type Bi } from "./L";
import s from "./Experience.module.css";

type Sub = {
  head?: { title: Bi; role?: Bi; dates: Bi };
  intro: Bi;
  bullets: Bi[];
};
type Job = { key: string; year: string; dates: Bi; current?: boolean; company: Bi; role: Bi; summary: Bi; subs: Sub[] };

const same = (t: string): Bi => ({ cs: t, en: t });

export const JOBS: Job[] = [
  {
    key: "trask",
    year: "2025",
    dates: { cs: <>01/2025 – <em>teď</em></>, en: <>01/2025 – <em>now</em></> },
    current: true,
    company: same("Trask"),
    role: { cs: "System Engineer · projekty na řešeních IBM", en: "System Engineer · projects built on IBM solutions" },
    summary: {
      cs: "Nejdřív IDM v ČSOB, od roku 2026 přeřazení na DMS v Monetě. Oba projekty stojí na řešeních IBM.",
      en: "First IDM at ČSOB, then reassigned to DMS at Moneta in 2026. Both projects are built on IBM solutions.",
    },
    subs: [
      {
        head: { title: same("DMS / Moneta"), role: { cs: "změnové a incidentní řízení", en: "change and incident management" }, dates: { cs: "2026 – teď", en: "2026 – now" } },
        intro: {
          cs: "V bankovním prostředí se věnuji změnám, incidentům a provozním požadavkům kolem DMS služeb. Pomáhám udržet přehled o řešeném požadavku, navazujících krocích a komunikaci mezi zapojenými stranami, aby bylo zřejmé, co se děje a co je potřeba udělat dál.",
          en: "I work with changes, incidents and operational requests around DMS services in a banking environment. I help keep track of the issue, next actions and communication between the people involved, so everyone can see what is happening and what needs to happen next.",
        },
        bullets: [
          { cs: "Práce s provozními požadavky a řešením incidentů v prostředí DMS.", en: "Handling operational requests and incident resolution in the DMS environment." },
          { cs: "Koordinace změn a návazných kroků s dotčenými týmy.", en: "Coordinating changes and follow-up actions with affected teams." },
          { cs: "Srozumitelná komunikace průběhu a stavu řešení.", en: "Communicating progress and status clearly." },
          { cs: "Základní DMS zaškolení, práce s tickety a řešení provozních problémů.", en: "DMS onboarding, ticket handling and solving operational issues." },
        ],
      },
      {
        head: { title: same("IDM / ČSOB"), role: same("System Engineer, Identity and Access Management"), dates: { cs: "01/2025 – 2026", en: "Jan 2025 – 2026" } },
        intro: {
          cs: "Podílel jsem se na podpoře, rozvoji a zavádění řešení správy identit a přístupů pro enterprise klienty v regulovaných odvětvích. Vedle technické práce jsem komunikoval se zákazníky a vývojáři, pomáhal upřesňovat požadavky a převáděl je do funkčních a technických specifikací.",
          en: "I supported and developed identity and access management solutions for enterprise clients in regulated industries. Alongside hands-on engineering, I worked with customers and developers to clarify requirements and turn them into functional and technical specifications.",
        },
        bullets: [
          { cs: "Instalace, konfigurace a upgrady IBM IAM prostředí: ITIM, ISVG, DB2, LDAP a WebSphere (WAS).", en: "Installing, configuring and upgrading IBM IAM environments: ITIM, ISVG, DB2, LDAP and WebSphere (WAS)." },
          { cs: "Nastavování rolí, přístupových oprávnění, notifikací a integračních vazeb.", en: "Configuring roles, permissions, notifications and integrations." },
          { cs: "Technická analýza chyb, simulace scénářů, testování přístupů a podpora incidentů.", en: "Analysing issues, simulating scenarios, testing access and supporting incidents." },
          { cs: "Tvorba LDAP výstupů a reportů, spolupráce na automatizaci a skriptech.", en: "Building LDAP exports and reports; contributing to automation and scripts." },
          { cs: "Spolupráce na funkčních a technických specifikacích a komunikace se zákazníkem i vývojovým týmem.", en: "Co-writing functional and technical specifications and working with both the customer and the development team." },
        ],
      },
    ],
  },
  {
    key: "ox",
    year: "2024",
    dates: { cs: "02/2024 – 09/2025", en: "Feb 2024 – Sep 2025" },
    company: same("OX Point"),
    role: same("Senior Application Support Specialist"),
    summary: { cs: "Aplikační podpora a stabilita produkční platformy s více než 300 zařízeními.", en: "Application support and stability for a production platform of more than 300 devices." },
    subs: [
      {
        intro: {
          cs: "Zajišťoval jsem aplikační podporu a stabilitu produkční platformy více než 300 zařízení. Při závažných incidentech jsem propojoval provoz, vývoj, DevOps a techniky, hlídal průběh řešení a připravoval informace pro provozní vedení i zákazníky.",
          en: "I supported the production stability of a platform operating more than 300 devices. During major incidents, I connected operations, development, DevOps and field technicians, tracked resolution and prepared clear updates for operational leadership and customers.",
        },
        bullets: [
          { cs: "L2/L3 podpora, pohotovostní režim, analýza a obnova služby při P1 / Major incidentech.", en: "L2/L3 support, on-call response and service recovery during P1 / major incidents." },
          { cs: "Koordinace specialistů z vývoje, DevOps a technického provozu během výpadků.", en: "Coordinating specialists from development, DevOps and field operations during outages." },
          { cs: "Návrh JIRA workflow od začátku: závažnosti, SLA parametry, automatizace, notifikace a role.", en: "Designing a JIRA workflow from scratch: severity levels, SLA parameters, automation, notifications and roles." },
          { cs: "Návrh rozdělení odpovědností L1–L3, eskalačních cest a provozních postupů.", en: "Defining L1–L3 responsibilities, escalation paths and operating procedures." },
          { cs: "Monitoring, analýza logů a SQL dat, rozpoznávání opakujících se provozních problémů a reporting.", en: "Monitoring, log and SQL analysis, spotting recurring operational issues and reporting." },
          { cs: "Komunikace se zákazníky včetně řešení praktických požadavků kolem provozu samoobslužných zařízení.", en: "Customer communication, including practical requests around running self-service devices." },
        ],
      },
    ],
  },
  {
    key: "nakit",
    year: "2022",
    dates: { cs: "11/2022 – 03/2024", en: "Nov 2022 – Mar 2024" },
    company: same("NAKIT"),
    role: { cs: "aplikační provoz → Senior IT Platform Specialist", en: "application operations → Senior IT Platform Specialist" },
    summary: {
      cs: "Provoz veřejných digitálních služeb včetně systému Identita občana. Dvě role, druhá s odpovědností za závažné incidenty.",
      en: "Operating public digital services, including the Identita občana system. Two roles, the second covering major incidents.",
    },
    subs: [
      {
        head: { title: same("Senior IT Platform Specialist"), dates: { cs: "05/2023 – 03/2024", en: "May 2023 – Mar 2024" } },
        intro: {
          cs: "Podílel jsem se na provozu a dostupnosti systému Identita občana, který lidem umožňuje digitální autentizaci vůči veřejné správě. Při závažných výpadcích jsem pomáhal koordinovat technické týmy a obnovu služby s vysokým dopadem na uživatele.",
          en: "I supported the availability of Identita občana, a digital identity service used to authenticate citizens with public administration. During major outages, I helped coordinate technical teams and the recovery of a high-impact service.",
        },
        bullets: [
          { cs: "Koordinace P1 / Major incidentů, krizových hovorů a obnovy služby.", en: "Coordinating P1 / major incidents, crisis calls and service recovery." },
          { cs: "Propojování technických specialistů napříč organizacemi a sledování SLA.", en: "Connecting technical specialists across organisations and tracking SLAs." },
          { cs: "Monitoring dostupnosti, analýza incidentů, záznamů a opakovaných provozních rizik.", en: "Monitoring availability; analysing incidents, records and recurring operational risks." },
          { cs: "Příprava a komunikace plánovaných odstávek a dopadů pro zainteresované strany.", en: "Preparing and communicating planned maintenance and its impact to stakeholders." },
          { cs: "Spolupráce s databázovými a infrastrukturními týmy při analýze logů a nesrovnalostí.", en: "Working with database and infrastructure teams on log analysis and inconsistencies." },
        ],
      },
      {
        head: { title: { cs: "Specialista aplikačního provozu", en: "Application Operations Specialist" }, dates: { cs: "11/2022 – 05/2023", en: "Nov 2022 – May 2023" } },
        intro: {
          cs: "Zajišťoval jsem aplikační provoz a podporu v prostředí veřejných digitálních služeb. Zaměřoval jsem se na monitoring, diagnostiku, podporu uživatelů a předávání provozních problémů správným technickým týmům.",
          en: "I provided application operations and support for public digital services, focusing on monitoring, diagnostics, user support and routing operational issues to the right technical teams.",
        },
        bullets: [
          { cs: "L2 aplikační podpora, monitoring a diagnostika chyb.", en: "L2 application support, monitoring and error diagnostics." },
          { cs: "Řešení incidentů, požadavků a plánovaných servisních oken.", en: "Handling incidents, requests and planned maintenance windows." },
          { cs: "Evidence, dokumentace, SLA reporting a komunikace s technickými týmy.", en: "Records, documentation, SLA reporting and communication with technical teams." },
          { cs: "Analýza požadavků mezi business a IT a podpora testovacích a vývojových prostředí.", en: "Analysing requirements between business and IT; supporting test and development environments." },
        ],
      },
    ],
  },
  {
    key: "mycom",
    year: "2021",
    dates: { cs: "12/2021 – 11/2022", en: "Dec 2021 – Nov 2022" },
    company: same("MyCom Solutions"),
    role: same("IT Infrastructure Technician"),
    summary: { cs: "Každodenní IT podpora firemních zákazníků a menší infrastrukturní projekty.", en: "Day-to-day IT support for business customers and smaller infrastructure projects." },
    subs: [
      {
        intro: {
          cs: "Pomáhal jsem firemním zákazníkům s každodenní IT podporou i menšími infrastrukturními projekty. Práce často začínala pochopením konkrétního problému na místě a končila funkčním řešením v klientském prostředí.",
          en: "I helped business customers with day-to-day IT support and small infrastructure projects, from understanding an issue on site to delivering a working solution in the customer’s environment.",
        },
        bullets: [
          { cs: "Řešení hardwarových a softwarových problémů u zákazníků a podpora koncových zařízení.", en: "On-site hardware and software troubleshooting and endpoint support." },
          { cs: "Návrh a konfigurace sítí, VLAN, Wi-Fi, switchů a firewallů Ubiquiti / Fortinet.", en: "Designing and configuring networks, VLANs, Wi-Fi, switches and Ubiquiti / Fortinet firewalls." },
          { cs: "Správa RDP přístupů, ticketů a souvisejících zařízení.", en: "Managing RDP access, tickets and related devices." },
          { cs: "Realizace strukturované kabeláže v rozsahu více než 5 km a příprava testovacího prostředí.", en: "Installing more than 5 km of structured cabling and preparing a test environment." },
        ],
      },
    ],
  },
  {
    key: "noc",
    year: "2021",
    dates: { cs: "02 – 12/2021", en: "Feb – Dec 2021" },
    company: { cs: "Národní očkovací centrum ÚVN–O2", en: "National Vaccination Centre, ÚVN–O2" },
    role: { cs: "IT technik / odborný konzultant činností v oblasti IT", en: "IT Technician / IT Consultant" },
    summary: { cs: "131 dnů krizového provozu centra, které obsloužilo více než 550 000 lidí.", en: "131 days of crisis operations at a centre that served more than 550,000 people." },
    subs: [
      {
        intro: {
          cs: "Podílel jsem se na každodenním IT provozu Národního očkovacího centra v O2 universu během 131 dnů krizového režimu. Zajišťovali jsme zařízení, infrastrukturu a podporu pracovišť v rychle se měnícím provozu, který obsloužil více než 550 000 lidí.",
          en: "I supported daily IT operations at the National Vaccination Centre at O2 universum during 131 days of crisis operations. The centre served more than 550,000 people, and our team looked after devices, infrastructure and workplaces in a fast-changing environment.",
        },
        bullets: [
          { cs: "Příprava a provoz desítek zařízení a pracovních stanic; řešení incidentů v reálném čase.", en: "Preparing and running dozens of devices and workstations; resolving incidents in real time." },
          { cs: "Správa databáze MS SQL a řešení datových nesrovnalostí při vysoké provozní zátěži.", en: "Managing the MS SQL database and fixing data inconsistencies under heavy load." },
          { cs: "Koordinace směn a odpovědností malého IT týmu a externích specialistů.", en: "Coordinating shifts and responsibilities for a small IT team and external specialists." },
          { cs: "Testování nových verzí aplikace před nasazením a spolupráce s externím vývojem.", en: "Testing new application releases before deployment and working with the external development team." },
          { cs: "Podpora provozu se stovkami pracovníků a vysokým denním počtem návštěvníků; spolupráce v režimu omezeného přístupu k citlivým údajům.", en: "Supporting an operation with hundreds of staff and a high daily number of visitors, with restricted access to sensitive data." },
        ],
      },
    ],
  },
];

export function Experience() {
  const [open, setOpen] = useState<Record<string, boolean>>({});
  const all = JOBS.every((j) => open[j.key]);
  const toggle = (k: string) => setOpen((o) => ({ ...o, [k]: !o[k] }));
  const toggleAll = () => setOpen(Object.fromEntries(JOBS.map((j) => [j.key, !all])));

  return (
    <section id="zkusenosti" className={`sec ${s.exp}`} aria-labelledby="h-zk">
      <div className="wrap">
        <div className={s.top}>
          <h2 id="h-zk" className="h2"><L cs="Technické prostředí mě naučilo vidět dopad rozhodnutí v praxi." en="Technical environments taught me to see what decisions actually do." /></h2>
          <button type="button" className={s.toggleAll} onClick={toggleAll}>
            {all ? <L cs="Sbalit vše" en="Collapse all" /> : <L cs="Rozbalit vše" en="Expand all" />}
          </button>
        </div>
        <ol className={s.log}>
          {JOBS.map((j, idx) => {
            const isOpen = !!open[j.key];
            return (
              <li key={j.key}>
                <div className={s.lrow}>
                  <span className={`${s.yr}${idx === 0 ? ` ${s.yrNow}` : ""}`}>{j.year}</span>
                  <h3 className={s.head}>
                    <button type="button" className={s.xbtn} aria-expanded={isOpen} aria-controls={`exp-${j.key}`} onClick={() => toggle(j.key)}>
                      <span className={s.co}><L {...j.company} /></span>
                      <span className={s.st}>
                        <span className={s.plus} aria-hidden="true">+</span>
                        <span className={s.txt}>{isOpen ? <L cs="Méně" en="Less" /> : <L cs="Detail" en="Details" />}</span>
                      </span>
                    </button>
                  </h3>
                  <p className={s.sum}><L {...j.summary} /></p>
                  <p className={s.meta}>
                    <span className={s.role}><L {...j.role} /></span>
                    <span className={s.dates}><L {...j.dates} /></span>
                    {j.current && <span className={s.live}><L cs="aktuálně" en="current" /></span>}
                  </p>
                </div>
                <div className={s.xdet} id={`exp-${j.key}`} hidden={!isOpen}>
                  <div>
                    {j.subs.map((sub, i) => (
                      <div key={i} className={s.sub}>
                        {sub.head && (
                          <div className={s.subH}>
                            <h4><L {...sub.head.title} /></h4>
                            {sub.head.role && <span className={s.small}><L {...sub.head.role} /></span>}
                            <span className={s.small}><L {...sub.head.dates} /></span>
                          </div>
                        )}
                        <p><L {...sub.intro} /></p>
                        <ul className={s.list}>
                          {sub.bullets.map((b, k) => <li key={k}><span><L {...b} /></span></li>)}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
