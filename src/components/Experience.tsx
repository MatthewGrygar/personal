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
    role: "System Engineer — Identity & Access Management",
    desc: "IAM operations on regulated banking infrastructure. IBM ITIM / ISVG provisioning, RBAC reviews, escalation handling for P1 / P2 access incidents.",
    bullets: [
      <><strong>End-to-end IAM lifecycle</strong> on a critical banking environment — request, approval, provisioning, recertification.</>,
      <><strong>P1 / P2 incident response</strong> on the access path — diagnose, contain, fix, document.</>,
      <><strong>RBAC reviews & role design</strong> bridging business owners and IT.</>,
      <><strong>Continuous improvement</strong> — process tweaks that compound into operational stability.</>,
    ],
    tags: ["IBM ITIM", "ISVG", "LDAP", "DB2", "RBAC", "Incident Mgmt"],
    secure: { title: "Banking — Regulated Environment", body: "Tier-1 financial infrastructure. Strict change control, audit trail, and segregation of duties enforced.", note: "Worked within classified change windows; specifics under NDA." },
  },
  {
    period: "Feb 2024 — Sep 2025", chip: null,
    co: "OX Point", logo: "/logo-oxpoint.png",
    role: "Operations & Support",
    desc: "Frontline of a live system — monitoring, triage, ticket discipline.",
    bullets: [
      <><strong>L1 / L2 support</strong> on live customer-facing systems with stiff SLA.</>,
      <><strong>Monitoring & alerts</strong> tuned in Grafana — separating real incidents from noise.</>,
      <><strong>JIRA workflow ownership</strong> — severity model, automation, escalation paths.</>,
      <><strong>Post-incident discipline</strong> — write it down, share it, prevent the repeat.</>,
    ],
    tags: ["L1 / L2", "SLA", "JIRA", "Grafana"],
    secure: null,
  },
  {
    period: "May 2023 — Mar 2024", chip: null,
    co: "NAKIT", logo: "/logo-nakit.png",
    role: "Systems & Infrastructure",
    desc: "State infrastructure ops — security baselines, change management discipline, audit-ready documentation.",
    bullets: [
      <><strong>Server administration</strong> across Linux and Windows fleets.</>,
      <><strong>Change management</strong> compliant with state-grade process requirements.</>,
      <><strong>Security baselines</strong> applied and verified, audit trail maintained.</>,
      <><strong>ITIL-aligned operations</strong> — first real exposure to the speed of compliance.</>,
    ],
    tags: ["Linux", "Windows Server", "ITIL", "Change Mgmt"],
    secure: { title: "State Infrastructure — Restricted Environment", body: "Public-sector critical infrastructure under regulatory oversight.", note: "Operational details remain under information-handling rules." },
  },
  {
    period: "2022 — 2023", chip: null,
    co: "ÚVN", logo: "/logo-uvn.png",
    role: "IT Support — Military University Hospital",
    desc: "Healthcare IT support in a high-stakes clinical environment.",
    bullets: [
      <><strong>End-user systems support</strong> for clinical and administrative staff.</>,
      <><strong>Hardware lifecycle</strong> — provisioning, troubleshooting, replacement.</>,
      <><strong>Availability discipline</strong> — clinical IT cannot pause for excuses.</>,
    ],
    tags: ["Support", "Healthcare IT", "Hardware"],
    secure: { title: "Healthcare — Sensitive Data Environment", body: "Military-affiliated hospital with strict patient-data confidentiality and physical-security protocols.", note: "Worked under hospital security clearance; specifics confidential." },
  },
  {
    period: "2021 — 2023", chip: null,
    co: "MyCom Solutions", logo: "/logo-mycom.webp",
    role: "Operations Engineer",
    desc: "Where it started — tickets, late-night pages, post-mortems.",
    bullets: [
      <><strong>Frontline support</strong> across a diverse client base.</>,
      <><strong>Documentation habit</strong> formed here — every fix written down for the next person.</>,
      <><strong>Process foundations</strong> — the unglamorous reps that everything else builds on.</>,
    ],
    tags: ["Support", "Documentation", "Process"],
    secure: null,
  },
];

export function Experience() {
  const [openIdx, setOpenIdx] = useState(0);

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
              onClick={() => setOpenIdx(open ? -1 : i)}
              aria-expanded={open}
            >
              {/* Logo watermark */}
              <div className="exp-watermark" aria-hidden="true">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={it.logo} alt="" />
              </div>

              {/* Collapsed row */}
              <div className="exp-row">
                <div className="exp-period">
                  <span>{it.period}</span>
                  {it.chip && <span className="chip">{it.chip}</span>}
                </div>
                <div className="exp-logo">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={it.logo} alt={`${it.co} logo`} loading="lazy" />
                </div>
                <div className="exp-main">
                  <h3 className="exp-co">{it.co}</h3>
                  <div className="exp-role">{it.role}</div>
                </div>
                <div className="exp-arrow">＋</div>
              </div>

              {/* Expanded detail */}
              <div className="exp-detail">
                <div className="exp-detail-inner">
                  <div className="exp-detail-content">
                    <div className="exp-detail-left">
                      <p>{it.desc}</p>
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
                          {it.secure.note && (
                            <div className="exp-secure-note" style={{ marginTop: 8, color: "var(--muted)" }}>
                              {it.secure.note}
                            </div>
                          )}
                        </div>
                      )}
                      <div className="exp-techlabel">— Technologies</div>
                      <div className="exp-tags">
                        {it.tags.map((t) => <span key={t} className="tag">{t}</span>)}
                      </div>
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
