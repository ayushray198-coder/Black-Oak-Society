import { useEffect, useState } from "react";
import api from "../lib/api";

export default function useSignatureProducts() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchSignatureProducts = async () => {
            try {
                const res = await api.get("/products?signature=true");

                setProducts(res.data.data);
            } catch (err) {
                console.error(err);
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        fetchSignatureProducts();
    }, []);

    return {
        products,
        loading,
        error,
    };
}