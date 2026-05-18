import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Matthew Grygar — IT Consultant, Lector & Technology Partner";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const portraitSrc = "https://matthewgrygar.com/portrait.png";

  return new ImageResponse(
    (
      <div
        style={{
          background: "#07090F",
          width: "100%", height: "100%",
          display: "flex",
          position: "relative",
          overflow: "hidden",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        {/* Grid background */}
        <div style={{
          position: "absolute", inset: 0,
          backgroundImage: "linear-gradient(rgba(255,255,255,0.025) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.025) 1px,transparent 1px)",
          backgroundSize: "80px 80px",
        }} />

        {/* Portrait — right side, faded out to left */}
        <img src={portraitSrc} style={{
          position: "absolute", right: 0, bottom: 0,
          height: "100%", width: "auto",
          objectFit: "contain", objectPosition: "bottom right",
          filter: "grayscale(25%) contrast(1.05)",
        }} />
        <div style={{
          position: "absolute", inset: 0,
          background: "linear-gradient(95deg, #07090F 38%, rgba(7,9,15,0.5) 65%, transparent 80%)",
        }} />

        {/* Corner brackets */}
        {[
          { top: 28, left: 28, borderTop: "1px solid #5B95F0", borderLeft: "1px solid #5B95F0" },
          { top: 28, right: 28, borderTop: "1px solid #5B95F0", borderRight: "1px solid #5B95F0" },
          { bottom: 28, left: 28, borderBottom: "1px solid #5B95F0", borderLeft: "1px solid #5B95F0" },
          { bottom: 28, right: 28, borderBottom: "1px solid #5B95F0", borderRight: "1px solid #5B95F0" },
        ].map((s, k) => (
          <div key={k} style={{ position: "absolute", width: 16, height: 16, display: "flex", ...s }} />
        ))}

        {/* Top-left meta */}
        <span style={{
          position: "absolute", top: 44, left: 48,
          fontFamily: "monospace", fontSize: 11, letterSpacing: "0.18em",
          color: "#97A0B0", textTransform: "uppercase",
          display: "flex",
        }}>
          N 50.0755° · Prague, CZ
        </span>

        {/* Bottom-left meta */}
        <span style={{
          position: "absolute", bottom: 44, left: 48,
          fontFamily: "monospace", fontSize: 11, letterSpacing: "0.18em",
          color: "#5B95F0", textTransform: "uppercase",
          display: "flex",
        }}>
          PORTFOLIO / 2026
        </span>

        {/* Name — large, left */}
        <div style={{
          position: "absolute",
          left: 48, top: "50%",
          display: "flex", flexDirection: "column", gap: 0,
          transform: "translateY(-55%)",
        }}>
          <span style={{ color: "#E8ECF2", fontSize: 118, fontWeight: 700, letterSpacing: "-0.05em", lineHeight: 0.92 }}>
            Matthew
          </span>
          <span style={{ color: "#5B95F0", fontSize: 118, fontWeight: 600, letterSpacing: "-0.05em", lineHeight: 0.92 }}>
            Grygar
          </span>
        </div>

        {/* Roles bottom bar */}
        <div style={{
          position: "absolute", bottom: 0, left: 0, right: 0,
          borderTop: "1px solid rgba(255,255,255,0.07)",
          padding: "13px 48px",
          display: "flex", alignItems: "center", gap: 14,
          background: "rgba(7,9,15,0.7)",
        }}>
          {["IT Consultant", "Lector", "Technology Partner"].map((role, k) => (
            <span key={k} style={{ display: "flex", alignItems: "center", gap: 14 }}>
              <span style={{ fontFamily: "monospace", fontSize: 13, letterSpacing: "0.14em", color: "#97A0B0", textTransform: "uppercase" }}>
                {role}
              </span>
              {k < 2 && <span style={{ color: "#5B95F0", opacity: 0.5, fontFamily: "monospace", fontSize: 13 }}>/</span>}
            </span>
          ))}
        </div>
      </div>
    ),
    { ...size }
  );
}
