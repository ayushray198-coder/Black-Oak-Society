import Order from "../models/order.model.js";

export const getSalesAnalytics = async (req, res) => {
  try {
    const monthlySales = await Order.aggregate([
      {
        $match: {
          paymentStatus: "Paid",
        },
      },
      {
        $group: {
          _id: {
            year: { $year: "$createdAt" },
            month: { $month: "$createdAt" },
          },
          totalRevenue: {
            $sum: "$totalAmount",
          },
          totalOrders: {
            $sum: 1,
          },
        },
      },
      {
        $sort: {
          "_id.year": 1,
          "_id.month": 1,
        },
      },
    ]);

    return res.status(200).json({
      success: true,
      message: "Sales analytics fetched successfully.",
      data: monthlySales,
    });

  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};



export const getOrderAnalytics = async (req, res) => {
  try {
    const analytics = await Order.aggregate([
      {
        $group: {
          _id: "$orderStatus",
          totalOrders: {
            $sum: 1,
          },
        },
      },
      {
        $sort: {
          totalOrders: -1,
        },
      },
    ]);

    return res.status(200).json({
      success: true,
      message: "Order analytics fetched successfully.",
      data: analytics,
    });

  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};