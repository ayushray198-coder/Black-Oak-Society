import { newsletterData } from "./newsletterData";

function NewsletterHeader() {
    const { badge, title, subtitle } = newsletterData;

    return (
        <div className="mx-auto max-w-3xl text-center">

            {/* Premium Badge */}

            <div className="flex items-center justify-center gap-5">

                <span className="h-px w-14 bg-gradient-to-r from-transparent to-[#C89B3C]/70" />

                <span
                    className="
                        font-serif
                        italic
                        text-[14px]
                        tracking-[0.25em]
                        text-[#D4AF37]
                    "
                >
                    {badge}
                </span>

                <span className="h-px w-14 bg-gradient-to-l from-transparent to-[#C89B3C]/70" />

            </div>

            {/* Heading */}

            <h2
                className="
                    mt-4
                    text-[32px]
                    font-light
                    leading-tight
                    tracking-tight
                    text-white
                    sm:text-[40px]
                    lg:text-[44px]
                "
            >
                {title}
            </h2>

            {/* Divider */}

            <div className="mt-4 flex items-center justify-center gap-3">

                <span className="h-px w-10 bg-[#C89B3C]/30" />

                <span className="h-1.5 w-1.5 rounded-full bg-[#C89B3C]" />

                <span className="h-px w-10 bg-[#C89B3C]/30" />

            </div>

            {/* Subtitle */}

            <p
                className="
                    mx-auto
                    mt-4
                    max-w-2xl
                    text-[15px]
                    leading-7
                    text-white/60
                "
            >
                {subtitle}
            </p>

        </div>
    );
}

export default NewsletterHeader;