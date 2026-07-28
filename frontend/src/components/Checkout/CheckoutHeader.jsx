import { ShieldCheck } from "lucide-react";

const CheckoutHeader = () => {
  return (
    <section className="border-b mt-5 border-[#D8B46A]/20 pb-6 sm:pb-8">
      <div className="flex flex-col items-center text-center gap-4">
        {/* Heading */}
        <h2 className="text-3xl mt-5 sm:text-4xl lg:text-5xl font-serif font-semibold tracking-wide text-white">
          Checkout
        </h2>

        {/* Subtitle */}
        <p className="max-w-2xl text-sm sm:text-base text-gray-400 leading-relaxed">
          Securely complete your purchase and enjoy an effortless luxury
          shopping experience with Black Oak Society.
        </p>

        {/* Security Badge */}
        <div className="inline-flex items-center gap-2 rounded-full border border-[#D8B46A]/30 bg-[#D8B46A]/10 px-4 py-2">
          <ShieldCheck
            size={18}
            className="text-[#D8B46A] flex-shrink-0"
          />

          <span className="text-xs sm:text-sm font-medium text-[#D8B46A] tracking-wide">
            256-bit Secure Checkout
          </span>
        </div>
      </div>
    </section>
  );
};

export default CheckoutHeader;