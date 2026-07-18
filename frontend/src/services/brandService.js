import api from "../lib/api";

export async function getAllBrands(params = {}) {
    const searchParams = new URLSearchParams();

    Object.entries(params).forEach(([key, value]) => {
        if (
            value !== undefined &&
            value !== null &&
            value !== ""
        ) {
            searchParams.append(key, value);
        }
    });

    const query = searchParams.toString();

    const response = await api.get(
        `/brands${query ? `?${query}` : ""}`
    );

    return response.data;
}

export async function getBrandBySlug(slug) {
    const response = await api.get(`/brands/${slug}`);

    return response.data;
}