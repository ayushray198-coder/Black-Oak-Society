import express from "express";

import { addToWishlist, getUserWishlist, removeFromWishlist, clearWishlist } from "../controllers/wishlist.controller.js";

import authMiddleware from "../middlewares/auth.middleware.js";

const router = express.Router();

// Add To Wishlist
router.post("/", authMiddleware, addToWishlist);


// Get User Wishlist
router.get("/", authMiddleware, getUserWishlist);

// Remove From Wishlist
router.delete("/:id", authMiddleware, removeFromWishlist);

// Clear Wishlist
router.delete("/", authMiddleware, clearWishlist);


export default router;