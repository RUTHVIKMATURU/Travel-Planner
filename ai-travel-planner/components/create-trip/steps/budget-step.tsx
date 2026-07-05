"use client";

import { useFormContext, Controller } from "react-hook-form";
import { TripFormValues } from "@/lib/validations/trip";
import { cn } from "@/lib/utils";
import { Coins, Banknote, Gem } from "lucide-react";

const budgetOptions = [
  {
    id: "budget",
    title: "Budget",
    description: "Cost-conscious, hostels, public transit.",
    icon: Coins,
  },
  {
    id: "moderate",
    title: "Moderate",
    description: "Balanced, 3-star hotels, mix of transit.",
    icon: Banknote,
  },
  {
    id: "luxury",
    title: "Luxury",
    description: "Premium, 5-star hotels, private cars.",
    icon: Gem,
  },
];

export function BudgetStep() {
  const { control, formState: { errors } } = useFormContext<TripFormValues>();

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h2 className="text-2xl font-semibold tracking-tight">What's your travel style?</h2>
        <p className="text-muted-foreground">Select a budget that fits your needs.</p>
      </div>

      <Controller
        control={control}
        name="budget"
        render={({ field }) => (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {budgetOptions.map((option) => {
              const Icon = option.icon;
              const isSelected = field.value === option.id;
              return (
                <div
                  key={option.id}
                  onClick={() => field.onChange(option.id)}
                  className={cn(
                    "cursor-pointer rounded-xl border-2 p-6 flex flex-col items-center text-center transition-all hover:bg-accent",
                    isSelected
                      ? "border-primary bg-primary/5 shadow-sm"
                      : "border-muted bg-card"
                  )}
                >
                  <div
                    className={cn(
                      "p-3 rounded-full mb-4",
                      isSelected ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
                    )}
                  >
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{option.title}</h3>
                  <p className="text-sm text-muted-foreground">{option.description}</p>
                </div>
              );
            })}
          </div>
        )}
      />

      {errors.budget && (
        <p className="text-sm text-destructive">{errors.budget.message}</p>
      )}
    </div>
  );
}
