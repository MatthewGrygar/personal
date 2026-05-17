const SKILL_GROUPS = [
  {
    label: "Risk & Governance",
    tags: ["Operational Risk Awareness", "Major Incident Coordination", "SLA & Service Governance", "Change Management", "Operational Resilience", "ITIL", "Stakeholder Communication"],
  },
  {
    label: "Engineering & Operations",
    tags: ["Identity & Access Management (IBM ITIM / ISVG)", "Incident Management", "Log Analysis", "Monitoring (Grafana)", "SQL", "PowerShell", "Linux (Red Hat)", "Windows Server"],
  },
  {
    label: "Risk Frameworks",
    tags: ["ISO 27001", "ISO 27005", "RBAC / Access Governance"],
  },
  {
    label: "Tools & Platforms",
    tags: ["JIRA (workflow, SLA, automation, administration)", "IBM DB2", "LDAP", "WebSphere (WAS)", "Confluence", "ServiceNow"],
  },
];

const STRENGTHS = [
  "I identify operational risks before they cause a problem",
  "I manage incidents and escalations under pressure in a structured way",
  "I can translate technical problems into a business context",
  "I emphasise process discipline and clearly defined responsibilities",
  "In critical situations I remain calm and decisive",
  "I coordinate resolution across teams and organisations",
];

const AIMING = [
  "IT Risk Manager",
  "Operational Resilience / Incident Governance",
  "IT Security & Compliance",
];

export function Skills() {
  return (
    <section className="section" id="skills">
      <div className="section-head">
        <div className="section-idx reveal">
          <span>04 / Skills</span>
          <span>— What I work with</span>
        </div>
        <h2 className="section-title reveal">
          Skills that keep systems and <em>teams running under pressure.</em>
        </h2>
      </div>

      <p className="skills-intro reveal">
        My experience is built on operating systems in real environments — incident management, identifying operational risks and building processes that protect organisations from outages. I combine technical background with risk thinking and operational governance.
      </p>

      <div className="skill-groups">
        {SKILL_GROUPS.map((g) => (
          <div className="skill-group reveal" key={g.label}>
            <div className="skill-group-label">{g.label}</div>
            <div className="skill-group-tags">
              {g.tags.map((t) => <span key={t} className="tag" data-hover>{t}</span>)}
            </div>
          </div>
        ))}
      </div>

      <div className="skills-bottom">
        <div className="skill-strengths reveal-left">
          <div className="skill-strengths-label">Core Strengths</div>
          <ul className="skill-strengths-list">
            {STRENGTHS.map((s) => <li key={s}>{s}</li>)}
          </ul>
        </div>
        <div className="skill-aiming reveal-right">
          <div className="skill-aiming-label">Aiming for</div>
          <ul className="skill-aiming-list">
            {AIMING.map((a) => <li key={a}>{a}</li>)}
          </ul>
        </div>
      </div>
    </section>
  );
}
