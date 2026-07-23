import { ArrowRight } from "lucide-react";
import editorial from "./editorialData";

function EditorialContent() {
    return (
        <div className="mx-auto w-full max-w-[680px] text-center lg:mx-0 lg:max-w-[760px] lg:text-left">

            {/* Label */}

            <div className="mb-8 flex items-center justify-center gap-5 lg:justify-start">
                <span className="h-px w-16 bg-gradient-to-r from-[#C89B3C] to-transparent" />

                <span className="text-xs font-semibold uppercase tracking-[0.45em] text-[#C89B3C]">
                    {editorial.label}
                </span>
            </div>

            {/* Heading */}

            <h2 className="font-serif text-[52px] font-semibold leading-[0.9] tracking-[-0.05em] text-white sm:text-6xl lg:text-[84px] xl:text-[96px]">

                {editorial.title.first}

                <br />

                <span className="bg-gradient-to-r from-[#A8741A] via-[#E6C56F] to-[#FFF3C6] bg-clip-text text-transparent">
                    {editorial.title.highlight}
                </span>

            </h2>

            {/* Divider */}

            <div className="mx-auto mt-10 h-[2px] w-36 rounded-full bg-gradient-to-r from-[#C89B3C] via-[#F2D27C] to-transparent shadow-[0_0_25px_rgba(200,155,60,.45)] lg:mx-0" />

            {/* Description */}

            <p className="mt-10 max-w-[620px] text-[18px] leading-10 text-[#D7D7D7] drop-shadow-[0_2px_10px_rgba(0,0,0,.45)] lg:text-[19px]">

                {editorial.description}

            </p>

            {/* CTA */}

            <div className="mt-14 flex justify-center lg:justify-start">

                <button className="group inline-flex items-center gap-3 rounded-full border border-[#C89B3C] bg-[#111]/30 px-10 py-5 text-[13px] font-semibold uppercase tracking-[0.2em] text-white transition-all duration-500 hover:scale-105 hover:bg-[#C89B3C] hover:text-black hover:shadow-[0_20px_45px_rgba(200,155,60,.25)]">

                    <span>{editorial.buttonText}</span>

                    <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1.5" />

                </button>

            </div>

        </div>
    );
}

export default EditorialContent;