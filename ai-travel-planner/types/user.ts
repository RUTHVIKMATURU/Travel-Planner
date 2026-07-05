/**
 * User domain types.
 * These mirror the Prisma User model but are safe to pass to the client —
 * never include password or sensitive DB internals here.
 */

export interface User {
  id: string;
  name: string | null;
  email: string;
  image: string | null;
  emailVerified: Date | null;
  createdAt: Date;
  updatedAt: Date;
}

/** Subset used in session / auth contexts. */
export type SessionUser = Pick<User, "id" | "name" | "email" | "image">;

/** Payload for profile update actions. */
export interface UpdateProfilePayload {
  name: string;
  image?: string;
}
