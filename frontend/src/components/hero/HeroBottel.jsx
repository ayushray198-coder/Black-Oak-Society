import bottle from "../../assets/images/bottle.png";

function HeroBottle() {
    return (
        <div className="relative flex w-full items-center justify-center">

            {/* Background Golden Glow */}
            <div
                className="
                    absolute
                    h-[280px]
                    w-[280px]
                    rounded-full
                    bg-[#C89B3C]/20
                    blur-[120px]

                    sm:h-[340px]
                    sm:w-[340px]

                    md:h-[420px]
                    md:w-[420px]

                    lg:h-[520px]
                    lg:w-[520px]

                    xl:h-[620px]
                    xl:w-[620px]
                "
            />

            {/* Bottle */}
            <img
                src={bottle}
                alt="Black Oak Premium Bottle"
                draggable="false"
                className="
                    relative
                    -translate-y-8
                    z-10
                    select-none
                    object-contain
                    drop-shadow-[0_45px_80px_rgba(0,0,0,.65)]

                    w-[170px]

                    sm:w-[220px]

                    md:w-[280px]

                    lg:w-[390px]

                    xl:w-[470px]

                    2xl:w-[540px]

                    animate-bottle
                "
            />

            {/* Ground Glow */}
            <div
                className="
                    absolute
                    bottom-4
                    h-8
                    w-40
                    rounded-full
                    bg-[#C89B3C]/18
                    blur-3xl

                    sm:w-52

                    md:w-64

                    lg:w-72

                    xl:w-80
                "
            />

        </div>
    );
}

export default HeroBottle;