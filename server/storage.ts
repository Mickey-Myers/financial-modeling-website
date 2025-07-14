import { contactSubmissions, type ContactSubmission, type InsertContactSubmission } from "@shared/schema";
import { db, testDatabaseConnection } from "./db";
import { desc, gte, count, eq } from "drizzle-orm";

export interface IStorage {
  createContactSubmission(submission: InsertContactSubmission): Promise<ContactSubmission>;
  getAllContactSubmissions(): Promise<ContactSubmission[]>;
  getContactSubmissionById(id: number): Promise<ContactSubmission | null>;
  deleteContactSubmission(id: number): Promise<boolean>;
  getSubmissionStats(): Promise<{
    total: number;
    today: number;
    thisWeek: number;
    thisMonth: number;
    recent: ContactSubmission[];
  }>;
}

// Database Storage Implementation
export class DatabaseStorage implements IStorage {
  async createContactSubmission(insertSubmission: InsertContactSubmission): Promise<ContactSubmission> {
    const submission = await db.insert(contactSubmissions)
      .values({
        fullName: insertSubmission.fullName,
        company: insertSubmission.company || null,
        email: insertSubmission.email,
        phone: insertSubmission.phone || null,
        message: insertSubmission.message || null,
        modelType: insertSubmission.modelType || null,
        industry: insertSubmission.industry || null,
        revenueModel: insertSubmission.revenueModel || null,
        businessStage: insertSubmission.businessStage || null,
        purpose: insertSubmission.purpose || null,
      })
      .returning();

    const result = submission[0];
    
    // Log the submission for immediate visibility
    console.log(`📧 New contact submission saved to database:`, {
      id: result.id,
      name: result.fullName,
      email: result.email,
      company: result.company,
      modelType: result.modelType,
      industry: result.industry,
      purpose: result.purpose,
      timestamp: result.createdAt.toISOString()
    });
    
    return result;
  }

  async getAllContactSubmissions(): Promise<ContactSubmission[]> {
    const submissions = await db.select()
      .from(contactSubmissions)
      .orderBy(desc(contactSubmissions.createdAt)); // Most recent first
    
    return submissions;
  }

  async getContactSubmissionById(id: number): Promise<ContactSubmission | null> {
    const submissions = await db.select()
      .from(contactSubmissions)
      .where(eq(contactSubmissions.id, id))
      .limit(1);
    
    return submissions[0] || null;
  }

  async deleteContactSubmission(id: number): Promise<boolean> {
    const result = await db.delete(contactSubmissions)
      .where(eq(contactSubmissions.id, id))
      .returning();
    
    return result.length > 0;
  }

  async getSubmissionStats(): Promise<{
    total: number;
    today: number;
    thisWeek: number;
    thisMonth: number;
    recent: ContactSubmission[];
  }> {
    const now = new Date();
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    const thisWeek = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
    const thisMonth = new Date(now.getFullYear(), now.getMonth(), 1);

    // Get total count
    const totalResult = await db.select({ count: count() }).from(contactSubmissions);
    const total = totalResult[0]?.count || 0;

    // Get today's count
    const todayResult = await db.select({ count: count() })
      .from(contactSubmissions)
      .where(gte(contactSubmissions.createdAt, today));
    const todayCount = todayResult[0]?.count || 0;

    // Get this week's count
    const weekResult = await db.select({ count: count() })
      .from(contactSubmissions)
      .where(gte(contactSubmissions.createdAt, thisWeek));
    const weekCount = weekResult[0]?.count || 0;

    // Get this month's count
    const monthResult = await db.select({ count: count() })
      .from(contactSubmissions)
      .where(gte(contactSubmissions.createdAt, thisMonth));
    const monthCount = monthResult[0]?.count || 0;

    // Get recent submissions
    const recent = await db.select()
      .from(contactSubmissions)
      .orderBy(desc(contactSubmissions.createdAt))
      .limit(5);

    return {
      total,
      today: todayCount,
      thisWeek: weekCount,
      thisMonth: monthCount,
      recent
    };
  }
}

// Memory Storage Implementation (kept for fallback)
export class MemStorage implements IStorage {
  private contactSubmissions: Map<number, ContactSubmission>;
  private currentId: number;

  constructor() {
    this.contactSubmissions = new Map();
    this.currentId = 1;
  }

  async createContactSubmission(insertSubmission: InsertContactSubmission): Promise<ContactSubmission> {
    const id = this.currentId++;
    const submission: ContactSubmission = {
      id,
      fullName: insertSubmission.fullName,
      company: insertSubmission.company || null,
      email: insertSubmission.email,
      phone: insertSubmission.phone || null,
      message: insertSubmission.message || null,
      modelType: insertSubmission.modelType || null,
      industry: insertSubmission.industry || null,
      revenueModel: insertSubmission.revenueModel || null,
      businessStage: insertSubmission.businessStage || null,
      purpose: insertSubmission.purpose || null,
      createdAt: new Date(),
    };
    this.contactSubmissions.set(id, submission);
    
    // Log the submission for immediate visibility
    console.log(`📧 New contact submission received (IN-MEMORY):`, {
      id: submission.id,
      name: submission.fullName,
      email: submission.email,
      company: submission.company,
      modelType: submission.modelType,
      industry: submission.industry,
      purpose: submission.purpose,
      timestamp: submission.createdAt.toISOString()
    });
    
    return submission;
  }

  async getAllContactSubmissions(): Promise<ContactSubmission[]> {
    return Array.from(this.contactSubmissions.values())
      .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime()); // Most recent first
  }

  async getContactSubmissionById(id: number): Promise<ContactSubmission | null> {
    return this.contactSubmissions.get(id) || null;
  }

  async deleteContactSubmission(id: number): Promise<boolean> {
    return this.contactSubmissions.delete(id);
  }

  async getSubmissionStats(): Promise<{
    total: number;
    today: number;
    thisWeek: number;
    thisMonth: number;
    recent: ContactSubmission[];
  }> {
    const submissions = Array.from(this.contactSubmissions.values());
    const now = new Date();
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    const thisWeek = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
    const thisMonth = new Date(now.getFullYear(), now.getMonth(), 1);

    return {
      total: submissions.length,
      today: submissions.filter(s => s.createdAt >= today).length,
      thisWeek: submissions.filter(s => s.createdAt >= thisWeek).length,
      thisMonth: submissions.filter(s => s.createdAt >= thisMonth).length,
      recent: submissions
        .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime())
        .slice(0, 5) // Last 5 submissions
    };
  }
}

// Storage instance - will use database if available, fallback to memory
export async function createStorage(): Promise<IStorage> {
  try {
    // Test database connection
    const isDbConnected = await testDatabaseConnection();
    
    if (isDbConnected) {
      console.log('🗄️ Using database storage (persistent)');
      return new DatabaseStorage();
    } else {
      console.log('⚠️ Database connection failed, falling back to memory storage');
      return new MemStorage();
    }
  } catch (error) {
    console.error('❌ Database initialization failed:', error);
    console.log('⚠️ Falling back to in-memory storage');
    return new MemStorage();
  }
}

// For backward compatibility, create default storage instance
export const storage = new MemStorage();
