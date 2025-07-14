import { type VercelRequest, type VercelResponse } from '@vercel/node';
import { createStorage } from '../../server/storage';
import { requireAdminAuth } from '../../server/auth';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'GET') {
    return res.status(405).json({ 
      success: false, 
      error: 'Method not allowed' 
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
} 