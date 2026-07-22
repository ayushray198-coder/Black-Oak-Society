import api from "../lib/api";

export const getFeaturedProducts = async (params = {}) => {
    const response = await api.get("/products", {
        params,
    });

    return response.data;
};

export const getFeaturedProductById = async (productId) => {
    const response = await api.get(`/products/${productId}`);

    return response.data;
};