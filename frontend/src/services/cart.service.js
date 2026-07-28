import api from "../lib/api";

// ================================
// Get User Cart
// ================================
export const getCart = async () => {
  const response = await api.get("/cart");
  return response.data;
};

// ================================
// Add Product To Cart
// ================================
export const addToCart = async (data) => {
  const response = await api.post("/cart", data);
  return response.data;
};

// ================================
// Update Cart Quantity
// ================================
export const updateCartQuantity = async (cartItemId, quantity) => {
  const response = await api.put(`/cart/${cartItemId}`, {
    quantity,
  });

  return response.data;
};

// ================================
// Remove Cart Item
// ================================
export const removeCartItem = async (cartItemId) => {
  const response = await api.delete(`/cart/${cartItemId}`);
  return response.data;
};


export const clearCart = async () => {
  const response = await api.delete("/cart/clear");
  return response.data;
};