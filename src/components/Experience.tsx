const EXP = [
  {
    company: "Trask",
    period:  "Jan 2025 – present",
    current: true,
    role:    "System Engineer — Identity & Access Management",
    desc:    "Operation and management of IAM solutions for enterprise clients in regulated sectors. Installation and configuration of IBM IAM stack (ITIM, ISVG, DB2, LDAP, WebSphere) on Windows Server. Upgrades of existing IAM environments, access governance configuration, technical analysis in ISVG.",
    tags:    ["IAM","IBM ITIM","ISVG","LDAP","DB2","WebSphere","Windows Server"],
  },
  {
    company: "OX Point",
    period:  "Feb 2024 – Sep 2025",
    current: false,
    role:    "Operations & Support",
    desc:    "Operational support and service management, handling SLA compliance and escalation paths across multiple tiers of support in a fast-paced environment with 300+ devices in production.",
    tags:    ["SLA","Operations","Support","Escalation"],
  },
  {
    company: "NAKIT",
    period:  "May 2023 – Mar 2024",
    current: false,
    role:    "Systems & Infrastructure",
    desc:    "Government eGovernment infrastructure — high-availability systems where precision and audit trail integrity were non-negotiable. Incident coordination and operational risk awareness in a public sector environment serving millions of users.",
    tags:    ["eGovernment","High Availability","Incident Mgmt"],
  },
  {
    company: "MyCom Solutions",
    period:  "2021 – 2023",
    current: false,
    role:    "Operations Engineer",
    desc:    "Production operations across infrastructure of hundreds of devices. Building escalation processes, monitoring setups and response workflows from the ground up.",
    tags:    ["Monitoring","Grafana","Linux","JIRA"],
  },
];

export function Experience() {
  return (
    <section id="experience" style={{ padding:"8rem 4rem", borderTop:"1px solid rgba(255,255,255,0.07)" }}>
      <div className="reveal" style={{ display:"flex", alignItems:"baseline", gap:"2rem", marginBottom:"5rem" }}>
        <span style={{ fontFamily:"'IBM Plex Mono',monospace", fontSize:"0.7rem", letterSpacing:"0.2em", color:"#C9A84C", textTransform:"uppercase" }}>02 / Experience</span>
        <h2 style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:"clamp(2.5rem,4vw,4rem)", fontWeight:300, color:"#E2DDD5", lineHeight:1.1 }}>Live operations —<br />where failure<br />is not an option</h2>
      </div>

      <div>
        {EXP.map((e, i) => (
          <div key={i} className="reveal" style={{ display:"grid", gridTemplateColumns:"280px 1fr", gap:"3rem", padding:"3rem 0", borderTop:"1px solid rgba(255,255,255,0.07)", borderBottom: i === EXP.length - 1 ? "1px solid rgba(255,255,255,0.07)" : undefined }}>
            <div>
              <div style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:"1.4rem", fontWeight:400, color:"#E2DDD5", marginBottom:"0.4rem" }}>{e.company}</div>
              <div style={{ fontFamily:"'IBM Plex Mono',monospace", fontSize:"0.65rem", letterSpacing:"0.1em", color:"#7A8090", marginBottom:"1rem" }}>{e.period}</div>
              {e.current && (
                <span style={{ fontFamily:"'IBM Plex Mono',monospace", fontSize:"0.6rem", letterSpacing:"0.15em", textTransform:"uppercase", color:"#C9A84C", border:"1px solid #7A5E24", padding:"0.2rem 0.6rem", display:"inline-block" }}>Current</span>
              )}
            </div>
            <div>
              <div style={{ fontFamily:"'IBM Plex Mono',monospace", fontSize:"0.72rem", letterSpacing:"0.08em", color:"#7A8090", textTransform:"uppercase", marginBottom:"1rem" }}>{e.role}</div>
              <p style={{ fontSize:"0.92rem", color:"#7A8090", lineHeight:1.8, marginBottom:"1.2rem" }}>{e.desc}</p>
              <div style={{ display:"flex", flexWrap:"wrap", gap:"0.4rem" }}>
                {e.tags.map(tag => (
                  <span key={tag} style={{ fontFamily:"'IBM Plex Mono',monospace", fontSize:"0.6rem", letterSpacing:"0.1em", textTransform:"uppercase", color:"#C9A84C", background:"rgba(201,168,76,0.08)", border:"1px solid rgba(201,168,76,0.2)", padding:"0.25rem 0.6rem" }}>{tag}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
