import Payment from "../models/payment.model.js";

export const getAllPayments = async (req, res) => {
  try {
    const {
      paymentStatus,
      paymentMethod,
      page = 1,
      limit = 10,
      sort = "-createdAt",
    } = req.query;

    const query = {};

    // Payment Status Filter
    if (paymentStatus) {
      query.paymentStatus = paymentStatus;
    }

    // Payment Method Filter
    if (paymentMethod) {
      query.paymentMethod = paymentMethod;
    }

    const currentPage = Number(page);
    const perPage = Number(limit);

    const totalPayments = await Payment.countDocuments(query);

    const payments = await Payment.find(query)
      .populate("user", "name email")
      .populate("order")
      .sort(sort)
      .skip((currentPage - 1) * perPage)
      .limit(perPage);

    return res.status(200).json({
      success: true,
      message: "Payments fetched successfully.",
      pagination: {
        totalPayments,
        currentPage,
        totalPages: Math.ceil(totalPayments / perPage),
        perPage,
      },
      data: payments,
    });

  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};


export const getPaymentById = async (req, res) => {
  try {
    const { id } = req.params;

    const payment = await Payment.findById(id)
      .populate("user", "name email")
      .populate({
        path: "order",
        populate: {
          path: "items.product",
        },
      });

    if (!payment) {
      return res.status(404).json({
        success: false,
        message: "Payment not found.",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Payment fetched successfully.",
      data: payment,
    });

  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};


export const updatePaymentStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { paymentStatus } = req.body;

    const validStatuses = [
      "Pending",
      "Paid",
      "Failed",
      "Refunded",
    ];

    if (!paymentStatus) {
      return res.status(400).json({
        success: false,
        message: "Payment status is required.",
      });
    }

    if (!validStatuses.includes(paymentStatus)) {
      return res.status(400).json({
        success: false,
        message: "Invalid payment status.",
      });
    }

    const payment = await Payment.findById(id);

    if (!payment) {
      return res.status(404).json({
        success: false,
        message: "Payment not found.",
      });
    }

    payment.paymentStatus = paymentStatus;

    await payment.save();

    return res.status(200).json({
      success: true,
      message: "Payment status updated successfully.",
      data: payment,
    });

  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};