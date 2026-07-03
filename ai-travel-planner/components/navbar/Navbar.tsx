"use client";

import Link from "next/link";
import { Compass } from "lucide-react";
import NavLinks from "./NavLinks";
import MobileMenu from "./MobileMenu";
import ThemeToggle from "@/components/common/ThemeToggle";
import { Button } from "@/components/ui/button";
import { gradients, radii, shadows } from "@/constants/design";
import { cn } from "@/lib/utils";

export default function Navbar() {
  return (
    <header className="sticky top-4 z-50 px-4 sm:px-6">
      <div
        className={cn(
          "mx-auto flex h-20 max-w-7xl items-center justify-between border border-white/60 bg-white/75 px-4 backdrop-blur-2xl transition-all duration-300 dark:border-white/10 dark:bg-zinc-950/70 sm:px-6 lg:px-7",
          "supports-[backdrop-filter]:bg-white/65 supports-[backdrop-filter]:dark:bg-zinc-950/60",
          "ring-1 ring-slate-950/5 dark:ring-white/10",
          radii.panel,
          shadows.nav,
        )}
      >
        <Link
          href="/"
          className="group flex items-center gap-3"
          aria-label="Travix home"
        >
          <div
            className={cn(
              "flex h-11 w-11 items-center justify-center bg-gradient-to-br from-emerald-600 to-teal-500 text-white shadow-lg shadow-emerald-900/15 transition-all duration-300 motion-safe:group-hover:scale-105 group-hover:shadow-emerald-700/25",
              radii.panel,
            )}
          >
            <Compass className="h-5 w-5" />
          </div>

          <div className="flex flex-col leading-none">
            <span className="text-xl font-bold tracking-tight text-slate-950 transition-colors group-hover:text-emerald-700 dark:text-white dark:group-hover:text-emerald-300">
              Travix
            </span>
            <span className="mt-1 text-xs font-medium uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">
              AI Travel Planner
            </span>
          </div>
        </Link>

        <nav className="hidden items-center gap-1 rounded-full border border-slate-200/70 bg-white/60 p-1 text-sm font-medium shadow-sm dark:border-zinc-800/80 dark:bg-zinc-900/60 lg:flex">
          <NavLinks />
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <ThemeToggle />

          <Button
            variant="ghost"
            className="rounded-full px-5 font-semibold text-slate-700 transition-all hover:bg-emerald-50 hover:text-emerald-700 dark:text-slate-200 dark:hover:bg-emerald-950/40 dark:hover:text-emerald-300"
          >
            Login
          </Button>

          <Button
            className={cn(
              "rounded-full px-6 font-semibold text-white shadow-emerald-900/20 transition-all duration-300 motion-safe:hover:-translate-y-0.5 hover:shadow-xl hover:shadow-emerald-900/25",
              gradients.primaryAction,
            )}
          >
            Get Started
          </Button>
        </div>

        <div className="lg:hidden">
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
