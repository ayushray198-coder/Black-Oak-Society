import { useState } from "react";
import { Keyboard, Mousewheel } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

import FeaturedCard from "./FeaturedCard";
import FeaturedNavigation from "./FeaturedNavigation";
import useFeaturedProducts from "../../hooks/useFeaturedProducts";

function FeaturedSlider() {
    const [swiper, setSwiper] = useState(null);
    const [activeIndex, setActiveIndex] = useState(0);

    const {
        products,
        loading,
        error,
        refetch,
    } = useFeaturedProducts();

    if (loading) {
        return (
            <div className="flex min-h-[500px] items-center justify-center">
                <div className="flex flex-col items-center gap-5">

                    <div className="h-14 w-14 animate-spin rounded-full border-2 border-white/10 border-t-[#C89B3C]" />

                    <p className="text-sm uppercase tracking-[0.35em] text-white/60">
                        Loading Collection...
                    </p>

                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="flex min-h-[500px] items-center justify-center">

                <div className="flex max-w-md flex-col items-center rounded-3xl border border-red-500/20 bg-red-500/5 p-8 text-center backdrop-blur-xl">

                    <h3 className="text-xl font-semibold text-white">
                        Failed to load collection
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-white/60">
                        {error}
                    </p>

                    <button
                        type="button"
                        onClick={refetch}
                        className="mt-8 rounded-full border border-[#C89B3C]/40 bg-[#C89B3C] px-6 py-3 text-sm font-semibold uppercase tracking-[0.25em] text-black transition-all duration-300 hover:scale-105 hover:shadow-[0_12px_35px_rgba(200,155,60,0.35)]"
                    >
                        Try Again
                    </button>

                </div>

            </div>
        );
    }

    if (!products.length) {
        return (
            <div className="flex min-h-[500px] items-center justify-center">

                <div className="text-center">

                    <h3 className="text-2xl font-semibold text-white">
                        No Featured Products
                    </h3>

                    <p className="mt-4 text-white/60">
                        Featured products will appear here once available.
                    </p>

                </div>

            </div>
        );
    }

    return (
        <div className="relative w-full overflow-hidden ">

            <Swiper
                modules={[Keyboard, Mousewheel]}
                onSwiper={setSwiper}
                onSlideChange={(swiperInstance) =>
                    setActiveIndex(swiperInstance.realIndex)
                }
                keyboard={{
                    enabled: true,
                }}
                mousewheel={{
                    forceToAxis: true,
                }}
                watchOverflow
                speed={900}
                spaceBetween={28}
                slidesPerView={1}
                centeredSlides={false}
                slidesOffsetBefore={0}
                slidesOffsetAfter={0}
                breakpoints={{
                    640: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 24,
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 28,
                    },
                    1536: {
                        slidesPerView: 4,
                        spaceBetween: 28,
                    },
                }}
                className="!overflow-hidden !pb-8"
            >
                {products.map((product) => (
                    <SwiperSlide
                        key={product._id || product.id}
                        className="h-auto"
                    >
                        <FeaturedCard product={product} />
                    </SwiperSlide>
                ))}
            </Swiper>

            <div className="mt-10 flex justify-center">
                <FeaturedNavigation
                    swiper={swiper}
                    activeIndex={activeIndex}
                    totalSlides={products.length}
                />
            </div>

        </div>
    );
}

export default FeaturedSlider;