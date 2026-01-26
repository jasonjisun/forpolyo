import { ContactPayload } from "@/types/contact";
import { sendContactEmail } from "@/lib/email";

export async function handleContactSubmission(data: ContactPayload) {
  await sendContactEmail(data);
  return { success: true };
}
