import { ArrowRight, ShoppingBag } from "lucide-react";
import { Link } from "react-router-dom";

const EmptyCart = () => {
  return (
    <section className="rounded-3xl border border-amber-400/15 bg-white/[0.03] p-10 text-center backdrop-blur-xl">
      <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full border border-amber-400/20 bg-amber-400/10">
        <ShoppingBag size={42} className="text-amber-300" />
      </div>

      <p className="mt-8 text-xs uppercase tracking-[0.35em] text-amber-300/80">
        Black Oak Society
      </p>

      <h2 className="mt-4 text-4xl font-light text-white">
        Your Cart is Empty
      </h2>

      <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-white/60">
        Discover our curated collection of premium whiskies and handcrafted
        spirits. Add your favourite bottles to begin your luxury shopping
        experience.
      </p>

      <Link
        to="/shop"
        className="mx-auto mt-10 inline-flex items-center gap-3 rounded-2xl bg-gradient-to-r from-amber-400 to-yellow-500 px-8 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-black transition hover:scale-[1.03]"
      >
        Explore Collection
        <ArrowRight size={18} />
      </Link>

      <div className="mt-12 grid gap-5 md:grid-cols-3">
        {[
          {
            title: "Authentic Collection",
            text: "Every bottle is sourced from trusted premium distributors.",
          },
          {
            title: "Secure Checkout",
            text: "Protected payment experience with encrypted transactions.",
          },
          {
            title: "Luxury Delivery",
            text: "Premium packaging with careful doorstep delivery.",
          },
        ].map((card) => (
          <div
            key={card.title}
            className="rounded-2xl border border-white/10 bg-white/[0.02] p-6"
          >
            <h3 className="text-lg text-white">{card.title}</h3>
            <p className="mt-3 text-sm leading-6 text-white/55">
              {card.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default EmptyCart;
