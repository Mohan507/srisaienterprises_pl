import { NextRequest, NextResponse } from "next/server";

export interface ContactPayload {
  name: string;
  email: string;
  phone?: string;
  service: string;
  message: string;
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(req: NextRequest) {
  let body: Partial<ContactPayload>;

  try {
    body = await req.json();
  } catch {
    return NextResponse.json(
      { ok: false, message: "Invalid request body." },
      { status: 400 }
    );
  }

  const { name, email, phone, service, message } = body;

  if (!name || !email || !service || !message) {
    return NextResponse.json(
      { ok: false, message: "Please fill in all required fields." },
      { status: 400 }
    );
  }

  if (!isValidEmail(email)) {
    return NextResponse.json(
      { ok: false, message: "Please provide a valid email address." },
      { status: 400 }
    );
  }

  // In production: send an email (Resend/SendGrid), push to a CRM,
  // or write to a database here. Logged server-side for this demo.
  console.log("New Sri Sai Enterprises contact submission:", {
    name,
    email,
    phone,
    service,
    message,
    receivedAt: new Date().toISOString(),
  });

  return NextResponse.json({
    ok: true,
    message: "Thanks — your message has been received. Our team will reach out within one business day.",
  });
}
