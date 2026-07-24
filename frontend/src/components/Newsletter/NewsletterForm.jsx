import { ArrowRight } from "lucide-react";
import { newsletterData } from "./newsletterData";

function NewsletterForm() {
    const { placeholder, buttonText } = newsletterData;

    return (
        <form
            className="
                mx-auto
                mt-10
                flex
                w-full
                max-w-3xl
                flex-col
                overflow-hidden
                rounded-full
                border border-[#C89B3C]/20
                bg-black/35
                backdrop-blur-xl
                sm:flex-row
            "
        >
            {/* Input */}

            <input
                type="email"
                placeholder={placeholder}
                className="
                    h-16
                    flex-1
                    bg-transparent
                    px-7
                    text-[15px]
                    text-white
                    placeholder:text-white/35
                    outline-none
                "
            />

            {/* Divider */}

            <div className="hidden w-px bg-[#C89B3C]/15 sm:block" />

            {/* Button */}

            <button
                type="submit"
                className="
                    group
                    flex
                    h-16
                    items-center
                    justify-center
                    gap-3
                    bg-[#C89B3C]
                    px-8
                    text-[14px]
                    font-medium
                    tracking-[0.15em]
                    text-black
                    uppercase
                    transition-all
                    duration-500
                    hover:bg-[#D4AF37]
                "
            >
                {buttonText}

                <ArrowRight
                    size={17}
                    className="
                        transition-transform
                        duration-500
                        group-hover:translate-x-1
                    "
                />
            </button>
        </form>
    );
}

export default NewsletterForm;