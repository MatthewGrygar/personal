"use client";
import { useState, type MouseEvent } from "react";
import { L, type Bi } from "./L";
import s from "./Experience.module.css";

/** one bullet: a short bold lead, then what it meant */
type Point = { k: Bi; t: Bi };
type Sub = {
  head?: { title: Bi; dates: Bi };
  intro: Bi;
  points: Point[];
  tags: string[];
};
type Job = {
  key: string;
  year: string;
  dates: Bi;
  current?: boolean;
  company: Bi;
  role: Bi;
  summary: Bi;
  /** what was special about the environment — shown first when the detail opens */
  badge?: Bi;
  subs: Sub[];
};

const same = (t: string): Bi => ({ cs: t, en: t });
const pt = (kcs: string, tcs: string, ken: string, ten: string): Point => ({ k: { cs: kcs, en: ken }, t: { cs: tcs, en: ten } });

export const JOBS: Job[] = [
  {
    key: "trask",
    year: "2025",
    dates: { cs: <>01/2025 – <em>současnost</em></>, en: <>Jan 2025 – <em>present</em></> },
    current: true,
    company: same("Trask"),
    role: same("System Engineer"),
    summary: {
      cs: "Provoz a rozvoj podnikových IBM řešení v bankovním prostředí. Správa identit, dokumentových systémů, incidentů a provozních změn.",
      en: "Running and developing enterprise IBM solutions in banking. Identity management, document systems, incidents and operational changes.",
    },
    badge: {
      cs: "Regulované bankovní prostředí se zvýšenými požadavky na bezpečnost, dostupnost služeb a řízení provozních změn.",
      en: "Regulated banking environment with heightened requirements for security, service availability and change control.",
    },
    subs: [
      {
        head: { title: same("DMS / MONETA"), dates: { cs: "04/2026 – současnost", en: "Apr 2026 – present" } },
        intro: {
          cs: "V bankovním prostředí se podílím na provozu a rozvoji enterprise DMS řešení postaveného na technologiích IBM. Věnuji se koordinaci incidentů, provozních změn a aktualizací prostředí. Propojuji technické týmy s byznysem, zajišťuji návaznost jednotlivých kroků a průběžně komunikuji stav řešení managementu.",
          en: "In a banking environment I help run and develop an enterprise DMS solution built on IBM technologies. I coordinate incidents, operational changes and environment updates. I connect technical teams with the business, make sure each step follows on from the last and keep management informed about where things stand.",
        },
        points: [
          pt("IT Operations & Incident Management", "řešení provozních incidentů a požadavků, analýza problémů a koordinace jejich řešení napříč technickými týmy.",
            "IT Operations & Incident Management", "resolving operational incidents and requests, analysing problems and coordinating fixes across technical teams."),
          pt("Change Management", "koordinace provozních změn, aktualizací prostředí a souvisejících činností ve spolupráci s vývojem a dalšími specialisty.",
            "Change Management", "coordinating operational changes, environment updates and related work with development and other specialists."),
          pt("Komunikace mezi IT a byznysem", "propojování technických a business týmů, upřesňování požadavků, priorit a provozních dopadů.",
            "Communication between IT and the business", "connecting technical and business teams, clarifying requirements, priorities and operational impact."),
          pt("Reporting a koordinace", "sledování průběhu řešení, koordinace navazujících kroků a pravidelné informování managementu o stavu incidentů a změn.",
            "Reporting and coordination", "tracking progress, coordinating follow-up steps and keeping management regularly informed about incidents and changes."),
          pt("Technické prostředí", "práce s podnikovými řešeními IBM v prostředí Red Hat Enterprise Linux a IBM Db2, technická diagnostika a podpora provozu.",
            "Technical environment", "working with IBM enterprise solutions on Red Hat Enterprise Linux and IBM Db2, technical diagnostics and operational support."),
        ],
        tags: ["IT Operations", "Incident Management", "Change Management", "IBM Db2", "Red Hat Enterprise Linux", "Stakeholder Communication"],
      },
      {
        head: { title: same("IDM / ČSOB"), dates: { cs: "01/2025 – 03/2026", en: "Jan 2025 – Mar 2026" } },
        intro: {
          cs: "Podílel jsem se na implementaci, provozu a rozvoji řešení správy identit a přístupů v bankovním prostředí. Vedle práce s enterprise technologiemi IBM jsem spolupracoval se zákazníky a vývojovými týmy, analyzoval požadavky a pomáhal je převádět do funkčních a technických specifikací.",
          en: "I helped implement, run and develop identity and access management in a banking environment. Alongside IBM enterprise technologies, I worked with customers and development teams, analysed requirements and helped turn them into functional and technical specifications.",
        },
        points: [
          pt("IBM IAM infrastruktura", "instalace, konfigurace a upgrady prostředí IBM ITIM, ISVG, Db2, LDAP a WebSphere Application Server.",
            "IBM IAM infrastructure", "installing, configuring and upgrading IBM ITIM, ISVG, Db2, LDAP and WebSphere Application Server."),
          pt("Identity & Access Management", "konfigurace přístupových rolí a oprávnění, notifikací, integračních vazeb a souvisejících procesů správy identit.",
            "Identity & Access Management", "configuring access roles and permissions, notifications, integrations and the related identity management processes."),
          pt("Technická analýza a testování", "diagnostika chyb, simulace scénářů, ověřování přístupů a podpora řešení provozních incidentů.",
            "Technical analysis and testing", "diagnosing errors, simulating scenarios, verifying access and supporting incident resolution."),
          pt("Automatizace a reporting", "tvorba LDAP výstupů a reportů, spolupráce na skriptech a automatizaci provozních činností.",
            "Automation and reporting", "building LDAP exports and reports, contributing to scripts and automating operational tasks."),
          pt("Analýza požadavků a konzultace", "komunikace se zákazníky a vývojem, upřesňování potřeb a spolupráce na funkčních a technických specifikacích.",
            "Requirements analysis and consulting", "working with customers and developers, clarifying needs and co-writing functional and technical specifications."),
        ],
        tags: ["Identity & Access Management", "IBM Security Verify Governance", "IBM ITIM", "LDAP", "IBM Db2", "WebSphere"],
      },
    ],
  },
  {
    key: "ox",
    year: "2024",
    dates: { cs: "02/2024 – 09/2025", en: "Feb 2024 – Sep 2025" },
    company: same("OX Point"),
    role: same("Senior Application Support Specialist"),
    summary: {
      cs: "Aplikační provoz a technická podpora sítě více než 300 výdejních boxů. Koordinace incidentů, technických týmů a rozvoj provozních procesů.",
      en: "Application operations and technical support for a network of more than 300 parcel lockers. Coordinating incidents and technical teams, developing operational processes.",
    },
    subs: [
      {
        intro: {
          cs: "Zodpovídal jsem za aplikační podporu a provozní stabilitu platformy obsluhující síť více než 300 výdejních boxů. Vedle každodenního provozu jsem vedl řešení závažných incidentů, koordinoval spolupráci vývoje, DevOps a terénních techniků a podílel se na nastavování procesů pro efektivnější fungování podpory.",
          en: "I was responsible for application support and the operational stability of the platform running a network of more than 300 parcel lockers. Beyond day-to-day operations, I led the resolution of major incidents, coordinated development, DevOps and field technicians, and helped set up processes that made support run more efficiently.",
        },
        points: [
          pt("Incident a Service Management", "vedení řešení P1 / Major incidentů, koordinace krizových hovorů, eskalace a obnova služeb včetně pohotovostního režimu.",
            "Incident and Service Management", "leading P1 / major incident resolution, running crisis calls, escalations and service recovery, including on-call duty."),
          pt("Koordinace technických týmů", "řízení spolupráce mezi vývojem, DevOps, provozem a techniky v terénu, prioritizace zásahů a komunikace se zákazníky.",
            "Coordinating technical teams", "managing collaboration between development, DevOps, operations and field technicians, prioritising interventions and communicating with customers."),
          pt("Návrh procesů podpory", "vytvoření modelu víceúrovňové podpory L0–L3 včetně odpovědností, kompetencí, SLA a eskalačních postupů, s částečným zavedením do praxe.",
            "Designing support processes", "creating a multi-level L0–L3 support model with responsibilities, competencies, SLAs and escalation paths, partly put into practice."),
          pt("Jira a automatizace", "návrh ticketovacího workflow od základů, nastavení priorit, SLA parametrů, automatizací, notifikací a uživatelských rolí.",
            "Jira and automation", "designing a ticketing workflow from the ground up: priorities, SLA parameters, automation, notifications and user roles."),
          pt("Technický provoz a diagnostika", "L2/L3 podpora, správa a diagnostika linuxových systémů, analýza logů a SQL databáze, monitoring a identifikace opakujících se problémů.",
            "Technical operations and diagnostics", "L2/L3 support, administering and troubleshooting Linux systems, analysing logs and the SQL database, monitoring and spotting recurring issues."),
          pt("Reporting a komunikace", "vyhodnocování provozních incidentů, komunikace dopadů a předávání informací managementu, zákazníkům a technickým partnerům.",
            "Reporting and communication", "evaluating operational incidents, communicating impact and keeping management, customers and technical partners informed."),
        ],
        tags: ["IT Operations", "Major Incident Management", "Linux", "SQL", "Jira", "Process Design"],
      },
    ],
  },
  {
    key: "nakit",
    year: "2022",
    dates: { cs: "11/2022 – 03/2024", en: "Nov 2022 – Mar 2024" },
    company: same("NAKIT"),
    role: same("Application Operations Specialist → Senior IT Platform Specialist"),
    summary: {
      cs: "Provoz Portálu občana a souvisejících přihlašovacích služeb. Od aplikační podpory k řízení závažných provozních incidentů.",
      en: "Running the Citizen Portal and its related sign-in services. From application support to managing major operational incidents.",
    },
    badge: {
      cs: "Provoz státních digitálních služeb se zvýšenými požadavky na bezpečnost, ochranu informací a vysokou dostupnost.",
      en: "Government digital services with heightened requirements for security, information protection and high availability.",
    },
    subs: [
      {
        head: { title: same("Senior IT Platform Specialist"), dates: { cs: "05/2023 – 03/2024", en: "May 2023 – Mar 2024" } },
        intro: {
          cs: "Zodpovídal jsem za koordinaci řešení závažných provozních incidentů Portálu občana a souvisejících služeb. Při kritických výpadcích jsem vedl krizové hovory, propojoval technické týmy a externí partnery a koordinoval obnovu služeb s vysokými nároky na dostupnost a dodržování SLA.",
          en: "I was responsible for coordinating the resolution of major operational incidents affecting the Citizen Portal and related services. During critical outages I led crisis calls, connected technical teams and external partners, and coordinated the recovery of services with demanding availability and SLA requirements.",
        },
        points: [
          pt("Major Incident Management", "vedení řešení P1 incidentů, koordinace krizových hovorů, určování priorit a eskalace problémů.",
            "Major Incident Management", "leading P1 incident resolution, running crisis calls, setting priorities and escalating issues."),
          pt("Koordinace týmů a partnerů", "řízení komunikace mezi technickými specialisty, dodavateli a managementem, sledování postupu řešení a urgování potřebných kroků.",
            "Coordinating teams and partners", "managing communication between technical specialists, suppliers and management, tracking progress and chasing the necessary steps."),
          pt("Monitoring a provozní rizika", "aktivní dohled nad dostupností služeb, analýza incidentů, provozních záznamů a opakujících se problémů.",
            "Monitoring and operational risk", "actively monitoring service availability, analysing incidents, operational records and recurring problems."),
          pt("SLA a reporting", "sledování plnění SLA s reakčními lhůtami v řádu minut, vyhodnocování dopadů incidentů a prezentace výsledků managementu.",
            "SLAs and reporting", "tracking SLA compliance with response times measured in minutes, assessing incident impact and presenting results to management."),
          pt("Řízení provozních změn", "příprava plánovaných odstávek, koordinace technických týmů a komunikace provozních dopadů.",
            "Managing operational changes", "preparing planned maintenance, coordinating technical teams and communicating operational impact."),
        ],
        tags: ["Major Incident Management", "IT Operations", "SLA Management", "Stakeholder Communication", "Service Monitoring"],
      },
      {
        head: { title: same("Application Operations Specialist"), dates: { cs: "11/2022 – 05/2023", en: "Nov 2022 – May 2023" } },
        intro: {
          cs: "Věnoval jsem se provozu a technické podpoře Portálu občana a jeho přihlašovacích služeb. Zajišťoval jsem řešení uživatelských i provozních požadavků, správu serverových prostředí a spolupráci s technickými týmy při zajišťování dostupnosti a spolehlivosti služeb.",
          en: "I worked on operations and technical support for the Citizen Portal and its sign-in services. I handled user and operational requests, administered server environments and worked with technical teams to keep the services available and reliable.",
        },
        points: [
          pt("Aplikační podpora L2", "řešení požadavků koncových uživatelů a institucionálních zákazníků, diagnostika chyb Portálu občana a problémů s přihlašováním.",
            "L2 application support", "resolving requests from end users and institutional customers, diagnosing Citizen Portal errors and sign-in problems."),
          pt("Serverová infrastruktura", "provozní správa prostředí Windows Server a Linux, práce s SQL databázemi a souvisejícími systémy.",
            "Server infrastructure", "operating Windows Server and Linux environments, working with SQL databases and related systems."),
          pt("Incident a Service Management", "monitoring, evidence a řešení provozních incidentů, servisních požadavků a plánovaných odstávek.",
            "Incident and Service Management", "monitoring, logging and resolving operational incidents, service requests and planned outages."),
          pt("SLA a komunikace", "sledování provozních parametrů, dokumentace, reporting a spolupráce s infrastrukturními a aplikačními týmy.",
            "SLAs and communication", "tracking operational metrics, documentation, reporting and working with infrastructure and application teams."),
          pt("Technická spolupráce", "analýza požadavků, diagnostika problémů a součinnost při správě a testování aplikací.",
            "Technical collaboration", "analysing requirements, diagnosing problems and assisting with application administration and testing."),
        ],
        tags: ["L2 Application Support", "Windows Server", "Linux", "SQL", "IT Service Management"],
      },
    ],
  },
  {
    key: "mycom",
    year: "2021",
    dates: { cs: "12/2021 – 11/2022", en: "Dec 2021 – Nov 2022" },
    company: same("MyCom Solutions"),
    role: same("IT Infrastructure Specialist"),
    summary: {
      cs: "IT outsourcing pro firemní zákazníky a realizace infrastrukturních projektů od návrhu po předání.",
      en: "IT outsourcing for business customers and infrastructure projects from design to handover.",
    },
    subs: [
      {
        intro: {
          cs: "Ve společnosti MyCom Solutions jsem se věnoval IT outsourcingu, správě zákaznické infrastruktury a realizaci síťových projektů. Vedle technické práce jsem postupně přebíral odpovědnost za samostatné zakázky, komunikaci se zákazníky a koordinaci dalších techniků.",
          en: "At MyCom Solutions I worked on IT outsourcing, managing customer infrastructure and delivering network projects. Alongside the technical work, I gradually took on responsibility for my own contracts, customer communication and coordinating other technicians.",
        },
        points: [
          pt("Realizace síťových projektů", "vedení zakázek od zjištění potřeb zákazníka, technického návrhu a cenové nabídky až po realizaci a předání řešení.",
            "Delivering network projects", "running contracts from understanding the customer’s needs, technical design and the quote through to delivery and handover."),
          pt("Vedení technických realizací", "samostatné řízení projektu strukturované kabeláže v rozsahu přibližně 10 km, včetně organizace práce a koordinace zapojených techniků.",
            "Leading technical delivery", "independently managing a structured cabling project of roughly 10 km, including organising the work and coordinating the technicians involved."),
          pt("IT infrastruktura a networking", "návrh a konfigurace sítí, VLAN, Wi-Fi, switchů a firewallů s využitím technologií Ubiquiti a Fortinet.",
            "IT infrastructure and networking", "designing and configuring networks, VLANs, Wi-Fi, switches and firewalls using Ubiquiti and Fortinet."),
          pt("Zákaznická IT podpora", "správa IT prostředí firemních zákazníků, řešení hardwarových a softwarových problémů a podpora koncových zařízení.",
            "Customer IT support", "managing business customers’ IT environments, solving hardware and software problems and supporting end-user devices."),
        ],
        tags: ["IT Infrastructure", "Project Coordination", "Team Leadership", "Ubiquiti", "Fortinet"],
      },
    ],
  },
  {
    key: "noc",
    year: "2021",
    dates: { cs: "02/2021 – 12/2021", en: "Feb 2021 – Dec 2021" },
    company: { cs: "Národní očkovací centrum ÚVN – O2 universum", en: "National Vaccination Centre ÚVN – O2 universum" },
    role: same("IT Operations Consultant"),
    summary: {
      cs: "IT provoz pracovišť, zařízení a databáze očkovacího centra během 131 dnů krizového režimu.",
      en: "Running the vaccination centre’s workstations, devices and database through 131 days of crisis operations.",
    },
    badge: { cs: "Provoz se zvýšenými nároky na bezpečnost", en: "Operations with heightened security requirements" },
    subs: [
      {
        intro: {
          cs: "Podílel jsem se na zajištění každodenního IT provozu Národního očkovacího centra v O2 universu, včetně koordinace šestičlenného IT týmu. V dynamickém prostředí s vysokými nároky na spolehlivost jsme podporovali provoz centra, kterým během 131 dnů prošlo přes 550 000 lidí.",
          en: "I helped run the National Vaccination Centre’s day-to-day IT operations at O2 universum, including coordinating a six-person IT team. In a fast-moving environment with high demands on reliability, we supported a centre that more than 550,000 people passed through in 131 days.",
        },
        points: [
          pt("Vedení a koordinace IT týmu", "organizace směn, rozdělování úkolů a odpovědností v šestičlenném týmu, spolupráce s externími specialisty.",
            "Leading and coordinating the IT team", "organising shifts and assigning tasks and responsibilities in a team of six, working with external specialists."),
          pt("IT infrastruktura a podpora", "příprava a provoz desítek zařízení a pracovních stanic, operativní řešení technických incidentů.",
            "IT infrastructure and support", "preparing and running dozens of devices and workstations, resolving technical incidents on the spot."),
          pt("Databáze MS SQL", "správa databáze, řešení datových nesrovnalostí a podpora aplikací při vysoké provozní zátěži.",
            "MS SQL database", "administering the database, fixing data inconsistencies and supporting applications under heavy load."),
          pt("Optimalizace a vývoj", "sledování provozu, identifikace úzkých míst, návrhy na zrychlení procesů a aplikace, testování nových verzí a spolupráce s externím vývojem.",
            "Optimisation and development", "monitoring operations, identifying bottlenecks, proposing ways to speed up processes and the application, testing new releases and working with the external developers."),
          pt("Provozní bezpečnost", "práce v prostředí se zvýšenými požadavky na ochranu citlivých údajů a dodržování specifických provozních pravidel.",
            "Operational security", "working in an environment with heightened requirements for protecting sensitive data and following specific operating rules."),
        ],
        tags: ["IT Operations", "Team Leadership", "MS SQL", "Incident Management", "Application Testing"],
      },
    ],
  },
];

