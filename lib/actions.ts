"use server";

import { z } from "zod";
import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

const ContactSchema = z.object({
  name: z.string().min(6),
  phone: z.string().min(11),
});

export const saveContact = async (formData: FormData) => {
  const ValidateFields = ContactSchema.safeParse(
    Object.fromEntries(formData.entries())
  );
  if (!ValidateFields.success) {
    return {
      Error: ValidateFields.error.flatten().fieldErrors,
    };
  }

  try {
    await prisma.contact.create({
      data: {
        name: ValidateFields.data.name,
        phone: ValidateFields.data.phone,
      },
    });
  } catch (error) {
    return { message: "Failed to created contact" };
  }

  revalidatePath("/contacts");
  redirect("/contacts");
};
