function FeaturedNavigation({
    swiper,
    activeIndex,
    totalSlides,
}) {
    return (
        <div className="mt-12 flex justify-center lg:hidden">
            <div className="flex items-center gap-3">

                {Array.from({ length: totalSlides }).map((_, index) => (
                    <button
                        key={index}
                        type="button"
                        onClick={() => swiper?.slideTo(index)}
                        aria-label={`Go to slide ${index + 1}`}
                        className={`
                            rounded-full
                            transition-all
                            duration-500
                            ease-out

                            ${
                                activeIndex === index
                                    ? "h-3 w-10 bg-[#C89B3C] shadow-[0_0_18px_rgba(200,155,60,.45)]"
                                    : "h-3 w-3 bg-white/20 hover:bg-white/50 hover:scale-110"
                            }
                        `}
                    />
                ))}

            </div>
        </div>
    );
}

export default FeaturedNavigation;