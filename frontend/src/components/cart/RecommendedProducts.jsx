import ProductCard from "../shop/ProductCard";

const RecommendedProducts = ({ products = [], loading = false }) => {
  if (loading) {
    return (
      <section className="mt-20">
        <h2 className="mb-8 text-3xl font-light text-white">
          You May Also Like
        </h2>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {[1,2,3,4].map((i)=>(
            <div
              key={i}
              className="h-[420px] animate-pulse rounded-3xl border border-white/10 bg-white/[0.03]"
            />
          ))}
        </div>
      </section>
    );
  }

  if (!products.length) return null;

  return (
    <section className="mt-20">
      <div className="mb-10 flex items-end justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.35em] text-amber-300/80">
            Curated Selection
          </p>

          <h2 className="mt-3 text-4xl font-light text-white">
            You May Also Like
          </h2>

          <p className="mt-4 max-w-2xl text-sm leading-7 text-white/60">
            Handpicked premium bottles that perfectly complement your current
            selection.
          </p>
        </div>
      </div>

      <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-4">
        {products.map((product) => (
          <ProductCard
            key={product._id}
            product={product}
          />
        ))}
      </div>
    </section>
  );
};

export default RecommendedProducts;
