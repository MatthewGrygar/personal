import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, phone, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // Sanitize filename
    const timestamp = new Date().toISOString().replace(/[:.]/g, "-");
    const safeName = name.replace(/[^a-zA-Z0-9\-_záčšžýéíóúůňďťřĎŤŇÁČŠŽÝÉÍÓÚŮ ]/g, "").trim().slice(0, 40).replace(/\s+/g, "_");
    const filename = `${timestamp}_${safeName}.txt`;

    const submissionsDir = path.join(process.cwd(), "submissions");
    if (!fs.existsSync(submissionsDir)) fs.mkdirSync(submissionsDir, { recursive: true });

    const content = [
      `=== Kontaktní formulář — Matthew Grygar Portfolio ===`,
      `Datum:    ${new Date().toLocaleString("cs-CZ", { timeZone: "Europe/Prague" })}`,
      ``,
      `Jméno:    ${name}`,
      `Email:    ${email}`,
      `Telefon:  ${phone || "(nevyplněno)"}`,
      ``,
      `--- Zpráva ---`,
      message,
      ``,
      `=== konec ===`,
    ].join("\n");

    fs.writeFileSync(path.join(submissionsDir, filename), content, "utf-8");

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Contact form error:", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
