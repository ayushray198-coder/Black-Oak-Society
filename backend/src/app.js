import express from "express";
import helmet from "helmet";
import cors from "cors";
import cookieParser from "cookie-parser";
import morgan from "morgan";

import authRoutes from "../routes/auth.routes.js";
import brandRoutes from "../routes/brand.routes.js";
import categoryRoutes from "../routes/category.routes.js";
import productRoutes from "../routes/product.routes.js";
import errorMiddleware from "../middlewares/error.middleware.js";
import cartRoutes from "../routes/cart.routes.js";
import wishlistRoutes from "../routes/wishlist.routes.js";
import addressRoutes from "../routes/address.routes.js";
import orderRoutes from "../routes/order.routes.js";
import paymentRoutes from "../routes/payment.routes.js";

const app = express();

// Middlewares
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(morgan("dev"));

// Routes
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/brands", brandRoutes);
app.use("/api/v1/categories", categoryRoutes);
app.use("/api/v1/products", productRoutes);
app.use("/api/v1/cart", cartRoutes);
app.use("/api/v1/wishlist", wishlistRoutes);
app.use("/api/v1/address", addressRoutes);
app.use("/api/v1/orders", orderRoutes);
app.use("/api/v1/payments", paymentRoutes);

app.use(errorMiddleware);

export default app;