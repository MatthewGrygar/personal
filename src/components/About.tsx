const TOOLS = [
  "IAM / IdM", "Incident & Major Incident Mgmt", "SLA & Service Governance",
  "Risk Frameworks (ISO 27001 / 27005)", "Linux / Windows", "SQL", "JIRA",
  "Monitoring & Log Analysis (Grafana)", "ITIL", "PowerShell",
];

const WHAT_I_BRING = [
  {
    num: "01",
    title: "Incident resolution under pressure",
    desc: "I have led Major incidents with full production impact — coordinating teams of specialists across organisations, managing escalation towards management and maintaining oversight of recovery priorities. The goal was always to bring the system back to a stable state quickly and without unnecessary side effects.",
  },
  {
    num: "02",
    title: "Identifying and managing operational risks",
    desc: "From practice I know where weaknesses most often appear in IT operations — poorly configured access roles, unclear escalation paths, insufficient segmentation or missing capacity. I try to name these risks before they cause a problem and set up processes so they don't recur.",
  },
  {
    num: "03",
    title: "Decision-making in critical operations",
    desc: "I have worked on systems with high availability requirements — from a government eGovernment system to infrastructure of hundreds of devices in operation. In such environments you need to decide quickly, systematically and with awareness of the impact of every step on service stability.",
  },
  {
    num: "04",
    title: "Communication across technology and business",
    desc: "I have experience communicating with both technical teams and management and customers. I can translate technical problems into a business context — clearly, factually and without unnecessary distortion.",
  },
  {
    num: "05",
    title: "Process as the foundation of stability",
    desc: "I don't believe in one-off heroic fixes. Long-term system stability rests on well-designed processes, clearly defined responsibilities and the ability to learn from every incident — that is the foundation on which IT Risk Management works.",
  },
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

      {/* What I Bring */}
      <div className="about-wib">
        {WHAT_I_BRING.map((item) => (
          <div className="wib-item reveal" key={item.num}>
            <div className="wib-num">{item.num}</div>
            <div className="wib-body">
              <div className="wib-title">{item.title}</div>
              <p className="wib-desc">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
