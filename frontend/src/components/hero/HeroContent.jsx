function HeroContent({
    align = "left",
    showParagraph = true,
    showButtons = true,
}) {
    const isCenter = align === "center";

    return (
        <div
            className={`w-full max-w-xl ${
                isCenter ? "mx-auto text-center" : "text-left"
            }`}
        >
            {/* Premium Collection */}

            <p
                className="
                    mb-5
                    text-xs
                    font-semibold
                    uppercase
                    tracking-[0.45em]
                    text-[#C89B3C]
                    sm:text-sm
                "
            >
                Premium Whisky Collection
            </p>

            {/* Heading */}

            <h1
                className="
                    font-bold
                    leading-[0.9]
                    text-4xl
                    sm:text-5xl
                    md:text-6xl
                    lg:text-7xl
                    xl:text-8xl
                "
            >
                Crafted
                <br />
                for the
                <br />
                <span className="text-[#C89B3C]">
                    Extraordinary.
                </span>
            </h1>

            {/* Paragraph */}

            {showParagraph && (
                <p
                    className={`
                        mt-8
                        max-w-lg
                        text-sm
                        leading-7
                        text-gray-300

                        sm:text-base
                        sm:leading-8

                        ${isCenter ? "mx-auto" : ""}
                    `}
                >
                    Experience timeless luxury with handcrafted premium
                    spirits. Every bottle is designed for those who
                    appreciate elegance, refinement and unforgettable
                    taste.
                </p>
            )}

            {/* Buttons */}

            {showButtons && (
                <div
                    className={`
                        mt-10
                        flex
                        flex-col
                        gap-4

                        sm:flex-row

                        ${
                            isCenter
                                ? "justify-center"
                                : "justify-start"
                        }
                    `}
                >
                    <button
                        className="
                            rounded-full
                            bg-[#C89B3C]
                            px-9
                            py-4
                            font-semibold
                            text-black
                            transition-all
                            duration-300
                            hover:scale-105
                            hover:shadow-[0_0_40px_rgba(200,155,60,.45)]
                        "
                    >
                        Explore Collection
                    </button>

                    <button
                        className="
                            rounded-full
                            border
                            border-[#C89B3C]
                            px-9
                            py-4
                            transition-all
                            duration-300
                            hover:bg-[#C89B3C]
                            hover:text-black
                        "
                    >
                        Our Story
                    </button>
                </div>
            )}
        </div>
    );
}

export default HeroContent;