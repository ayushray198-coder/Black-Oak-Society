import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

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
        <section className="relative overflow-hidden bg-[#050505] py-16 sm:py-20 lg:py-28">

            {/* Premium Top Glow */}
            <div className="pointer-events-none absolute inset-x-0 top-0 h-72 bg-[radial-gradient(ellipse_at_top,rgba(200,155,60,0.12),rgba(200,155,60,0.05)_35%,transparent_75%)]" />

            {/* Vignette */}
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_45%,rgba(0,0,0,0.25)_100%)]" />

            <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">

                <BrandHeader />

                {/* Loading */}
                {loading && (
                    <div className="mt-12 grid grid-cols-1 justify-items-center gap-6 sm:mt-16 sm:grid-cols-2 lg:gap-8 xl:grid-cols-3">
                        {Array.from({ length: 3 }).map((_, index) => (
                            <BrandSkeleton key={index} />
                        ))}
                    </div>
                )}

                {/* Error */}
                {!loading && error && (
                    <div className="mx-auto mt-12 max-w-2xl rounded-3xl border border-red-500/20 bg-red-500/5 px-6 py-10 text-center sm:mt-16 sm:px-8 sm:py-12">

                        <h3 className="text-2xl font-semibold text-white sm:text-3xl">
                            Unable to Load Brands
                        </h3>

                        <p className="mt-4 text-sm text-zinc-400 sm:mt-5 sm:text-base">
                            {error}
                        </p>

                    </div>
                )}

                {/* Brands */}
                {!loading && !error && brands.length > 0 && (
                    <>
                        <div className="mt-12 grid grid-cols-1 justify-items-center gap-6 sm:mt-16 sm:grid-cols-2 lg:gap-8 xl:grid-cols-3">

                            {brands.map((brand, index) => (
                                <BrandCard
                                    key={brand._id}
                                    brand={brand}
                                    featured={index === 0}
                                />
                            ))}

                        </div>
                                                {/* Bottom CTA */}
                        <div className="mt-20 flex flex-col items-center">

                            {/* Small Heading */}
                            <span className="mb-5 text-xs font-medium uppercase tracking-[0.45em] text-zinc-500">
                                Discover Every Legacy
                            </span>

                            {/* Explore Button */}
                            <Link
                                to="/brands"
                                className="group relative overflow-hidden rounded-full border border-[#C89B3C]/30 bg-white/[0.02] px-8 py-4 backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:border-[#C89B3C] hover:shadow-[0_0_45px_rgba(200,155,60,.18)]"
                            >

                                {/* Gold Glow */}
                                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-[#C89B3C]/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                                <span className="relative flex items-center gap-4">

                                    <span className="text-sm font-medium uppercase tracking-[0.30em] text-[#C89B3C]">
                                        Explore All Brands
                                    </span>

                                    <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[#C89B3C] transition-all duration-500 group-hover:rotate-45 group-hover:bg-[#C89B3C] group-hover:text-black">
                                        <ArrowRight size={16} />
                                    </span>

                                </span>

                            </Link>

                        </div>

                    </>
                )}
                                {/* Empty */}
                {!loading && !error && brands.length === 0 && (
                    <div className="mx-auto mt-12 max-w-2xl rounded-3xl border border-white/10 bg-white/[0.03] px-6 py-12 text-center sm:mt-16 sm:px-10 sm:py-16">

                        <h3 className="text-2xl font-semibold text-white sm:text-3xl">
                            No Brands Found
                        </h3>

                        <p className="mt-4 text-sm text-zinc-400 sm:mt-5 sm:text-base">
                            There are currently no premium brands available.
                        </p>

                    </div>
                )}

            </div>

        </section>
    );
}

export default Brands;