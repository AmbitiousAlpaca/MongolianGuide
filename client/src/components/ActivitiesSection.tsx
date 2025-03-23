import React, { useState, useEffect } from 'react';
import { useLocation } from 'wouter';
import { activities, Activity } from '@/lib/activities';
import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

interface ActivitiesSectionProps {
  onActivitiesChange?: (activities: Activity[]) => void;
  showContinueButton?: boolean;
}

export default function ActivitiesSection({
  onActivitiesChange,
  showContinueButton = true
}: ActivitiesSectionProps) {
  const [, navigate] = useLocation();
  const { toast } = useToast();
  const [selectedActivities, setSelectedActivities] = useState<Activity[]>([]);

  useEffect(() => {
    if (onActivitiesChange) {
      onActivitiesChange(selectedActivities);
    }
  }, [selectedActivities, onActivitiesChange]);

  const handleToggleActivity = (activity: Activity) => {
    setSelectedActivities(prev => {
      const isSelected = prev.some(a => a.id === activity.id);
      
      if (isSelected) {
        return prev.filter(a => a.id !== activity.id);
      } else {
        return [...prev, activity];
      }
    });
  };

  const isActivitySelected = (activityId: string) => {
    return selectedActivities.some(activity => activity.id === activityId);
  };

  const handleContinueToPlan = () => {
    if (selectedActivities.length === 0) {
      toast({
        title: "No activities selected",
        description: "Please select at least one activity for your journey.",
        variant: "destructive",
      });
      return;
    }
    
    navigate("/contact");
  };

  return (
    <section id="activities" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4 text-secondary">Choose Your Activities</h2>
          <p className="text-lg max-w-3xl mx-auto">Select the activities you're interested in experiencing during your Mongolian adventure.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {activities.map(activity => (
            <div 
              key={activity.id}
              className={`rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300 cursor-pointer ${
                isActivitySelected(activity.id) 
                  ? 'ring-2 ring-primary bg-white' 
                  : 'bg-neutral-light'
              }`}
              onClick={() => handleToggleActivity(activity)}
            >
              <div className="relative h-48">
                <img 
                  src={activity.image} 
                  alt={activity.name} 
                  className="w-full h-full object-cover"
                />
                <div className={`absolute top-3 right-3 w-6 h-6 rounded-full border-2 border-white ${
                  isActivitySelected(activity.id) 
                    ? 'bg-primary flex items-center justify-center' 
                    : 'bg-white/30 flex items-center justify-center opacity-0'
                }`}>
                  <Check className="text-white h-4 w-4" />
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-heading text-lg font-bold mb-2 text-secondary">{activity.name}</h3>
                <p className="text-sm text-neutral-dark">{activity.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        {showContinueButton && (
          <div className="mt-12 text-center">
            <p className="mb-4">Selected Activities: <span>{selectedActivities.length}</span></p>
            <Button 
              onClick={handleContinueToPlan}
              className="inline-block px-8 py-3 bg-primary text-white font-medium rounded-md hover:bg-primary/90 transition duration-300"
            >
              Continue to Plan Your Journey
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
