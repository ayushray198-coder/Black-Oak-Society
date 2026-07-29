import api from "../../lib/api";

// ==============================
// Get Sales Analytics
// ==============================

export const getSalesAnalytics = async (
  params = {}
) => {
  const response = await api.get(
    "/admin/analytics/sales",
    {
      params,
    }
  );

  return response.data;
};

// ==============================
// Get Order Analytics
// ==============================

export const getOrderAnalytics = async (
  params = {}
) => {
  const response = await api.get(
    "/admin/analytics/orders",
    {
      params,
    }
  );

  return response.data;
};