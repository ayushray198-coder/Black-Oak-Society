import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import OrderStatusBadge from "./OrderStatusBadge";

const formatDate = (date) => {
  if (!date) return "-";

  return new Date(date).toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
};

function OrderCard({ order }) {
  if (!order) return null;

  const {
    _id,
    createdAt,
    orderStatus,
    paymentMethod,
    paymentStatus,
    totalAmount,
    items = [],
  } = order;

  return (
    <article
      className="rounded-2xl border border-[#C6A15B]/15 bg-[#111111] px-6 pt-5 pb-4"
    >
      {/* Header */}

      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">

        <div>
          <p className="text-xs uppercase tracking-[0.25em] text-zinc-500">
            Order ID
          </p>

          <h3 className="mt-2 font-medium text-white break-all">
            {_id}
          </h3>

          <p className="mt-2 text-sm text-zinc-400">
            {formatDate(createdAt)}
          </p>
        </div>

        <OrderStatusBadge status={orderStatus} />
      </div>

      {/* Divider */}

      <div className="my-6 h-px bg-white/5" />

      {/* Details */}

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

        <div>
          <p className="text-xs uppercase tracking-wider text-zinc-500">
            Payment
          </p>

          <p className="mt-2 text-white">
            {paymentMethod}
          </p>
        </div>

        <div>
          <p className="text-xs uppercase tracking-wider text-zinc-500">
            Payment Status
          </p>

          <p
            className={`mt-2 font-medium ${
              paymentStatus === "Paid"
                ? "text-emerald-400"
                : "text-yellow-400"
            }`}
          >
            {paymentStatus}
          </p>
        </div>

        <div>
          <p className="text-xs uppercase tracking-wider text-zinc-500">
            Items
          </p>

          <p className="mt-2 text-white">
            {items.length}
          </p>
        </div>

        <div>
          <p className="text-xs uppercase tracking-wider text-zinc-500">
            Total
          </p>

          <p className="mt-2 text-xl font-semibold text-[#C6A15B]">
            ₹{Number(totalAmount || 0).toLocaleString("en-IN")}
          </p>
        </div>

      </div>

      {/* Footer */}

      <div className="mt-8 flex justify-end">

        <Link
          to={`/orders/${_id}`}
          className="
            inline-flex
            items-center
            gap-2
            rounded-xl
            border
            border-[#C6A15B]/20
            px-5
            py-3
            text-sm
            font-medium
            text-[#C6A15B]
            transition-all
            duration-300
            hover:border-[#C6A15B]
            hover:bg-[#C6A15B]/10
          "
        >
          View Details

          <ArrowRight size={16} />
        </Link>

      </div>
    </article>
  );
}

export default OrderCard;