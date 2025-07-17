import type { Express } from "express";
import { createServer } from "http";
import type { IStorage } from "./storage";
import { insertContactSubmissionSchema } from "../shared/schema.js";
import { z } from "zod";
import { adminLogin, adminLogout, requireAdminAuth, checkAdminSession } from "./auth";

export function registerRoutes(app: Express, storage: IStorage) {
  // Contact form submission
  app.post("/api/contact", async (req, res) => {
    try {
      console.log('📧 Contact form submission received:', req.body);
      
      const validatedData = insertContactSubmissionSchema.parse(req.body);
      const result = await storage.createContactSubmission(validatedData);
      
      res.json({ 
        success: true, 
        message: "Contact form submitted successfully",
        id: result.id 
      });
    } catch (error) {
      console.error('❌ Contact form submission error:', error);
      
      if (error instanceof z.ZodError) {
        res.status(400).json({ 
          success: false, 
          error: "Invalid form data",
          details: error.errors 
        });
      } else {
        res.status(500).json({ 
          success: false, 
          error: "Failed to submit contact form" 
        });
      }
    }
  });

  // Admin authentication routes
  app.post("/api/admin/login", adminLogin);
  app.post("/api/admin/logout", adminLogout);
  app.get("/api/admin/session", checkAdminSession);

  // Protected admin routes - require authentication
  app.get("/api/contact/submissions", requireAdminAuth, async (req, res) => {
    try {
      const submissions = await storage.getAllContactSubmissions();
      res.json({ 
        success: true, 
        data: submissions,
        count: submissions.length 
      });
    } catch (error) {
      console.error('❌ Failed to fetch submissions:', error);
      res.status(500).json({ 
        success: false, 
        error: "Failed to fetch submissions" 
      });
    }
  });

  app.get("/api/contact/submissions/:id", requireAdminAuth, async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      if (isNaN(id)) {
        return res.status(400).json({ 
          success: false, 
          error: "Invalid submission ID" 
        });
      }

      const submission = await storage.getContactSubmissionById(id);
      if (!submission) {
        return res.status(404).json({ 
          success: false, 
          error: "Submission not found" 
        });
      }

      res.json({ success: true, data: submission });
    } catch (error) {
      console.error('❌ Failed to fetch submission:', error);
      res.status(500).json({ 
        success: false, 
        error: "Failed to fetch submission" 
      });
    }
  });

  app.delete("/api/contact/submissions/:id", requireAdminAuth, async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      if (isNaN(id)) {
        return res.status(400).json({ 
          success: false, 
          error: "Invalid submission ID" 
        });
      }

      const deleted = await storage.deleteContactSubmission(id);
      if (!deleted) {
        return res.status(404).json({ 
          success: false, 
          error: "Submission not found" 
        });
      }

      console.log(`🗑️ Admin deleted submission ID: ${id}`);
      res.json({ success: true, message: "Submission deleted successfully" });
    } catch (error) {
      console.error('❌ Failed to delete submission:', error);
      res.status(500).json({ 
        success: false, 
        error: "Failed to delete submission" 
      });
    }
  });

  app.get("/api/contact/stats", requireAdminAuth, async (req, res) => {
    try {
      const stats = await storage.getSubmissionStats();
      res.json({ success: true, data: stats });
    } catch (error) {
      console.error('❌ Failed to fetch stats:', error);
      res.status(500).json({ 
        success: false, 
        error: "Failed to fetch statistics" 
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
