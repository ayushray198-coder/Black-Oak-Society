function ShopBanner() {
    return (
        <section className="relative overflow-hidden border-y border-[#C8A04D]/15 bg-[#050505]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(200,160,77,.18),transparent_65%)]" />
            <div className="absolute left-1/2 top-0 h-px w-72 -translate-x-1/2 bg-gradient-to-r from-transparent via-[#C8A04D] to-transparent" />

            <div className="relative mx-auto flex min-h-[52vh] max-w-7xl flex-col items-center justify-center px-6 py-20 text-center">

                {/* Editorial Label */}

                <div className="mb-8 flex w-full max-w-lg items-center justify-center gap-4">
                    <span className="h-px flex-1 bg-gradient-to-r from-transparent via-[#C8A04D]/70 to-[#C8A04D]" />

                    <span className="font-serif italic text-xs uppercase tracking-[0.5em] text-[#D8B46A]">
                        ✦ Curated Selection ✦
                    </span>

                    <span className="h-px flex-1 bg-gradient-to-l from-transparent via-[#C8A04D]/70 to-[#C8A04D]" />
                </div>

                {/* Heading */}

                <h1 className="font-serif text-4xl font-semibold uppercase leading-none tracking-[0.12em] text-white sm:text-5xl md:text-6xl lg:text-7xl">
                    THE{" "}
                    <span className="bg-gradient-to-r from-[#F8E7AE] via-[#D8B46A] to-[#9C6A17] bg-clip-text text-transparent">
                        COLLECTION
                    </span>
                </h1>

                {/* Divider */}

                <div className="my-8 flex items-center gap-4">
                    <span className="h-px w-16 bg-gradient-to-r from-transparent to-[#C8A04D]" />
                    <div className="h-2 w-2 rotate-45 bg-[#C8A04D]" />
                    <span className="h-px w-16 bg-gradient-to-l from-transparent to-[#C8A04D]" />
                </div>

                {/* Description */}

                <p className="max-w-2xl text-sm leading-8 text-white/70 sm:text-base md:text-lg">
                    Discover an exclusive collection of the world's finest
                    whisky, rum, gin, vodka and luxury spirits—crafted for
                    those who appreciate timeless elegance.
                </p>

                {/* Breadcrumb */}

                <div className="mt-10 flex items-center gap-3 text-xs uppercase tracking-[0.35em]">
                    <span className="text-[#C8A04D]">Home</span>

                    <span className="h-px w-8 bg-[#C8A04D]/40" />

                    <span className="text-white">Collection</span>
                </div>
            </div>
        </section>
    );
}

export default ShopBanner;