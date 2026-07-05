/**
 * Hook for handling Server Action responses with toast notifications.
 * Automatically shows success/error toasts based on ActionResult.
 */

"use client";

import { useTransition } from "react";
import { toast } from "sonner";
import type { ActionResult } from "@/types/common";

export function useToastAction() {
  const [isPending, startTransition] = useTransition();

  const execute = async <T>(
    action: () => Promise<ActionResult<T>>,
    options?: {
      onSuccess?: (data: T) => void;
      onError?: (error: string) => void;
      successMessage?: string;
      loadingMessage?: string;
    }
  ) => {
    startTransition(async () => {
      const toastId = options?.loadingMessage 
        ? toast.loading(options.loadingMessage)
        : undefined;

      try {
        const result = await action();

        if (toastId) {
          toast.dismiss(toastId);
        }

        if (result.success) {
          if (options?.successMessage) {
            toast.success(options.successMessage);
          }
          options?.onSuccess?.(result.data);
        } else {
          toast.error(result.error);
          options?.onError?.(result.error);
        }
      } catch (error) {
        if (toastId) {
          toast.dismiss(toastId);
        }
        toast.error("An unexpected error occurred");
        options?.onError?.("An unexpected error occurred");
      }
    });
  };

  return {
    execute,
    isPending,
  };
}