import { useState } from "react";
import { Heart, Eye, ShoppingBag } from "lucide-react";
import { Link } from "react-router-dom";

function LuxuryProductCard({ product }) {
    const {
        _id,
        name,
        brand,
        price,
        comparePrice,
        stock,
        images = [],
    } = product;

    const [isWishlisted, setIsWishlisted] = useState(false);

    const image =
        images?.length > 0
            ? images[0].url
            : "https://placehold.co/600x800/0b0b0b/C8A04D?text=Black+Oak";


   




    return (
        <article
            className="
                group
                relative
                overflow-hidden
                rounded-[28px]
                border
                border-[#222]
                bg-[#090909]
                transition-all
                duration-500
                hover:-translate-y-2
                hover:border-[#C8A04D]/40
                hover:shadow-[0_25px_80px_rgba(200,160,77,0.15)]
            "
        >
            {/* Gold Glow */}

            <div
                className="
                    pointer-events-none
                    absolute
                    inset-0
                    opacity-0
                    transition-opacity
                    duration-500
                    group-hover:opacity-100
                "
            >
                <div
                    className="
                        absolute
                        left-1/2
                        top-10
                        h-48
                        w-48
                        -translate-x-1/2
                        rounded-full
                        bg-[#C8A04D]/10
                        blur-[90px]
                    "
                />
            </div>

            {/* Product Image */}

            <Link
                to={`/products/${_id}`}
                className="block"
            >
                <div
                    className="
                        relative
                        flex
                        h-[380px]
                        items-center
                        justify-center
                        overflow-hidden
                        bg-gradient-to-b
                        from-[#111]
                        to-[#050505]
                    "
                >
                    <img
                        src={image}
                        alt={name}
                        className="
                            relative
                            z-10
                            max-h-[320px]
                            w-auto
                            object-contain
                            transition-all
                            duration-700
                            group-hover:scale-110
                        "
                    />

                    {/* Overlay */}

                    <div
                        className="
                            absolute
                            inset-0
                            bg-black/10
                            opacity-0
                            transition
                            duration-500
                            group-hover:opacity-100
                        "
                    />

                    {/* Wishlist */}

                    <button
                        onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            setIsWishlisted(!isWishlisted);
                        }}
                        className="
                            absolute
                            right-5
                            top-5
                            z-20
                            flex
                            h-11
                            w-11
                            items-center
                            justify-center
                            rounded-full
                            border
                            border-[#333]
                            bg-black/50
                            backdrop-blur-md
                            transition-all
                            duration-300
                            hover:border-[#C8A04D]
                        "
                    >
                        <Heart
                            size={18}
                            className={
                                isWishlisted
                                    ? "fill-[#C8A04D] text-[#C8A04D]"
                                    : "text-white"
                            }
                        />
                    </button>

                    {/* Quick View */}

                    <button
                        onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                        }}
                        className="
                            absolute
                            left-5
                            top-5
                            z-20
                            flex
                            h-11
                            w-11
                            items-center
                            justify-center
                            rounded-full
                            border
                            border-[#333]
                            bg-black/50
                            opacity-0
                            backdrop-blur-md
                            transition-all
                            duration-300
                            group-hover:opacity-100
                            hover:border-[#C8A04D]
                        "
                    >
                        <Eye size={18} />
                    </button>

                </div>

            </Link>

            {/* Bottom Content */}

            <div className="relative z-10 p-6">

                {/* Brand */}

                <span
                    className="
                                text-xs
                                uppercase
                                tracking-[0.35em]
                                text-[#C8A04D]
                            "
                >
                    {brand?.name}
                </span>

                {/* Product Name */}

                <Link to={`/products/${_id}`}>
                    <h3
                        className="
                                    mt-3
                                    line-clamp-2
                                    text-2xl
                                    font-semibold
                                    leading-snug
                                    text-white
                                    transition-colors
                                    duration-300
                                    group-hover:text-[#C8A04D]
                                "
                    >
                        {name}
                    </h3>
                </Link>

                {/* Price */}

                <div
                    className="
                                mt-6
                                flex
                                items-center
                                gap-3
                            "
                >
                    <span
                        className="
                                    text-2xl
                                    font-bold
                                    text-[#C8A04D]
                                "
                    >
                        ₹{price?.toLocaleString()}
                    </span>

                    {comparePrice > price && (
                        <span
                            className="
                                        text-base
                                        text-neutral-500
                                        line-through
                                    "
                        >
                            ₹{comparePrice?.toLocaleString()}
                        </span>
                    )}
                </div>

                {/* Stock */}

                <div className="mt-6">

                    {stock > 0 ? (
                        <span
                            className="
                                        inline-flex
                                        items-center
                                        rounded-full
                                        border
                                        border-emerald-500/30
                                        bg-emerald-500/10
                                        px-4
                                        py-2
                                        text-xs
                                        font-medium
                                        uppercase
                                        tracking-[0.18em]
                                        text-emerald-400
                                    "
                        >
                            In Stock
                        </span>
                    ) : (
                        <span
                            className="
                                        inline-flex
                                        items-center
                                        rounded-full
                                        border
                                        border-red-500/30
                                        bg-red-500/10
                                        px-4
                                        py-2
                                        text-xs
                                        font-medium
                                        uppercase
                                        tracking-[0.18em]
                                        text-red-400
                                    "
                        >
                            Out Of Stock
                        </span>
                    )}

                </div>

                {/* Divider */}

                <div
                    className="
                                my-7
                                h-px
                                w-full
                                bg-gradient-to-r
                                from-transparent
                                via-[#C8A04D]/30
                                to-transparent
                            "
                />

                {/* CTA */}

                <button
                    className="
                                flex
                                w-full
                                items-center
                                justify-center
                                gap-3
                                rounded-2xl
                                border
                                border-[#C8A04D]
                                bg-[#C8A04D]
                                px-6
                                py-4
                                font-semibold
                                text-black
                                transition-all
                                duration-300
                                hover:scale-[1.02]
                                hover:bg-[#d4ad57]
                            "
                >
                    <ShoppingBag size={20} />

                    Add To Cart
                </button>

            </div>

        </article>
    );
}

export default LuxuryProductCard;