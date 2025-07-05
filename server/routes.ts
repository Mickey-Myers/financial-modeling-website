import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSubmissionSchema } from "@shared/schema";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactSubmissionSchema.parse(req.body);
      const submission = await storage.createContactSubmission(validatedData);
      res.json({ success: true, message: "Contact form submitted successfully", id: submission.id });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ 
          success: false, 
          message: "Validation error", 
          errors: error.errors 
        });
      } else {
        console.error("Contact form submission error:", error);
        res.status(500).json({ 
          success: false, 
          message: "Internal server error" 
        });
      }
    }
  });

  // Get all contact submissions (for admin/management)
  app.get("/api/contact/submissions", async (req, res) => {
    try {
      const submissions = await storage.getAllContactSubmissions();
      res.json({ 
        success: true, 
        data: submissions,
        count: submissions.length 
      });
    } catch (error) {
      console.error("Error fetching submissions:", error);
      res.status(500).json({ 
        success: false, 
        message: "Failed to fetch submissions" 
      });
    }
  });

  // Get a specific contact submission by ID
  app.get("/api/contact/submissions/:id", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      if (isNaN(id)) {
        return res.status(400).json({ 
          success: false, 
          message: "Invalid submission ID" 
        });
      }

      const submission = await storage.getContactSubmissionById(id);
      if (!submission) {
        return res.status(404).json({ 
          success: false, 
          message: "Submission not found" 
        });
      }

      res.json({ 
        success: true, 
        data: submission 
      });
    } catch (error) {
      console.error("Error fetching submission:", error);
      res.status(500).json({ 
        success: false, 
        message: "Failed to fetch submission" 
      });
    }
  });

  // Delete a contact submission by ID
  app.delete("/api/contact/submissions/:id", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      if (isNaN(id)) {
        return res.status(400).json({ 
          success: false, 
          message: "Invalid submission ID" 
        });
      }

      const deleted = await storage.deleteContactSubmission(id);
      if (!deleted) {
        return res.status(404).json({ 
          success: false, 
          message: "Submission not found" 
        });
      }

      res.json({ 
        success: true, 
        message: "Submission deleted successfully" 
      });
    } catch (error) {
      console.error("Error deleting submission:", error);
      res.status(500).json({ 
        success: false, 
        message: "Failed to delete submission" 
      });
    }
  });

  // Get submission statistics
  app.get("/api/contact/stats", async (req, res) => {
    try {
      const stats = await storage.getSubmissionStats();
      res.json({ 
        success: true, 
        data: stats 
      });
    } catch (error) {
      console.error("Error fetching stats:", error);
      res.status(500).json({ 
        success: false, 
        message: "Failed to fetch statistics" 
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
