import { WelcomeCard } from "@/components/dashboard/welcome-card";
import { TravelStatistics } from "@/components/dashboard/travel-statistics";
import { QuickActions } from "@/components/dashboard/quick-actions";
import { UpcomingTrips } from "@/components/dashboard/upcoming-trips";
import { WeatherWidget } from "@/components/dashboard/weather-widget";
import { AiAssistant } from "@/components/dashboard/ai-assistant";
import { RecentActivity } from "@/components/dashboard/recent-activity";
import { RecentDestinations } from "@/components/dashboard/recent-destinations";

export default function OverviewPage() {
  return (
    <div className="relative min-h-[calc(100vh-4rem)]">
      {/* Subtle dynamic background gradient for glassmorphism effect */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-slate-50 dark:bg-zinc-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(16,185,129,0.15),rgba(255,255,255,0))] dark:bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(16,185,129,0.1),rgba(24,24,27,0))] pointer-events-none" />
      
      <div className="flex-1 space-y-6 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Top Section */}
          <div className="col-span-1 md:col-span-12">
            <WelcomeCard />
          </div>

          {/* Quick Actions & Stats */}
          <div className="col-span-1 md:col-span-12">
            <QuickActions />
          </div>

          <div className="col-span-1 md:col-span-12">
            <TravelStatistics />
          </div>

          {/* Middle Section: Upcoming Trips & Weather */}
          <div className="col-span-1 md:col-span-12 lg:col-span-8 flex flex-col gap-6">
            <UpcomingTrips />
          </div>
          <div className="col-span-1 md:col-span-12 lg:col-span-4 flex flex-col gap-6">
            <WeatherWidget />
          </div>

          {/* AI Assistant & Recent Activity */}
          <div className="col-span-1 md:col-span-12 lg:col-span-6 flex flex-col gap-6">
            <AiAssistant />
          </div>
          <div className="col-span-1 md:col-span-12 lg:col-span-6 flex flex-col gap-6">
            <RecentActivity />
          </div>

          {/* Bottom Section: Past Destinations */}
          <div className="col-span-1 md:col-span-12">
            <RecentDestinations />
          </div>
        </div>
      </div>
    </div>
  );
}
