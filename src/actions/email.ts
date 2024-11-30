"use server";
import { ServerClient } from "postmark";

export async function sendEmail({
  to,
  subject,
  text,
}: {
  to: string;
  subject: string;
  text: string;
}) {
  if (!process.env.POSTMARK_API_KEY) {
    throw new Error("POSTMARK_API_KEY environment variable is not set");
  }
  if (!process.env.EMAIL_FROM) {
    throw new Error("EMAIL_FROM environment variable is not set");
  }

  const client = new ServerClient(process.env.POSTMARK_API_KEY);

  try {
    const response = await client.sendEmail({
      From: process.env.EMAIL_FROM,
      To: to.toLowerCase().trim(),
      Subject: subject.trim(),
      TextBody: text.trim(),
    });

    return {
      success: true,
      messageId: response.MessageID,
    };

  } catch (error) {
    console.error("Error sending email:", error);
    return {
      success: false,
      message: "Failed to send email. Please try again later.",
    }
  }
}
