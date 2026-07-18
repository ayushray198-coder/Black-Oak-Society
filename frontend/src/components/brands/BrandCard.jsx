import { ArrowUpRight } from "lucide-react";

function BrandCard({ brand }) {
    const {
        name,
        logo,
        totalProducts,
    } = brand;

    return (
        <article
            className="
                group
                relative
                overflow-hidden
                rounded-3xl

                border
                border-white/10

                bg-white/[0.03]
                backdrop-blur-xl

                transition-all
                duration-500

                hover:-translate-y-2
                hover:border-[#C89B3C]/40
                hover:shadow-[0_20px_60px_rgba(200,155,60,.12)]
            "
        >
            {/* Golden Glow */}

            <div
                className="
                    absolute
                    inset-0
                    opacity-0
                    transition-opacity
                    duration-500

                    bg-gradient-to-br
                    from-[#C89B3C]/10
                    via-transparent
                    to-[#C89B3C]/5

                    group-hover:opacity-100
                "
            />

            {/* Content */}

            <div className="relative z-10 p-8">

                {/* Logo */}

                <div
                    className="
                        flex
                        h-24
                        items-center
                        justify-center
                        rounded-2xl

                        border
                        border-white/10

                        bg-black/30

                        transition-all
                        duration-500

                        group-hover:border-[#C89B3C]/30
                    "
                >
                    <img
                        src={logo}
                        alt={name}
                        loading="lazy"
                        className="
                            h-14
                            w-auto
                            object-contain

                            transition-transform
                            duration-500

                            group-hover:scale-110
                        "
                    />
                </div>

                {/* Name */}

                <h3
                    className="
                        mt-8

                        text-2xl
                        font-semibold

                        text-white

                        transition-colors
                        duration-300

                        group-hover:text-[#C89B3C]
                    "
                >
                    {name}
                </h3>

                {/* Products */}

                <p
                    className="
                        mt-3

                        text-sm
                        tracking-wide

                        text-zinc-400
                    "
                >
                    {totalProducts} Premium Products
                </p>

                {/* Button */}

                <button
                    className="
                        mt-8

                        inline-flex
                        items-center
                        gap-2

                        text-sm
                        font-medium

                        text-[#C89B3C]

                        transition-all
                        duration-300

                        group-hover:gap-3
                    "
                >
                    Explore Brand

                    <ArrowUpRight
                        size={18}
                        strokeWidth={1.8}
                    />
                </button>

            </div>

            {/* Bottom Border */}

            <span
                className="
                    absolute
                    bottom-0
                    left-0

                    h-[2px]
                    w-0

                    bg-[#C89B3C]

                    transition-all
                    duration-500

                    group-hover:w-full
                "
            />
        </article>
    );
}

export default BrandCard;