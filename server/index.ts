import express, { type Request, Response, NextFunction } from "express";
import { registerRoutes } from "./routes";
import { setupVite, serveStatic, log } from "./vite";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use((req, res, next) => {
  const start = Date.now();
  const path = req.path;
  let capturedJsonResponse: Record<string, any> | undefined = undefined;

  const originalResJson = res.json;
  res.json = function (bodyJson, ...args) {
    capturedJsonResponse = bodyJson;
    return originalResJson.apply(res, [bodyJson, ...args]);
  };

  res.on("finish", () => {
    const duration = Date.now() - start;
    if (path.startsWith("/api")) {
      let logLine = `${req.method} ${path} ${res.statusCode} in ${duration}ms`;
      if (capturedJsonResponse) {
        logLine += ` :: ${JSON.stringify(capturedJsonResponse)}`;
      }

      if (logLine.length > 80) {
        logLine = logLine.slice(0, 79) + "…";
      }

      log(logLine);
    }
  });

  next();
});

(async () => {
  try {
    const server = await registerRoutes(app);

    app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
      const status = err.status || err.statusCode || 500;
      const message = err.message || "Internal Server Error";

      res.status(status).json({ message });
      throw err;
    });

    // Setup vite in development and after setting up all other routes
    // so the catch-all route doesn't interfere with the other routes
    if (app.get("env") === "development") {
      await setupVite(app, server);
    } else {
      serveStatic(app);
    }

    // Server configuration - Windows compatible
    const port = process.env.PORT ? parseInt(process.env.PORT) : 3000;
    const host = process.env.HOST || 'localhost'; // Use localhost instead of 0.0.0.0 for Windows compatibility
    
    server.listen(port, host, () => {
      const serverUrl = `http://${host}:${port}`;
      console.log(`🚀 Server running on ${serverUrl}`);
      console.log(`📱 Environment: ${app.get("env")}`);
      console.log(`📂 API endpoints available at ${serverUrl}/api`);
      
      if (app.get("env") === "development") {
        console.log(`🔥 Vite dev server integrated`);
        console.log(`✨ Ready for development!`);
      }
    });

    // Handle server errors gracefully
    server.on('error', (error: any) => {
      if (error.code === 'EADDRINUSE') {
        console.error(`❌ Port ${port} is already in use. Please try a different port.`);
        console.error(`   You can set a different port with: PORT=3001 npm run dev`);
      } else if (error.code === 'ENOTSUP') {
        console.error(`❌ Server binding not supported. Trying alternative configuration...`);
        // Fallback to 127.0.0.1 if localhost fails
        server.listen(port, '127.0.0.1', () => {
          console.log(`🚀 Server running on http://127.0.0.1:${port} (fallback)`);
        });
      } else {
        console.error(`❌ Server error:`, error);
      }
      
      if (process.env.NODE_ENV === 'development') {
        console.error('Full error details:', error);
      }
    });

    // Graceful shutdown
    process.on('SIGTERM', () => {
      console.log('🛑 SIGTERM received, shutting down gracefully');
      server.close(() => {
        console.log('✅ Server closed');
        process.exit(0);
      });
    });

    process.on('SIGINT', () => {
      console.log('\n🛑 SIGINT received, shutting down gracefully');
      server.close(() => {
        console.log('✅ Server closed');
        process.exit(0);
      });
    });

  } catch (error) {
    console.error('❌ Failed to start server:', error);
    process.exit(1);
  }
})();
