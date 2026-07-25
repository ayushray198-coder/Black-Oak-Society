import ProductCard from "./ProductCard";
import ProductSkeleton from "./ProductSkeleton";
import EmptyState from "./EmptyState";

function ProductGrid({
    products,
    loading,
    error,
    onResetFilters,
}) {
    if (loading) {
        return (
            <section className="bg-[#050505] px-5 py-10">
                <div className="mx-auto max-w-7xl">
                    <ProductSkeleton count={12} />
                </div>
            </section>
        );
    }

    if (error) {
        return (
            <section className="bg-[#050505] px-5 py-10">
                <div className="mx-auto max-w-7xl">
                    <div className="flex min-h-[420px] items-center justify-center rounded-3xl border border-red-500/20 bg-[#0B0B0B] px-6 text-center">
                        <div>
                            <h2 className="mb-3 text-2xl font-semibold text-white">
                                Something went wrong
                            </h2>

                            <p className="text-sm text-white/60">
                                {error}
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        );
    }

    if (!products.length) {
        return (
            <section className="bg-[#050505] px-5 py-10">
                <div className="mx-auto max-w-7xl">
                    <EmptyState
                        onReset={() =>
                            onResetFilters({
                                page: 1,
                                search: "",
                                brand: "",
                                category: "",
                                sort: "",
                                minPrice: "",
                                maxPrice: "",
                            })
                        }
                    />
                </div>
            </section>
        );
    }

    return (
        <section className="bg-[#050505] px-5 py-10">
            <div className="mx-auto max-w-7xl">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {products.map((product) => (
                        <ProductCard
                            key={product._id}
                            product={product}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default ProductGrid;