const PROJECTS = [
  {
    tags:   ["JIRA","Governance"],
    title:  "JIRA Service Workflow Design",
    desc:   "Complete design and setup of a JIRA project — severity model, SLA parameters, workflow automation, role and user group configuration.",
    impact: "Measurable operations management from submission to resolution.",
    href:   null,
  },
  {
    tags:   ["Risk","SLA"],
    title:  "SLA & Incident Management Model",
    desc:   "Internal design of operational support model — L1/L2/L3 responsibilities, escalation paths, SLA parameters and severity levels.",
    impact: "Clear escalations, defined responsibilities, measurable governance.",
    href:   null,
  },
  {
    tags:   ["ISO 27001","ISO 27005"],
    title:  "Risk Frameworks Study",
    desc:   "Independent deep-dive into ISO 27001 and ISO 27005 applied to production environments — identifying risks and designing control mechanisms.",
    impact: "Practical knowledge — ISO certification planned.",
    href:   null,
  },
  {
    tags:   ["Incident","Process"],
    title:  "Incident Post-Mortem Framework",
    desc:   "Structure for post-incident analysis — root causes, escalation flow, impacts, lessons learned, and preventive measures based on real P1 experience.",
    impact: "Systematic approach to learning from incidents.",
    href:   null,
  },
  {
    tags:   ["Community","Leadership"],
    title:  "Grail Series Tournament Circuit",
    desc:   "End-to-end organisation of an MtG tournament series — event planning, media, partner negotiations, community building from scratch.",
    impact: "130+ unique players, 6 tournaments — independently managed.",
    href:   "https://grailseries.cz/",
    link:   "grailseries.cz →",
  },
  {
    tags:   ["Dev","ELO"],
    title:  "MtG DC ELO Ranking System",
    desc:   "Full-stack web app for the Czech Duel Commander community — frontend, data architecture, ELO algorithm for long-term performance tracking.",
    impact: "Transparent ranking for 430+ active players.",
    href:   "https://elo.grailseries.cz/cz/",
    link:   "elo.grailseries.cz →",
  },
];

export function Projects() {
  return (
    <section id="projects" style={{ padding:"8rem 4rem", borderTop:"1px solid rgba(255,255,255,0.07)" }}>
      <div className="reveal" style={{ display:"flex", alignItems:"baseline", gap:"2rem", marginBottom:"5rem" }}>
        <span style={{ fontFamily:"'IBM Plex Mono',monospace", fontSize:"0.7rem", letterSpacing:"0.2em", color:"#C9A84C", textTransform:"uppercase" }}>03 / Projects</span>
        <h2 style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:"clamp(2.5rem,4vw,4rem)", fontWeight:300, color:"#E2DDD5", lineHeight:1.1 }}>Selected work<br />&amp; initiatives</h2>
      </div>

      <div className="reveal" style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:"1.5rem" }}>
        {PROJECTS.map(p => {
          const El = p.href ? "a" : "div";
          const extra = p.href ? { href: p.href, target:"_blank", rel:"noreferrer" } : {};
          return (
            <El key={p.title} {...(extra as any)} style={{ background:"#0E1420", border:"1px solid #2A3245", padding:"2rem", display:"flex", flexDirection:"column", gap:"1rem", textDecoration:"none", color:"inherit", transition:"border-color 0.2s, transform 0.2s", cursor: p.href ? "pointer" : "default" }}
              onMouseOver={e => { (e.currentTarget as HTMLElement).style.borderColor="#7A5E24"; (e.currentTarget as HTMLElement).style.transform="translateY(-4px)"; }}
              onMouseOut={e  => { (e.currentTarget as HTMLElement).style.borderColor="#2A3245"; (e.currentTarget as HTMLElement).style.transform="translateY(0)"; }}
            >
              <div style={{ display:"flex", flexWrap:"wrap", gap:"0.4rem" }}>
                {p.tags.map(t => (
                  <span key={t} style={{ fontFamily:"'IBM Plex Mono',monospace", fontSize:"0.58rem", letterSpacing:"0.12em", textTransform:"uppercase", color:"#C9A84C", background:"rgba(201,168,76,0.07)", padding:"0.2rem 0.5rem" }}>{t}</span>
                ))}
              </div>
              <div style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:"1.3rem", fontWeight:400, color:"#E2DDD5", lineHeight:1.2 }}>{p.title}</div>
              <p style={{ fontSize:"0.82rem", color:"#7A8090", lineHeight:1.7, flex:1 }}>{p.desc}</p>
              <div style={{ fontFamily:"'IBM Plex Mono',monospace", fontSize:"0.65rem", letterSpacing:"0.05em", color:"#7A8090", borderTop:"1px solid #2A3245", paddingTop:"1rem" }}>
                <span style={{ color:"#C9A84C" }}>◦ </span>{p.impact}
              </div>
              {p.link && (
                <div style={{ fontFamily:"'IBM Plex Mono',monospace", fontSize:"0.65rem", letterSpacing:"0.1em", textTransform:"uppercase", color:"#C9A84C" }}>{p.link}</div>
              )}
            </El>
          );
        })}
      </div>
    </section>
  );
}
