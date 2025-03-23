import React from 'react';
import { testimonials } from '@/lib/testimonials';

export default function AboutTestimonials() {
  return (
    <div id="about" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-secondary">About Your Guide</h2>
            <p className="text-lg text-neutral-dark">
              Hello! I'm Oyuntsetseg (Oyuna), a professional Mongolian tour guide with over 10 years of experience.
            </p>
            <p className="text-lg text-neutral-dark">
              Born and raised in Mongolia, I'm passionate about sharing my country's unique culture, breathtaking landscapes, and nomadic traditions with travelers from around the world.
            </p>
            
            <div className="bg-neutral-light p-6 rounded-lg shadow-sm">
              <h3 className="font-heading text-xl font-bold mb-3 text-secondary">My Credentials:</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>Licensed Tour Guide by the Mongolian Tourism Association</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>Fluent in English, Mongolian, and conversational Russian</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>Wilderness First Aid Certified</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>Degree in Tourism Management from National University of Mongolia</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>Member of Sustainable Tourism Council of Mongolia</span>
                </li>
              </ul>
            </div>
            
            <p className="text-lg text-neutral-dark">
              My goal is to create personalized, authentic experiences while ensuring your comfort and safety. I specialize in small-group and private tours that balance adventure with comfort.
            </p>
          </div>
          
          <div>
            <div className="relative bg-white rounded-xl overflow-hidden shadow-xl mb-8">
              <img 
                src="https://images.unsplash.com/photo-1516449609407-eda5f297e28f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80" 
                alt="Mongolian guide with travelers" 
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <p className="text-lg font-medium mb-2">Why travel with a local guide?</p>
                <p className="text-neutral-dark">
                  With a local guide, you'll gain access to authentic experiences, cultural insights, and hidden gems that most tourists miss. I'll help you navigate language barriers, local customs, and logistical challenges while creating a journey tailored to your interests.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Testimonials Section */}
        <div className="mt-16">
          <h3 className="font-heading text-2xl md:text-3xl font-bold mb-8 text-center text-secondary">What Travelers Are Saying</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.slice(0, 3).map((testimonial) => (
              <div key={testimonial.id} className="bg-white rounded-lg shadow-md p-6 flex flex-col">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-lg">
                    {testimonial.initials}
                  </div>
                  <div className="ml-4">
                    <h4 className="font-medium">{testimonial.name}</h4>
                    <p className="text-sm text-neutral-dark/70">{testimonial.location}</p>
                  </div>
                </div>
                
                <div className="flex mb-3">
                  {[...Array(5)].map((_, i) => (
                    <svg 
                      key={i} 
                      xmlns="http://www.w3.org/2000/svg" 
                      className={`h-5 w-5 ${i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'}`} 
                      viewBox="0 0 20 20" 
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                
                <p className="text-neutral-dark flex-grow italic">"{testimonial.text}"</p>
                
                <p className="text-sm text-neutral-dark/70 mt-4">
                  Visited: {testimonial.visitDate}
                </p>
              </div>
            ))}
          </div>
          
          <div className="mt-8 text-center">
            <button 
              className="inline-flex items-center text-primary hover:text-primary/80 font-medium"
              onClick={() => {
                // This would open a modal or navigate to a page with more testimonials
                alert('This would show more testimonials in a modal window');
              }}
            >
              <span>Read more testimonials</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}