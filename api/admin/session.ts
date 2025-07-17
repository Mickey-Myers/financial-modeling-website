import { type VercelRequest, type VercelResponse } from '@vercel/node';
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'your-super-secret-jwt-key-change-in-production';

// Interface for JWT payload
interface JWTPayload {
  isAdmin: boolean;
  sessionId: string;
  iat?: number;
  exp?: number;
}

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
    const authHeader = req.headers.authorization;
    
    if (!authHeader?.startsWith('Bearer ')) {
      return res.json({ success: false, isValid: false });
    }
    
    const token = authHeader.substring(7);
    const decoded = jwt.verify(token, JWT_SECRET) as JWTPayload;
    
    // Just check if the token is valid and not expired
    // The JWT library will throw an error if the token is invalid or expired
    const isValid = decoded.isAdmin === true;
    
    console.log(`🔍 Session check - SessionId: ${decoded.sessionId}, Valid: ${isValid}`);
    
    res.json({ success: true, isValid, sessionId: decoded.sessionId });
    
  } catch (error) {
    console.error('❌ Session validation error:', error);
    res.json({ success: true, isValid: false });
  }
} 