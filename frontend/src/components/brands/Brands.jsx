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
        <section
            className="
                relative
                overflow-hidden

                py-24

                lg:py-32
            "
        >
            {/* Background Glow */}

            <div
                className="
                    pointer-events-none
                    absolute
                    left-1/2
                    top-0

                    h-[500px]
                    w-[500px]

                    -translate-x-1/2

                    rounded-full

                    bg-[#C89B3C]/5

                    blur-[180px]
                "
            />

            <div className="container relative z-10">

                <BrandHeader />

                {/* Loading */}

                {loading && (
                    <div
                        className="
                            grid
                            gap-8

                            sm:grid-cols-2
                            lg:grid-cols-3
                            xl:grid-cols-4
                        "
                    >
                        {Array.from({ length: 8 }).map((_, index) => (
                            <BrandSkeleton key={index} />
                        ))}
                    </div>
                )}

                {/* Error */}

                {!loading && error && (
                    <div
                        className="
                            rounded-3xl

                            border
                            border-red-500/20

                            bg-red-500/5

                            px-8
                            py-10

                            text-center
                        "
                    >
                        <h3
                            className="
                                text-2xl
                                font-semibold

                                text-white
                            "
                        >
                            Unable to Load Brands
                        </h3>

                        <p
                            className="
                                mt-4

                                text-zinc-400
                            "
                        >
                            {error}
                        </p>
                    </div>
                )}

                {/* Success */}

                {!loading && !error && (
                    <>
                        {brands.length > 0 ? (
                            <div
                                className="
                                    grid
                                    gap-8

                                    sm:grid-cols-2
                                    lg:grid-cols-3
                                    xl:grid-cols-4
                                "
                            >
                                {brands.map((brand) => (
                                    <BrandCard
                                        key={brand._id}
                                        brand={brand}
                                    />
                                ))}
                            </div>
                        ) : (
                            <div
                                className="
                                    rounded-3xl

                                    border
                                    border-white/10

                                    bg-white/[0.03]

                                    px-8
                                    py-16

                                    text-center
                                "
                            >
                                <h3
                                    className="
                                        text-2xl
                                        font-semibold

                                        text-white
                                    "
                                >
                                    No Brands Found
                                </h3>

                                <p
                                    className="
                                        mt-4

                                        text-zinc-400
                                    "
                                >
                                    There are currently no brands available.
                                </p>
                            </div>
                        )}
                    </>
                )}

            </div>
        </section>
    );
}

export default Brands;