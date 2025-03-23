export interface Destination {
  id: number;
  name: string;
  position: [number, number]; // [lat, lng]
  description: string;
  image: string;
}

export const destinations: Destination[] = [
  {
    id: 1,
    name: "Ulaanbaatar",
    position: [47.9184676, 106.9177016],
    description: "Mongolia's capital city with rich history, museums, and cultural sites. The gateway to your Mongolian adventure.",
    image: "https://images.unsplash.com/photo-1562643414-221069f11165?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2400&q=80"
  },
  {
    id: 2,
    name: "Gobi Desert",
    position: [43.5, 104.0],
    description: "One of the world's great deserts with diverse landscapes from sand dunes to ice canyons and incredible wildlife.",
    image: "https://images.unsplash.com/photo-1589308078059-be1415eab4c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2400&q=80"
  },
  {
    id: 3,
    name: "Lake Khövsgöl",
    position: [51.1, 100.5],
    description: "Crystal clear alpine lake surrounded by pristine forests and mountains, home to unique reindeer herders.",
    image: "https://images.unsplash.com/photo-1614849286521-4c58b2f0ff15?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2400&q=80"
  },
  {
    id: 4,
    name: "Karakorum",
    position: [47.2, 102.85],
    description: "The ancient capital of the Mongol Empire with historical significance and impressive monastery.",
    image: "https://images.unsplash.com/photo-1636611747925-3c6d4008676a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2400&q=80"
  },
  {
    id: 5,
    name: "Altai Mountains",
    position: [48.7, 89.2],
    description: "Dramatic mountain range with snow-capped peaks, glaciers, and home to traditional eagle hunters.",
    image: "https://images.unsplash.com/photo-1541163261147-08f06469e147?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2400&q=80"
  }
];
