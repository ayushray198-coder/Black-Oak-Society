import { useRef } from "react";

import EditorialContent from "./EditorialContent";
import EditorialImage from "./EditorialImage";

import useEditorialAnimation from "../../hooks/useEditorialAnimation";

function EditorialSection() {
    const sectionRef = useRef(null);
    const imageRef = useRef(null);

    useEditorialAnimation(sectionRef, imageRef);

    return (
        <section
            ref={sectionRef}
            className="relative isolate overflow-hidden bg-[#050505] py-24 md:py-28 lg:min-h-screen lg:py-32"
        >
            {/* Base Background */}

            <div className="absolute inset-0 bg-[#050505]" />

            {/* Luxury Gold Ambient */}

            <div className="absolute -right-40 top-1/2 h-[700px] w-[700px] -translate-y-1/2 rounded-full bg-[#C89B3C]/10 blur-[180px]" />

            <div className="absolute -left-52 top-40 h-[520px] w-[520px] rounded-full bg-[#C89B3C]/6 blur-[170px]" />

            {/* Soft White Ambient */}

            <div className="absolute top-0 left-1/2 h-[450px] w-[450px] -translate-x-1/2 rounded-full bg-white/[0.03] blur-[170px]" />

            {/* Left Smoke */}

            <div className="absolute inset-y-0 left-0 w-[45%] bg-gradient-to-r from-[#050505] via-[#050505]/95 via-35% via-[#050505]/70 to-transparent" />

            {/* Right Fade */}

            <div className="absolute inset-y-0 right-0 w-40 bg-gradient-to-l from-[#050505] to-transparent" />

            {/* Top Fade */}

            <div className="absolute inset-x-0 top-0 h-44 bg-gradient-to-b from-black/55 via-black/15 to-transparent" />

            {/* Bottom Fade */}

            <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

            {/* Luxury Vignette */}

            <div className="absolute inset-0 shadow-[inset_0_0_220px_rgba(0,0,0,.85)]" />

            {/* Content */}

            <div className="relative z-20 mx-auto max-w-[1750px] px-6 md:px-10 xl:px-20">

                <div className="grid items-center gap-14 lg:grid-cols-[42%_58%] xl:gap-10">

                    {/* Content */}

                    <div className="order-2 lg:order-1">
                        <EditorialContent />
                    </div>

                    {/* Image */}

                    <div className="order-1 flex justify-center lg:order-2 lg:justify-end">
                        <EditorialImage ref={imageRef} />
                    </div>

                </div>

            </div>

        </section>
    );
}

export default EditorialSection;