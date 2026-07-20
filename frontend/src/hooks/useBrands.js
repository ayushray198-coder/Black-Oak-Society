import { useEffect, useState } from "react";
import { getAllBrands } from "../services/brandService";

function useBrands() {
    const [brands, setBrands] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        let isMounted = true;

        async function fetchBrands() {
            try {
                setLoading(true);
                setError("");

                const response = await getAllBrands({
                    page: 1,
                    limit: 6,
                    
                });

                if (!isMounted) return;

                setBrands(response.data || []);
            } catch (err) {
                if (!isMounted) return;

                setError(
                    err?.response?.data?.message ||
                    "Failed to load brands."
                );
            } finally {
                if (isMounted) {
                    setLoading(false);
                }
            }
        }

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