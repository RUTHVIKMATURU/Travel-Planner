"use client";

import { useMemo } from "react";
import { cn } from "@/lib/utils";

interface PasswordStrengthMeterProps {
  password?: string;
  className?: string;
}

export function PasswordStrengthMeter({ password = "", className }: PasswordStrengthMeterProps) {
  const strength = useMemo(() => {
    let score = 0;
    if (!password) return 0;
    
    if (password.length > 7) score += 1;
    if (password.length > 12) score += 1;
    if (/[A-Z]/.test(password)) score += 1;
    if (/[a-z]/.test(password)) score += 1;
    if (/[0-9]/.test(password)) score += 1;
    if (/[\W_]/.test(password)) score += 1;
    
    return Math.min(Math.floor(score / 1.5), 4);
  }, [password]);

  const strengthLabels = ["Weak", "Fair", "Good", "Strong", "Excellent"];
  
  const getStrengthColor = (index: number) => {
    if (strength === 0) return "bg-slate-200 dark:bg-slate-800";
    if (index >= strength) return "bg-slate-200 dark:bg-slate-800";
    
    switch (strength) {
      case 1: return "bg-red-500";
      case 2: return "bg-orange-500";
      case 3: return "bg-yellow-500";
      case 4: return "bg-green-500";
      default: return "bg-slate-200 dark:bg-slate-800";
    }
  };

  return (
    <div className={cn("flex flex-col gap-2 w-full", className)}>
      <div className="flex gap-1 h-1.5 w-full">
        {[0, 1, 2, 3].map((index) => (
          <div
            key={index}
            className={cn(
              "h-full w-full rounded-full transition-colors duration-300",
              getStrengthColor(index)
            )}
          />
        ))}
      </div>
      <div className="flex justify-between items-center text-xs">
        <span className="text-muted-foreground">Password strength</span>
        {strength > 0 ? (
          <span className={cn(
            "font-medium transition-colors duration-300",
            strength === 1 ? "text-red-500" :
            strength === 2 ? "text-orange-500" :
            strength === 3 ? "text-yellow-500" :
            "text-green-500"
          )}>
            {strengthLabels[strength]}
          </span>
        ) : (
          <span className="text-muted-foreground">None</span>
        )}
      </div>
    </div>
  );
}
