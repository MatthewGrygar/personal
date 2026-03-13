export type Lang = "en" | "cs";

export const profile = {
  name: "Matthew Grygar",
  roles: ["IT Risk Manager", "Systems Engineer", "Crisis & Turnaround Specialist"],
  location: { en: "Prague (Hybrid)", cs: "Praha (Hybrid)" },
  email: "matthew.grygar@seznam.cz",
  linkedin: "https://www.linkedin.com/in/matthew-grygar-214b94232/",
  cvUrl: "/cv-matthew-grygar.pdf"
} as const;

export const i18n = {
  nav: {
    home:       { en: "Home",       cs: "Domů"       },
    about:      { en: "About",      cs: "O mně"      },
    experience: { en: "Experience", cs: "Zkušenosti" },
    projects:   { en: "Projects",   cs: "Projekty"   },
    skills:     { en: "Skills",     cs: "Dovednosti" },
    contact:    { en: "Contact",    cs: "Kontakt"    },
    pillars:    { en: "What I bring", cs: "Co přináším" },
    cta:        { en: "Let's talk", cs: "Ozvěte se"  }
  },

  hero: {
    title:        { en: "Engineering calm in the eye of the storm.", cs: "Klid inženýra ve středu bouře." },
    subtitle:     { en: "IT Risk · Systems · Crisis Management",      cs: "IT Risk · Systémy · Krizový management" },
    primaryCta:   { en: "Contact",      cs: "Kontakt"     },
    secondaryCta: { en: "Download CV",  cs: "Stáhnout CV" },
    kicker:       { en: "Prague · Hybrid · Open to conversations", cs: "Praha · Hybrid · K dispozici pro konzultaci" }
  },

  about: {
    headline: {
      en: "Stability under pressure",
      cs: "Stabilita pod tlakem"
    },
    body: {
      en: "I help organisations stabilise critical systems when incidents escalate and time pressure rises — and then set up processes so it doesn't happen again.\n\nMy experience leads from direct work in production operations and coordination of Major/P1 incidents through identification of operational risks to operation and management of Identity & Access Management solutions in regulated sectors.\n\nI bring a combination of technical depth and operational overview — I understand processes, systems and what breaks at 3am. Long-term I am heading towards IT Risk Management and operational risk management.",
      cs: "Pomáhám organizacím stabilizovat kritické systémy v době, kdy se incidenty stupňují a zvyšuje se časový tlak – a pak nastavit procesy, aby se to neopakovalo.\n\nMoje zkušenosti vedou od přímé práce v produkčních operacích a koordinace Major/P1 incidentů přes identifikaci provozních rizik až po provoz a správu Identity & Access Management řešení v regulovaných sektorech.\n\nPřináším kombinaci technické hloubky a provozního přehledu – rozumím procesům, systémům i tomu, co se pokazí ve tři ráno. Dlouhodobě směřuji k IT Risk Managementu a řízení provozních rizik"
    },
    pillarsTitle: { en: "What I bring", cs: "Co přináším" },
    pillars: [
      {
        en: "01 — Incident resolution under pressure: I have led Major incidents with full production impact — coordinating teams of specialists across organisations, managing escalation towards management and maintaining oversight of recovery priorities. The goal was always to bring the system back to a stable state quickly and without unnecessary side effects.",
        cs: "01 — Řešení incidentů pod tlakem: Vedl jsem Major incidenty s dopadem na celou produkci – koordinoval jsem týmy specialistů napříč organizacemi, zajišťoval eskalaci směrem k managementu a udržoval přehled nad prioritami obnovy. Cílem bylo vždy dovést systém zpět do stabilního stavu rychle a bez zbytečných vedlejších dopadů."
      },
      {
        en: "02 — Identifying and managing operational risks: From practice I know where weaknesses most often appear in IT operations — poorly configured access roles, unclear escalation paths, insufficient segmentation or missing capacity. I try to name these risks before they cause a problem and set up processes so they don't recur.",
        cs: "02 – Identifikace a řízení provozních rizik: Z praxe vím, kde se v IT provozu nejčastěji objevují slabá místa – špatně nastavené přístupové role, nejasné eskalační cesty, nedostatečná segmentace nebo chybějící kapacity. Snažím se tato rizika pojmenovat dřív, než způsobí problém, a nastavit procesy tak, aby se neopakovala."
      },
      {
        en: "03 — Decision-making in critical operations: I have worked on systems with high availability requirements — from a government eGovernment system to infrastructure of hundreds of devices in operation. In such environments you need to decide quickly, systematically and with awareness of the impact of every step on service stability.",
        cs: "03 – Rozhodování v kritickém provozu: Pracoval jsem na systémech s vysokými nároky na dostupnost – od státního eGovernment systému po infrastrukturu stovek zařízení v provozu. V takovém prostředí je potřeba rozhodovat rychle, systematicky a s vědomím dopadu každého kroku na stabilitu služby."
      },
      {
        en: "04 — Communication across technology and business: I have experience communicating with both technical teams and management and customers. I can translate technical problems into a business context — clearly, factually and without unnecessary distortion.",
        cs: "04 – Komunikace napříč technologií a businessem: Mám zkušenost s komunikací jak s technickými týmy, tak s managementem a zákazníky. Technické problémy dokážu přeložit do business kontextu – srozumitelně, věcně a bez zbytečného zkreslení."
      },
      {
        en: "05 — Process as the foundation of stability: I don't believe in one-off heroic fixes. Long-term system stability rests on well-designed processes, clearly defined responsibilities and the ability to learn from every incident — that is the foundation on which IT Risk Management works.",
        cs: "05 – Proces jako základ stability: Nevěřím na jednorázová hrdinská řešení. Dlouhodobá stabilita systémů stojí na dobře nastavených procesech, jasně definovaných odpovědnostech a schopnosti poučit se z každého incidentu – to je základ, na kterém IT Risk Management funguje."
      }
    ],
    toolboxTitle: { en: "Toolbox", cs: "Toolbox" },
    toolbox: [
      "IAM / IdM", "Incident & Major Incident Mgmt", "SLA & Service Governance",
      "Risk Frameworks (ISO 27001 / 27005)", "Linux / Windows", "SQL", "JIRA",
      "Monitoring & Log Analysis (Grafana)", "ITIL principy", "PowerShell"
    ],
    currently: {
      label: { en: "Currently", cs: "Aktuálně" },
      value: {
        en: "System Engineer – Identity & Access Management (Trask, 2025–present)",
        cs: "System Engineer – Identity & Access Management (Trask, 2025–současnost)"
      }
    },
    direction: {
      en: "Going forward, I want to focus on IT Risk Management — identification and management of operational risks, IT service governance and building processes that protect organisations from outages even in demanding situations.\nIt makes sense for me to work at the intersection of technology, risk and business — where a technical decision has a direct impact on operational stability and security.",
      cs: "Do budoucna se chci zaměřit na IT Risk Management – identifikaci a řízení provozních rizik, governance IT služeb a budování procesů, které organizaci chrání před výpadky i v náročných situacích.\nDává mi smysl pracovat na pomezí technologie, rizika a businessu – kde technické rozhodnutí má přímý dopad na stabilitu a bezpečnost provozu."
    }
  },

  experience: {
    headline: {
      en: "Experience from live operations where failure is not an option",
      cs: "Zkušenosti z ostrého provozu, kde selhání není možnost"
    },
    items: [
      {
        role:    { en: "System Engineer – Identity & Access Management", cs: "System Engineer – Identity & Access Management" },
        company: "Trask",
        logo:    "/logo-trask.png",
        security: true,
        securityText: {
          en: "Work on projects within environments of regulated financial institutions. Emphasis was placed on process accuracy, audit trail of every change and zero tolerance for security deviations.",
          cs: "Práce na projektech v rámci prostředí regulovaných finančních institucí. Byl kladen důraz na přesnost v procesech, audit trail každé změny a nulovou toleranci k bezpečnostním odchylkám."
        },
        period:  { en: "Jan 2025 – present", cs: "01/2025 – současnost" },
        tags:    ["IAM", "IBM ITIM", "ISVG", "LDAP", "DB2", "WebSphere (WAS)", "Access Management", "Windows Server", "Linux"],
        description: {
          en: "Operation and management of IAM solutions for enterprise clients in regulated sectors (finance, energy).",
          cs: "Provoz a správa IAM řešení u enterprise klientů v regulovaných sektorech (finance, energetika)."
        },
        bullets: {
          en: [
            "Installation and configuration of IBM IAM stack: ITIM, ISVG, DB2, LDAP, WebSphere (WAS) on Windows Server.",
            "Upgrade of existing IAM environments, configuration of instances and integration links.",
            "Access governance: configuration of roles, access permissions and notifications (password changes, role assignments).",
            "Technical analysis in ISVG (Java component integrator) — error analysis, use-case scenario simulation.",
            "Collaboration with development team on GUI modifications; support for IAM-related incidents.",
            "Creation of reports from LDAP, testing of access scenarios, co-authoring implementation specifications."
          ],
          cs: [
            "Instalace a konfigurace IBM IAM stacku: ITIM, ISVG, DB2, LDAP, WebSphere (WAS) na Windows Serveru.",
            "Upgrade existujících IAM prostředí, konfigurace instancí a integračních vazeb.",
            "Access governance: konfigurace rolí, přístupových oprávnění a notifikací (změny hesel, přiřazení rolí).",
            "Technická analýza v ISVG (integrátor Java komponent) – analýza chyb, simulace use-case scénářů.",
            "Spolupráce s vývojovým týmem při úpravách GUI; podpora incidentů souvisejících s IAM.",
            "Tvorba reportů z LDAP, testování přístupových scénářů, spolupráce na implementačních specifikacích."
          ]
        },
        impacts: {
          en: [
            "Complete installation and commissioning of IBM IAM stack in production environment",
            "Successful upgrades of complex IAM environments for enterprise clients",
            "Support for secure identity and access management in regulated sectors"
          ],
          cs: [
            "Kompletní instalace a zprovoznění IBM IAM stacku v produkčním prostředí",
            "Úspěšné upgrady komplexních IAM prostředí u enterprise klientů",
            "Podpora bezpečné správy identit a přístupů v regulovaných sektorech"
          ]
        }
      },
      {
        role:    { en: "Senior Application Support Specialist", cs: "Senior Application Support Specialist" },
        company: "OX Point",
        logo:    "/logo-oxpoint.png",
        period:  { en: "Feb 2024 – Sep 2025", cs: "02/2024 – 09/2025" },
        tags:    ["Incident Management", "Production Operations", "JIRA", "SLA Management", "Linux", "Grafana", "SQL", "Log Analysis", "Cross-team Coordination"],
        description: {
          en: "Primary technical link between operations and development — responsible for production stability, escalation management and incident coordination with impact on critical operations.",
          cs: "Primární technický článek mezi provozní a vývojovou částí - odpovědný za stabilitu produkce, řízení eskalací a koordinaci incidentů s dopadem na kritický provoz."
        },
        bullets: {
          en: [
            "Management of P1/Major incidents in an environment of 300+ devices in production; escalation coordination in cooperation with operations manager.",
            "Coordination of specialist team (DevOps, development, technicians) during critical outages in 24/7 on-call mode.",
            "Design of internal guidelines for L1/L2/L3 responsibility division, escalation paths and capacity planning to ensure service availability.",
            "Built JIRA project from scratch: severity model, SLA parameters, workflow automation and notifications — as the basis for measurable operations management.",
            "Monitoring and analysis of error patterns (Grafana, SQL, Linux/SSH) for early identification of operational risks.",
            "Support for critical infrastructure migrations; management reporting on incident progress and operational status."
          ],
          cs: [
            "Řízení P1/Major incidentů v prostředí 300+ zařízení v produkci; koordinace eskalací ve spolupráci s provozním manažerem.",
            "Koordinace týmu specialistů (DevOps, vývoj, technici) při kritických výpadcích v režimu 24/7 on-call.",
            "Návrh interní směrnice pro rozdělení odpovědností L1/L2/L3, eskalační cesty a kapacitní plánování pro zajištění dostupnosti služeb.",
            "Vybudování JIRA projektu od základů: severity model, SLA parametry, automatizace workflow a notifikace - jako základ pro měřitelné řízení provozu.",
            "Monitoring a analýza chybových vzorců (Grafana, SQL, Linux/SSH) za účelem včasné identifikace provozních rizik.",
            "Podpora migrací kritické infrastruktury; management reporting o průběhu incidentů a stavu provozu."
          ]
        },
        impacts: {
          en: [
            "Stabilisation of operations for 300+ devices in production",
            "Successful management of critical P1 incidents",
            "Introduction of structured SLA and severity model",
            "Design of operational model L1–L3 including escalation paths and responsibilities",
            "Improved clarity of escalations and operational governance",
            "Strengthened reporting transparency towards management"
          ],
          cs: [
            "Stabilizace provozu 300+ zařízení v produkci",
            "Úspěšné zvládnutí kritických P1 incidentů",
            "Zavedení strukturovaného SLA a severity modelu",
            "Návrh provozního modelu L1–L3 včetně eskalačních cest a odpovědností",
            "Zlepšení přehlednosti eskalací a provozní governance",
            "Posílení reportingové transparentnosti směrem k managementu"
          ]
        }
      },
      {
        role:    { en: "Senior IT Platform Specialist", cs: "Senior IT Platform Specialist" },
        company: "NAKIT",
        logo:    "/logo-nakit.png",
        security: true,
        securityText: {
          en: "Work in an environment with strict security requirements and state regulation. Emphasis was placed on process discipline, access management and awareness of operational risks.",
          cs: "Práce v prostředí s přísnými bezpečnostními požadavky a státní regulací. Byl kladen důraz na procesní disciplínu, správu přístupů a vědomí provozních rizik."
        },
        period:  { en: "May 2023 – Mar 2024", cs: "05/2023 – 03/2024" },
        tags:    ["Application Operations", "eGovernment", "Incident Coordination", "SLA Monitoring", "Log Analysis", "Linux", "Windows Server", "PowerShell"],
        description: {
          en: "Operation and availability management of the Identita občana system — critical state infrastructure enabling online authentication of millions of citizens in communication with public administration.",
          cs: "Provoz a řízení dostupnosti systému Identita občana – kritické státní infrastruktury umožňující online autentizaci milionů občanů při komunikaci se státní správou."
        },
        bullets: {
          en: [
            "Management of P1/Major incidents with high impact on end users; chairing crisis calls and coordinating service recovery in minute-level SLA mode.",
            "Coordination of several teams of technical specialists across organisations during critical outages — with emphasis on rapid recovery and minimising impact on service availability.",
            "Monitoring of application availability, incident recording and analysis, SLA parameter compliance control and identification of recurring operational risks.",
            "Management of planned shutdowns including preparation of materials for management reporting and communication of impacts to stakeholders.",
            "Analysis of application logs and data inconsistencies in cooperation with DB and infrastructure teams.",
            "Basic PowerShell scripting; work in Linux (Red Hat) and Windows Server environments."
          ],
          cs: [
            "Řízení P1/Major incidentů s vysokým dopadem na koncové uživatele; vedení krizových callů a koordinace obnovy provozu v režimu minutových SLA.",
            "Koordinace několika týmů technických specialistů napříč organizacemi při kritických výpadcích – s důrazem na rychlou obnovu a minimalizaci dopadu na dostupnost služby.",
            "Monitoring dostupnosti aplikací, evidence a analýza výpadků, kontrola plnění SLA parametrů a identifikace opakujících se provozních rizik.",
            "Řízení plánovaných odstávek včetně přípravy podkladů pro management reporting a komunikace dopadů směrem k stakeholderům.",
            "Analýza aplikačních logů a datových nekonzistencí ve spolupráci s DB a infrastrukturními týmy.",
            "Základní skriptování v PowerShell; práce v Linux (Red Hat) a Windows server prostředí."
          ]
        },
        impacts: {
          en: [
            "Management of incidents with high impact on millions of end users",
            "Recovery of critical state infrastructure in minute-level SLA mode",
            "Stabilisation of escalation and communication processes during outages",
            "Improved coordination between technical partners across organisations",
            "Transparent incident reporting towards management"
          ],
          cs: [
            "Řízení incidentů s vysokým dopadem na miliony koncových uživatelů",
            "Obnova provozu kritické státní infrastruktury v režimu minutových SLA",
            "Stabilizace eskalačních a komunikačních procesů během výpadků",
            "Zlepšení koordinace mezi technickými partnery napříč organizacemi",
            "Transparentní incident reporting směrem k managementu"
          ]
        }
      },
      {
        role:    { en: "IT Infrastructure & Network Support", cs: "IT Infrastructure & Network Support" },
        company: "MyCom Solutions",
        logo:    "/logo-mycom.webp",
        period:  { en: "2021 – 2023", cs: "2021 – 2023" },
        tags:    ["IT Infrastructure", "Network Configuration", "VLAN", "Ubiquiti", "Fortinet", "Structured Cabling", "RDP Environments", "Hardware Support"],
        description: {
          en: "Design and implementation of network solutions for commercial clients — from initial requirements analysis to physical realisation and environment security.",
          cs: "Návrh a implementace síťových řešení u komerčních zákazníků – od počáteční analýzy požadavků po fyzickou realizaci a zabezpečení prostředí."
        },
        bullets: {
          en: [
            "Design and implementation of network infrastructure including VLAN segmentation, configuration of Ubiquiti (AP, switches) and Fortinet firewall — with emphasis on security and access separation.",
            "Management of RDP access and endpoint devices; incident management including on-site resolution of HW/SW incidents and ticketing.",
            "Complete implementation of structured cabling over 5 km — patch panels, keystone modules, rack installation.",
            "Preparation of internal security lab (Windows/Linux) for testing network configurations and security scenarios."
          ],
          cs: [
            "Návrh a implementace síťové infrastruktury včetně VLAN segmentace, konfigurace Ubiquiti (AP, switche) a Fortinet firewall – s důrazem na bezpečnost a oddělení přístupů.",
            "Správa RDP přístupů a koncových zařízení; incident management zahrnující on-site řešení HW/SW incidentů a ticketing.",
            "Kompletní realizace strukturované kabeláže přes 5 km – patch panely, keystone moduly, instalace racků.",
            "Příprava interního bezpečnostního labu (Windows/Linux) pro testování síťových konfigurací a bezpečnostních scénářů."
          ]
        },
        impacts: {
          en: [
            "Implementation of complete network infrastructure for several clients including security segmentation",
            "Delivery of more than 5 km of structured cabling",
            "Practical foundation in network segmentation, access management and physical infrastructure",
            "Stabilisation of client operating environments through rapid incident resolution"
          ],
          cs: [
            "Implementace kompletní síťové infrastruktury u několika zákazníků včetně bezpečnostní segmentace",
            "Realizace více než 5 km strukturované kabeláže",
            "Praktický základ v oblasti síťové segmentace, správy přístupů a fyzické infrastruktury",
            "Stabilizace provozního prostředí zákazníků prostřednictvím rychlého řešení incidentů"
          ]
        }
      },
      {
        role:    { en: "IT Operations & Incident Coordination", cs: "IT Operations & Incident Coordination" },
        company: "Národní očkovací centrum ÚVN",
        logo:    "/logo-uvn.png",
        security: true,
        securityText: {
          en: "Highly exposed environment with continuous operations, processing of personal health data and cooperation with the Czech Army in restricted access mode.",
          cs: "Vysoce exponované prostředí s nepřetržitým provozem, zpracováním osobních zdravotních dat a spoluprací s Armádou ČR v režimu omezeného přístupu."
        },
        period:  { en: "2021", cs: "2021" },
        tags:    ["IT Operations", "Incident Support", "Database Administration", "Team Coordination", "Hardware Management", "Service Continuity", "High-load Operations"],
        description: {
          en: "Operation of IT infrastructure of the National Vaccination Centre at O2 Universum.",
          cs: "Provoz IT infrastruktury Národního očkovacího centra v O2 Universum."
        },
        bullets: {
          en: [
            "Ensuring continuous availability of IT infrastructure — daily preparation and operation of dozens of devices and workstations in an environment with zero tolerance for outages.",
            "Monitoring and operational resolution of incidents in real time; management of MS SQL database with high transactional load including analysis and correction of data inconsistencies.",
            "Leadership of a small IT team: shift planning, responsibility allocation, setting up escalation procedures and operational standards.",
            "Processing and protection of sensitive personal health data in accordance with operational requirements of a restricted access environment (cooperation with Czech Army).",
            "Cooperation with external development team; UAT testing of new versions before production deployment.",
            "Identification of weaknesses in operational processes and proposals for workflow optimisation."
          ],
          cs: [
            "Zajištění nepřetržité dostupnosti IT infrastruktury - každodenní příprava a provoz desítek zařízení a pracovních stanic v prostředí s nulovou tolerancí výpadků.",
            "Monitoring a operativní řešení incidentů v reálném čase; správa MS SQL databáze s vysokou transakční zátěží včetně analýzy a opravy datových nekonzistencí.",
            "Vedení malého IT týmu: plánování směn, rozdělení odpovědností, nastavení eskalačních postupů a provozních standardů.",
            "Zpracování a ochrana citlivých osobních zdravotních dat v souladu s provozními požadavky prostředí s omezeným přístupem (spolupráce s AČR).",
            "Spolupráce s externím vývojovým týmem; UAT testování nových verzí před produkčním nasazením.",
            "Identifikace slabých míst v provozních procesech a návrhy optimalizace workflow."
          ]
        },
        impacts: {
          en: [
            "Uninterrupted operations during 131 days of crisis mode",
            "IT support for more than 550,000 processed clients",
            "Stabilisation of database environment under high transactional load",
            "Operations in restricted access environment with processing of sensitive health data",
            "Reduction of operational downtime and optimisation of morning infrastructure preparation"
          ],
          cs: [
            "Nepřerušený provoz během 131 dní krizového režimu",
            "IT podpora pro více než 550 000 odbavených klientů",
            "Stabilizace databázového prostředí při vysoké transakční zátěži",
            "Provoz v prostředí s omezeným přístupem a zpracováním citlivých zdravotních dat",
            "Snížení provozních prostojů a optimalizace ranní přípravy infrastruktury"
          ]
        }
      }
    ]
  },

  projects: {
    headline: { en: "Selected work & personal initiatives", cs: "Vybrané projekty a osobní iniciativy" },
    items: [
      {
        title: "JIRA Service Workflow Design",
        banner: "/projects/jira.jpg",
        tags: ["JIRA", "Support", "Operations"],
        description: {
          en: "Complete design and setup of a JIRA project for operational support — ticket types, SLA rules, severity model, automations, roles and user groups, including a clear request interface.",
          cs: "Kompletní návrh a nastavení JIRA projektu pro provozní podporu. Součástí bylo vytvoření typů ticketů, SLA pravidel, severity modelu, automatizací, rolí a uživatelských skupin, včetně návrhu přehledného rozhraní pro zadávání požadavků."
        },
        highlight: { en: "Complete service workflow from submission to resolution.", cs: "Kompletní návrh servisního workflow od zadání po vyřešení." },
        url: null
      },
      {
        title: "SLA & Incident Management Model",
        banner: "/projects/sla.jpg",
        tags: ["Support", "Risk", "Operations"],
        description: {
          en: "Internal design of an operational support model including responsibility division across support levels, SLA parameters, severity levels and escalation rules.",
          cs: "Interní návrh provozního modelu podpory včetně rozdělení odpovědností mezi jednotlivé úrovně podpory. Definice SLA parametrů, severity úrovní a eskalačních pravidel."
        },
        highlight: { en: "Clear escalations, defined responsibilities.", cs: "Přehledné eskalace, jasné odpovědnosti." },
        url: null
      },
      {
        title: "OX Infrastructure Migration",
        banner: "/projects/oxpoint.webp",
        tags: ["Operations", "Support", "Infrastructure"],
        description: {
          en: "Migration of part of the delivery box infrastructure including device reinstallation and data migration. Field technician coordination, operational issue resolution and minimising impact on live operations.",
          cs: "Migrace části infrastruktury doručovacích boxů včetně reinstalace zařízení a migrace dat. Koordinace techniků v terénu, řešení provozních problémů a minimalizace dopadu na běžný provoz."
        },
        highlight: { en: "Stable operations even during infrastructure change.", cs: "Stabilní provoz i během infrastrukturní změny." },
        url: "https://www.oxpoint.cz/obecni-boxy"
      },
      {
        title: "Grail Series Tournament Circuit",
        banner: "/projects/grail.jpg",
        tags: ["Leadership", "Community", "Events", "Personal"],
        description: {
          en: "Organisation of a Magic: The Gathering tournament series including community building and event coordination — tournament planning, player communication and developing the competitive scene.",
          cs: "Organizace série turnajů Magic: The Gathering včetně budování komunity a koordinace akcí. Projekt zahrnuje plánování turnajů, komunikaci s hráči a rozvoj herní scény."
        },
        highlight: { en: "Community of 130+ unique players, 6 tournaments.", cs: "Komunita více než 130 unikátních hráčů, 6 turnajů." },
        url: "https://grailseries.cz/"
      },
      {
        title: "MtG DC ELO Ranking System",
        banner: "/projects/elo.png",
        tags: ["Data", "Community", "Project", "Personal"],
        description: {
          en: "Data ranking system for the Czech Duel Commander Magic: The Gathering community. Uses ELO rating to track long-term performance of 430+ active players.",
          cs: "Datový ranking systém pro českou komunitu hráčů formátu Duel Commander v Magic: The Gathering. Systém využívá ELO rating k dlouhodobému sledování výkonu více jak 430 aktivních hráčů."
        },
        highlight: { en: "Transparent ranking for the Czech DC community.", cs: "Transparentní ranking pro českou DC komunitu." },
        url: "https://elo.grailseries.cz/cz/"
      },
      {
        title: "Structured Network Infrastructure Deployment",
        banner: "/projects/network.jpg",
        tags: ["Infrastructure", "Network", "Operations"],
        description: {
          en: "Design and implementation of network infrastructure across an entire floor of a large office building — planning, structured cabling, racks, patch panels and physical installation.",
          cs: "Návrh a realizace síťové infrastruktury v rámci celého patra velké kancelářské budovy. Plánování rozmístění síťových prvků, návrh rozvodů strukturované kabeláže a fyzická realizace instalace včetně racků a patch panelů."
        },
        highlight: { en: "Installation of over 10 km of structured cabling.", cs: "Instalace a realizace více než 10 km strukturované kabeláže." },
        url: null
      }
    ]
  },

  skills: {
    headline: {
      en: "Skills that keep systems and teams running under pressure",
      cs: "Dovednosti, díky kterým systémy a týmy fungují i pod tlakem"
    },
    subheadline: {
      en: "My experience is grounded in operating systems in real environments — resolving incidents, stabilising production, and identifying weaknesses before they cause problems. I combine technical background with a process-driven approach to operations and risk management.",
      cs: "Moje zkušenosti stojí hlavně na provozu systémů v reálném prostředí – řešení incidentů, stabilizace produkce a hledání slabých míst dříve, než způsobí problém. Kombinuji technické zázemí s procesním přístupem k řízení provozu a rizik."
    },
    groups: [
      {
        title: { en: "Risk & Management", cs: "Risk & Management" },
        items: ["Major Incident Coordination", "SLA & Service Governance", "Change Management", "ITIL principy", "Stakeholder Communication"]
      },
      {
        title: { en: "Engineering & Operations", cs: "Inženýrství & Provoz" },
        items: ["Identity & Access Management (IBM ITIM / ISVG)", "Application Support (L1–L3)", "Incident Management", "SQL", "PowerShell", "Log Analysis", "Monitoring (Grafana)", "Linux (Red Hat)", "Windows Server"]
      },
      {
        title: { en: "Tools & Platforms", cs: "Nástroje & Platformy" },
        items: ["JIRA (workflow, SLA, automatizace)", "IBM DB2", "LDAP", "WebSphere (WAS)", "Ubiquiti", "Fortinet", "Confluence", "ServiceNow"]
      },
      {
        title: { en: "Risk Frameworks (orientation)", cs: "Risk Framework (orientace)" },
        items: ["ISO 27001", "ISO 27005", "RBAC / Access Governance", "24/7 On-call Operations"]
      }
    ],
    strengthsTitle: { en: "Core strengths", cs: "Silné stránky" },
    strengths: [
      { en: "Structured approach to incident resolution", cs: "Strukturovaný přístup k řešení incidentů" },
      { en: "Ability to identify operational risks", cs: "Schopnost identifikovat provozní rizika" },
      { en: "Clear communication in technical and non-technical teams", cs: "Jasná komunikace v technických i netechnických týmech" },
      { en: "Emphasis on documentation and knowledge sharing", cs: "Důraz na dokumentaci a sdílení znalostí" },
      { en: "Calm approach to problem-solving under pressure", cs: "Klidný přístup při řešení problémů pod tlakem" },
      { en: "Coordinating resolution across teams", cs: "Koordinace řešení napříč týmy" }
    ],
    goals: [
      { en: "IT Risk Manager", cs: "IT Risk Manager" },
      { en: "Operational Resilience / Incident Governance", cs: "Operational Resilience / Incident Governance" },
      { en: "Turnaround / Crisis Operations", cs: "Turnaround / Crisis Operations" }
    ]
  },

  contact: {
    headline: { en: "Let's build resilient systems together", cs: "Pojďme budovat resilientní systémy společně" },
    body: {
      en: "If you're looking for someone with experience in system operations, incident management and identity management who wants to grow further in IT Risk Management and operational resilience — I'd be happy to connect.",
      cs: "Pokud hledáte člověka se zkušeností z provozu systémů, incident managementu a identity managementu, který se chce dále rozvíjet v oblasti IT Risk Managementu a provozní odolnosti systémů, rád se s vámi spojím."
    },
    form: {
      name:    { en: "Name",         cs: "Jméno"  },
      email:   { en: "Email",        cs: "Email"  },
      phone:   { en: "Phone (optional)", cs: "Telefon (volitelné)" },
      message: { en: "Message",      cs: "Zpráva" },
      send:    { en: "Send message", cs: "Odeslat" },
      note: {
        en: "Your message will be saved securely.",
        cs: "Vaše zpráva bude bezpečně uložena."
      }
    }
  }
} as const;

export function t(obj: any, lang: Lang) {
  if (typeof obj === "string") return obj;
  if (obj?.[lang]) return obj[lang];
  return obj?.en ?? "";
}
