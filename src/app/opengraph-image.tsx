import { ImageResponse } from "next/og";
import { readFileSync } from "fs";
import { join } from "path";

export const runtime = "nodejs";
export const alt = "Matthew Grygar — IT Consultant, Lector & Technology Partner";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const buf = readFileSync(join(process.cwd(), "public/portrait.png"));
  const portraitSrc = `data:image/png;base64,${buf.toString("base64")}`;

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

        {/* Portrait — explicit dimensions required by satori */}
        <img
          src={portraitSrc}
          style={{
            position: "absolute",
            right: 0,
            bottom: 0,
            height: 630,
            width: 420,
            objectFit: "cover",
            objectPosition: "top center",
          }}
        />

        {/* Gradient fade left over portrait */}
        <div style={{
          position: "absolute", top: 0, left: 0, right: 0, bottom: 0,
          background: "linear-gradient(to right, #07090F 40%, rgba(7,9,15,0.85) 60%, rgba(7,9,15,0.2) 85%)",
          display: "flex",
        }} />

        {/* Corner brackets */}
        <div style={{ position: "absolute", top: 28, left: 28, width: 16, height: 16, borderTop: "1px solid #5B95F0", borderLeft: "1px solid #5B95F0", display: "flex" }} />
        <div style={{ position: "absolute", top: 28, right: 28, width: 16, height: 16, borderTop: "1px solid #5B95F0", borderRight: "1px solid #5B95F0", display: "flex" }} />
        <div style={{ position: "absolute", bottom: 28, left: 28, width: 16, height: 16, borderBottom: "1px solid #5B95F0", borderLeft: "1px solid #5B95F0", display: "flex" }} />
        <div style={{ position: "absolute", bottom: 28, right: 28, width: 16, height: 16, borderBottom: "1px solid #5B95F0", borderRight: "1px solid #5B95F0", display: "flex" }} />

        {/* Top-left coordinate */}
        <div style={{
          position: "absolute", top: 44, left: 48, display: "flex",
          fontFamily: "monospace", fontSize: 11, letterSpacing: 3, color: "#97A0B0",
        }}>
          N 50.0755° · Prague, CZ
        </div>

        {/* Main content — left column */}
        <div style={{
          position: "absolute", top: 0, left: 0, bottom: 0,
          width: 720,
          display: "flex", flexDirection: "column",
          justifyContent: "center",
          paddingLeft: 64, paddingRight: 48, gap: 0,
        }}>
          {/* Big headline */}
          <div style={{
            color: "#E8ECF2", fontSize: 72, fontWeight: 700,
            letterSpacing: -3, lineHeight: 1.05,
            marginBottom: 28,
          }}>
            External IT Support for{" "}
            <span style={{ color: "#5B95F0" }}>Businesses</span>
            {" "}&amp;{" "}
            <span style={{ color: "#5B95F0" }}>Individuals</span>
          </div>

          {/* Sub */}
          <div style={{
            color: "#97A0B0", fontSize: 22, fontWeight: 400,
            letterSpacing: 0.5,
            marginBottom: 40,
          }}>
            Microsoft 365  •  Networking  •  Infrastructure  •  Training
          </div>

          {/* Branding */}
          <div style={{
            display: "flex", alignItems: "center", gap: 10,
          }}>
            <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#5B95F0" }} />
            <div style={{ fontFamily: "monospace", fontSize: 13, letterSpacing: 3, color: "#5B95F0" }}>
              MATTHEW GRYGAR
            </div>
          </div>
        </div>

        {/* Bottom border line */}
        <div style={{
          position: "absolute", bottom: 0, left: 0, right: 0, height: 3,
          background: "linear-gradient(to right, #5B95F0, transparent 60%)",
          display: "flex",
        }} />
      </div>
    ),
    { ...size }
  );
}
