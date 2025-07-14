import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import type { Request, Response, NextFunction } from 'express';

// Environment variables for backend only
const ADMIN_PASSWORD_HASH = process.env.ADMIN_PASSWORD_HASH || '$2b$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi'; // Default: password123
const JWT_SECRET = process.env.JWT_SECRET || 'your-super-secret-jwt-key-change-in-production';

// Interface for JWT payload
interface JWTPayload {
  isAdmin: boolean;
  sessionId: string;
  iat?: number;
  exp?: number;
}

// Session store (in production, use Redis or database)
const activeSessions = new Set<string>();

// Rate limiting store
const loginAttempts = new Map<string, { count: number; lastAttempt: number; locked: boolean; lockUntil?: number }>();

// Rate limiting configuration
const MAX_ATTEMPTS = 3;
const LOCK_TIME = 5 * 60 * 1000; // 5 minutes
const ATTEMPT_WINDOW = 15 * 60 * 1000; // 15 minutes

// Generate session ID
function generateSessionId(): string {
  return Math.random().toString(36).substring(2) + Date.now().toString(36);
}

// Get client IP
function getClientIP(req: Request): string {
  return (req.headers['x-forwarded-for'] as string)?.split(',')[0] || 
         req.headers['x-real-ip'] as string || 
         req.connection.remoteAddress || 
         req.ip || 
         'unknown';
}

// Check rate limiting
function checkRateLimit(ip: string): { allowed: boolean; attemptsLeft: number; lockTimeLeft?: number } {
  const now = Date.now();
  const attempts = loginAttempts.get(ip);
  
  if (!attempts) {
    return { allowed: true, attemptsLeft: MAX_ATTEMPTS };
  }
  
  // Check if lock period has expired
  if (attempts.locked && attempts.lockUntil && now > attempts.lockUntil) {
    loginAttempts.delete(ip);
    return { allowed: true, attemptsLeft: MAX_ATTEMPTS };
  }
  
  // If locked, return lock time left
  if (attempts.locked && attempts.lockUntil) {
    const lockTimeLeft = Math.ceil((attempts.lockUntil - now) / 1000);
    return { allowed: false, attemptsLeft: 0, lockTimeLeft };
  }
  
  // Check if attempt window has expired
  if (now - attempts.lastAttempt > ATTEMPT_WINDOW) {
    loginAttempts.delete(ip);
    return { allowed: true, attemptsLeft: MAX_ATTEMPTS };
  }
  
  // Check if max attempts reached
  if (attempts.count >= MAX_ATTEMPTS) {
    attempts.locked = true;
    attempts.lockUntil = now + LOCK_TIME;
    return { allowed: false, attemptsLeft: 0, lockTimeLeft: Math.ceil(LOCK_TIME / 1000) };
  }
  
  return { allowed: true, attemptsLeft: MAX_ATTEMPTS - attempts.count };
}

// Record failed attempt
function recordFailedAttempt(ip: string): void {
  const now = Date.now();
  const attempts = loginAttempts.get(ip);
  
  if (!attempts) {
    loginAttempts.set(ip, { count: 1, lastAttempt: now, locked: false });
  } else {
    attempts.count++;
    attempts.lastAttempt = now;
    
    if (attempts.count >= MAX_ATTEMPTS) {
      attempts.locked = true;
      attempts.lockUntil = now + LOCK_TIME;
    }
  }
}

// Clear failed attempts (on successful login)
function clearFailedAttempts(ip: string): void {
  loginAttempts.delete(ip);
}

// Admin login endpoint
export async function adminLogin(req: Request, res: Response) {
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
      { isAdmin: true, sessionId } as JWTPayload,
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

// Admin logout endpoint
export async function adminLogout(req: Request, res: Response) {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader?.startsWith('Bearer ')) {
      return res.status(401).json({ success: false, error: 'No token provided' });
    }
    
    const token = authHeader.substring(7);
    const decoded = jwt.verify(token, JWT_SECRET) as JWTPayload;
    
    // Remove session
    activeSessions.delete(decoded.sessionId);
    
    console.log(`🔓 Admin logout - Session: ${decoded.sessionId}`);
    
    res.json({ success: true });
    
  } catch (error) {
    console.error('❌ Admin logout error:', error);
    res.status(500).json({ success: false, error: 'Logout failed' });
  }
}

// Middleware to check admin authentication
export function requireAdminAuth(req: Request, res: Response, next: NextFunction) {
  try {
    const authHeader = req.headers.authorization;
    
    if (!authHeader?.startsWith('Bearer ')) {
      return res.status(401).json({ success: false, error: 'Authentication required' });
    }
    
    const token = authHeader.substring(7);
    const decoded = jwt.verify(token, JWT_SECRET) as JWTPayload;
    
    // Check if session is still active
    if (!activeSessions.has(decoded.sessionId)) {
      return res.status(401).json({ success: false, error: 'Session expired' });
    }
    
    // Add admin info to request
    (req as any).admin = decoded;
    next();
    
  } catch (error) {
    if (error instanceof jwt.TokenExpiredError) {
      return res.status(401).json({ success: false, error: 'Token expired' });
    }
    if (error instanceof jwt.JsonWebTokenError) {
      return res.status(401).json({ success: false, error: 'Invalid token' });
    }
    
    console.error('❌ Admin auth middleware error:', error);
    res.status(500).json({ success: false, error: 'Authentication error' });
  }
}

// Utility function to hash a password (for setup)
export async function hashPassword(password: string): Promise<string> {
  return bcrypt.hash(password, 10);
}

// Check if admin session is valid
export async function checkAdminSession(req: Request, res: Response) {
  try {
    const authHeader = req.headers.authorization;
    
    if (!authHeader?.startsWith('Bearer ')) {
      return res.json({ success: false, isValid: false });
    }
    
    const token = authHeader.substring(7);
    const decoded = jwt.verify(token, JWT_SECRET) as JWTPayload;
    
    // Check if session is still active
    const isValid = activeSessions.has(decoded.sessionId);
    
    res.json({ success: true, isValid, sessionId: decoded.sessionId });
    
  } catch (error) {
    res.json({ success: true, isValid: false });
  }
} 