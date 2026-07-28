import { CreditCard, Wallet } from "lucide-react";

function PaymentDetails({
  paymentMethod,
  paymentStatus,
  paymentId,
  paidAt,
}) {
  const statusClass =
    paymentStatus === "Paid"
      ? "text-emerald-400"
      : paymentStatus === "Failed"
      ? "text-red-400"
      : "text-yellow-400";

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

      <div className="mb-6 flex items-center gap-3">

        <div
          className="
            flex
            h-10
            w-10
            items-center
            justify-center
            rounded-full
            bg-[#C6A15B]/10
            text-[#C6A15B]
          "
        >
          <Wallet size={18} />
        </div>

        <div>
          <h4 className="text-lg font-semibold text-white">
            Payment Details
          </h4>

          <p className="text-sm text-zinc-500 mt-1">
            Payment information
          </p>
        </div>

      </div>

      {/* Details */}

      <div className="space-y-5">

        <div className="flex items-center justify-between">
          <span className="text-zinc-500">
            Payment Method
          </span>

          <div className="flex items-center gap-2 text-white">
            <CreditCard size={16} />
            <span>{paymentMethod || "-"}</span>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-zinc-500">
            Payment Status
          </span>

          <span className={`font-medium ${statusClass}`}>
            {paymentStatus || "Pending"}
          </span>
        </div>

        {paymentId && (
          <div className="flex items-center justify-between gap-5">
            <span className="text-zinc-500">
              Payment ID
            </span>

            <span className="break-all text-right text-white">
              {paymentId}
            </span>
          </div>
        )}

        {paidAt && (
          <div className="flex items-center justify-between gap-5">
            <span className="text-zinc-500">
              Paid On
            </span>

            <span className="text-white">
              {new Date(paidAt).toLocaleString("en-IN", {
                dateStyle: "medium",
                timeStyle: "short",
              })}
            </span>
          </div>
        )}

      </div>
    </section>
  );
}

export default PaymentDetails;