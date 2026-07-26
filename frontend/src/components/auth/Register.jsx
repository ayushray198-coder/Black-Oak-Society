import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Mail, User } from "lucide-react";

import AuthLayout from "../../components/auth/AuthLayout";
import AuthInput from "../../components/auth/AuthInput";
import PasswordInput from "../../components/auth/PasswordInput";
import AuthButton from "../../components/auth/AuthButton";

import authService from "../../services/auth.service";

const Register = () => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        password: "",
        confirmPassword: "",
        acceptTerms: false,
    });

    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!formData.acceptTerms) {
            return alert("Please accept Terms & Conditions.");
        }

        if (formData.password !== formData.confirmPassword) {
            return alert("Passwords do not match.");
        }

        try {
            setLoading(true);

            const payload = {
                fullName: formData.fullName.trim(),
                email: formData.email.trim().toLowerCase(),
                password: formData.password,
            };

            const response = await authService.sendOtp(payload);

            if (response.success) {
                alert(response.message);

                navigate("/verify-otp", {
                    state: {
                        fullName: payload.fullName,
                        email: payload.email,
                    },
                });
            }
        } catch (error) {
            alert(
                error?.response?.data?.message ||
                    "Something went wrong."
            );
        } finally {
            setLoading(false);
        }
    };

    return (
        <AuthLayout
            title="Create Account"
            subtitle="Join Black Oak Society and unlock an exclusive luxury whisky experience."
            footerText="Already have an account?"
            footerLinkText="Login"
            footerLink="/login"
        >
            <form
                onSubmit={handleSubmit}
                className="space-y-6"
            >
                <AuthInput
                    label="Full Name"
                    name="fullName"
                    placeholder="Enter your full name"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                    icon={<User size={18} />}
                />

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

                <PasswordInput
                    label="Confirm Password"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    required
                />

                <label className="flex items-start gap-3 text-sm text-white/70">
                    <input
                        type="checkbox"
                        name="acceptTerms"
                        checked={formData.acceptTerms}
                        onChange={handleChange}
                        className="mt-1 h-4 w-4 accent-[#D8B46A]"
                    />

                    <span>
                        I agree to the{" "}
                        <Link
                            to="/terms"
                            className="text-[#D8B46A] hover:text-white transition"
                        >
                            Terms & Conditions
                        </Link>{" "}
                        and{" "}
                        <Link
                            to="/privacy"
                            className="text-[#D8B46A] hover:text-white transition"
                        >
                            Privacy Policy
                        </Link>
                        .
                    </span>
                </label>

                <AuthButton loading={loading}>
                    Create Account
                </AuthButton>
            </form>
        </AuthLayout>
    );
};

export default Register;