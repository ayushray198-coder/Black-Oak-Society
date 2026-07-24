import { footerData } from "./footerData";
import logo from "../../assets/logo/black-oak-logo.webp";

function FooterBrand() {
    const { brand } = footerData;

    return (
        <div className="max-w-md">

            {/* Logo */}

            <img
                src={logo}
                alt={brand.name}
                className="
        h-36
        w-auto
        max-w-[420px]
        object-contain
        select-none
    "
            />

            {/* Premium Divider */}

            <div className="mt-8 flex items-center justify-start">

                <span className="h-px w-16 bg-gradient-to-r from-[#D4AF37]/60 to-transparent" />

                <span
                    className="
            mx-4
            h-2.5
            w-2.5
            rotate-45
            border
            border-[#D4AF37]
            bg-[#D4AF37]/20
        "
                />

                <span className="h-px w-16 bg-gradient-to-l from-[#D4AF37]/60 to-transparent" />

            </div>

            {/* Tagline */}

            <p
                className="
                    mt-7
                    font-serif
                    text-[22px]
                    italic
                    text-white/90
                "
            >
                {brand.tagline}
            </p>

            {/* Description */}

            <p
                className="
                    mt-6
                    max-w-[380px]
                    text-[15px]
                    leading-8
                    text-white/55
                "
            >
                {brand.description}
            </p>

        </div>
    );
}

export default FooterBrand;