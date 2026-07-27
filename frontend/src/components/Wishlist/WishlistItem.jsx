import { Link } from "react-router-dom";
import { ShoppingBag, Trash2 } from "lucide-react";

function WishlistItem({ item, removeFromWishlist }) {
    const { product } = item;

    return (
        <article className="group overflow-hidden rounded-[28px] border border-[#C8A04D]/10 bg-[#090909] transition-all duration-500 hover:-translate-y-2 hover:border-[#D8B46A]/40 hover:shadow-[0_30px_80px_rgba(216,180,106,.12)]">

            {/* Product Image */}

            <div className="flex h-80 items-center justify-center overflow-hidden border-b border-[#C8A04D]/10 bg-[radial-gradient(circle_at_center,rgba(216,180,106,.12),transparent_75%)] p-5">

                <img
                    src={product.images?.[0]?.url}
                    alt={product.name}
                    className="max-h-full w-auto object-contain transition-all duration-700 group-hover:scale-110" />

            </div>

            {/* Product Info */}

            <div className="space-y-5 p-5">

                <div>

                    <p className="mb-2 text-xs uppercase tracking-[0.3em] text-[#C8A04D]">
                        {product.brand?.name}
                    </p>

                    <h5 className="min-h-[64px] line-clamp-2 text-[30px] font-bold leading-tight text-white">
                        {product.name}
                    </h5>

                </div>

                <p className="text-3xl font-bold tracking-tight text-[#D8B46A]">
                    ₹{product.price?.toLocaleString()}
                </p>

                <div className="flex items-center gap-3 pt-2">

                    <Link
                        to={`/products/${product._id}`}
                        className="flex flex-1 items-center justify-center gap-2 rounded-full border border-[#D8B46A]/20 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:border-[#D8B46A] hover:bg-[#D8B46A] hover:text-black"
                    >
                        <ShoppingBag size={18} />
                        View Product
                    </Link>

                    <button
                        onClick={() => removeFromWishlist(item._id)}
                        className="group flex h-12 w-12 items-center justify-center rounded-full border border-[#D8B46A]/20 bg-[#0F0F0F] text-[#D8B46A] transition-all duration-300 hover:border-[#D8B46A] hover:bg-[#D8B46A]/10 hover:shadow-[0_0_20px_rgba(216,180,106,0.25)]"
                    >
                        <Trash2
                            size={18}
                            className="transition-transform duration-300 group-hover:scale-110"
                        />
                    </button>

                </div>

            </div>

        </article>
    );
}

export default WishlistItem;