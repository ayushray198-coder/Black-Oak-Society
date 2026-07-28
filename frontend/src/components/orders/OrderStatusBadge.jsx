const statusStyles = {
  Pending: {
    label: "Pending",
    className:
      "border border-yellow-500/20 bg-yellow-500/10 text-yellow-400",
  },

  Processing: {
    label: "Processing",
    className:
      "border border-blue-500/20 bg-blue-500/10 text-blue-400",
  },

  Shipped: {
    label: "Shipped",
    className:
      "border border-purple-500/20 bg-purple-500/10 text-purple-400",
  },

  Delivered: {
    label: "Delivered",
    className:
      "border border-emerald-500/20 bg-emerald-500/10 text-emerald-400",
  },

  Cancelled: {
    label: "Cancelled",
    className:
      "border border-red-500/20 bg-red-500/10 text-red-400",
  },
};

function OrderStatusBadge({
  status = "Pending",
}) {
  const badge =
    statusStyles[status] || statusStyles.Pending;

  return (
    <span
      className={`
        inline-flex
        items-center
        rounded-full
        px-3
        py-1
        text-xs
        font-medium
        tracking-wide
        ${badge.className}
      `}
    >
      {badge.label}
    </span>
  );
}

export default OrderStatusBadge;