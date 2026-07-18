import HeroBottle from "./HeroBottel";
import HeroContent from "./HeroContent";

function HeroDesktop() {
    return (
        <div className="mx-auto flex min-h-screen w-full max-w-[1700px] items-center justify-between px-16 xl:px-24 2xl:px-32">

            {/* ================= Left Content ================= */}

            <div className="flex flex-1 justify-start">
                <HeroContent align="left" />
            </div>

            {/* ================= Right Bottle ================= */}

            <div className="flex flex-1 items-center justify-end">
                <HeroBottle />
            </div>

        </div>
    );
}

export default HeroDesktop;