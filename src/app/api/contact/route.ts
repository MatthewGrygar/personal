import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { name, email, phone: company, subject, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      return NextResponse.json({ error: "Email service not configured" }, { status: 500 });
    }

    const html = `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8"></head>
<body style="margin:0;padding:0;background:#07090F;font-family:'Segoe UI',system-ui,sans-serif;">
  <div style="max-width:580px;margin:32px auto;background:#0D1119;border:1px solid rgba(255,255,255,0.07);padding:0;overflow:hidden;">

    <!-- Header -->
    <div style="background:#131822;border-bottom:1px solid rgba(255,255,255,0.07);padding:20px 28px;display:flex;align-items:center;gap:10px;">
      <div style="width:6px;height:6px;border-radius:50%;background:#5B95F0;box-shadow:0 0 0 3px rgba(91,149,240,0.2);flex-shrink:0;"></div>
      <span style="font-family:monospace;font-size:11px;letter-spacing:0.18em;text-transform:uppercase;color:#5B95F0;">MG / PORTFOLIO — NEW MESSAGE</span>
    </div>

    <!-- Body -->
    <div style="padding:28px;">

      <!-- Subject chip -->
      <div style="margin-bottom:20px;">
        <span style="font-family:monospace;font-size:10px;letter-spacing:0.16em;text-transform:uppercase;color:#5F6878;">Subject</span><br>
        <span style="display:inline-block;margin-top:6px;padding:5px 12px;border:1px solid #5B95F0;color:#5B95F0;font-family:monospace;font-size:11px;letter-spacing:0.14em;text-transform:uppercase;">${subject || "—"}</span>
      </div>

      <!-- Fields -->
      <table style="width:100%;border-collapse:collapse;margin-bottom:24px;">
        <tr>
          <td style="padding:10px 0;border-bottom:1px solid rgba(255,255,255,0.06);color:#5F6878;font-family:monospace;font-size:10px;letter-spacing:0.14em;text-transform:uppercase;width:110px;vertical-align:top;">Name</td>
          <td style="padding:10px 0;border-bottom:1px solid rgba(255,255,255,0.06);color:#E8ECF2;font-size:15px;font-weight:500;">${name}</td>
        </tr>
        <tr>
          <td style="padding:10px 0;border-bottom:1px solid rgba(255,255,255,0.06);color:#5F6878;font-family:monospace;font-size:10px;letter-spacing:0.14em;text-transform:uppercase;vertical-align:top;">Email</td>
          <td style="padding:10px 0;border-bottom:1px solid rgba(255,255,255,0.06);"><a href="mailto:${email}" style="color:#5B95F0;font-size:15px;">${email}</a></td>
        </tr>
        <tr>
          <td style="padding:10px 0;color:#5F6878;font-family:monospace;font-size:10px;letter-spacing:0.14em;text-transform:uppercase;vertical-align:top;">Company</td>
          <td style="padding:10px 0;color:#97A0B0;font-size:15px;">${company || "—"}</td>
        </tr>
      </table>

      <!-- Message -->
      <div style="font-family:monospace;font-size:10px;letter-spacing:0.16em;text-transform:uppercase;color:#5F6878;margin-bottom:10px;">Message</div>
      <div style="background:#07090F;border:1px solid rgba(255,255,255,0.07);border-left:3px solid #5B95F0;padding:16px 20px;color:#E8ECF2;font-size:15px;line-height:1.7;">
        ${message.replace(/\n/g, "<br>")}
      </div>

      <!-- Reply hint -->
      <div style="margin-top:20px;padding:14px 16px;background:#131822;border:1px solid rgba(255,255,255,0.06);">
        <span style="font-family:monospace;font-size:10px;color:#5F6878;letter-spacing:0.12em;text-transform:uppercase;">Reply directly to: </span>
        <a href="mailto:${email}" style="color:#5B95F0;font-size:13px;">${email}</a>
      </div>
    </div>

    <!-- Footer -->
    <div style="border-top:1px solid rgba(255,255,255,0.07);padding:14px 28px;background:#07090F;">
      <span style="font-family:monospace;font-size:10px;color:rgba(95,104,120,0.7);letter-spacing:0.12em;text-transform:uppercase;">matthewgrygar.com · portfolio contact form</span>
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
        subject: `[Portfolio] ${subject || "Message"} — ${name}`,
        html,
      }),
    });

    if (!res.ok) {
      const err = await res.text();
      console.error("Resend error:", err);
      return NextResponse.json({ error: "Failed to send" }, { status: 500 });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Contact error:", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
