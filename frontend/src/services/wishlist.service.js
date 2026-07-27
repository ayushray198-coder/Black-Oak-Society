import api from "../lib/api";

class WishlistService {
  // Get User Wishlist
  async getWishlist() {
    const response = await api.get("/wishlist");
    return response.data;
  }

  // Add Product To Wishlist
  async addToWishlist(productId) {
    const response = await api.post("/wishlist", {
      product: productId,
    });

    return response.data;
  }

  // Remove Product From Wishlist
  async removeFromWishlist(wishlistId) {
    const response = await api.delete(`/wishlist/${wishlistId}`);

    return response.data;
  }

  // Clear Wishlist
  async clearWishlist() {
    const response = await api.delete("/wishlist");

    return response.data;
  }
}

export default new WishlistService();
