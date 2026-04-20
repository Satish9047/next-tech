"use server";

import { revalidatePath } from "next/cache";
import { z } from "zod";
import dbConnect from "@/lib/db";
import { ContactMessage } from "@/models/ContactMessage";
import { contactMessageSchema } from "@/schemas/contact";
import { getCurrentUser } from "@/lib/session";

export async function submitContactMessage(
  data: z.infer<typeof contactMessageSchema>,
) {
  try {
    const parsed = contactMessageSchema.safeParse(data);
    if (!parsed.success) {
      return {
        error: "Validation failed",
        fields: parsed.error.flatten().fieldErrors,
      };
    }

    await dbConnect();
    await ContactMessage.create(parsed.data);
    revalidatePath("/admin/messages");

    return { success: true };
  } catch (error: unknown) {
    console.error("Submit contact message error:", error);
    return { error: "Could not submit your message. Please try again." };
  }
}

export async function markContactMessageAsRead(id: string) {
  try {
    const currentUser = await getCurrentUser();
    if (!currentUser) return { error: "Unauthorized" };
    if (currentUser.role !== "admin") return { error: "Forbidden" };

    if (!id) return { error: "Message id is required" };
    await dbConnect();
    await ContactMessage.findByIdAndUpdate(id, { isRead: true }).lean();
    revalidatePath("/admin/messages");
    revalidatePath(`/admin/messages/${id}`);
    return { success: true };
  } catch (error: unknown) {
    console.error("Mark as read error:", error);
    return { error: "Could not mark message as read" };
  }
}

export async function deleteContactMessage(id: string) {
  try {
    const currentUser = await getCurrentUser();
    if (!currentUser) return { error: "Unauthorized" };
    if (currentUser.role !== "admin") return { error: "Forbidden" };

    if (!id) return { error: "Message id is required" };
    await dbConnect();
    await ContactMessage.findByIdAndDelete(id).lean();
    revalidatePath("/admin/messages");
    return { success: true };
  } catch (error: unknown) {
    console.error("Delete contact message error:", error);
    return { error: "Could not delete message" };
  }
}
