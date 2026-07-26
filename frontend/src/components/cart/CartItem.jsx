import { Minus, Plus, Trash2, PackageCheck } from "lucide-react";

const CartItem = ({
  item,
  onIncrease,
  onDecrease,
  onRemove,
}) => {
  if (!item?.product) return null;

  const {
    name,
    description,
    images,
    brand,
    category,
    price,
    comparePrice,
    stock,
  } = item.product;

  const image = images?.[0]?.url;
  const savings = Math.max(0, (comparePrice || price) - price);
  const lineTotal = item.quantity * item.price;

  const formatPrice = (v = 0) =>
    new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(v);

  return (
    <article className="rounded-3xl border border-amber-400/15 bg-white/[0.03] p-6 backdrop-blur-xl transition hover:border-amber-400/35">
      <div className="flex flex-col gap-6 lg:flex-row">
        <div className="h-56 w-full overflow-hidden rounded-2xl bg-black lg:w-56">
          <img
            src={image}
            alt={name}
            className="h-full w-full object-contain transition duration-500 hover:scale-105"
          />
        </div>

        <div className="flex-1">
          <div className="flex flex-wrap items-center gap-2">
            <span className="rounded-full border border-amber-400/30 px-3 py-1 text-xs text-amber-300">
              {brand?.name || "Premium"}
            </span>

            <span className="rounded-full bg-white/5 px-3 py-1 text-xs text-white/60">
              {category?.name || "Luxury"}
            </span>
          </div>

          <h2 className="mt-4 text-3xl font-light text-white">{name}</h2>

          <p className="mt-3 line-clamp-2 text-sm leading-7 text-white/55">
            {description}
          </p>

          <div className="mt-5 flex items-center gap-2 text-emerald-400">
            <PackageCheck size={18} />
            <span className="text-sm">
              {stock > 0 ? `In Stock (${stock})` : "Out of Stock"}
            </span>
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-between gap-5">
            <div className="flex items-center rounded-xl border border-white/10">
              <button
                onClick={() => onDecrease(item)}
                className="p-3 hover:bg-white/10"
              >
                <Minus size={18} />
              </button>

              <span className="min-w-12 px-4 text-center text-white">
                {item.quantity}
              </span>

              <button
                onClick={() => onIncrease(item)}
                className="p-3 hover:bg-white/10"
              >
                <Plus size={18} />
              </button>
            </div>

            <button
              onClick={() => onRemove(item)}
              className="flex items-center gap-2 text-red-400 hover:text-red-300"
            >
              <Trash2 size={18} />
              Remove
            </button>
          </div>
        </div>

        <div className="min-w-[220px] border-t border-white/10 pt-6 lg:border-l lg:border-t-0 lg:pl-6 lg:pt-0">
          <p className="text-sm text-white/50">Unit Price</p>
          <h3 className="mt-2 text-3xl text-white">{formatPrice(price)}</h3>

          {comparePrice > price && (
            <>
              <p className="mt-2 line-through text-white/35">
                {formatPrice(comparePrice)}
              </p>
              <p className="mt-1 text-sm text-emerald-400">
                Save {formatPrice(savings)}
              </p>
            </>
          )}

          <div className="my-6 h-px bg-white/10" />

          <p className="text-sm text-white/50">Line Total</p>
          <p className="mt-2 text-2xl font-semibold text-amber-300">
            {formatPrice(lineTotal)}
          </p>
        </div>
      </div>
    </article>
  );
};

export default CartItem;
