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
      <div style={{ background: "#07090F", width: 1200, height: 630, display: "flex", position: "relative", overflow: "hidden", fontFamily: "system-ui, sans-serif" }}>

        {/* Grid bg */}
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0, backgroundImage: "linear-gradient(rgba(255,255,255,0.025) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.025) 1px,transparent 1px)", backgroundSize: "80px 80px", display: "flex" }} />

        {/* Portrait */}
        <img alt="" src={portraitSrc} style={{ position: "absolute", right: 0, bottom: 0, height: 630, width: 420, objectFit: "cover", objectPosition: "top center" }} />

        {/* Fade over portrait */}
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0, background: "linear-gradient(to right, #07090F 42%, rgba(7,9,15,0.9) 62%, rgba(7,9,15,0.15) 85%)", display: "flex" }} />

        {/* Corner TL */}
        <div style={{ position: "absolute", top: 28, left: 28, width: 16, height: 16, borderTop: "1px solid #5B95F0", borderLeft: "1px solid #5B95F0", display: "flex" }} />
        {/* Corner TR */}
        <div style={{ position: "absolute", top: 28, right: 28, width: 16, height: 16, borderTop: "1px solid #5B95F0", borderRight: "1px solid #5B95F0", display: "flex" }} />
        {/* Corner BL */}
        <div style={{ position: "absolute", bottom: 28, left: 28, width: 16, height: 16, borderBottom: "1px solid #5B95F0", borderLeft: "1px solid #5B95F0", display: "flex" }} />
        {/* Corner BR */}
        <div style={{ position: "absolute", bottom: 28, right: 28, width: 16, height: 16, borderBottom: "1px solid #5B95F0", borderRight: "1px solid #5B95F0", display: "flex" }} />

        {/* Coordinate top-left */}
        <div style={{ position: "absolute", top: 44, left: 56, display: "flex", fontFamily: "monospace", fontSize: 11, letterSpacing: 3, color: "#5F6878" }}>
          N 50.0755° · Prague, CZ
        </div>

        {/* Left content column */}
        <div style={{ position: "absolute", top: 0, left: 0, bottom: 0, width: 730, display: "flex", flexDirection: "column", justifyContent: "center", paddingLeft: 64, paddingRight: 40 }}>

          {/* Headline line 1 */}
          <div style={{ display: "flex", flexWrap: "wrap", fontSize: 68, fontWeight: 700, letterSpacing: -2, lineHeight: 1.05, marginBottom: 8 }}>
            <span style={{ color: "#E8ECF2" }}>External IT Support for</span>
          </div>

          {/* Headline line 2 */}
          <div style={{ display: "flex", flexWrap: "wrap", fontSize: 68, fontWeight: 700, letterSpacing: -2, lineHeight: 1.05, marginBottom: 32 }}>
            <span style={{ color: "#5B95F0" }}>Businesses</span>
            <span style={{ color: "#E8ECF2" }}>&nbsp;&amp;&nbsp;</span>
            <span style={{ color: "#5B95F0" }}>Individuals</span>
          </div>

          {/* Sub */}
          <div style={{ display: "flex", fontSize: 20, color: "#97A0B0", letterSpacing: 0.5, marginBottom: 44 }}>
            Microsoft 365  ·  Networking  ·  Infrastructure  ·  Training
          </div>

          {/* Branding */}
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#5B95F0", display: "flex" }} />
            <div style={{ fontFamily: "monospace", fontSize: 13, letterSpacing: 3, color: "#5B95F0", display: "flex" }}>
              MATTHEW GRYGAR
            </div>
          </div>
        </div>

        {/* Bottom accent line */}
        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 3, background: "linear-gradient(to right, #5B95F0, transparent 55%)", display: "flex" }} />
      </div>
    ),
    { ...size }
  );
}
