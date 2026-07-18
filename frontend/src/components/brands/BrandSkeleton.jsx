function BrandSkeleton() {
    return (
        <article
            className="
                overflow-hidden
                rounded-3xl

                border
                border-white/10

                bg-white/[0.03]
                backdrop-blur-xl

                animate-pulse
            "
        >
            <div className="p-8">

                {/* Logo */}

                <div
                    className="
                        h-24
                        rounded-2xl

                        bg-white/5
                    "
                />

                {/* Title */}

                <div
                    className="
                        mt-8

                        h-7
                        w-2/3

                        rounded-full

                        bg-white/5
                    "
                />

                {/* Subtitle */}

                <div
                    className="
                        mt-4

                        h-4
                        w-1/2

                        rounded-full

                        bg-white/5
                    "
                />

                {/* Button */}

                <div
                    className="
                        mt-8

                        h-5
                        w-32

                        rounded-full

                        bg-[#C89B3C]/20
                    "
                />

            </div>
        </article>
    );
}

export default BrandSkeleton;