"use server";

import { revalidatePath } from "next/cache";
import { prisma } from "@/lib/prisma";

export async function addEntry(formData: FormData) {
  const name = formData.get("name") as string;
  const message = formData.get("message") as string;

  if (!name || !name.trim()) {
    throw new Error("Name is required");
  }

  if (!message || !message.trim()) {
    throw new Error("Message is required");
  }

  await prisma.entry.create({
    data: {
      name: name.trim(),
      message: message.trim(),
    },
  });

  revalidatePath("/");
}
