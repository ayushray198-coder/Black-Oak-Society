import { ArrowRight } from "lucide-react";

function BrandCard({ brand, featured = false }) {
    const {
        name,
        logo,
        banner,
        categoryLine,
        tagline,
        brandColor,
    } = brand;

    const accentColor = brandColor || "#C89B3C";

    return (
        <article
            className={`group relative mx-auto h-[420px] w-full max-w-[270px] overflow-hidden rounded-[24px] border transition-all duration-500 sm:h-[460px] sm:max-w-[290px] lg:h-[520px] lg:max-w-[300px] ${featured
                ? "shadow-[0_0_45px_rgba(200,155,60,0.35)]"
                : "border-white/10 hover:shadow-[0_0_30px_rgba(200,155,60,0.18)]"
                }`}
            style={{
                borderColor: featured ? accentColor : undefined,
            }}
        >
            {/* Banner */}
            <img
                src={banner}
                alt={name}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/70 to-black/95" />

            {/* Glow */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(200,155,60,.18),transparent_60%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

            {/* Featured */}
            {featured && (
                <div
                    className="absolute left-4 top-4 z-20 rounded-full px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-black sm:left-5 sm:top-5 sm:px-4 sm:text-[11px]"
                    style={{
                        backgroundColor: accentColor,
                    }}
                >
                    Featured
                </div>
            )}

            <div className="relative z-10 flex h-full flex-col justify-between px-5 py-6 sm:px-6 sm:py-7 lg:px-7 lg:py-8">

                {/* Logo */}
                <div className="flex flex-1 items-center justify-center">
                    {logo ? (
                        <img
                            src={logo}
                            alt={name}
                            className="max-h-28 w-auto object-contain transition-all duration-500 group-hover:scale-110 sm:max-h-36 lg:max-h-44"
                        />
                    ) : (
                        <div
                            className="flex h-24 w-24 items-center justify-center rounded-full border bg-black/40 text-4xl font-bold sm:h-28 sm:w-28 sm:text-5xl lg:h-36 lg:w-36 lg:text-6xl"
                            style={{
                                borderColor: accentColor,
                                color: accentColor,
                            }}
                        >
                            {name?.charAt(0)}
                        </div>
                    )}
                </div>

                {/* Content */}
                <div className="text-center">

                    <h3
                        className="text-2xl font-semibold uppercase tracking-wide sm:text-[28px] lg:text-[32px]"
                        style={{
                            color: accentColor,
                        }}
                    >
                        {name}
                    </h3>

                    <p
                        className="mt-2 text-base font-medium sm:text-lg"
                        style={{
                            color: accentColor,
                        }}
                    >
                        {categoryLine}
                    </p>

                    <p className="mt-2 text-xs leading-6 tracking-wide text-zinc-300 sm:text-sm">
                        {tagline}
                    </p>

                    <div className="my-4 flex justify-center lg:my-5">
                        <div
                            className="h-px w-20 lg:w-24"
                            style={{
                                background: `linear-gradient(to right, transparent, ${accentColor}, transparent)`,
                            }}
                        />
                    </div>

                    <button
                        className="mx-auto flex items-center gap-2 rounded-xl border px-4 py-2 text-xs font-medium transition-all duration-300 sm:px-5 sm:py-2.5 sm:text-sm"
                        style={{
                            borderColor: accentColor,
                            color: accentColor,
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.backgroundColor = accentColor;
                            e.currentTarget.style.color = "#000";
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.backgroundColor = "transparent";
                            e.currentTarget.style.color = accentColor;
                        }}
                    >
                        Explore Collection
                        <ArrowRight size={16} />
                    </button>

                </div>

            </div>
        </article>
    );
}

export default BrandCard;