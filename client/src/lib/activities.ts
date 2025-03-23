export interface Activity {
  id: string;
  name: string;
  description: string;
  image: string;
}

export const activities: Activity[] = [
  {
    id: "hiking",
    name: "Hiking & Trekking",
    description: "Explore Mongolia's diverse landscapes on foot, from rolling hills to rugged mountains.",
    image: "https://images.unsplash.com/photo-1526772662000-3f88f10405ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2400&q=80"
  },
  {
    id: "horseback",
    name: "Horseback Riding",
    description: "Experience Mongolia as the nomads do, on horseback across the vast steppes.",
    image: "https://images.unsplash.com/photo-1568742550141-ddda75a8bcad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2400&q=80"
  },
  {
    id: "cultural",
    name: "Cultural Experiences",
    description: "Immerse yourself in nomadic life, traditions, and authentic cultural exchanges.",
    image: "https://images.unsplash.com/photo-1552553302-9211bf7f7053?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2400&q=80"
  },
  {
    id: "wildlife",
    name: "Wildlife Viewing",
    description: "Observe Mongolia's diverse wildlife in their natural habitats.",
    image: "https://images.unsplash.com/photo-1564996699790-45735e387b36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2400&q=80"
  },
  {
    id: "photography",
    name: "Photography Tours",
    description: "Capture Mongolia's stunning landscapes and unique cultural moments.",
    image: "https://images.unsplash.com/photo-1565619632801-9007c63fd813?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2400&q=80"
  },
  {
    id: "camping",
    name: "Authentic Camping",
    description: "Sleep in traditional gers (yurts) under Mongolia's star-filled skies.",
    image: "https://images.unsplash.com/photo-1516706442088-86a18984fc72?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2400&q=80"
  }
];
