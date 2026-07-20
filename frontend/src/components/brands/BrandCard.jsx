import { ArrowRight } from "lucide-react";

function BrandCard({ brand, featured = false }) {
    const {
        name,
        logo,
        banner,
        tagline,
        brandColor,
        foundedYear,
        country,
    } = brand;

    const accentColor = brandColor || "#C89B3C";

    return (
        <article
            className={`group relative mx-auto h-[440px] w-full max-w-[290px] overflow-hidden rounded-[32px] border bg-black/30 backdrop-blur-xl transition-all duration-700 hover:-translate-y-4 sm:h-[500px] sm:max-w-[310px] lg:h-[580px] lg:max-w-[340px] ${
                featured
                    ? "shadow-[0_0_60px_rgba(200,155,60,.35)]"
                    : "border-white/10 hover:shadow-[0_25px_70px_rgba(0,0,0,.55)]"
            }`}
            style={{
                borderColor: featured ? accentColor : undefined,
            }}
        >
            {/* Background */}
            <img
                src={banner}
                alt={name}
                className="absolute inset-0 h-full w-full object-cover transition-all duration-1000 group-hover:scale-110"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/60 to-black/95" />

            {/* Glass */}
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,.06),transparent_28%,rgba(255,255,255,.02))]" />

            {/* Top Glow */}
            <div className="absolute -top-28 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-[#C89B3C]/15 blur-3xl opacity-0 transition-all duration-700 group-hover:opacity-100" />

            {/* Bottom Glow */}
            <div
                className="absolute -bottom-16 left-1/2 h-44 w-44 -translate-x-1/2 rounded-full blur-3xl opacity-0 transition-all duration-700 group-hover:opacity-100"
                style={{
                    backgroundColor: `${accentColor}25`,
                }}
            />

            {/* Featured */}
            {featured && (
                <div
                    className="absolute left-6 top-6 z-30 rounded-full px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.3em] text-black"
                    style={{
                        backgroundColor: accentColor,
                    }}
                >
                    Featured
                </div>
            )}

            <div className="relative z-20 flex h-full flex-col justify-between px-8 py-8">

                {/* Logo */}
                <div className="flex flex-1 items-end justify-center pb-10">
                    {logo ? (
                        <img
                            src={logo}
                            alt={name}
                            className="max-h-36 w-auto object-contain transition-all duration-700 group-hover:scale-110 group-hover:-translate-y-2 lg:max-h-44"
                        />
                    ) : (
                        <div
                            className="flex h-32 w-32 items-center justify-center rounded-full border text-6xl font-black"
                            style={{
                                borderColor: accentColor,
                                color: accentColor,
                            }}
                        >
                            {name?.charAt(0)}
                        </div>
                    )}
                </div>

                {/* Editorial Content */}
                <div className="text-center">

                    {/* Brand */}
                    <h3
                        className="mx-auto max-w-[250px] text-[clamp(2rem,5vw,3.2rem)] font-black uppercase leading-[0.86] tracking-[-0.05em]"
                        style={{
                            color: accentColor,
                            textWrap: "balance",
                        }}
                    >
                        {name}
                    </h3>

                    {/* Divider */}
                    <div className="mt-6 flex justify-center">
                        <div
                            className="relative h-px w-24"
                            style={{
                                background: `linear-gradient(to right, transparent, ${accentColor}, transparent)`,
                            }}
                        >
                            <span
                                className="absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full"
                                style={{
                                    backgroundColor: accentColor,
                                    boxShadow: `0 0 18px ${accentColor}`,
                                }}
                            />
                        </div>
                    </div>

                    {/* Metadata */}
                    <div
                        className="mt-6 flex items-center justify-center gap-4 text-[11px] font-semibold uppercase tracking-[0.35em]"
                        style={{
                            color: accentColor,
                        }}
                    >
                        <span>{foundedYear}</span>

                        <span className="h-1 w-1 rounded-full bg-current opacity-60"></span>

                        <span>{country}</span>
                    </div>
                                        {/* Tagline */}
                    <p className="mx-auto mt-7 max-w-[220px] text-[15px] font-light italic leading-7 text-zinc-200 transition-all duration-500 group-hover:text-white">
                        {tagline}
                    </p>

                    {/* Editorial CTA */}
                    <div className="mt-10 flex justify-center">
                        <button
                            className="group/btn flex items-center gap-3 text-[12px] font-semibold uppercase tracking-[0.35em] transition-all duration-500 hover:gap-5"
                            style={{
                                color: accentColor,
                            }}
                        >
                            <span>DISCOVER</span>

                            <div
                                className="flex h-10 w-10 items-center justify-center rounded-full border transition-all duration-500 group-hover/btn:rotate-45"
                                style={{
                                    borderColor: accentColor,
                                }}
                            >
                                <ArrowRight size={16} />
                            </div>
                        </button>
                    </div>

                </div>

            </div>

            {/* Premium Border Glow */}
            <div
                className="pointer-events-none absolute inset-0 rounded-[32px] opacity-0 transition-all duration-700 group-hover:opacity-100"
                style={{
                    boxShadow: `inset 0 0 0 1px ${accentColor}55`,
                }}
            />

            {/* Luxury Reflection */}
            <div className="pointer-events-none absolute -left-32 top-0 h-full w-20 rotate-[18deg] bg-white/10 blur-2xl opacity-0 transition-all duration-1000 group-hover:left-[130%] group-hover:opacity-100" />

            {/* Ambient Gold Line */}
            <div
                className="pointer-events-none absolute bottom-0 left-0 h-[2px] w-0 transition-all duration-700 group-hover:w-full"
                style={{
                    background: `linear-gradient(to right, transparent, ${accentColor}, transparent)`,
                }}
            />
                    </article>
    );
}

export default BrandCard;