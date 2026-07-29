import ProductRow from "./ProductRow";

const ProductTable = ({
  products,
  onEdit,
  onDelete,
}) => {
  if (!products?.length) {
    return (
      <div className="rounded-xl border border-zinc-800 bg-zinc-900 py-16 text-center">
        <h2 className="text-lg font-medium text-white">
          No Products Found
        </h2>

        <p className="mt-2 text-sm text-zinc-500">
          Start by creating your first product.
        </p>
      </div>
    );
  }

  return (
    <div className="overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="border-b border-zinc-800 bg-zinc-950">
            <tr>
              <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-zinc-500">
                Product
              </th>

              <th className="px-4 py-4 text-left text-xs font-semibold uppercase tracking-wider text-zinc-500">
                Brand
              </th>

              <th className="px-4 py-4 text-left text-xs font-semibold uppercase tracking-wider text-zinc-500">
                Category
              </th>

              <th className="px-4 py-4 text-left text-xs font-semibold uppercase tracking-wider text-zinc-500">
                Price
              </th>

              <th className="px-4 py-4 text-center text-xs font-semibold uppercase tracking-wider text-zinc-500">
                Stock
              </th>

              <th className="px-4 py-4 text-center text-xs font-semibold uppercase tracking-wider text-zinc-500">
                Status
              </th>

              <th className="px-4 py-4 text-center text-xs font-semibold uppercase tracking-wider text-zinc-500">
                Featured
              </th>

              <th className="px-4 py-4 text-center text-xs font-semibold uppercase tracking-wider text-zinc-500">
                Signature
              </th>

              <th className="px-6 py-4 text-center text-xs font-semibold uppercase tracking-wider text-zinc-500">
                Actions
              </th>
            </tr>
          </thead>

          <tbody>
            {products.map((product) => (
              <ProductRow
                key={product._id}
                product={product}
                onEdit={onEdit}
                onDelete={onDelete}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductTable;