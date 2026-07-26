import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

import AuthLayout from "../../components/auth/AuthLayout";
import PasswordInput from "../../components/auth/PasswordInput";
import OTPInput from "../../components/auth/OTPInput";
import AuthButton from "../../components/auth/AuthButton";

import authService from "../../services/auth.service";

const ResetPassword = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const email = location.state?.email || "";

    const [otp, setOtp] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!email) {
            return alert("Email not found. Please try again.");
        }

        if (newPassword !== confirmPassword) {
            return alert("Passwords do not match.");
        }

        try {
            setLoading(true);

            const response = await authService.resetPassword({
                email,
                otp,
                newPassword,
            });

            if (response.success) {
                alert(response.message);

                navigate("/login");
            }
        } catch (error) {
            alert(
                error?.response?.data?.message ||
                "Failed to reset password."
            );
        } finally {
            setLoading(false);
        }
    };

    return (
        <AuthLayout
            title="Reset Password"
            subtitle="Enter the OTP sent to your email and choose a new password."
            footerText="Remember your password?"
            footerLinkText="Login"
            footerLink="/login"
        >
            <form
                onSubmit={handleSubmit}
                className="space-y-6"
            >
                <div>
                    <label className="mb-3 block text-sm text-white/70">
                        Enter OTP
                    </label>

                    <OTPInput
                        value={otp}
                        onChange={setOtp}
                        length={6}
                    />
                </div>

                <PasswordInput
                    label="New Password"
                    name="newPassword"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    required
                />

                <PasswordInput
                    label="Confirm Password"
                    name="confirmPassword"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                />

                <AuthButton loading={loading}>
                    Reset Password
                </AuthButton>

                <div className="text-center">
                    <Link
                        to="/login"
                        className="text-sm text-[#D8B46A] hover:text-white transition"
                    >
                        ← Back to Login
                    </Link>
                </div>
            </form>
        </AuthLayout>
    );
};

export default ResetPassword;