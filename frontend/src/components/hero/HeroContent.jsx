function HeroContent({
    align = "left",
    showParagraph = true,
    showButtons = true,
}) {
    const isCenter = align === "center";

    const wrapperClass = isCenter
        ? "mx-auto text-center"
        : "text-left";

    const paragraphClass = isCenter
        ? "mx-auto"
        : "";

    const buttonWrapperClass = isCenter
        ? "justify-center"
        : "justify-start";

    return (
        <div className={`w-full max-w-[620px] ${wrapperClass}`}>

            {/* Eyebrow */}

            <p
                className="mb-6 text-xs font-semibold uppercase tracking-[0.38em] text-[#C89B3C] sm:text-sm"
            >
                Rare Craft. Timeless Legacy.
            </p>

            {/* Heading */}

            <h1
                className="font-serif text-5xl font-bold uppercase leading-[0.9] sm:text-6xl md:text-7xl lg:text-[82px] xl:text-[92px]"
            >
                Experience
                <br />

                <span className="text-[#C89B3C]">
                    True Luxury
                </span>
            </h1>

            {/* Paragraph */}

            {showParagraph && (
                <p
                    className={`mt-8 max-w-[480px] text-[16px] leading-8 text-gray-300 ${paragraphClass}`}
                >
                    Discover the world's finest luxury spirits,
                    curated for those who appreciate perfection.
                </p>
            )}

            {/* CTA */}

            {showButtons && (
                <div
                    className={`mt-10 flex flex-col gap-4 sm:flex-row ${buttonWrapperClass}`}
                >
                    <button
                        type="button"
                        className="rounded-xl bg-[#C89B3C] px-10 py-4 font-semibold text-black transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(200,155,60,.45)] focus:outline-none focus:ring-2 focus:ring-[#C89B3C] focus:ring-offset-2 focus:ring-offset-black"
                    >
                        Explore Collection
                    </button>

                    <button
                        type="button"
                        className="rounded-xl border border-[#C89B3C] px-10 py-4 text-white transition-all duration-300 hover:bg-[#C89B3C] hover:text-black focus:outline-none focus:ring-2 focus:ring-[#C89B3C] focus:ring-offset-2 focus:ring-offset-black"
                    >
                        Our Story
                    </button>
                </div>
            )}
        </div>
    );
}

export default HeroContent;