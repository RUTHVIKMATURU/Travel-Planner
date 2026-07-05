export interface Destination {
  id: string;
  name: string;
  country: string;
  image: string;
  rating: number;
  averageBudget: "Budget" | "Moderate" | "Luxury";
  duration: string;
  seasons: ("Spring" | "Summer" | "Autumn" | "Winter")[];
  travelStyles: ("Adventure" | "Relaxation" | "Cultural" | "Nature" | "City")[];
  aiRecommended: boolean;
  description: string;
}

export const destinations: Destination[] = [
  {
    id: "dest-1",
    name: "Kyoto",
    country: "Japan",
    image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=2070&auto=format&fit=crop",
    rating: 4.9,
    averageBudget: "Moderate",
    duration: "5-7 days",
    seasons: ["Spring", "Autumn"],
    travelStyles: ["Cultural", "City"],
    aiRecommended: true,
    description: "Experience the magic of ancient temples, sublime gardens, and traditional teahouses in Japan's cultural heart."
  },
  {
    id: "dest-2",
    name: "Santorini",
    country: "Greece",
    image: "https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?q=80&w=2070&auto=format&fit=crop",
    rating: 4.8,
    averageBudget: "Luxury",
    duration: "4-6 days",
    seasons: ["Summer", "Spring"],
    travelStyles: ["Relaxation", "Cultural"],
    aiRecommended: true,
    description: "Iconic white-washed buildings clinging to cliffs overlooking the sparkling Aegean Sea."
  },
  {
    id: "dest-3",
    name: "Machu Picchu",
    country: "Peru",
    image: "https://images.unsplash.com/photo-1526392060635-9d6019884377?q=80&w=2070&auto=format&fit=crop",
    rating: 4.9,
    averageBudget: "Moderate",
    duration: "3-5 days",
    seasons: ["Spring", "Autumn"],
    travelStyles: ["Adventure", "Nature", "Cultural"],
    aiRecommended: false,
    description: "Hike the Inca Trail to discover this magnificent 15th-century citadel set high in the Andes Mountains."
  },
  {
    id: "dest-4",
    name: "Bali",
    country: "Indonesia",
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=2038&auto=format&fit=crop",
    rating: 4.7,
    averageBudget: "Budget",
    duration: "7-10 days",
    seasons: ["Summer", "Autumn"],
    travelStyles: ["Relaxation", "Nature", "Adventure"],
    aiRecommended: true,
    description: "Lush rice terraces, vibrant culture, and world-class surfing await on the Island of the Gods."
  },
  {
    id: "dest-5",
    name: "Banff National Park",
    country: "Canada",
    image: "https://images.unsplash.com/photo-1553765107-5e69b5961d56?q=80&w=2070&auto=format&fit=crop",
    rating: 4.9,
    averageBudget: "Moderate",
    duration: "4-6 days",
    seasons: ["Summer", "Winter"],
    travelStyles: ["Nature", "Adventure"],
    aiRecommended: false,
    description: "Turquoise glacial lakes and soaring peaks make this Rocky Mountain reserve a nature lover's paradise."
  },
  {
    id: "dest-6",
    name: "Rome",
    country: "Italy",
    image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?q=80&w=1996&auto=format&fit=crop",
    rating: 4.8,
    averageBudget: "Moderate",
    duration: "5-7 days",
    seasons: ["Spring", "Autumn"],
    travelStyles: ["Cultural", "City"],
    aiRecommended: true,
    description: "Step back in time as you wander past monumental ruins, magnificent art, and vibrant street life."
  },
  {
    id: "dest-7",
    name: "Bora Bora",
    country: "French Polynesia",
    image: "https://images.unsplash.com/photo-1589394815804-964ce0ff96c7?q=80&w=1974&auto=format&fit=crop",
    rating: 4.9,
    averageBudget: "Luxury",
    duration: "6-8 days",
    seasons: ["Summer", "Winter"],
    travelStyles: ["Relaxation", "Nature"],
    aiRecommended: false,
    description: "Ultimate luxury awaits in overwater bungalows suspended above a spectacular turquoise lagoon."
  },
  {
    id: "dest-8",
    name: "Cape Town",
    country: "South Africa",
    image: "https://images.unsplash.com/photo-1580060839134-75a5edca2e99?q=80&w=2071&auto=format&fit=crop",
    rating: 4.7,
    averageBudget: "Moderate",
    duration: "6-9 days",
    seasons: ["Spring", "Summer"],
    travelStyles: ["City", "Nature", "Adventure"],
    aiRecommended: true,
    description: "A stunning coastal city crowned by Table Mountain, offering pristine beaches and world-class wine valleys."
  },
  {
    id: "dest-9",
    name: "Reykjavik",
    country: "Iceland",
    image: "https://images.unsplash.com/photo-1517619223126-2cb83a4fb92d?q=80&w=2070&auto=format&fit=crop",
    rating: 4.6,
    averageBudget: "Luxury",
    duration: "5-7 days",
    seasons: ["Winter", "Summer"],
    travelStyles: ["Adventure", "Nature"],
    aiRecommended: true,
    description: "The gateway to dramatic landscapes of geysers, waterfalls, and the spectacular Northern Lights."
  },
  {
    id: "dest-10",
    name: "Chiang Mai",
    country: "Thailand",
    image: "https://images.unsplash.com/photo-1510650570377-51f7bb3ff23b?q=80&w=2071&auto=format&fit=crop",
    rating: 4.7,
    averageBudget: "Budget",
    duration: "4-7 days",
    seasons: ["Winter", "Spring"],
    travelStyles: ["Cultural", "Relaxation", "Nature"],
    aiRecommended: false,
    description: "A laid-back cultural hub surrounded by mountains, famous for its ancient temples and night markets."
  },
  {
    id: "dest-11",
    name: "New York City",
    country: "USA",
    image: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?q=80&w=2070&auto=format&fit=crop",
    rating: 4.8,
    averageBudget: "Luxury",
    duration: "5-7 days",
    seasons: ["Autumn", "Spring", "Winter"],
    travelStyles: ["City", "Cultural"],
    aiRecommended: false,
    description: "The city that never sleeps offers iconic skyline views, Broadway shows, and endless culinary adventures."
  },
  {
    id: "dest-12",
    name: "Hoi An",
    country: "Vietnam",
    image: "https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?q=80&w=2128&auto=format&fit=crop",
    rating: 4.8,
    averageBudget: "Budget",
    duration: "3-5 days",
    seasons: ["Spring", "Summer"],
    travelStyles: ["Cultural", "City"],
    aiRecommended: true,
    description: "An exceptionally well-preserved ancient town glowing with colorful silk lanterns at night."
  },
  {
    id: "dest-13",
    name: "Amalfi Coast",
    country: "Italy",
    image: "https://images.unsplash.com/photo-1633519846618-2e0fce508b98?q=80&w=1974&auto=format&fit=crop",
    rating: 4.9,
    averageBudget: "Luxury",
    duration: "5-8 days",
    seasons: ["Summer", "Spring"],
    travelStyles: ["Relaxation", "Nature"],
    aiRecommended: true,
    description: "Dramatic plunging cliffs dotted with pastel-colored villages overlooking the Mediterranean."
  },
  {
    id: "dest-14",
    name: "Queenstown",
    country: "New Zealand",
    image: "https://images.unsplash.com/photo-1607519503487-7324ba50eb31?q=80&w=2070&auto=format&fit=crop",
    rating: 4.8,
    averageBudget: "Moderate",
    duration: "6-9 days",
    seasons: ["Winter", "Summer"],
    travelStyles: ["Adventure", "Nature"],
    aiRecommended: false,
    description: "The adventure capital of the world, sitting gracefully on the shores of Lake Wakatipu."
  },
  {
    id: "dest-15",
    name: "Istanbul",
    country: "Turkey",
    image: "https://images.unsplash.com/photo-1522083115900-561b3e8e19c3?q=80&w=2070&auto=format&fit=crop",
    rating: 4.7,
    averageBudget: "Moderate",
    duration: "4-7 days",
    seasons: ["Spring", "Autumn"],
    travelStyles: ["Cultural", "City"],
    aiRecommended: true,
    description: "Where East meets West—a mesmerizing blend of striking architecture, vibrant bazaars, and rich history."
  }
];
