import { CheckCircle2, ArrowRight, Package } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";

const OrderSuccess = () => {
  const navigate = useNavigate();
  const { state } = useLocation();

  const order = state?.order;

  if (!order) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#0B0B0B] px-6">
        <div className="rounded-2xl border border-[#C6A15B]/20 bg-[#111111] p-8 text-center">
          <h2 className="text-2xl font-semibold text-white">
            Order not found
          </h2>

          <p className="mt-3 text-zinc-400">
            We couldn't find your order details.
          </p>

          <button
            onClick={() => navigate("/")}
            className="mt-6 rounded-xl bg-[#C6A15B] px-6 py-3 font-medium text-black transition hover:opacity-90"
          >
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <section className="min-h-screen bg-[#0B0B0B] px-5 py-16">
      <div className="mx-auto max-w-3xl">

        {/* Success Icon */}

        <div className="flex justify-center">
          <div className="flex h-24 w-24 mt-5 items-center justify-center rounded-full border border-green-500/20 bg-green-500/10">
            <CheckCircle2
              size={60}
              className="text-green-500"
            />
          </div>
        </div>

        {/* Heading */}

        <div className="mt-8 text-center">
          <p className="text-sm uppercase tracking-[5px] text-[#C6A15B]">
            Black Oak Society
          </p>

          <h3 className="mt-3 text-4xl font-bold text-white">
            Payment Successful
          </h3>

          <p className="mt-4 text-zinc-400">
            Thank you for your purchase.
            <br />
            Your luxury order has been placed successfully.
          </p>
        </div>

        {/* Order Card */}

        <div className="mt-12 rounded-3xl border border-[#C6A15B]/20 bg-[#111111]/90 p-8">

          <div className="mb-8 flex items-center gap-3">
            <Package className="text-[#C6A15B]" />
            <h4 className="text-xl font-semibold text-white">
              Order Details
            </h4>
          </div>

          <div className="space-y-6">

            <div className="flex justify-between border-b border-white/5 pb-4">
              <span className="text-zinc-400">
                Order ID
              </span>

              <span className="font-medium text-white">
                {order._id}
              </span>
            </div>

            <div className="flex justify-between border-b border-white/5 pb-4">
              <span className="text-zinc-400">
                Payment Status
              </span>

              <span className="font-medium text-green-500">
                {order.paymentStatus}
              </span>
            </div>

            <div className="flex justify-between border-b border-white/5 pb-4">
              <span className="text-zinc-400">
                Order Status
              </span>

              <span className="font-medium text-[#C6A15B]">
                {order.orderStatus}
              </span>
            </div>

            <div className="flex justify-between border-b border-white/5 pb-4">
              <span className="text-zinc-400">
                Payment Method
              </span>

              <span className="font-medium text-white">
                {order.paymentMethod}
              </span>
            </div>

            <div className="flex justify-between">
              <span className="text-zinc-400">
                Total Amount
              </span>

              <span className="text-xl font-semibold text-[#C6A15B]">
                ₹{order.totalAmount}
              </span>
            </div>

          </div>

        </div>

        {/* Buttons */}

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">

          <button
            onClick={() => navigate("/shop")}
            className="flex-1 rounded-xl bg-[#C6A15B] px-6 py-4 font-semibold text-black transition hover:opacity-90"
          >
            Continue Shopping
          </button>

          <button
            onClick={() => navigate("/orders")}
            className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-[#C6A15B]/30 bg-[#111111] px-6 py-4 font-semibold text-white transition hover:border-[#C6A15B]"
          >
            View My Orders
            <ArrowRight size={18} />
          </button>

        </div>

      </div>
    </section>
  );
};

export default OrderSuccess;