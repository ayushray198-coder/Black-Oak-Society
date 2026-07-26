import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

import AuthLayout from "../../components/auth/AuthLayout";
import OTPInput from "../../components/auth/OTPInput";
import AuthButton from "../../components/auth/AuthButton";

import authService from "../../services/auth.service";

const VerifyOTP = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const email = location.state?.email || "";

    const [otp, setOtp] = useState("");
    const [loading, setLoading] = useState(false);

    const handleVerify = async (e) => {
        e.preventDefault();

        if (!email) {
            return alert("Email not found. Please register again.");
        }

        if (otp.length !== 6) {
            return alert("Please enter a valid 6-digit OTP.");
        }

        try {
            setLoading(true);

            const response = await authService.verifyOtp({
                email,
                otp,
            });

            if (response.success) {
                alert(response.message);

                navigate("/");
            }
        } catch (error) {
            alert(
                error?.response?.data?.message ||
                "OTP verification failed."
            );
        } finally {
            setLoading(false);
        }
    };

    const handleResendOtp = async () => {
        try {
            const response = await authService.resendOtp(email);

            if (response.success) {
                alert(response.message);
            }
        } catch (error) {
            alert(
                error?.response?.data?.message ||
                "Failed to resend OTP."
            );
        }
    };

    return (
        <AuthLayout
            title="Verify Your Email"
            subtitle="Enter the 6-digit OTP sent to your email address."
            footerText="Entered the wrong email?"
            footerLinkText="Register Again"
            footerLink="/register"
        >
            <form
                onSubmit={handleVerify}
                className="space-y-6"
            >
                <div>
                    <label className="mb-3 block text-sm text-white/70">
                        Verification Code
                    </label>

                    <OTPInput
                        value={otp}
                        onChange={setOtp}
                        length={6}
                    />
                </div>

                <AuthButton loading={loading}>
                    Verify Account
                </AuthButton>

                <button
                    type="button"
                    onClick={handleResendOtp}
                    className="w-full text-sm text-[#D8B46A] transition hover:text-white"
                >
                    Resend OTP
                </button>

                <div className="text-center">
                    <Link
                        to="/register"
                        className="text-sm text-[#D8B46A] transition hover:text-white"
                    >
                        ← Back to Register
                    </Link>
                </div>
            </form>
        </AuthLayout>
    );
};

export default VerifyOTP;