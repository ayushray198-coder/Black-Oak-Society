import { ShoppingBag } from "lucide-react";

const CartHeader = ({ totalItems = 0 }) => {
  return (
    <section className="mb-10 rounded-3xl border border-amber-400/15 bg-white/[0.03] p-8 backdrop-blur-xl">
      <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div>
          <div className="flex items-center gap-3">
            <ShoppingBag className="text-amber-400" size={22} />
            <span className="text-xs uppercase tracking-[0.35em] text-amber-300">
              Black Oak Society
            </span>
          </div>

          <h2 className="mt-4 text-4xl font-light text-white md:text-5xl">
            Your Shopping Cart
          </h2>

          <p className="mt-4 max-w-2xl text-sm leading-7 text-white/60">
            Review your curated luxury collection before proceeding to secure
            checkout. Every bottle is sourced for authenticity and premium
            craftsmanship.
          </p>
        </div>

        <div className="rounded-2xl border border-amber-400/20 bg-black/20 px-8 py-6 text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-white/50">
            Items
          </p>

          <h3 className="mt-2 text-5xl font-light text-amber-300">
            {totalItems}
          </h3>

          <p className="mt-2 text-sm text-white/55">
            {totalItems === 1 ? "Product" : "Products"} in your cart
          </p>
        </div>
      </div>
    </section>
  );
};

export default CartHeader;
