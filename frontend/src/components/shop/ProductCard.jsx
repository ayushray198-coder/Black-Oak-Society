import {
    Eye,
    Heart,
    ShoppingBag,
    Star,
} from "lucide-react";
import { Link } from "react-router-dom";

function ProductCard({ product }) {
    const {
        _id,
        name,
        price,
        images,
        brand,
    } = product;

    return (
        <Link
            to={`/products/${_id}`}
            className="block"
        >
            <article className="group overflow-hidden rounded-3xl border border-[#C8A04D]/10 bg-[#0A0A0A] transition-all duration-500 hover:-translate-y-1 hover:border-[#C8A04D]/35 hover:shadow-[0_25px_60px_rgba(200,160,77,.08)]">

                {/* Image */}

                <div className="relative overflow-hidden bg-[radial-gradient(circle_at_top,rgba(200,160,77,.16),transparent_70%)]">

                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/20" />

                    <div className="absolute right-4 top-4 z-20 flex flex-col gap-2">

                        <button
                            type="button"
                            onClick={(e) => {
                                e.preventDefault();
                                e.stopPropagation();

                                // TODO: Wishlist
                            }}
                            className="flex h-9 w-9 items-center justify-center rounded-full border border-[#C8A04D]/20 bg-black/55 text-white backdrop-blur-md transition-all duration-300 hover:border-[#D8B46A] hover:bg-[#C8A04D]/15 hover:text-[#D8B46A]"
                        >
                            <Heart size={16} />
                        </button>

                        <button
                            type="button"
                            onClick={(e) => {
                                e.preventDefault();
                                e.stopPropagation();

                                // TODO: Quick View
                            }}
                            className="flex h-9 w-9 items-center justify-center rounded-full border border-[#C8A04D]/20 bg-black/55 text-white backdrop-blur-md transition-all duration-300 hover:border-[#D8B46A] hover:bg-[#C8A04D]/15 hover:text-[#D8B46A]"
                        >
                            <Eye size={16} />
                        </button>

                    </div>

                    <span className="absolute left-4 top-4 z-20 rounded-full border border-[#C8A04D]/20 bg-black/65 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#D8B46A] backdrop-blur">
                        Premium
                    </span>

                    <div className="flex h-64 items-end justify-center overflow-hidden rounded-[22px] border border-[#C8A04D]/8 bg-[radial-gradient(circle_at_top,rgba(200,160,77,.08),transparent_75%)] px-3 pt-2">

                        <img
                            src={images?.[0]?.url}
                            alt={name}
                            className="h-[245px] w-auto object-contain transition-all duration-700 group-hover:scale-110 group-hover:-rotate-1"
                        />

                    </div>

                </div>

                {/* Content */}

                <div className="space-y-4 p-5">

                    <div>

                        <p className="mb-2 text-[10px] font-medium uppercase tracking-[0.35em] text-[#C8A04D]">
                            {brand?.name}
                        </p>

                        <h3 className="line-clamp-2 text-lg font-semibold leading-snug text-white transition-colors duration-300 group-hover:text-[#F4E2B2]">
                            {name}
                        </h3>

                    </div>

                    <div className="flex items-center justify-between">

                        <div className="flex items-center gap-1">

                            {[...Array(5)].map((_, index) => (
                                <Star
                                    key={index}
                                    size={13}
                                    fill="#C8A04D"
                                    strokeWidth={1.4}
                                    className="text-[#C8A04D]"
                                />
                            ))}

                            <span className="ml-1 text-xs text-white/40">
                                (128)
                            </span>

                        </div>

                        <span className="text-xl font-semibold tracking-wide text-[#D8B46A]">
                            ₹{price?.toLocaleString()}
                        </span>

                    </div>

                    <button
                        type="button"
                        onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();

                            // TODO: Add To Cart
                        }}
                        className="flex h-11 w-full items-center justify-center gap-2 rounded-full border border-[#C8A04D]/20 bg-gradient-to-r from-[#111111] to-[#171717] text-sm font-medium text-white transition-all duration-300 hover:border-[#D8B46A] hover:bg-[#C8A04D] hover:text-black hover:shadow-[0_10px_30px_rgba(200,160,77,.25)]"
                    >
                        <ShoppingBag size={16} />
                        Add to Cart
                    </button>

                </div>

            </article>
        </Link>
    );
}

export default ProductCard;