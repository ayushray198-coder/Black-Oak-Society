import ProductRow from "./ProductRow";

const ProductTable = ({
  products,
  onEdit,
  onDelete,
}) => {
  if (!products?.length) {
    return (
      <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-12 text-center">
        <h2 className="text-xl font-semibold text-white">
          No Products Found
        </h2>

        <p className="mt-2 text-zinc-400">
          There are no products available.
        </p>
      </div>
    );
  }

  return (
    <div className="overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900">
      <div className="overflow-x-auto">
        <table className="min-w-full">
          <thead className="border-b border-zinc-800 bg-zinc-950">
            <tr>
              <th className="px-4 py-4 text-left text-sm font-semibold text-zinc-300">
                Product
              </th>

              <th className="px-4 py-4 text-left text-sm font-semibold text-zinc-300">
                Brand
              </th>

              <th className="px-4 py-4 text-left text-sm font-semibold text-zinc-300">
                Category
              </th>

              <th className="px-4 py-4 text-left text-sm font-semibold text-zinc-300">
                Price
              </th>

              <th className="px-4 py-4 text-left text-sm font-semibold text-zinc-300">
                Stock
              </th>

              <th className="px-4 py-4 text-left text-sm font-semibold text-zinc-300">
                Status
              </th>

              <th className="px-4 py-4 text-left text-sm font-semibold text-zinc-300">
                Featured
              </th>

              <th className="px-4 py-4 text-left text-sm font-semibold text-zinc-300">
                Signature
              </th>

              <th className="px-4 py-4 text-center text-sm font-semibold text-zinc-300">
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