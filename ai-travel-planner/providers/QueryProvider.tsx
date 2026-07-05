/**
 * Query provider for client-side data fetching.
 * 
 * Note: This is optional since Next.js App Router primarily uses Server Components.
 * Include this if you need client-side queries (React Query/TanStack Query).
 * For now, it's a placeholder for future use.
 */

"use client";

import type { WithChildren } from "@/types/common";

export function QueryProvider({ children }: WithChildren) {
  // TODO: Add React Query/TanStack Query provider if needed for client-side fetching
  // For now, most data fetching should happen in Server Components
  
  return <>{children}</>;
}