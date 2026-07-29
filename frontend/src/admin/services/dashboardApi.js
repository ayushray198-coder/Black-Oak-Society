import api from "../../lib/api";

/* ===========================
   Dashboard
=========================== */

export const getDashboard = async () => {
  const response = await api.get("/admin/dashboard");
  return response.data;
};

/* ===========================
   Products
=========================== */

export const getAllProducts = async (params = {}) => {
  const response = await api.get("/admin/products", {
    params,
  });

  return response.data;
};

export const getProductById = async (id) => {
  const response = await api.get(`/admin/products/${id}`);

  return response.data;
};

export const createProduct = async (data) => {
  const response = await api.post("/admin/products", data);

  return response.data;
};

export const updateProduct = async (id, data) => {
  const response = await api.put(`/admin/products/${id}`, data);

  return response.data;
};

export const deleteProduct = async (id) => {
  const response = await api.delete(`/admin/products/${id}`);

  return response.data;
};

/* ===========================
   Brands
=========================== */

export const getAllBrands = async () => {
  const response = await api.get("/admin/brands", {
    params: {
      limit: 100,
    },
  });

  return response.data;
};

/* ===========================
   Categories
=========================== */

export const getAllCategories = async (brand = "") => {
  const response = await api.get("/admin/categories", {
    params: {
      limit: 100,
      ...(brand && { brand }),
    },
  });

  return response.data;
};