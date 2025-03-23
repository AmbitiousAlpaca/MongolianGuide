import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { ReloadIcon } from '@radix-ui/react-icons';
import { DatePicker } from '@mui/x-date-pickers';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';

type Props = {
  selectedDestinations?: string[];
  selectedActivities?: string[];
};

export default function ContactForm({ selectedDestinations, selectedActivities }: Props) {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);

  const onSubmit = async (data: any) => {
    setLoading(true);
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...data,
          startDate,
          endDate,
          selectedDestinations,
          selectedActivities,
        }),
      });

      if (response.ok) {
        toast({
          title: "Success!",
          description: "Your message has been sent.",
        });
        reset();
        setStartDate(null);
        setEndDate(null);
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 max-w-xl mx-auto p-6 bg-white rounded-lg shadow">
      <h2 className="text-2xl font-bold text-center mb-6">Contact Details</h2>

      <div>
        <Label htmlFor="name">Name</Label>
        <Input
          id="name"
          {...register("name", { required: "Name is required" })}
          placeholder="Your name"
        />
        {errors.name && (
          <p className="text-red-500 text-sm mt-1">{errors.name.message as string}</p>
        )}
      </div>

      <div>
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          type="email"
          {...register("email", { 
            required: "Email is required",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "Invalid email address"
            }
          })}
          placeholder="your@email.com"
        />
        {errors.email && (
          <p className="text-red-500 text-sm mt-1">{errors.email.message as string}</p>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <Label>Start Date</Label>
          <DatePicker 
            value={startDate}
            onChange={(date) => setStartDate(date)}
            className="w-full"
          />
        </div>
        <div>
          <Label>End Date</Label>
          <DatePicker 
            value={endDate}
            onChange={(date) => setEndDate(date)}
            className="w-full"
          />
        </div>
      </div>

      <div>
        <Label htmlFor="message">Additional Notes</Label>
        <Textarea
          id="message"
          {...register("message")}
          placeholder="Any specific requirements or questions?"
          className="min-h-[120px]"
        />
      </div>

      <Button type="submit" disabled={loading} className="w-full">
        {loading && <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />}
        Send Message
      </Button>
    </form>
    </LocalizationProvider>
  );
}