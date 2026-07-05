/**
 * Application error handling utilities.
 *
 * Provides a consistent way to handle errors from Server Actions,
 * API routes, and service layer functions.
 */

import type { ActionResult } from "@/types/common";

/** Base application error class. */
export class AppError extends Error {
  constructor(
    message: string,
    public readonly code?: string,
    public readonly statusCode: number = 400
  ) {
    super(message);
    this.name = "AppError";
  }
}

/** Thrown when a requested resource does not exist. */
export class NotFoundError extends AppError {
  constructor(resource = "Resource") {
    super(`${resource} not found`, "NOT_FOUND", 404);
    this.name = "NotFoundError";
  }
}

/** Thrown when the caller is not authorized to perform an action. */
export class UnauthorizedError extends AppError {
  constructor(message = "You must be signed in to perform this action") {
    super(message, "UNAUTHORIZED", 401);
    this.name = "UnauthorizedError";
  }
}

/** Thrown when a caller is authenticated but lacks the required permissions. */
export class ForbiddenError extends AppError {
  constructor(message = "You do not have permission to perform this action") {
    super(message, "FORBIDDEN", 403);
    this.name = "ForbiddenError";
  }
}

/**
 * Wraps an async function and converts any thrown error into an ActionResult.
 * Use this inside Server Actions to avoid uncaught exceptions reaching the client.
 *
 * @example
 * export async function createTripAction(data: CreateTripInput) {
 *   return withActionError(async () => {
 *     const trip = await tripService.create(data);
 *     return { success: true, data: trip };
 *   });
 * }
 */
export async function withActionError<T>(
  fn: () => Promise<ActionResult<T>>
): Promise<ActionResult<T>> {
  try {
    return await fn();
  } catch (error) {
    if (error instanceof AppError) {
      return { success: false, error: error.message };
    }

    console.error("[Server Action Error]", error);
    return {
      success: false,
      error: "An unexpected error occurred. Please try again.",
    };
  }
}

/**
 * Extract a human-readable message from an unknown thrown value.
 */
export function getErrorMessage(error: unknown): string {
  if (error instanceof Error) return error.message;
  if (typeof error === "string") return error;
  return "An unexpected error occurred.";
}
