export type Lang = "en" | "cs";

export const profile = {
  name: "Matthew Grygar",
  roles: ["IT Risk Manager", "Systems Engineer", "Crisis & Turnaround Specialist"],
  location: { en: "Prague (Hybrid)", cs: "Praha (Hybrid)" },
  email: "matthew.grygar@seznam.cz",
  linkedin: "https://www.linkedin.com/in/matthew-grygar-214b94232/",
  cvUrl: "/cv.pdf"
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
      en: "Stability under pressure.",
      cs: "Stabilita pod tlakem."
    },
    body: {
      en: "Experience in senior support and operations management has taught me to stay calm, structured and decisive when incident impact rises and response time shrinks.\n\nMy professional trajectory leads from resolving operational incidents and stabilising production systems to a deeper focus on IT risk management, service availability and systematic operational improvement.\n\nI operate at the intersection of technical depth and business impact. I understand infrastructure, operations and access models — and am currently also working with Identity & Access Management solutions.",
      cs: "Zkušenosti ze seniorního supportu a provozního řízení mě naučily zůstat klidný, strukturovaný a rozhodný ve chvílích, kdy roste dopad incidentu a čas na reakci se zkracuje.\n\nMoje profesní trajektorie vede od řešení provozních incidentů a stabilizace produkčních systémů k hlubšímu zaměření na řízení IT rizik, dostupnost služeb a systematické zlepšování provozu.\n\nPohybuji se na průsečíku technické hloubky a business dopadu. Rozumím infrastruktuře, provozu i přístupovým modelům a v současnosti se věnuji také Identity & Access Management řešení."
    },
    pillarsTitle: { en: "What I bring", cs: "Co přináším" },
    pillars: [
      {
        en: "01 — Incident resolution under pressure: I have led incidents with full production impact, coordinated smaller teams of specialists across organisations and communicated progress to management. My role was mainly to maintain oversight, prioritise next steps and bring the system back to a stable state.",
        cs: "01 — Řešení incidentů pod tlakem: Vedl jsem řešení incidentů s dopadem na celou produkci, koordinoval menší týmy specialistů napříč organizacemi a komunikoval průběh řešení směrem k managementu. Mou rolí bylo hlavně držet přehled, prioritizovat další kroky a dovést systém zpět do stabilního stavu."
      },
      {
        en: "02 — Identifying operational risks: From my experience I know where weaknesses most often appear in IT operations — poorly configured roles, unclear escalation paths, insufficient segmentation or missing capacity. I try to name these problems and set up processes so they don't recur.",
        cs: "02 — Identifikace provozních rizik: Z mojí praxe vím, kde se v IT provozu nejčastěji objevují slabá místa, ať už jsou to špatně nastavené role, nejasné eskalační cesty, nedostatečná segmentace nebo chybějící kapacity. Snažím se tyto problémy pojmenovat a nastavit procesy tak, aby se neopakovaly."
      },
      {
        en: "03 — Decision-making in production: I have worked on systems with large numbers of users and devices — from a government eGovernment system to infrastructure of hundreds of devices in operation. In such environments you need to decide quickly, but also systematically.",
        cs: "03 — Rozhodování v produkčním provozu: Pracoval jsem na systémech s velkým počtem uživatelů i zařízení — od státního eGovernment systému až po infrastrukturu stovek zařízení v provozu. V takovém prostředí je potřeba rozhodovat rychle, ale zároveň systematicky."
      },
      {
        en: "04 — Communication between technology and business: I have experience communicating with both technical teams and management or customers. I try to explain technical problems clearly while keeping communication factual and transparent.",
        cs: "04 — Komunikace mezi technologií a business: Mám zkušenost s komunikací jak s technickými týmy, tak s managementem nebo zákazníky. Snažím se vysvětlovat technické problémy srozumitelně a zároveň držet komunikaci věcnou a transparentní."
      },
      {
        en: "05 — Focus on process and stability: I don't believe in one-off heroic fixes. Long-term system stability, in my view, rests on well-designed processes, clear responsibilities and the ability to learn from incidents.",
        cs: "05 — Důraz na proces a stabilitu: Nevěřím na jednorázová hrdinská řešení. Dlouhodobá stabilita systémů podle mě stojí na dobře nastavených procesech, jasných odpovědnostech a schopnosti poučit se z incidentů."
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
    }
  },

  experience: {
    headline: { en: "Experience forged in the hardest moments.", cs: "Zkušenosti vykované v nejtěžších chvílích." },
    items: [
      {
        role:    { en: "System Engineer – Identity & Access Management", cs: "System Engineer – Identity & Access Management" },
        company: "Trask",
        logo:    "/logo-trask.png",
        period:  { en: "Jan 2025 – present", cs: "01/2025 – současnost" },
        tags:    ["IAM", "IBM ITIM", "ISVG", "LDAP", "DB2", "WebSphere (WAS)", "Access Management", "Windows Server", "Linux"],
        bullets: {
          en: [
            "Implementation and operational stability of IAM solutions for enterprise clients in regulated sectors (finance, energy).",
            "Installation and configuration of IBM IAM stack: ITIM, ISVG, DB2, LDAP, WebSphere (WAS) on Windows Server.",
            "Upgrade of existing IAM environments, configuration of instances and integration links.",
            "Access governance: configuration of roles, access permissions, notifications (password changes, role assignments).",
            "Technical analysis in ISVG (Java component integrator) — error analysis, use-case scenario simulation.",
            "Collaboration with development team on GUI modifications; support for IAM-related incidents.",
            "Creation of reports from LDAP, testing of access scenarios, co-authoring implementation specifications."
          ],
          cs: [
            "Implementace a provozní stabilita IAM řešení u enterprise klientů v regulovaných sektorech (finance, energetika).",
            "Instalace a konfigurace IBM IAM stacku: ITIM, ISVG, DB2, LDAP, WebSphere (WAS) na Windows Serveru.",
            "Upgrade existujících IAM prostředí, konfigurace instancí a integračních vazeb.",
            "Access governance: konfigurace rolí, přístupových oprávnění, notifikací (změny hesel, role).",
            "Technická analýza v ISVG (integrátor Java komponent) — analýza chyb, simulace use-case scénářů.",
            "Spolupráce s vývojovým týmem při úpravách GUI; podpora incidentů souvisejících s IAM.",
            "Tvorba reportů z LDAP, testování přístupových scénářů, spolupráce na implementačních specifikacích."
          ]
        },
        impacts: {
          en: [
            "Implementation and stabilisation of IAM environments for enterprise clients",
            "Successful upgrades of complex IAM stacks",
            "Design and adjustment of access models",
            "Improved automation of implementation",
            "Support for secure identity and access management"
          ],
          cs: [
            "Implementace a stabilizace IAM prostředí u enterprise klientů",
            "Úspěšné upgrade komplexních IAM stacků",
            "Návrh a úprava přístupových modelů",
            "Zlepšení automatizace implementace",
            "Podpora bezpečné správy identit a přístupů"
          ]
        }
      },
      {
        role:    { en: "Senior Application Support Specialist", cs: "Senior Application Support Specialist" },
        company: "OX Point",
        logo:    "/logo-oxpoint.png",
        period:  { en: "Feb 2024 – Sep 2025", cs: "02/2024 – 09/2025" },
        tags:    ["Incident Management", "Production Operations", "JIRA", "SLA Management", "Linux", "Grafana", "SQL", "Log Analysis", "Cross-team Coordination"],
        bullets: {
          en: [
            "Primary technical link between operations and development — responsible for production stability, escalation management and incident coordination.",
            "L1/L2 support for 300+ devices in production; P1 incident management in cooperation with operations manager.",
            "Coordination of 5–10 specialists (DevOps, development, technicians) during critical outages; 24/7 on-call regime.",
            "Design of internal guidelines for L1/L2/L3 role division and capacity estimates for operational stability.",
            "Built JIRA project from scratch: severity model, SLA parameters, workflow automation, internal and external notifications.",
            "Linux (SSH), Grafana monitoring, SQL queries against production database, error pattern analysis.",
            "Support for migrations (OX Municipality, storage services); transparent management reporting."
          ],
          cs: [
            "Primární technický článek mezi provozní a vývojovou částí — odpovědný za stabilitu produkce, řízení eskalací a koordinaci incidentů.",
            "L1/L2 podpora více než 300 zařízení v produkci; řízení P1 incidentů ve spolupráci s provozním manažerem.",
            "Koordinace 5–10 specialistů (DevOps, vývoj, technici) při kritických výpadcích; 24/7 pohotovostní režim.",
            "Návrh interní směrnice pro rozdělení rolí L1/L2/L3 a odhad kapacitních potřeb pro zajištění stability provozu.",
            "Vybudování JIRA projektu od základů: severity model, SLA parametry, automatizace workflow, notifikace.",
            "Linux (SSH), Grafana monitoring, SQL dotazy v produkční databázi, analýza chybových vzorců.",
            "Podpora migrací (OX Municipality, úschovny); transparentní management reporting."
          ]
        },
        impacts: {
          en: [
            "Stabilisation of operations for 300+ devices",
            "Successful management of critical P1 incident",
            "Introduction of structured SLA and severity model",
            "Creation of internal L1–L3 operational model proposal",
            "Improved clarity of escalations and responsibilities",
            "Strengthened reporting transparency"
          ],
          cs: [
            "Stabilizace provozu 300+ zařízení",
            "Úspěšné zvládnutí kritického P1 incidentu",
            "Zavedení strukturovaného SLA a severity modelu",
            "Vytvoření interního návrhu provozního modelu L1–L3",
            "Zlepšení přehlednosti eskalací a odpovědností",
            "Posílení reportingové transparentnosti"
          ]
        }
      },
      {
        role:    { en: "Senior IT Platform Specialist", cs: "Senior IT Platform Specialist" },
        company: "NAKIT",
        logo:    "/logo-nakit.png",
        security: true,
        period:  { en: "May 2023 – Mar 2024", cs: "05/2023 – 03/2024" },
        tags:    ["Application Operations", "eGovernment", "Incident Coordination", "SLA Monitoring", "Log Analysis", "Linux", "Windows Server", "PowerShell"],
        bullets: {
          en: [
            "Operation and outage management of the Identita občana system — key service enabling online authentication of citizens with public administration (millions of users).",
            "Management of P1 incidents with high operational impact; chairing crisis calls during outages.",
            "Coordination of 5–10 technical specialists across organisations; ensuring rapid service recovery within SLA.",
            "Monitoring of application availability, incident recording, SLA parameter compliance control.",
            "Management of planned shutdowns; preparation of materials for management reporting.",
            "Application log analysis, data inconsistency investigation, collaboration with DB and infrastructure teams.",
            "Basic PowerShell scripting; work in Linux (Red Hat) and Windows environments."
          ],
          cs: [
            "Provoz a řízení výpadků systému Identita občana — klíčová služba umožňující online autentizaci občanů při komunikaci se státní správou (miliony uživatelů).",
            "Řízení P1 incidentů s vysokým provozním dopadem; vedení krizových callů při výpadcích.",
            "Koordinace 5–10 technických specialistů napříč organizacemi; zajištění rychlé obnovy provozu v souladu se SLA.",
            "Monitorování dostupnosti aplikací, evidence výpadků, kontrola plnění SLA parametrů.",
            "Řízení plánovaných odstávek; příprava podkladů pro management reporting.",
            "Analýza aplikačních logů, dohledávání nekonzistencí v datech, spolupráce s DB a infrastrukturními týmy.",
            "Základní skriptování v PowerShell; práce v Linux (Red Hat) a Windows prostředí."
          ]
        },
        impacts: {
          en: [
            "Management of high-impact incidents affecting end users",
            "Service recovery within minute-level SLA",
            "Stabilisation of communication processes during outages",
            "Improved coordination between technical partners",
            "Transparent incident reporting to management"
          ],
          cs: [
            "Řízení incidentů s vysokým dopadem na koncové uživatele",
            "Obnova provozu v režimu minutových SLA",
            "Stabilizace komunikačních procesů během výpadků",
            "Zlepšení koordinace mezi technickými partnery",
            "Transparentní reporting incidentů managementu"
          ]
        }
      },
      {
        role:    { en: "IT Infrastructure & Network Support", cs: "IT Infrastructure & Network Support" },
        company: "MyCom Solutions",
        logo:    "/logo-mycom.webp",
        period:  { en: "2021 – 2023", cs: "2021 – 2023" },
        tags:    ["IT Infrastructure", "Network Configuration", "VLAN", "Ubiquiti", "Fortinet", "Structured Cabling", "RDP Environments", "Hardware Support"],
        bullets: {
          en: [
            "Design and implementation of network solutions for commercial clients (offices, medical practices) — from VLAN segmentation to rack installation.",
            "Configuration of Ubiquiti (AP, switches) and basic Fortinet firewall; RDP access and endpoint device management.",
            "Incident management: on-site resolution of HW/SW incidents, thin client and RDP environment management, ticketing system.",
            "Complete structured cabling implementation — over 5 km of cable, patch panels, keystone modules.",
            "Internal projects: redesign of warehouse layout, preparation of internal security lab (Windows/Linux) for configuration testing and network scenario simulation."
          ],
          cs: [
            "Návrh a implementace síťových řešení u komerčních zákazníků (kanceláře, ordinace) — od VLAN segmentace po instalaci racků.",
            "Konfigurace Ubiquiti (AP, switche) a základní Fortinet firewall; správa RDP přístupů a koncových zařízení.",
            "Incident management: on-site řešení HW/SW incidentů, správa thin clients a RDP prostředí, ticketing systém.",
            "Kompletní realizace strukturované kabeláže — více než 5 km, patch panely, keystone moduly.",
            "Interní projekty: návrh nového rozložení skladu, příprava interního bezpečnostního lab (Windows/Linux) pro testování konfigurací a síťové scénáře."
          ]
        },
        impacts: {
          en: [
            "Network infrastructure implementation for multiple clients",
            "Over 5 km of structured cabling delivered",
            "Improved internal logistics efficiency (warehouse reorganisation)",
            "Stabilisation of client environments through rapid incident resolution",
            "Practical foundation in network segmentation and physical infrastructure"
          ],
          cs: [
            "Implementace kompletní síťové infrastruktury u několika zákazníků",
            "Realizace více než 5 km strukturované kabeláže",
            "Zvýšení efektivity interní logistiky (reorganizace skladu)",
            "Stabilizace provozního prostředí zákazníků prostřednictvím rychlého řešení incidentů",
            "Získání praktického základu v oblasti síťové segmentace a fyzické infrastruktury"
          ]
        }
      },
      {
        role:    { en: "IT Operations & Incident Coordination", cs: "IT Operations & Incident Coordination" },
        company: "Národní očkovací centrum ÚVN",
        logo:    "/logo-uvn.png",
        period:  { en: "2021", cs: "2021" },
        tags:    ["IT Operations", "Incident Support", "Database Administration", "Team Coordination", "Hardware Management", "Service Continuity", "High-load Operations"],
        bullets: {
          en: [
            "National Vaccination Centre at O2 Universum — highly exposed environment with 24/7 operations, extreme reputational and organisational sensitivity and extreme daily load.",
            "Daily preparation and distribution of dozens of mobile devices and workstations; ensuring network and endpoint infrastructure operability.",
            "Active monitoring and operational interventions during technical issues; management of MS SQL database system under high transactional load.",
            "Real-time resolution of database outages and related systems; analysis and correction of inconsistent or erroneous records.",
            "Leadership of a 5–7 person IT team: shift planning, responsibility allocation, establishment of operational standards and escalation procedures.",
            "Collaboration with external mobile application development team; UAT testing of new versions before production deployment.",
            "Identification of weaknesses in the vaccination process; proposals for optimising registration and administration workflow."
          ],
          cs: [
            "Národní očkovací centrum v O2 Universum — vysoce exponované prostředí s nepřetržitým provozem, extrémní reputační i organizační citlivostí a extrémní denní zátěží.",
            "Každodenní příprava a distribuce desítek mobilních zařízení a pracovních stanic; zajištění provozuschopnosti síťové a koncové infrastruktury.",
            "Aktivní monitoring a operativní zásahy při technických problémech; správa databázového systému MS SQL s vysokou transakční zátěží.",
            "Řešení výpadků databáze a souvisejících systémů v reálném čase; analýza a oprava nekonzistentních nebo chybových záznamů.",
            "Vedení 5–7 členného IT týmu: plánování směn, rozdělování odpovědností, nastavení provozních standardů a eskalačních postupů.",
            "Spolupráce s externím vývojovým týmem mobilní aplikace; UAT testování nových verzí před produkčním nasazením.",
            "Identifikace slabých míst v procesu očkování; návrhy zefektivnění workflow registrace a administrace."
          ]
        },
        impacts: {
          en: [
            "Support for uninterrupted operations over 131 days of crisis mode",
            "IT support for over 550,000 processed clients",
            "Database environment stabilisation under high load",
            "Reduction in operational downtime caused by technical incidents",
            "Streamlining of morning IT infrastructure preparation",
            "Contribution to optimisation of the vaccination and administration process"
          ],
          cs: [
            "Podpora nepřerušeného provozu během 131 dní krizového režimu",
            "Zajištění IT podpory pro více než 550 000 odbavených klientů",
            "Stabilizace databázového prostředí při vysoké zátěži",
            "Snížení provozních prostojů způsobených technickými incidenty",
            "Zefektivnění ranní přípravy IT infrastruktury",
            "Podíl na optimalizaci procesu očkování a administrace"
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
      en: "Skills that keep systems and teams running under pressure.",
      cs: "Dovednosti, díky kterým systémy a týmy fungují i pod tlakem."
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

  testimonials: {
    headline: { en: "Trusted by those who've seen the pressure.", cs: "Důvěra těch, kdo zažili tlak." },
    items: [
      {
        quote: {
          en: "Matthew is the person you want in the room when things get noisy — structured, calm, and always moving toward resolution.",
          cs: "Matthew je člověk, kterého chcete mít u incidentu — strukturovaný, klidný a vždy směřuje k řešení."
        },
        name: "Team Lead, Enterprise Ops"
      },
      {
        quote: {
          en: "He turns recurring pain into clean automation and documentation. The impact shows up in fewer tickets and better sleep.",
          cs: "Opakované bolesti převádí do automatizace a dokumentace. Dopad je vidět na menším počtu ticketů a lepším spánku."
        },
        name: "Product Owner, Platform"
      }
    ]
  },

  contact: {
    headline: { en: "Let's build resilient systems together.", cs: "Pojďme budovat resilientní systémy společně." },
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
