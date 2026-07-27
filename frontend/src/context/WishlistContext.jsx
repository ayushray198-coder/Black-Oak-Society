import { createContext, useContext, useEffect, useState } from "react";
import wishlistService from "../services/wishlist.service";
import { useAuth } from "./AuthContext";

const WishlistContext = createContext();

export const WishlistProvider = ({ children }) => {
  const { user } = useAuth();

  const [wishlist, setWishlist] = useState([]);
  const [loading, setLoading] = useState(false);

  // Get Wishlist
  const fetchWishlist = async () => {
    if (!user) {
      setWishlist([]);
      return;
    }

    try {
      setLoading(true);

      const response = await wishlistService.getWishlist();

      setWishlist(response.data || []);
    } catch (error) {
      console.error("Fetch Wishlist Error:", error);
      setWishlist([]);
    } finally {
      setLoading(false);
    }
  };

  // Add To Wishlist
  const addToWishlist = async (productId) => {
    try {
      await wishlistService.addToWishlist(productId);

      await fetchWishlist();

      return {
        success: true,
      };
    } catch (error) {
      console.error("Add Wishlist Error:", error);

      return {
        success: false,
        error,
      };
    }
  };

  // Remove From Wishlist
  const removeFromWishlist = async (wishlistId) => {
    try {
      await wishlistService.removeFromWishlist(wishlistId);

      setWishlist((prev) =>
        prev.filter((item) => item._id !== wishlistId)
      );

      return {
        success: true,
      };
    } catch (error) {
      console.error("Remove Wishlist Error:", error);

      return {
        success: false,
        error,
      };
    }
  };

  // Clear Wishlist
  const clearWishlist = async () => {
    try {
      await wishlistService.clearWishlist();

      setWishlist([]);

      return {
        success: true,
      };
    } catch (error) {
      console.error("Clear Wishlist Error:", error);

      return {
        success: false,
        error,
      };
    }
  };

  // Check Product Exists
  const isInWishlist = (productId) => {
    return wishlist.some(
      (item) => item.product?._id === productId
    );
  };

  useEffect(() => {
    fetchWishlist();
  }, [user]);

  return (
    <WishlistContext.Provider
      value={{
        wishlist,
        loading,
        fetchWishlist,
        addToWishlist,
        removeFromWishlist,
        clearWishlist,
        isInWishlist,
        wishlistCount: wishlist.length,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
};

export const useWishlist = () => {
  const context = useContext(WishlistContext);

  if (!context) {
    throw new Error("useWishlist must be used within WishlistProvider");
  }

  return context;
};