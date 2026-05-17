const TOOLS = [
  "IAM / IdM", "Incident & Major Incident Mgmt", "SLA & Service Governance",
  "Risk Frameworks (ISO 27001 / 27005)", "Linux / Windows", "SQL", "JIRA",
  "Monitoring & Log Analysis (Grafana)", "ITIL", "PowerShell",
];


export function About() {
  return (
    <section className="section" id="about">
      <div className="section-head">
        <div className="section-idx reveal">
          <span>01 / About</span>
          <span>— What I bring</span>
        </div>
        <h2 className="section-title reveal">
          Stability <em>under pressure.</em>
        </h2>
      </div>

      <div className="about-grid">
        <div className="about-left">
          <p className="about-lead reveal-left">
            I help organisations stabilise critical systems when incidents escalate and time pressure rises — and then set up processes so it doesn&apos;t happen again.
          </p>
          <div className="about-body reveal-left">
            <p>
              My experience leads from direct work in production operations and coordination of Major/P1 incidents, through identification of operational risks, to operation and management of Identity &amp; Access Management solutions in regulated sectors.
            </p>
            <p>
              I bring a combination of technical depth and operational overview — I understand processes, systems and what breaks at 3am. Long-term I am heading towards IT Risk Management and operational risk management.
            </p>
          </div>
          <div className="about-badge reveal-left">
            <span className="pulse" />
            <span><span className="accent">Currently:</span> System Engineer – Identity &amp; Access Management (Trask, 2025–present)</span>
          </div>
        </div>

        <div className="about-right">
          <div className="toolbox-label reveal-right">— Toolbox</div>
          <div className="tag-cloud reveal-right">
            {TOOLS.map((t) => <span key={t} className="tag" data-hover>{t}</span>)}
          </div>
          <div className="about-direction reveal-right">
            <div className="about-direction-label">Long-term direction</div>
            <p>
              Going forward, I want to focus on IT Risk Management — identifying and managing operational risks, IT service governance and building processes that protect organisations from outages even in demanding situations. It makes sense to me to work at the intersection of technology, risk and business — where every technical decision has a direct impact on operational stability and security.
            </p>
          </div>
        </div>
      </div>

    </section>
  );
}
