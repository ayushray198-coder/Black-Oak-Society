import { Router } from "express";
import { sendOtp, verifyOtp, loginUser, getProfile, logoutUser, refreshAccessToken } from "../controllers/auth.controller.js";
import authMiddleware from "../middlewares/auth.middleware.js";

const router = Router();

// Send OTP
router.post("/send-otp", sendOtp);

// Verify OTP & Create User
router.post("/verify-otp", verifyOtp);

// User Login 
router.post("/login",loginUser)

// user profile
router.get("/profile", authMiddleware, getProfile);
// user logout
router.post("/logout", authMiddleware, logoutUser);
// Refresh token access
router.post("/refresh-token", refreshAccessToken);

export default router;