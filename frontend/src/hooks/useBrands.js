import { useEffect, useState } from "react";
import { getAllBrands } from "../services/brandService";

function useBrands() {
    const [brands, setBrands] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        let isMounted = true;

        const fetchBrands = async () => {
            try {
                setLoading(true);
                setError(null);

                const response = await getAllBrands();

                if (!isMounted) return;

                // 👇 Backend response ke hisaab se is line ko baad me adjust karenge
                setBrands(response?.data || []);
            } catch (err) {
                if (!isMounted) return;

                setError(
                    err?.response?.data?.message ||
                    err?.message ||
                    "Failed to load brands."
                );
            } finally {
                if (isMounted) {
                    setLoading(false);
                }
            }
        };

        fetchBrands();

        return () => {
            isMounted = false;
        };
    }, []);

    return {
        brands,
        loading,
        error,
    };
}

export default useBrands;