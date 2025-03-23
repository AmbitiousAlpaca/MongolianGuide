import React from 'react';
import { MapPin, Users, Bed, Utensils } from 'lucide-react';

export default function Introduction() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:flex lg:items-center lg:gap-12">
          <div className="lg:w-1/2 mb-10 lg:mb-0">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6 text-secondary">Personalized Journeys Through Mongolia</h2>
            <p className="text-lg mb-6">Welcome to Mongolian.guide, where every journey is as unique as you are. I specialize in creating tailor-made experiences for travelers who value authenticity, comfort, and personalization.</p>
            <p className="text-lg mb-6">Whether you're drawn to the vast steppes, nomadic cultures, or historical sites, I'll craft an itinerary that perfectly matches your interests and preferences.</p>
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="flex items-start">
                <div className="flex-shrink-0 h-10 w-10 rounded-md bg-primary/10 flex items-center justify-center">
                  <MapPin className="text-primary h-5 w-5" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-secondary">Local Expertise</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 h-10 w-10 rounded-md bg-primary/10 flex items-center justify-center">
                  <Users className="text-primary h-5 w-5" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-secondary">Small Groups</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 h-10 w-10 rounded-md bg-primary/10 flex items-center justify-center">
                  <Bed className="text-primary h-5 w-5" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-secondary">Comfortable Stays</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 h-10 w-10 rounded-md bg-primary/10 flex items-center justify-center">
                  <Utensils className="text-primary h-5 w-5" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-secondary">Quality Meals</p>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 grid grid-cols-2 gap-4">
            <div className="aspect-[4/5] overflow-hidden rounded-lg">
              <img 
                src="https://images.unsplash.com/photo-1601192128258-96a6f2560736?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2400&q=80"
                alt="Mongolian nomadic family" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-[4/5] overflow-hidden rounded-lg relative top-8">
              <img 
                src="https://images.unsplash.com/photo-1532026080158-e9c85322b5ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2400&q=80"
                alt="Mongolian landscape with horses" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
