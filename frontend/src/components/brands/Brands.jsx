import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import BrandCard from "./BrandCard";
import BrandHeader from "./BrandHeader";
import BrandSkeleton from "./BrandSkeleton";
import useBrands from "../../hooks/useBrands";

function Brands() {
    const { brands, loading, error } = useBrands();

    const [activeIndex, setActiveIndex] = useState(0);

    if (loading) {
        return (
            <section className="bg-[#060606] py-20 md:py-28">
                <div className="container mx-auto px-6">
                    <BrandHeader />

                    <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
                        {Array.from({ length: 3 }).map((_, index) => (
                            <BrandSkeleton key={index} />
                        ))}
                    </div>
                </div>
            </section>
        );
    }

    if (error) {
        return (
            <section className="bg-[#060606] py-20 md:py-28">
                <div className="container mx-auto px-6">
                    <BrandHeader />

                    <div className="mt-20 rounded-3xl border border-red-500/20 bg-red-500/5 p-10 text-center">
                        <h2 className="text-2xl font-semibold text-white">
                            Unable to load brands
                        </h2>

                        <p className="mt-4 text-zinc-400">
                            {error}
                        </p>
                    </div>
                </div>
            </section>
        );
    }

    if (!brands?.length) {
        return (
            <section className="bg-[#060606] py-20 md:py-28">
                <div className="container mx-auto px-6">
                    <BrandHeader />

                    <div className="mt-20 rounded-3xl border border-white/10 bg-white/5 p-10 text-center">
                        <h2 className="text-2xl font-semibold text-white">
                            No Brands Found
                        </h2>

                        <p className="mt-4 text-zinc-400">
                            Luxury brands will appear here once available.
                        </p>
                    </div>
                </div>
            </section>
        );
    }

    return (
        <section
            id="brands"
            className="relative overflow-hidden bg-[#060606] py-20 md:py-28"
        >

            <div
                className="
                    absolute
                    left-1/2
                    top-0
                    h-[520px]
                    w-[520px]
                    -translate-x-1/2
                    rounded-full
                    bg-[#C89B3C]/10
                    blur-[180px]
                "
            />

            <div className="container relative z-10 mx-auto px-6">

                <BrandHeader />

                <div className="relative mt-10 md:mt-16 px-0 sm:px-8 lg:px-14 xl:px-24 pt-4 md:pt-8">
                    <Swiper
                        modules={[Pagination]}
                        pagination={{
                            clickable: true,
                        }}
                        slidesPerView={1}
                        spaceBetween={20}
                        centeredSlides={false}
                        loop={true}
                        grabCursor={true}
                        onSlideChange={(swiper) => {
                            setActiveIndex(swiper.realIndex);
                        }}
                        breakpoints={{
                            0: {
                                slidesPerView: 1,
                                spaceBetween: 18,
                            },
                            640: {
                                slidesPerView: 1.2,
                                spaceBetween: 22,
                            },
                            768: {
                                slidesPerView: 2,
                                spaceBetween: 24,
                            },
                            1280: {
                                slidesPerView: 3,
                                spaceBetween: 30,
                            },
                        }}
                    >

                        {brands.map((brand) => (
                            <SwiperSlide key={brand._id}>
                                <BrandCard brand={brand} />
                            </SwiperSlide>
                        ))}

                    </Swiper>
                    {/* ================= PROGRESS LINE ================= */}

                    <div className="relative mt-12">

                        <div className="h-px w-full bg-white/10" />

                        <div
                            className="
            absolute
            left-1/2
            top-0
            h-px
            w-28
            -translate-x-1/2
            bg-[#C89B3C]

            md:w-40
        "
                        />

                    </div>

                    {/* ================= FEATURES ================= */}

                    <div className="mt-16 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">

                        {[
                            {
                                title: "Finest Quality",
                                text: "Carefully selected premium bottles from the world's most celebrated distilleries.",
                            },
                            {
                                title: "Expertly Curated",
                                text: "Collections handpicked for collectors and true whisky enthusiasts.",
                            },
                            {
                                title: "Secure Delivery",
                                text: "Luxury packaging with safe and reliable delivery across India.",
                            },
                            {
                                title: "Member Privileges",
                                text: "Exclusive launches, early access and premium member rewards.",
                            },
                        ].map((item) => (

                            <div
                                key={item.title}
                                className="
                rounded-3xl
                border
                border-white/10
                bg-white/5

                p-5

                transition-all
                duration-500

                hover:-translate-y-2
                hover:border-[#C89B3C]/40
                hover:bg-white/[0.07]

                md:p-7
            "
                            >

                                <div className="mb-5 h-[2px] w-12 bg-[#C89B3C]" />

                                <h3
                                    className="
                    text-xl
                    font-semibold
                    text-white

                    md:text-2xl
                "
                                >
                                    {item.title}
                                </h3>

                                <p
                                    className="
                    mt-4
                    text-sm
                    leading-7
                    text-zinc-400
                "
                                >
                                    {item.text}
                                </p>

                            </div>

                        ))}

                    </div>

                    {/* ================= BOTTOM CTA ================= */}

                    <div className="mt-20 text-center">
                        <span
                            className="
        text-xs
        uppercase
        tracking-[0.3em]
        text-[#C89B3C]
    "
                        >
                            Luxury Without Compromise
                        </span>

                        <h2
                            className="
        mx-auto
        mt-5
        max-w-3xl
        px-4

        text-3xl
        font-light
        leading-tight
        text-white

        md:text-5xl
    "
                        >
                            Discover the world's most iconic whisky houses.
                        </h2>

                        <p
                            className="
        mx-auto
        mt-5
        max-w-2xl
        px-4

        text-sm
        leading-7
        text-zinc-400

        md:text-base
    "
                        >
                            Every bottle represents generations of craftsmanship,
                            heritage and timeless luxury.
                        </p>

                        <button
                            className="
        mt-8
        rounded-full
        border
        border-[#C89B3C]

        px-6
        py-3

        text-sm
        font-semibold
        uppercase
        tracking-[0.25em]

        text-[#C89B3C]

        transition-all
        duration-500

        hover:bg-[#C89B3C]
        hover:text-black
        hover:shadow-[0_0_40px_rgba(200,155,60,0.35)]

        md:px-8
    "
                        >
                            Explore Collection
                        </button>

                    </div>
                </div>

            </div>

        </section>
    );
}

export default Brands;