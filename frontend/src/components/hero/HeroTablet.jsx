import HeroBottle from "./HeroBottel";
import HeroContent from "./HeroContent";

function HeroTablet() {
    return (
        <section
            className="mx-auto flex min-h-screen w-full max-w-4xl flex-col items-center justify-center px-10 py-16"
            aria-label="Black Oak Society Hero"
        >
            {/* ================= Content ================= */}

            <HeroContent
                align="center"
                buttonDirection="column"
            />

            {/* ================= Bottle ================= */}

            <div className="mt-12 flex justify-center">
                <HeroBottle />
            </div>
        </section>
    );
}

export default HeroTablet;