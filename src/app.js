import express from "express";
import cors from "cors";

import kitchenRoute from "./kitchen/routes.js";

const app = express();

// middleware
app.use(express.json());

app.use(
  cors({
    origin: [
      "http://localhost:3000",
      "https://your-site-name.netlify.app",
      "https://horizon-bliss.netlify.app",
    ],
  })
);

// routes
app.use("/api/kitchen", kitchenRoute);

export default app;
