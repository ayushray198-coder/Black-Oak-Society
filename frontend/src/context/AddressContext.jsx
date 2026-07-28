import { createContext, useContext, useEffect, useState } from "react";
import {
  getAllAddresses,
  addAddress,
  updateAddress,
  deleteAddress,
  setDefaultAddress,
} from "../services/address.service";

const AddressContext = createContext();

export const AddressProvider = ({ children }) => {
  const [addresses, setAddresses] = useState([]);
  const [selectedAddress, setSelectedAddress] = useState(null);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // ==========================
  // Fetch All Addresses
  // ==========================
  const fetchAddresses = async () => {
    try {
      setLoading(true);
      setError(null);

      const res = await getAllAddresses();

      const addressList = res.data || [];

      setAddresses(addressList);

      // Auto select default address
      const defaultAddress = addressList.find(
        (address) => address.isDefault
      );

      if (defaultAddress) {
        setSelectedAddress(defaultAddress);
      } else {
        setSelectedAddress(addressList[0] || null);
      }
    } catch (err) {
      setError(err.response?.data?.message || "Failed to fetch addresses.");
    } finally {
      setLoading(false);
    }
  };

  // ==========================
  // Add Address
  // ==========================
  const createAddress = async (addressData) => {
    try {
      setLoading(true);
      setError(null);

      const res = await addAddress(addressData);

      await fetchAddresses();

      return res;
    } catch (err) {
      setError(err.response?.data?.message || "Failed to add address.");
      throw err;
    } finally {
      setLoading(false);
    }
  };

  // ==========================
  // Update Address
  // ==========================
  const editAddress = async (id, addressData) => {
    try {
      setLoading(true);
      setError(null);

      const res = await updateAddress(id, addressData);

      await fetchAddresses();

      return res;
    } catch (err) {
      setError(err.response?.data?.message || "Failed to update address.");
      throw err;
    } finally {
      setLoading(false);
    }
  };

  // ==========================
  // Delete Address
  // ==========================
  const removeAddress = async (id) => {
    try {
      setLoading(true);
      setError(null);

      const res = await deleteAddress(id);

      await fetchAddresses();

      return res;
    } catch (err) {
      setError(err.response?.data?.message || "Failed to delete address.");
      throw err;
    } finally {
      setLoading(false);
    }
  };

  // ==========================
  // Set Default Address
  // ==========================
  const makeDefaultAddress = async (id) => {
    try {
      setLoading(true);
      setError(null);

      const res = await setDefaultAddress(id);

      await fetchAddresses();

      return res;
    } catch (err) {
      setError(
        err.response?.data?.message ||
          "Failed to update default address."
      );
      throw err;
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAddresses();
  }, []);

  return (
    <AddressContext.Provider
      value={{
        addresses,
        selectedAddress,
        setSelectedAddress,

        loading,
        error,

        fetchAddresses,
        createAddress,
        editAddress,
        removeAddress,
        makeDefaultAddress,
      }}
    >
      {children}
    </AddressContext.Provider>
  );
};

export const useAddressContext = () => useContext(AddressContext);