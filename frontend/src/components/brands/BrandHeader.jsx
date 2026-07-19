import { PiCrownSimpleFill } from "react-icons/pi";

function BrandHeader() {
    return (
        <div className="mx-auto mb-14 max-w-6xl px-4 text-center sm:mb-16 lg:mb-20">

            {/* Luxury Crown */}

            <div className="mb-6 flex flex-col items-center sm:mb-8">

                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#C89B3C]/30 bg-gradient-to-b from-[#C89B3C]/20 to-transparent shadow-[0_0_35px_rgba(200,155,60,.15)] backdrop-blur-xl sm:h-14 sm:w-14 lg:h-16 lg:w-16">

                    <PiCrownSimpleFill className="text-2xl text-[#D8AE52] sm:text-[30px] lg:text-[34px]" />

                </div>

                <div className="mt-3 flex items-center gap-2 text-[#C89B3C]/70">

                    <span className="text-[7px] sm:text-[8px]">✦</span>

                    <span className="text-[9px] sm:text-[10px]">✦</span>

                    <span className="text-[7px] sm:text-[8px]">✦</span>

                </div>

            </div>

            {/* Top Label */}

            <div className="flex items-center justify-center gap-2 sm:gap-4 lg:gap-5">

                <span className="h-px w-10 bg-gradient-to-r from-transparent via-[#C89B3C]/70 to-[#C89B3C] sm:w-16 lg:w-20" />

                <span className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#C89B3C] sm:text-xs sm:tracking-[0.45em] lg:tracking-[0.55em]">
                    Signature Brands
                </span>

                <span className="h-px w-10 bg-gradient-to-l from-transparent via-[#C89B3C]/70 to-[#C89B3C] sm:w-16 lg:w-20" />

            </div>

            {/* Heading */}

            <h2 className="mt-6 font-serif text-4xl font-semibold leading-tight text-white sm:mt-7 sm:text-5xl lg:mt-8 lg:text-6xl xl:text-7xl">

                Discover the Finest

                <span className="mt-2 block bg-gradient-to-r from-[#F7E7B4] via-[#D8AE52] to-[#B8860B] bg-clip-text text-transparent sm:mt-3">
                    Luxury Collections
                </span>

            </h2>

            {/* Description */}

            <p className="mx-auto mt-6 max-w-3xl px-2 text-sm leading-7 text-zinc-400 sm:mt-7 sm:text-base sm:leading-8 lg:mt-8 lg:px-0 lg:text-lg lg:leading-9">

                Experience an exclusive collection of the world's most iconic
                luxury whisky houses. Every brand represents exceptional
                craftsmanship, timeless heritage, and unmatched quality,
                carefully curated for the Black Oak Society.

            </p>

        </div>
    );
}

export default BrandHeader;