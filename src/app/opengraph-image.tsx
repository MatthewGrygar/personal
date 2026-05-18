import { ImageResponse } from "next/og";

export const alt = "Matthew Grygar — IT Consultant, Lector & Technology Partner";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#07090F",
          width: 1200,
          height: 630,
          display: "flex",
          position: "relative",
          overflow: "hidden",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        {/* Subtle grid */}
        <div style={{
          position: "absolute", top: 0, left: 0, right: 0, bottom: 0,
          backgroundImage: "linear-gradient(rgba(255,255,255,0.025) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.025) 1px,transparent 1px)",
          backgroundSize: "80px 80px",
          display: "flex",
        }} />

        {/* Portrait — right side */}
        <img
          src="https://matthewgrygar.com/portrait.png"
          style={{
            position: "absolute",
            right: -20,
            bottom: 0,
            height: 620,
            width: "auto",
          }}
        />

        {/* Gradient fade over portrait */}
        <div style={{
          position: "absolute", top: 0, left: 0, right: 0, bottom: 0,
          background: "linear-gradient(to right, #07090F 40%, rgba(7,9,15,0.85) 60%, rgba(7,9,15,0.3) 80%)",
          display: "flex",
        }} />

        {/* Corner brackets */}
        <div style={{ position: "absolute", top: 28, left: 28, width: 16, height: 16, borderTop: "1px solid #5B95F0", borderLeft: "1px solid #5B95F0", display: "flex" }} />
        <div style={{ position: "absolute", top: 28, right: 28, width: 16, height: 16, borderTop: "1px solid #5B95F0", borderRight: "1px solid #5B95F0", display: "flex" }} />
        <div style={{ position: "absolute", bottom: 28, left: 28, width: 16, height: 16, borderBottom: "1px solid #5B95F0", borderLeft: "1px solid #5B95F0", display: "flex" }} />
        <div style={{ position: "absolute", bottom: 28, right: 28, width: 16, height: 16, borderBottom: "1px solid #5B95F0", borderRight: "1px solid #5B95F0", display: "flex" }} />

        {/* Top-left coordinate */}
        <div style={{
          position: "absolute", top: 44, left: 48,
          display: "flex",
          fontFamily: "monospace", fontSize: 11, letterSpacing: 3,
          color: "#97A0B0",
        }}>
          N 50.0755°
        </div>

        {/* Main name — left, vertically centered */}
        <div style={{
          position: "absolute",
          top: 140,
          left: 48,
          display: "flex",
          flexDirection: "column",
          gap: 0,
        }}>
          <div style={{ color: "#E8ECF2", fontSize: 150, fontWeight: 700, letterSpacing: -7, lineHeight: 1 }}>
            Matthew
          </div>
          <div style={{ color: "#5B95F0", fontSize: 150, fontWeight: 600, letterSpacing: -7, lineHeight: 1 }}>
            Grygar
          </div>
        </div>

        {/* Bottom roles bar */}
        <div style={{
          position: "absolute", bottom: 0, left: 0, right: 0,
          height: 52,
          borderTop: "1px solid rgba(255,255,255,0.07)",
          background: "rgba(7,9,15,0.85)",
          display: "flex",
          alignItems: "center",
          paddingLeft: 48,
          gap: 14,
        }}>
          <div style={{ fontFamily: "monospace", fontSize: 13, letterSpacing: 2, color: "#97A0B0" }}>IT CONSULTANT</div>
          <div style={{ color: "#5B95F0", fontSize: 13, opacity: 0.5, fontFamily: "monospace" }}>/</div>
          <div style={{ fontFamily: "monospace", fontSize: 13, letterSpacing: 2, color: "#97A0B0" }}>LECTOR</div>
          <div style={{ color: "#5B95F0", fontSize: 13, opacity: 0.5, fontFamily: "monospace" }}>/</div>
          <div style={{ fontFamily: "monospace", fontSize: 13, letterSpacing: 2, color: "#97A0B0" }}>TECHNOLOGY PARTNER</div>
        </div>
      </div>
    ),
    { ...size }
  );
}
