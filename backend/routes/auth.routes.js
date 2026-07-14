import { Router } from "express";
import { sendOtp, verifyOtp } from "../controllers/auth.controller.js";

const router = Router();

// Send OTP
router.post("/send-otp", sendOtp);

// Verify OTP & Create User
router.post("/verify-otp", verifyOtp);

export default router;