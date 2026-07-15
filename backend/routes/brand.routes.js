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

const router = express.Router();

// Create Brand  adminMiddleware yee add krna hai midlle me 
router.post("/", authMiddleware,createBrand);


// Get All Brands
router.get("/", getAllBrands);

// Get Brand By ID
router.get("/:id", getBrandById);

// Update Brand
router.patch("/:id", authMiddleware, updateBrand);

// Delete Brand
router.delete("/:id", authMiddleware, deleteBrand);

export default router;