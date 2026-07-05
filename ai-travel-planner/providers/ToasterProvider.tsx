/**
 * Toaster provider for app-wide toast notifications.
 * Uses sonner for beautiful toast messages.
 */

"use client";

import { Toaster } from "sonner";
import { useTheme } from "next-themes";

export function ToasterProvider() {
  const { theme } = useTheme();
  
  return (
    <Toaster
      theme={theme as "light" | "dark" | "system"}
      position="top-right"
      toastOptions={{
        style: {
          background: "hsl(var(--background))",
          color: "hsl(var(--foreground))",
          border: "1px solid hsl(var(--border))",
        },
      }}
    />
  );
}