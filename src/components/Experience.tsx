"use client";
import { useState } from "react";

function ShieldIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2.5 L4 5.5 V12 C4 16.8 7.4 20.5 12 21.5 C16.6 20.5 20 16.8 20 12 V5.5 L12 2.5 Z" />
      <path d="M9 12 L11 14 L15.5 9.5" />
    </svg>
  );
}

const EXP = [
  {
    period: "Jan 2025 — Present", chip: "CURRENT",
    co: "Trask", logo: "/logo-trask.png",
    role: "System Engineer – Identity & Access Management",
    desc: "Operation and management of IAM solutions for enterprise clients in regulated sectors (finance, energy).",
    bullets: [
      "Installation and configuration of IBM IAM stack: ITIM, ISVG, DB2, LDAP, WebSphere (WAS) on Windows Server.",
      "Upgrade of existing IAM environments, configuration of instances and integration links.",
      "Access governance: configuration of roles, access permissions and notifications (password changes, role assignments).",
      "Technical analysis in ISVG (Java component integrator) — error analysis, use-case scenario simulation.",
      "Collaboration with development team on GUI modifications; support for IAM-related incidents.",
      "Creation of reports from LDAP, testing of access scenarios, co-authoring implementation specifications.",
    ],
    tags: ["IAM", "IBM ITIM", "ISVG", "LDAP", "DB2", "WebSphere (WAS)", "Access Management", "Windows Server", "Linux"],
    secure: {
      title: "Regulated Financial Infrastructure",
      body: "Work on projects within environments of regulated financial institutions. Emphasis was placed on process accuracy, audit trail of every change and zero tolerance for security deviations.",
    },
    impacts: [
      "Complete installation and commissioning of IBM IAM stack in production environment",
      "Successful upgrades of complex IAM environments for enterprise clients",
      "Support for secure identity and access management in regulated sectors",
    ],
  },
  {
    period: "Feb 2024 — Sep 2025", chip: null,
    co: "OX Point", logo: "/logo-oxpoint.png",
    role: "Senior Application Support Specialist",
    desc: "Primary technical link between operations and development — responsible for production stability, escalation management and incident coordination with impact on critical operations.",
    bullets: [
      "Management of P1/Major incidents in an environment of 300+ devices in production; escalation coordination in cooperation with operations manager.",
      "Coordination of specialist team (DevOps, development, technicians) during critical outages in 24/7 on-call mode.",
      "Design of internal guidelines for L1/L2/L3 responsibility division, escalation paths and capacity planning to ensure service availability.",
      "Built JIRA project from scratch: severity model, SLA parameters, workflow automation and notifications — as the basis for measurable operations management.",
      "Monitoring and analysis of error patterns (Grafana, SQL, Linux/SSH) for early identification of operational risks.",
      "Support for critical infrastructure migrations; management reporting on incident progress and operational status.",
    ],
    tags: ["Incident Management", "Production Operations", "JIRA", "SLA Management", "Linux", "Grafana", "SQL", "Log Analysis", "Cross-team Coordination"],
    secure: null,
    impacts: [
      "Stabilisation of operations for 300+ devices in production",
      "Successful management of critical P1 incidents",
      "Introduction of structured SLA and severity model",
      "Design of operational model L1–L3 including escalation paths and responsibilities",
      "Improved clarity of escalations and operational governance",
      "Strengthened reporting transparency towards management",
    ],
  },
  {
    period: "May 2023 — Mar 2024", chip: null,
    co: "NAKIT", logo: "/logo-nakit.png",
    role: "Senior IT Platform Specialist",
    desc: "Operation and availability management of the Identita občana system — critical state infrastructure enabling online authentication of millions of citizens in communication with public administration.",
    bullets: [
      "Management of P1/Major incidents with high impact on end users; chairing crisis calls and coordinating service recovery in minute-level SLA mode.",
      "Coordination of several teams of technical specialists across organisations during critical outages — with emphasis on rapid recovery and minimising impact on service availability.",
      "Monitoring of application availability, incident recording and analysis, SLA parameter compliance control and identification of recurring operational risks.",
      "Management of planned shutdowns including preparation of materials for management reporting and communication of impacts to stakeholders.",
      "Analysis of application logs and data inconsistencies in cooperation with DB and infrastructure teams.",
      "Basic PowerShell scripting; work in Linux (Red Hat) and Windows Server environments.",
    ],
    tags: ["Application Operations", "eGovernment", "Incident Coordination", "SLA Monitoring", "Log Analysis", "Linux", "Windows Server", "PowerShell"],
    secure: {
      title: "State Infrastructure — Restricted Environment",
      body: "Work in an environment with strict security requirements and state regulation. Emphasis was placed on process discipline, access management and awareness of operational risks.",
    },
    impacts: [
      "Management of incidents with high impact on millions of end users",
      "Recovery of critical state infrastructure in minute-level SLA mode",
      "Stabilisation of escalation and communication processes during outages",
      "Improved coordination between technical partners across organisations",
      "Transparent incident reporting towards management",
    ],
  },
  {
    period: "2021 — 2023", chip: null,
    co: "ÚVN", logo: "/logo-uvn.png",
    role: "IT Operations & Incident Coordination",
    desc: "Operation of IT infrastructure of the National Vaccination Centre at O2 Universum.",
    bullets: [
      "Ensuring continuous availability of IT infrastructure — daily preparation and operation of dozens of devices and workstations in an environment with zero tolerance for outages.",
      "Monitoring and operational resolution of incidents in real time; management of MS SQL database with high transactional load including analysis and correction of data inconsistencies.",
      "Leadership of a small IT team: shift planning, responsibility allocation, setting up escalation procedures and operational standards.",
      "Processing and protection of sensitive personal health data in accordance with operational requirements of a restricted access environment (cooperation with Czech Army).",
      "Cooperation with external development team; UAT testing of new versions before production deployment.",
      "Identification of weaknesses in operational processes and proposals for workflow optimisation.",
    ],
    tags: ["IT Operations", "Incident Support", "Database Administration", "Team Coordination", "Hardware Management", "Service Continuity", "High-load Operations"],
    secure: {
      title: "Healthcare — Sensitive & Restricted Environment",
      body: "Highly exposed environment with continuous operations, processing of personal health data and cooperation with the Czech Army in restricted access mode.",
    },
    impacts: [
      "Uninterrupted operations during 131 days of crisis mode",
      "IT support for more than 550,000 processed clients",
      "Stabilisation of database environment under high transactional load",
      "Operations in restricted access environment with processing of sensitive health data",
      "Reduction of operational downtime and optimisation of morning infrastructure preparation",
    ],
  },
  {
    period: "2021 — 2023", chip: null,
    co: "MyCom Solutions", logo: "/logo-mycom.webp",
    role: "IT Infrastructure & Network Support",
    desc: "Design and implementation of network solutions for commercial clients — from initial requirements analysis to physical realisation and environment security.",
    bullets: [
      "Design and implementation of network infrastructure including VLAN segmentation, configuration of Ubiquiti (AP, switches) and Fortinet firewall — with emphasis on security and access separation.",
      "Management of RDP access and endpoint devices; incident management including on-site resolution of HW/SW incidents and ticketing.",
      "Complete implementation of structured cabling over 5 km — patch panels, keystone modules, rack installation.",
      "Preparation of internal security lab (Windows/Linux) for testing network configurations and security scenarios.",
    ],
    tags: ["IT Infrastructure", "Network Configuration", "VLAN", "Ubiquiti", "Fortinet", "Structured Cabling", "RDP Environments", "Hardware Support"],
    secure: null,
    impacts: [
      "Implementation of complete network infrastructure for several clients including security segmentation",
      "Delivery of more than 5 km of structured cabling",
      "Practical foundation in network segmentation, access management and physical infrastructure",
      "Stabilisation of client operating environments through rapid incident resolution",
    ],
  },
];

