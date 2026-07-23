import { useRef } from "react";

import storyBg from "../../assets/images/story-bg.png";

import StoryContent from "./StoryContent";
import StoryImage from "./StoryImage";

import useStoryAnimation from "../../hooks/useStoryAnimation";

function StorySection() {
    const sectionRef = useRef(null);
    const imageRef = useRef(null);

    useStoryAnimation(sectionRef, imageRef);

    return (
        <section
            ref={sectionRef}
            id="our-story"
            style={{
                backgroundImage: `url(${storyBg})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundColor: "#080808",
            }}
            className="
                relative
                isolate
                overflow-hidden

                py-24
                md:py-32
                lg:py-40
            "
        >
            {/* Base Overlay */}

            <div
                aria-hidden="true"
                className="
                    absolute
                    inset-0

                    bg-black/12
                "
            />

            {/* Cinematic Vignette */}

            <div
                aria-hidden="true"
                className="
                    absolute
                    inset-0

                    pointer-events-none

                    bg-[radial-gradient(circle_at_center,transparent_42%,rgba(0,0,0,.15)_75%,rgba(0,0,0,.38)_100%)]
                "
            />

            {/* Left Shadow */}

            <div
                aria-hidden="true"
                className="
                    absolute
                    inset-y-0
                    left-0

                    w-[30%]

                    bg-gradient-to-r
                    from-black/30
                    via-black/10
                    to-transparent
                "
            />

            {/* Right Shadow */}

            <div
                aria-hidden="true"
                className="
                    absolute
                    inset-y-0
                    right-0

                    w-[35%]

                    bg-gradient-to-l
                    from-black/25
                    via-black/5
                    to-transparent
                "
            />

            {/* Top Shadow */}

            <div
                aria-hidden="true"
                className="
                    absolute
                    inset-x-0
                    top-0

                    h-32

                    bg-gradient-to-b
                    from-black/20
                    to-transparent
                "
            />

            {/* Bottom Shadow */}

            <div
                aria-hidden="true"
                className="
                    absolute
                    inset-x-0
                    bottom-0

                    h-36

                    bg-gradient-to-t
                    from-black/30
                    to-transparent
                "
            />

            {/* Golden Ambient Glow */}

            <div
                aria-hidden="true"
                className="
                    pointer-events-none

                    absolute
                    inset-0

                    bg-[radial-gradient(circle_at_76%_38%,rgba(200,155,60,.12),transparent_36%)]
                "
            />

            {/* Soft Smoke Layer */}

            <div
                aria-hidden="true"
                className="
                    pointer-events-none

                    absolute
                    inset-0

                    opacity-40

                    bg-[radial-gradient(circle_at_50%_20%,rgba(255,255,255,.05),transparent_60%)]
                "
            />

            {/* Content */}

            <div
                className="
                    relative
                    z-10

                    mx-auto
                    max-w-7xl

                    px-6
                    lg:px-10
                "
            >
                <div
                    className="
                        grid
                        items-center

                        gap-16

                        lg:grid-cols-[1fr_1fr]
                        lg:gap-20
                        xl:gap-24
                    "
                >
                    {/* Left */}

                    <div
                        className="
                            flex
                            items-center
                            justify-center
                        "
                    >
                        <StoryImage ref={imageRef} />
                    </div>

                    {/* Right */}

                    <StoryContent />
                </div>
            </div>
        </section>
    );
}

export default StorySection;