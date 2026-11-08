import { NextRequest, NextResponse } from "next/server";

const OWNER = "matthew.grygar@seznam.cz";

const esc = (s: unknown) =>
  String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!);

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// The form sends the option value; emails show the label.
const SUBJECTS: Record<string, { cs: string; en: string }> = {
  job: { cs: "Pracovní příležitost", en: "Job opportunity" },
  project: { cs: "Spolupráce na projektu", en: "Project collaboration" },
  consult: { cs: "Konzultace", en: "Consultation" },
  other: { cs: "Jiné", en: "Other" },
};

// Shared shell for both emails, in the site's palette.
const shell = (tag: string, inner: string, foot: string) => `<!DOCTYPE html>
<html>
<head><meta charset="utf-8"></head>
<body style="margin:0;padding:0;background:#F0EDE6;font-family:'Helvetica Neue',Arial,sans-serif;">
  <div style="max-width:580px;margin:32px auto;background:#FBFAF6;border:1px solid rgba(25,27,26,.16);">
    <div style="padding:22px 28px;border-bottom:1px solid #191B1A;">
      <span style="font-size:18px;font-weight:600;color:#191B1A;">Matthew Grygar</span>
      <span style="float:right;font-family:Menlo,monospace;font-size:12px;color:#B84F40;line-height:26px;">${tag}</span>
    </div>
    <div style="padding:24px 28px;">${inner}</div>
    <div style="padding:14px 28px;border-top:1px solid rgba(25,27,26,.16);font-size:12px;color:#4B4F4C;">${foot}</div>
  </div>
</body>
</html>`;

const quote = (message: string) =>
  `<div style="border-left:2px solid #B84F40;padding:4px 0 4px 18px;color:#191B1A;font-size:16px;line-height:1.65;">${esc(message).replace(/\n/g, "<br>")}</div>`;

async function send(apiKey: string, payload: Record<string, unknown>) {
  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  if (!res.ok) console.error("Resend error:", await res.text());
  return res.ok;
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const name = String(body.name ?? "").trim().slice(0, 200);
    const email = String(body.email ?? "").trim().slice(0, 200);
    const company = String(body.company ?? "").trim().slice(0, 200);
    const subjectRaw = String(body.subject ?? "").trim().slice(0, 100);
    const message = String(body.message ?? "").trim().slice(0, 1000);
    const lang: "cs" | "en" = body.lang === "en" ? "en" : "cs";
    const subject = SUBJECTS[subjectRaw] ?? { cs: subjectRaw, en: subjectRaw };

    if (!name || !EMAIL_RE.test(email) || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      return NextResponse.json({ error: "Email service not configured" }, { status: 500 });
    }
    // RESEND_FROM must be an address on a domain verified in Resend (e.g. "Matthew Grygar <kontakt@matthewgrygar.com>").
    // Without it Resend's test sender can only deliver to the account owner, so no confirmation goes out.
    const from = process.env.RESEND_FROM;

    const row = (k: string, v: string) => `
        <tr>
          <td style="padding:10px 0;border-bottom:1px solid rgba(25,27,26,.16);color:#4B4F4C;font-family:Menlo,monospace;font-size:12px;width:110px;vertical-align:top;">${k}</td>
          <td style="padding:10px 0;border-bottom:1px solid rgba(25,27,26,.16);color:#191B1A;font-size:15px;">${v}</td>
        </tr>`;

    const notification = shell(
      "Nová zpráva z webu",
      `<table style="width:100%;border-collapse:collapse;margin-bottom:24px;">
        ${row("Téma", esc(subject.cs) || "—")}
        ${row("Jméno", esc(name))}
        ${row("E-mail", `<a href="mailto:${esc(email)}" style="color:#B84F40;">${esc(email)}</a>`)}
        ${row("Firma", esc(company) || "—")}
        ${row("Jazyk", lang.toUpperCase())}
      </table>${quote(message)}`,
      "Odpovědí na tento e-mail odpovíte přímo odesílateli · matthewgrygar.com",
    );

    const delivered = await send(apiKey, {
      from: from ?? "Portfolio Contact <onboarding@resend.dev>",
      to: [OWNER],
      reply_to: email,
      subject: `[Portfolio] ${subject.cs || "Zpráva"} — ${name}`,
      html: notification,
    });
    if (!delivered) return NextResponse.json({ error: "Failed to send" }, { status: 500 });

    // Confirmation copy for the sender. Best effort: the message itself has already been delivered.
    let confirmation = false;
    if (from) {
      const t =
        lang === "en"
          ? {
              subject: "Thanks for your message — Matthew Grygar",
              tag: "Message received",
              hi: `Hi ${esc(name)},`,
              body: "thanks for getting in touch. Your message reached me and I’ll reply to this address as soon as I can. Here’s a copy of what you sent:",
              topic: `Subject: ${esc(subject.en)}`,
              foot: "You can reply to this email directly · matthewgrygar.com",
            }
          : {
              subject: "Děkuji za zprávu — Matthew Grygar",
              tag: "Zpráva přijata",
              hi: `Dobrý den, ${esc(name)},`,
              body: "děkuji, že jste se ozval(a). Vaše zpráva mi dorazila a odpovím na tuto adresu, jakmile to bude možné. Pro jistotu posílám kopii toho, co jste napsal(a):",
              topic: `Téma: ${esc(subject.cs)}`,
              foot: "Na tento e-mail můžete rovnou odpovědět · matthewgrygar.com",
            };
      confirmation = await send(apiKey, {
        from,
        to: [email],
        reply_to: OWNER,
        subject: t.subject,
        html: shell(
          t.tag,
          `<p style="margin:0 0 12px;font-size:16px;color:#191B1A;">${t.hi}</p>
           <p style="margin:0 0 20px;font-size:16px;line-height:1.6;color:#191B1A;">${t.body}</p>
           <p style="margin:0 0 10px;font-family:Menlo,monospace;font-size:12px;color:#4B4F4C;">${t.topic}</p>
           ${quote(message)}
           <p style="margin:24px 0 0;font-size:16px;color:#191B1A;">Matthew Grygar</p>`,
          t.foot,
        ),
      });
    }

    return NextResponse.json({ ok: true, confirmation });
  } catch (err) {
    console.error("Contact error:", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
