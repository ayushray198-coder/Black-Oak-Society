function BrandHeader() {
    return (
        <div className="mx-auto mb-20 max-w-5xl text-center">

            {/* Top Label */}

            <div className="flex items-center justify-center gap-5">

                <span className="h-px w-16 bg-gradient-to-r from-transparent to-[#C89B3C]" />

                <span className="text-xs font-semibold uppercase tracking-[0.55em] text-[#C89B3C]">
                    Signature Brands
                </span>

                <span className="h-px w-16 bg-gradient-to-l from-transparent to-[#C89B3C]" />

            </div>

            {/* Heading */}

            <h2 className="mt-8 font-serif text-5xl font-semibold leading-tight text-white md:text-6xl xl:text-7xl">

                Discover the Finest

                <span className="mt-3 block bg-gradient-to-r from-[#F7E7B4] via-[#D8AE52] to-[#B8860B] bg-clip-text text-transparent">
                    Luxury Collections
                </span>

            </h2>

            {/* Description */}

            <p className="mx-auto mt-8 max-w-3xl text-lg leading-9 text-zinc-400">

                Experience an exclusive collection of the world's most iconic
                luxury whisky houses. Every brand represents exceptional
                craftsmanship, timeless heritage and unmatched quality,
                carefully curated for the Black Oak Society.

            </p>

        </div>
    );
}

export default BrandHeader;