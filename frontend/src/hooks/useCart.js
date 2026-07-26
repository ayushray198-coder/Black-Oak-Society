import { useCallback, useEffect, useState } from "react";
import {
  getCart,
  addToCart,
  updateCartQuantity,
  removeCartItem,
} from "../services/cart.service";

const useCart = () => {
  const [cart, setCart] = useState([]);
  const [totalItems, setTotalItems] = useState(0);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // ==============================
  // Fetch Cart
  // ==============================
  const fetchCart = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);

      const response = await getCart();

      setCart(response.data || []);
      setTotalItems(response.totalItems || 0);
    } catch (err) {
      setError(
        err?.response?.data?.message || "Failed to fetch cart."
      );
    } finally {
      setLoading(false);
    }
  }, []);

  // ==============================
  // Add To Cart
  // ==============================
  const handleAddToCart = async (productId, quantity = 1) => {
    try {
      await addToCart({
        product: productId,
        quantity,
      });

      await fetchCart();
    } catch (err) {
      throw (
        err?.response?.data?.message ||
        "Failed to add product."
      );
    }
  };

  // ==============================
  // Update Quantity
  // ==============================
  const handleUpdateQuantity = async (
    cartItemId,
    quantity
  ) => {
    try {
      await updateCartQuantity(cartItemId, quantity);

      await fetchCart();
    } catch (err) {
      throw (
        err?.response?.data?.message ||
        "Failed to update quantity."
      );
    }
  };

  // ==============================
  // Remove Item
  // ==============================
  const handleRemoveItem = async (cartItemId) => {
    try {
      await removeCartItem(cartItemId);

      await fetchCart();
    } catch (err) {
      throw (
        err?.response?.data?.message ||
        "Failed to remove item."
      );
    }
  };

  useEffect(() => {
    fetchCart();
  }, [fetchCart]);

  return {
    cart,
    totalItems,

    loading,
    error,

    fetchCart,

    handleAddToCart,
    handleUpdateQuantity,
    handleRemoveItem,
  };
};

export default useCart;