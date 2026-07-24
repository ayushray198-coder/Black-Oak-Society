import signatureData from "./signatureData";

function SignatureHeader() {
    const { badge, title, description } = signatureData;

    return (
        <div className="signature-header mx-auto mb-24 max-w-4xl text-center">

            {/* Badge */}

            <span
                className="
                    inline-flex
                    items-center
                    rounded-full
                    border border-[#C89B3C]/30
                    bg-[#C89B3C]/10
                    px-5
                    py-2
                    text-[11px]
                    font-medium
                    uppercase
                    tracking-[0.35em]
                    text-[#D4AF37]
                    backdrop-blur-sm
                "
            >
                {badge}
            </span>

            {/* Heading */}

            <h2
                className="
                    mt-8
                    text-4xl
                    font-light
                    leading-[1.15]
                    tracking-tight
                    text-white
                    sm:text-5xl
                    lg:text-6xl
                "
            >
                {title.first}{" "}
                <span className="font-serif italic text-[#D4AF37]">
                    {title.highlight}
                </span>
            </h2>

            {/* Divider */}

            <div className="mx-auto mt-8 flex items-center justify-center gap-3">
                <span className="h-px w-12 bg-gradient-to-r from-transparent to-[#C89B3C]/60" />
                <span className="h-2 w-2 rounded-full bg-[#C89B3C]" />
                <span className="h-px w-12 bg-gradient-to-l from-transparent to-[#C89B3C]/60" />
            </div>

            {/* Description */}

            <p
                className="
                    mx-auto
                    mt-8
                    max-w-2xl
                    text-[17px]
                    leading-8
                    text-gray-400
                "
            >
                {description}
            </p>

        </div>
    );
}

export default SignatureHeader;