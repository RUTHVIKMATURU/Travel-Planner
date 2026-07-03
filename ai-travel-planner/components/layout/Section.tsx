import type { HTMLAttributes, ReactNode } from "react";

import { spacing } from "@/constants/design";
import { cn } from "@/lib/utils";
import Container from "./Container";

type SectionProps = HTMLAttributes<HTMLElement> & {
  children: ReactNode;
  contained?: boolean;
};

export default function Section({
  children,
  className,
  contained = true,
  ...props
}: SectionProps) {
  return (
    <section className={cn(spacing.section, className)} {...props}>
      {contained ? <Container>{children}</Container> : children}
    </section>
  );
}
