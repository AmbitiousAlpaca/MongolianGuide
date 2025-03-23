import { pgTable, text, serial, integer, boolean, jsonb } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;

// Trip inquiries table
export const tripInquiries = pgTable("trip_inquiries", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  destinations: text("destinations").array().notNull(),
  activities: text("activities").array().notNull(),
  groupSize: text("group_size").notNull(),
  tripLength: text("trip_length").notNull(),
  travelDates: text("travel_dates").notNull(),
  budget: text("budget").notNull(),
  specialRequests: text("special_requests"),
  howHeard: text("how_heard"),
  status: text("status").default("new").notNull(),
  createdAt: text("created_at").notNull(),
});

export const insertTripInquirySchema = createInsertSchema(tripInquiries).omit({
  id: true,
  status: true,
});

export type InsertTripInquiry = z.infer<typeof insertTripInquirySchema>;
export type TripInquiry = typeof tripInquiries.$inferSelect;
