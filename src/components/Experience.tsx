"use client";
import { useState, type ReactNode } from "react";
import { L, type Bi } from "./L";

type Detail = { intro: Bi; bullets: Bi[]; transfer: Bi };
type SubRole = Detail & { name: Bi; role?: Bi; dates: Bi };
type Job = {
  key: string;
  year: string;
  dates: Bi;
  badge?: "current" | "promoted";
  company: Bi;
  title: Bi;
  summary: Bi;
} & ({ detail: Detail } | { timeline: { first: SubRole; milestone: Bi; filledChip: boolean; second: SubRole } });

const same = (s: string): Bi => ({ cs: s, en: s });

const JOBS: Job[] = [
  {
    key: "trask",
    year: "2025",
    dates: { cs: <>01/2025 – <em>teď</em></>, en: <>01/2025 – <em>now</em></> },
    badge: "current",
    company: same("Trask"),
    title: { cs: "System Engineer · projekty na řešeních IBM", en: "System Engineer · projects built on IBM solutions" },
    summary: {
      cs: "Nejdřív IDM v ČSOB, od roku 2026 přeřazení na DMS v Monetě. Oba projekty stojí na řešeních IBM.",
      en: "First IDM at ČSOB, then reassigned to DMS at Moneta in 2026. Both projects are built on IBM solutions.",
    },
    timeline: {
      first: {
        name: same("DMS / Moneta"),
        role: { cs: "změnové a incidentní řízení", en: "change and incident management" },
        dates: { cs: "2026 – teď", en: "2026 – now" },
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
        transfer: {
          cs: "Průběžná komunikace, sledování závazků a řešení potřeb klienta jsou základem account i service ownership práce.",
          en: "Ongoing communication, tracking commitments and meeting client needs are the core of account and service ownership.",
        },
      },
      milestone: { cs: "Přeřazení na projekt DMS / Moneta · 2026", en: "Reassigned to the DMS / Moneta project · 2026" },
      filledChip: false,
      second: {
        name: same("IDM / ČSOB"),
        role: same("System Engineer, Identity and Access Management"),
        dates: { cs: "01/2025 – 2026", en: "Jan 2025 – 2026" },
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
        transfer: {
          cs: "Překládání potřeb zákazníka do technických zadání, koordinace návazností a orientace v dopadech změn.",
          en: "Translating customer needs into technical requirements, coordinating dependencies and understanding the impact of changes.",
        },
      },
    },
  },
  {
    key: "ox",
    year: "2024",
    dates: { cs: "02/2024 – 09/2025", en: "Feb 2024 – Sep 2025" },
    company: same("OX Point"),
    title: same("Senior Application Support Specialist"),
    summary: { cs: "Aplikační podpora a stabilita produkční platformy s více než 300 zařízeními.", en: "Application support and stability for a production platform of more than 300 devices." },
    detail: {
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
      transfer: {
        cs: "Klientská komunikace, řízení očekávání, převzetí problému do řešení a koordinace více týmů.",
        en: "Customer communication, expectation management, owning a problem through to resolution and cross-team coordination.",
      },
    },
  },
  {
    key: "nakit",
    year: "2022",
    dates: { cs: "11/2022 – 03/2024", en: "Nov 2022 – Mar 2024" },
    badge: "promoted",
    company: same("NAKIT"),
    title: { cs: "aplikační provoz → Senior IT Platform Specialist", en: "application operations → Senior IT Platform Specialist" },
    summary: {
      cs: "Provoz veřejných digitálních služeb včetně systému Identita občana. Dvě role, druhá s odpovědností za závažné incidenty.",
      en: "Operating public digital services, including the Identita občana system. Two roles, the second covering major incidents.",
    },
    timeline: {
      first: {
        name: same("Senior IT Platform Specialist"),
        dates: { cs: "05/2023 – 03/2024", en: "May 2023 – Mar 2024" },
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
        transfer: {
          cs: "Zkušenost s kritickou službou, komunikací pod tlakem a koordinací práce bez zbytečného šumu.",
          en: "Experience with a critical service, communicating under pressure and coordinating work without unnecessary noise.",
        },
      },
      milestone: { cs: "Povýšení · 05/2023", en: "Promotion · May 2023" },
      filledChip: true,
      second: {
        name: { cs: "Specialista aplikačního provozu", en: "Application Operations Specialist" },
        dates: { cs: "11/2022 – 05/2023", en: "Nov 2022 – May 2023" },
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
        transfer: {
          cs: "Systematická práce s požadavky, srozumitelné předávání informací a provozní disciplína.",
          en: "Structured request handling, clear handovers and operational discipline.",
        },
      },
    },
  },
  {
    key: "mycom",
    year: "2021",
    dates: { cs: "12/2021 – 11/2022", en: "Dec 2021 – Nov 2022" },
    company: same("MyCom Solutions"),
    title: same("IT Infrastructure Technician"),
    summary: { cs: "Každodenní IT podpora firemních zákazníků a menší infrastrukturní projekty.", en: "Day-to-day IT support for business customers and smaller infrastructure projects." },
    detail: {
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
      transfer: {
        cs: "Praktická komunikace se zákazníkem, pochopení zadání a dotažení řešení až do jeho prostředí.",
        en: "Practical customer communication, understanding the brief and delivering the solution all the way into the customer’s environment.",
      },
    },
  },
  {
    key: "noc",
    year: "2021",
    dates: { cs: "02 – 12/2021", en: "Feb – Dec 2021" },
    company: { cs: "Národní očkovací centrum ÚVN–O2", en: "National Vaccination Centre, ÚVN–O2" },
    title: { cs: "IT technik / odborný konzultant činností v oblasti IT", en: "IT Technician / IT Consultant" },
    summary: { cs: "131 dnů krizového provozu centra, které obsloužilo více než 550 000 lidí.", en: "131 days of crisis operations at a centre that served more than 550,000 people." },
    detail: {
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
      transfer: {
        cs: "Nejsilnější příklad koordinace lidí, techniky a provozu v krizové situaci.",
        en: "My strongest example of coordinating people, technology and operations in a crisis.",
      },
    },
  },
];

