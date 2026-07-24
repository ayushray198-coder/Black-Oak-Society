import FooterBrand from "./FooterBrand";
import FooterLinks from "./FooterLinks";
import FooterBottom from "./FooterBottom";
import { footerData } from "./footerData";

function FooterSection() {
    const { navigation, collections, support } = footerData;

    return (
        <footer
            className="
                relative
                overflow-hidden
                border-t
                border-[#C89B3C]/15
                bg-[#050505]
            "
        >
            {/* Ambient Glow */}

            <div
                aria-hidden="true"
                className="
                    pointer-events-none
                    absolute
                    top-0
                    left-1/2
                    h-80
                    w-80
                    -translate-x-1/2
                    rounded-full
                    bg-[#C89B3C]/5
                    blur-[160px]
                "
            />

            {/* Top Luxury Line */}

            <div
                aria-hidden="true"
                className="
                    absolute
                    top-0
                    left-1/2
                    h-px
                    w-[75%]
                    -translate-x-1/2
                    bg-gradient-to-r
                    from-transparent
                    via-[#C89B3C]/60
                    to-transparent
                "
            />

            <div
                className="
                    relative
                    z-10
                    container
                    mx-auto
                    px-6
                    py-24
                "
            >
                {/* Main Footer */}

                <div
                    className="
                        grid
                        gap-16
                        lg:grid-cols-[1.6fr_1fr_1fr_1fr]
                    "
                >
                    <FooterBrand />

                    <FooterLinks
                        title={navigation.title}
                        links={navigation.links}
                    />

                    <FooterLinks
                        title={collections.title}
                        links={collections.links}
                    />

                    <FooterLinks
                        title={support.title}
                        links={support.links}
                    />
                </div>

                {/* Bottom */}

                <FooterBottom />

            </div>
        </footer>
    );
}

export default FooterSection;