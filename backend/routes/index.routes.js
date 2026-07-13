import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Welcome to Black Oak Society API 🥃",
  });
});

export default router;