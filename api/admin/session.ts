import { type VercelRequest, type VercelResponse } from '@vercel/node';
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'your-super-secret-jwt-key-change-in-production';

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
    console.log('🔍 Session check request received');
    const authHeader = req.headers.authorization;
    console.log('🔍 Auth header:', authHeader ? 'Present' : 'Missing');
    
    if (!authHeader?.startsWith('Bearer ')) {
      console.log('❌ No valid auth header found');
      return res.json({ success: false, isValid: false });
    }
    
    const token = authHeader.substring(7);
    console.log('🔍 Token length:', token.length);
    
    // Just verify the token is valid - if it throws an error, it's invalid
    const decoded = jwt.verify(token, JWT_SECRET);
    console.log('🔍 Token is valid:', decoded);
    
    // If we get here, the token is valid
    const response = { success: true, isValid: true };
    console.log('🔍 Sending response:', response);
    
    res.json(response);
    
  } catch (error) {
    console.error('❌ Session validation error:', error);
    res.json({ success: true, isValid: false });
  }
} 