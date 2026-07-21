import bottle from "../../assets/images/bottle.png";

function HeroBottle() {
    return (
        <div className="relative flex w-full items-center justify-center">

            {/* Background Golden Glow */}

            <div
                aria-hidden="true"
                className="pointer-events-none absolute h-[280px] w-[280px] rounded-full bg-[#C89B3C]/20 blur-[120px] sm:h-[340px] sm:w-[340px] md:h-[420px] md:w-[420px] lg:h-[520px] lg:w-[520px] xl:h-[620px] xl:w-[620px]"
            />

            {/* Bottle */}

            <img
                src={bottle}
                alt="Black Oak Society Premium Whisky Bottle"
                loading="eager"
                fetchPriority="high"
                decoding="async"
                draggable={false}
className="relative z-10 w-[160px] -translate-y-4 select-none object-contain drop-shadow-[0_45px_80px_rgba(0,0,0,.65)] will-change-transform sm:w-[210px] md:w-[265px] lg:w-[365px] xl:w-[440px] 2xl:w-[510px] animate-bottle"            />

            {/* Ground Glow */}

            <div
                aria-hidden="true"
                className="pointer-events-none absolute bottom-4 h-8 w-40 rounded-full bg-[#C89B3C]/18 blur-3xl sm:w-52 md:w-64 lg:w-72 xl:w-80"
            />

        </div>
    );
}

export default HeroBottle;