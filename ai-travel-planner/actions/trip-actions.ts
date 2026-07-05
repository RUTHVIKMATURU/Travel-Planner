/**
 * Trip-related Server Actions.
 * Handles trip CRUD operations with validation and error handling.
 */

"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { tripService } from "@/services/trip-service";
import { withActionError } from "@/utils/errors";
import { createTripSchema, updateTripSchema } from "@/validations/trip";
import { ROUTES } from "@/lib/constants";
import type { ActionResult } from "@/types/common";
import type { Trip } from "@/types/trip";

/**
 * Create a new trip.
 * TODO: Add auth check to get current user ID.
 */
export async function createTripAction(formData: FormData): Promise<ActionResult<Trip>> {
  return withActionError(async () => {
    // TODO: Get current user from session
    const userId = "temp-user-id"; // Placeholder
    
    const rawData = {
      title: formData.get("title") as string,
      destination: formData.get("destination") as string,
      startDate: formData.get("startDate") as string,
      endDate: formData.get("endDate") as string,
      budget: formData.get("budget") as string,
      currency: formData.get("currency") as string,
      notes: formData.get("notes") as string,
    };

    // Validate input
    const validatedData = createTripSchema.parse({
      ...rawData,
      budget: rawData.budget ? Number(rawData.budget) : undefined,
    });

    // Create trip
    const trip = await tripService.create(userId, validatedData);

    // Revalidate trips page
    revalidatePath(ROUTES.trips);

    return { success: true, data: trip, message: "Trip created successfully!" };
  });
}

/**
 * Update an existing trip.
 */
export async function updateTripAction(formData: FormData): Promise<ActionResult<Trip>> {
  return withActionError(async () => {
    // TODO: Get current user from session
    const userId = "temp-user-id"; // Placeholder
    
    const rawData = {
      id: formData.get("id") as string,
      title: formData.get("title") as string,
      destination: formData.get("destination") as string,
      startDate: formData.get("startDate") as string,
      endDate: formData.get("endDate") as string,
      budget: formData.get("budget") as string,
      currency: formData.get("currency") as string,
      notes: formData.get("notes") as string,
    };

    // Validate input
    const validatedData = updateTripSchema.parse({
      ...rawData,
      budget: rawData.budget ? Number(rawData.budget) : undefined,
    });

    // Update trip
    const trip = await tripService.update(validatedData.id, userId, validatedData);

    // Revalidate pages
    revalidatePath(ROUTES.trips);
    revalidatePath(ROUTES.tripDetail(validatedData.id));

    return { success: true, data: trip, message: "Trip updated successfully!" };
  });
}

/**
 * Delete a trip.
 */
export async function deleteTripAction(tripId: string): Promise<ActionResult<void>> {
  return withActionError(async () => {
    // TODO: Get current user from session
    const userId = "temp-user-id"; // Placeholder

    await tripService.delete(tripId, userId);

    // Revalidate trips page
    revalidatePath(ROUTES.trips);

    return { success: true, data: undefined, message: "Trip deleted successfully!" };
  });
}

/**
 * Duplicate a trip.
 */
export async function duplicateTripAction(tripId: string): Promise<ActionResult<Trip>> {
  return withActionError(async () => {
    // TODO: Get current user from session
    const userId = "temp-user-id"; // Placeholder

    // Get original trip
    const originalTrip = await tripService.findByIdAndUser(tripId, userId);
    if (!originalTrip) {
      throw new Error("Trip not found");
    }

    // Create duplicate with modified title
    const duplicateData = {
      title: `${originalTrip.title} (Copy)`,
      destination: originalTrip.destination,
      startDate: originalTrip.startDate,
      endDate: originalTrip.endDate,
      budget: originalTrip.budget || undefined,
      currency: originalTrip.currency,
      notes: originalTrip.notes || undefined,
    };

    const duplicatedTrip = await tripService.create(userId, duplicateData);

    // Revalidate trips page
    revalidatePath(ROUTES.trips);

    return { success: true, data: duplicatedTrip, message: "Trip duplicated successfully!" };
  });
}