import api from "../lib/api";

// Get All Addresses
export const getAllAddresses = async () => {
  const response = await api.get("/addresses");
  return response.data;
};

// Get Address By Id
export const getAddressById = async (id) => {
  const response = await api.get(`/addresses/${id}`);
  return response.data;
};

// Add Address
export const addAddress = async (addressData) => {
  const response = await api.post("/addresses", addressData);
  return response.data;
};

// Update Address
export const updateAddress = async (id, addressData) => {
  const response = await api.put(`/addresses/${id}`, addressData);
  return response.data;
};

// Delete Address
export const deleteAddress = async (id) => {
  const response = await api.delete(`/addresses/${id}`);
  return response.data;
};

// Set Default Address
export const setDefaultAddress = async (id) => {
  const response = await api.patch(`/addresses/default/${id}`);
  return response.data;
};