import { users, type User, type InsertUser, tripInquiries, type TripInquiry, type InsertTripInquiry } from "@shared/schema";

// modify the interface with any CRUD methods
// you might need

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  // Trip inquiry methods
  createTripInquiry(inquiry: InsertTripInquiry): Promise<TripInquiry>;
  getTripInquiries(): Promise<TripInquiry[]>;
  getTripInquiry(id: number): Promise<TripInquiry | undefined>;
  updateTripInquiryStatus(id: number, status: string): Promise<TripInquiry | undefined>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private tripInquiries: Map<number, TripInquiry>;
  private userCurrentId: number;
  private inquiryCurrentId: number;

  constructor() {
    this.users = new Map();
    this.tripInquiries = new Map();
    this.userCurrentId = 1;
    this.inquiryCurrentId = 1;
  }

  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.userCurrentId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  // Trip inquiry methods
  async createTripInquiry(insertInquiry: InsertTripInquiry): Promise<TripInquiry> {
    const id = this.inquiryCurrentId++;
    const inquiry: TripInquiry = { 
      ...insertInquiry, 
      id,
      status: "new",
    };
    this.tripInquiries.set(id, inquiry);
    return inquiry;
  }

  async getTripInquiries(): Promise<TripInquiry[]> {
    return Array.from(this.tripInquiries.values());
  }

  async getTripInquiry(id: number): Promise<TripInquiry | undefined> {
    return this.tripInquiries.get(id);
  }

  async updateTripInquiryStatus(id: number, status: string): Promise<TripInquiry | undefined> {
    const inquiry = this.tripInquiries.get(id);
    if (inquiry) {
      const updatedInquiry = { ...inquiry, status };
      this.tripInquiries.set(id, updatedInquiry);
      return updatedInquiry;
    }
    return undefined;
  }
}

export const storage = new MemStorage();
