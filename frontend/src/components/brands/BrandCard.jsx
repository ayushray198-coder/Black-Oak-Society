import { ArrowRight } from "lucide-react";

function BrandCard({ brand }) {
    const {
        name,
        logo,
        banner,
        bottleImage,
        image,
        tagline,
        brandColor,
        foundedYear,
        country,
    } = brand;

    const accentColor = brandColor || "#C89B3C";
    const bottle = bottleImage || image;

    return (
        <article
            className="
                group
                relative
                mx-auto
                mt-4
                h-[500px]
                w-full
                max-w-[330px]
                overflow-hidden
                rounded-[32px]
                border
                border-white/10
                bg-black/40
                backdrop-blur-2xl
                transition-all
                duration-700
                hover:-translate-y-3
                hover:border-[#C89B3C]/40
                hover:shadow-[0_35px_80px_rgba(0,0,0,.65)]

                sm:h-[520px]
                sm:max-w-[320px]

                lg:max-w-[340px]

                xl:h-[560px]
                xl:max-w-[350px]
            "
        >

            {/* Banner */}

            <img
                src={banner}
                alt={name}
                className="
                    absolute
                    inset-0
                    h-full
                    w-full
                    object-cover
                    transition-transform
                    duration-[1800ms]
                    group-hover:scale-110
                "
            />

            {/* Overlay */}

            <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/55 to-[#040404]" />

            {/* Glass */}

            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,.08),transparent_30%,rgba(255,255,255,.03))]" />

            {/* Ambient Gold */}

            <div
                className="
                    absolute
                    left-1/2
                    top-0
                    h-56
                    w-56
                    -translate-x-1/2
                    rounded-full
                    bg-[#C89B3C]/10
                    blur-[110px]
                    opacity-0
                    transition-all
                    duration-700
                    group-hover:opacity-100
                "
            />

            {/* Bottom Glow */}

            <div
                className="
                    absolute
                    -bottom-14
                    left-1/2
                    h-44
                    w-44
                    -translate-x-1/2
                    rounded-full
                    blur-3xl
                    opacity-70
                    transition-all
                    duration-700
                    group-hover:scale-125
                "
                style={{
                    background: `${accentColor}22`,
                }}
            />

            <div className="relative z-20 flex h-full flex-col px-5 py-6 sm:px-8 sm:py-8">

                {/* ================= LOGO ================= */}

                <div className="relative flex justify-center">

                    {/* Logo Glow */}

                    <div
                        className="
                            absolute
                            top-1/2
                            h-20
                            w-20
                            -translate-y-1/2
                            rounded-full
                            blur-3xl
                            opacity-40
                            transition-all
                            duration-700
                            group-hover:scale-150
                        "
                        style={{
                            background: `${accentColor}55`,
                        }}
                    />

                    {logo ? (

                        <img
                            src={logo}
                            alt={name}
                            className="
                               relative
                               z-10
                              max-h-[150px]
                                 w-auto
                              object-contain
                              transition-all
                              duration-700
                             group-hover:scale-110

                             sm:max-h-[160px]
                             md:max-h-[170px]
                             xl:max-h-[180px]
                              "
                        />

                    ) : (

                        <div
                            className="
                                relative
                                z-10
                                flex
                                h-20
                                w-20
                                items-center
                                justify-center
                                rounded-full
                                border
                                text-4xl
                                font-black
                            "
                            style={{
                                borderColor: accentColor,
                                color: accentColor,
                            }}
                        >
                            {name?.charAt(0)}
                        </div>

                    )}

                </div>
                {/* ================= BOTTLE ================= */}



                {/* ================= CONTENT ================= */}

                <div className="mt-auto space-y-5 text-center">

                    {/* Meta */}

                    <div
                        className="
                            flex
                            items-center
                            justify-center
                            gap-2
                            text-[11px]
                            font-semibold
                            uppercase
                            tracking-[0.28em]
                        "
                        style={{
                            color: accentColor,
                        }}
                    >
                        {foundedYear && (
                            <span>{foundedYear}</span>
                        )}

                        {country && foundedYear && (
                            <span className="opacity-40">|</span>
                        )}

                        {country && (
                            <span>{country}</span>
                        )}

                    </div>

                    {/* Tagline */}

                    {tagline && (

                        <p
                            className="
                                mx-auto
                                max-w-[235px]
                                px-2

                                text-sm
                                font-light
                                italic

                                leading-6

                                text-zinc-300

                                transition-all
                                duration-500

                                group-hover:text-white

                                sm:text-[15px]
                                sm:leading-7
                            "
                        >
                            {tagline}
                        </p>

                    )}

                    {/* CTA */}

                    <div className="flex justify-center pt-2 pb-1">

                        <button
                            className="
                                group/btn
                                flex
                                items-center
                                gap-3
                                uppercase
                                tracking-[0.28em]
                                transition-all
                                duration-500
                                hover:gap-5
                            "
                            style={{
                                color: accentColor,
                            }}
                        >
                            <span className="text-xs font-semibold">
                                Discover
                            </span>

                            <span
                                className="
                                    flex
                                    h-10
                                    w-10
                                    items-center
                                    justify-center
                                    rounded-full
                                    border
                                    transition-all
                                    duration-500

                                    group-hover/btn:rotate-45
                                    group-hover/btn:scale-110

                                    sm:h-11
                                    sm:w-11
                                "
                                style={{
                                    borderColor: accentColor,
                                }}
                            >
                                <ArrowRight size={16} />
                            </span>

                        </button>

                    </div>

                </div>

            </div>
            {/* ================= PREMIUM BORDER ================= */}

            <div
                className="
                    pointer-events-none
                    absolute
                    inset-0
                    rounded-[32px]
                    opacity-0
                    transition-all
                    duration-700
                    group-hover:opacity-100
                "
                style={{
                    boxShadow: `
                        inset 0 0 0 1px ${accentColor}55,
                        inset 0 0 40px ${accentColor}10
                    `,
                }}
            />

            {/* ================= REFLECTION ================= */}

            <div
                className="
                    pointer-events-none
                    absolute
                    -left-28
                    top-0
                    h-full
                    w-20
                    rotate-[18deg]
                    bg-white/10
                    blur-2xl
                    opacity-0
                    transition-all
                    duration-1000

                    group-hover:left-[135%]
                    group-hover:opacity-100
                "
            />

            {/* ================= TOP GOLD LINE ================= */}

            <div
                className="
                    pointer-events-none
                    absolute
                    left-1/2
                    top-0
                    h-[2px]
                    w-0
                    -translate-x-1/2
                    transition-all
                    duration-700
                    group-hover:w-[70%]
                "
                style={{
                    background: `linear-gradient(
                        to right,
                        transparent,
                        ${accentColor},
                        transparent
                    )`,
                }}
            />

            {/* ================= BOTTOM GOLD LINE ================= */}

            <div
                className="
                    pointer-events-none
                    absolute
                    bottom-0
                    left-1/2
                    h-[2px]
                    w-0
                    -translate-x-1/2
                    transition-all
                    duration-700
                    group-hover:w-[82%]
                "
                style={{
                    background: `linear-gradient(
                        to right,
                        transparent,
                        ${accentColor},
                        transparent
                    )`,
                }}
            />

        </article>
    );
}

export default BrandCard;