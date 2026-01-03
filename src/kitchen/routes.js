import { Router } from "express";
const router = Router();
import kitchenController from "./controllers.js";

router.post("/order", kitchenController.order);

export default router;
