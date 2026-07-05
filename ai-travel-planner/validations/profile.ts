import { z } from "zod";

/**
 * User profile validation schemas.
 */

export const updateProfileSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(60, "Name must be at most 60 characters"),
  email: z.string().email("Please enter a valid email address").optional(),
  image: z.string().url("Must be a valid URL").optional().or(z.literal("")),
  currency: z.string().optional(),
  language: z.string().optional(),
  travelInterests: z.array(z.string()).optional(),
});

export type UpdateProfileInput = z.infer<typeof updateProfileSchema>;

export const passwordSchema = z.object({
  currentPassword: z.string().min(1, "Current password is required"),
  newPassword: z.string().min(8, "Password must be at least 8 characters"),
  confirmPassword: z.string()
}).refine((data) => data.newPassword === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"],
});

export type PasswordInput = z.infer<typeof passwordSchema>;
