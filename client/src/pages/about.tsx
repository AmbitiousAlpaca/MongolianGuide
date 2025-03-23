import React from 'react';
import Navbar from '@/components/Navbar';
import AboutTestimonials from '@/components/AboutTestimonials';
import Footer from '@/components/Footer';

export default function AboutPage() {
  return (
    <div>
      <Navbar />
      <div className="pt-8 pb-4 bg-neutral-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-heading text-3xl md:text-4xl font-bold mb-4 text-secondary">About Your Guide</h1>
          <p className="text-lg max-w-3xl mx-auto">Learn about your guide and read testimonials from travelers who have experienced Mongolia with us.</p>
        </div>
      </div>
      <AboutTestimonials />
      <Footer />
    </div>
  );
}
