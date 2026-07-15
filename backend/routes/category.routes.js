import express from "express";

import { createCategory, getAllCategories, getCategoryById, updateCategory, deleteCategory } from "../controllers/category.controller.js";

import authMiddleware from "../middlewares/auth.middleware.js";
import validateObjectId from "../middlewares/validateObjectId.middleware.js";

const router = express.Router();

// Create Category
router.post("/", authMiddleware, createCategory);


// Get All Categories
router.get("/", getAllCategories);

// Get Category By ID
router.get("/:id", validateObjectId, getCategoryById);

// update category
router.put("/:id", authMiddleware, validateObjectId, updateCategory);

// Delete Category
router.delete("/:id", authMiddleware, validateObjectId, deleteCategory);

export default router;