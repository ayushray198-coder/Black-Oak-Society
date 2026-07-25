import { useMemo } from "react";
import ProductCard from "../shop/ProductCard";
import useProducts from "../../hooks/useProducts";

function RelatedProducts({ brandId, productId }) {
    const filters = useMemo(
        () => ({
            brand: brandId,
            limit: 4,
        }),
        [brandId]
    );

    const {
        products = [],
        loading,
        error,
    } = useProducts(filters);

    const relatedProducts = products.filter(
        (product) => product._id !== productId
    );

    if (loading) {
        return (
            <section className="py-24">
                <div className="mx-auto max-w-7xl px-5 text-center text-white">
                    Loading Similar Products...
                </div>
            </section>
        );
    }

    if (error) {
        return (
            <section className="py-24">
                <div className="mx-auto max-w-7xl px-5 text-center text-red-400">
                    {error}
                </div>
            </section>
        );
    }

    if (!relatedProducts.length) {
        return null;
    }

    return (
        <section className="py-24">
            <div className="mx-auto max-w-7xl px-5">

                <p className="text-xs uppercase tracking-[0.35em] text-[#C8A04D]">
                    You May Also Like
                </p>

                <h2 className="mt-3 mb-10 text-4xl font-bold text-white">
                    Similar Products
                </h2>

                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-4">
                    {relatedProducts.map((product) => (
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

export default RelatedProducts;