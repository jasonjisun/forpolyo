import { ContactPayload } from "@/types/contact";

export function validateContact(data: ContactPayload) {
  if (!data.name || !data.email || !data.subject || !data.message) {
    return "All required fields must be filled.";
  }

  if (!data.email.includes("@")) {
    return "Invalid email address.";
  }

  return null;
}
