/**
 * Formatting utilities for dates, currency, numbers, etc.
 */

import { format } from "date-fns";

/**
 * Format a date into a readable string.
 * @example formatDate(new Date(), "MMM dd, yyyy") => "Jan 15, 2024"
 */
export function formatDate(date: Date | string, pattern = "MMM dd, yyyy"): string {
  return format(new Date(date), pattern);
}

/**
 * Format a date range.
 * @example formatDateRange(startDate, endDate) => "Jan 15 – Jan 20, 2024"
 */
export function formatDateRange(start: Date | string, end: Date | string): string {
  const startDate = new Date(start);
  const endDate = new Date(end);

  if (startDate.getFullYear() !== endDate.getFullYear()) {
    return `${format(startDate, "MMM dd, yyyy")} – ${format(endDate, "MMM dd, yyyy")}`;
  }

  if (startDate.getMonth() !== endDate.getMonth()) {
    return `${format(startDate, "MMM dd")} – ${format(endDate, "MMM dd, yyyy")}`;
  }

  return `${format(startDate, "MMM dd")} – ${format(endDate, "dd, yyyy")}`;
}

/**
 * Format currency amount.
 * @example formatCurrency(1234.56, "USD") => "$1,234.56"
 */
export function formatCurrency(amount: number, currency = "USD"): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency,
  }).format(amount);
}

/**
 * Format a number with thousand separators.
 * @example formatNumber(1234567) => "1,234,567"
 */
export function formatNumber(value: number): string {
  return new Intl.NumberFormat("en-US").format(value);
}

/**
 * Calculate the duration in days between two dates.
 */
export function calculateDurationDays(start: Date | string, end: Date | string): number {
  const startDate = new Date(start);
  const endDate = new Date(end);
  const diff = endDate.getTime() - startDate.getTime();
  return Math.ceil(diff / (1000 * 60 * 60 * 24));
}
