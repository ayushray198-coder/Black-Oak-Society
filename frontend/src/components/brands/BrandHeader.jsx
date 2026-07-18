function BrandHeader() {
    return (
        <div
            className="
                mx-auto
                mb-16
                max-w-4xl
                text-center
            "
        >
            {/* Small Label */}

            <span
                className="
                    inline-flex
                    items-center
                    gap-3

                    text-xs
                    font-semibold
                    uppercase
                    tracking-[0.45em]

                    text-[#C89B3C]
                "
            >
                <span className="h-px w-10 bg-[#C89B3C]/60" />

                Signature Brands

                <span className="h-px w-10 bg-[#C89B3C]/60" />
            </span>

            {/* Heading */}

            <h2
                className="
                    mt-6

                    font-serif
                    font-semibold
                    leading-tight
                    text-white

                    text-4xl

                    sm:text-5xl

                    lg:text-6xl
                "
            >
                Discover the Finest
                <span className="block text-[#C89B3C]">
                    Luxury Collections
                </span>
            </h2>

            {/* Description */}

            <p
                className="
                    mx-auto
                    mt-8
                    max-w-2xl

                    text-base
                    leading-8

                    text-zinc-400

                    sm:text-lg
                "
            >
                Explore a carefully curated selection of globally celebrated
                brands, crafted with exceptional heritage, timeless quality,
                and uncompromising excellence. Every bottle reflects the
                luxury and sophistication that define Black Oak Society.
            </p>
        </div>
    );
}

export default BrandHeader;