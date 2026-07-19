import express from "express";
import upload from "../middlewares/multer.js";
import { uploadSingleImage } from "../controllers/upload.controller.js";
import adminMiddleware from "../middlewares/admin.middleware.js";
import authMiddleware from "../middlewares/auth.middleware.js";


const router = express.Router();

router.post(
    "/image",
    authMiddleware,
    adminMiddleware,
    upload.single("image"),
    uploadSingleImage
);

export default router;