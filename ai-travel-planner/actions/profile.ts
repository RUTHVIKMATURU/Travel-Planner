"use server";

import { z } from "zod";
import { updateProfileSchema, passwordSchema } from "@/validations/profile";
import { auth } from "@/auth/auth";
import { prisma } from "@/lib/prisma";
import bcrypt from "bcrypt";
import { revalidatePath } from "next/cache";

export async function updateProfile(data: z.infer<typeof updateProfileSchema>) {
  try {
    const session = await auth();
    if (!session?.user?.id) {
      return { error: "Unauthorized" };
    }

    const validatedData = updateProfileSchema.safeParse(data);
    if (!validatedData.success) {
      return { error: "Invalid data provided" };
    }

    const { name, email, currency, language, travelInterests } = validatedData.data;

    // We try to update name and email which exist in standard Auth.js Prisma schema
    // Note: If you add currency, language, travelInterests to your schema, 
    // uncomment those fields in the update block below.
    await prisma.user.update({
      where: { id: session.user.id },
      data: {
        name,
        // If email changes, you might need extra logic to verify it
        ...(email && { email }), 
        
        // --- Schema Update Required for these ---
        // currency,
        // language,
        // travelInterests,
      },
    });

    revalidatePath("/profile");
    return { success: "Profile updated successfully!" };
  } catch (error) {
    console.error("Profile update error:", error);
    return { error: "Failed to update profile. Please try again." };
  }
}

export async function updatePassword(data: z.infer<typeof passwordSchema>) {
  try {
    const session = await auth();
    if (!session?.user?.id) {
      return { error: "Unauthorized" };
    }

    const validatedData = passwordSchema.safeParse(data);
    if (!validatedData.success) {
      return { error: "Invalid data provided" };
    }

    const { currentPassword, newPassword } = validatedData.data;

    const user = await prisma.user.findUnique({
      where: { id: session.user.id },
    });

    if (!user || !user.password) {
      return { error: "No password set for this account (likely using OAuth)." };
    }

    const passwordsMatch = await bcrypt.compare(currentPassword, user.password);
    if (!passwordsMatch) {
      return { error: "Current password is incorrect." };
    }

    const hashedPassword = await bcrypt.hash(newPassword, 12);

    await prisma.user.update({
      where: { id: session.user.id },
      data: { password: hashedPassword },
    });

    return { success: "Password updated successfully!" };
  } catch (error) {
    console.error("Password update error:", error);
    return { error: "Failed to update password. Please try again." };
  }
}
