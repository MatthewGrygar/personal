import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Matthew Grygar — IT Risk Manager & Systems Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const baseUrl = process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

  let portraitSrc: string | undefined;
  try {
    const res = await fetch(`${baseUrl}/portrait.png`);
    if (res.ok) {
      const buf = await res.arrayBuffer();
      const b64 = btoa(String.fromCharCode(...new Uint8Array(buf)));
      portraitSrc = `data:image/png;base64,${b64}`;
    }
  } catch {
    // fall back to no portrait
  }

  return new ImageResponse(
    (
      <div
        style={{
          background: "#07090F",
          width: "100%",
          height: "100%",
          display: "flex",
          position: "relative",
          overflow: "hidden",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        {/* Subtle background grid */}
        <div
          style={{
            position: "absolute", inset: 0,
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />

        {/* Right-side gradient fade so portrait blends */}
        <div
          style={{
            position: "absolute", inset: 0,
            background: "linear-gradient(100deg, #07090F 42%, transparent 72%)",
          }}
        />

        {/* Portrait — right side */}
        {portraitSrc && (
          <img
            src={portraitSrc}
            style={{
              position: "absolute",
              right: 0,
              bottom: 0,
              height: "100%",
              width: "auto",
              objectFit: "contain",
              objectPosition: "bottom right",
              filter: "grayscale(30%) contrast(1.05)",
            }}
          />
        )}

        {/* Corner decorations */}
        <div style={{ position: "absolute", top: 28, left: 28, width: 16, height: 16, borderTop: "1px solid #5B95F0", borderLeft: "1px solid #5B95F0", display: "flex" }} />
        <div style={{ position: "absolute", top: 28, right: 28, width: 16, height: 16, borderTop: "1px solid #5B95F0", borderRight: "1px solid #5B95F0", display: "flex" }} />
        <div style={{ position: "absolute", bottom: 28, left: 28, width: 16, height: 16, borderBottom: "1px solid #5B95F0", borderLeft: "1px solid #5B95F0", display: "flex" }} />
        <div style={{ position: "absolute", bottom: 28, right: 28, width: 16, height: 16, borderBottom: "1px solid #5B95F0", borderRight: "1px solid #5B95F0", display: "flex" }} />

        {/* Top-left meta */}
        <div style={{ position: "absolute", top: 44, left: 48, display: "flex", flexDirection: "column", gap: 4 }}>
          <span style={{ fontFamily: "monospace", fontSize: 11, letterSpacing: "0.18em", color: "#97A0B0", textTransform: "uppercase" }}>
            N 50.0755°
          </span>
        </div>

        {/* Bottom-left meta */}
        <div style={{ position: "absolute", bottom: 44, left: 48, display: "flex" }}>
          <span style={{ fontFamily: "monospace", fontSize: 11, letterSpacing: "0.18em", color: "#5B95F0", textTransform: "uppercase" }}>
            PORTFOLIO / 2026
          </span>
        </div>

        {/* Main content — left aligned */}
        <div
          style={{
            position: "absolute",
            left: 48,
            top: "50%",
            transform: "translateY(-50%)",
            display: "flex",
            flexDirection: "column",
            gap: 0,
          }}
        >
          <span style={{ color: "#E8ECF2", fontSize: 128, fontWeight: 700, letterSpacing: "-0.05em", lineHeight: 0.9 }}>
            Matthew
          </span>
          <span style={{ color: "#5B95F0", fontSize: 128, fontWeight: 600, letterSpacing: "-0.05em", lineHeight: 0.9 }}>
            Grygar
          </span>
        </div>

        {/* Roles — bottom bar */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            borderTop: "1px solid rgba(255,255,255,0.07)",
            padding: "14px 48px",
            display: "flex",
            alignItems: "center",
            gap: 16,
            background: "rgba(7,9,15,0.6)",
          }}
        >
          <span style={{ fontFamily: "monospace", fontSize: 13, letterSpacing: "0.14em", color: "#97A0B0", textTransform: "uppercase" }}>IT Risk Manager</span>
          <span style={{ color: "#5B95F0", opacity: 0.6, fontFamily: "monospace", fontSize: 13 }}>/</span>
          <span style={{ fontFamily: "monospace", fontSize: 13, letterSpacing: "0.14em", color: "#97A0B0", textTransform: "uppercase" }}>Systems Engineer</span>
          <span style={{ color: "#5B95F0", opacity: 0.6, fontFamily: "monospace", fontSize: 13 }}>/</span>
          <span style={{ fontFamily: "monospace", fontSize: 13, letterSpacing: "0.14em", color: "#97A0B0", textTransform: "uppercase" }}>IAM Specialist</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