const Plus = () => (
  <svg aria-hidden="true" width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square"><path d="M8 2v12M2 8h12" /></svg>
);
const Shield = () => (
  <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square"><path d="M12 2.5 4 5.5v6c0 5 3.4 8.6 8 10 4.6-1.4 8-5 8-10v-6z" /><path d="m8.5 12 2.5 2.5 4.5-5" /></svg>
);

export function Experience() {
  const [open, setOpen] = useState<Record<string, boolean>>({});
  const all = JOBS.every((j) => open[j.key]);
  const toggle = (k: string) => setOpen((o) => ({ ...o, [k]: !o[k] }));
  const toggleAll = () => setOpen(Object.fromEntries(JOBS.map((j) => [j.key, !all])));
  // the whole row opens the detail, unless the visitor is selecting text in it
  const rowClick = (k: string) => (e: MouseEvent) => {
    if ((e.target as HTMLElement).closest("button")) return;
    if (String(getSelection() ?? "").length) return;
    toggle(k);
  };

  return (
    <section id="zkusenosti" className={`sec ${s.exp}`} aria-labelledby="h-zk">
      <div className="wrap">
        <div className={s.top}>
          <h2 id="h-zk" className="h2"><L cs="Moje pracovní zkušenosti" en="My work experience" /></h2>
          <button type="button" className={s.toggleAll} onClick={toggleAll}>
            {all ? <L cs="Sbalit vše" en="Collapse all" /> : <L cs="Rozbalit vše" en="Expand all" />}
          </button>
        </div>
        <ol className={s.list}>
          {JOBS.map((j) => {
            const isOpen = !!open[j.key];
            return (
              <li key={j.key} className={[s.job, j.current && s.current, isOpen && s.open].filter(Boolean).join(" ")}>
                <div className={s.row} onClick={rowClick(j.key)}>
                  <div>
                    <span className={s.year}>{j.year}</span>
                    <span className={s.period}><L {...j.dates} /></span>
                  </div>
                  <div>
                    <h3 className={s.co}><L {...j.company} /></h3>
                    <span className={s.role}><L {...j.role} /></span>
                    {j.current && <span className={s.now}><L cs="aktuálně" en="current" /></span>}
                  </div>
                  <p className={s.desc}><L {...j.summary} /></p>
                  <button type="button" className={s.det} aria-expanded={isOpen} aria-controls={`exp-${j.key}`} onClick={() => toggle(j.key)}>
                    {isOpen ? <L cs="Méně" en="Less" /> : <L cs="Detail" en="Details" />}
                    <Plus />
                  </button>
                </div>
                <div className={s.panel} id={`exp-${j.key}`} hidden={!isOpen}>
                  <div className={s.body}>
                    {j.badge && (
                      <p className={s.badge}>
                        <Shield />
                        <span><L {...j.badge} /></span>
                      </p>
                    )}
                    {j.subs.map((sub, i) => (
                      <div key={i} className={s.sub}>
                        {sub.head && (
                          <>
                            <h4><L {...sub.head.title} /></h4>
                            <span className={s.meta}><L {...sub.head.dates} /></span>
                          </>
                        )}
                        <p><L {...sub.intro} /></p>
                        <ul className={s.points}>
                          {sub.points.map((p, k) => (
                            <li key={k}><strong><L {...p.k} /></strong> – <L {...p.t} /></li>
                          ))}
                        </ul>
                        <div className={s.skills}>
                          <span className={s.skillsH} id={`sk-${j.key}-${i}`}><L cs="Technologie a kompetence" en="Technologies and skills" /></span>
                          <ul className={s.tags} aria-labelledby={`sk-${j.key}-${i}`}>
                            {sub.tags.map((t) => <li key={t}>{t}</li>)}
                          </ul>
                        </div>
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
