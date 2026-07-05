"use client";

import Link from "next/link";
import { Bell, Menu, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import ThemeToggle from "@/components/common/ThemeToggle";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetDescription } from "@/components/ui/sheet";
import { Input } from "@/components/ui/input";

interface TopNavProps {
  onMenuClick?: () => void;
  user?: any;
}

import { signOutAction } from "@/actions/auth-actions";

import { Breadcrumbs } from "./Breadcrumbs";

export function TopNav({ onMenuClick, user }: TopNavProps) {
  return (
    <header className="sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-4 border-b border-slate-200 bg-white/50 px-4 backdrop-blur-xl dark:border-zinc-800 dark:bg-zinc-950/50 sm:gap-x-6 sm:px-6 lg:px-8">
      {/* Mobile Menu Trigger */}
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon" className="-m-2.5 p-2.5 text-slate-700 dark:text-slate-200 md:hidden">
            <span className="sr-only">Open sidebar</span>
            <Menu className="h-5 w-5" aria-hidden="true" />
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="w-64 p-0">
          <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
          <SheetDescription className="sr-only">Dashboard navigation for mobile</SheetDescription>
          {/* Mobile sidebar content can go here, or we can render Sidebar component directly inside */}
          <div className="flex h-16 shrink-0 items-center px-4 border-b border-slate-200 dark:border-zinc-800">
            <span className="text-xl font-bold tracking-tight text-slate-950 dark:text-white">
              Travix
            </span>
          </div>
          <nav className="flex-1 space-y-1 p-4">
            <Link href="/dashboard" className="block rounded-lg px-3 py-2 text-sm font-medium text-slate-900 hover:bg-slate-100 dark:text-white dark:hover:bg-zinc-800">Dashboard</Link>
            <Link href="/dashboard/trips" className="block rounded-lg px-3 py-2 text-sm font-medium text-slate-900 hover:bg-slate-100 dark:text-white dark:hover:bg-zinc-800">My Trips</Link>
            <Link href="/dashboard/profile" className="block rounded-lg px-3 py-2 text-sm font-medium text-slate-900 hover:bg-slate-100 dark:text-white dark:hover:bg-zinc-800">Profile</Link>
            <Link href="/dashboard/settings" className="block rounded-lg px-3 py-2 text-sm font-medium text-slate-900 hover:bg-slate-100 dark:text-white dark:hover:bg-zinc-800">Settings</Link>
          </nav>
        </SheetContent>
      </Sheet>

      {/* Separator for mobile */}
      <div className="h-6 w-px bg-slate-200 dark:bg-zinc-800 md:hidden" aria-hidden="true" />

      <div className="flex flex-1 items-center gap-x-4 self-stretch lg:gap-x-6">
        <Breadcrumbs />
        
        <form className="relative flex flex-1 max-w-md ml-auto" action="#" method="GET">
          <label htmlFor="search-field" className="sr-only">
            Search
          </label>
          <Search
            className="pointer-events-none absolute inset-y-0 left-0 h-full w-5 text-slate-400"
            aria-hidden="true"
          />
          <Input
            id="search-field"
            className="block h-full w-full border-0 bg-transparent py-0 pl-8 pr-0 text-slate-900 focus-visible:ring-0 sm:text-sm dark:text-white"
            placeholder="Search..."
            type="search"
            name="search"
          />
        </form>
        
        <div className="flex items-center gap-x-4 lg:gap-x-6">
          <ThemeToggle />

          <Button variant="ghost" size="icon" className="-m-2.5 p-2.5 text-slate-500 hover:text-slate-600 dark:text-slate-400 dark:hover:text-slate-300 relative">
            <span className="sr-only">View notifications</span>
            <Bell className="h-5 w-5" aria-hidden="true" />
            <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-emerald-500 ring-2 ring-white dark:ring-zinc-950" />
          </Button>

          {/* Separator */}
          <div className="hidden lg:block lg:h-6 lg:w-px lg:bg-slate-200 dark:lg:bg-zinc-800" aria-hidden="true" />

          {/* Profile dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="-m-1.5 flex items-center p-1.5">
                <span className="sr-only">Open user menu</span>
                <Avatar className="h-8 w-8 rounded-lg">
                  <AvatarImage src={user?.image || ""} alt="@user" />
                  <AvatarFallback className="rounded-lg bg-emerald-100 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300">
                    {user?.name ? user.name.substring(0, 2).toUpperCase() : user?.email ? user.email.substring(0, 2).toUpperCase() : "JD"}
                  </AvatarFallback>
                </Avatar>
                <span className="hidden lg:flex lg:items-center">
                  <span className="ml-4 text-sm font-semibold leading-6 text-slate-900 dark:text-white" aria-hidden="true">
                    {user?.name || user?.email || "John Doe"}
                  </span>
                </span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild>
                <Link href="/profile">Profile</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/settings">Settings</Link>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem 
                className="text-red-600 dark:text-red-400 focus:bg-red-50 dark:focus:bg-red-950/50 cursor-pointer"
                onClick={() => signOutAction()}
              >
                Sign out
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
}
