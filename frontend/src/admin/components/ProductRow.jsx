const ProductRow = ({
  product,
  onEdit,
  onDelete,
}) => {
  return (
    <tr className="border-b border-zinc-800 transition hover:bg-zinc-900/40">
      {/* Product */}
      <td className="px-6 py-5">
        <div className="flex items-center gap-4">
          <img
            src={product.images?.[0]?.url}
            alt={product.name}
            className="h-12 w-12 rounded-lg border border-zinc-800 object-cover"
          />

          <div>
            <h5 className="text-sm font-medium text-white">
              {product.name}
            </h5>

            <p className="mt-1 text-xs text-zinc-500">
              SKU : {product.sku}
            </p>
          </div>
        </div>
      </td>

      {/* Brand */}
      <td className="px-4 py-5 text-sm text-zinc-400">
        {product.brand?.name || "-"}
      </td>

      {/* Category */}
      <td className="px-4 py-5 text-sm text-zinc-400">
        {product.category?.name || "-"}
      </td>

      {/* Price */}
      <td className="px-4 py-5 text-sm font-semibold text-amber-400">
        ₹{product.price}
      </td>

      {/* Stock */}
      <td className="px-4 py-5 text-center">
        <span
          className={`text-sm font-medium ${
            product.stock <= 5
              ? "text-amber-400"
              : "text-white"
          }`}
        >
          {product.stock}
        </span>
      </td>

      {/* Status */}
      <td className="px-4 py-5 text-center">
        <span
          className={`rounded-lg border px-3 py-1 text-xs font-medium uppercase tracking-wide ${
            product.status === "active"
              ? "border-amber-500/40 text-amber-400"
              : "border-zinc-700 text-zinc-500"
          }`}
        >
          {product.status}
        </span>
      </td>

      {/* Featured */}
      <td className="px-4 py-5 text-center">
        {product.featured ? (
          <span className="text-lg text-amber-400">
            ★
          </span>
        ) : (
          <span className="text-zinc-700">
            —
          </span>
        )}
      </td>

      {/* Signature */}
      <td className="px-4 py-5 text-center">
        {product.isSignature ? (
          <span className="text-lg text-amber-400">
            ★
          </span>
        ) : (
          <span className="text-zinc-700">
            —
          </span>
        )}
      </td>

      {/* Actions */}
      <td className="px-6 py-5">
        <div className="flex items-center justify-center gap-2">
          <button
            onClick={() => onEdit(product)}
            className="rounded-lg border border-amber-500/40 px-4 py-2 text-xs font-medium text-amber-400 transition hover:bg-amber-500 hover:text-black"
          >
            Edit
          </button>

          <button
            onClick={() => onDelete(product._id)}
            className="rounded-lg border border-zinc-700 px-4 py-2 text-xs font-medium text-zinc-300 transition hover:border-red-500 hover:text-red-400"
          >
            Delete
          </button>
        </div>
      </td>
    </tr>
  );
};

export default ProductRow;