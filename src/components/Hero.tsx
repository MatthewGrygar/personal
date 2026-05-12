const GRID = `
  repeating-linear-gradient(0deg,transparent,transparent 79px,rgba(255,255,255,0.025) 79px,rgba(255,255,255,0.025) 80px),
  repeating-linear-gradient(90deg,transparent,transparent 79px,rgba(255,255,255,0.025) 79px,rgba(255,255,255,0.025) 80px)
`.trim();

const fu = (d: number) => ({ animation: `fadeUp 0.8s ease ${d}s backwards` });

export function Hero() {
  return (
    <>
      <style>{`
        @keyframes fadeUp {
          from { opacity:0; transform:translateY(24px); }
          to   { opacity:1; transform:translateY(0); }
        }
      `}</style>

      <section id="top" style={{ minHeight:"100vh", display:"grid", gridTemplateColumns:"1fr 1fr", paddingTop:"5rem", position:"relative", overflow:"hidden", background:"#080C12" }}>
        <div style={{ position:"absolute", inset:0, background:GRID, pointerEvents:"none" }} />

        {/* Left */}
        <div style={{ display:"flex", flexDirection:"column", justifyContent:"center", padding:"6rem 4rem", position:"relative" }}>

          <div style={{ ...fu(0.1), fontFamily:"'IBM Plex Mono',monospace", fontSize:"0.7rem", letterSpacing:"0.3em", textTransform:"uppercase", color:"#C9A84C", marginBottom:"2rem", display:"flex", alignItems:"center", gap:"1rem" }}>
            <span style={{ width:"2rem", height:"1px", background:"#C9A84C", display:"block", flexShrink:0 }} />
            IT Risk Manager &amp; Systems Engineer
          </div>

          <h1 style={{ ...fu(0.25), fontFamily:"'Cormorant Garamond',serif", fontSize:"clamp(4rem,7vw,7rem)", fontWeight:300, lineHeight:0.9, letterSpacing:"-0.02em", color:"#E2DDD5", marginBottom:"1.5rem" }}>
            Matthew<br /><em style={{ fontStyle:"italic", color:"#C9A84C" }}>Grygar</em>
          </h1>

          <div style={{ ...fu(0.4), fontFamily:"'IBM Plex Mono',monospace", fontSize:"0.8rem", letterSpacing:"0.2em", textTransform:"uppercase", color:"#7A8090", marginBottom:"2.5rem" }}>
            Prague · Identity &amp; Access Management · Crisis Specialist
          </div>

          <p style={{ ...fu(0.5), fontSize:"1.05rem", color:"#7A8090", maxWidth:"28rem", lineHeight:1.8, marginBottom:"3rem", borderLeft:"2px solid #7A5E24", paddingLeft:"1.5rem" }}>
            Calm structure for complex problems. Stabilising critical systems when incidents escalate — and building processes so they don&apos;t happen again.
          </p>

          <div style={{ ...fu(0.6), display:"flex", gap:"1rem", alignItems:"center" }}>
            <a href="#contact" style={{ background:"#C9A84C", color:"#080C12", fontFamily:"'IBM Plex Mono',monospace", fontSize:"0.7rem", letterSpacing:"0.15em", textTransform:"uppercase", textDecoration:"none", padding:"0.85rem 2rem", fontWeight:500 }}>Get in touch</a>
            <a href="/cv-matthew-grygar.pdf" target="_blank" rel="noreferrer" style={{ color:"#7A8090", fontFamily:"'IBM Plex Mono',monospace", fontSize:"0.7rem", letterSpacing:"0.15em", textTransform:"uppercase", textDecoration:"none", padding:"0.85rem 2rem", border:"1px solid #2A3245" }}>Download CV</a>
          </div>

          <div style={{ ...fu(0.75), display:"flex", gap:"3rem", marginTop:"4rem", paddingTop:"3rem", borderTop:"1px solid rgba(255,255,255,0.07)" }}>
            {[["5+","Years experience"],["3","Enterprise orgs"],["IAM","Current focus"]].map(([n,l]) => (
              <div key={l}>
                <div style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:"2.8rem", fontWeight:300, color:"#E2DDD5", lineHeight:1 }}>{n}</div>
                <div style={{ fontFamily:"'IBM Plex Mono',monospace", fontSize:"0.65rem", letterSpacing:"0.15em", textTransform:"uppercase", color:"#7A8090", marginTop:"0.4rem" }}>{l}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right — photo */}
        <div style={{ ...fu(0.3), position:"relative", display:"flex", alignItems:"center", justifyContent:"center", overflow:"hidden" }}>
          <div style={{ position:"relative", width:380, height:480 }}>
            <div style={{ position:"absolute", top:"-1.5rem", left:"-1.5rem", right:"1.5rem", bottom:"1.5rem", border:"1px solid #7A5E24", zIndex:0 }} />
            <img src="/profile.png" alt="Matthew Grygar" style={{ width:"100%", height:"100%", objectFit:"cover", position:"relative", zIndex:1, filter:"grayscale(20%) contrast(1.05)" }} />
            <div style={{ position:"absolute", bottom:"2rem", left:"-3rem", zIndex:2, background:"#141B28", border:"1px solid #2A3245", padding:"1rem 1.5rem", fontFamily:"'IBM Plex Mono',monospace", fontSize:"0.65rem", letterSpacing:"0.1em" }}>
              <div style={{ color:"#C9A84C", textTransform:"uppercase", marginBottom:"0.3rem" }}>Current role</div>
              <div style={{ color:"#E2DDD5", fontSize:"1.2rem", fontFamily:"'Cormorant Garamond',serif" }}>System Engineer — IAM</div>
              <div style={{ fontSize:"0.6rem", color:"#7A8090", marginTop:"0.3rem" }}>Trask · 2025–present</div>
            </div>
          </div>
          <div style={{ position:"absolute", bottom:"1.5rem", right:"4rem", fontFamily:"'IBM Plex Mono',monospace", fontSize:"0.6rem", letterSpacing:"0.25em", color:"#7A8090" }}>
            PRAGUE · HYBRID · OPEN
          </div>
        </div>
      </section>
    </>
  );
}
