import FooterSection from "../../components/Footer/FooterSection";
import ProductDescription from "../../components/product/ProductDescription";
import ProductHero from "../../components/product/ProductHero";
import RelatedProducts from "../../components/product/RelatedProducts";
import useProduct from "../../hooks/useProduct";


function ProductDetails() {
    const {
        product,
        loading,
        error,
    } = useProduct();

    if (loading) {
        return (
            <main className="flex min-h-screen items-center justify-center bg-[#050505] text-white">
                <div className="flex flex-col items-center gap-5">

                    <div
                        className="
                            h-14
                            w-14
                            animate-spin
                            rounded-full
                            border-4
                            border-[#C8A04D]/20
                            border-t-[#C8A04D]
                        "
                    />

                    <p className="text-sm uppercase tracking-[0.35em] text-[#C8A04D]">
                        Loading Product...
                    </p>

                </div>
            </main>
        );
    }

    if (error) {
        return (
            <main className="flex min-h-screen items-center justify-center bg-[#050505] px-5 text-white">
                <div
                    className="
                        w-full
                        max-w-xl
                        rounded-[32px]
                        border
                        border-red-500/30
                        bg-red-500/10
                        p-10
                        text-center
                    "
                >
                    <h2 className="text-3xl font-bold text-red-400">
                        Something Went Wrong
                    </h2>

                    <p className="mt-5 text-neutral-300">
                        {error}
                    </p>
                </div>
            </main>
        );
    }

    if (!product) {
        return (
            <main className="flex min-h-screen items-center justify-center bg-[#050505] text-white">
                <h2 className="text-3xl font-bold">
                    Product Not Found
                </h2>
            </main>
        );
    }

    return (
        <main className="min-h-screen bg-[#050505] text-white">

            <ProductHero
                product={product}
            />

            <ProductDescription
                description={product.description}
            />

            {/* RelatedProducts */}

            <RelatedProducts
                brandId={product.brand?._id}
                productId={product._id}
            />

            <FooterSection />

        </main>
    );
}

export default ProductDetails;