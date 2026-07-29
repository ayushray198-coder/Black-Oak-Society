import api from "../../lib/api";

// ==============================
// Get All Products
// ==============================

export const getAllProducts = async (params = {}) => {
  const response = await api.get("/products", {
    params,
  });

  return response.data;
};

// ==============================
// Get Product By ID
// ==============================

export const getProductById = async (productId) => {
  const response = await api.get(
    `/products/${productId}`
  );

  return response.data;
};

// ==============================
// Create Product
// ==============================

export const createProduct = async (productData) => {
  const response = await api.post(
    "/products",
    productData
  );

  return response.data;
};

// ==============================
// Update Product
// ==============================

export const updateProduct = async (
  productId,
  productData
) => {
  const response = await api.put(
    `/products/${productId}`,
    productData
  );

  return response.data;
};

// ==============================
// Delete Product
// ==============================

export const deleteProduct = async (productId) => {
  const response = await api.delete(
    `/products/${productId}`
  );

  return response.data;
};