import { PackageSearch } from "lucide-react";
import { Link } from "react-router-dom";

function EmptyOrders() {
  return (
    <section
      className="
        flex
        flex-col
        items-center
        justify-center
        rounded-2xl
        border
        border-[#C6A15B]/15
        bg-[#111111]
        px-6
        py-20
        text-center
      "
    >
      {/* Icon */}

      <div
        className="
          flex
          h-20
          w-20
          items-center
          justify-center
          rounded-full
          border
          border-[#C6A15B]/20
          bg-[#C6A15B]/10
        "
      >
        <PackageSearch
          size={34}
          className="text-[#C6A15B]"
        />
      </div>

      {/* Heading */}

      <h2 className="mt-8 text-2xl font-semibold text-white">
        No Orders Yet
      </h2>

      {/* Description */}

      <p className="mt-3 max-w-md text-sm leading-7 text-zinc-400">
        Looks like you haven't placed any orders yet.
        Explore our premium collection and discover your
        next favourite bottle.
      </p>

      {/* CTA */}

      <Link
        to="/products"
        className="
          mt-8
          inline-flex
          items-center
          justify-center
          rounded-xl
          bg-[#C6A15B]
          px-6
          py-3
          font-medium
          text-black
          transition-all
          duration-300
          hover:brightness-110
        "
      >
        Continue Shopping
      </Link>
    </section>
  );
}

export default EmptyOrders;