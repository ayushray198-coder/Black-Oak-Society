import api from "../lib/api";

// Create Razorpay Order
export const createPaymentOrder = async (orderId) => {
  const response = await api.post("/payments/create-order", {
    orderId,
  });

  return response.data;
};

// Verify Razorpay Payment
export const verifyPayment = async (paymentData) => {
  const response = await api.post("/payments/verify", paymentData);

  return response.data;
};

// Get My Payments
export const getMyPayments = async () => {
  const response = await api.get("/payments");

  return response.data;
};

// Get Payment By Id
export const getPaymentById = async (id) => {
  const response = await api.get(`/payments/${id}`);

  return response.data;
};