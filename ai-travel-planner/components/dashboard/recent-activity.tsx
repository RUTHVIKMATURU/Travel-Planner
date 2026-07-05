import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Activity } from "lucide-react";

export function RecentActivity() {
  const activities = [
    {
      id: 1,
      user: { name: "Sarah", initials: "S", avatar: "" },
      action: "added a new destination",
      target: "Tokyo Itinerary",
      time: "2 hours ago"
    },
    {
      id: 2,
      user: { name: "You", initials: "Y", avatar: "" },
      action: "uploaded a document",
      target: "Flight Tickets",
      time: "5 hours ago"
    },
    {
      id: 3,
      user: { name: "Mike", initials: "M", avatar: "" },
      action: "paid for",
      target: "Airbnb Deposit ($450)",
      time: "1 day ago"
    },
    {
      id: 4,
      user: { name: "AI Assistant", initials: "AI", avatar: "" },
      action: "generated a packing list for",
      target: "Paris Getaway",
      time: "2 days ago"
    }
  ];

  return (
    <Card className="flex flex-col h-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Activity className="w-5 h-5 text-muted-foreground" />
          Recent Activity
        </CardTitle>
      </CardHeader>
      <CardContent className="flex-1">
        <div className="space-y-6 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-border before:to-transparent">
          {activities.map((activity, index) => (
            <div key={activity.id} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-background bg-muted text-slate-500 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-sm relative z-10">
                <Avatar className="w-8 h-8">
                  <AvatarImage src={activity.user.avatar} />
                  <AvatarFallback className="text-xs">{activity.user.initials}</AvatarFallback>
                </Avatar>
              </div>
              <div className="w-[calc(100%-3rem)] md:w-[calc(50%-2.5rem)] p-4 rounded border shadow-sm bg-card text-sm flex flex-col">
                <div>
                  <span className="font-semibold text-foreground">{activity.user.name}</span>{" "}
                  <span className="text-muted-foreground">{activity.action}</span>{" "}
                  <span className="font-medium text-foreground">{activity.target}</span>
                </div>
                <time className="text-xs text-muted-foreground mt-1 font-medium">{activity.time}</time>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
