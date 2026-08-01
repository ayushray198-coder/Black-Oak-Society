import axios from "axios"

const api = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL,

    withCredentials: true,

    timeout: 30000,

    headers: {
        "Content-Type": "application/json",
    },
});

api.interceptors.response.use(
    (response) => response,

    async (error) => {
        const config = error.config;

        if (
            error.code === "ECONNABORTED" &&
            !config.__retry
        ) {
            config.__retry = true;

            await new Promise((resolve) =>
                setTimeout(resolve, 2000)
            );

            return api(config);
        }

        return Promise.reject(error);
    }
);

export default api;