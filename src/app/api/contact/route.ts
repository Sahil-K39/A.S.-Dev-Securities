import { NextResponse } from "next/server";

const requiredFields = ["name", "phone", "email", "serviceNeeded", "message"];

export async function POST(request: Request) {
  let body: Record<string, unknown>;

  try {
    body = (await request.json()) as Record<string, unknown>;
  } catch {
    return NextResponse.json(
      { message: "Invalid request. Please send the form again." },
      { status: 400 }
    );
  }

  const missingField = requiredFields.find((field) => {
    const value = body[field];
    return typeof value !== "string" || value.trim().length === 0;
  });

  if (missingField) {
    return NextResponse.json(
      { message: "Please complete all required fields." },
      { status: 400 }
    );
  }

  const email = body.email;

  if (
    typeof email !== "string" ||
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())
  ) {
    return NextResponse.json(
      { message: "Please enter a valid email address." },
      { status: 400 }
    );
  }

  const webhookUrl = process.env.CONTACT_WEBHOOK_URL;

  if (webhookUrl) {
    const webhookResponse = await fetch(webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        source: "as-dev-deepindram-website",
        submittedAt: new Date().toISOString(),
        ...body
      })
    });

    if (!webhookResponse.ok) {
      return NextResponse.json(
        { message: "The message could not be delivered. Please use WhatsApp." },
        { status: 502 }
      );
    }
  }

  return NextResponse.json({
    message:
      "Your inquiry has been received. We will review it and respond soon."
  });
}
