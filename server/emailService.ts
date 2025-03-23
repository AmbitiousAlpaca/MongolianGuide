
import nodemailer from 'nodemailer';
import type { TripInquiry } from '@shared/schema';

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || 'smtp.gmail.com',
  port: parseInt(process.env.SMTP_PORT || '587'),
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

export async function sendInquiryNotification(inquiry: TripInquiry) {
  const destinationsList = inquiry.destinations.join(', ');
  const activitiesList = inquiry.activities.join(', ');
  
  const emailBody = `
New Trip Inquiry:

Name: ${inquiry.name}
Email: ${inquiry.email}
Destinations: ${destinationsList}
Activities: ${activitiesList}
Group Size: ${inquiry.groupSize}
Trip Length: ${inquiry.tripLength}
Travel Dates: ${inquiry.travelDates}
Budget: ${inquiry.budget}
Special Requests: ${inquiry.specialRequests || 'None'}
How they heard about us: ${inquiry.howHeard || 'Not specified'}
`;

  await transporter.sendMail({
    from: process.env.SMTP_USER,
    to: 'hello@mongolian.guide',
    subject: `New Trip Inquiry from ${inquiry.name}`,
    text: emailBody,
  });
}
