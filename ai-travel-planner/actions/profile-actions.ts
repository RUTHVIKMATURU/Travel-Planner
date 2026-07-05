/**
 * User profile Server Actions.
 */

"use server";

import { revalidatePath } from "next/cache";
import { userService } from "@/services/user-service";
import { withActionError } from "@/utils/errors";
import { updateProfileSchema } from "@/validations/profile";
import { ROUTES } from "@/lib/constants";
import type { ActionResult } from "@/types/common";
import type { User } from "@/types/user";

/**
 * Update user profile.
 */
export async function updateProfileAction(formData: FormData): Promise<ActionResult<User>> {
  return withActionError(async () => {
    // TODO: Get current user from session
    const userId = "temp-user-id"; // Placeholder
    
    const rawData = {
      name: formData.get("name") as string,
      image: formData.get("image") as string,
    };

    // Validate input
    const validatedData = updateProfileSchema.parse(rawData);

    // Update profile
    const user = await userService.updateProfile(userId, validatedData);

    // Revalidate profile page
    revalidatePath(ROUTES.profile);

    return { success: true, data: user, message: "Profile updated successfully!" };
  });
}