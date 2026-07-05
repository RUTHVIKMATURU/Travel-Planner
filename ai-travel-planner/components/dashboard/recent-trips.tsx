import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { History, Image as ImageIcon } from "lucide-react";

export function RecentTrips() {
  return (
    <Card className="flex flex-col h-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <History className="w-5 h-5 text-muted-foreground" />
          Recent Trips
        </CardTitle>
      </CardHeader>
      <CardContent className="flex-1">
        <div className="grid grid-cols-2 gap-4">
          {/* Mock Recent Trip 1 */}
          <div className="group cursor-pointer">
            <div className="w-full aspect-square rounded-lg overflow-hidden bg-muted relative mb-2">
              <img 
                src="https://images.unsplash.com/photo-1542051812871-757500874085?q=80&w=2070&auto=format&fit=crop" 
                alt="Kyoto" 
                className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
              <div className="absolute bottom-2 left-2 right-2 text-white flex items-center gap-1 text-xs font-medium">
                <ImageIcon className="w-3 h-3" /> 24 photos
              </div>
            </div>
            <h5 className="font-medium text-sm line-clamp-1">Kyoto Spring</h5>
            <p className="text-xs text-muted-foreground">Apr 2026</p>
          </div>
          
          {/* Mock Recent Trip 2 */}
          <div className="group cursor-pointer">
            <div className="w-full aspect-square rounded-lg overflow-hidden bg-muted relative mb-2">
              <img 
                src="https://images.unsplash.com/photo-1499856871958-5b9627545d1a?q=80&w=2020&auto=format&fit=crop" 
                alt="Rome" 
                className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
              <div className="absolute bottom-2 left-2 right-2 text-white flex items-center gap-1 text-xs font-medium">
                <ImageIcon className="w-3 h-3" /> 12 photos
              </div>
            </div>
            <h5 className="font-medium text-sm line-clamp-1">Rome Highlights</h5>
            <p className="text-xs text-muted-foreground">Jan 2026</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
