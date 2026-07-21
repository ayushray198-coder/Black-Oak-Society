import HeroBottle from "./HeroBottel";
import HeroContent from "./HeroContent";

function HeroDesktop() {
    return (
        <section
            className="mx-auto flex h-[88vh] w-full max-w-[1700px] items-center justify-between px-16 pt-16 xl:px-24 2xl:px-32"
            aria-label="Black Oak Society Hero"
        >
            {/* ================= Left Content ================= */}

            <div className="flex flex-1 items-center justify-start">
                <HeroContent align="left" />
            </div>

            {/* ================= Right Bottle ================= */}

            <div className="flex flex-1 items-center justify-end">
                <HeroBottle />
            </div>
        </section>
    );
}

export default HeroDesktop;