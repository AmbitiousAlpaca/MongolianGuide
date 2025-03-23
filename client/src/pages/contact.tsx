import React, { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import DestinationsSection from '@/components/DestinationsSection';
import ActivitiesSection from '@/components/ActivitiesSection';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';
import { Destination } from '@/lib/destinations';
import { Activity } from '@/lib/activities';

export default function ContactPage() {
  const [selectedDestinations, setSelectedDestinations] = useState<Destination[]>([]);
  const [selectedActivities, setSelectedActivities] = useState<Activity[]>([]);
  
  const handleDestinationsChange = (destinations: Destination[]) => {
    setSelectedDestinations(destinations);
  };
  
  const handleActivitiesChange = (activities: Activity[]) => {
    setSelectedActivities(activities);
  };

  // Scroll to section based on hash
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const element = document.getElementById(hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, []);

  return (
    <div>
      <Navbar />
      <div className="pt-8 pb-4 bg-neutral-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-heading text-3xl md:text-4xl font-bold mb-4 text-secondary">Plan Your Journey</h1>
          <p className="text-lg max-w-3xl mx-auto">Select your preferred destinations and activities, then share your details to receive a personalized itinerary.</p>
        </div>
      </div>
      
      <div id="destinations">
        <DestinationsSection 
          onDestinationsChange={handleDestinationsChange}
          showContinueButton={false}
        />
      </div>
      
      <div id="activities">
        <ActivitiesSection 
          onActivitiesChange={handleActivitiesChange}
          showContinueButton={false}
        />
      </div>
      
      <ContactForm 
        selectedDestinations={selectedDestinations} 
        selectedActivities={selectedActivities} 
      />
      
      <Footer />
    </div>
  );
}
