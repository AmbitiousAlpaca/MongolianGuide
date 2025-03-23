import React from 'react';
import Navbar from '@/components/Navbar';
import HowItWorks from '@/components/HowItWorks';
import Footer from '@/components/Footer';

export default function HowItWorksPage() {
  return (
    <div>
      <Navbar />
      <div className="pt-8 pb-4 bg-neutral-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-heading text-3xl md:text-4xl font-bold mb-4 text-secondary">How Our Tours Work</h1>
          <p className="text-lg max-w-3xl mx-auto">Learn about our simple step-by-step process to create your perfect Mongolian journey.</p>
        </div>
      </div>
      <HowItWorks />
      <Footer />
    </div>
  );
}
