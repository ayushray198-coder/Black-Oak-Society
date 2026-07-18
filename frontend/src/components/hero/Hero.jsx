import heroBg from "../../assets/images/hero-bg.png";

import HeroDesktop from "./HeroDesktop";
import HeroTablet from "./HeroTablet";
import HeroMobile from "./HeroMobile";

function Hero() {
    return (
        <section
            className="relative min-h-screen overflow-hidden text-white"
            style={{
                backgroundImage: `url(${heroBg})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
            }}
        >
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/35" />

            {/* Left Gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent lg:from-black/80 lg:via-black/30 lg:to-transparent" />

            {/* Desktop */}
            <div className="relative z-10 hidden lg:block">
                <HeroDesktop />
            </div>

            {/* Tablet */}
            <div className="relative z-10 hidden sm:block lg:hidden">
                <HeroTablet />
            </div>

            {/* Mobile */}
            <div className="relative z-10 block sm:hidden">
                <HeroMobile />
            </div>
        </section>
    );
}

export default Hero;