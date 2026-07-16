import express from "express";

import { placeOrder, getMyOrders, getOrderById, cancelOrder, updateOrderStatus } from "../controllers/order.controller.js";

import authMiddleware from "../middlewares/auth.middleware.js";

import adminMiddleware from "../middlewares/admin.middleware.js";
import validateObjectId from "../middlewares/validateObjectId.middleware.js";

const router = express.Router();

// Place Order
router.post("/", authMiddleware, placeOrder);

// Get My Orders
router.get("/", authMiddleware, getMyOrders);

// Get Order By ID
router.get("/:id", authMiddleware, validateObjectId, getOrderById);

// Cancel Order
router.patch("/:id/cancel", authMiddleware, validateObjectId, cancelOrder);

// Update Order Status (Admin)
router.patch("/:id/status", authMiddleware, adminMiddleware, validateObjectId, updateOrderStatus);

export default router;