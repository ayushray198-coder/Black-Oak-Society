import { useMemo } from "react";
import { ArrowRight, ShieldCheck, TicketPercent } from "lucide-react";
import { useNavigate } from "react-router-dom";


const CartSummary = ({ cart = [], loading = false }) => {
  const subtotal = useMemo(() => cart.reduce((t, i) => t + i.price * i.quantity, 0), [cart]);
  const compareSubtotal = useMemo(() => cart.reduce((t, i) => {
    const compare = i.product?.comparePrice || i.product?.price || 0;
    return t + compare * i.quantity;
  }, 0), [cart]);

  const savings = Math.max(0, compareSubtotal - subtotal);
  const shipping = subtotal >= 5000 || subtotal === 0 ? 0 : 199;
  const tax = Math.round(subtotal * 0.18);
  const total = subtotal + shipping + tax;


  const navigate = useNavigate();

  const formatPrice = (price = 0) => new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(price);

  return (
    <aside className="sticky top-28 rounded-3xl border border-amber-400/15 bg-white/[0.03] p-7 backdrop-blur-xl shadow-[0_20px_60px_rgba(0,0,0,.45)]">
      <div className="mb-8">
        <p className="text-xs uppercase tracking-[0.35em] text-amber-400/70">Order Summary</p>
        <h2 className="mt-3 text-3xl font-light text-white">Secure Checkout</h2>
        <p className="mt-3 text-sm leading-7 text-white/55">
          Review your order before proceeding to our encrypted payment gateway.
        </p>
      </div>

      <div className="mb-8">
        <label className="mb-3 flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-amber-300/70">
          <TicketPercent size={15} /> Promo Code
        </label>
        <div className="flex gap-3">
          <input
            type="text"
            placeholder="BLACKOAK10"
            className="flex-1 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none placeholder:text-white/30 focus:border-amber-400/50"
          />
          <button className="rounded-xl border border-amber-400/30 px-5 text-sm font-medium text-amber-300 hover:bg-amber-400 hover:text-black">
            Apply
          </button>
        </div>
      </div>

      <div className="space-y-5">
        <div className="flex justify-between"><span className="text-white/60">Subtotal</span><span>{formatPrice(subtotal)}</span></div>
        <div className="flex justify-between"><span className="text-white/60">Shipping</span><span>{shipping === 0 ? "Free" : formatPrice(shipping)}</span></div>
        <div className="flex justify-between"><span className="text-white/60">Estimated Tax</span><span>{formatPrice(tax)}</span></div>
        <div className="flex justify-between"><span className="text-white/60">Savings</span><span className="text-emerald-400">- {formatPrice(savings)}</span></div>

        <div className="my-6 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />

        <div className="flex items-end justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-white/45">Total Payable</p>
            <h3 className="mt-2 text-4xl font-light text-white">{formatPrice(total)}</h3>
          </div>
          <ShieldCheck className="text-emerald-400" size={28} />
        </div>
      </div>

      <button
        disabled={loading || cart.length === 0}
        onClick={() => navigate("/checkout")}
        className="mt-10 flex w-full items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-amber-400 to-yellow-500 px-6 py-4 font-semibold text-black"
      >
        {loading ? "Processing..." : "Proceed to Checkout"}
        <ArrowRight size={18} />
      </button>

      <div className="mt-8 rounded-2xl border border-emerald-500/20 bg-emerald-500/5 p-5">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-emerald-300">Shipping</p>
            <p className="mt-2 text-sm text-white/70">Complimentary delivery on premium orders above ₹5,000.</p>
          </div>
          <ShieldCheck size={26} className="text-emerald-400" />
        </div>
      </div>

      {!loading && cart.length === 0 && (
        <div className="mt-8 rounded-2xl border border-dashed border-white/10 p-6 text-center">
          <p className="text-white/70">Your cart is currently empty.</p>
        </div>
      )}
    </aside>
  );
};

export default CartSummary;