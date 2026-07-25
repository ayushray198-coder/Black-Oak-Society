import { useEffect, useState } from "react";
import { getAllBrands } from "../services/brandService";

function useBrands() {
    const [brands, setBrands] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    useEffect(() => {
        let isMounted = true;

        const fetchBrands = async () => {
            try {
                setLoading(true);
                setError("");

                const response = await getAllBrands({
                    page: 1,
                    limit: 100,
                });

                if (!isMounted) return;

                setBrands(Array.isArray(response?.data) ? response.data : []);
            } catch (err) {
                if (!isMounted) return;

                setBrands([]);

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