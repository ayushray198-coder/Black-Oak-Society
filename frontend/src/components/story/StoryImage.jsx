import { forwardRef } from "react";
import storyImage from "../../assets/images/story-pic.png";

const StoryImage = forwardRef((props, imageRef) => {
    return (
        <div
            ref={imageRef}
            className="
        story-image
        relative
        group

        w-full
        max-w-[560px]

        lg:max-w-[650px]
        xl:max-w-[720px]
    "
        >
            {/* Golden Glow */}

            <div
                aria-hidden="true"
                className="
                    absolute
                    -inset-8

                    rounded-[40px]

                    bg-[#C89B3C]/10

                    blur-3xl

                    opacity-70
                "
            />

            {/* Image Card */}

            <div
                className="
                    relative
                    overflow-hidden

                    rounded-[32px]

                    border
                    border-[#C89B3C]/20

                    bg-[#0d0d0d]

                    shadow-[0_35px_80px_rgba(0,0,0,.55)]
                "
            >
                <img
                    src={storyImage}
                    alt="Black Oak Society Story"
                    className="
                        h-full
                        w-full

                        object-cover

                        transition-all
                        duration-700

                        group-hover:scale-[1.03]
                    "
                />

                {/* Dark Overlay */}

                <div
                    className="
                        absolute
                        inset-0

                        bg-gradient-to-t
                        from-black/50
                        via-transparent
                        to-black/10
                    "
                />

                {/* Golden Border */}

                <div
                    className="
                        pointer-events-none

                        absolute
                        inset-4

                        rounded-[24px]

                        border
                        border-[#C89B3C]/20
                    "
                />
            </div>
        </div>
    );
});

StoryImage.displayName = "StoryImage";

export default StoryImage;