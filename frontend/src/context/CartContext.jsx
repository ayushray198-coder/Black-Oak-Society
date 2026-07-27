import { createContext, useContext, useEffect, useState } from "react";

import {
  getCart,
  addToCart as addCartItem,
  updateCartQuantity,
  removeCartItem,
} from "../services/cart.service";

import { useAuth } from "./AuthContext";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const { user } = useAuth();

  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(false);

  // Fetch Cart
  const fetchCart = async () => {
    if (!user) {
      setCart([]);
      return;
    }

    try {
      setLoading(true);

      const response = await getCart();

      setCart(response.data || []);
    } catch (error) {
      console.error("Fetch Cart Error:", error);
      setCart([]);
    } finally {
      setLoading(false);
    }
  };

  // Add To Cart
  const addToCart = async (data) => {
    try {
      await addCartItem(data);

      await fetchCart();

      return { success: true };
    } catch (error) {
      console.error("Add Cart Error:", error);

      return {
        success: false,
        error,
      };
    }
  };

  // Update Quantity
  const updateQuantity = async (cartItemId, quantity) => {
    try {
      await updateCartQuantity(cartItemId, quantity);

      await fetchCart();

      return { success: true };
    } catch (error) {
      console.error("Update Quantity Error:", error);

      return {
        success: false,
        error,
      };
    }
  };

  // Remove Item
  const removeFromCart = async (cartItemId) => {
    try {
      await removeCartItem(cartItemId);

      setCart((prev) =>
        prev.filter((item) => item._id !== cartItemId)
      );

      return { success: true };
    } catch (error) {
      console.error("Remove Cart Error:", error);

      return {
        success: false,
        error,
      };
    }
  };

  // Total Quantity
  const cartCount = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  // Total Price
  const cartTotal = cart.reduce(
    (total, item) =>
      total + item.quantity * item.product.price,
    0
  );

  useEffect(() => {
    fetchCart();
  }, [user]);

  return (
    <CartContext.Provider
      value={{
        cart,
        loading,
        fetchCart,
        addToCart,
        updateQuantity,
        removeFromCart,
        cartCount,
        cartTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error(
      "useCart must be used within CartProvider"
    );
  }

  return context;
};