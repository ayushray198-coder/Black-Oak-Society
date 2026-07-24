function FooterLinks({ title, links }) {
    return (
        <div className="lg:pt-2">

            {/* Section Title */}

            <h3
                className="
                    inline-block
                    bg-gradient-to-b
                    from-[#FFF4D0]
                    via-[#E6C76A]
                    to-[#B8860B]
                    bg-clip-text
                    font-serif
                    text-[20px]
                    font-semibold
                    uppercase
                    tracking-[0.18em]
                    text-transparent
                "
            >
                {title}
            </h3>

            {/* Luxury Divider */}

            <div className="mt-5 flex items-center gap-3">

                <span
                    className="
                        h-px
                        w-8
                        bg-[#D4AF37]/30
                    "
                />

                <span
                    className="
                        h-[5px]
                        w-[5px]
                        rounded-full
                        bg-[#D4AF37]
                    "
                />

                <span
                    className="
                        h-px
                        w-14
                        bg-gradient-to-r
                        from-[#D4AF37]/70
                        to-transparent
                    "
                />

            </div>

            {/* Links */}

            <ul className="mt-7 space-y-5">

                {links.map((link) => (
                    <li key={link.label}>

                        <a
                            href={link.href}
                            className="
                                group
                                inline-flex
                                items-center
                                text-[15px]
                                font-light
                                text-white/65
                                transition-all
                                duration-300
                                hover:translate-x-1
                                hover:text-[#F6E6A8]
                            "
                        >
                            <span
                                className="
                                    mr-3
                                    h-[4px]
                                    w-[4px]
                                    rounded-full
                                    bg-[#C89B3C]/50
                                    transition-all
                                    duration-300
                                    group-hover:h-[6px]
                                    group-hover:w-[6px]
                                    group-hover:bg-[#D4AF37]
                                "
                            />

                            {link.label}

                        </a>

                    </li>
                ))}

            </ul>

        </div>
    );
}

export default FooterLinks;