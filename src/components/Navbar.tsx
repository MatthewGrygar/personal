export function Navbar() {
  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
      display: "flex", alignItems: "center", justifyContent: "space-between",
      padding: "1.5rem 4rem",
      borderBottom: "1px solid rgba(255,255,255,0.07)",
      backdropFilter: "blur(12px)",
      background: "rgba(8,12,18,0.85)",
    }}>
      <a href="#top" style={{
        fontFamily: "'IBM Plex Mono', monospace", fontSize: "0.75rem",
        letterSpacing: "0.2em", color: "#C9A84C", textTransform: "uppercase",
        textDecoration: "none",
      }}>MG</a>

      <ul style={{ display: "flex", gap: "2.5rem", listStyle: "none" }}>
        {[
          { href: "#about",      label: "About"      },
          { href: "#experience", label: "Experience" },
          { href: "#projects",   label: "Projects"   },
          { href: "#contact",    label: "Contact"    },
        ].map(({ href, label }) => (
          <li key={href}>
            <a href={href} style={{
              fontFamily: "'IBM Plex Mono', monospace", fontSize: "0.7rem",
              letterSpacing: "0.15em", textTransform: "uppercase",
              color: "#7A8090", textDecoration: "none", transition: "color 0.2s",
            }}
            onMouseOver={e => (e.currentTarget.style.color = "#E2DDD5")}
            onMouseOut={e  => (e.currentTarget.style.color = "#7A8090")}
            >{label}</a>
          </li>
        ))}
      </ul>

      <a href="/cv-matthew-grygar.pdf" target="_blank" rel="noreferrer" style={{
        fontFamily: "'IBM Plex Mono', monospace", fontSize: "0.7rem",
        letterSpacing: "0.15em", textTransform: "uppercase",
        color: "#C9A84C", textDecoration: "none",
        border: "1px solid #7A5E24", padding: "0.5rem 1.2rem",
        transition: "all 0.2s",
      }}
      onMouseOver={e => { e.currentTarget.style.background = "#C9A84C"; e.currentTarget.style.color = "#080C12"; }}
      onMouseOut={e  => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "#C9A84C"; }}
      >Download CV</a>
    </nav>
  );
}
