import express from "express";
import cors from "cors";

import kitchenRoute from "./kitchen/routes.js";

const app = express();

// middleware
app.use(express.json());

app.use(cors());

// routes
app.use("/api/kitchen", kitchenRoute);

export default app;
