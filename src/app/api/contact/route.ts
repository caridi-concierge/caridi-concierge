import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const { name, email, message } = await req.json();

  try {
    await resend.emails.send({
      from: "Caridi Concierge <noreply@caridiconcierge.com>",
      to: "booking@caridiconcierge.com",
      subject: `New contact form submission from ${name}`,
      replyTo: email,
      text: message,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}