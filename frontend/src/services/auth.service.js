import api from "../lib/api";

export const authService = {
    // ==========================
    // REGISTER
    // ==========================

    sendOtp: async (data) => {
        const response = await api.post("/auth/send-otp", data);
        return response.data;
    },

    verifyOtp: async (data) => {
        const response = await api.post("/auth/verify-otp", data);
        return response.data;
    },

    resendOtp: async (email) => {
        const response = await api.post("/auth/resend-otp", {
            email,
        });

        return response.data;
    },

    // ==========================
    // LOGIN
    // ==========================

    login: async (data) => {
        const response = await api.post("/auth/login", data);
        return response.data;
    },

    logout: async () => {
        const response = await api.post("/auth/logout");
        return response.data;
    },

    getProfile: async () => {
        const response = await api.get("/auth/profile");
        return response.data;
    },

    refreshToken: async () => {
        const response = await api.post("/auth/refresh-token");
        return response.data;
    },

    // ==========================
    // PASSWORD
    // ==========================

    forgotPassword: async (email) => {
        const response = await api.post("/auth/forgot-password", {
            email,
        });

        return response.data;
    },

    resetPassword: async (data) => {
        const response = await api.patch("/auth/reset-password", data);
        return response.data;
    },

    changePassword: async (data) => {
        const response = await api.patch("/auth/change-password", data);
        return response.data;
    },
};

export default authService;