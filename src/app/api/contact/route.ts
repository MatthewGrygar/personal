import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, phone, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.error("RESEND_API_KEY not set");
      return NextResponse.json({ error: "Email service not configured" }, { status: 500 });
    }

    const html = `
      <div style="font-family:sans-serif;max-width:600px;margin:0 auto;padding:24px;background:#0D1B2A;color:#E8EEF4;border-radius:12px;">
        <h2 style="color:#C8913A;margin-top:0;">📬 Nová zpráva z portfolia</h2>
        <table style="width:100%;border-collapse:collapse;">
          <tr><td style="padding:8px 0;color:#A8BDD0;width:100px;">Jméno</td><td style="padding:8px 0;font-weight:600;">${name}</td></tr>
          <tr><td style="padding:8px 0;color:#A8BDD0;">Email</td><td style="padding:8px 0;"><a href="mailto:${email}" style="color:#C8913A;">${email}</a></td></tr>
          <tr><td style="padding:8px 0;color:#A8BDD0;">Telefon</td><td style="padding:8px 0;">${phone || "—"}</td></tr>
        </table>
        <hr style="border:1px solid rgba(200,145,58,0.2);margin:16px 0;" />
        <p style="color:#A8BDD0;margin-bottom:8px;font-size:12px;text-transform:uppercase;letter-spacing:0.1em;">Zpráva</p>
        <p style="background:rgba(255,255,255,0.05);padding:16px;border-radius:8px;border-left:3px solid #C8913A;margin:0;line-height:1.6;">${message.replace(/\n/g, "<br/>")}</p>
        <p style="margin-top:24px;font-size:11px;color:rgba(168,189,208,0.5);">Odesláno z portfolio.matthewgrygar.cz</p>
      </div>
    `;

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "Portfolio <onboarding@resend.dev>",
        to: ["matthew.grygar@seznam.cz"],
        reply_to: email,
        subject: `📬 Portfolio — zpráva od ${name}`,
        html,
      }),
    });

    if (!res.ok) {
      const err = await res.text();
      console.error("Resend error:", err);
      return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Contact form error:", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
