import express from "express";

import { createProduct, getAllProducts, getProductById, updateProduct, deleteProduct } from "../controllers/product.controller.js";

import authMiddleware from "../middlewares/auth.middleware.js";
import validateObjectId from "../middlewares/validateObjectId.middleware.js";

const router = express.Router();

// Create Product
router.post("/", authMiddleware, createProduct);

// Get All Products
router.get("/", getAllProducts);

// Get Product By ID
router.get("/:id", validateObjectId, getProductById,);

// Update Product
router.put("/:id", authMiddleware, validateObjectId, updateProduct);

// Delete Product
router.delete("/:id", authMiddleware, validateObjectId, deleteProduct);

export default router;