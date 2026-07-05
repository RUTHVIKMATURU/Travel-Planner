"use client";

import { useFormContext, Controller } from "react-hook-form";
import { TripFormValues } from "@/lib/validations/trip";
import { cn } from "@/lib/utils";
import { Mountain, Camera, Coffee, Palmtree, Utensils, Building2, Landmark, Waves } from "lucide-react";

const interestsOptions = [
  { id: "nature", label: "Nature & Outdoors", icon: Mountain },
  { id: "photography", label: "Photography", icon: Camera },
  { id: "cafe", label: "Cafes & Relaxation", icon: Coffee },
  { id: "beach", label: "Beaches", icon: Palmtree },
  { id: "food", label: "Food & Culinary", icon: Utensils },
  { id: "city", label: "City Exploration", icon: Building2 },
  { id: "history", label: "History & Culture", icon: Landmark },
  { id: "water", label: "Water Activities", icon: Waves },
];

export function InterestsStep() {
  const { control, formState: { errors } } = useFormContext<TripFormValues>();

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h2 className="text-2xl font-semibold tracking-tight">What do you enjoy doing?</h2>
        <p className="text-muted-foreground">Select at least one interest to personalize your trip.</p>
      </div>

      <Controller
        control={control}
        name="interests"
        render={({ field }) => {
          const currentInterests = field.value || [];

          const toggleInterest = (id: string) => {
            if (currentInterests.includes(id)) {
              field.onChange(currentInterests.filter((i) => i !== id));
            } else {
              field.onChange([...currentInterests, id]);
            }
          };

          return (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {interestsOptions.map((option) => {
                const Icon = option.icon;
                const isSelected = currentInterests.includes(option.id);

                return (
                  <div
                    key={option.id}
                    onClick={() => toggleInterest(option.id)}
                    className={cn(
                      "cursor-pointer rounded-xl border-2 p-4 flex flex-col items-center justify-center text-center transition-all hover:bg-accent h-32 gap-3",
                      isSelected
                        ? "border-primary bg-primary/10 text-primary shadow-sm"
                        : "border-muted bg-card text-muted-foreground"
                    )}
                  >
                    <Icon className="w-8 h-8" />
                    <span className="text-sm font-medium leading-tight">{option.label}</span>
                  </div>
                );
              })}
            </div>
          );
        }}
      />

      {errors.interests && (
        <p className="text-sm text-destructive">{errors.interests.message}</p>
      )}
    </div>
  );
}
