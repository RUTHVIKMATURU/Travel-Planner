/**
 * Shared utility types used across the application.
 */

/** Standard Server Action response envelope. */
export type ActionResult<T = void> =
  | (void extends T 
      ? { success: true; data?: T; message?: string }
      : { success: true; data: T; message?: string })
  | { success: false; error: string; fieldErrors?: Record<string, string[]> };

/** Pagination metadata returned alongside list queries. */
export interface PaginationMeta {
  page: number;
  pageSize: number;
  total: number;
  totalPages: number;
}

/** A paginated list response. */
export interface PaginatedResult<T> {
  items: T[];
  meta: PaginationMeta;
}

/** Generic select option shape used by shadcn Select / comboboxes. */
export interface SelectOption<T = string> {
  label: string;
  value: T;
}

/** Any component that accepts optional className. */
export interface WithClassName {
  className?: string;
}

/** Any component that wraps children. */
export interface WithChildren {
  children: React.ReactNode;
}
