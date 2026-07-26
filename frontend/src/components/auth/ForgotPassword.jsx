import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Mail } from "lucide-react";

import AuthLayout from "../../components/auth/AuthLayout";
import AuthInput from "../../components/auth/AuthInput";
import AuthButton from "../../components/auth/AuthButton";

import authService from "../../services/auth.service";

const ForgotPassword = () => {
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            setLoading(true);

            const response = await authService.forgotPassword(
                email.trim().toLowerCase()
            );

            if (response.success) {
                alert(response.message);

                navigate("/reset-password", {
                    state: {
                        email: email.trim().toLowerCase(),
                    },
                });
            }
        } catch (error) {
            alert(
                error?.response?.data?.message ||
                "Failed to send OTP."
            );
        } finally {
            setLoading(false);
        }
    };

    return (
        <AuthLayout
            title="Forgot Password?"
            subtitle="Enter your registered email address to receive a password reset OTP."
            footerText="Remember your password?"
            footerLinkText="Back to Login"
            footerLink="/login"
        >
            <form
                onSubmit={handleSubmit}
                className="space-y-6"
            >
                <AuthInput
                    label="Email Address"
                    type="email"
                    name="email"
                    placeholder="Enter your registered email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    icon={<Mail size={18} />}
                />

                <AuthButton loading={loading}>
                    Send OTP
                </AuthButton>


            </form>
        </AuthLayout>
    );
};

export default ForgotPassword;