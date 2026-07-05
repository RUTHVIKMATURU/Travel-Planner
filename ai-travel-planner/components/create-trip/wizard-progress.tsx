"use client";

import { cn } from "@/lib/utils";
import { Check } from "lucide-react";

interface WizardProgressProps {
  currentStep: number;
  steps: { id: string; name: string }[];
}

export function WizardProgress({ currentStep, steps }: WizardProgressProps) {
  return (
    <div className="mb-8 w-full">
      <div className="flex justify-between items-center relative">
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-1 bg-muted rounded-full" />
        <div
          className="absolute left-0 top-1/2 -translate-y-1/2 h-1 bg-primary rounded-full transition-all duration-300"
          style={{ width: `${(currentStep / (steps.length - 1)) * 100}%` }}
        />
        
        {steps.map((step, index) => {
          const isCompleted = currentStep > index;
          const isCurrent = currentStep === index;
          
          return (
            <div key={step.id} className="relative z-10 flex flex-col items-center gap-2">
              <div
                className={cn(
                  "w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium transition-colors border-2",
                  isCompleted
                    ? "bg-primary border-primary text-primary-foreground"
                    : isCurrent
                    ? "bg-background border-primary text-primary"
                    : "bg-background border-muted text-muted-foreground"
                )}
              >
                {isCompleted ? <Check className="w-4 h-4" /> : index + 1}
              </div>
              <span
                className={cn(
                  "text-xs font-medium absolute -bottom-6 w-max",
                  isCurrent || isCompleted ? "text-foreground" : "text-muted-foreground"
                )}
              >
                {step.name}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
