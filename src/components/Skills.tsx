const COLS = [
  {
    label: "01",
    title: <>Risk &amp; <em>Governance</em></>,
    items: ["Operational risk awareness","Major incident coordination","SLA & service governance","Change management","Operational resilience","ITIL framework","Stakeholder communication","ISO 27001 / 27005","RBAC"],
  },
  {
    label: "02",
    title: <>Engineering &amp; <em>Operations</em></>,
    items: ["Identity & Access Management","IBM ITIM / ISVG","Incident management","Log analysis & forensics","Monitoring (Grafana)","SQL","PowerShell","Linux (Red Hat)","Windows Server"],
  },
  {
    label: "03",
    title: <>Tools &amp; <em>Platforms</em></>,
    items: ["JIRA","IBM DB2","LDAP","WebSphere","Confluence","ServiceNow","Grafana","Git","VS Code"],
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

      <div className="skills-grid">
        {COLS.map((c) => (
          <div className="skill-col reveal" key={c.label} data-hover>
            <div>
              <div className="label">— {c.label}</div>
              <h4>{c.title}</h4>
            </div>
            <ul className="skill-list">
              {c.items.map((it) => <li key={it}>{it}</li>)}
            </ul>
          </div>
        ))}
      </div>

      <div className="direction-strip reveal">
        <span className="label">Heading toward</span>
        <span className="item">IT Risk Manager</span>
        <span className="item">Operational Resilience</span>
        <span className="item">Security &amp; Compliance</span>
      </div>
    </section>
  );
}
