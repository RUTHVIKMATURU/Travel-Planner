import type { ReactNode } from "react";

import { spacing, typography } from "@/constants/design";
import { cn } from "@/lib/utils";

type SectionHeaderProps = {
  title: ReactNode;
  description?: ReactNode;
  className?: string;
  titleClassName?: string;
  descriptionClassName?: string;
  maxWidth?: "2xl" | "3xl" | "none";
  align?: "left" | "center";
};

const maxWidthClasses = {
  "2xl": "max-w-2xl",
  "3xl": "max-w-3xl",
  none: "max-w-none",
} as const;

export default function SectionHeader({
  title,
  description,
  className,
  titleClassName,
  descriptionClassName,
  maxWidth = "2xl",
  align = "center",
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        spacing.sectionHeader,
        maxWidthClasses[maxWidth],
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      <h2 className={cn(typography.sectionTitle, titleClassName)}>{title}</h2>

      {description ? (
        <p className={cn(typography.sectionDescription, descriptionClassName)}>
          {description}
        </p>
      ) : null}
    </div>
  );
}
