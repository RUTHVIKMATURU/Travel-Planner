import type { HTMLAttributes, ReactNode } from "react";

import { spacing } from "@/constants/design";
import { cn } from "@/lib/utils";

type ContainerProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
};

export default function Container({
  children,
  className,
  ...props
}: ContainerProps) {
  return (
    <div className={cn(spacing.container, className)} {...props}>
      {children}
    </div>
  );
}
