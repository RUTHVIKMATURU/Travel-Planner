import Image from "next/image";
import { Destination } from "@/data/destinations";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, MapPin, Clock, Wallet, Sparkles } from "lucide-react";

interface DestinationCardProps {
  destination: Destination;
}

export function DestinationCard({ destination }: DestinationCardProps) {
  return (
    <Card className="overflow-hidden flex flex-col h-full group hover:shadow-xl transition-all duration-300 border-border/50">
      <div className="relative h-64 w-full overflow-hidden">
        <Image
          src={destination.image}
          alt={destination.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        
        {destination.aiRecommended && (
          <Badge 
            className="absolute top-4 left-4 bg-primary/90 text-primary-foreground backdrop-blur-sm shadow-sm gap-1 border-none"
          >
            <Sparkles className="w-3.5 h-3.5" />
            AI Recommended
          </Badge>
        )}
        
        <div className="absolute bottom-4 left-4 right-4 text-white">
          <div className="flex justify-between items-end">
            <div>
              <h3 className="text-2xl font-bold leading-tight">{destination.name}</h3>
              <div className="flex items-center text-white/80 mt-1 text-sm">
                <MapPin className="w-3.5 h-3.5 mr-1" />
                {destination.country}
              </div>
            </div>
            <div className="flex items-center bg-black/40 backdrop-blur-md px-2 py-1 rounded-md">
              <Star className="w-4 h-4 text-yellow-400 fill-yellow-400 mr-1" />
              <span className="font-semibold text-sm">{destination.rating}</span>
            </div>
          </div>
        </div>
      </div>
      
      <CardContent className="flex-1 p-5 space-y-4">
        <p className="text-sm text-muted-foreground line-clamp-2">
          {destination.description}
        </p>
        
        <div className="grid grid-cols-2 gap-y-3 gap-x-2 text-sm text-muted-foreground">
          <div className="flex items-center">
            <Wallet className="w-4 h-4 mr-2 text-primary" />
            <span className="capitalize">{destination.averageBudget}</span>
          </div>
          <div className="flex items-center">
            <Clock className="w-4 h-4 mr-2 text-primary" />
            <span>{destination.duration}</span>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 pt-2">
          {destination.travelStyles.slice(0, 3).map((style) => (
            <Badge key={style} variant="secondary" className="bg-secondary/50 font-normal">
              {style}
            </Badge>
          ))}
          {destination.travelStyles.length > 3 && (
            <Badge variant="secondary" className="bg-secondary/50 font-normal">
              +{destination.travelStyles.length - 3}
            </Badge>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
