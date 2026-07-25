import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../services/product.service";

function useProduct() {
    const { id } = useParams();

    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        let isMounted = true;

        const fetchProduct = async () => {
            try {
                setLoading(true);
                setError(null);

                const response = await getProductById(id);

                if (!isMounted) return;

                if (!response.success) {
                    throw new Error(response.message);
                }

                setProduct(response.data || null);
            } catch (err) {
                if (!isMounted) return;

                setProduct(null);

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

        if (id) {
            fetchProduct();
        }

        return () => {
            isMounted = false;
        };
    }, [id]);

    return {
        product,
        loading,
        error,
    };
}

export default useProduct;