const TOOLS = [
  "IAM/IdM","IBM ITIM","ISVG","LDAP","DB2","WebSphere",
  "Incident Mgmt","SLA Governance","ISO 27001","ISO 27005",
  "Linux / Red Hat","Windows Server","SQL","PowerShell",
  "JIRA","Grafana","ITIL","ServiceNow",
];

const PILLARS = [
  ["01","Incident resolution"],
  ["02","Risk identification"],
  ["03","Critical operations"],
  ["04","Tech ↔ Business"],
];

export function About() {
  return (
    <section className="section" id="about">
      <div className="section-head">
        <div className="section-idx reveal">
          <span>01 / About</span>
          <span>— 04</span>
        </div>
        <h2 className="section-title reveal">
          Stability <em>under pressure.</em>
        </h2>
      </div>

      <div className="about-grid">
        <div className="about-left">
          <p className="about-lead reveal-left">
            I help organisations <em>stabilise critical systems</em> when incidents escalate — and build the processes so they don&apos;t happen again.
          </p>
          <div className="about-body reveal-left">
            <p>
              Five years inside live operations have taught me that risk is rarely technical.
              It&apos;s a sequence of small, structural failures — a missing runbook, an unclear owner,
              an SLA nobody read. <strong>My job is to find that sequence before it finds you.</strong>
            </p>
            <p>
              Today I work on Identity &amp; Access Management at Trask — the kind of infrastructure
              that, when it breaks, the whole building hears about. I move between the engineering
              room and the steering committee with the same vocabulary.
            </p>
          </div>
          <div className="about-badge reveal-left">
            <span className="pulse" />
            <span><span className="accent">Current</span> · System Engineer — IAM · Trask · 2025 — present</span>
          </div>
        </div>

        <div className="about-right">
          <div className="toolbox-label reveal-right">— Toolbox · what I reach for</div>
          <div className="tag-cloud reveal-right">
            {TOOLS.map((t) => <span key={t} className="tag" data-hover>{t}</span>)}
          </div>
          <div className="toolbox-label reveal-right">— Where I add weight</div>
          <div className="pillars reveal-right">
            {PILLARS.map(([i, t]) => (
              <div key={t} className="pillar" data-hover>
                <div className="pillar-idx">→ {i}</div>
                <div className="pillar-title">{t}</div>
                <div className="pillar-arrow">↗</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
