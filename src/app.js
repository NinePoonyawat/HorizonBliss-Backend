import express from "express";
import cors from "cors";

import kitchenRoute from "./kitchen/routes.js";
import authRoute from "./auth/routes.js";

const app = express();

// middleware
app.use(express.json());

app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin) return callback(null, true); // health check
      const allowed = [
        "http://localhost:3000",
        "https://your-site-name.netlify.app",
        "https://horizon-bliss.netlify.app",
      ];
      if (allowed.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    methods: ["GET", "POST", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.use((req, res, next) => {
  if (req.method === "GET" && (req.path === "/" || req.path === "/health")) {
    return res.status(200).send("ok");
  }
  next();
});

// routes
app.use("/api/kitchen", kitchenRoute);
app.use("/api/auth", authRoute);

export default app;
