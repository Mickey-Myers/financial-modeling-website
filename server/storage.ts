import { contactSubmissions, type ContactSubmission, type InsertContactSubmission } from "@shared/schema";

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
    console.log(`📧 New contact submission received:`, {
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

export const storage = new MemStorage();
