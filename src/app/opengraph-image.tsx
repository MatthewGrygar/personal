import { ImageResponse } from "next/og";
import { readFileSync } from "fs";
import { join } from "path";

export const runtime = "nodejs";
export const alt = "Matthew Grygar — Rozumím technologiím i lidem.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const buf = readFileSync(join(process.cwd(), "public/images/portrait.jpg"));
  const portrait = `data:image/jpeg;base64,${buf.toString("base64")}`;

  return new ImageResponse(
    (
      <div style={{ width: 1200, height: 630, display: "flex", background: "#F0EDE6", color: "#191B1A", fontFamily: "Georgia, serif" }}>
        <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", padding: "0 64px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 34, fontFamily: "sans-serif", fontSize: 18, letterSpacing: 3, color: "#4B4F4C" }}>
            <div style={{ width: 56, height: 2, background: "#B84F40", display: "flex" }} />
            MATTHEW GRYGAR · PRAHA
          </div>
          <div style={{ display: "flex", flexDirection: "column", fontSize: 52, lineHeight: 1.1, letterSpacing: -1 }}>
            <span>Rozumím technologiím</span>
            <span style={{ fontStyle: "italic", color: "#B84F40" }}>i lidem.</span>
          </div>
          <div style={{ display: "flex", marginTop: 36, paddingTop: 18, borderTop: "1px solid rgba(25,25,25,.25)", fontFamily: "sans-serif", fontSize: 20, color: "#4B4F4C" }}>
            Projektové a provozní řízení · Account management · IT a digitální služby
          </div>
        </div>
        {/* eslint-disable-next-line @next/next/no-img-element -- Satori renders plain <img> only */}
        <img alt="" src={portrait} width={434} height={630} style={{ width: 434, height: 630, objectFit: "cover", objectPosition: "50% 30%" }} />
      </div>
    ),
    size,
  );
}
