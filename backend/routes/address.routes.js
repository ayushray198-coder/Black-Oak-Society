import express from "express";

import { addAddress, getAllAddresses, getAddressById , updateAddress ,deleteAddress, setDefaultAddress} from "../controllers/address.controller.js";

import authMiddleware from "../middlewares/auth.middleware.js";

const router = express.Router();

// Add Address
router.post("/", authMiddleware, addAddress);

// Get All Addresses
router.get("/", authMiddleware, getAllAddresses);

// Get Address By ID
router.get("/:id", authMiddleware, getAddressById);

// Update Address
router.put("/:id", authMiddleware, updateAddress);

// Delete Address
router.delete("/:id", authMiddleware, deleteAddress);

// Set Default Address
router.patch("/default/:id", authMiddleware, setDefaultAddress);

export default router;