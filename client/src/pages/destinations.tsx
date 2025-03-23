import React from 'react';
import Navbar from '@/components/Navbar';
import DestinationsSection from '@/components/DestinationsSection';
import Footer from '@/components/Footer';

export default function DestinationsPage() {
  return (
    <div>
      <Navbar />
      <div className="pt-8 pb-4 bg-neutral-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-heading text-3xl md:text-4xl font-bold mb-4 text-secondary">Mongolia's Destinations</h1>
          <p className="text-lg max-w-3xl mx-auto">Explore the diverse landscapes and cultural highlights of Mongolia. Select destinations for your personalized journey.</p>
        </div>
      </div>
      <DestinationsSection />
      <Footer />
    </div>
  );
}
