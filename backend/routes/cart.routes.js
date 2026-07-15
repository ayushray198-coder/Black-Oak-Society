import express from "express";

import { addToCart, getUserCart , updateCartQuantity, removeCartItem} from "../controllers/cart.controller.js";

import authMiddleware from "../middlewares/auth.middleware.js";

const router = express.Router();

// Add To Cart
router.post("/", authMiddleware, addToCart);

// Get User Cart
router.get("/", authMiddleware, getUserCart);

// Update Cart Quantity
router.put("/:id", authMiddleware, updateCartQuantity);

// Remove Cart Item
router.delete("/:id", authMiddleware, removeCartItem);


export default router;