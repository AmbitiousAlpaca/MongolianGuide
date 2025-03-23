import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Introduction from "@/components/Introduction";
import DestinationsSection from "@/components/DestinationsSection";
import ActivitiesSection from "@/components/ActivitiesSection";
import HowItWorks from "@/components/HowItWorks";
import AboutTestimonials from "@/components/AboutTestimonials";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import { useState } from "react";
import { Destination } from "@/lib/destinations";
import { Activity } from "@/lib/activities";

function App() {
  const [selectedDestinations, setSelectedDestinations] = useState<Destination[]>([]);
  const [selectedActivities, setSelectedActivities] = useState<Activity[]>([]);

  const handleDestinationsChange = (destinations: Destination[]) => {
    setSelectedDestinations(destinations);
  };

  const handleActivitiesChange = (activities: Activity[]) => {
    setSelectedActivities(activities);
  };

  return (
    <QueryClientProvider client={queryClient}>
      <div className="font-body text-neutral-dark bg-neutral-light min-h-screen">
        <Navbar />
        
        <main>
          <section id="home">
            <Hero />
          </section>
          
          <section id="introduction">
            <Introduction />
          </section>
          
          <section id="about">
            <AboutTestimonials />
          </section>
          
          <section id="how-it-works">
            <HowItWorks />
          </section>
          
          <section id="destinations">
            <DestinationsSection onDestinationsChange={handleDestinationsChange} />
          </section>
          
          <section id="activities">
            <ActivitiesSection onActivitiesChange={handleActivitiesChange} />
          </section>
          
          <section id="contact">
            <ContactForm 
              selectedDestinations={selectedDestinations}
              selectedActivities={selectedActivities}
            />
          </section>
        </main>
        
        <Footer />
        <ScrollToTop />
        <Toaster />
      </div>
    </QueryClientProvider>
  );
}

export default App;
