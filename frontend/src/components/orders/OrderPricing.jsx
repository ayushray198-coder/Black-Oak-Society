function OrderPricing({ order }) {
  if (!order) return null;

  const subtotal = Number(order.subTotal ?? order.subtotal ?? 0);
  const shipping = Number(order.shippingCharge ?? order.shipping ?? 0);
  const tax = Number(order.tax ?? order.gst ?? 0);
  const discount = Number(order.discount ?? 0);

  const total =
    Number(
      order.totalAmount ??
        subtotal + shipping + tax - discount
    ) || 0;

  return (
    <section
      className="
        rounded-2xl
        border
        border-[#C6A15B]/15
        bg-[#111111]
        p-6
      "
    >
      {/* Heading */}

      <div className="mb-6">
        <h4 className="text-lg font-semibold text-white">
          Order Pricing
        </h4>

        <p className="mt-1 text-sm text-zinc-500">
          Price breakdown for this order
        </p>
      </div>

      {/* Pricing */}

      <div className="space-y-4">

        <div className="flex items-center justify-between">
          <span className="text-zinc-400">
            Subtotal
          </span>

          <span className="text-white">
            ₹{subtotal.toLocaleString("en-IN")}
          </span>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-zinc-400">
            Shipping
          </span>

          <span className="text-white">
            ₹{shipping.toLocaleString("en-IN")}
          </span>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-zinc-400">
            GST
          </span>

          <span className="text-white">
            ₹{tax.toLocaleString("en-IN")}
          </span>
        </div>

        {discount > 0 && (
          <div className="flex items-center justify-between">
            <span className="text-zinc-400">
              Discount
            </span>

            <span className="text-emerald-400">
              -₹{discount.toLocaleString("en-IN")}
            </span>
          </div>
        )}

        <div className="border-t border-[#C6A15B]/10 pt-4">

          <div className="flex items-center justify-between">

            <span className="text-lg font-semibold text-white">
              Grand Total
            </span>

            <span className="text-2xl font-bold text-[#C6A15B]">
              ₹{total.toLocaleString("en-IN")}
            </span>

          </div>

        </div>

      </div>
    </section>
  );
}

export default OrderPricing;
