import crypto from "crypto";

import Order from "../models/order.model.js";
import Payment from "../models/payment.model.js";
import razorpay from "../config/razorpay.js";


export const createPaymentOrder = async (req, res) => {
  try {
    const { orderId } = req.body;

    // Validation
    if (!orderId) {
      return res.status(400).json({
        success: false,
        message: "Order ID is required.",
      });
    }

    // Check Order Exists
    const order = await Order.findOne({
      _id: orderId,
      user: req.user._id,
    });

    if (!order) {
      return res.status(404).json({
        success: false,
        message: "Order not found.",
      });
    }

    // Prevent Duplicate Payment
    const existingPayment = await Payment.findOne({
      order: order._id,
      paymentStatus: "Paid",
    });

    if (existingPayment) {
      return res.status(400).json({
        success: false,
        message: "Order is already paid.",
      });
    }

    // Razorpay Options
    const options = {
      amount: order.totalAmount * 100, // paisa
      currency: "INR",
      receipt: `receipt_${order._id}`,
    };

    // Create Razorpay Order
    const razorpayOrder = await razorpay.orders.create(options);

    // Save Payment
    const payment = await Payment.create({
      order: order._id,
      user: req.user._id,
      amount: order.totalAmount,
      paymentMethod: order.paymentMethod,
      transactionId: razorpayOrder.id,
      paymentStatus: "Pending",
    });

    return res.status(201).json({
      success: true,
      message: "Razorpay order created successfully.",
      data: {
        payment,
        razorpayOrder,
      },
    });

  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};



export const verifyPayment = async (req, res) => {
  try {
    const {
      razorpay_order_id,
      razorpay_payment_id,
      razorpay_signature,
    } = req.body;

    // Validation
    if (
      !razorpay_order_id ||
      !razorpay_payment_id ||
      !razorpay_signature
    ) {
      return res.status(400).json({
        success: false,
        message: "All payment fields are required.",
      });
    }

    // Generate Signature
    const generatedSignature = crypto
      .createHmac(
        "sha256",
        process.env.RAZORPAY_KEY_SECRET
      )
      .update(
        `${razorpay_order_id}|${razorpay_payment_id}`
      )
      .digest("hex");

    // Verify Signature
    if (generatedSignature !== razorpay_signature) {
      return res.status(400).json({
        success: false,
        message: "Invalid payment signature.",
      });
    }

    // Update Payment
    const payment = await Payment.findOneAndUpdate(
      {
        transactionId: razorpay_order_id,
      },
      {
        paymentStatus: "Paid",
        transactionId: razorpay_payment_id,
      },
      {
        new: true,
      }
    );

    if (!payment) {
      return res.status(404).json({
        success: false,
        message: "Payment not found.",
      });
    }

    // Update Order
    await Order.findByIdAndUpdate(
      payment.order,
      {
        paymentStatus: "Paid",
        orderStatus: "Confirmed",
      }
    );

    return res.status(200).json({
      success: true,
      message: "Payment verified successfully.",
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



export const getMyPayments = async (req, res) => {
  try {
    const payments = await Payment.find({
      user: req.user._id,
    })
      .populate("order")
      .sort({ createdAt: -1 });

    return res.status(200).json({
      success: true,
      message: "Payments fetched successfully.",
      totalPayments: payments.length,
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

    const payment = await Payment.findOne({
      _id: id,
      user: req.user._id,
    }).populate("order");

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