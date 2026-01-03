import { Router } from "express";
import authController from "./controllers.js";

const router = Router();

router.post("/enter-room", authController.enterRoom);
export default router;
