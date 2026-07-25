import { useState } from "react";
import {
    Heart,
    Minus,
    Plus,
    Share2,
    ShoppingBag,
} from "lucide-react";

function ProductHero({ product }) {
    const {
        name,
        brand,
        description,
        price,
        comparePrice,
        stock,
        images = [],
    } = product || {};

    const [selectedImage, setSelectedImage] = useState(0);
    const [quantity, setQuantity] = useState(1);
    const [wishlisted, setWishlisted] = useState(false);

    const gallery =
        images.length > 0
            ? images
            : [
                {
                    url: "https://placehold.co/800x1000/0B0B0B/C8A04D?text=Black+Oak",
                },
            ];

    const currentImage = gallery[selectedImage]?.url;

    return (
        <section className="relative overflow-hidden pt-36 pb-20 lg:pt-40">
            {/* Background */}

            <div className="absolute inset-0 bg-[#050505]" />

            <div className="absolute left-1/2 top-0 h-[450px] w-[450px] -translate-x-1/2 rounded-full bg-[#C8A04D]/10 blur-[180px]" />

            <div className="relative mx-auto grid max-w-7xl gap-20 px-5 lg:grid-cols-2">

                {/* LEFT */}

                <div>

                    {/* Main Image */}

                    <div
                        className="
                            relative
                            overflow-hidden
                            rounded-[36px]
                            border
                            border-[#222]
                            bg-[#0A0A0A]
                            p-8
                        "
                    >
                        <img
                            src={currentImage}
                            alt={name}
                            className="
                                mx-auto
                                h-[520px]
                                w-auto
                                object-contain
                                transition-all
                                duration-500
                            "
                        />
                    </div>

                    {/* Gallery */}

                    <div className="mt-6 flex gap-4 overflow-x-auto">

                        {gallery.map((image, index) => (
                            <button
                                key={index}
                                onClick={() =>
                                    setSelectedImage(index)
                                }
                                className={`
                                    overflow-hidden
                                    rounded-2xl
                                    border
                                    transition-all
                                    ${selectedImage === index
                                        ? "border-[#C8A04D]"
                                        : "border-[#222]"
                                    }
                                `}
                            >
                                <img
                                    src={image.url}
                                    alt={name}
                                    className="
                                        h-24
                                        w-20
                                        object-contain
                                        bg-[#0A0A0A]
                                        p-2
                                    "
                                />
                            </button>
                        ))}

                    </div>

                </div>

                {/* RIGHT */}

                <div className="flex flex-col justify-center">

                    {/* Brand */}

                    <span
                        className="
            text-xs
            uppercase
            tracking-[0.45em]
            text-[#C8A04D]
        "
                    >
                        {brand?.name}
                    </span>

                    {/* Product Name */}

                    <h3
                        className="
            mt-5
            text-4xl
            font-bold
            leading-tight
            text-white
            lg:text-6xl
        "
                    >
                        {name}
                    </h3>

                    {/* Price */}

                    <div className="mt-10 flex flex-wrap items-center gap-5">

                        <span
                            className="
                text-4xl
                font-bold
                text-[#C8A04D]
            "
                        >
                            ₹{price?.toLocaleString()}
                        </span>

                        {!!comparePrice && comparePrice > price && (
                            <span
                                className="
                    text-2xl
                    text-neutral-500
                    line-through
                "
                            >
                                ₹{comparePrice.toLocaleString()}
                            </span>
                        )}

                    </div>

                    {/* Stock */}

                    <div className="mt-8">

                        {stock > 0 ? (
                            <span
                                className="
                    inline-flex
                    items-center
                    rounded-full
                    border
                    border-emerald-500/30
                    bg-emerald-500/10
                    px-5
                    py-2.5
                    text-sm
                    font-medium
                    uppercase
                    tracking-[0.2em]
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
                    px-5
                    py-2.5
                    text-sm
                    font-medium
                    uppercase
                    tracking-[0.2em]
                    text-red-400
                "
                            >
                                Out Of Stock
                            </span>
                        )}

                    </div>

                    {/* Divider */}

                    <div className="my-10 h-px w-full bg-gradient-to-r from-transparent via-[#C8A04D]/30 to-transparent" />

                    {/* Quantity */}

                    <div className="flex flex-wrap items-center gap-6">

                        <div
                            className="
                flex
                items-center
                overflow-hidden
                rounded-2xl
                border
                border-[#2A2A2A]
                bg-[#0B0B0B]
            "
                        >

                            <button
                                onClick={() =>
                                    setQuantity((prev) => Math.max(1, prev - 1))
                                }
                                className="
                    p-5
                    transition
                    hover:bg-[#171717]
                "
                            >
                                <Minus size={18} />
                            </button>

                            <span className="w-16 text-center text-xl font-semibold">
                                {quantity}
                            </span>

                            <button
                                onClick={() =>
                                    setQuantity((prev) => prev + 1)
                                }
                                className="
                    p-5
                    transition
                    hover:bg-[#171717]
                "
                            >
                                <Plus size={18} />
                            </button>

                        </div>

                        <button
                            className="
                flex-1
                rounded-2xl
                bg-[#C8A04D]
                px-8
                py-5
                font-semibold
                text-black
                transition-all
                duration-300
                hover:scale-[1.02]
                hover:bg-[#d5af5c]
            "
                        >
                            <span className="flex items-center justify-center gap-3">
                                <ShoppingBag size={20} />
                                Add To Cart
                            </span>
                        </button>

                    </div>

                    {/* Action Buttons */}

                    <div className="mt-6 flex gap-4">

                        <button
                            onClick={() => setWishlisted((prev) => !prev)}
                            className="
                flex
                h-14
                w-14
                items-center
                justify-center
                rounded-2xl
                border
                border-[#2A2A2A]
                bg-[#0B0B0B]
                transition
                hover:border-[#C8A04D]
            "
                        >
                            <Heart
                                size={20}
                                className={
                                    wishlisted
                                        ? "fill-[#C8A04D] text-[#C8A04D]"
                                        : ""
                                }
                            />
                        </button>

                        <button
                            className="
                flex
                h-14
                w-14
                items-center
                justify-center
                rounded-2xl
                border
                border-[#2A2A2A]
                bg-[#0B0B0B]
                transition
                hover:border-[#C8A04D]
            "
                        >
                            <Share2 size={20} />
                        </button>

                    </div>

                    {/* Description */}

                    {/* <p
                        className="
            mt-10
            max-w-2xl
            text-lg
            leading-9
            text-neutral-400
        "
                    >
                        {description}
                    </p> */}


                    {/* Feature Cards */}

                    {/* <div className="mt-12 grid gap-5 sm:grid-cols-3">

                        <div
                            className="
                rounded-3xl
                border
                border-[#222]
                bg-[#0A0A0A]
                p-6
            "
                        >
                            <h3 className="text-sm font-semibold uppercase tracking-[0.25em] text-[#C8A04D]">
                                Authentic
                            </h3>

                            <p className="mt-3 text-sm leading-7 text-neutral-400">
                                Carefully curated premium collection sourced from trusted
                                distributors.
                            </p>
                        </div>

                        <div
                            className="
                rounded-3xl
                border
                border-[#222]
                bg-[#0A0A0A]
                p-6
            "
                        >
                            <h3 className="text-sm font-semibold uppercase tracking-[0.25em] text-[#C8A04D]">
                                Premium Care
                            </h3>

                            <p className="mt-3 text-sm leading-7 text-neutral-400">
                                Luxury packaging with secure handling to preserve every bottle.
                            </p>
                        </div>

                        <div
                            className="
                rounded-3xl
                border
                border-[#222]
                bg-[#0A0A0A]
                p-6
            "
                        >
                            <h3 className="text-sm font-semibold uppercase tracking-[0.25em] text-[#C8A04D]">
                                Secure Checkout
                            </h3>

                            <p className="mt-3 text-sm leading-7 text-neutral-400">
                                Protected payment experience with fast and reliable order
                                processing.
                            </p>
                        </div>

                    </div> */}

                    {/* Extra Details */}

                    {/* <div
                        className="
            mt-12
            rounded-[32px]
            border
            border-[#222]
            bg-[#0A0A0A]
            p-8
        "
                    >

                        <div className="grid gap-8 md:grid-cols-3">

                            <div>
                                <span className="text-xs uppercase tracking-[0.35em] text-[#C8A04D]">
                                    Brand
                                </span>

                                <h4 className="mt-3 text-xl font-semibold text-white">
                                    {brand?.name || "-"}
                                </h4>
                            </div>

                            <div>
                                <span className="text-xs uppercase tracking-[0.35em] text-[#C8A04D]">
                                    Availability
                                </span>

                                <h4 className="mt-3 text-xl font-semibold text-white">
                                    {stock > 0 ? "Available" : "Unavailable"}
                                </h4>
                            </div>

                            <div>
                                <span className="text-xs uppercase tracking-[0.35em] text-[#C8A04D]">
                                    Quantity
                                </span>

                                <h4 className="mt-3 text-xl font-semibold text-white">
                                    {quantity}
                                </h4>
                            </div>

                        </div>

                    </div> */}

                </div>

            </div>

        </section>
    );
}

export default ProductHero;
