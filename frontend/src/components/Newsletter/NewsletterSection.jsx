import NewsletterHeader from "./NewsletterHeader";
import NewsletterForm from "./NewsletterForm";

function NewsletterSection() {
    return (
        <section
            className="
                relative
                overflow-hidden
                border-y
                border-[#C89B3C]/15
                bg-[#060606]
                py-20
            "
        >
            {/* Center Golden Glow */}

            <div
                aria-hidden="true"
                className="
                    pointer-events-none
                    absolute
                    inset-0
                    bg-[radial-gradient(circle_at_center,rgba(200,155,60,0.16),transparent_62%)]
                "
            />

            {/* Left Black Depth */}

            <div
                aria-hidden="true"
                className="
                    pointer-events-none
                    absolute
                    inset-y-0
                    left-0
                    w-1/2
                    bg-gradient-to-r
                    from-black
                    via-black/90
                    to-transparent
                "
            />

            {/* Right Warm Gold */}

            <div
                aria-hidden="true"
                className="
                    pointer-events-none
                    absolute
                    inset-y-0
                    right-0
                    w-1/2
                    bg-gradient-to-l
                    from-[#8A6720]/35
                    via-[#5E4615]/15
                    to-transparent
                "
            />

            {/* Top Border Glow */}

            <div
                aria-hidden="true"
                className="
                    pointer-events-none
                    absolute
                    top-0
                    left-1/2
                    h-px
                    w-[72%]
                    -translate-x-1/2
                    bg-gradient-to-r
                    from-transparent
                    via-[#C89B3C]/70
                    to-transparent
                "
            />

            {/* Bottom Border Glow */}

            <div
                aria-hidden="true"
                className="
                    pointer-events-none
                    absolute
                    bottom-0
                    left-1/2
                    h-px
                    w-[72%]
                    -translate-x-1/2
                    bg-gradient-to-r
                    from-transparent
                    via-[#C89B3C]/70
                    to-transparent
                "
            />

            {/* Top Left Ambient Glow */}

            <div
                aria-hidden="true"
                className="
                    pointer-events-none
                    absolute
                    -left-24
                    -top-24
                    h-72
                    w-72
                    rounded-full
                    bg-[#C89B3C]/10
                    blur-[150px]
                "
            />

            {/* Bottom Right Ambient Glow */}

            <div
                aria-hidden="true"
                className="
                    pointer-events-none
                    absolute
                    -bottom-28
                    -right-24
                    h-80
                    w-80
                    rounded-full
                    bg-[#C89B3C]/10
                    blur-[170px]
                "
            />

            {/* Content */}

            <div className="relative z-10 container mx-auto px-6">

                <NewsletterHeader />

                <NewsletterForm />

            </div>
        </section>
    );
}

export default NewsletterSection;