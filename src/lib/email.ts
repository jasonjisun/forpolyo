import { Resend } from "resend";
import { ContactPayload } from "@/types/contact";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendContactEmail(data: ContactPayload) {
  return resend.emails.send({
    from: "Portfolio <onboarding@resend.dev>",
    to: process.env.CONTACT_RECEIVER_EMAIL as string,
    subject: `[Portfolio] ${data.subject}`,
    reply_to: data.email,
    html: `
      <h2>New Contact Message</h2>
      <p><strong>Name:</strong> ${data.name}</p>
      <p><strong>Email:</strong> ${data.email}</p>
      <p><strong>Phone:</strong> ${data.phone || "N/A"}</p>
      <hr />
      <p>${data.message}</p>
    `,
  });
}
