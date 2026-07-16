import express from "express";

import {
    createBrand,
    getAllBrands,
    getBrandById,
    updateBrand,
    deleteBrand
} from "../controllers/brand.controller.js";
import authMiddleware from "../middlewares/auth.middleware.js";
import adminMiddleware from "../middlewares/admin.middleware.js";
import validateObjectId from "../middlewares/validateObjectId.middleware.js";

const router = express.Router();

// Create Brand  adminMiddleware yee add krna hai midlle me 
router.post("/", authMiddleware, adminMiddleware, createBrand);


// Get All Brands
router.get("/", getAllBrands);

// Get Brand By ID
router.get("/:id", validateObjectId, getBrandById,);

// Update Brand
router.patch("/:id", authMiddleware, adminMiddleware, validateObjectId, updateBrand);

// Delete Brand
router.delete("/:id", authMiddleware, adminMiddleware, validateObjectId, deleteBrand);

export default router;