export function Experience() {
  const [openIdx, setOpenIdx] = useState(-1);

  return (
    <section className="section" id="experience">
      <div className="section-head">
        <div className="section-idx reveal">
          <span>02 / Experience</span>
          <span>— {EXP.length} entries · click to expand</span>
        </div>
        <h2 className="section-title reveal">
          Live operations — <em>where failure</em> is not an option.
        </h2>
      </div>

      <div className="exp-list">
        {EXP.map((it, i) => {
          const open = openIdx === i;
          return (
            <article
              key={i}
              className="exp-item reveal"
              data-open={open}
              data-hover
              onClick={(e) => {
                const prevOpen = openIdx;
                const next = open ? -1 : i;
                setOpenIdx(next);
                if (next !== -1) {
                  const el = e.currentTarget as HTMLElement;
                  // If the previously-open item is above this one, its collapse
                  // animation shifts this element upward — wait for it to finish.
                  const delay = (prevOpen !== -1 && prevOpen < next) ? 460 : 50;
                  setTimeout(() => {
                    const navH = (document.querySelector(".nav") as HTMLElement)?.offsetHeight ?? 80;
                    const y = el.getBoundingClientRect().top + window.scrollY - navH - 8;
                    window.scrollTo({ top: y, behavior: "smooth" });
                  }, delay);
                }
              }}
              aria-expanded={open}
            >
              <div className="exp-row">
                <div className="exp-watermark" aria-hidden="true">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={it.logo} alt="" />
                </div>
                <div className="exp-period">
                  <span>{it.period}</span>
                  {it.chip && <span className="chip">{it.chip}</span>}
                </div>
                <div className="exp-main">
                  <h3 className="exp-co">{it.co}</h3>
                  <div className="exp-role">{it.role}</div>
                </div>
                <div className="exp-arrow">＋</div>
              </div>

              <div className="exp-detail">
                <div className="exp-detail-inner">
                  <div className="exp-detail-content">
                    <div className="exp-detail-left">
                      <p className="exp-desc"><em>{it.desc}</em></p>
                      <ul className="exp-bullets">
                        {it.bullets.map((b, j) => <li key={j}>{b}</li>)}
                      </ul>
                    </div>
                    <div className="exp-detail-right">
                      {it.secure && (
                        <div className="exp-secure">
                          <div className="shield"><ShieldIcon /></div>
                          <div className="exp-secure-title">— Secure environment</div>
                          <div className="exp-secure-body">{it.secure.title}</div>
                          <div className="exp-secure-note">{it.secure.body}</div>
                        </div>
                      )}
                      <div className="exp-techlabel">— Technologies</div>
                      <div className="exp-tags">
                        {it.tags.map((t) => <span key={t} className="tag">{t}</span>)}
                      </div>
                      {it.impacts && (
                        <div className="exp-impacts">
                          <div className="exp-impacts-label">Key Impacts</div>
                          <ul className="exp-impacts-list">
                            {it.impacts.map((imp, k) => <li key={k}>{imp}</li>)}
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
