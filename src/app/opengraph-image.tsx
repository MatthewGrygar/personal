import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Matthew Grygar — IT Risk Manager & Systems Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#07090F",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px 72px",
          fontFamily: "system-ui, sans-serif",
          position: "relative",
        }}
      >
        {/* Background grid */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />

        {/* Corner frame */}
        <div style={{ position: "absolute", top: 28, left: 28, width: 18, height: 18, borderTop: "1px solid #5B95F0", borderLeft: "1px solid #5B95F0", display: "flex" }} />
        <div style={{ position: "absolute", top: 28, right: 28, width: 18, height: 18, borderTop: "1px solid #5B95F0", borderRight: "1px solid #5B95F0", display: "flex" }} />
        <div style={{ position: "absolute", bottom: 28, left: 28, width: 18, height: 18, borderBottom: "1px solid #5B95F0", borderLeft: "1px solid #5B95F0", display: "flex" }} />
        <div style={{ position: "absolute", bottom: 28, right: 28, width: 18, height: 18, borderBottom: "1px solid #5B95F0", borderRight: "1px solid #5B95F0", display: "flex" }} />

        {/* Top label */}
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#5B95F0", boxShadow: "0 0 0 4px rgba(91,149,240,0.2)" }} />
          <span style={{ color: "#5B95F0", fontSize: 14, letterSpacing: "0.2em", textTransform: "uppercase" }}>
            MG / PORTFOLIO · 2026
          </span>
        </div>

        {/* Main name */}
        <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
          <span style={{ color: "#E8ECF2", fontSize: 110, fontWeight: 700, letterSpacing: "-0.05em", lineHeight: 0.95 }}>
            Matthew
          </span>
          <span style={{ color: "#5B95F0", fontSize: 110, fontWeight: 600, letterSpacing: "-0.05em", lineHeight: 0.95 }}>
            Grygar
          </span>
        </div>

        {/* Bottom row */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
          <div style={{ display: "flex", gap: 10, alignItems: "center", color: "#97A0B0", fontSize: 16, letterSpacing: "0.12em", textTransform: "uppercase" }}>
            <span>IT Risk Manager</span>
            <span style={{ color: "#5B95F0", opacity: 0.7 }}>/</span>
            <span>Systems Engineer</span>
            <span style={{ color: "#5B95F0", opacity: 0.7 }}>/</span>
            <span>IAM Specialist</span>
          </div>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 4, color: "#5F6878", fontSize: 13, letterSpacing: "0.14em", textTransform: "uppercase" }}>
            <span style={{ color: "#97A0B0" }}>Prague · CZ</span>
            <span>Hybrid · Open to work</span>
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
