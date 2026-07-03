"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_LINKS } from "@/constants/navigation";
import { cn } from "@/lib/utils";

export default function NavLinks() {
  const pathname = usePathname();

  return (
    <>
      {NAV_LINKS.map((link) => (
        <Link
          key={link.title}
          href={link.href}
          className={cn(
            "rounded-full px-4 py-2 text-sm font-semibold transition-all duration-300 hover:bg-emerald-50 hover:text-emerald-700 dark:hover:bg-emerald-950/40 dark:hover:text-emerald-300",
            pathname === link.href
              ? "bg-emerald-100 text-emerald-700 shadow-sm dark:bg-emerald-950/60 dark:text-emerald-300"
              : "text-slate-600 dark:text-slate-300"
          )}
        >
          {link.title}
        </Link>
      ))}
    </>
  );
}
