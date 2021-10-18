import { Router } from "express";
const router = Router();
import AuthController from "./auth.controller";

router.post("/register", AuthController.registerUser);
router.post("/login", AuthController.loginUser);
router.post("/logout", AuthController.logoutUser);
router.get("/logout", AuthController.getCurrentUser);

export default router;
