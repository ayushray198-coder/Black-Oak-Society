import { forwardRef } from "react";

import heroBg from "../../assets/images/hero-bg.png";

import HeroDesktop from "./HeroDesktop";
import HeroTablet from "./HeroTablet";
import HeroMobile from "./HeroMobile";

const Hero = forwardRef((props, ref) => {
    return (
        <section
            ref={ref}
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

            {/* Bottom Dark Fade */}
            <div className="pointer-events-none absolute bottom-0 left-0 z-10 h-56 w-full bg-gradient-to-b from-transparent via-black/30 to-[#050505]" />

            {/* Golden Ambient */}
            <div className="pointer-events-none absolute bottom-0 left-1/2 z-10 h-36 w-[650px] -translate-x-1/2 rounded-full bg-[#C89B3C]/8 blur-[130px]" />

            {/* Premium Shadow */}
            <div
                className="pointer-events-none absolute bottom-0 left-0 z-10 h-40 w-full"
                style={{
                    background:
                        "linear-gradient(to top, rgba(5,5,5,0.95) 0%, rgba(5,5,5,0.55) 40%, transparent 100%)",
                }}
            />

            {/* Golden Highlight */}
            <div
                className="pointer-events-none absolute bottom-0 left-1/2 z-10 h-20 w-[900px] -translate-x-1/2"
                style={{
                    background:
                        "radial-gradient(ellipse at center, rgba(200,155,60,0.08) 0%, rgba(200,155,60,0.03) 40%, transparent 75%)",
                    filter: "blur(40px)",
                }}
            />
        </section>
    );
});

Hero.displayName = "Hero";

export default Hero;