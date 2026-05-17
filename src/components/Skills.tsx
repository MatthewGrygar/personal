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

      <div className="direction-strip reveal">
        <span className="label">Heading toward</span>
        <span className="item">IT Risk Manager</span>
        <span className="item">Operational Resilience / Incident Governance</span>
        <span className="item">IT Security &amp; Compliance</span>
      </div>
    </section>
  );
}
