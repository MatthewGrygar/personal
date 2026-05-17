const PROJECTS = [
  {
    num: "01",
    title: "JIRA Service Workflow Design",
    tags: ["JIRA", "Support", "Operations", "Governance"],
    desc: "Complete design and setup of a JIRA project for operational support — severity model, SLA parameters, workflow automation, role and user group configuration, including a clear request interface for end users.",
    impact: "Measurable operations management from submission to resolution.",
    link: null,
  },
  {
    num: "02",
    title: "SLA & Incident Management Model",
    tags: ["Support", "Risk", "Operations", "Governance"],
    desc: "Internal design of an operational support model including L1/L2/L3 responsibility division, escalation paths, SLA parameters and severity levels — as the basis for operational governance and service availability risk management.",
    impact: "Clear escalations, defined responsibilities, measurable governance.",
    link: null,
  },
  {
    num: "03",
    title: "Risk Frameworks – ISO 27001 & ISO 27005",
    tags: ["Risk", "Security", "Frameworks", "Self-study"],
    desc: "Independent study of ISO 27001 and ISO 27005 as reference frameworks for IT risk management and information security. I actively applied findings when identifying operational risks and designing control mechanisms in production environments.",
    impact: "Practical knowledge of ISO 27001 & ISO 27005 — certification planned.",
    link: null,
  },
  {
    num: "04",
    title: "Incident Post-Mortem Framework",
    tags: ["Risk", "Operations", "Incidents", "Process"],
    desc: "Design of a structure for post-incident analysis — root causes, escalation flow, impacts, lessons learned and preventive measures. Based on experience coordinating Major/P1 incidents and principles of continuous IT operations improvement.",
    impact: "Systematic approach to learning from incidents and preventing recurrence.",
    link: null,
  },
  {
    num: "05",
    title: "Grail Series Tournament Circuit",
    tags: ["Leadership", "Community", "Events", "Personal"],
    desc: "Personal initiative — complete organisation of a Magic: The Gathering tournament series from concept to execution. Includes event planning and production, media communication and promo, partner and sponsor negotiations, community building and long-term development of the competitive scene.",
    impact: "Community of 130+ unique players, 6 tournaments — all managed independently.",
    link: "grailseries.cz",
  },
  {
    num: "06",
    title: "MtG DC ELO Ranking System",
    tags: ["Data", "Vibe Coding", "Project", "Personal"],
    desc: "Personal project — complete design and development of a web application for the Czech Duel Commander community. Includes vibe coding the entire frontend, data architecture design, data layer integration and ELO algorithm implementation for long-term performance tracking of 430+ active players.",
    impact: "Transparent ranking for the Czech DC community — from design to production.",
    link: "elo.grailseries.cz",
  },
];

export function Projects() {
  return (
    <section className="section" id="projects">
      <div className="section-head">
        <div className="section-idx reveal">
          <span>03 / Projects</span>
          <span>— Selected work</span>
        </div>
        <h2 className="section-title reveal">
          Selected work &amp; <em>personal initiatives.</em>
        </h2>
      </div>

      <div className="projects-grid">
        {PROJECTS.map((p) => (
          <article className="project reveal" key={p.num} data-hover>
            <div className="proj-head">
              <span className="proj-num">→ {p.num}</span>
              {p.link && <span className="proj-arrow">↗</span>}
            </div>
            <div className="proj-tags">
              {p.tags.map((t) => <span key={t} className="tag">{t}</span>)}
            </div>
            <h3 className="proj-title">{p.title}</h3>
            <p className="proj-desc">{p.desc}</p>
            <div className="proj-impact">
              <span className="proj-impact-dot">+</span>
              <em>{p.impact}</em>
            </div>
            {p.link && (
              <a
                className="proj-link"
                href={`https://${p.link}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                {p.link} ↗
              </a>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}
