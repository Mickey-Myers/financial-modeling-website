import { type VercelRequest, type VercelResponse } from '@vercel/node';
import { createStorage } from '../../../server/storage';
import { requireAdminAuth } from '../../../server/auth';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  const { id } = req.query;
  const submissionId = parseInt(id as string);
  
  if (isNaN(submissionId)) {
    return res.status(400).json({ 
      success: false, 
      error: "Invalid submission ID" 
    });
  }

  try {
    // Check admin authentication
    const authResult = await new Promise((resolve, reject) => {
      requireAdminAuth(req as any, res as any, (error: any) => {
        if (error) reject(error);
        else resolve(true);
      });
    });

    if (!authResult) {
      return; // Auth middleware already sent response
    }

    const storage = await createStorage();

    if (req.method === 'GET') {
      const submission = await storage.getContactSubmissionById(submissionId);
      if (!submission) {
        return res.status(404).json({ 
          success: false, 
          error: "Submission not found" 
        });
      }
      return res.json({ success: true, data: submission });
    }

    if (req.method === 'DELETE') {
      const deleted = await storage.deleteContactSubmission(submissionId);
      if (!deleted) {
        return res.status(404).json({ 
          success: false, 
          error: "Submission not found" 
        });
      }
      console.log(`🗑️ Admin deleted submission ID: ${submissionId}`);
      return res.json({ success: true, message: "Submission deleted successfully" });
    }

    return res.status(405).json({ 
      success: false, 
      error: 'Method not allowed' 
    });

  } catch (error) {
    console.error(`❌ Failed to handle submission ${submissionId}:`, error);
    res.status(500).json({ 
      success: false, 
      error: "Failed to process request" 
    });
  }
} 