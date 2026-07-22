import { Heart, ShoppingBag, Star } from "lucide-react";

function FeaturedCard({ product }) {

    const {
        name,
        images,
        price,
        comparePrice,
        stock,
        brand,
        category,
        rating = 5,
        badge = "Premium",
    } = product;

    const image = images?.[0]?.url || "";

    return (

        <article
            className="
                group
                relative
                mt-4
                overflow-hidden
                rounded-[30px]
                border
                border-[#C89B3C]/15
                bg-[#0F0F0F]
                transition-all
                duration-700
                hover:-translate-y-2
                hover:border-[#C89B3C]/40
                hover:shadow-[0_25px_80px_rgba(200,155,60,.18)]
            "
        >

            {/* Glass */}

            <div className="absolute inset-0 bg-gradient-to-b from-white/[0.02] via-transparent to-black/30" />

            {/* ========================= */}

            {/* IMAGE SECTION */}

            {/* ========================= */}

            <div
                className="
                    relative
                  h-[260px]
                  
                    overflow-hidden
                "
            >

                {/* Image */}

                <img
                    src={image}
                    alt={name}
                    draggable={false}
                    loading="lazy"
                    className="
                        h-full
                        w-full
                        object-cover
                        transition-transform
                        duration-700
                        group-hover:scale-105
                    "
                />

                {/* Dark Overlay */}

                <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/40" />

                {/* Top Content */}

                <div
                    className="
                        absolute
                        inset-x-0
                        top-0
                        flex
                        items-start
                        justify-between
                        p-4
                    "
                >

                    {/* Premium Badge */}

                    <span
                        className="
                            rounded-full
                            border
                            border-[#C89B3C]/60
                            bg-black/35
                            px-4
                            py-1.5
                            text-[10px]
                            font-semibold
                            uppercase
                            tracking-[0.30em]
                            text-[#C89B3C]
                            backdrop-blur-xl
                        "
                    >
                        {badge}
                    </span>

                    {/* Wishlist */}

                    <button
                        className="
                            flex
                            h-10
                            w-10
                            items-center
                            justify-center
                            rounded-full
                            border
                            border-white/20
                            bg-black/35
                            text-white
                            backdrop-blur-xl
                            transition
                            duration-300
                            hover:border-[#C89B3C]
                            hover:text-[#C89B3C]
                        "
                    >
                        <Heart size={16} />
                    </button>

                </div>

            </div>
                        {/* ========================= */}

            {/* BOTTOM SECTION */}

            {/* ========================= */}

            <div
                className="
                    relative
                    flex
                    flex-col
                    gap-4
                    p-5
                "
            >

                {/* Category */}

                <span
                    className="
                        text-[10px]
                        font-semibold
                        uppercase
                        tracking-[0.35em]
                        text-[#C89B3C]
                    "
                >
                    {category?.name || "Premium Whisky"}
                </span>

                {/* Product Name */}

                <h3
                    className="
                        line-clamp-2
                        font-serif
                        text-[28px]
                        font-semibold
                        leading-tight
                        tracking-tight
                        text-white
                        transition-colors
                        duration-300
                        group-hover:text-[#F5E6C5]
                    "
                >
                    {name}
                </h3>

                {/* Rating */}

                <div
                    className="
                        flex
                        items-center
                        gap-1.5
                    "
                >
                    {[...Array(rating)].map((_, index) => (
                        <Star
                            key={index}
                            size={13}
                            fill="currentColor"
                            className="text-[#C89B3C]"
                        />
                    ))}
                </div>

                {/* Divider */}

                <div
                    className="
                        h-px
                        w-full
                        bg-gradient-to-r
                        from-transparent
                        via-[#C89B3C]/30
                        to-transparent
                    "
                />

                {/* Details */}

                <div
                    className="
                        grid
                        grid-cols-3
                        gap-2
                        text-center
                    "
                >

                    <div>

                        <p className="text-[10px] uppercase tracking-[0.25em] text-white/35">
                            Type
                        </p>

                        <p className="mt-2 text-[13px] text-white/90">
                            {category?.name || "Single Malt"}
                        </p>

                    </div>

                    <div>

                        <p className="text-[10px] uppercase tracking-[0.25em] text-white/35">
                            Origin
                        </p>

                        <p className="mt-2 text-[13px] text-white/90">
                            Scotland
                        </p>

                    </div>

                    <div>

                        <p className="text-[10px] uppercase tracking-[0.25em] text-white/35">
                            Brand
                        </p>

                        <p className="mt-2 text-[13px] text-white/90">
                            {brand?.name}
                        </p>

                    </div>

                </div>

                {/* Divider */}

                <div
                    className="
                        h-px
                        w-full
                        bg-gradient-to-r
                        from-transparent
                        via-[#C89B3C]/30
                        to-transparent
                    "
                />
                                {/* ========================= */}

                {/* PRICE */}

                {/* ========================= */}

                <div
                    className="
                        flex
                        items-end
                        justify-between
                        gap-3
                    "
                >

                    {/* Price */}

                    <div>

                        <p
                            className="
                                text-[10px]
                                font-medium
                                uppercase
                                tracking-[0.35em]
                                text-white/40
                            "
                        >
                            Starting From
                        </p>

                        <div
                            className="
                                mt-2
                                flex
                                items-end
                                gap-3
                            "
                        >

                            <span
                                className="
                                    text-[30px]
                                    font-bold
                                    leading-none
                                    tracking-tight
                                    text-[#C89B3C]
                                "
                            >
                                ₹{price?.toLocaleString()}
                            </span>

                            {comparePrice > 0 && (

                                <span
                                    className="
                                        mb-1
                                        text-sm
                                        text-white/25
                                        line-through
                                    "
                                >
                                    ₹{comparePrice.toLocaleString()}
                                </span>

                            )}

                        </div>

                    </div>

                    {/* Stock */}

                    <div
                        className={`
                            rounded-full
                            border
                            px-3
                            py-1.5
                            text-xs
                            font-medium
                            backdrop-blur-xl

                            ${
                                stock > 0
                                    ? "border-emerald-500/30 bg-emerald-500/10 text-emerald-400"
                                    : "border-red-500/30 bg-red-500/10 text-red-400"
                            }
                        `}
                    >
                        {stock > 0 ? "InStock" : "Out of Stock"}
                    </div>

                </div>

                {/* ========================= */}

                {/* BUTTON */}

                {/* ========================= */}

                <button
                    type="button"
                    className="
                        group/button
                        relative
                        mt-1
                        flex
                        h-12
                        w-full
                        items-center
                        justify-center
                        gap-3
                        overflow-hidden
                        rounded-2xl
                        border
                        border-[#C89B3C]/40
                        bg-[#C89B3C]
                        font-semibold
                        uppercase
                        tracking-[0.18em]
                        text-black
                        transition-all
                        duration-500
                        hover:scale-[1.015]
                        hover:shadow-[0_15px_45px_rgba(200,155,60,.35)]
                        active:scale-[0.98]
                    "
                >

                    {/* Shine */}

                    <span
                        className="
                            absolute
                            -left-20
                            top-0
                            h-full
                            w-14
                            -skew-x-12
                            bg-white/40
                            blur-md
                            transition-all
                            duration-1000
                            group-hover/button:left-[120%]
                        "
                    />

                    <ShoppingBag
                        size={16}
                        className="
                            relative
                            z-10
                        "
                    />

                    <span
                        className="
                            relative
                            z-10
                        "
                    >
                        Add To Cart
                    </span>

                </button>

                            </div>

            {/* ========================= */}

            {/* Bottom Golden Glow */}

            {/* ========================= */}

            <div
                className="
                    pointer-events-none
                    absolute
                    inset-x-10
                    bottom-0
                    h-px
                    bg-gradient-to-r
                    from-transparent
                    via-[#C89B3C]/70
                    to-transparent
                    opacity-0
                    transition-all
                    duration-500
                    group-hover:opacity-100
                "
            />

            {/* Outer Luxury Border */}

            <div
                className="
                    pointer-events-none
                    absolute
                    inset-0
                    rounded-[30px]
                    border
                    border-[#C89B3C]/0
                    transition-all
                    duration-500
                    group-hover:border-[#C89B3C]/20
                "
            />

            {/* Soft Corner Glow */}

            <div
                className="
                    pointer-events-none
                    absolute
                    -right-24
                    -top-24
                    h-60
                    w-60
                    rounded-full
                    bg-[#C89B3C]/10
                    blur-[120px]
                    opacity-0
                    transition-all
                    duration-700
                    group-hover:opacity-100
                "
            />

            <div
                className="
                    pointer-events-none
                    absolute
                    -left-24
                    -bottom-24
                    h-60
                    w-60
                    rounded-full
                    bg-[#C89B3C]/8
                    blur-[120px]
                    opacity-0
                    transition-all
                    duration-700
                    group-hover:opacity-100
                "
            />

        </article>

    );

}

export default FeaturedCard;