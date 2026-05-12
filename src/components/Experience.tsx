const EXP = [
  {
    period: "Jan 2025 — Present", chip: "CURRENT", chipGreen: false,
    co: "Trask", logo: "/logo-trask.png",
    role: "System Engineer — Identity & Access Management",
    desc: "IAM operations on regulated banking infrastructure. IBM ITIM / ISVG provisioning, RBAC reviews, escalation handling for P1 / P2 access incidents, and continuous improvement of the request and approval workflows the bank actually runs on.",
    tags: ["IBM ITIM","ISVG","LDAP","DB2","RBAC","Incident Mgmt"],
  },
  {
    period: "Feb 2024 — Sep 2025", chip: null, chipGreen: false,
    co: "OX Point", logo: "/logo-oxpoint.png",
    role: "Operations & Support",
    desc: "Frontline of a live system — monitoring, triage, ticket discipline. The classroom where I learned that response time is a design decision, not a side-effect.",
    tags: ["L1 / L2","SLA","JIRA","Grafana"],
  },
  {
    period: "May 2023 — Mar 2024", chip: null, chipGreen: false,
    co: "NAKIT", logo: "/logo-nakit.png",
    role: "Systems & Infrastructure",
    desc: "State infrastructure ops — security baselines, change management discipline, audit-ready documentation. First exposure to working at the speed of compliance, not just code.",
    tags: ["Linux","Windows Server","ITIL","Change Mgmt"],
  },
  {
    period: "2022 — 2023", chip: null, chipGreen: false,
    co: "ÚVN", logo: "/logo-uvn.png",
    role: "IT Support — Military University Hospital",
    desc: "Healthcare IT support in a high-stakes environment. End-user systems, hardware lifecycle, and the quiet discipline of keeping clinical infrastructure available.",
    tags: ["Support","Healthcare IT","Hardware"],
  },
  {
    period: "2021 — 2023", chip: null, chipGreen: false,
    co: "MyCom Solutions", logo: "/logo-mycom.webp",
    role: "Operations Engineer",
    desc: "Where it started — tickets, late-night pages, post-mortems. Built the habit of writing things down so the next person doesn't repeat them.",
    tags: ["Support","Documentation","Process"],
  },
];

export function Experience() {
  return (
    <section className="section" id="experience">
      <div className="section-head">
        <div className="section-idx reveal">
          <span>02 / Experience</span>
          <span>— {EXP.length} entries</span>
        </div>
        <h2 className="section-title reveal">
          Live operations — <em>where failure</em> is not an option.
        </h2>
      </div>

      <div className="exp-list">
        {EXP.map((it, i) => (
          <article className="exp-item reveal" key={i} data-hover>
            <div className="exp-period">
              <span>{it.period}</span>
              {it.chip && <span className={`chip${it.chipGreen ? " green" : ""}`}>{it.chip}</span>}
            </div>
            <div className="exp-logo">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={it.logo} alt={`${it.co} logo`} loading="lazy" />
            </div>
            <div className="exp-main">
              <h3 className="exp-co">{it.co}</h3>
              <div className="exp-role">{it.role}</div>
              <p className="exp-desc">{it.desc}</p>
              <div className="exp-tags">
                {it.tags.map((t) => <span key={t} className="tag">{t}</span>)}
              </div>
            </div>
            <div className="exp-arrow">↗</div>
          </article>
        ))}
      </div>
    </section>
  );
}
