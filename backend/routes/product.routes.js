import express from "express";

import { createProduct, getAllProducts, getProductById, updateProduct , deleteProduct} from "../controllers/product.controller.js";

import authMiddleware from "../middlewares/auth.middleware.js";

const router = express.Router();

// Create Product
router.post("/", authMiddleware, createProduct);

// Get All Products
router.get("/", getAllProducts);

// Get Product By ID
router.get("/:id", getProductById);

// Update Product
router.put("/:id", authMiddleware, updateProduct);

// Delete Product
router.delete("/:id", authMiddleware, deleteProduct);

export default router;