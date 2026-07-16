import express from "express";

import { placeOrder, getMyOrders, getOrderById, cancelOrder, updateOrderStatus } from "../controllers/order.controller.js";

import authMiddleware from "../middlewares/auth.middleware.js";

const router = express.Router();

// Place Order
router.post("/", authMiddleware, placeOrder);

// Get My Orders
router.get("/", authMiddleware, getMyOrders);

// Get Order By ID
router.get("/:id", authMiddleware, getOrderById);

// Cancel Order
router.patch("/:id/cancel", authMiddleware, cancelOrder);

// Update Order Status (Admin)
router.patch("/:id/status", authMiddleware, updateOrderStatus);

export default router;