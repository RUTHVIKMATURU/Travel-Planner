"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronRight } from "lucide-react";
import React from "react";

export function Breadcrumbs() {
  const pathname = usePathname();
  
  if (!pathname) return null;

  const segments = pathname.split("/").filter(Boolean);
  
  // Don't show breadcrumbs on the root or if there's no path
  if (segments.length === 0) return null;

  return (
    <nav aria-label="Breadcrumb" className="hidden md:flex">
      <ol className="flex items-center space-x-2 text-sm text-slate-500 dark:text-slate-400">
        <li>
          <Link href="/dashboard" className="hover:text-slate-900 dark:hover:text-slate-100 transition-colors">
            Home
          </Link>
        </li>
        {segments.map((segment, index) => {
          const isLast = index === segments.length - 1;
          const href = `/${segments.slice(0, index + 1).join("/")}`;
          
          // Capitalize and format the segment
          const label = segment.charAt(0).toUpperCase() + segment.slice(1).replace(/-/g, " ");

          return (
            <React.Fragment key={href}>
              <li>
                <ChevronRight className="h-4 w-4 text-slate-400 dark:text-slate-500" />
              </li>
              <li>
                {isLast ? (
                  <span className="font-medium text-slate-900 dark:text-slate-100" aria-current="page">
                    {label}
                  </span>
                ) : (
                  <Link href={href} className="hover:text-slate-900 dark:hover:text-slate-100 transition-colors">
                    {label}
                  </Link>
                )}
              </li>
            </React.Fragment>
          );
        })}
      </ol>
    </nav>
  );
}
