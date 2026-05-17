const WHAT_I_BRING = [
  {
    num: "01",
    title: "Incident resolution under pressure",
    tag: "P1 / Major",
    desc: "I have led Major incidents with full production impact — coordinating teams of specialists across organisations, managing escalation towards management and maintaining oversight of recovery priorities.",
  },
  {
    num: "02",
    title: "Identifying and managing operational risks",
    tag: "Risk",
    desc: "From practice I know where weaknesses most often appear in IT operations — poorly configured access roles, unclear escalation paths, insufficient segmentation or missing capacity.",
  },
  {
    num: "03",
    title: "Decision-making in critical operations",
    tag: "Operations",
    desc: "I have worked on systems with high availability requirements — from a government eGovernment system to infrastructure of hundreds of devices. In such environments you need to decide quickly and systematically.",
  },
  {
    num: "04",
    title: "Communication across technology and business",
    tag: "Stakeholders",
    desc: "I have experience communicating with both technical teams and management. I can translate technical problems into a business context — clearly, factually and without unnecessary distortion.",
  },
  {
    num: "05",
    title: "Process as the foundation of stability",
    tag: "Governance",
    desc: "I don't believe in one-off heroic fixes. Long-term system stability rests on well-designed processes, clearly defined responsibilities and the ability to learn from every incident.",
  },
];

const CARDS = [
  {
    num: "01",
    title: <>Risk & <span className="accent">Governance</span></>,
    desc: "How an organisation stays alive when something breaks at 02:00.",
    rows: [
      ["Major incident coordination",   4, true],
      ["Operational risk awareness",    4, false],
      ["SLA & service governance",      4, false],
      ["Operational resilience",        4, false],
      ["Stakeholder communication",     4, false],
      ["Change management",             3, false],
      ["ITIL framework",                3, false],
      ["ISO 27001 / 27005",             3, false],
      ["RBAC / access governance",      3, false],
    ] as [string, number, boolean?][],
    footer: "Years applied · <b>5+</b>",
  },
  {
    num: "02",
    title: <>Engineering & <span className="accent">Operations</span></>,
    desc: "The hands-on layer — the bits that fail and the bits that catch them.",
    rows: [
      ["Identity & Access Management",        4, true],
      ["IBM ITIM / ISVG",                     4, false],
      ["Incident management",                 4, false],
      ["Log analysis & forensics",            3, false],
      ["Monitoring (Grafana)",                3, false],
      ["SQL / IBM DB2",                       3, false],
      ["PowerShell / scripting",              3, false],
      ["Linux (Red Hat) / Windows Server",    3, false],
      ["Network infrastructure (VLAN, VPN)",  2, false],
    ] as [string, number, boolean?][],
    footer: "Stack depth · <b>Mid–Senior</b>",
  },
  {
    num: "03",
    title: <>Tools & <span className="accent">Platforms</span></>,
    desc: "What lives in the toolbar. Comfortable in production.",
    rows: [
      ["JIRA — workflow, SLA, automation", 4, false],
      ["IBM LDAP / WebSphere (WAS)",       3, false],
      ["Confluence / documentation",       4, false],
      ["ServiceNow",                       3, false],
      ["Grafana — dashboards & alerting",  3, false],
      ["MS SQL Server",                    3, false],
      ["Git / version control",            3, false],
      ["Markdown / docs-as-code",          4, false],
    ] as [string, number, boolean?][],
    footer: "Day-to-day · <b>Production</b>",
  },
];

export function Skills() {
  return (
    <section className="section" id="skills">
      <div className="section-head">
        <div className="section-idx reveal">
          <span>04 / Skills</span>
          <span>— 3 disciplines</span>
        </div>
        <h2 className="section-title reveal">
          What I bring <em>to the table.</em>
        </h2>
      </div>

      <p className="skills-intro reveal">
        My experience is built on operating systems in real environments — incident management, identifying operational risks and building processes that protect organisations from outages. I combine technical background with risk thinking and operational governance.
      </p>

      <div className="skills-matrix">
        {CARDS.map((c) => (
          <article className="skill-card reveal" key={c.num} data-hover>
            <div className="skill-card-head">
              <div className="skill-card-num"><span>— {c.num}</span></div>
              <h4>{c.title}</h4>
              <p className="desc">{c.desc}</p>
            </div>
            <div className="skill-rows">
              {c.rows.map(([name, lvl, isCore], i) => (
                <div className="skill-row" key={i}>
                  <span className="skill-row-name">{name}</span>
                  <span className="skill-row-lvl" aria-label={`level ${lvl} of 4`}>
                    {[1, 2, 3, 4].map((n) => (
                      <span
                        key={n}
                        className={n <= (lvl as number) ? (isCore && n === (lvl as number) ? "on core" : "on") : ""}
                      />
                    ))}
                  </span>
                </div>
              ))}
            </div>
            <div className="skill-card-footer">
              <span className="yrs" dangerouslySetInnerHTML={{ __html: c.footer }} />
              <span>+ growing</span>
            </div>
          </article>
        ))}
      </div>

      {/* What I Bring */}
      <div className="wib-grid">
        {WHAT_I_BRING.map((item) => (
          <div className="wib-card reveal" key={item.num} data-hover>
            <div className="wib-card-top">
              <span className="wib-card-num">{item.num}</span>
              <span className="wib-card-tag">{item.tag}</span>
            </div>
            <div className="wib-card-title">{item.title}</div>
            <p className="wib-card-desc">{item.desc}</p>
          </div>
        ))}
      </div>

      <div className="direction-strip reveal">
        <span className="label">Heading toward</span>
        <span className="item">IT Risk Manager</span>
        <span className="item">Operational Resilience / Incident Governance</span>
        <span className="item">IT Security &amp; Compliance</span>
      </div>
    </section>
  );
}
