import { ArrowRight } from "lucide-react";
import story from "./storyData";

function StoryContent() {
    return (
        <div
            className="
                story-content
                relative
                mx-auto
                max-w-2xl

                text-center

                lg:mx-0
                lg:max-w-[620px]
                lg:pl-12
                lg:text-left
            "
        >
            {/* Luxury Label */}

            <div
                className="
                    mb-6

                    flex
                    items-center
                    justify-center
                    gap-4

                    lg:justify-start
                "
            >
                <span
                    className="
                        h-px
                        w-12

                        bg-gradient-to-r
                        from-[#C89B3C]
                        via-[#F2D27C]
                        to-transparent
                    "
                />

                <span
                    className="
                        text-[11px]
                        font-semibold
                        uppercase

                        tracking-[0.45em]

                        text-[#C89B3C]

                        drop-shadow-[0_2px_8px_rgba(0,0,0,.4)]
                    "
                >
                    {story.label}
                </span>
            </div>

            {/* Heading */}

            <h2
                className="
                    mx-auto
                    max-w-[11ch]

                    font-serif

                    text-[42px]
                    font-semibold

                    leading-[0.92]
                    tracking-[-0.04em]

                    text-[#F8F3EA]

                    drop-shadow-[0_8px_25px_rgba(0,0,0,.55)]

                    sm:text-5xl
                    lg:mx-0
                    lg:text-6xl
                "
            >
                <span className="text-[#F8F3EA]">
                    Where Every
                </span>

                <br />

                <span
                    className="
                        bg-gradient-to-r
                        from-[#B8860B]
                        via-[#F7D97E]
                        to-[#FFF3C7]

                        bg-clip-text
                        text-transparent
                    "
                >
                    Bottle
                </span>

                {" "}

                <span
                    className="
                        bg-gradient-to-r
                        from-[#FFF3C7]
                        via-[#F7D97E]
                        to-[#B8860B]

                        bg-clip-text
                        text-transparent
                    "
                >
                    Carries
                </span>

                <br />

                <span className="text-[#F8F3EA]">
                    a Legacy.
                </span>
            </h2>

            {/* Luxury Divider */}

            <div
                className="
                    mx-auto
                    mt-8
                    mb-10

                    h-[2px]
                    w-28

                    rounded-full

                    bg-gradient-to-r
                    from-[#C89B3C]
                    via-[#F6D77A]
                    to-transparent

                    shadow-[0_0_18px_rgba(200,155,60,.45)]

                    lg:mx-0
                "
            />
                        {/* Description */}

            <div
                className="
                    mx-auto
                    max-w-xl

                    space-y-7

                    lg:mx-0
                    lg:max-w-none
                "
            >
                {story.paragraphs.map((paragraph, index) => (
                    <p
                        key={index}
                        className="
                            text-[16px]
                            leading-8

                            text-[#D6D6D6]

                            drop-shadow-[0_3px_14px_rgba(0,0,0,.65)]

                            sm:text-[17px]
                            sm:leading-9
                        "
                    >
                        {paragraph}
                    </p>
                ))}
            </div>

            {/* CTA */}

            <div
                className="
                    mt-12

                    flex
                    justify-center

                    lg:justify-start
                "
            >
                <button
                    className="
                        group
                        relative

                        inline-flex
                        items-center
                        gap-3

                        overflow-hidden

                        rounded-full

                        border
                        border-[#C89B3C]

                        bg-black/20

                        px-8
                        py-4

                        text-sm
                        font-semibold
                        uppercase

                        tracking-[0.18em]

                        text-[#F8F3EA]

                        backdrop-blur-sm

                        shadow-[0_12px_30px_rgba(0,0,0,.35)]

                        transition-all
                        duration-500

                        hover:border-[#E5C16A]
                        hover:bg-[#C89B3C]
                        hover:text-black
                        hover:shadow-[0_18px_40px_rgba(200,155,60,.25)]
                    "
                >
                    {/* Shine */}

                    <span
                        className="
                            absolute
                            inset-0
                            -translate-x-full

                            bg-gradient-to-r
                            from-transparent
                            via-white/20
                            to-transparent

                            transition-transform
                            duration-700

                            group-hover:translate-x-full
                        "
                    />

                    <span className="relative z-10">
                        {story.buttonText}
                    </span>

                    <ArrowRight
                        className="
                            relative
                            z-10

                            h-4
                            w-4

                            transition-all
                            duration-300

                            group-hover:translate-x-1
                        "
                    />
                </button>
            </div>
        </div>
    );
}

export default StoryContent;