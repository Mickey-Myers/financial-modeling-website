import { type VercelRequest, type VercelResponse } from '@vercel/node';
import { createStorage } from '../../server/storage.js';
import { requireAdminAuth } from '../../server/auth.js';

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
    console.log('🔍 Stats API called');
    
    // Check admin authentication
    const authResult = await new Promise((resolve, reject) => {
      requireAdminAuth(req as any, res as any, (error: any) => {
        if (error) reject(error);
        else resolve(true);
      });
    });

    if (!authResult) {
      console.log('❌ Auth failed in stats API');
      return; // Auth middleware already sent response
    }

    console.log('✅ Auth passed, creating storage...');
    const storage = await createStorage();
    console.log('✅ Storage created, fetching stats...');
    const stats = await storage.getSubmissionStats();
    console.log(`✅ Stats fetched: ${JSON.stringify(stats)}`);
    
    res.json({ success: true, data: stats });
  } catch (error) {
    console.error('❌ Failed to fetch stats:', error);
    res.status(500).json({ 
      success: false, 
      error: "Failed to fetch statistics" 
    });
  }
} 