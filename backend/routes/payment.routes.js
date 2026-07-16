import express from "express";

import { createPaymentOrder, verifyPayment, getMyPayments, getPaymentById } from "../controllers/payment.controller.js";

import authMiddleware from "../middlewares/auth.middleware.js";

const router = express.Router();

// Create Razorpay Order
router.post(
    "/create-order", authMiddleware, createPaymentOrder
);


// Verify Payment
router.post(
    "/verify", authMiddleware, verifyPayment
);


// Get My Payments
router.get(
    "/", authMiddleware, getMyPayments
);


// Get Payment By ID
router.get(
    "/:id", authMiddleware, getPaymentById
);

export default router;