import { useMemo, useRef, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";

import BrandCard from "./BrandCard";
import BrandHeader from "./BrandHeader";
import BrandSkeleton from "./BrandSkeleton";
import useBrands from "../../hooks/useBrands";

function Brands() {
    const { brands, loading, error } = useBrands();

    const prevRef = useRef(null);
    const nextRef = useRef(null);

    const [swiper, setSwiper] = useState(null);
    const [activeIndex, setActiveIndex] = useState(0);

    const totalSlides = brands?.length || 0;


    if (loading) {
        return (
            <section className="bg-[#060606] py-28">
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
            <section className="bg-[#060606] py-28">
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
            <section className="bg-[#060606] py-28">
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
            className="relative overflow-hidden bg-[#060606] py-28"
        >
            <div className="absolute left-1/2 top-0 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-[#C89B3C]/10 blur-[180px]" />

            <div className="container relative z-10 mx-auto px-6">

                <BrandHeader />
                {/* Left */}
                <button
                    ref={prevRef}
                    className="absolute left-[-70px] top-[44%] z-30 -translate-y-1/2 flex h-14 w-14 items-center justify-center rounded-full border border-[#C89B3C]/40 bg-black/80 backdrop-blur-md transition-all hover:scale-110"
                >
                    <ArrowLeft className="text-[#C89B3C]" />
                </button>

                {/* Right */}
                <button
                    ref={nextRef}
                    className="absolute right-[-70px] top-[44%] z-30 -translate-y-1/2 flex h-14 w-14 items-center justify-center rounded-full border border-[#C89B3C]/40 bg-black/80 backdrop-blur-md transition-all hover:scale-110"
                >
                    <ArrowRight className="text-[#C89B3C]" />
                </button>

                <div className="relative mt-16 px-20 pt-8">
                    {/* Left Arrow */}

                    {/* Left */}


                    <Swiper
                        modules={[Navigation]}
                        slidesPerView={3}
                        spaceBetween={30}
                        centeredSlides={false}
                        loop={true}
                        grabCursor={true}
                        navigation={{
                            prevEl: prevRef.current,
                            nextEl: nextRef.current,
                        }}
                        onBeforeInit={(swiper) => {
                            swiper.params.navigation.prevEl = prevRef.current;
                            swiper.params.navigation.nextEl = nextRef.current;
                        }}
                        onSwiper={setSwiper}
                        onSlideChange={(swiper) =>
                            setActiveIndex(swiper.activeIndex)
                        }
                        breakpoints={{
                            640: {
                                slidesPerView: 1.2,
                            },
                            768: {
                                slidesPerView: 2,
                            },
                            1024: {
                                slidesPerView: 2.5,
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
                    {/* Progress */}

                    {/* <div className="mt-10">

                        <div className="h-[2px] w-full overflow-hidden rounded-full bg-zinc-800">

                            <div
                                className="h-full bg-[#C89B3C] transition-all duration-500"
                                style={{ width: `${progress}%` }}
                            />

                        </div>

                        <div className="mt-4 flex items-center justify-between text-xs">

                            <span className="uppercase tracking-[0.3em] text-zinc-500">
                                Premium Collection
                            </span>

                            <span className="font-semibold text-[#C89B3C]">
                                {String(activeIndex + 1).padStart(2, "0")} /
                                {String(totalSlides).padStart(2, "0")}
                            </span>

                        </div>

                    </div> */}

                    <div className="mt-10 relative">
                        <div className="h-px w-full bg-white/10" />
                        <div className="absolute left-1/2 top-0 h-px w-40 -translate-x-1/2 bg-[#C89B3C]" />
                    </div>

                    {/* Features */}

                    <div className="mt-20 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">

                        {[
                            {
                                title: "Finest Quality",
                                text: "Carefully selected premium bottles."
                            },
                            {
                                title: "Expertly Curated",
                                text: "Collections made for whisky lovers."
                            },
                            {
                                title: "Secure Delivery",
                                text: "Safe packaging across India."
                            },
                            {
                                title: "Member Privileges",
                                text: "Exclusive launches and rewards."
                            }
                        ].map((item) => (

                            <div
                                key={item.title}
                                className="rounded-3xl border border-white/10 bg-white/5 p-7 transition hover:border-[#C89B3C]/40"
                            >

                                <div className="mb-5 h-[2px] w-12 bg-[#C89B3C]" />

                                <h3 className="text-2xl font-semibold text-white">
                                    {item.title}
                                </h3>

                                <p className="mt-4 text-sm leading-7 text-zinc-400">
                                    {item.text}
                                </p>

                            </div>

                        ))}

                    </div>
                    {/* Bottom CTA */}

                    <div className="mt-24 text-center">

                        <span className="text-xs uppercase tracking-[0.3em] text-[#C89B3C]">
                            Luxury Without Compromise
                        </span>

                        <h2 className="mx-auto mt-5 max-w-3xl text-4xl font-light text-white md:text-5xl">
                            Discover the world's most iconic whisky houses.
                        </h2>

                        <p className="mx-auto mt-5 max-w-2xl text-zinc-400 leading-7">
                            Every bottle represents generations of craftsmanship,
                            heritage and timeless luxury.
                        </p>

                        <button
                            className="mt-8 rounded-full border border-[#C89B3C] px-8 py-3 text-sm font-semibold uppercase tracking-[0.25em] text-[#C89B3C] transition hover:bg-[#C89B3C] hover:text-black"
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