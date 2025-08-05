import express from "express";
import cors from "cors";
import fetch from "node-fetch";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// Environment variables
const PORT = process.env.PORT || 3001;
const NODE_ENV = process.env.NODE_ENV || "development";
const CORS_ORIGIN = process.env.CORS_ORIGIN || "http://localhost:5173";

// CORS configuration - allow all origins in production for now
app.use(cors({
  origin: NODE_ENV === "production" ? "*" : CORS_ORIGIN,
  credentials: true
}));

// Body parsing middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// API Routes
app.get("/api/genome/:username", async (req, res) => {
  const { username } = req.params;
  try {
    const response = await fetch(
      `https://torre.ai/api/genome/bios/${username}`
    );
    
    if (!response.ok) {
      return res.status(response.status).json({ 
        error: "Failed to fetch genome data",
        status: response.status 
      });
    }
    
    const data = await response.json();
    res.json(data);
  } catch (err) {
    console.error("Error fetching genome:", err);
    res.status(500).json({ error: "Failed to fetch genome" });
  }
});

// Health check endpoint
app.get("/api/health", (req, res) => {
  res.json({ 
    status: "ok", 
    timestamp: new Date().toISOString(),
    environment: NODE_ENV,
    port: PORT
  });
});

// Root endpoint
app.get("/", (req, res) => {
  res.json({ 
    message: "Torre Backend API", 
    status: "running",
    endpoints: ["/api/genome/:username", "/api/health"]
  });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: "Something went wrong!" });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT} in ${NODE_ENV} mode`);
  console.log(`Health check: http://localhost:${PORT}/api/health`);
});
