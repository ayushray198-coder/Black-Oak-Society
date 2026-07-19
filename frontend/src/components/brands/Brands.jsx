import BrandCard from "./BrandCard";
import BrandHeader from "./BrandHeader";
import BrandSkeleton from "./BrandSkeleton";

import useBrands from "../../hooks/useBrands";

function Brands() {
    const {
        brands,
        loading,
        error,
    } = useBrands();

    return (
        <section className="relative overflow-hidden py-24 lg:py-32">

            {/* Background */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(200,155,60,.12),transparent_45%)]" />

            <div className="absolute left-1/2 top-0 h-[550px] w-[550px] -translate-x-1/2 rounded-full bg-[#C89B3C]/5 blur-[170px]" />

            <div className="container relative z-10">

                <BrandHeader />

                {/* Loading */}

                {loading && (
                    <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
                        {Array.from({ length: 3 }).map((_, index) => (
                            <BrandSkeleton key={index} />
                        ))}
                    </div>
                )}

                {/* Error */}

                {!loading && error && (
                    <div className="mx-auto mt-16 max-w-2xl rounded-3xl border border-red-500/20 bg-red-500/5 px-8 py-12 text-center">

                        <h3 className="text-3xl font-semibold text-white">
                            Unable to Load Brands
                        </h3>

                        <p className="mt-5 text-zinc-400">
                            {error}
                        </p>

                    </div>
                )}

                {/* Brands */}

                {!loading && !error && brands.length > 0 && (
                    <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

                        {brands.map((brand, index) => (
                            <BrandCard
                                key={brand._id}
                                brand={brand}
                                featured={index === 0}
                            />
                        ))}

                    </div>
                )}

                {/* Empty */}

                {!loading && !error && brands.length === 0 && (
                    <div className="mx-auto mt-16 max-w-2xl rounded-3xl border border-white/10 bg-white/[0.03] px-10 py-16 text-center">

                        <h3 className="text-3xl font-semibold text-white">
                            No Brands Found
                        </h3>

                        <p className="mt-5 text-zinc-400">
                            There are currently no premium brands available.
                        </p>

                    </div>
                )}

            </div>

        </section>
    );
}

export default Brands;