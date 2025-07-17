import { type VercelRequest, type VercelResponse } from '@vercel/node';
import { createStorage } from '../server/storage.js';
import { insertContactSubmissionSchema } from '../shared/schema.js';
import { z } from 'zod';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Handle preflight request
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ 
      success: false, 
      error: 'Method not allowed' 
    });
  }

  try {
    console.log('📧 Contact form submission received:', req.body);
    
    const validatedData = insertContactSubmissionSchema.parse(req.body);
    const storage = await createStorage();
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
} 