import dotenv from "dotenv";
import express from "express";
import type { Express } from "express";
import { createStorage } from "./storage";
import { registerRoutes } from "./routes";

// Load environment variables from .env file
dotenv.config();

// Debug: Check if .env file is loaded
console.log('🔍 Debug - dotenv loaded DATABASE_URL:', process.env.DATABASE_URL ? '[HIDDEN]' : 'undefined');

const app: Express = express();
app.use(express.json());

// CORS middleware for development
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  if (req.method === 'OPTIONS') {
    res.sendStatus(200);
  } else {
    next();
  }
});

const PORT = process.env.PORT || 3001;

// Initialize storage and start server
async function startServer() {
  try {
    console.log('🚀 Starting Financial Modeling Hub API server...');
    
    // Initialize storage (database or memory fallback)
    const storage = await createStorage();
    
    // Make storage available to routes
    app.locals.storage = storage;
    
    // Register API routes with storage instance
    const httpServer = await registerRoutes(app, storage);

    httpServer.listen(PORT, () => {
      console.log(`🚀 API Server running on http://localhost:${PORT}`);
      console.log(`📱 Environment: ${process.env.NODE_ENV || 'development'}`);
      console.log(`📂 API endpoints available at http://localhost:${PORT}/api`);
      console.log(`✨ Ready for API requests!`);
      console.log(`📝 Run frontend separately with: npx vite --port 3000`);
    });
  } catch (error) {
    console.error('❌ Failed to start server:', error);
    process.exit(1);
  }
}

// Start the server
startServer();
