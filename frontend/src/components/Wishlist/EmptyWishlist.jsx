import { Heart } from "lucide-react";
import { Link } from "react-router-dom";

function EmptyWishlist() {
    return (
        <section className="flex min-h-[70vh] items-center justify-center px-6">

            <div className="max-w-xl text-center">

                {/* Icon */}

                <div className="mx-auto mb-8 flex h-28 w-28 items-center justify-center rounded-full border border-[#C8A04D]/20 bg-[radial-gradient(circle,rgba(200,160,77,.12),transparent_70%)]">

                    <Heart
                        size={46}
                        className="text-[#C8A04D]"
                    />

                </div>

                {/* Heading */}

                <h1 className="mb-5 text-4xl font-semibold text-white">
                    Your Wishlist is Empty
                </h1>

                {/* Description */}

                <p className="mx-auto mb-10 max-w-md text-base leading-8 text-white/60">
                    Save your favourite premium bottles and luxury collections.
                    Everything you love will appear here for quick access.
                </p>

                {/* Button */}

                <Link
                    to="/shop"
                    className="inline-flex items-center justify-center rounded-full border border-[#C8A04D]/30 bg-gradient-to-r from-[#111111] to-[#1A1A1A] px-8 py-3 text-sm font-medium text-white transition-all duration-300 hover:border-[#D8B46A] hover:bg-[#C8A04D] hover:text-black hover:shadow-[0_15px_40px_rgba(200,160,77,.25)]"
                >
                    Explore Collection
                </Link>

            </div>

        </section>
    );
}

export default EmptyWishlist;