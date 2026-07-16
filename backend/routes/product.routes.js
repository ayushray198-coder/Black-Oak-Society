import express from "express";

import { createProduct, getAllProducts, getProductById, updateProduct, deleteProduct } from "../controllers/product.controller.js";

import authMiddleware from "../middlewares/auth.middleware.js";
import validateObjectId from "../middlewares/validateObjectId.middleware.js";
import adminMiddleware from "../middlewares/admin.middleware.js";

const router = express.Router();

// Create Product
router.post("/", authMiddleware, adminMiddleware, createProduct);

// Get All Products
router.get("/", getAllProducts);

// Get Product By ID
router.get("/:id", validateObjectId, getProductById,);

// Update Product
router.put("/:id", authMiddleware, adminMiddleware, validateObjectId, updateProduct);

// Delete Product
router.delete("/:id", authMiddleware, adminMiddleware, validateObjectId, deleteProduct);

export default router;