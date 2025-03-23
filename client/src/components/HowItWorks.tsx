import React from 'react';

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-16 bg-neutral-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4 text-secondary">How It Works</h2>
          <p className="text-lg max-w-3xl mx-auto">Planning your Mongolian adventure is simple. Here's our step-by-step process to create your perfect journey.</p>
        </div>
        
        <div className="relative">
          {/* Process steps with connector line */}
          <div className="hidden md:block absolute left-1/2 top-8 bottom-8 w-1 bg-primary/20 -translate-x-1/2"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative">
            {/* Step 1 */}
            <div className="md:text-right md:pr-12">
              <div className="md:inline-block">
                <div className="flex items-center md:justify-end mb-4">
                  <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center text-xl font-bold relative z-10">1</div>
                </div>
                <h3 className="font-heading text-xl font-bold mb-2 text-secondary">Select Your Destinations</h3>
                <p className="text-neutral-dark">Use our interactive map to choose the Mongolian destinations you'd like to visit.</p>
              </div>
            </div>
            
            {/* Empty column for step 1 (mobile layout) */}
            <div className="hidden md:block"></div>
            
            {/* Empty column for step 2 (mobile layout) */}
            <div className="hidden md:block"></div>
            
            {/* Step 2 */}
            <div className="md:text-left md:pl-12">
              <div className="md:inline-block">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center text-xl font-bold relative z-10">2</div>
                </div>
                <h3 className="font-heading text-xl font-bold mb-2 text-secondary">Choose Your Activities</h3>
                <p className="text-neutral-dark">Select the experiences and activities that interest you most during your journey.</p>
              </div>
            </div>
            
            {/* Step 3 */}
            <div className="md:text-right md:pr-12">
              <div className="md:inline-block">
                <div className="flex items-center md:justify-end mb-4">
                  <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center text-xl font-bold relative z-10">3</div>
                </div>
                <h3 className="font-heading text-xl font-bold mb-2 text-secondary">Submit Your Preferences</h3>
                <p className="text-neutral-dark">Send your selected destinations, activities, and additional requirements through our form.</p>
              </div>
            </div>
            
            {/* Empty column for step 3 (mobile layout) */}
            <div className="hidden md:block"></div>
            
            {/* Empty column for step 4 (mobile layout) */}
            <div className="hidden md:block"></div>
            
            {/* Step 4 */}
            <div className="md:text-left md:pl-12">
              <div className="md:inline-block">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center text-xl font-bold relative z-10">4</div>
                </div>
                <h3 className="font-heading text-xl font-bold mb-2 text-secondary">Receive Your Draft Itinerary</h3>
                <p className="text-neutral-dark">I'll respond with a personalized itinerary based on your selections within 48 hours.</p>
              </div>
            </div>
            
            {/* Step 5 */}
            <div className="md:text-right md:pr-12">
              <div className="md:inline-block">
                <div className="flex items-center md:justify-end mb-4">
                  <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center text-xl font-bold relative z-10">5</div>
                </div>
                <h3 className="font-heading text-xl font-bold mb-2 text-secondary">Confirm and Refine</h3>
                <p className="text-neutral-dark">Make a consultation payment and we'll refine your itinerary through email exchanges or a video call.</p>
              </div>
            </div>
            
            {/* Empty column for step 5 (mobile layout) */}
            <div className="hidden md:block"></div>
            
            {/* Empty column for step 6 (mobile layout) */}
            <div className="hidden md:block"></div>
            
            {/* Step 6 */}
            <div className="md:text-left md:pl-12">
              <div className="md:inline-block">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center text-xl font-bold relative z-10">6</div>
                </div>
                <h3 className="font-heading text-xl font-bold mb-2 text-secondary">Finalize and Enjoy</h3>
                <p className="text-neutral-dark">Pay your deposit to confirm the trip, and the final payment upon arrival in Mongolia.</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-16">
          <div className="bg-white rounded-lg shadow-md p-8">
            <h3 className="font-heading text-2xl font-bold mb-4 text-secondary">Frequently Asked Questions</h3>
            
            <div className="space-y-6">
              <div>
                <h4 className="font-bold text-lg mb-2">What is the typical group size?</h4>
                <p>Most tours work best with 1-4 travelers (SUV capacity). Larger groups can be accommodated with prior arrangement.</p>
              </div>
              
              <div>
                <h4 className="font-bold text-lg mb-2">What's included in the tour price?</h4>
                <p>Tour prices typically include accommodation, transportation, guide services, and most meals. The exact inclusions will be detailed in your personalized itinerary.</p>
              </div>
              
              <div>
                <h4 className="font-bold text-lg mb-2">How much is the consultation fee?</h4>
                <p>The non-refundable consultation fee is USD 100, which is applied toward your tour cost if you proceed with booking.</p>
              </div>
              
              <div>
                <h4 className="font-bold text-lg mb-2">What is the payment schedule?</h4>
                <p>After the consultation, a 30% deposit confirms your booking, with the remaining balance due upon arrival in Mongolia.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
