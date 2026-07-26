import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Mail } from "lucide-react";

import AuthLayout from "../../components/auth/AuthLayout";
import AuthInput from "../../components/auth/AuthInput";
import PasswordInput from "../../components/auth/PasswordInput";
import AuthButton from "../../components/auth/AuthButton";

import authService from "../../services/auth.service";
import { useAuth } from "../../context/AuthContext";

const Login = () => {
    const navigate = useNavigate();
    const { fetchProfile } = useAuth();

    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            setLoading(true);

            const payload = {
                email: formData.email.trim().toLowerCase(),
                password: formData.password,
            };

            const response = await authService.login(payload);

            if (response.success) {
                await fetchProfile();
                alert(response.message);
                navigate("/");
            }
        } catch (error) {
            alert(
                error?.response?.data?.message ||
                "Login failed."
            );
        } finally {
            setLoading(false);
        }
    };

    return (
        <AuthLayout
            title="Welcome Back"
            subtitle="Login to continue your premium whisky experience."
            footerText="Don't have an account?"
            footerLinkText="Create Account"
            footerLink="/register"
        >
            <form
                onSubmit={handleSubmit}
                className="space-y-6"
            >
                <AuthInput
                    label="Email Address"
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    icon={<Mail size={18} />}
                />

                <PasswordInput
                    label="Password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                />

                <div className="flex justify-end">
                    <Link
                        to="/forgot-password"
                        className="text-sm text-[#D8B46A] transition hover:text-white"
                    >
                        Forgot Password?
                    </Link>
                </div>

                <AuthButton loading={loading}>
                    Login
                </AuthButton>
            </form>
        </AuthLayout>
    );
};

export default Login;