import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { insertTripInquirySchema } from '@shared/schema';
import { useToast } from '@/hooks/use-toast';
import { useMutation } from '@tanstack/react-query';
import { Destination } from '@/lib/destinations';
import { Activity } from '@/lib/activities';
import { Loader2, Mail, Phone, MapPin } from 'lucide-react';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { apiRequest } from '@/lib/queryClient';

// Extend the schema with client-side validation
const formSchema = insertTripInquirySchema.extend({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  travelDates: z.string().min(1, { message: "Please specify your travel dates" }),
});

type FormValues = z.infer<typeof formSchema>;

interface ContactFormProps {
  selectedDestinations: Destination[];
  selectedActivities: Activity[];
}

export default function ContactForm({ selectedDestinations, selectedActivities }: ContactFormProps) {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      destinations: [],
      activities: [],
      groupSize: "",
      tripLength: "",
      travelDates: "",
      budget: "",
      specialRequests: "",
      howHeard: "",
      createdAt: new Date().toISOString(),
    }
  });

  // Update form values when selections change
  useEffect(() => {
    form.setValue('destinations', selectedDestinations.map(d => d.name));
    form.setValue('activities', selectedActivities.map(a => a.name));
  }, [selectedDestinations, selectedActivities]);

  const mutation = useMutation({
    mutationFn: async (data: FormValues) => {
      return apiRequest('POST', '/api/trip-inquiries', data);
    },
    onSuccess: () => {
      toast({
        title: "Form submitted successfully!",
        description: "Thank you for your inquiry. We'll get back to you within 48 hours with a personalized itinerary.",
      });
      form.reset();
      setIsSubmitting(false);
    },
    onError: (error) => {
      toast({
        title: "Submission failed",
        description: error.message || "There was a problem submitting your form. Please try again.",
        variant: "destructive",
      });
      setIsSubmitting(false);
    }
  });

  function onSubmit(data: FormValues) {
    setIsSubmitting(true);
    mutation.mutate(data);
  }

  return (
    <section id="contact" className="py-16 bg-neutral-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4 text-secondary">Plan Your Mongolian Journey</h2>
          <p className="text-lg max-w-3xl mx-auto">Ready to start planning? Submit your preferences and I'll create a personalized itinerary just for you.</p>
        </div>
        
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="md:flex">
            {/* Form Section */}
            <div className="md:w-2/3 p-6 md:p-8">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-sm font-medium text-neutral-dark">Your Name</FormLabel>
                          <FormControl>
                            <Input 
                              {...field} 
                              className="w-full p-3 border border-neutral-dark/20 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50" 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-sm font-medium text-neutral-dark">Email Address</FormLabel>
                          <FormControl>
                            <Input 
                              {...field} 
                              type="email" 
                              className="w-full p-3 border border-neutral-dark/20 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50" 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <div>
                    <FormLabel className="block text-sm font-medium text-neutral-dark mb-1">Your Selected Destinations</FormLabel>
                    <div className="p-3 border border-neutral-dark/20 rounded-md min-h-[60px] bg-neutral-light/50">
                      {selectedDestinations.length > 0 ? (
                        <div className="flex flex-wrap gap-2">
                          {selectedDestinations.map(destination => (
                            <span key={destination.id} className="bg-primary/10 text-primary px-2 py-1 rounded-md text-sm">
                              {destination.name}
                            </span>
                          ))}
                        </div>
                      ) : (
                        <p className="text-neutral-dark/50 text-sm">No destinations selected yet</p>
                      )}
                    </div>
                  </div>
                  
                  <div>
                    <FormLabel className="block text-sm font-medium text-neutral-dark mb-1">Your Selected Activities</FormLabel>
                    <div className="p-3 border border-neutral-dark/20 rounded-md min-h-[60px] bg-neutral-light/50">
                      {selectedActivities.length > 0 ? (
                        <div className="flex flex-wrap gap-2">
                          {selectedActivities.map(activity => (
                            <span key={activity.id} className="bg-primary/10 text-primary px-2 py-1 rounded-md text-sm">
                              {activity.name}
                            </span>
                          ))}
                        </div>
                      ) : (
                        <p className="text-neutral-dark/50 text-sm">No activities selected yet</p>
                      )}
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="groupSize"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-sm font-medium text-neutral-dark">Group Size</FormLabel>
                          <Select 
                            onValueChange={field.onChange} 
                            defaultValue={field.value}
                          >
                            <FormControl>
                              <SelectTrigger className="w-full p-3 border border-neutral-dark/20 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50">
                                <SelectValue placeholder="Select group size" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="1">Solo Traveler</SelectItem>
                              <SelectItem value="2">2 People</SelectItem>
                              <SelectItem value="3">3 People</SelectItem>
                              <SelectItem value="4">4 People</SelectItem>
                              <SelectItem value="5+">5+ People (Special Arrangement)</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="tripLength"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-sm font-medium text-neutral-dark">Preferred Trip Length</FormLabel>
                          <Select 
                            onValueChange={field.onChange} 
                            defaultValue={field.value}
                          >
                            <FormControl>
                              <SelectTrigger className="w-full p-3 border border-neutral-dark/20 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50">
                                <SelectValue placeholder="Select trip length" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="short">Short (3-5 days)</SelectItem>
                              <SelectItem value="medium">Medium (6-10 days)</SelectItem>
                              <SelectItem value="long">Long (11-15 days)</SelectItem>
                              <SelectItem value="extended">Extended (16+ days)</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="travelDates"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-sm font-medium text-neutral-dark">Preferred Travel Dates</FormLabel>
                          <FormControl>
                            <Input 
                              {...field} 
                              placeholder="e.g., June 2024 or flexible" 
                              className="w-full p-3 border border-neutral-dark/20 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50" 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="budget"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-sm font-medium text-neutral-dark">Budget Range (USD per person)</FormLabel>
                          <Select 
                            onValueChange={field.onChange} 
                            defaultValue={field.value}
                          >
                            <FormControl>
                              <SelectTrigger className="w-full p-3 border border-neutral-dark/20 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50">
                                <SelectValue placeholder="Select budget range" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="budget">Standard ($100-150/day)</SelectItem>
                              <SelectItem value="mid">Comfortable ($150-250/day)</SelectItem>
                              <SelectItem value="premium">Premium ($250+/day)</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <FormField
                    control={form.control}
                    name="specialRequests"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm font-medium text-neutral-dark">Special Requests or Dietary Requirements</FormLabel>
                        <FormControl>
                          <Textarea 
                            {...field} 
                            rows={3} 
                            className="w-full p-3 border border-neutral-dark/20 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50" 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="howHeard"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm font-medium text-neutral-dark">How did you hear about us?</FormLabel>
                        <Select 
                          onValueChange={field.onChange} 
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger className="w-full p-3 border border-neutral-dark/20 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50">
                              <SelectValue placeholder="Please select" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="search">Search Engine</SelectItem>
                            <SelectItem value="social">Social Media</SelectItem>
                            <SelectItem value="referral">Friend/Family Referral</SelectItem>
                            <SelectItem value="review">Review Site</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <div className="pt-4">
                    <Button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="w-full bg-primary text-white py-3 px-6 rounded-md hover:bg-primary/90 transition duration-300"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Submitting...
                        </>
                      ) : (
                        "Submit Your Journey Request"
                      )}
                    </Button>
                  </div>
                </form>
              </Form>
            </div>
            
            {/* Contact Info Sidebar */}
            <div className="md:w-1/3 bg-secondary text-white p-6 md:p-8">
              <h3 className="font-heading text-xl font-bold mb-6">Contact Information</h3>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-6 text-accent">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div className="ml-3">
                    <p className="font-medium">Email</p>
                    <p className="text-white/80">info@mongolian.guide</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-6 text-accent">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div className="ml-3">
                    <p className="font-medium">Phone/WhatsApp</p>
                    <p className="text-white/80">+976 9911 2233</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-6 text-accent">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div className="ml-3">
                    <p className="font-medium">Based In</p>
                    <p className="text-white/80">Ulaanbaatar, Mongolia</p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h4 className="font-medium mb-2">Response Time</h4>
                  <p className="text-sm text-white/80">I typically respond to inquiries within 24-48 hours.</p>
                </div>
                
                <div>
                  <h4 className="font-medium mb-2">Best Time to Visit</h4>
                  <p className="text-sm text-white/80">Mongolia's peak season is from June to September, offering the most pleasant weather for travel.</p>
                </div>
                
                <div>
                  <h4 className="font-medium mb-2">Connect With Me</h4>
                  <div className="flex space-x-4 mt-2">
                    <a href="#" className="text-white hover:text-accent transition-colors">
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/>
                      </svg>
                    </a>
                    <a href="#" className="text-white hover:text-accent transition-colors">
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153a4.908 4.908 0 0 1 1.153 1.772c.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 0 1-1.153 1.772 4.915 4.915 0 0 1-1.772 1.153c-.637.247-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 0 1-1.772-1.153 4.904 4.904 0 0 1-1.153-1.772c-.248-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122.05-1.066.217-1.79.465-2.428a4.88 4.88 0 0 1 1.153-1.772A4.897 4.897 0 0 1 5.45 2.525c.638-.248 1.362-.415 2.428-.465C8.944 2.013 9.283 2 12 2zm0 1.802c-2.67 0-2.986.01-4.04.059-.976.045-1.505.207-1.858.344-.466.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.136.353-.3.882-.344 1.857-.048 1.055-.058 1.37-.058 4.04 0 2.67.01 2.986.058 4.04.045.976.208 1.505.344 1.858.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.136.882.3 1.857.344 1.055.048 1.37.058 4.04.058 2.67 0 2.987-.01 4.04-.058.976-.045 1.505-.208 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.136-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.04 0-2.67-.01-2.986-.058-4.04-.045-.976-.208-1.505-.344-1.858a3.097 3.097 0 0 0-.748-1.15 3.098 3.098 0 0 0-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.054-.048-1.37-.058-4.04-.058zm0 3.063a5.135 5.135 0 1 1 0 10.27 5.135 5.135 0 0 1 0-10.27zm0 8.468a3.333 3.333 0 1 0 0-6.666 3.333 3.333 0 0 0 0 6.666zm6.538-8.469a1.2 1.2 0 1 1-2.4 0 1.2 1.2 0 0 1 2.4 0z"/>
                      </svg>
                    </a>
                    <a href="#" className="text-white hover:text-accent transition-colors">
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19.2 3H4.8C3.8 3 3 3.8 3 4.8v14.4c0 1 .8 1.8 1.8 1.8h14.4c1 0 1.8-.8 1.8-1.8V4.8c0-1-.8-1.8-1.8-1.8zM9 17H7v-7h2v7zm-1-8.5c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1zm8 8.5h-2v-4c0-.6-.4-1-1-1s-1 .4-1 1v4h-2v-7h2v1.2c.4-.7 1.2-1.2 2-1.2 1.7 0 2 1.3 2 3v4z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
