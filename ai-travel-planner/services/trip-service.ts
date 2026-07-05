/**
 * Trip service layer.
 * Handles trip-related database operations and business logic.
 */

import { prisma } from "@/lib/prisma";
import { NotFoundError, ForbiddenError } from "@/utils/errors";
import type { Trip, CreateTripPayload, UpdateTripPayload, PaginatedResult } from "@/types";

export const tripService = {
  /**
   * Create a new trip for a user.
   */
  async create(userId: string, data: CreateTripPayload): Promise<Trip> {
    return prisma.trip.create({
      data: {
        ...data,
        userId,
        status: "DRAFT",
        currency: data.currency || "USD",
      },
    }) as Promise<Trip>;
  },

  /**
   * Get a trip by ID, ensuring the user owns it.
   */
  async findByIdAndUser(tripId: string, userId: string): Promise<Trip | null> {
    const trip = await prisma.trip.findUnique({
      where: { id: tripId },
    });

    if (!trip) return null;
    
    if (trip.userId !== userId) {
      throw new ForbiddenError("You can only access your own trips");
    }

    return trip as Trip;
  },

  /**
   * Get all trips for a user with pagination.
   */
  async findByUser(
    userId: string,
    options: { page?: number; pageSize?: number } = {}
  ): Promise<PaginatedResult<Trip>> {
    const page = Math.max(1, options.page || 1);
    const pageSize = Math.min(50, Math.max(1, options.pageSize || 10));
    const skip = (page - 1) * pageSize;

    const [items, total] = await Promise.all([
      prisma.trip.findMany({
        where: { userId },
        orderBy: { createdAt: "desc" },
        skip,
        take: pageSize,
      }),
      prisma.trip.count({
        where: { userId },
      }),
    ]);

    return {
      items: items as Trip[],
      meta: {
        page,
        pageSize,
        total,
        totalPages: Math.ceil(total / pageSize),
      },
    };
  },

  /**
   * Update a trip, ensuring the user owns it.
   */
  async update(tripId: string, userId: string, data: UpdateTripPayload): Promise<Trip> {
    // First check if trip exists and user owns it
    await this.findByIdAndUser(tripId, userId);

    const { id, ...updateData } = data;
    
    return prisma.trip.update({
      where: { id: tripId },
      data: updateData,
    }) as Promise<Trip>;
  },

  /**
   * Delete a trip, ensuring the user owns it.
   */
  async delete(tripId: string, userId: string): Promise<void> {
    // First check if trip exists and user owns it
    await this.findByIdAndUser(tripId, userId);

    await prisma.trip.delete({
      where: { id: tripId },
    });
  },

  /**
   * Get trip statistics for a user.
   */
  async getStats(userId: string) {
    const trips = await prisma.trip.findMany({
      where: { userId },
      select: {
        status: true,
        budget: true,
        currency: true,
      },
    });

    const stats = {
      total: trips.length,
      byStatus: {
        DRAFT: 0,
        PLANNED: 0,
        ONGOING: 0,
        COMPLETED: 0,
        CANCELLED: 0,
      },
      totalBudget: 0,
    };

    trips.forEach((trip) => {
      if (trip.status in stats.byStatus) {
        stats.byStatus[trip.status as keyof typeof stats.byStatus]++;
      }
      if (trip.budget && trip.currency === "USD") {
        stats.totalBudget += trip.budget;
      }
    });

    return stats;
  },
};