import { ArrowRight } from "lucide-react";

function SignatureCard({ product }) {
    const {
        name,
        brand,
        category,
        images,
    } = product;

    const image = images?.[0]?.url;

    return (
        <article
            className="
                signature-card
                group
                relative
                overflow-hidden
                rounded-[28px]
                border border-white/10
                bg-[#0B0B0B]
                transition-all
                duration-700
                hover:-translate-y-2
                hover:border-[#C89B3C]/40
                hover:shadow-[0_25px_70px_rgba(200,155,60,0.10)]
            "
        >
            {/* Glow */}

            <div className="absolute inset-0 bg-gradient-to-b from-[#C89B3C]/5 via-transparent to-transparent opacity-0 transition-opacity duration-700 group-hover:opacity-100" />

            {/* ================= IMAGE ================= */}

          

            <div
                className="
        relative
        overflow-hidden
        rounded-t-[28px]
    "
            >
                <img
                    src={image}
                    alt={name}
                    loading="lazy"
                    className="
            block
            w-full
            h-auto
            object-cover
            transition-transform
            duration-700
            group-hover:scale-105
        "
                />

                <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#0B0B0B] via-[#0B0B0B]/70 to-transparent" />
            </div>

            {/* ================= CONTENT ================= */}

            <div className="relative z-10 px-6 pb-7 text-center">

                <h3
                    className="
                        text-xl
                        md:text-[22px]
                        font-light
                        leading-snug
                        tracking-tight
                        text-white
                    "
                >
                    {name}
                </h3>

                <div className="mx-auto mt-4 h-px w-12 bg-[#C89B3C]/40" />

                <p
                    className="
                        mt-4
                        text-[11px]
                        uppercase
                        tracking-[0.35em]
                        text-[#D4AF37]
                    "
                >
                    {brand?.name}
                </p>

                <p className="mt-2 text-sm text-gray-400">
                    {category?.name}
                </p>

                <button
                    className="
                        mx-auto
                        mt-7
                        inline-flex
                        items-center
                        gap-2
                        text-[11px]
                        uppercase
                        tracking-[0.35em]
                        text-[#D4AF37]
                        transition-all
                        duration-500
                        group-hover:gap-4
                    "
                >
                    Discover More
                    <ArrowRight size={15} />
                </button>

            </div>

            {/* Premium Border */}

            <div className="pointer-events-none absolute inset-0 rounded-[28px] ring-1 ring-white/5 group-hover:ring-[#C89B3C]/20 transition-all duration-700" />
        </article>
    );
}

export default SignatureCard;