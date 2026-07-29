import User from "../models/user.model.js";
import Product from "../models/product.model.js";
import Order from "../models/order.model.js";
import Payment from "../models/payment.model.js";

export const getDashboard = async (req, res) => {
  try {
    const [
      totalCustomers,
      totalProducts,
      totalOrders,
      totalRevenueResult,
      pendingOrders,
      confirmedOrders,
      processingOrders,
      shippedOrders,
      deliveredOrders,
      cancelledOrders,
      pendingPayments,
      paidPayments,
      failedPayments,
      refundedPayments,
      lowStockProducts,
    ] = await Promise.all([
      // Total Customers
      User.countDocuments({
        role: "user",
      }),

      // Total Active Products
      Product.countDocuments({
        status: "active",
      }),

      // Total Orders
      Order.countDocuments(),

      // Total Revenue
      Order.aggregate([
        {
          $match: {
            paymentStatus: "Paid",
          },
        },
        {
          $group: {
            _id: null,
            totalRevenue: {
              $sum: "$totalAmount",
            },
          },
        },
      ]),

      // Pending Orders
      Order.countDocuments({
        orderStatus: "Pending",
      }),

      // Confirmed Orders
      Order.countDocuments({
        orderStatus: "Confirmed",
      }),

      // Processing Orders
      Order.countDocuments({
        orderStatus: "Processing",
      }),

      // Shipped Orders
      Order.countDocuments({
        orderStatus: "Shipped",
      }),

      // Delivered Orders
      Order.countDocuments({
        orderStatus: "Delivered",
      }),

      // Cancelled Orders
      Order.countDocuments({
        orderStatus: "Cancelled",
      }),

      // Pending Payments
      Payment.countDocuments({
        paymentStatus: "Pending",
      }),

      // Paid Payments
      Payment.countDocuments({
        paymentStatus: "Paid",
      }),

      // Failed Payments
      Payment.countDocuments({
        paymentStatus: "Failed",
      }),

      // Refunded Payments
      Payment.countDocuments({
        paymentStatus: "Refunded",
      }),

      // Low Stock Products
      Product.countDocuments({
        status: "active",
        stock: {
          $lte: 5,
        },
      }),
    ]);

    const dashboard = {
      overview: {
        totalRevenue:
          totalRevenueResult.length > 0
            ? Number(totalRevenueResult[0].totalRevenue.toFixed(2))
            : 0,

        totalOrders,

        totalProducts,

        totalCustomers,
      },

      orders: {
        pending: pendingOrders,

        confirmed: confirmedOrders,

        processing: processingOrders,

        shipped: shippedOrders,

        delivered: deliveredOrders,

        cancelled: cancelledOrders,
      },

      payments: {
        pending: pendingPayments,

        paid: paidPayments,

        failed: failedPayments,

        refunded: refundedPayments,
      },

      inventory: {
        lowStockProducts,
      },
    };

    return res.status(200).json({
      success: true,
      message: "Dashboard fetched successfully.",
      data: dashboard,
    });

  } catch (error) {
    console.error("GET DASHBOARD ERROR:");
    console.error(error);

    return res.status(500).json({
      success: false,
      message: error.message || "Internal Server Error",
    });
  }
};