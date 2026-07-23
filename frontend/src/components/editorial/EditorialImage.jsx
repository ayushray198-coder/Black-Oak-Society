import { forwardRef } from "react";

import model from "../../assets/images/editorial-model.png";

const EditorialImage = forwardRef((props, ref) => {
    return (
        <div className="relative flex w-full items-center justify-center overflow-hidden">

            {/* Gold Ambient Glow */}

            <div
                aria-hidden="true"
                className="absolute bottom-16 h-[480px] w-[480px] rounded-full bg-[#C89B3C]/15 blur-[130px]"
            />

            {/* Luxury Frame */}

            <div className="relative z-20 overflow-hidden rounded-[32px] border border-[#C89B3C]/20 bg-[#0B0B0B] shadow-[0_30px_70px_rgba(0,0,0,.7),0_0_50px_rgba(200,155,60,.12)]">

                <img
                    ref={ref}
                    src={model}
                    alt="Editorial Model"
                    draggable={false}
                    className="
                        h-[520px]
                        w-[360px]
                        object-cover
                        object-center
                        select-none
                        transition-all
                        duration-700
                        hover:scale-[1.02]

                        sm:h-[600px]
                        sm:w-[420px]

                        md:h-[680px]
                        md:w-[470px]

                        lg:h-[760px]
                        lg:w-[520px]

                        xl:h-[820px]
                        xl:w-[560px]
                    "
                />

                {/* Top Overlay */}

                <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-black/35 to-transparent" />

                {/* Bottom Overlay */}

                <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/55 via-black/20 to-transparent" />

                {/* Right Gold Reflection */}

                <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-[#C89B3C]/12 to-transparent" />

                {/* Left Shadow */}

                <div className="absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-black/25 to-transparent" />

            </div>

        </div>
    );
});

EditorialImage.displayName = "EditorialImage";

export default EditorialImage;