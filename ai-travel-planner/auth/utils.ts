import { auth } from "@/auth/auth";

/**
 * Retrieves the currently logged-in user object from the session.
 * This should only be used in Server Components or Server Actions.
 */
export const currentUser = async () => {
  const session = await auth();
  return session?.user;
};

/**
 * Retrieves the currently logged-in user's role.
 * Useful for easy role-based access control checking.
 */
export const currentRole = async () => {
  const session = await auth();
  return session?.user?.role;
};

/**
 * Retrieves the entire session object.
 */
export const currentSession = async () => {
  return await auth();
};
