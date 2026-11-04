import { NextRequest, NextResponse } from "next/server";

const esc = (s: unknown) =>
  String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!);

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const name = String(body.name ?? "").trim().slice(0, 200);
    const email = String(body.email ?? "").trim().slice(0, 200);
    const company = String(body.company ?? "").trim().slice(0, 200);
    const subject = String(body.subject ?? "").trim().slice(0, 100);
    const message = String(body.message ?? "").trim().slice(0, 1000);
    const lang = body.lang === "en" ? "EN" : "CZ";

    if (!name || !EMAIL_RE.test(email) || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      return NextResponse.json({ error: "Email service not configured" }, { status: 500 });
    }

    const row = (k: string, v: string) => `
        <tr>
          <td style="padding:10px 0;border-bottom:1px solid rgba(25,25,25,.15);color:#4D4840;font-size:12px;letter-spacing:.12em;text-transform:uppercase;width:110px;vertical-align:top;">${k}</td>
          <td style="padding:10px 0;border-bottom:1px solid rgba(25,25,25,.15);color:#191919;font-size:15px;">${v}</td>
        </tr>`;

    const html = `<!DOCTYPE html>
<html>
<head><meta charset="utf-8"></head>
<body style="margin:0;padding:0;background:#F5F1E8;font-family:'Helvetica Neue',Arial,sans-serif;">
  <div style="max-width:580px;margin:32px auto;background:#FFFDF8;border:1px solid rgba(25,25,25,.15);">
    <div style="padding:22px 28px;border-bottom:3px double #191919;">
      <span style="font-family:Georgia,serif;font-size:20px;color:#191919;">Matthew Grygar</span>
      <span style="float:right;font-size:12px;letter-spacing:.12em;text-transform:uppercase;color:#A84B37;line-height:28px;">Nová zpráva z webu</span>
    </div>
    <div style="padding:24px 28px;">
      <table style="width:100%;border-collapse:collapse;margin-bottom:24px;">
        ${row("Téma", esc(subject) || "—")}
        ${row("Jméno", esc(name))}
        ${row("E-mail", `<a href="mailto:${esc(email)}" style="color:#A84B37;">${esc(email)}</a>`)}
        ${row("Firma", esc(company) || "—")}
        ${row("Jazyk", lang)}
      </table>
      <div style="border-left:2px solid #A84B37;padding:4px 0 4px 18px;color:#191919;font-size:16px;line-height:1.65;">
        ${esc(message).replace(/\n/g, "<br>")}
      </div>
    </div>
    <div style="padding:14px 28px;border-top:1px solid rgba(25,25,25,.15);font-size:12px;color:#4D4840;">
      Odpovědí na tento e-mail odpovíte přímo odesílateli · matthewgrygar.com
    </div>
  </div>
</body>
</html>`;

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "Portfolio Contact <onboarding@resend.dev>",
        to: ["matthew.grygar@seznam.cz"],
        reply_to: email,
        subject: `[Portfolio] ${subject || "Zpráva"} — ${name}`,
        html,
      }),
    });

    if (!res.ok) {
      console.error("Resend error:", await res.text());
      return NextResponse.json({ error: "Failed to send" }, { status: 500 });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Contact error:", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
