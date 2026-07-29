import express from "express";
import { getDashboard } from "../controllers/admin.controller.js";
import { getAllOrders ,getOrderById, updateOrderStatus} from "../controllers/adminOrder.controller.js";
import authMiddleware from "../middlewares/auth.middleware.js";
import { getAllProductsAdmin } from "../controllers/adminProduct.controller.js";
import adminMiddleware from "../middlewares/admin.middleware.js";
import { getAllCustomers , toggleCustomerBlockStatus} from "../controllers/adminCustomer.controller.js";
import { getAllPayments, getPaymentById , updatePaymentStatus} from "../controllers/adminPayment.controller.js";
import { getSalesAnalytics , getOrderAnalytics} from "../controllers/adminAnalytics.controller.js";

const router = express.Router();

// ===============================
// Dashboard
// ===============================

router.get(
  "/dashboard",
  authMiddleware,
  adminMiddleware,
  getDashboard
);

// ===============================
// Orders
// ===============================

router.get(
  "/orders",
  authMiddleware,
  adminMiddleware,
  getAllOrders
);


router.get(
  "/orders/:id",
  authMiddleware,
  adminMiddleware,
  getOrderById
);


router.patch(
  "/orders/:id/status",
  authMiddleware,
  adminMiddleware,
  updateOrderStatus
);


// ===============================
// Products
// ===============================

router.get(
  "/products",
  authMiddleware,
  adminMiddleware,
  getAllProductsAdmin
);


// ===============================
// Customers
// ===============================

router.get(
  "/customers",
  authMiddleware,
  adminMiddleware,
  getAllCustomers
);


router.patch(
  "/customers/:id/block",
  authMiddleware,
  adminMiddleware,
  toggleCustomerBlockStatus
);


// ===============================
// Payments
// ===============================

router.get(
  "/payments",
  authMiddleware,
  adminMiddleware,
  getAllPayments
);


router.get(
  "/payments/:id",
  authMiddleware,
  adminMiddleware,
  getPaymentById
);


router.patch(
  "/payments/:id/status",
  authMiddleware,
  adminMiddleware,
  updatePaymentStatus
);


// ===============================
// Analytics
// ===============================

router.get(
  "/analytics/sales",
  authMiddleware,
  adminMiddleware,
  getSalesAnalytics
);



router.get(
  "/analytics/orders",
  authMiddleware,
  adminMiddleware,
  getOrderAnalytics
);

export default router;