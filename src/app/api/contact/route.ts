import { NextResponse } from "next/server";
import { validateContact } from "@/lib/validation";
import { handleContactSubmission } from "@/services/contact.service";
import { ContactPayload } from "@/types/contact";

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as ContactPayload;

    const error = validateContact(body);
    if (error) {
      return NextResponse.json(
        { success: false, message: error },
        { status: 400 },
      );
    }

    await handleContactSubmission(body);

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: "Server error" },
      { status: 500 },
    );
  }
}
