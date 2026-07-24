import api from "../lib/api";

export const getFeaturedProducts = async () => {
    const response = await api.get("/products", {
        params: {
            featured: true,
        },
    });

    return response.data;
};

export const getFeaturedProductById = async (productId) => {
    const response = await api.get(`/products/${productId}`);

    return response.data;
};