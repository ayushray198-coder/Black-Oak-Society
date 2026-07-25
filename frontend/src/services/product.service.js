import api from "../lib/api";

export const getProducts = async (params = {}, config = {}) => {
    const cleanParams = Object.fromEntries(
        Object.entries(params).filter(
            ([, value]) =>
                value !== "" &&
                value !== null &&
                value !== undefined
        )
    );

    const response = await api.get("/products", {
        params: cleanParams,
        ...config,
    });

    return response.data;
};

export const getProductById = async (productId) => {
    const response = await api.get(`/products/${productId}`);

    return response.data;
};