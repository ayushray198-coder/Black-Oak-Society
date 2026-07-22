import FeaturedCTA from "./FeaturedCTA";
import FeaturedHeader from "./FeaturedHeader";
import FeaturedSlider from "./FeaturedSlider";

function FeaturedCollection() {
    return (
        <section
            id="featured-collection"
            aria-labelledby="featured-collection-heading"
            className="relative overflow-hidden bg-[#050505] py-20 sm:py-24 lg:py-28 xl:py-32"
        >
            {/* Background Blur */}
            <div className="absolute left-0 top-32 h-72 w-72 rounded-full bg-[#C89B3C]/10 blur-[140px]" />
            <div className="absolute right-0 bottom-20 h-72 w-72 rounded-full bg-[#C89B3C]/10 blur-[160px]" />

            {/* Top Divider */}
            <div className="absolute top-0 left-1/2 h-px w-[92%] -translate-x-1/2 bg-gradient-to-r from-transparent via-[#C89B3C]/40 to-transparent" />

            {/* Bottom Divider */}
            <div className="absolute bottom-0 left-1/2 h-px w-[92%] -translate-x-1/2 bg-gradient-to-r from-transparent via-[#C89B3C]/20 to-transparent" />

            <div className="relative z-10 mx-auto flex w-full max-w-[1600px] flex-col gap-16 px-5 sm:px-6 lg:px-8 xl:px-12">

                <FeaturedHeader />

                <FeaturedSlider />

                <FeaturedCTA />

            </div>
        </section>
    );
}

export default FeaturedCollection;