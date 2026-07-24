function MemberCard({ benefit }) {
    const { icon: Icon, title } = benefit;

    return (
        <article
            className="
                group relative
                flex h-[245px] w-full
                flex-col items-center
                rounded-[30px]
                border border-[#C89B3C]/12
                bg-[#0B0B0B]
                px-6
                pt-8
                pb-7
                transition-all duration-500
                hover:-translate-y-2
                hover:border-[#C89B3C]/35
                hover:bg-[#111111]
                hover:shadow-[0_20px_60px_rgba(200,155,60,.10)]
            "
        >

            {/* Premium Glow */}

            <div
                className="
                    pointer-events-none
                    absolute
                    inset-0
                    rounded-[30px]
                    opacity-0
                    transition-opacity
                    duration-500
                    group-hover:opacity-100
                    bg-[radial-gradient(circle_at_top,rgba(200,155,60,.08),transparent_70%)]
                "
            />

            {/* Icon */}

            <div
                className="
                    relative z-10
                    flex
                    h-[82px]
                    w-[82px]
                    items-center
                    justify-center
                    rounded-full
                    border border-[#C89B3C]/20
                    bg-[#090909]
                    transition-all duration-500
                    group-hover:border-[#D4AF37]
                    group-hover:scale-105
                "
            >

                <Icon
                    size={34}
                    strokeWidth={1.55}
                    className="text-[#D4AF37]"
                />

            </div>

            {/* Spacer */}

            <div className="flex-1" />

            {/* Title */}

            <h4
                className="
                    relative z-10
                    px-3
                    mt-2
                    text-center
                    text-[9px]
                    font-light
                    leading-4
                    tracking-[0.05em]
                    text-white 
                "
            >
                {title}
            </h4>

            {/* Bottom Accent */}

            <div
                className="
                    mt-6
                    h-[2px]
                    w-10
                    rounded-full
                    bg-[#C89B3C]/70
                    transition-all
                    duration-500
                    group-hover:w-16
                "
            />

        </article>
    );
}

export default MemberCard;