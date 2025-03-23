import React from 'react';
import Hero from '@/components/Hero';
import Introduction from '@/components/Introduction';
import DestinationsSection from '@/components/DestinationsSection';
import ActivitiesSection from '@/components/ActivitiesSection';
import HowItWorks from '@/components/HowItWorks';
import AboutTestimonials from '@/components/AboutTestimonials';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div>
      <Hero />
      <Introduction />
      <DestinationsSection />
      <ActivitiesSection />
      <HowItWorks />
      <AboutTestimonials />
      <Footer />
    </div>
  );
}
