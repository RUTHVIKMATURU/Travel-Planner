import { z } from "zod";

/**
 * Trip validation schemas.
 * Used by trip creation / editing forms and Server Actions.
 */

export const createTripSchema = z
  .object({
    title: z
      .string()
      .min(3, "Title must be at least 3 characters")
      .max(100, "Title must be at most 100 characters"),
    destination: z
      .string()
      .min(2, "Destination must be at least 2 characters")
      .max(100, "Destination must be at most 100 characters"),
    startDate: z.coerce.date({ required_error: "Start date is required" }),
    endDate: z.coerce.date({ required_error: "End date is required" }),
    budget: z.coerce
      .number()
      .positive("Budget must be a positive number")
      .optional(),
    currency: z.string().length(3, "Currency must be a 3-letter code").default("USD"),
    notes: z.string().max(1000, "Notes must be at most 1000 characters").optional(),
  })
  .refine((data) => data.endDate >= data.startDate, {
    message: "End date must be on or after the start date",
    path: ["endDate"],
  });

export const updateTripSchema = createTripSchema.partial().extend({
  id: z.string().cuid("Invalid trip ID"),
});

export type CreateTripInput = z.infer<typeof createTripSchema>;
export type UpdateTripInput = z.infer<typeof updateTripSchema>;
