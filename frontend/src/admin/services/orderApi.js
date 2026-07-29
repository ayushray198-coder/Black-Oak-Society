import api from "../../lib/api";

// ==============================
// Get All Orders
// ==============================

export const getAllOrders = async (params = {}) => {
  const response = await api.get("/admin/orders", {
    params,
  });

  return response.data;
};

// ==============================
// Get Order By ID
// ==============================

export const getOrderById = async (orderId) => {
  const response = await api.get(
    `/admin/orders/${orderId}`
  );

  return response.data;
};

// ==============================
// Update Order Status
// ==============================

export const updateOrderStatus = async (
  orderId,
  status
) => {
  const response = await api.patch(
    `/admin/orders/${orderId}/status`,
    {
      status,
    }
  );

  return response.data;
};