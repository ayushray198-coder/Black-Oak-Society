import { useEffect, useState } from "react";
import { getProducts } from "../services/product.service";

function useProducts(filters) {
    const [products, setProducts] = useState([]);
    const [pagination, setPagination] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        let isMounted = true;

        const fetchProducts = async () => {
            try {
                setLoading(true);
                setError(null);

                const response = await getProducts(filters);

                if (!isMounted) return;

                if (!response.success) {
                    throw new Error(response.message);
                }

                setProducts(response.data || []);
                setPagination(response.pagination || null);
            } catch (err) {
                if (!isMounted) return;

                setProducts([]);
                setPagination(null);

                setError(
                    err.response?.data?.message ||
                    err.message ||
                    "Something went wrong."
                );
            } finally {
                if (isMounted) {
                    setLoading(false);
                }
            }
        };

        fetchProducts();

        return () => {
            isMounted = false;
        };
    }, [filters]);

    return {
        products,
        pagination,
        loading,
        error,
    };
}

export default useProducts;