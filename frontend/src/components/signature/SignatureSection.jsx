import SignatureHeader from "./SignatureHeader";
import SignatureGrid from "./SignatureGrid";
import signatureData from "./signatureData";

import useSignatureAnimation from "../../hooks/useSignatureAnimation";
import useSignatureProducts from "../../hooks/useSignatureProducts";

function SignatureSection() {
    const sectionRef = useSignatureAnimation();

    const {
        products,
        loading,
        error,
    } = useSignatureProducts();

    if (loading) {
        return (
            <section className="bg-[#050505] py-28 lg:py-36">
                <div className="mx-auto max-w-7xl px-6 text-center">
                    <p className="text-[#C89B3C] tracking-[0.25em] uppercase">
                        Loading Signature Collection...
                    </p>
                </div>
            </section>
        );
    }

    if (error) {
        return (
            <section className="bg-[#050505] py-28 lg:py-36">
                <div className="mx-auto max-w-7xl px-6 text-center">
                    <p className="text-red-400">
                        Failed to load signature collection.
                    </p>
                </div>
            </section>
        );
    }

    return (
        <section
            ref={sectionRef}
            className="relative overflow-hidden bg-[#050505] py-28 lg:py-36"
        >
            {/* Top Glow */}
            <div
                aria-hidden="true"
                className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-[#C89B3C]/10 blur-[140px]"
            />

            {/* Bottom Glow */}
            <div
                aria-hidden="true"
                className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-[#C89B3C]/5 blur-[180px]"
            />

            <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">

                <SignatureHeader />

                <SignatureGrid products={products} />

                <div className="mt-20 flex justify-center">
                    <button
                        className="
        group relative overflow-hidden
        rounded-full border border-[#C89B3C]/30
        px-8 py-4
        text-sm uppercase tracking-[0.3em]
        text-[#D4AF37]
        transition-all duration-500
        hover:-translate-y-1
        hover:scale-105
        hover:border-[#C89B3C]
        hover:shadow-[0_10px_35px_rgba(200,155,60,0.25)]
        active:scale-95
    "
                    >
                        <span
                            className="
            absolute inset-0
            -translate-x-full
            bg-gradient-to-r
            from-transparent
            via-white/10
            to-transparent
            transition-transform duration-700
            group-hover:translate-x-full
        "
                        />

                        <span className="relative z-10">
                            {signatureData.buttonText}
                        </span>
                    </button>
                </div>

            </div>
        </section>
    );
}

export default SignatureSection;