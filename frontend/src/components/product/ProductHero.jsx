import { addToCart } from "../../services/cart.service";


import { useState } from "react";
import {
    Heart,
    Minus,
    Plus,
    Share2,
    ShoppingBag,
    Star,
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



   const handleAddToCart = async () => {
  try {
    const res = await addToCart({
      product: product._id,
      quantity: 1,
    });

    console.log("SUCCESS:", res);
    alert("Product added successfully");
  } catch (error) {
    console.log("ERROR:", error);
    console.log("STATUS:", error.response?.status);
    console.log("DATA:", error.response?.data);

    alert(error.response?.data?.message || "Unable to add to cart");
  }
};


    const data = [
        {
            icon: "✓",
            title: "Authentic Product",
            description:
                "100% genuine bottles sourced exclusively from trusted distributors.",
        },
        {
            icon: "🔒",
            title: "Secure Checkout",
            description:
                "Protected payments with encrypted transactions and buyer security.",
        },
        {
            icon: "📦",
            title: "Luxury Packaging",
            description:
                "Premium presentation with extra protection for every shipment.",
        },
    ]

    const [selectedImage, setSelectedImage] = useState(0);
    const [quantity, setQuantity] = useState(1);
    const [wishlisted, setWishlisted] = useState(false);

    const gallery =
        images.length > 0
            ? images
            : [
                {
                    url: "https://placehold.co/900x1100/0B0B0B/C8A04D?text=Black+Oak",
                },
            ];

    const currentImage = gallery[selectedImage]?.url;

    return (
        <section className="relative overflow-hidden pt-36 pb-24">

            {/* Background */}

            <div className="absolute inset-0 bg-[#050505]" />

            <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-[#C8A04D]/10 blur-[180px]" />

            <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-5 lg:grid-cols-[1.05fr_.95fr]">

                {/* LEFT */}

                <div>

                    {/* Main Image */}

                    <div
                        className="
                            relative
                            overflow-hidden
                            rounded-[34px]
                            border
                            border-[#222]
                            bg-[#090909]
                            p-10
                        "
                    >

                        <img
                            src={currentImage}
                            alt={name}
                            className="
                                mx-auto
                                h-[620px]
                                w-auto
                                object-contain
                                transition-all
                                duration-700
                            "
                        />

                    </div>

                    {/* Gallery */}

                    <div className="mt-6 flex justify-center gap-4">

                        {gallery.map((image, index) => (

                            <button
                                key={index}
                                onClick={() => setSelectedImage(index)}
                                className={`
                                    overflow-hidden
                                    rounded-2xl
                                    border
                                    transition-all
                                    duration-300
                                    ${selectedImage === index
                                        ? "border-[#C8A04D] shadow-[0_0_30px_rgba(200,160,77,.25)]"
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
                                        object-cover
                                        bg-[#0B0B0B]
                                    "
                                />

                            </button>

                        ))}

                    </div>

                </div>

                {/* RIGHT */}

                <div className="flex flex-col justify-center">

                    {/* Brand */}

                    <span className="text-xs font-medium uppercase tracking-[0.45em] text-[#C8A04D]">
                        {brand?.name}
                    </span>

                    {/* Product Name */}

                    <h2 className="mt-5 text-3xl font-bold leading-[1.1] text-white lg:text-7xl">
                        {name}
                    </h2>

                    {/* Tagline */}

                    <p className="mt-5 text-sm uppercase tracking-[0.35em] text-[#C8A04D]/80">
                        Crafted for the Extraordinary
                    </p>

                    {/* Short Description */}

                    <p className="mt-8 max-w-xl text-lg leading-9 text-neutral-400 line-clamp-4">
                        {description}
                    </p>

                    {/* Rating */}

                    <div className="mt-8 flex items-center gap-4">

                        <div className="flex items-center gap-1">

                            {[...Array(5)].map((_, index) => (
                                <Star
                                    key={index}
                                    size={18}
                                    fill="#C8A04D"
                                    className="text-[#C8A04D]"
                                />
                            ))}

                        </div>

                        <span className="text-sm text-neutral-400">
                            (128 Reviews)
                        </span>

                    </div>

                    {/* Price */}

                    <div className="mt-8 flex flex-wrap items-center gap-5">

                        <span className="text-5xl font-bold text-[#D8B46A]">
                            ₹{price?.toLocaleString()}
                        </span>

                        {!!comparePrice && comparePrice > price && (
                            <>
                                <span className="text-2xl text-neutral-500 line-through">
                                    ₹{comparePrice.toLocaleString()}
                                </span>

                                <span className="rounded-full border border-[#C8A04D]/20 bg-[#C8A04D]/10 px-4 py-2 text-sm font-medium text-[#D8B46A]">
                                    Save ₹{(comparePrice - price).toLocaleString()}
                                </span>
                            </>
                        )}

                    </div>

                    {/* Stock */}

                    <div className="mt-8">

                        {stock > 0 ? (
                            <span className="inline-flex items-center rounded-full border border-emerald-500/20 bg-emerald-500/10 px-5 py-2 text-sm uppercase tracking-[0.25em] text-emerald-400">
                                ● In Stock
                            </span>
                        ) : (
                            <span className="inline-flex items-center rounded-full border border-red-500/20 bg-red-500/10 px-5 py-2 text-sm uppercase tracking-[0.25em] text-red-400">
                                ● Out Of Stock
                            </span>
                        )}

                    </div>

                    {/* Divider */}

                    <div className="my-10 h-px w-full bg-gradient-to-r from-transparent via-[#C8A04D]/25 to-transparent" />

                    {/* CTA */}

                    <div className="flex flex-wrap items-center gap-5">

                        {/* Quantity */}

                        <div className="flex h-16 items-center overflow-hidden rounded-2xl border border-[#222] bg-[#0B0B0B]">

                            <button
                                onClick={() =>
                                    setQuantity((prev) => Math.max(1, prev - 1))
                                }
                                className="px-6 transition hover:bg-[#171717]"
                            >
                                <Minus size={18} />
                            </button>

                            <span className="w-16 text-center text-lg font-semibold">
                                {quantity}
                            </span>

                            <button
                                onClick={() =>
                                    setQuantity((prev) => prev + 1)
                                }
                                className="px-6 transition hover:bg-[#171717]"
                            >
                                <Plus size={18} />
                            </button>

                        </div>

                        {/* Add To Cart */}

                        <button
                            onClick={handleAddToCart}
                            className="
                flex-1
                rounded-2xl
                bg-[#D8B46A]
                px-10
                py-5
                font-semibold
                text-black
                transition-all
                duration-300
                hover:scale-[1.02]
            "
                        >
                            <span className="flex items-center justify-center gap-3">
                                <ShoppingBag size={20} />
                                Add To Cart
                            </span>
                        </button>

                    </div>

                    {/* Actions */}

                    <div className="mt-6 flex gap-4">

                        <button
                            onClick={() => setWishlisted(!wishlisted)}
                            className="flex h-14 w-14 items-center justify-center rounded-2xl border border-[#222] bg-[#0B0B0B] transition hover:border-[#D8B46A]"
                        >
                            <Heart
                                size={20}
                                className={
                                    wishlisted
                                        ? "fill-[#D8B46A] text-[#D8B46A]"
                                        : ""
                                }
                            />
                        </button>

                        <button
                            className="flex h-14 items-center gap-3 rounded-2xl border border-[#222] bg-[#0B0B0B] px-6 transition hover:border-[#D8B46A]"
                        >
                            <Share2 size={18} />
                            Share Product
                        </button>

                    </div>

                </div>

                {/* Luxury Info Strip */}


            </div>
            <div className="mt-24 mx-auto grid max-w-6xl gap-6 lg:grid-cols-3">

                {data.map((item) => (
                    <div
                        key={item.title}
                        className="
                group
                relative
                flex
                items-center
                gap-5
                overflow-hidden
                rounded-[24px]
                border
                border-[#262626]
                bg-[#0C0C0C]
                px-6
                py-5
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-[#C8A04D]/35
                hover:shadow-[0_12px_35px_rgba(200,160,77,.08)]
            "
                    >

                        {/* Glow */}

                        <div
                            className="
                    absolute
                    -right-10
                    -top-10
                    h-28
                    w-28
                    rounded-full
                    bg-[#C8A04D]/10
                    blur-3xl
                    opacity-0
                    transition-all
                    duration-500
                    group-hover:opacity-100
                "
                        />

                        {/* Icon */}

                        <div
                            className="
                    flex
                    h-14
                    w-14
                    shrink-0
                    items-center
                    justify-center
                    rounded-2xl
                    border
                    border-[#C8A04D]/20
                    bg-[#C8A04D]/10
                    text-xl
                "
                        >
                            {item.icon}
                        </div>

                        {/* Content */}

                        <div className="min-w-0 flex-1">

                            <h5
                                className="
                        truncate
                        text-xl
                        font-semibold
                        text-white
                    "
                            >
                                {item.title}
                            </h5>

                            <div className="mt-2 h-px w-10 bg-[#C8A04D]" />

                            <p
                                className="
                        mt-3
                        line-clamp-2
                        text-sm
                        leading-6
                        text-neutral-400
                    "
                            >
                                {item.description}
                            </p>

                        </div>

                    </div>
                ))}

            </div>




        </section>
    );
}

export default ProductHero;