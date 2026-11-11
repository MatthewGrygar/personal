import { ImageResponse } from "next/og";
import { readFileSync } from "fs";
import { join } from "path";

export const runtime = "nodejs";
export const alt = "Matthew Grygar – Rozumím technologiím i lidem.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const buf = readFileSync(join(process.cwd(), "public/images/portrait.jpg"));
  const portrait = `data:image/jpeg;base64,${buf.toString("base64")}`;

  return new ImageResponse(
    (
      <div style={{ width: 1200, height: 630, display: "flex", background: "#FFFFFF", color: "#000000", fontFamily: "Helvetica, Arial, sans-serif" }}>
        <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "space-between", padding: "56px 56px 0" }}>
          <div style={{ display: "flex", flexDirection: "column", fontSize: 116, fontWeight: 900, lineHeight: 0.86, letterSpacing: -5 }}>
            <span>Matthew</span>
            <span>Grygar</span>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ display: "flex", fontSize: 40, fontWeight: 700, letterSpacing: -1 }}>
              Rozumím technologiím i lidem<span style={{ color: "#3F38FC" }}>.</span>
            </div>
            <div style={{ display: "flex", marginTop: 22, paddingTop: 16, borderTop: "3px solid #000", fontSize: 20, marginBottom: 40 }}>
              Projektové a provozní řízení · Account management · IT a digitální služby
            </div>
          </div>
          <div style={{ display: "flex", height: 18, background: "#3F38FC", margin: "0 -56px" }} />
        </div>
        {/* eslint-disable-next-line @next/next/no-img-element -- Satori renders plain <img> only */}
        <img alt="" src={portrait} width={434} height={630} style={{ width: 434, height: 630, objectFit: "cover", objectPosition: "50% 30%" }} />
      </div>
    ),
    size,
  );
}
