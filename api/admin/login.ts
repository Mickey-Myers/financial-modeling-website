import { type VercelRequest, type VercelResponse } from '@vercel/node';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

// Environment variables for backend only
const ADMIN_PASSWORD_HASH = process.env.ADMIN_PASSWORD_HASH || '$2b$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi';
const JWT_SECRET = process.env.JWT_SECRET || 'your-super-secret-jwt-key-change-in-production';

// Rate limiting storage
const failedAttempts = new Map<string, { count: number; lastAttempt: number }>();
const activeSessions = new Set<string>();

// Helper functions
const getClientIP = (req: any) => {
  return req.headers['x-forwarded-for'] || req.headers['x-real-ip'] || req.connection?.remoteAddress || 'unknown';
};

const generateSessionId = () => {
  return Math.random().toString(36).substring(2) + Date.now().toString(36);
};

const checkRateLimit = (clientIP: string) => {
  const now = Date.now();
  const attempt = failedAttempts.get(clientIP);
  
  if (!attempt) {
    return { allowed: true, attemptsLeft: 3, lockTimeLeft: 0 };
  }
  
  // Reset if 5 minutes have passed
  if (now - attempt.lastAttempt > 5 * 60 * 1000) {
    failedAttempts.delete(clientIP);
    return { allowed: true, attemptsLeft: 3, lockTimeLeft: 0 };
  }
  
  // Lock if 3 or more attempts
  if (attempt.count >= 3) {
    const lockTimeLeft = Math.max(0, Math.ceil((5 * 60 * 1000 - (now - attempt.lastAttempt)) / 1000));
    return { allowed: false, attemptsLeft: 0, lockTimeLeft };
  }
  
  return { allowed: true, attemptsLeft: 3 - attempt.count, lockTimeLeft: 0 };
};

const recordFailedAttempt = (clientIP: string) => {
  const now = Date.now();
  const current = failedAttempts.get(clientIP) || { count: 0, lastAttempt: 0 };
  
  failedAttempts.set(clientIP, {
    count: current.count + 1,
    lastAttempt: now
  });
};

const clearFailedAttempts = (clientIP: string) => {
  failedAttempts.delete(clientIP);
};

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
    const { password } = req.body;
    const clientIP = getClientIP(req);
    
    // Check rate limiting
    const rateLimit = checkRateLimit(clientIP);
    if (!rateLimit.allowed) {
      console.log(`🔒 Admin login blocked due to rate limiting from IP: ${clientIP}`);
      return res.status(429).json({
        success: false,
        error: 'Too many failed attempts',
        lockTimeLeft: rateLimit.lockTimeLeft,
        attemptsLeft: 0
      });
    }
    
    if (!password) {
      recordFailedAttempt(clientIP);
      return res.status(400).json({
        success: false,
        error: 'Password is required',
        attemptsLeft: rateLimit.attemptsLeft - 1
      });
    }
    
    // Verify password
    const isValidPassword = await bcrypt.compare(password, ADMIN_PASSWORD_HASH);
    
    if (!isValidPassword) {
      recordFailedAttempt(clientIP);
      console.log(`❌ Failed admin login attempt from IP: ${clientIP}`);
      
      const newRateLimit = checkRateLimit(clientIP);
      return res.status(401).json({
        success: false,
        error: 'Invalid password',
        attemptsLeft: newRateLimit.attemptsLeft,
        lockTimeLeft: newRateLimit.lockTimeLeft
      });
    }
    
    // Generate session
    const sessionId = generateSessionId();
    activeSessions.add(sessionId);
    
    // Generate JWT token
    const token = jwt.sign(
      { isAdmin: true, sessionId },
      JWT_SECRET,
      { expiresIn: '24h' }
    );
    
    // Clear failed attempts on successful login
    clearFailedAttempts(clientIP);
    
    console.log(`✅ Successful admin login from IP: ${clientIP}, Session: ${sessionId}`);
    
    res.json({
      success: true,
      token,
      expiresIn: '24h'
    });
    
  } catch (error) {
    console.error('❌ Admin login error:', error);
    res.status(500).json({
      success: false,
      error: 'Internal server error'
    });
  }
} 