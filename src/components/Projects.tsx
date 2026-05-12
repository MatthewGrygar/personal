const PROJECTS = [
  { num:"01", title:"JIRA Service Workflow Design",    tags:["JIRA","Governance"],    desc:"Complete redesign of a service-management project — severity model, SLA matrix, automation rules, and the human escalation paths behind them.", link:null },
  { num:"02", title:"SLA & Incident Management Model", tags:["Risk","SLA"],           desc:"L1/L2/L3 model with explicit escalation paths and SLA parameters that survive contact with a real incident.", link:null },
  { num:"03", title:"Risk Frameworks Study",           tags:["ISO 27001","ISO 27005"], desc:"Self-directed deep study of ISO 27001 and 27005 — frameworks I now apply quietly to every production decision.", link:null },
  { num:"04", title:"Incident Post-Mortem Framework",  tags:["Incident","Process"],   desc:"Lightweight post-mortem structure built from real P1 work. Designed to extract lessons, not assign blame.", link:null },
  { num:"05", title:"Grail Series — Tournament Circuit", tags:["Community","Leadership"], desc:"Magic: the Gathering competitive circuit — 130+ players, 6 events. Operations, logistics, brand.", link:"grailseries.cz ↗" },
  { num:"06", title:"MtG DC ELO Ranking System",       tags:["Dev","Data","ELO"],     desc:"Web app I built for 430+ Czech DC players — ELO model, leaderboards, season tracking. Side project, real users.", link:"elo.grailseries.cz ↗" },
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
          Selected <em>work &amp; initiatives.</em>
        </h2>
      </div>

      <div className="projects-grid">
        {PROJECTS.map((p) => (
          <article className="project reveal" key={p.num} data-hover>
            <div className="proj-head">
              <span className="proj-num">→ {p.num}</span>
              <span className="proj-arrow">↗</span>
            </div>
            <div className="proj-tags">
              {p.tags.map((t) => <span key={t} className="tag">{t}</span>)}
            </div>
            <h3 className="proj-title">{p.title}</h3>
            <p className="proj-desc">{p.desc}</p>
            {p.link && <span className="proj-link">{p.link}</span>}
          </article>
        ))}
      </div>
    </section>
  );
}