function DetailBody({ d, tight }: { d: Detail; tight?: boolean }): ReactNode {
  const parts = (
    <>
      <p className="exp-p"><L {...d.intro} /></p>
      <div className="exp-split">
        <ul className="exp-bullets">
          {d.bullets.map((b, i) => <li key={i}><span><L {...b} /></span></li>)}
        </ul>
        <aside className="exp-aside">
          <p className="k"><L cs="Přenositelné zkušenosti" en="Transferable experience" /></p>
          <p className="v"><L {...d.transfer} /></p>
        </aside>
      </div>
    </>
  );
  return tight ? parts : <div className="exp-stack">{parts}</div>;
}

function Sub({ s, first }: { s: SubRole; first: boolean }) {
  return (
    <div className="tl">
      <div className="tl-rail" aria-hidden="true">
        <span className={`tl-dot${first ? " is-filled" : ""}`} />
        {first && <span className="tl-line" />}
      </div>
      <div style={{ minWidth: 0 }}>
        <div className="exp-stack-tight">
          <div className="tl-sub-head">
            <h4><L {...s.name} /></h4>
            {s.role && <span className="role"><L {...s.role} /></span>}
            <span className="dates"><L {...s.dates} /></span>
          </div>
          <DetailBody d={s} tight />
        </div>
      </div>
    </div>
  );
}

export function Experience() {
  const [open, setOpen] = useState<Record<string, boolean>>({});
  const allOpen = JOBS.every((j) => open[j.key]);
  const toggle = (k: string) => setOpen((o) => ({ ...o, [k]: !o[k] }));
  const toggleAll = () => setOpen(Object.fromEntries(JOBS.map((j) => [j.key, !allOpen])));

  return (
    <section id="zkusenosti" className="sec" aria-labelledby="h-zk">
      <div className="exp-in">
        <p className="kicker"><L cs="Zkušenosti" en="Experience" /></p>
        <h2 id="h-zk" className="h2"><L cs="Technické prostředí mě naučilo vidět dopad rozhodnutí v praxi." en="Technical environments taught me to see what decisions actually do." /></h2>

        <div className="exp-body">
          <div className="exp-toggle">
            <button type="button" className="linkbtn" onClick={toggleAll}>
              {allOpen ? <L cs="Sbalit vše" en="Collapse all" /> : <L cs="Rozbalit vše" en="Expand all" />}
            </button>
          </div>

          <ol className="exp-list">
            {JOBS.map((j) => {
              const isOpen = !!open[j.key];
              return (
                <li key={j.key}>
                  {/* The whole row is clickable for mouse users; the heading button carries keyboard and screen-reader semantics. */}
                  <div className={`exp-row${isOpen ? " is-open" : ""}`} onClick={() => toggle(j.key)}>
                    <div className="exp-when">
                      <span className="exp-year" aria-hidden="true">{j.year}</span>
                      <span><L {...j.dates} /></span>
                      {j.badge === "current" && <span className="badge-solid"><L cs="aktuálně" en="current" /></span>}
                      {j.badge === "promoted" && <span className="badge-line"><span aria-hidden="true">↑</span><L cs="povýšení" en="promoted" /></span>}
                    </div>
                    <div className="exp-main">
                      <h3>
                        <button
                          type="button"
                          className="exp-btn"
                          aria-expanded={isOpen}
                          aria-controls={`exp-${j.key}`}
                          onClick={(e) => { e.stopPropagation(); toggle(j.key); }}
                        >
                          <span className="exp-btn-txt">
                            <span className="exp-co"><L {...j.company} /></span>
                            <span className="exp-role"><L {...j.title} /></span>
                          </span>
                          <span className="exp-more">
                            <span>{isOpen ? <L cs="Méně" en="Less" /> : <L cs="Detail" en="Details" />}</span>
                            <span className="exp-plus" aria-hidden="true">+</span>
                          </span>
                        </button>
                      </h3>
                      <p className="exp-sum"><L {...j.summary} /></p>
                    </div>
                  </div>
                  {isOpen && (
                    <div id={`exp-${j.key}`} className="exp-detail">
                      <div className="exp-detail-l">
                        <p><span className="arr" aria-hidden="true">↳</span><L cs="Náplň práce" en="The work" /></p>
                      </div>
                      <div className="exp-detail-r">
                        {"detail" in j ? (
                          <DetailBody d={j.detail} />
                        ) : (
                          <div style={{ display: "flex", flexDirection: "column" }}>
                            <Sub s={j.timeline.first} first />
                            <div className="tl">
                              <div className="tl-rail" aria-hidden="true"><span className="tl-seg" /></div>
                              <p className="tl-mile">
                                <span className={`tl-chip${j.timeline.filledChip ? " is-filled" : ""}`}>
                                  <span className="arr" aria-hidden="true">↑</span>
                                  <L {...j.timeline.milestone} />
                                </span>
                              </p>
                            </div>
                            <Sub s={j.timeline.second} first={false} />
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
