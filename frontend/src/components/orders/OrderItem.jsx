import { Link } from "react-router-dom";

function OrderItem({ item }) {
  if (!item) return null;

  const {
    product,
    quantity,
    price,
  } = item;

  const image =
    product?.images?.[0]?.url ||
    "https://placehold.co/120x120/111111/C6A15B?text=Black+Oak";

  const name = product?.name || "Product";

  const brand = product?.brand?.name || "";

  const unitPrice = Number(price ?? product?.price ?? 0);

  const total = unitPrice * quantity;

  return (
    <article
      className="
        flex
        flex-col
        gap-5
        rounded-2xl
        border
        border-[#C6A15B]/15
        bg-[#111111]
        p-5
        transition-all
        duration-300
        hover:border-[#C6A15B]/35
        md:flex-row
        md:items-center
      "
    >
      {/* Product Image */}

      <Link
        to={`/products/${product?._id}`}
        className="shrink-0"
      >
        <img
          src={image}
          alt={name}
          className="
            h-28
            w-24
            rounded-xl
            border
            border-[#C6A15B]/10
            bg-[#0B0B0B]
            object-contain
            p-2
          "
        />
      </Link>

      {/* Product Info */}

      <div className="flex-1">

        <p className="text-xs uppercase tracking-[0.25em] text-[#C6A15B]">
          {brand}
        </p>

        <Link
          to={`/products/${product?._id}`}
          className="
            mt-2
            block
            text-xl
            font-semibold
            text-white
            transition
            hover:text-[#C6A15B]
          "
        >
          {name}
        </Link>

        <div className="mt-5 flex flex-wrap gap-8 text-sm">

          <div>
            <p className="text-zinc-500">
              Quantity
            </p>

            <p className="mt-1 text-white">
              {quantity}
            </p>
          </div>

          <div>
            <p className="text-zinc-500">
              Unit Price
            </p>

            <p className="mt-1 text-white">
              ₹{unitPrice.toLocaleString("en-IN")}
            </p>
          </div>

        </div>

      </div>

      {/* Total */}

      <div className="md:text-right">

        <p className="text-sm text-zinc-500">
          Total
        </p>

        <p className="mt-2 text-2xl font-semibold text-[#C6A15B]">
          ₹{total.toLocaleString("en-IN")}
        </p>

      </div>

    </article>
  );
}

export default OrderItem;