const SKILLS = ["IAM / IdM","IBM ITIM","ISVG","LDAP","DB2","WebSphere","Incident Mgmt","SLA Governance","ISO 27001","ISO 27005","Linux / Red Hat","Windows Server","SQL","PowerShell","JIRA","Grafana","ITIL","ServiceNow"];

const PILLARS = [
  { num:"01", title:"Incident resolution",   body:"Led Major incidents with full production impact, coordinating cross-org specialist teams." },
  { num:"02", title:"Risk identification",    body:"Naming operational risks before they cause outages — and setting controls that hold." },
  { num:"03", title:"Critical operations",    body:"High-availability systems where every decision impacts service stability." },
  { num:"04", title:"Tech → Business",        body:"Translating technical problems into business context — clearly and without distortion." },
];

export function About() {
  return (
    <section id="about" style={{ padding:"8rem 4rem", borderTop:"1px solid rgba(255,255,255,0.07)" }}>
      <div className="reveal" style={{ display:"flex", alignItems:"baseline", gap:"2rem", marginBottom:"5rem" }}>
        <span style={{ fontFamily:"'IBM Plex Mono',monospace", fontSize:"0.7rem", letterSpacing:"0.2em", color:"#C9A84C", textTransform:"uppercase" }}>01 / About</span>
        <h2 style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:"clamp(2.5rem,4vw,4rem)", fontWeight:300, color:"#E2DDD5", lineHeight:1.1 }}>Stability<br />under pressure</h2>
      </div>

      <div className="reveal" style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"6rem", alignItems:"start" }}>
        <div>
          <p style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:"1.6rem", fontWeight:300, lineHeight:1.5, color:"#E2DDD5", marginBottom:"2rem" }}>
            I help organisations stabilise critical systems when incidents escalate — and then build processes so it doesn&apos;t happen again.
          </p>
          <p style={{ color:"#7A8090", fontSize:"0.95rem", lineHeight:1.9, marginBottom:"1.5rem" }}>
            My experience spans production operations, coordination of Major/P1 incidents, identification of operational risks, and management of Identity &amp; Access Management solutions in regulated sectors (finance, energy).
          </p>
          <p style={{ color:"#7A8090", fontSize:"0.95rem", lineHeight:1.9, marginBottom:"1.5rem" }}>
            I bring technical depth combined with operational perspective — I understand systems, processes, and what breaks at 3am. Long-term direction: IT Risk Management and operational resilience.
          </p>
          <span style={{ fontFamily:"'IBM Plex Mono',monospace", fontSize:"0.7rem", letterSpacing:"0.1em", color:"#C9A84C", padding:"0.8rem 1.2rem", border:"1px solid #7A5E24", display:"inline-block", marginTop:"1rem" }}>
            Currently: System Engineer — IAM at Trask, 2025–present
          </span>
        </div>

        <div>
          <div style={{ marginBottom:"2rem" }}>
            <p style={{ fontFamily:"'IBM Plex Mono',monospace", fontSize:"0.65rem", letterSpacing:"0.15em", textTransform:"uppercase", color:"#7A8090", marginBottom:"1rem" }}>Toolbox</p>
            <div style={{ display:"flex", flexWrap:"wrap", gap:"0.6rem" }}>
              {SKILLS.map(s => (
                <span key={s} style={{ fontFamily:"'IBM Plex Mono',monospace", fontSize:"0.65rem", letterSpacing:"0.1em", textTransform:"uppercase", color:"#7A8090", border:"1px solid #2A3245", padding:"0.4rem 0.8rem" }}>{s}</span>
              ))}
            </div>
          </div>

          <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"1.5rem" }}>
            {PILLARS.map(p => (
              <div key={p.num} style={{ padding:"1.5rem", border:"1px solid #2A3245", background:"#0E1420" }}>
                <span style={{ fontFamily:"'IBM Plex Mono',monospace", fontSize:"0.65rem", color:"#C9A84C", letterSpacing:"0.15em", display:"block", marginBottom:"0.7rem" }}>— {p.num}</span>
                <div style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:"1.1rem", fontWeight:400, color:"#E2DDD5", marginBottom:"0.5rem" }}>{p.title}</div>
                <p style={{ fontSize:"0.82rem", color:"#7A8090", lineHeight:1.7 }}>{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
