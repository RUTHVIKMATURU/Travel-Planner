/**
 * User service layer.
 * Handles user-related database operations and business logic.
 */

import { prisma } from "@/lib/prisma";
import { NotFoundError } from "@/utils/errors";
import type { User, UpdateProfilePayload } from "@/types";

export const userService = {
  /**
   * Get a user by ID.
   */
  async findById(id: string): Promise<User | null> {
    return prisma.user.findUnique({
      where: { id },
    });
  },

  /**
   * Get a user by email.
   */
  async findByEmail(email: string): Promise<User | null> {
    return prisma.user.findUnique({
      where: { email },
    });
  },

  /**
   * Create a new user.
   */
  async create(data: {
    name: string;
    email: string;
    password?: string;
    image?: string;
  }): Promise<User> {
    return prisma.user.create({
      data,
    });
  },

  /**
   * Update user profile.
   */
  async updateProfile(userId: string, data: UpdateProfilePayload): Promise<User> {
    const user = await prisma.user.findUnique({
      where: { id: userId },
    });

    if (!user) {
      throw new NotFoundError("User");
    }

    return prisma.user.update({
      where: { id: userId },
      data,
    });
  },

  /**
   * Delete a user and all associated data.
   */
  async delete(userId: string): Promise<void> {
    const user = await prisma.user.findUnique({
      where: { id: userId },
    });

    if (!user) {
      throw new NotFoundError("User");
    }

    // Note: In a real app, you'd want to handle cascading deletes
    // or soft deletes for data retention compliance
    await prisma.user.delete({
      where: { id: userId },
    });
  },
};