/**
 * Authentication Server Actions.
 * 
 * Note: These are placeholders since you requested no auth implementation yet.
 * When you're ready to implement auth, these actions will handle:
 * - User registration
 * - Sign in/out
 * - Password reset
 * - Email verification
 */

"use server";

import type { ActionResult } from "@/types/common";
import type { LoginInput, SignupInput } from "@/validations/auth";

import { prisma } from "@/lib/prisma";
import bcrypt from "bcrypt";
import { signupSchema, loginSchema } from "@/validations/auth";

/**
 * Server action for user sign up.
 */
export async function signUpAction(data: SignupInput): Promise<ActionResult> {
  try {
    // 1. Validate the input using Zod
    const validatedData = signupSchema.safeParse(data);
    
    if (!validatedData.success) {
      return {
        success: false,
        error: "Invalid input data",
      };
    }

    const { name, email, password } = validatedData.data;

    // 2. Check if the user already exists
    const existingUser = await prisma.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      return {
        success: false,
        error: "A user with this email already exists",
      };
    }

    // 3. Hash the password with a higher cost factor for security
    const hashedPassword = await bcrypt.hash(password, 12);

    // 4. Create the new user
    await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
        // The default role is USER as per Prisma schema
      },
    });

    return { success: true };
  } catch (error) {
    console.error("Error in signUpAction:", error);
    return {
      success: false,
      error: "An unexpected error occurred during sign up",
    };
  }
}

import { signIn, signOut } from "@/auth/auth";
import { AuthError } from "next-auth";
import { isRedirectError } from "next/dist/client/components/redirect-error";

/**
 * Server action for user sign in with credentials.
 */
export async function signInAction(data: LoginInput): Promise<ActionResult> {
  try {
    const validatedData = loginSchema.safeParse(data);
    
    if (!validatedData.success) {
      return { success: false, error: "Invalid credentials" };
    }

    await signIn("credentials", {
      email: validatedData.data.email,
      password: validatedData.data.password,
      redirect: false,
    });
    
    return { success: true };
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return { success: false, error: "Invalid email or password" };
        default:
          return { success: false, error: "Something went wrong during sign in" };
      }
    }
    
    if (isRedirectError(error)) {
      throw error;
    }
    
    return { success: false, error: "An unexpected error occurred" };
  }
}

/**
 * Google OAuth sign in action
 */
export async function googleSignInAction() {
  await signIn("google", { redirectTo: "/" });
}

/**
 * GitHub OAuth sign in action
 */
export async function githubSignInAction() {
  await signIn("github", { redirectTo: "/" });
}

/**
 * Sign out action
 */
export async function signOutAction() {
  await signOut({ redirectTo: "/login" });
}