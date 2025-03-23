
import nodemailer from 'nodemailer';
import type { TripInquiry } from '@shared/schema';

// Validate required environment variables
const requiredEnvVars = ['SMTP_HOST', 'SMTP_PORT', 'SMTP_USER', 'SMTP_PASS'];
const missingVars = requiredEnvVars.filter(varName => !process.env[varName]);

if (missingVars.length > 0) {
  console.warn(`Missing email configuration: ${missingVars.join(', ')}`);
}

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: parseInt(process.env.SMTP_PORT || '587'),
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

export async function sendInquiryNotification(inquiry: TripInquiry) {
  if (missingVars.length > 0) {
    throw new Error(`Cannot send email: Missing ${missingVars.join(', ')}`);
  }

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
