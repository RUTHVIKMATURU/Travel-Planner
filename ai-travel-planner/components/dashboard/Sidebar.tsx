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
  Globe,
  Wallet,
  Bot,
  Sparkles,
  LogOut,
  MapPin,
  Luggage,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface SidebarProps {
  isCollapsed: boolean;
  setIsCollapsed: (collapsed: boolean) => void;
  userRole?: string;
}

const navItems = [
  {
    title: "Dashboard",
    href: "/dashboard/overview",
    icon: LayoutDashboard,
    roles: ["USER", "ADMIN"],
  },
  {
    title: "My Trips",
    href: "/dashboard/trips",
    icon: Luggage,
    roles: ["USER", "ADMIN"],
  },
  {
    title: "Explore",
    href: "/dashboard/destinations",
    icon: Globe,
    roles: ["USER", "ADMIN"],
  },
  {
    title: "AI Planner",
    href: "/dashboard/ai",
    icon: Sparkles,
    roles: ["USER", "ADMIN"],
  },
  {
    title: "Budget",
    href: "/dashboard/budget",
    icon: Wallet,
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

  const visibleNavItems = navItems.filter(item => 
    !item.roles || item.roles.includes(userRole)
  );

  return (
    <TooltipProvider delayDuration={0}>
      <aside
        className={cn(
          "relative hidden h-screen flex-col border-r border-slate-200/80 bg-white/80 backdrop-blur-2xl transition-all duration-400 ease-in-out dark:border-zinc-800/80 dark:bg-zinc-950/80 md:flex z-40 shadow-sm",
          isCollapsed ? "w-20" : "w-64"
        )}
      >
        {/* Header */}
        <div className="flex h-16 shrink-0 items-center justify-between px-4 mt-2">
          <Link href="/dashboard/overview" className="flex items-center gap-3 overflow-hidden transition-all">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500 text-white shadow-md shadow-emerald-900/20 dark:shadow-emerald-900/40">
              <Compass className="h-5 w-5" />
            </div>
            <span
              className={cn(
                "text-xl font-bold tracking-tight text-slate-950 dark:text-white transition-all duration-300",
                isCollapsed ? "opacity-0 w-0 -translate-x-4" : "opacity-100 w-auto translate-x-0"
              )}
            >
              Travix
            </span>
          </Link>
        </div>

        {/* Navigation */}
        <nav className="flex-1 space-y-1.5 overflow-y-auto p-3 mt-4 scrollbar-hide">
          {visibleNavItems.map((item) => {
            const isActive = pathname.startsWith(item.href);
            
            const linkContent = (
              <Link
                href={item.href}
                className={cn(
                  "group relative flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-all duration-200 ease-in-out",
                  isActive
                    ? "bg-emerald-50 text-emerald-700 shadow-sm dark:bg-emerald-950/40 dark:text-emerald-300"
                    : "text-slate-600 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-zinc-900/80 dark:hover:text-slate-100",
                  isCollapsed ? "justify-center px-0" : "px-3"
                )}
              >
                {/* Active Indicator (Vertical line) */}
                {isActive && (
                  <div className="absolute left-0 top-1/2 h-1/2 w-1 -translate-y-1/2 rounded-r-full bg-emerald-500 dark:bg-emerald-400" />
                )}
                
                <item.icon
                  className={cn(
                    "h-5 w-5 shrink-0 transition-all duration-200",
                    isActive
                      ? "text-emerald-600 dark:text-emerald-400"
                      : "text-slate-400 group-hover:text-slate-600 dark:text-slate-500 dark:group-hover:text-slate-300"
                  )}
                  strokeWidth={isActive ? 2.5 : 2}
                />
                
                <span
                  className={cn(
                    "transition-all duration-300 whitespace-nowrap",
                    isCollapsed ? "opacity-0 w-0 hidden" : "opacity-100 w-auto block"
                  )}
                >
                  {item.title}
                </span>
              </Link>
            );

            return isCollapsed ? (
              <Tooltip key={item.href}>
                <TooltipTrigger asChild>
                  {linkContent}
                </TooltipTrigger>
                <TooltipContent side="right" sideOffset={16} className="font-medium">
                  {item.title}
                </TooltipContent>
              </Tooltip>
            ) : (
              <div key={item.href}>{linkContent}</div>
            );
          })}
        </nav>

        {/* Footer Actions */}
        <div className="mt-auto p-3 mb-2 space-y-2">
          {/* Logout Button */}
          {isCollapsed ? (
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="ghost"
                  className="w-full justify-center text-slate-500 hover:text-red-600 hover:bg-red-50 dark:text-slate-400 dark:hover:text-red-400 dark:hover:bg-red-950/30 transition-all duration-200 rounded-xl"
                  size="icon"
                >
                  <LogOut className="h-5 w-5" />
                  <span className="sr-only">Logout</span>
                </Button>
              </TooltipTrigger>
              <TooltipContent side="right" sideOffset={16} className="font-medium text-red-600 dark:text-red-400">
                Logout
              </TooltipContent>
            </Tooltip>
          ) : (
            <Button
              variant="ghost"
              className="w-full justify-start gap-3 px-3 text-slate-500 hover:text-red-600 hover:bg-red-50 dark:text-slate-400 dark:hover:text-red-400 dark:hover:bg-red-950/30 transition-all duration-200 rounded-xl"
            >
              <LogOut className="h-5 w-5" />
              <span className="font-medium">Logout</span>
            </Button>
          )}

          {/* Collapse Toggle */}
          <div className="pt-2 border-t border-slate-200/60 dark:border-zinc-800/60">
            <Button
              variant="ghost"
              size="icon"
              className={cn(
                "h-9 w-9 rounded-xl hover:bg-slate-100 dark:hover:bg-zinc-800 transition-all text-slate-500",
                isCollapsed ? "mx-auto block" : "ml-auto flex"
              )}
              onClick={() => setIsCollapsed(!isCollapsed)}
            >
              {isCollapsed ? (
                <ChevronRight className="h-5 w-5" />
              ) : (
                <ChevronLeft className="h-5 w-5" />
              )}
              <span className="sr-only">Toggle Sidebar</span>
            </Button>
          </div>
        </div>
      </aside>
    </TooltipProvider>
  );
}
