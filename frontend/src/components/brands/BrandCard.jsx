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
            className={`group relative h-[520px] max-w-[300px] w-full overflow-hidden rounded-[28px] border transition-all duration-500 ${
                featured
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
            <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 bg-[radial-gradient(circle_at_top,rgba(200,155,60,.18),transparent_60%)]" />

            {/* Featured */}
            {featured && (
                <div
                    className="absolute left-5 top-5 z-20 rounded-full px-4 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-black"
                    style={{
                        backgroundColor: accentColor,
                    }}
                >
                    Featured
                </div>
            )}

            <div className="relative z-10 flex h-full flex-col justify-between px-7 py-8">

                {/* Logo */}
                <div className="flex flex-1 items-center justify-center">
                    {logo ? (
                        <img
                            src={logo}
                            alt={name}
                            className="max-h-44 w-auto object-contain transition-all duration-500 group-hover:scale-110"
                        />
                    ) : (
                        <div
                            className="flex h-36 w-36 items-center justify-center rounded-full border bg-black/40 text-6xl font-bold"
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
                        className="text-[32px] font-semibold uppercase tracking-wide"
                        style={{
                            color: accentColor,
                        }}
                    >
                        {name}
                    </h3>

                    {/* Category */}
                    <p
                        className="mt-3 text-lg font-medium"
                        style={{
                            color: accentColor,
                        }}
                    >
                        {categoryLine}
                    </p>

                    {/* Tagline */}
                    <p className="mt-2 text-sm tracking-wide text-zinc-300">
                        {tagline}
                    </p>

                    {/* Divider */}
                    <div className="my-5 flex justify-center">
                        <div
                            className="h-px w-24"
                            style={{
                                background: `linear-gradient(to right, transparent, ${accentColor}, transparent)`,
                            }}
                        />
                    </div>

                    {/* Button */}
                    <button
                        className="mx-auto flex items-center gap-2 rounded-xl border px-5 py-2.5 text-sm font-medium transition-all duration-300 hover:text-black"
                        style={{
                            borderColor: accentColor,
                            color: accentColor,
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.backgroundColor = accentColor;
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.backgroundColor = "transparent";
                        }}
                    >
                        Explore Collection
                        <ArrowRight size={17} />
                    </button>

                </div>

            </div>
        </article>
    );
}

export default BrandCard;