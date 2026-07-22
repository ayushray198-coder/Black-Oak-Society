function FeaturedHeader() {
    return (
        <div className="flex flex-col items-center">

            {/* Luxury Ornament */}

            <div className="flex w-full max-w-sm items-center justify-center gap-4">

                <span className="h-px flex-1 bg-gradient-to-r from-transparent to-[#C89B3C]/50" />

                <div className="flex h-11 w-11 items-center justify-center rounded-full border border-[#C89B3C]/30 bg-[#C89B3C]/10 backdrop-blur-xl">

                    <div className="h-2.5 w-2.5 rotate-45 rounded-[2px] bg-[#C89B3C]" />

                </div>

                <span className="h-px flex-1 bg-gradient-to-l from-transparent to-[#C89B3C]/50" />

            </div>

            {/* Subtitle */}

            <span className="mt-8 text-[11px] font-semibold uppercase tracking-[0.55em] text-[#C89B3C] sm:text-xs">
                Handpicked For You
            </span>

            {/* Heading */}

            <h2
                id="featured-collection-heading"
                className="mt-5 max-w-5xl text-center font-serif text-4xl font-semibold uppercase leading-[1.08] tracking-wide text-white sm:text-5xl lg:text-6xl xl:text-7xl"
            >
                Featured <span className="text-[#C89B3C]">Collection</span>
            </h2>

            {/* Description */}

            <p className="mt-7 max-w-3xl text-center text-sm leading-8 text-white/65 sm:text-base lg:text-lg">
                Discover an exceptional collection of world-renowned whiskies,
                thoughtfully curated for collectors, enthusiasts and those who
                appreciate timeless craftsmanship and refined taste.
            </p>

        </div>
    );
}

export default FeaturedHeader;