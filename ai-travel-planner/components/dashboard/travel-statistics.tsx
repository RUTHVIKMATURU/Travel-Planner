import { Card, CardContent } from "@/components/ui/card";
import { Plane, Globe2, Map, Users } from "lucide-react";

export function TravelStatistics() {
  const stats = [
    {
      label: "Total Trips",
      value: "12",
      icon: Plane,
      color: "text-blue-500",
      bgColor: "bg-blue-500/10"
    },
    {
      label: "Countries Visited",
      value: "8",
      icon: Globe2,
      color: "text-green-500",
      bgColor: "bg-green-500/10"
    },
    {
      label: "Cities Explored",
      value: "24",
      icon: Map,
      color: "text-amber-500",
      bgColor: "bg-amber-500/10"
    },
    {
      label: "Travel Buddies",
      value: "5",
      icon: Users,
      color: "text-purple-500",
      bgColor: "bg-purple-500/10"
    }
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {stats.map((stat, i) => (
        <Card key={i} className="border-none shadow-sm hover:shadow-md transition-shadow">
          <CardContent className="p-6 flex items-center gap-4">
            <div className={`p-3 rounded-full ${stat.bgColor} ${stat.color}`}>
              <stat.icon className="w-5 h-5" />
            </div>
            <div>
              <p className="text-sm font-medium text-muted-foreground">{stat.label}</p>
              <h4 className="text-2xl font-bold tracking-tight">{stat.value}</h4>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
