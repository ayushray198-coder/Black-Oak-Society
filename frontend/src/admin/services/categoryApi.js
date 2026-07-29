import api from "../../lib/api";

// ==============================
// Get All Categories
// ==============================

export const getAllCategories = async (params = {}) => {
  const response = await api.get("/categories", {
    params,
  });

  return response.data;
};

// ==============================
// Get Category By ID
// ==============================

export const getCategoryById = async (categoryId) => {
  const response = await api.get(
    `/categories/${categoryId}`
  );

  return response.data;
};

// ==============================
// Create Category
// ==============================

export const createCategory = async (
  categoryData
) => {
  const response = await api.post(
    "/categories",
    categoryData
  );

  return response.data;
};

// ==============================
// Update Category
// ==============================

export const updateCategory = async (
  categoryId,
  categoryData
) => {
  const response = await api.put(
    `/categories/${categoryId}`,
    categoryData
  );

  return response.data;
};

// ==============================
// Delete Category
// ==============================

export const deleteCategory = async (
  categoryId
) => {
  const response = await api.delete(
    `/categories/${categoryId}`
  );

  return response.data;
};