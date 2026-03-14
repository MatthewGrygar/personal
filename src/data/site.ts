export type Lang = "en" | "cs" | "de";

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
    home:       { en: "Home",       cs: "Domů",       de: "Startseite" },
    about:      { en: "About",      cs: "O mně",      de: "Über mich"  },
    experience: { en: "Experience", cs: "Zkušenosti", de: "Erfahrung"  },
    projects:   { en: "Projects",   cs: "Projekty",   de: "Projekte"   },
    skills:     { en: "Skills",     cs: "Dovednosti", de: "Fähigkeiten" },
    contact:    { en: "Contact",    cs: "Kontakt",    de: "Kontakt"    },
    pillars:    { en: "What I bring", cs: "Co přináším", de: "Was ich mitbringe" },
    cta:        { en: "Let's talk", cs: "Ozvěte se",  de: "Kontakt aufnehmen" }
  },

  hero: {
    title:        { en: "Engineering calm in the eye of the storm.", cs: "Klid inženýra ve středu bouře.", de: "Ruhe im Auge des Sturms." },
    subtitle:     { en: "IT Risk · Systems · Crisis Management",      cs: "IT Risk · Systémy · Krizový management", de: "IT-Risiko · Systeme · Krisenmanagement" },
    primaryCta:   { en: "Contact",      cs: "Kontakt",     de: "Kontakt"    },
    secondaryCta: { en: "Download CV",  cs: "Stáhnout CV", de: "CV herunterladen" },
    kicker:       { en: "Prague · Hybrid · Open to conversations", cs: "Praha · Hybrid · K dispozici pro konzultaci", de: "Prag · Hybrid · Offen für Gespräche" }
  },

  about: {
    headline: {
      en: "Stability under pressure",
      cs: "Stabilita pod tlakem",
      de: "Stabilität unter Druck"
    },
    body: {
      en: "I help organisations stabilise critical systems when incidents escalate and time pressure rises — and then set up processes so it doesn't happen again.\n\nMy experience leads from direct work in production operations and coordination of Major/P1 incidents, through identification of operational risks, to operation and management of Identity & Access Management solutions in regulated sectors.\n\nI bring a combination of technical depth and operational overview — I understand processes, systems and what breaks at 3am. Long-term I am heading towards IT Risk Management and operational risk management.",
      cs: "Pomáhám organizacím stabilizovat kritické systémy v době, kdy se incidenty stupňují a zvyšuje se časový tlak – a pak nastavit procesy, aby se to neopakovalo.\n\nMoje zkušenosti vedou od přímé práce v produkčních operacích a koordinace Major/P1 incidentů přes identifikaci provozních rizik až po provoz a správu Identity & Access Management řešení v regulovaných sektorech.\n\nPřináším kombinaci technické hloubky a provozního přehledu – rozumím procesům, systémům i tomu, co se pokazí ve tři ráno. Dlouhodobě směřuji k IT Risk Managementu a řízení provozních rizik",
      de: "Ich helfe Organisationen dabei, kritische Systeme zu stabilisieren, wenn Incidents eskalieren und der Zeitdruck steigt – und dann Prozesse einzurichten, damit sich das nicht wiederholt.\n\nMeine Erfahrung reicht von der direkten Arbeit in Produktionsbetrieben und der Koordination von Major/P1-Incidents über die Identifizierung operativer Risiken bis hin zum Betrieb und Management von Identity & Access Management-Lösungen in regulierten Sektoren.\n\nIch bringe eine Kombination aus technischer Tiefe und operativem Überblick mit – ich verstehe Prozesse, Systeme und was nachts um drei schiefläuft. Langfristig strebe ich IT Risk Management und operative Risikobewertung an."
    },
    pillarsTitle: { en: "What I bring", cs: "Co přináším", de: "Was ich mitbringe" },
    pillars: [
      {
        en: "01|Incident resolution under pressure|I have led Major incidents with full production impact — coordinating teams of specialists across organisations, managing escalation towards management and maintaining oversight of recovery priorities. The goal was always to bring the system back to a stable state quickly and without unnecessary side effects.",
        cs: "01|Řešení incidentů pod tlakem|Vedl jsem Major incidenty s dopadem na celou produkci – koordinoval jsem týmy specialistů napříč organizacemi, zajišťoval eskalaci směrem k managementu a udržoval přehled nad prioritami obnovy. Cílem bylo vždy dovést systém zpět do stabilního stavu rychle a bez zbytečných vedlejších dopadů.",
        de: "01|Incident-Bewältigung unter Druck|Ich habe Major-Incidents mit vollem Produktionseinfluss geleitet – Teams von Spezialisten über Organisationsgrenzen hinweg koordiniert, die Eskalation zum Management sichergestellt und den Überblick über die Wiederherstellungsprioritäten behalten. Das Ziel war immer, das System schnell und ohne unnötige Nebeneffekte in einen stabilen Zustand zurückzuführen."
      },
      {
        en: "02|Identifying and managing operational risks|From practice I know where weaknesses most often appear in IT operations — poorly configured access roles, unclear escalation paths, insufficient segmentation or missing capacity. I try to name these risks before they cause a problem and set up processes so they don't recur.",
        cs: "02|Identifikace a řízení provozních rizik|Z praxe vím, kde se v IT provozu nejčastěji objevují slabá místa – špatně nastavené přístupové role, nejasné eskalační cesty, nedostatečná segmentace nebo chybějící kapacity. Snažím se tato rizika pojmenovat dřív, než způsobí problém, a nastavit procesy tak, aby se neopakovala.",
        de: "02|Operative Risiken erkennen und steuern|Aus der Praxis weiß ich, wo in IT-Betrieben die häufigsten Schwachstellen auftreten – schlecht konfigurierte Zugriffsrollen, unklare Eskalationswege, unzureichende Segmentierung oder fehlende Kapazitäten. Ich versuche, diese Risiken zu benennen, bevor sie ein Problem verursachen, und Prozesse so einzurichten, dass sie sich nicht wiederholen."
      },
      {
        en: "03|Decision-making in critical operations|I have worked on systems with high availability requirements — from a government eGovernment system to infrastructure of hundreds of devices in operation. In such environments you need to decide quickly, systematically and with awareness of the impact of every step on service stability.",
        cs: "03|Rozhodování v kritickém provozu|Pracoval jsem na systémech s vysokými nároky na dostupnost – od státního eGovernment systému po infrastrukturu stovek zařízení v provozu. V takovém prostředí je potřeba rozhodovat rychle, systematicky a s vědomím dopadu každého kroku na stabilitu služby.",
        de: "03|Entscheidungen im kritischen Betrieb|Ich habe an Systemen mit hohen Verfügbarkeitsanforderungen gearbeitet – vom staatlichen eGovernment-System bis hin zur Infrastruktur von Hunderten von Geräten im Betrieb. In solchen Umgebungen muss man schnell, systematisch und mit Bewusstsein für die Auswirkungen jedes Schrittes auf die Dienststabilität entscheiden."
      },
      {
        en: "04|Communication across technology and business|I have experience communicating with both technical teams and management and customers. I can translate technical problems into a business context — clearly, factually and without unnecessary distortion.",
        cs: "04|Komunikace napříč technologií a businessem|Mám zkušenost s komunikací jak s technickými týmy, tak s managementem a zákazníky. Technické problémy dokážu přeložit do business kontextu – srozumitelně, věcně a bez zbytečného zkreslení.",
        de: "04|Kommunikation zwischen Technologie und Business|Ich habe Erfahrung in der Kommunikation sowohl mit technischen Teams als auch mit Management und Kunden. Ich kann technische Probleme in einen Business-Kontext übersetzen – klar, sachlich und ohne unnötige Verzerrung."
      },
      {
        en: "05|Process as the foundation of stability|I don't believe in one-off heroic fixes. Long-term system stability rests on well-designed processes, clearly defined responsibilities and the ability to learn from every incident — that is the foundation on which IT Risk Management works.",
        cs: "05|Proces jako základ stability|Nevěřím na jednorázová hrdinská řešení. Dlouhodobá stabilita systémů stojí na dobře nastavených procesech, jasně definovaných odpovědnostech a schopnosti poučit se z každého incidentu – to je základ, na kterém IT Risk Management funguje.",
        de: "05|Prozess als Grundlage der Stabilität|Ich glaube nicht an einmalige heroische Lösungen. Langfristige Systemstabilität beruht auf gut gestalteten Prozessen, klar definierten Verantwortlichkeiten und der Fähigkeit, aus jedem Incident zu lernen – das ist die Grundlage, auf der IT Risk Management funktioniert."
      }
    ],
    toolboxTitle: { en: "Toolbox", cs: "Toolbox", de: "Toolbox" },
    toolbox: [
      "IAM / IdM", "Incident & Major Incident Mgmt", "SLA & Service Governance",
      "Risk Frameworks (ISO 27001 / 27005)", "Linux / Windows", "SQL", "JIRA",
      "Monitoring & Log Analysis (Grafana)", "ITIL principy", "PowerShell"
    ],
    currently: {
      label: { en: "Currently", cs: "Aktuálně", de: "Aktuell" },
      value: {
        en: "System Engineer – Identity & Access Management (Trask, 2025–present)",
        cs: "System Engineer – Identity & Access Management (Trask, 2025–současnost)",
        de: "System Engineer – Identity & Access Management (Trask, 2025–heute)"
      }
    },
    direction: {
      en: "Going forward, I want to focus on IT Risk Management — identifying and managing operational risks, IT service governance and building processes that protect organisations from outages even in demanding situations.\nIt makes sense to me to work at the intersection of technology, risk and business — where every technical decision has a direct impact on operational stability and security.",
      cs: "Do budoucna se chci zaměřit na IT Risk Management – identifikaci a řízení provozních rizik, governance IT služeb a budování procesů, které organizaci chrání před výpadky i v náročných situacích.\nDává mi smysl pracovat na pomezí technologie, rizika a businessu – kde technické rozhodnutí má přímý dopad na stabilitu a bezpečnost provozu.",
      de: "Künftig möchte ich mich auf IT Risk Management konzentrieren – Identifizierung und Management operativer Risiken, IT-Service-Governance und den Aufbau von Prozessen, die Organisationen auch in anspruchsvollen Situationen vor Ausfällen schützen.\nEs macht mir Sinn, an der Schnittstelle von Technologie, Risiko und Business zu arbeiten – wo jede technische Entscheidung direkten Einfluss auf operative Stabilität und Sicherheit hat."
    }
  },

  experience: {
    headline: {
      en: "Experience from live operations — where failure is not an option",
      cs: "Zkušenosti z ostrého provozu, kde selhání není možnost",
      de: "Erfahrung aus dem Live-Betrieb — wo Ausfall keine Option ist"
    },
    items: [
      {
        role:    { en: "System Engineer – Identity & Access Management", cs: "System Engineer – Identity & Access Management" },
        company: "Trask",
        logo:    "/logo-trask.png",
        security: true,
        securityText: {
          en: "Work on projects within environments of regulated financial institutions. Emphasis was placed on process accuracy, audit trail of every change and zero tolerance for security deviations.",
          cs: "Práce na projektech v rámci prostředí regulovaných finančních institucí. Byl kladen důraz na přesnost v procesech, audit trail každé změny a nulovou toleranci k bezpečnostním odchylkám.",
          de: "Arbeit an Projekten in Umgebungen regulierter Finanzinstitutionen. Besonderer Wert wurde auf Prozessgenauigkeit, Audit-Trail jeder Änderung und Nulltoleranz gegenüber Sicherheitsabweichungen gelegt."
        },
        period:  { en: "Jan 2025 – present", cs: "01/2025 – současnost", de: "Jan 2025 – heute" },
        tags:    ["IAM", "IBM ITIM", "ISVG", "LDAP", "DB2", "WebSphere (WAS)", "Access Management", "Windows Server", "Linux"],
        description: {
          en: "Operation and management of IAM solutions for enterprise clients in regulated sectors (finance, energy).",
          cs: "Provoz a správa IAM řešení u enterprise klientů v regulovaných sektorech (finance, energetika).",
          de: "Betrieb und Verwaltung von IAM-Lösungen für Enterprise-Kunden in regulierten Sektoren (Finanzen, Energie)."
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
          ],
          de: [
            "Installation und Konfiguration des IBM IAM-Stacks: ITIM, ISVG, DB2, LDAP, WebSphere (WAS) auf Windows Server.",
            "Upgrade bestehender IAM-Umgebungen, Konfiguration von Instanzen und Integrationsverbindungen.",
            "Access Governance: Konfiguration von Rollen, Zugriffsberechtigungen und Benachrichtigungen (Passwortänderungen, Rollenzuweisungen).",
            "Technische Analyse in ISVG (Java-Komponenten-Integrator) – Fehleranalyse, Simulation von Use-Case-Szenarien.",
            "Zusammenarbeit mit dem Entwicklungsteam bei GUI-Anpassungen; Unterstützung bei IAM-bezogenen Incidents.",
            "Erstellung von Reports aus LDAP, Testen von Zugriffsszenarien, Mitwirkung an Implementierungsspezifikationen."
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
          ],
          de: [
            "Komplette Installation und Inbetriebnahme des IBM IAM-Stacks in der Produktionsumgebung",
            "Erfolgreiche Upgrades komplexer IAM-Umgebungen für Enterprise-Kunden",
            "Unterstützung sicherer Identitäts- und Zugriffsverwaltung in regulierten Sektoren"
          ]
        }
      },
      {
        role:    { en: "Senior Application Support Specialist", cs: "Senior Application Support Specialist" },
        company: "OX Point",
        logo:    "/logo-oxpoint.png",
        period:  { en: "Feb 2024 – Sep 2025", cs: "02/2024 – 09/2025", de: "Feb 2024 – Sep 2025" },
        tags:    ["Incident Management", "Production Operations", "JIRA", "SLA Management", "Linux", "Grafana", "SQL", "Log Analysis", "Cross-team Coordination"],
        description: {
          en: "Primary technical link between operations and development — responsible for production stability, escalation management and incident coordination with impact on critical operations.",
          cs: "Primární technický článek mezi provozní a vývojovou částí - odpovědný za stabilitu produkce, řízení eskalací a koordinaci incidentů s dopadem na kritický provoz.",
          de: "Primäre technische Schnittstelle zwischen Betrieb und Entwicklung – verantwortlich für Produktionsstabilität, Eskalationsmanagement und Incident-Koordination mit Auswirkung auf den kritischen Betrieb."
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
          ],
          de: [
            "Management von P1/Major-Incidents in einer Umgebung mit 300+ Geräten in Produktion; Eskalationskoordination in Zusammenarbeit mit dem Betriebsleiter.",
            "Koordination des Spezialistenteams (DevOps, Entwicklung, Techniker) bei kritischen Ausfällen im 24/7-Bereitschaftsmodus.",
            "Entwurf interner Richtlinien für L1/L2/L3-Aufgabenteilung, Eskalationswege und Kapazitätsplanung zur Sicherstellung der Dienstverfügbarkeit.",
            "JIRA-Projekt von Grund auf aufgebaut: Severity-Modell, SLA-Parameter, Workflow-Automatisierung und Benachrichtigungen – als Grundlage für messbares Betriebsmanagement.",
            "Überwachung und Analyse von Fehlermustern (Grafana, SQL, Linux/SSH) zur frühzeitigen Identifizierung operativer Risiken.",
            "Unterstützung bei kritischen Infrastrukturmigrationen; Management-Reporting über Incident-Fortschritt und Betriebsstatus."
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
          ],
          de: [
            "Stabilisierung von 300+ Geräten in Produktion",
            "Erfolgreiche Bewältigung kritischer P1-Incidents",
            "Einführung eines strukturierten SLA- und Severity-Modells",
            "Entwurf des Betriebsmodells L1–L3 inklusive Eskalationswegen und Verantwortlichkeiten",
            "Verbesserte Klarheit bei Eskalationen und operativer Governance",
            "Gestärkte Reporting-Transparenz gegenüber dem Management"
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
          cs: "Práce v prostředí s přísnými bezpečnostními požadavky a státní regulací. Byl kladen důraz na procesní disciplínu, správu přístupů a vědomí provozních rizik.",
          de: "Arbeit in einem Umfeld mit strengen Sicherheitsanforderungen und staatlicher Regulierung. Besonderer Wert wurde auf Prozessdisziplin, Zugangsverwaltung und Bewusstsein für operative Risiken gelegt."
        },
        period:  { en: "May 2023 – Mar 2024", cs: "05/2023 – 03/2024", de: "Mai 2023 – Mär 2024" },
        tags:    ["Application Operations", "eGovernment", "Incident Coordination", "SLA Monitoring", "Log Analysis", "Linux", "Windows Server", "PowerShell"],
        description: {
          en: "Operation and availability management of the Identita občana system — critical state infrastructure enabling online authentication of millions of citizens in communication with public administration.",
          cs: "Provoz a řízení dostupnosti systému Identita občana – kritické státní infrastruktury umožňující online autentizaci milionů občanů při komunikaci se státní správou.",
          de: "Betrieb und Verfügbarkeitsmanagement des Systems Identita občana – kritische staatliche Infrastruktur zur Online-Authentifizierung von Millionen Bürgern bei der Kommunikation mit Behörden."
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
          ],
          de: [
            "Management von P1/Major-Incidents mit hohem Einfluss auf Endnutzer; Leitung von Krisenkonferenzen und Koordination der Dienstwiederherstellung im Minutentakt-SLA-Modus.",
            "Koordination mehrerer Teams technischer Spezialisten über Organisationsgrenzen hinweg bei kritischen Ausfällen – mit Schwerpunkt auf schneller Wiederherstellung und Minimierung des Einflusses auf die Dienstverfügbarkeit.",
            "Überwachung der Anwendungsverfügbarkeit, Erfassung und Analyse von Ausfällen, SLA-Einhaltungskontrolle und Identifizierung wiederkehrender operativer Risiken.",
            "Management von geplanten Abschaltungen inklusive Vorbereitung von Management-Reporting-Unterlagen und Kommunikation der Auswirkungen an Stakeholder.",
            "Analyse von Anwendungsprotokollen und Dateninkonsistenzen in Zusammenarbeit mit DB- und Infrastrukturteams.",
            "Grundlegendes PowerShell-Scripting; Arbeit in Linux (Red Hat) und Windows Server-Umgebungen."
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
          ],
          de: [
            "Management von Incidents mit hohem Einfluss auf Millionen von Endnutzern",
            "Wiederherstellung kritischer staatlicher Infrastruktur im Minutentakt-SLA-Modus",
            "Stabilisierung von Eskalations- und Kommunikationsprozessen während Ausfällen",
            "Verbesserte Koordination zwischen technischen Partnern über Organisationsgrenzen",
            "Transparentes Incident-Reporting gegenüber dem Management"
          ]
        }
      },
      {
        role:    { en: "IT Infrastructure & Network Support", cs: "IT Infrastructure & Network Support" },
        company: "MyCom Solutions",
        logo:    "/logo-mycom.webp",
        period:  { en: "2021 – 2023", cs: "2021 – 2023", de: "2021 – 2023" },
        tags:    ["IT Infrastructure", "Network Configuration", "VLAN", "Ubiquiti", "Fortinet", "Structured Cabling", "RDP Environments", "Hardware Support"],
        description: {
          en: "Design and implementation of network solutions for commercial clients — from initial requirements analysis to physical realisation and environment security.",
          cs: "Návrh a implementace síťových řešení u komerčních zákazníků – od počáteční analýzy požadavků po fyzickou realizaci a zabezpečení prostředí.",
          de: "Entwurf und Implementierung von Netzwerklösungen für gewerbliche Kunden – von der ersten Anforderungsanalyse bis zur physischen Realisierung und Absicherung der Umgebung."
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
          ],
          de: [
            "Entwurf und Implementierung von Netzwerkinfrastruktur inklusive VLAN-Segmentierung, Konfiguration von Ubiquiti (AP, Switches) und Fortinet Firewall – mit Schwerpunkt auf Sicherheit und Zugriffstrennung.",
            "Verwaltung von RDP-Zugängen und Endgeräten; Incident Management inklusive Vor-Ort-Lösung von HW/SW-Incidents und Ticketing.",
            "Komplette Implementierung von Strukturverkabelung über 5 km – Patch-Panels, Keystone-Module, Rack-Installation.",
            "Vorbereitung eines internen Sicherheitslabors (Windows/Linux) zum Testen von Netzwerkkonfigurationen und Sicherheitsszenarien."
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
          ],
          de: [
            "Implementierung vollständiger Netzwerkinfrastruktur für mehrere Kunden inklusive Sicherheitssegmentierung",
            "Lieferung von mehr als 5 km Strukturverkabelung",
            "Praktische Grundlage in Netzwerksegmentierung, Zugangsverwaltung und physischer Infrastruktur",
            "Stabilisierung der Betriebsumgebungen der Kunden durch schnelle Incident-Lösung"
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
          cs: "Vysoce exponované prostředí s nepřetržitým provozem, zpracováním osobních zdravotních dat a spoluprací s Armádou ČR v režimu omezeného přístupu.",
          de: "Hochexponiertes Umfeld mit kontinuierlichem Betrieb, Verarbeitung persönlicher Gesundheitsdaten und Zusammenarbeit mit dem Tschechischen Militär im Modus eingeschränkten Zugangs."
        },
        period:  { en: "2021", cs: "2021", de: "2021" },
        tags:    ["IT Operations", "Incident Support", "Database Administration", "Team Coordination", "Hardware Management", "Service Continuity", "High-load Operations"],
        description: {
          en: "Operation of IT infrastructure of the National Vaccination Centre at O2 Universum.",
          cs: "Provoz IT infrastruktury Národního očkovacího centra v O2 Universum.",
          de: "Betrieb der IT-Infrastruktur des Nationalen Impfzentrums in der O2 Universum."
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
          ],
          de: [
            "Sicherstellung der kontinuierlichen Verfügbarkeit der IT-Infrastruktur – tägliche Vorbereitung und Betrieb von Dutzenden Geräten und Workstations in einer Umgebung mit Nulltoleranz für Ausfälle.",
            "Überwachung und operative Lösung von Incidents in Echtzeit; Verwaltung der MS SQL-Datenbank unter hoher Transaktionslast inklusive Analyse und Korrektur von Dateninkonsistenzen.",
            "Leitung eines kleinen IT-Teams: Schichtplanung, Aufgabenverteilung, Einrichtung von Eskalationsverfahren und Betriebsstandards.",
            "Verarbeitung und Schutz sensibler persönlicher Gesundheitsdaten gemäß den Betriebsanforderungen einer Umgebung mit eingeschränktem Zugang (Zusammenarbeit mit dem Tschechischen Militär).",
            "Zusammenarbeit mit dem externen Entwicklungsteam; UAT-Testing neuer Versionen vor dem Produktiveinsatz.",
            "Identifizierung von Schwachstellen in Betriebsprozessen und Vorschläge zur Workflow-Optimierung."
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
          ],
          de: [
            "Unterbrechungsfreier Betrieb während 131 Tagen im Krisenmodus",
            "IT-Unterstützung für mehr als 550.000 abgefertigte Kunden",
            "Stabilisierung der Datenbankumgebung unter hoher Transaktionslast",
            "Betrieb in einer Umgebung mit eingeschränktem Zugang und Verarbeitung sensibler Gesundheitsdaten",
            "Reduzierung von Betriebsausfällen und Optimierung der morgendlichen Infrastrukturvorbereitung"
          ]
        }
      }
    ]
  },

  projects: {
    headline: { en: "Selected work & personal initiatives", cs: "Vybrané projekty a osobní iniciativy", de: "Ausgewählte Projekte & persönliche Initiativen" },
    items: [
      {
        title: "JIRA Service Workflow Design",
        banner: "/projects/jira.jpg",
        tags: ["JIRA", "SUPPORT", "OPERATIONS", "GOVERNANCE"],
        description: {
          en: "Complete design and setup of a JIRA project for operational support — severity model, SLA parameters, workflow automation, role and user group configuration, including a clear request interface for end users.",
          cs: "Kompletní návrh a nastavení JIRA projektu pro provozní podporu – severity model, SLA parametry, automatizace workflow, konfigurace rolí a uživatelských skupin, včetně přehledného rozhraní pro zadávání požadavků koncovými uživateli.",
          de: "Vollständiger Entwurf und Aufbau eines JIRA-Projekts für den Betriebssupport – Severity-Modell, SLA-Parameter, Workflow-Automatisierung, Rollen- und Benutzergruppenkonfiguration, inklusive einer übersichtlichen Anfrageoberfläche für Endnutzer."
        },
        highlight: { en: "Measurable operations management from submission to resolution.", cs: "Měřitelné řízení provozu od zadání po vyřešení.", de: "Messbares Betriebsmanagement von der Anfrage bis zur Lösung." },
        url: null
      },
      {
        title: "SLA & Incident Management Model",
        banner: "/projects/sla.jpg",
        tags: ["SUPPORT", "RISK", "OPERATIONS", "GOVERNANCE"],
        description: {
          en: "Internal design of an operational support model including L1/L2/L3 responsibility division, escalation paths, SLA parameters and severity levels — as the basis for operational governance and service availability risk management.",
          cs: "Interní návrh provozního modelu podpory včetně rozdělení odpovědností L1/L2/L3, eskalačních cest, SLA parametrů a severity úrovní – jako základ pro provozní governance a řízení rizik dostupnosti služeb.",
          de: "Interner Entwurf eines Betriebssupportmodells inklusive L1/L2/L3-Aufgabenteilung, Eskalationswegen, SLA-Parametern und Severity-Stufen – als Grundlage für operative Governance und Service-Verfügbarkeits-Risikomanagement."
        },
        highlight: { en: "Clear escalations, defined responsibilities, measurable governance.", cs: "Jasné eskalace, definované odpovědnosti, měřitelná governance.", de: "Klare Eskalationen, definierte Verantwortlichkeiten, messbare Governance." },
        url: null
      },
      {
        title: "Risk Frameworks – ISO 27001 & ISO 27005",
        banner: "/projects/network.jpg",
        tags: ["RISK", "SECURITY", "FRAMEWORKS", "SELF-STUDY"],
        description: {
          en: "Independent study of ISO 27001 and ISO 27005 as reference frameworks for IT risk management and information security. I actively applied findings when identifying operational risks and designing control mechanisms in production environments.",
          cs: "Samostatné studium ISO 27001 a ISO 27005 jako referenčních rámců pro řízení IT rizik a informační bezpečnosti. Poznatky jsem aktivně aplikoval při identifikaci provozních rizik a návrhu kontrolních mechanismů v produkčním prostředí.",
          de: "Selbststudium von ISO 27001 und ISO 27005 als Referenzrahmen für IT-Risikomanagement und Informationssicherheit. Die gewonnenen Erkenntnisse habe ich aktiv bei der Identifizierung operativer Risiken und dem Entwurf von Kontrollmechanismen in Produktionsumgebungen angewendet."
        },
        highlight: { en: "Practical knowledge of ISO 27001 & ISO 27005 — certification planned.", cs: "Praktická znalost ISO 27001 a ISO 27005 – certifikace v plánu.", de: "Praktische Kenntnisse von ISO 27001 & ISO 27005 – Zertifizierung geplant." },
        url: null
      },
      {
        title: "Incident Post-Mortem Framework",
        banner: "/projects/sla.jpg",
        tags: ["RISK", "OPERATIONS", "INCIDENTS", "PROCESS"],
        description: {
          en: "Design of a structure for post-incident analysis — root causes, escalation flow, impacts, lessons learned and preventive measures. Based on experience coordinating Major/P1 incidents and principles of continuous IT operations improvement.",
          cs: "Návrh struktury pro analýzu incidentů po jejich vyřešení – příčiny, průběh eskalace, dopady, poučení a preventivní opatření. Vychází z praxe koordinace Major/P1 incidentů a principů kontinuálního zlepšování IT provozu.",
          de: "Entwurf einer Struktur für die Post-Incident-Analyse – Ursachen, Eskalationsverlauf, Auswirkungen, Lessons Learned und Präventivmaßnahmen. Basiert auf der Erfahrung der Koordination von Major/P1-Incidents und den Prinzipien der kontinuierlichen IT-Betriebsverbesserung."
        },
        highlight: { en: "Systematic approach to learning from incidents and preventing recurrence.", cs: "Systematický přístup k učení se z incidentů a prevenci opakování.", de: "Systematischer Ansatz zum Lernen aus Incidents und zur Verhinderung von Wiederholungen." },
        url: null
      },
      {
        title: "Grail Series Tournament Circuit",
        banner: "/projects/grail.jpg",
        tags: ["LEADERSHIP", "COMMUNITY", "EVENTS", "PERSONAL"],
        description: {
          en: "Personal initiative — complete organisation of a Magic: The Gathering tournament series from concept to execution. Includes event planning and production, media communication and promo, partner and sponsor negotiations, community building and long-term development of the competitive scene.",
          cs: "Osobní iniciativa – kompletní organizace série turnajů Magic: The Gathering od první myšlenky po realizaci. Zahrnuje plánování a produkci akcí, mediální komunikaci a promo, vyjednávání s partnery a sponzory, budování komunity a dlouhodobý rozvoj herní scény.",
          de: "Persönliche Initiative – vollständige Organisation einer Magic: The Gathering Turnierserie von der ersten Idee bis zur Umsetzung. Umfasst Eventplanung und -produktion, Medienkommunikation und Promo, Partner- und Sponsorenverhandlungen, Community-Aufbau und langfristige Entwicklung der Wettkampfszene."
        },
        highlight: { en: "Community of 130+ unique players, 6 tournaments — all managed independently.", cs: "Komunita 130+ unikátních hráčů, 6 turnajů – vše řízeno samostatně.", de: "Community von 130+ einzigartigen Spielern, 6 Turniere – alles eigenständig organisiert." },
        url: "https://grailseries.cz/"
      },
      {
        title: "MtG DC ELO Ranking System",
        banner: "/projects/elo.png",
        tags: ["DATA", "VIBE CODING", "PROJECT", "PERSONAL"],
        description: {
          en: "Personal project — complete design and development of a web application for the Czech Duel Commander community. Includes vibe coding the entire frontend, data architecture design, data layer integration and ELO algorithm implementation for long-term performance tracking of 430+ active players.",
          cs: "Osobní projekt – kompletní návrh a vývoj webové aplikace pro českou komunitu Duel Commander hráčů. Zahrnuje vibe coding celého frontendu, návrh datové architektury, napojení na datovou vrstvu a implementaci ELO algoritmu pro dlouhodobé sledování výkonu 430+ aktivních hráčů.",
          de: "Persönliches Projekt – vollständiger Entwurf und Entwicklung einer Webanwendung für die tschechische Duel Commander-Community. Umfasst Vibe-Coding des gesamten Frontends, Datenbankarchitektur-Design, Datenebenen-Integration und ELO-Algorithmus-Implementierung zur langfristigen Leistungsverfolgung von 430+ aktiven Spielern."
        },
        highlight: { en: "Transparent ranking for the Czech DC community — from design to production.", cs: "Transparentní ranking pro českou DC komunitu – od návrhu po produkci.", de: "Transparentes Ranking für die tschechische DC-Community – vom Entwurf bis zur Produktion." },
        url: "https://elo.grailseries.cz/cz/"
      }
    ]
  },

  skills: {
    headline: {
      en: "Skills that keep systems and teams running under pressure",
      cs: "Dovednosti, díky kterým systémy a týmy fungují i pod tlakem",
      de: "Fähigkeiten, die Systeme und Teams auch unter Druck am Laufen halten"
    },
    subheadline: {
      en: "My experience is built on operating systems in real environments — incident management, identifying operational risks and building processes that protect organisations from outages. I combine technical background with risk thinking and operational governance.",
      cs: "Moje zkušenosti stojí na provozu systémů v reálném prostředí – řízení incidentů, identifikace provozních rizik a budování procesů, které organizaci chrání před výpadky. Kombinuji technické zázemí s risk myšlením a provozní governance.",
      de: "Meine Erfahrung basiert auf dem Betrieb von Systemen in realen Umgebungen – Incident Management, Identifizierung operativer Risiken und Aufbau von Prozessen, die Organisationen vor Ausfällen schützen. Ich kombiniere technisches Hintergrundwissen mit Risikodenken und operativer Governance."
    },
    groups: [
      {
        title: { en: "Risk & Governance", cs: "Risk & Governance", de: "Risk & Governance" },
        items: ["Operational Risk Awareness", "Major Incident Coordination", "SLA & Service Governance", "Change Management", "Operational Resilience", "ITIL", "Stakeholder Communication"]
      },
      {
        title: { en: "Risk Frameworks", cs: "Risk Frameworks", de: "Risk Frameworks" },
        items: ["ISO 27001", "ISO 27005", "RBAC / Access Governance"]
      },
      {
        title: { en: "Engineering & Operations", cs: "Inženýrství & Provoz", de: "Engineering & Betrieb" },
        items: ["Identity & Access Management (IBM ITIM / ISVG)", "Incident Management", "Log Analysis", "Monitoring (Grafana)", "SQL", "PowerShell", "Linux (Red Hat)", "Windows Server"]
      },
      {
        title: { en: "Tools & Platforms", cs: "Nástroje & Platformy", de: "Tools & Plattformen" },
        items: ["JIRA (workflow, SLA, automatizace, administrace)", "IBM DB2", "LDAP", "WebSphere (WAS)", "Confluence", "ServiceNow"]
      }
    ],
    strengthsTitle: { en: "Core strengths", cs: "Silné stránky", de: "Kernstärken" },
    strengths: [
      { en: "I identify operational risks before they cause a problem", cs: "Identifikuji provozní rizika dříve, než způsobí problém", de: "Ich erkenne operative Risiken, bevor sie zum Problem werden" },
      { en: "I manage incidents and escalations under pressure in a structured way", cs: "Strukturovaně řídím incidenty a eskalace pod tlakem", de: "Ich manage Incidents und Eskalationen unter Druck strukturiert" },
      { en: "I can translate technical problems into a business context", cs: "Technické problémy dokážu přeložit do business kontextu", de: "Ich kann technische Probleme in einen Business-Kontext übersetzen" },
      { en: "I emphasise process discipline and clearly defined responsibilities", cs: "Dbám na procesní disciplínu a jasně definované odpovědnosti", de: "Ich lege Wert auf Prozessdisziplin und klar definierte Verantwortlichkeiten" },
      { en: "In critical situations I remain calm and decisive", cs: "V kritických situacích zůstávám klidný a rozhodný", de: "In kritischen Situationen bleibe ich ruhig und entschlossen" },
      { en: "I coordinate resolution across teams and organisations", cs: "Koordinuji řešení napříč týmy a organizacemi", de: "Ich koordiniere die Lösungsfindung über Teams und Organisationen hinweg" }
    ],
    goals: [
      { en: "IT Risk Manager", cs: "IT Risk Manager", de: "IT Risk Manager" },
      { en: "Operational Resilience / Incident Governance", cs: "Operational Resilience / Incident Governance", de: "Operational Resilience / Incident Governance" },
      { en: "IT Security & Compliance", cs: "IT Security & Compliance", de: "IT Security & Compliance" }
    ]
  },

  contact: {
    headline: { en: "Let's manage risks before they become incidents.", cs: "Pojďme řídit rizika dřív, než se stanou incidenty.", de: "Risiken managen, bevor sie zu Incidents werden." },
    body: {
      en: "If you're looking for someone with hands-on experience in incident management and IT risk — whether for an IT Risk Manager role or as an experienced member of an operations team — feel free to reach out.",
      cs: "Pokud hledáte člověka s provozní praxí v řízení incidentů a IT rizicích – ať už do role IT Risk Managera, nebo zkušeného člena provozního týmu – napište mi.",
      de: "Wenn Sie jemanden mit praktischer Erfahrung im Incident Management und IT-Risiko suchen – ob für eine IT Risk Manager-Rolle oder als erfahrenes Mitglied eines Betriebsteams – melden Sie sich gerne."
    },
    form: {
      name:    { en: "Name",         cs: "Jméno",  de: "Name"  },
      email:   { en: "Email",        cs: "Email",  de: "E-Mail" },
      phone:   { en: "Phone (optional)", cs: "Telefon (volitelné)", de: "Telefon (optional)" },
      message: { en: "Message",      cs: "Zpráva", de: "Nachricht" },
      send:    { en: "Send message", cs: "Odeslat", de: "Nachricht senden" },
      note: {
        en: "Your message will be saved securely.",
        cs: "Vaše zpráva bude bezpečně uložena.",
        de: "Ihre Nachricht wird sicher gespeichert."
      }
    }
  }
} as const;

export function t(obj: any, lang: Lang) {
  if (typeof obj === "string") return obj;
  if (obj?.[lang]) return obj[lang];
  if (lang === "de" && obj?.["de"]) return obj["de"];
  return obj?.en ?? "";
}
