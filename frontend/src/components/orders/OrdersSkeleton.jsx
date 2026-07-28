function SkeletonCard() {
  return (
    <div
      className="
        animate-pulse
        rounded-2xl
        border
        border-[#C6A15B]/10
        bg-[#111111]
        p-6
      "
    >
      {/* Header */}

      <div className="flex items-start justify-between">
        <div className="space-y-3">
          <div className="h-3 w-20 rounded bg-zinc-800" />

          <div className="h-5 w-56 rounded bg-zinc-700" />

          <div className="h-3 w-28 rounded bg-zinc-800" />
        </div>

        <div className="h-8 w-24 rounded-full bg-zinc-800" />
      </div>

      {/* Divider */}

      <div className="my-6 h-px bg-zinc-800" />

      {/* Details */}

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {[...Array(4)].map((_, index) => (
          <div key={index} className="space-y-3">
            <div className="h-3 w-16 rounded bg-zinc-800" />

            <div className="h-5 w-24 rounded bg-zinc-700" />
          </div>
        ))}
      </div>

      {/* Button */}

      <div className="mt-8 flex justify-end">
        <div className="h-11 w-36 rounded-xl bg-zinc-800" />
      </div>
    </div>
  );
}

function OrdersSkeleton({
  count = 4,
}) {
  return (
    <div className="space-y-6">
      {Array.from({ length: count }).map((_, index) => (
        <SkeletonCard key={index} />
      ))}
    </div>
  );
}

export default OrdersSkeleton;