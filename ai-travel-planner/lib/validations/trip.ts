import { z } from "zod";

export const tripSchema = z.object({
  destination: z.string().min(2, "Destination must be at least 2 characters"),
  dateRange: z.object(
    {
      from: z.date({ message: "Start date is required" }),
      to: z.date().optional(),
    },
    { message: "Dates are required" }
  ),
  travelers: z.number().min(1, "At least 1 traveler is required").max(20, "Maximum 20 travelers allowed"),
  budget: z.enum(["budget", "moderate", "luxury"], {
    message: "Please select a budget level",
  }),
  interests: z.array(z.string()).min(1, "Please select at least one interest"),
});

export type TripFormValues = z.infer<typeof tripSchema>;

// Default values for new drafts
export const defaultTripValues: Partial<TripFormValues> = {
  destination: "",
  travelers: 1,
  budget: undefined,
  interests: [],
};
