import { memberData } from "./memberData";

function MemberHeader() {
    const { badge, title, subtitle } = memberData;

    return (
        <header className="mx-auto mb-12 max-w-4xl text-center">

            {/* Premium Badge */}

            {/* Premium Editorial Badge */}

            <div className="flex items-center justify-center gap-5">

                <span className="h-px w-16 bg-gradient-to-r from-transparent to-[#C89B3C]/70" />

                <span
                    className="
            text-[13px]
            italic
            font-serif
            font-medium
            tracking-[0.28em]
            text-[#D4AF37]
            whitespace-nowrap
        "
                >
                    {badge}
                </span>

                <span className="h-px w-16 bg-gradient-to-l from-transparent to-[#C89B3C]/70" />

            </div>

            {/* Heading */}

            <h2
                className="
                    mt-6
                    text-[36px]
                    font-light
                    leading-[1.1]
                    tracking-tight
                    text-white
                    md:text-[46px]
                "
            >
                {title}
            </h2>

            {/* Luxury Divider */}

            <div className="mt-6 flex items-center justify-center gap-3">

                <span className="h-px w-10 bg-[#C89B3C]/35" />

                <span className="h-[6px] w-[6px] rounded-full bg-[#C89B3C]" />

                <span className="h-px w-10 bg-[#C89B3C]/35" />

            </div>

            {/* Subtitle */}

            <p
                className="
                    mx-auto
                    mt-6
                    max-w-2xl
                    text-[15px]
                    leading-8
                    text-white/55
                "
            >
                {subtitle}
            </p>

        </header>
    );
}

export default MemberHeader;