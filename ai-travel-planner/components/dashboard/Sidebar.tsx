"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import {
  LayoutDashboard,
  Map,
  Settings,
  User,
  Compass,
  ChevronLeft,
  ChevronRight,
  Plane,
  Wallet,
  Bot
} from "lucide-react";
import { Button } from "@/components/ui/button";

interface SidebarProps {
  isCollapsed: boolean;
  setIsCollapsed: (collapsed: boolean) => void;
  userRole?: string; // Role Ready implementation
}

const navItems = [
  {
    title: "Overview",
    href: "/dashboard/overview",
    icon: LayoutDashboard,
    roles: ["USER", "ADMIN"],
  },
  {
    title: "My Trips",
    href: "/dashboard/trips",
    icon: Map,
    roles: ["USER", "ADMIN"],
  },
  {
    title: "Destinations",
    href: "/dashboard/destinations",
    icon: Plane,
    roles: ["USER", "ADMIN"],
  },
  {
    title: "Budget",
    href: "/dashboard/budget",
    icon: Wallet,
    roles: ["USER", "ADMIN"],
  },
  {
    title: "AI Planner",
    href: "/dashboard/ai",
    icon: Bot,
    roles: ["USER", "ADMIN"],
  },
  {
    title: "Profile",
    href: "/dashboard/profile",
    icon: User,
    roles: ["USER", "ADMIN"],
  },
  {
    title: "Settings",
    href: "/dashboard/settings",
    icon: Settings,
    roles: ["USER", "ADMIN"],
  },
];

export function Sidebar({ isCollapsed, setIsCollapsed, userRole = "USER" }: SidebarProps) {
  const pathname = usePathname();

  // Filter items based on role, default to showing items that don't have roles defined
  const visibleNavItems = navItems.filter(item => 
    !item.roles || item.roles.includes(userRole)
  );

  return (
    <aside
      className={cn(
        "relative hidden h-screen flex-col border-r border-slate-200 bg-white/50 backdrop-blur-xl transition-all duration-300 dark:border-zinc-800 dark:bg-zinc-950/50 md:flex",
        isCollapsed ? "w-20" : "w-64"
      )}
    >
      {/* Header */}
      <div className="flex h-16 shrink-0 items-center justify-between px-4">
        <Link href="/dashboard/overview" className="flex items-center gap-3 overflow-hidden">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-600 to-teal-500 text-white shadow-sm">
            <Compass className="h-5 w-5" />
          </div>
          {!isCollapsed && (
            <span className="text-xl font-bold tracking-tight text-slate-950 dark:text-white">
              Travix
            </span>
          )}
        </Link>
      </div>

      {/* Navigation */}
      <nav className="flex-1 space-y-1 overflow-y-auto p-4">
        {visibleNavItems.map((item) => {
          const isActive = pathname.startsWith(item.href);
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "group flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-all",
                isActive
                  ? "bg-emerald-50 text-emerald-700 dark:bg-emerald-950/50 dark:text-emerald-300"
                  : "text-slate-600 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-zinc-800 dark:hover:text-white",
                isCollapsed && "justify-center px-0"
              )}
              title={isCollapsed ? item.title : undefined}
            >
              <item.icon
                className={cn(
                  "h-5 w-5 shrink-0 transition-colors",
                  isActive
                    ? "text-emerald-700 dark:text-emerald-300"
                    : "text-slate-500 group-hover:text-slate-700 dark:text-slate-400 dark:group-hover:text-white"
                )}
              />
              {!isCollapsed && <span>{item.title}</span>}
            </Link>
          );
        })}
      </nav>

      {/* Collapse Toggle */}
      <div className="border-t border-slate-200 p-4 dark:border-zinc-800">
        <Button
          variant="ghost"
          size="icon"
          className="ml-auto flex h-8 w-8 items-center justify-center rounded-lg hover:bg-slate-100 dark:hover:bg-zinc-800"
          onClick={() => setIsCollapsed(!isCollapsed)}
        >
          {isCollapsed ? (
            <ChevronRight className="h-4 w-4" />
          ) : (
            <ChevronLeft className="h-4 w-4" />
          )}
          <span className="sr-only">Toggle Sidebar</span>
        </Button>
      </div>
    </aside>
  );
}
