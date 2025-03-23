export interface Testimonial {
  id: number;
  name: string;
  location: string;
  visitDate: string;
  text: string;
  initials: string;
  rating: number;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    location: "United States",
    visitDate: "June 2022",
    text: "Our journey through Mongolia with Batbayar was the adventure of a lifetime. His knowledge of the land and culture made our experience so much richer, and he found the perfect balance between authentic experiences and comfort.",
    initials: "SJ",
    rating: 5
  },
  {
    id: 2,
    name: "Michael Lee",
    location: "Australia",
    visitDate: "September 2022",
    text: "The customized itinerary perfectly matched what we were looking for. Batbayar's attention to detail ensured we had comfortable accommodations while still experiencing the authentic nomadic culture. His knowledge of photography spots was an unexpected bonus!",
    initials: "ML",
    rating: 5
  },
  {
    id: 3,
    name: "Elena Kowalski",
    location: "Germany", 
    visitDate: "July 2023",
    text: "As a solo female traveler, I was initially hesitant about visiting Mongolia, but Batbayar made me feel safe and comfortable throughout the entire journey. His local connections gave us access to authentic experiences I never would have found on my own.",
    initials: "EK",
    rating: 5
  }
];
