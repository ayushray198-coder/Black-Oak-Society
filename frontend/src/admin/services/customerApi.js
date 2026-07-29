import api from "../../lib/api";

// ==============================
// Get All Customers
// ==============================

export const getAllCustomers = async (params = {}) => {
  const response = await api.get("/admin/customers", {
    params,
  });

  return response.data;
};

// ==============================
// Block / Unblock Customer
// ==============================

export const toggleCustomerBlockStatus = async (
  customerId
) => {
  const response = await api.patch(
    `/admin/customers/${customerId}/block`
  );

  return response.data;
};