import React, { useState, useEffect } from 'react';
import { useLocation } from 'wouter';
import { MapComponent } from '@/components/ui/map';
import { Destination, destinations } from '@/lib/destinations';
import { X, Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

interface DestinationsSectionProps {
  onDestinationsChange?: (destinations: Destination[]) => void;
  showContinueButton?: boolean;
}

export default function DestinationsSection({ 
  onDestinationsChange, 
  showContinueButton = true 
}: DestinationsSectionProps) {
  const [, navigate] = useLocation();
  const { toast } = useToast();
  const [selectedDestinations, setSelectedDestinations] = useState<Destination[]>([]);
  const [selectedDestination, setSelectedDestination] = useState<Destination | null>(null);

  useEffect(() => {
    if (onDestinationsChange) {
      onDestinationsChange(selectedDestinations);
    }
  }, [selectedDestinations, onDestinationsChange]);

  const handleViewDestinationDetails = (destination: Destination) => {
    setSelectedDestination(destination);
  };

  const handleAddDestination = () => {
    if (!selectedDestination) return;
    
    if (selectedDestinations.some(d => d.id === selectedDestination.id)) {
      toast({
        title: "Already selected",
        description: `${selectedDestination.name} is already in your itinerary.`,
        variant: "destructive",
      });
      return;
    }
    
    setSelectedDestinations([...selectedDestinations, selectedDestination]);
    toast({
      title: "Destination added",
      description: `${selectedDestination.name} has been added to your itinerary.`,
    });
  };

  const handleRemoveDestination = (id: number) => {
    setSelectedDestinations(selectedDestinations.filter(d => d.id !== id));
    toast({
      title: "Destination removed",
      description: "The destination has been removed from your itinerary.",
    });
  };

  const handleContinueToActivities = () => {
    if (selectedDestinations.length === 0) {
      toast({
        title: "No destinations selected",
        description: "Please select at least one destination for your journey.",
        variant: "destructive",
      });
      return;
    }
    
    navigate("/contact#activities");
  };

  return (
    <section id="destinations" className="py-16 bg-neutral-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4 text-secondary">Discover Mongolia's Treasures</h2>
          <p className="text-lg max-w-3xl mx-auto">Explore our interactive map to discover Mongolia's most breathtaking destinations and select the places you'd like to visit on your journey.</p>
        </div>
        
        <div className="lg:flex lg:gap-8">
          {/* Interactive Map Component */}
          <div className="lg:w-2/3 mb-8 lg:mb-0">
            <MapComponent 
              destinations={destinations}
              selectedDestinations={selectedDestinations}
              onSelectDestination={() => {}}
              onViewDestinationDetails={handleViewDestinationDetails}
            />
          </div>
          
          {/* Destination Info and Selection Panel */}
          <div className="lg:w-1/3 bg-white rounded-lg shadow-md p-6">
            <div className={selectedDestination ? 'hidden' : 'block mb-6'}>
              <h3 className="font-heading text-xl font-bold mb-3 text-secondary">Select a destination</h3>
              <p className="text-sm text-neutral-dark/70">Click on a marker on the map to see details and add it to your journey</p>
            </div>
            
            {/* Destination details */}
            <div className={selectedDestination ? 'block' : 'hidden'}>
              <h3 className="font-heading text-xl font-bold mb-3 text-secondary">
                {selectedDestination?.name}
              </h3>
              {selectedDestination && (
                <img 
                  src={selectedDestination.image} 
                  alt={selectedDestination.name} 
                  className="w-full h-48 object-cover rounded-md mb-4"
                />
              )}
              <p className="text-sm mb-4">{selectedDestination?.description}</p>
              
              <Button 
                onClick={handleAddDestination} 
                className="w-full bg-primary text-white py-2 rounded-md hover:bg-primary/90 transition duration-300"
              >
                <Plus className="mr-2 h-4 w-4" /> Add to Itinerary
              </Button>
            </div>
            
            {/* Selected Destinations List */}
            <div className="mt-6 border-t pt-4">
              <h4 className="font-medium mb-3">Your Selected Destinations</h4>
              
              {selectedDestinations.length === 0 ? (
                <div className="text-sm text-neutral-dark/70">
                  No destinations selected yet
                </div>
              ) : (
                <ul className="space-y-2">
                  {selectedDestinations.map(destination => (
                    <li 
                      key={destination.id} 
                      className="flex justify-between items-center bg-neutral-light p-2 rounded-md"
                    >
                      <span className="font-medium">{destination.name}</span>
                      <button 
                        className="text-error" 
                        onClick={() => handleRemoveDestination(destination.id)}
                      >
                        <X className="h-4 w-4" />
                      </button>
                    </li>
                  ))}
                </ul>
              )}
              
              {showContinueButton && (
                <div className="mt-6">
                  <Button 
                    onClick={handleContinueToActivities} 
                    className="block w-full text-center bg-secondary text-white py-2 rounded-md hover:bg-secondary/90 transition duration-300"
                  >
                    Continue to Activities
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
