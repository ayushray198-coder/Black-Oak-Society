import api from "../../lib/api";

// ==============================
// Get All Payments
// ==============================

export const getAllPayments = async (params = {}) => {
  const response = await api.get("/admin/payments", {
    params,
  });

  return response.data;
};

// ==============================
// Get Payment By ID
// ==============================

export const getPaymentById = async (paymentId) => {
  const response = await api.get(
    `/admin/payments/${paymentId}`
  );

  return response.data;
};

// ==============================
// Update Payment Status
// ==============================

export const updatePaymentStatus = async (
  paymentId,
  status
) => {
  const response = await api.patch(
    `/admin/payments/${paymentId}/status`,
    {
      status,
    }
  );

  return response.data;
};