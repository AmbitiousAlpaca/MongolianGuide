import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertTripInquirySchema } from "@shared/schema";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // put application routes here
  // prefix all routes with /api

  // Trip inquiry routes
  app.post("/api/trip-inquiries", async (req, res) => {
    try {
      console.log('Received trip inquiry:', req.body);
      
      // Add current timestamp
      const inquiryData = {
        ...req.body,
        createdAt: new Date().toISOString(),
      };
      
      // Validate the request body
      const validatedData = insertTripInquirySchema.parse(inquiryData);
      
      // Create the trip inquiry
      const tripInquiry = await storage.createTripInquiry(validatedData);
      
      console.log('Trip inquiry created successfully:', tripInquiry.id);
      res.status(201).json({ 
        message: "Trip inquiry received successfully",
        inquiry: tripInquiry 
      });
    } catch (error) {
      console.error('Error processing trip inquiry:', error);
      if (error instanceof z.ZodError) {
        res.status(400).json({ 
          message: "Invalid data", 
          errors: error.errors.map(e => ({
            field: e.path.join('.'),
            message: e.message
          }))
        });
      } else {
        res.status(500).json({ message: "Internal server error" });
      }
    }
  });

  // Get all trip inquiries
  app.get("/api/trip-inquiries", async (req, res) => {
    try {
      const tripInquiries = await storage.getTripInquiries();
      res.json(tripInquiries);
    } catch (error) {
      res.status(500).json({ message: "Something went wrong" });
    }
  });

  // Get a specific trip inquiry
  app.get("/api/trip-inquiries/:id", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      if (isNaN(id)) {
        return res.status(400).json({ message: "Invalid ID" });
      }
      
      const tripInquiry = await storage.getTripInquiry(id);
      if (!tripInquiry) {
        return res.status(404).json({ message: "Trip inquiry not found" });
      }
      
      res.json(tripInquiry);
    } catch (error) {
      res.status(500).json({ message: "Something went wrong" });
    }
  });

  // Update a trip inquiry status
  app.patch("/api/trip-inquiries/:id/status", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      if (isNaN(id)) {
        return res.status(400).json({ message: "Invalid ID" });
      }
      
      const { status } = req.body;
      if (!status || typeof status !== "string") {
        return res.status(400).json({ message: "Status is required" });
      }
      
      const tripInquiry = await storage.updateTripInquiryStatus(id, status);
      if (!tripInquiry) {
        return res.status(404).json({ message: "Trip inquiry not found" });
      }
      
      res.json(tripInquiry);
    } catch (error) {
      res.status(500).json({ message: "Something went wrong" });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
