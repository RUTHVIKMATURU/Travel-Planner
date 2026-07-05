"use client";

import Link from "next/link";
import { Compass, Menu } from "lucide-react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { NAV_LINKS } from "@/constants/navigation";
import ThemeToggle from "@/components/common/ThemeToggle";
import { Button } from "@/components/ui/button";
import { gradients } from "@/constants/design";
import { cn } from "@/lib/utils";

export default function MobileMenu() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="rounded-full border border-slate-200/70 bg-white/70 text-slate-700 shadow-sm transition-all hover:bg-emerald-50 hover:text-emerald-700 dark:border-zinc-800 dark:bg-zinc-900/70 dark:text-slate-200 dark:hover:bg-emerald-950/40 dark:hover:text-emerald-300"
          aria-label="Open navigation menu"
        >
          <Menu className="h-5 w-5" />
        </Button>
      </SheetTrigger>

      <SheetContent
        side="right"
        className="border-l border-white/50 bg-white/85 p-0 backdrop-blur-2xl dark:border-white/10 dark:bg-zinc-950/85"
      >
        <SheetHeader className="border-b border-slate-200/70 p-6 text-left dark:border-zinc-800/80">
          <SheetTitle className="flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-600 to-teal-500 text-white shadow-lg shadow-emerald-900/15">
              <Compass className="h-5 w-5" />
            </span>

            <span className="flex flex-col leading-none">
              <span className="text-xl font-bold tracking-tight text-slate-950 dark:text-white">
                Travix
              </span>
              <span className="mt-1 text-xs font-medium uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">
                AI Travel Planner
              </span>
            </span>
          </SheetTitle>

          <SheetDescription className="sr-only">
            Main navigation for Travix.
          </SheetDescription>
        </SheetHeader>

        <div className="flex flex-1 flex-col gap-3 px-6 py-8">
          {NAV_LINKS.map((link) => (
            <SheetClose key={link.title} asChild>
              <Link
                href={link.href}
                className="rounded-2xl px-4 py-3 text-base font-semibold text-slate-700 transition-all duration-300 hover:bg-emerald-50 hover:pl-5 hover:text-emerald-700 dark:text-slate-200 dark:hover:bg-emerald-950/40 dark:hover:text-emerald-300"
              >
                {link.title}
              </Link>
            </SheetClose>
          ))}
        </div>

        <SheetFooter className="gap-3 border-t border-slate-200/70 p-6 dark:border-zinc-800/80">
          <ThemeToggle />

          <SheetClose asChild>
            <Button
              asChild
              variant="outline"
              className="rounded-full border-slate-200 bg-white/70 font-semibold text-slate-700 transition-all hover:border-emerald-200 hover:bg-emerald-50 hover:text-emerald-700 dark:border-zinc-800 dark:bg-zinc-900/70 dark:text-slate-200 dark:hover:bg-emerald-950/40"
            >
              <Link href="/login">Login</Link>
            </Button>
          </SheetClose>

          <SheetClose asChild>
            <Button
              asChild
              className={cn(
                "rounded-full font-semibold text-white shadow-lg shadow-emerald-900/20 transition-all hover:-translate-y-0.5 hover:shadow-xl hover:shadow-emerald-900/25",
                gradients.primaryAction,
              )}
            >
              <Link href="/signup">Get Started</Link>
            </Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
