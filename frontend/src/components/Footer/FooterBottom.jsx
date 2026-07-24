import { footerData } from "./footerData";

function FooterBottom() {
    const { socials, copyright, disclaimer } = footerData;

    return (
        <div
            className="
                mt-20
                border-t
                border-[#C89B3C]/10
                pt-8
            "
        >
            <div
                className="
                    flex
                    flex-col
                    items-center
                    justify-between
                    gap-8
                    lg:flex-row
                "
            >
                {/* Social Icons */}

                <div className="flex items-center gap-4">

                    {socials.map((social) => {
                        const Icon = social.icon;

                        return (
                            <a
                                key={social.name}
                                href={social.href}
                                aria-label={social.name}
                                className="
                                    group
                                    flex
                                    h-11
                                    w-11
                                    items-center
                                    justify-center
                                    rounded-full
                                    border
                                    border-[#C89B3C]/20
                                    bg-white/[0.02]
                                    text-white/55
                                    transition-all
                                    duration-300
                                    hover:border-[#C89B3C]/60
                                    hover:bg-[#C89B3C]/10
                                    hover:text-[#D4AF37]
                                "
                            >
                                <Icon
                                    size={18}
                                    className="
                                        transition-transform
                                        duration-300
                                        group-hover:scale-110
                                    "
                                />
                            </a>
                        );
                    })}

                </div>

                {/* Copyright */}

                <div className="text-center lg:text-right">

                    <p
                        className="
                            text-[14px]
                            text-white/45
                        "
                    >
                        {copyright}
                    </p>

                    <p
                        className="
                            mt-2
                            text-[12px]
                            uppercase
                            tracking-[0.18em]
                            text-[#C89B3C]/70
                        "
                    >
                        {disclaimer}
                    </p>

                </div>

            </div>
        </div>
    );
}

export default FooterBottom;