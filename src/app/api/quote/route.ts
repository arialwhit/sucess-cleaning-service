import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const form = await request.formData();
  if (String(form.get("company_website") ?? "")) {
    return NextResponse.json({ ok: true });
  }

  const payload = {
    name: String(form.get("name") ?? ""),
    email: String(form.get("email") ?? ""),
    phone: String(form.get("phone") ?? ""),
    service: String(form.get("service") ?? ""),
    propertyType: String(form.get("propertyType") ?? ""),
    message: String(form.get("message") ?? ""),
  };

  if (!payload.name || !payload.email || !payload.phone || !payload.service) {
    return NextResponse.json({ ok: false, error: "Missing fields" }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.QUOTE_TO_EMAIL ?? "hello@londonprimecleaning.co.uk";
  const from = process.env.QUOTE_FROM_EMAIL ?? "quotes@londonprimecleaning.co.uk";

  if (!apiKey) {
    console.info("[quote demo]", payload);
    return NextResponse.json({ ok: true, demo: true });
  }

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to,
      reply_to: payload.email,
      subject: `Quote request: ${payload.service} — ${payload.name}`,
      text: Object.entries(payload)
        .map(([key, value]) => `${key}: ${value}`)
        .join("\n"),
    }),
  });

  if (!response.ok) {
    return NextResponse.json({ ok: false }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
