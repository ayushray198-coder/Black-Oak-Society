import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

function FeaturedCTA() {
    return (
        <div className="mt-10 flex flex-col items-center justify-center">

            {/* CTA */}

            <Link
                to="/shop"
                className="group relative inline-flex items-center gap-4 overflow-hidden rounded-full border border-[#C89B3C]/40 bg-white/[0.04] px-10 py-4 text-sm font-semibold uppercase tracking-[0.22em] text-[#C89B3C] backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:border-[#C89B3C] hover:bg-[#C89B3C] hover:text-black hover:shadow-[0_20px_50px_rgba(200,155,60,0.30)]"
            >

                {/* Shine */}

                <span className="absolute -left-20 top-0 h-full w-16 -skew-x-12 bg-white/40 blur-md transition-all duration-1000 group-hover:left-[130%]" />

                <span className="relative z-10">
                    View Full Collection
                </span>

                <ArrowRight
                    size={18}
                    className="relative z-10 transition-transform duration-300 group-hover:translate-x-1.5"
                />

            </Link>

            {/* Supporting Text */}

            <p className="mt-6 max-w-xl text-center text-sm leading-7 text-white/45">
                Explore our complete selection of premium whiskies, rare editions
                and timeless luxury spirits.
            </p>

            {/* Luxury Divider */}

            <div className="mt-14 flex w-full max-w-lg items-center justify-center gap-5">

                <span className="h-px flex-1 bg-gradient-to-r from-transparent via-[#C89B3C]/30 to-transparent" />

                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#C89B3C]/20 bg-[#C89B3C]/10 backdrop-blur-xl transition-all duration-500 group-hover:scale-110">

                    <div className="h-2.5 w-2.5 rotate-45 rounded-[2px] bg-[#C89B3C]" />

                </div>

                <span className="h-px flex-1 bg-gradient-to-l from-transparent via-[#C89B3C]/30 to-transparent" />

            </div>

        </div>
    );
}

export default FeaturedCTA;