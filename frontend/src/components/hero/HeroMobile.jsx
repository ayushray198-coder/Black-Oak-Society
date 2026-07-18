import HeroBottle from "./HeroBottel";
import HeroContent from "./HeroContent";

function HeroMobile() {
    return (
        <div className="mx-auto flex min-h-screen w-full max-w-md flex-col justify-center mt-2 px-6 py-12">

            {/* ================= Content ================= */}

            <HeroContent
                align="center"
                showButtons={false}
            />

            {/* ================= Bottle ================= */}

            <div className="mt-10 flex justify-center">
                <HeroBottle />
            </div>

            {/* ================= CTA ================= */}

            <div className="mt-10 flex flex-col gap-4">

                <button
                    className="
                        w-full
                        rounded-full
                        bg-[#C89B3C]
                        px-8
                        py-4
                        font-semibold
                        text-black
                        transition-all
                        duration-300
                        active:scale-95
                    "
                >
                    Explore Collection
                </button>

                <button
                    className="
                        w-full
                        rounded-full
                        border
                        border-[#C89B3C]
                        px-8
                        py-4
                        transition-all
                        duration-300
                        active:scale-95
                    "
                >
                    Our Story
                </button>

            </div>

        </div>
    );
}

export default HeroMobile;