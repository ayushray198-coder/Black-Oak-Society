import { useEffect, useState } from "react";

import wishlistService from "../../services/wishlist.service";

import WishlistItem from "../../components/Wishlist/WishlistItem";
import EmptyWishlist from "../../components/Wishlist/EmptyWishlist";

function WishlistPage() {
  const [wishlist, setWishlist] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchWishlist();
  }, []);

  const fetchWishlist = async () => {
    try {
      const response = await wishlistService.getWishlist();

      setWishlist(response.data || []);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const removeFromWishlist = async (wishlistId) => {
    try {
      await wishlistService.removeFromWishlist(wishlistId);

      setWishlist((prev) =>
        prev.filter((item) => item._id !== wishlistId)
      );
    } catch (error) {
      console.error(error);
    }
  };

  if (loading) {
    return (
      <section className="mx-auto max-w-7xl px-6 py-24">
        <h2 className="text-center text-2xl text-white">
          Loading Wishlist...
        </h2>
      </section>
    );
  }

  if (wishlist.length === 0) {
    return <EmptyWishlist />;
  }

  return (
    <section className="mx-auto max-w-7xl px-6 py-20">

      {/* Header */}

      <div className="mb-12">

        <p className="mb-3 text-sm uppercase tracking-[0.35em] text-[#C8A04D]">
          Premium Collection
        </p>

        <h1 className="text-5xl font-bold text-white">
          My Wishlist
        </h1>

        <p className="mt-3 text-gray-400">
          {wishlist.length} Premium Products
        </p>

      </div>

      {/* Grid */}

      <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

        {wishlist.map((item) => (
          <WishlistItem
            key={item._id}
            item={item}
            removeFromWishlist={removeFromWishlist}
          />
        ))}

      </div>

    </section>
  );
}

export default WishlistPage;