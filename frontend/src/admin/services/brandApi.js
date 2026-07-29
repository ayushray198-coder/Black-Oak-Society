import api from "../../lib/api";

// ==============================
// Get All Brands
// ==============================

export const getAllBrands = async (params = {}) => {
  const response = await api.get("/brands", {
    params,
  });

  return response.data;
};

// ==============================
// Get Brand By ID
// ==============================

export const getBrandById = async (brandId) => {
  const response = await api.get(
    `/brands/${brandId}`
  );

  return response.data;
};

// ==============================
// Create Brand
// ==============================

export const createBrand = async (brandData) => {
  const response = await api.post(
    "/brands",
    brandData
  );

  return response.data;
};

// ==============================
// Update Brand
// ==============================

export const updateBrand = async (
  brandId,
  brandData
) => {
  const response = await api.put(
    `/brands/${brandId}`,
    brandData
  );

  return response.data;
};

// ==============================
// Delete Brand
// ==============================

export const deleteBrand = async (brandId) => {
  const response = await api.delete(
    `/brands/${brandId}`
  );

  return response.data;
};
