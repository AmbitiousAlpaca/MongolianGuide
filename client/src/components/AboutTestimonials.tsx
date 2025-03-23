import React from 'react';
import { testimonials } from '@/lib/testimonials';
import { MapPin, Users, Bed, Shield } from 'lucide-react';
import { Star } from 'lucide-react';

export default function AboutTestimonials() {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:flex lg:gap-12 lg:items-start">
          {/* About Me */}
          <div className="lg:w-1/2 mb-12 lg:mb-0">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6 text-secondary">About Your Guide</h2>
            
            <div className="flex flex-col sm:flex-row gap-6 mb-8">
              <div className="sm:w-1/3">
                <img 
                  src="https://images.unsplash.com/photo-1568333261341-a46ba6566e9a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2080&q=80" 
                  alt="Tour guide portrait" 
                  className="w-full aspect-[3/4] object-cover rounded-lg"
                />
              </div>
              
              <div className="sm:w-2/3">
                <h3 className="font-heading text-xl font-bold mb-2 text-secondary">Batbayar Tsogtbaatar</h3>
                <p className="text-sm text-neutral-dark/70 mb-4">Professional Tour Guide & Mongolia Expert</p>
                
                <p className="mb-4">Born and raised in Mongolia, I've spent the last 15 years guiding travelers through my country's magnificent landscapes and rich cultural heritage.</p>
                
                <p>My passion is creating authentic experiences that connect you with Mongolia's people, traditions, and natural wonders while ensuring your comfort and enjoyment throughout the journey.</p>
              </div>
            </div>
            
            <div className="bg-neutral-light p-6 rounded-lg">
              <h3 className="font-heading text-xl font-bold mb-4 text-secondary">Why Choose Me</h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-10 w-10 rounded-md bg-primary/10 flex items-center justify-center">
                    <span className="text-primary">🗣️</span>
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-bold text-secondary">Fluent English</p>
                    <p className="text-sm text-neutral-dark">Clear communication throughout your journey</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-10 w-10 rounded-md bg-primary/10 flex items-center justify-center">
                    <MapPin className="text-primary h-5 w-5" />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-bold text-secondary">Local Knowledge</p>
                    <p className="text-sm text-neutral-dark">Access to hidden gems and local connections</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-10 w-10 rounded-md bg-primary/10 flex items-center justify-center">
                    <Bed className="text-primary h-5 w-5" />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-bold text-secondary">Comfort Focus</p>
                    <p className="text-sm text-neutral-dark">Ensuring proper accommodations and meals</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-10 w-10 rounded-md bg-primary/10 flex items-center justify-center">
                    <Shield className="text-primary h-5 w-5" />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-bold text-secondary">Safety Priority</p>
                    <p className="text-sm text-neutral-dark">Experienced in remote travel safety protocols</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Testimonials */}
          <div className="lg:w-1/2">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6 text-secondary">Traveler Experiences</h2>
            
            <div className="space-y-6">
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="bg-neutral-light p-6 rounded-lg">
                  <div className="flex items-center mb-4">
                    <div className="text-accent flex">
                      {Array.from({ length: testimonial.rating }).map((_, i) => (
                        <Star key={i} className="fill-current h-4 w-4" />
                      ))}
                    </div>
                  </div>
                  
                  <p className="italic mb-4">{testimonial.text}</p>
                  
                  <div className="flex items-center">
                    <div className="mr-4">
                      <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center">
                        <span className="text-secondary font-bold">{testimonial.initials}</span>
                      </div>
                    </div>
                    <div>
                      <p className="font-bold">{testimonial.name}</p>
                      <p className="text-sm text-neutral-dark/70">{testimonial.location}, visited {testimonial.visitDate}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
