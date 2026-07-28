import api from "../lib/api";

// Place Order
export const placeOrder = async (orderData) => {
  const response = await api.post("/orders", orderData);
  return response.data;
};

// Get My Orders
export const getMyOrders = async () => {
  const response = await api.get("/orders");
  return response.data;
};

// Get Order By Id
export const getOrderById = async (id) => {
  const response = await api.get(`/orders/${id}`);
  return response.data;
};

// Cancel Order
export const cancelOrder = async (id) => {
  const response = await api.patch(`/orders/${id}/cancel`);
  return response.data;
};

// Update Order Status (Admin)
export const updateOrderStatus = async (id, orderStatus) => {
  const response = await api.patch(`/orders/${id}/status`, {
    orderStatus,
  });

  return response.data;
};