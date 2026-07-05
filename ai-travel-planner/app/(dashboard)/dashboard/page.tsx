import { WelcomeCard } from "@/components/dashboard/welcome-card";
import { UpcomingTrips } from "@/components/dashboard/upcoming-trips";
import { RecentTrips } from "@/components/dashboard/recent-trips";
import { BudgetOverview } from "@/components/dashboard/budget-overview";
import { WeatherWidget } from "@/components/dashboard/weather-widget";
import { AiSuggestions } from "@/components/dashboard/ai-suggestions";
import { TravelStatistics } from "@/components/dashboard/travel-statistics";
import { RecentActivity } from "@/components/dashboard/recent-activity";

export default function DashboardPage() {
  return (
    <div className="flex-1 space-y-6 p-4 md:p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
      </div>

      <div className="grid gap-4 grid-cols-1 md:grid-cols-3">
        <WelcomeCard />
        <WeatherWidget />
      </div>

      <TravelStatistics />

      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-7">
        <div className="col-span-1 lg:col-span-4 space-y-4">
          <UpcomingTrips />
          <AiSuggestions />
          <RecentTrips />
        </div>
        
        <div className="col-span-1 lg:col-span-3 space-y-4">
          <BudgetOverview />
          <RecentActivity />
        </div>
      </div>
    </div>
  );
}