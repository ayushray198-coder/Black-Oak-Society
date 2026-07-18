import HeroBottle from "./HeroBottel";
import HeroContent from "./HeroContent";

function HeroTablet() {
    return (
        <div className="mx-auto flex min-h-screen w-full max-w-4xl flex-col items-center justify-center px-10 py-16">

            {/* ================= Content ================= */}

            <HeroContent align="center"  showButtons={false} />

            {/* ================= Bottle ================= */}

            <div className="mt-12 flex justify-center">
                <HeroBottle />
            </div>

            {/* ================= Bottom CTA ================= */}

            <div className="mt-10 flex w-full max-w-md flex-col gap-4">
                <button
                    className="
                        rounded-full
                        bg-[#C89B3C]
                        px-8
                        py-4
                        font-semibold
                        text-black
                        transition-all
                        duration-300
                        hover:scale-[1.02]
                        hover:shadow-[0_0_35px_rgba(200,155,60,.35)]
                    "
                >
                    Explore Collection
                </button>

                <button
                    className="
                        rounded-full
                        border
                        border-[#C89B3C]
                        px-8
                        py-4
                        transition-all
                        duration-300
                        hover:bg-[#C89B3C]
                        hover:text-black
                    "
                >
                    Our Story
                </button>
            </div>

        </div>
    );
}

export default HeroTablet;