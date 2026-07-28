import { useLocation } from "react-router-dom";
import useCart from "../../hooks/useCart";
import useCheckout from "../../hooks/useCheckout";

const OrderSummary = () => {
  const location = useLocation();

  const { cart = [] } = useCart();

  const { calculateSummary } = useCheckout();

  // Buy Now Item
  const buyNowItem = location.state?.buyNowItem;

  // Cart ya Buy Now
  const items = buyNowItem ? [buyNowItem] : cart;

  const {
    subtotal,
    shippingCharge,
    tax,
    totalAmount,
  } = calculateSummary(items);

  return (
    <section className="rounded-2xl border border-[#C6A15B]/20 bg-[#111111]/80 p-5 backdrop-blur-xl">

      {/* Heading */}
      <div className="mb-5">
        <h2 className="text-lg font-semibold text-white">
          Order Summary
        </h2>

        <p className="mt-1 text-sm text-zinc-400">
          Review your order before placing it.
        </p>
      </div>

      {/* Items */}
      <div className="space-y-3">

        <div className="flex items-center justify-between text-sm">
          <span className="text-zinc-400">
            Items ({items.length})
          </span>

          <span className="text-white">
            ₹{subtotal.toFixed(2)}
          </span>
        </div>

        <div className="flex items-center justify-between text-sm">
          <span className="text-zinc-400">
            Shipping
          </span>

          <span className="text-white">
            ₹{shippingCharge.toFixed(2)}
          </span>
        </div>

        <div className="flex items-center justify-between text-sm">
          <span className="text-zinc-400">
            GST (18%)
          </span>

          <span className="text-white">
            ₹{tax.toFixed(2)}
          </span>
        </div>

      </div>

      {/* Divider */}
      <div className="my-5 h-px bg-gradient-to-r from-transparent via-[#C6A15B]/60 to-transparent" />

      {/* Total */}
      <div className="flex items-center justify-between">

        <span className="text-base font-semibold text-white">
          Grand Total
        </span>

        <span className="text-2xl font-bold text-[#C6A15B]">
          ₹{totalAmount.toFixed(2)}
        </span>

      </div>

      {/* Info */}
      <div className="mt-5 rounded-xl border border-[#C6A15B]/15 bg-[#171717] p-4">

        <p className="text-xs leading-6 text-zinc-400">
          Taxes and shipping charges are already included in
          the final amount. Your payment will be processed
          securely through Razorpay.
        </p>

      </div>

    </section>
  );
};

export default OrderSummary;