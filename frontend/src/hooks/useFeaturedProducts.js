import { useCallback, useEffect, useState } from "react";
import { getFeaturedProducts } from "../services/featuredProductService";

function useFeaturedProducts(initialParams) {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchFeaturedProducts = useCallback(
        async (params) => {
            try {
                setLoading(true);
                setError(null);

                const response = await getFeaturedProducts(
                    params ?? initialParams ?? {}
                );

                const data =
                    response?.data ||
                    response?.products ||
                    response?.result ||
                    [];

                setProducts(Array.isArray(data) ? data : []);
            } catch (err) {
                console.error("Failed to fetch featured products:", err);

                setError(
                    err?.response?.data?.message ||
                    err?.message ||
                    "Something went wrong while fetching featured products."
                );

                setProducts([]);
            } finally {
                setLoading(false);
            }
        },
        [initialParams]
    );

    useEffect(() => {
        fetchFeaturedProducts();
    }, [fetchFeaturedProducts]);

    const refetch = useCallback(
        (params) => fetchFeaturedProducts(params),
        [fetchFeaturedProducts]
    );

    return {
        products,
        loading,
        error,
        refetch,
    };
}

export default useFeaturedProducts;