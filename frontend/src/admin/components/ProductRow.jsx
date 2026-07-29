const ProductRow = ({
  product,
  onEdit,
  onDelete,
}) => {
  return (
    <tr className="border-b border-zinc-800 transition-colors hover:bg-zinc-900">
      {/* Product */}
      <td className="px-4 py-4">
        <div className="flex items-center gap-4">
          <img
            src={product.images?.[0]?.url}
            alt={product.name}
            className="h-14 w-14 rounded-lg border border-zinc-700 object-cover"
          />

          <div>
            <h3 className="font-semibold text-white">
              {product.name}
            </h3>

            <p className="text-xs text-zinc-400">
              SKU : {product.sku}
            </p>
          </div>
        </div>
      </td>

      {/* Brand */}
      <td className="px-4 py-4 text-zinc-300">
        {product.brand?.name || "-"}
      </td>

      {/* Category */}
      <td className="px-4 py-4 text-zinc-300">
        {product.category?.name || "-"}
      </td>

      {/* Price */}
      <td className="px-4 py-4 font-semibold text-white">
        ₹{product.price}
      </td>

      {/* Stock */}
      <td className="px-4 py-4">
        {product.stock <= 5 ? (
          <span className="rounded-full bg-red-500/20 px-3 py-1 text-xs text-red-400">
            {product.stock}
          </span>
        ) : (
          <span className="rounded-full bg-green-500/20 px-3 py-1 text-xs text-green-400">
            {product.stock}
          </span>
        )}
      </td>

      {/* Status */}
      <td className="px-4 py-4">
        <span
          className={`rounded-full px-3 py-1 text-xs ${
            product.status === "active"
              ? "bg-green-500/20 text-green-400"
              : "bg-red-500/20 text-red-400"
          }`}
        >
          {product.status}
        </span>
      </td>

      {/* Featured */}
      <td className="px-4 py-4">
        {product.featured ? (
          <span className="rounded-full bg-yellow-500/20 px-3 py-1 text-xs text-yellow-400">
            Yes
          </span>
        ) : (
          <span className="text-zinc-500">—</span>
        )}
      </td>

      {/* Signature */}
      <td className="px-4 py-4">
        {product.isSignature ? (
          <span className="rounded-full bg-purple-500/20 px-3 py-1 text-xs text-purple-400">
            Yes
          </span>
        ) : (
          <span className="text-zinc-500">—</span>
        )}
      </td>

      {/* Actions */}
      <td className="px-4 py-4">
        <div className="flex items-center justify-center gap-2">
          <button
            onClick={() => onEdit(product)}
            className="rounded-lg bg-blue-600 px-3 py-1.5 text-sm font-medium text-white transition hover:bg-blue-500"
          >
            Edit
          </button>

          <button
            onClick={() => onDelete(product._id)}
            className="rounded-lg bg-red-600 px-3 py-1.5 text-sm font-medium text-white transition hover:bg-red-500"
          >
            Delete
          </button>
        </div>
      </td>
    </tr>
  );
};

export default ProductRow;