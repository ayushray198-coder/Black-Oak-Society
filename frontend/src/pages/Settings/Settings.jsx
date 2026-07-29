import { useState } from "react";
import {
    Lock,
    Eye,
    EyeOff,
    ShieldCheck,
    LogOut,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

import authService from "../../services/auth.service";
import { useAuth } from "../../context/AuthContext";

function Settings() {
    const navigate = useNavigate();

    const { logout } = useAuth();

    const [formData, setFormData] = useState({
        oldPassword: "",
        newPassword: "",
        confirmPassword: "",
    });

    const [showPassword, setShowPassword] = useState({
        old: false,
        new: false,
        confirm: false,
    });

    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const togglePassword = (field) => {
        setShowPassword((prev) => ({
            ...prev,
            [field]: !prev[field],
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const {
            oldPassword,
            newPassword,
            confirmPassword,
        } = formData;

        // Validation

        if (!oldPassword || !newPassword || !confirmPassword) {
            return toast.error("Please fill all fields.");
        }

        if (newPassword.length < 8) {
            return toast.error(
                "Password must be at least 8 characters."
            );
        }

        if (newPassword !== confirmPassword) {
            return toast.error(
                "New password and confirm password do not match."
            );
        }

        if (oldPassword === newPassword) {
            return toast.error(
                "New password must be different from old password."
            );
        }

        try {
            setLoading(true);

            const response =
                await authService.changePassword({
                    oldPassword,
                    newPassword,
                });

            toast.success(response.message);

            await logout();

            navigate("/login", {
                replace: true,
            });

        } catch (error) {

            toast.error(
                error?.response?.data?.message ||
                "Something went wrong."
            );

        } finally {

            setLoading(false);

        }
    };

    return (
        <section className="container py-28">

            {/* Heading */}

            <div className="mb-12 text-center">

                <p className="mb-3 text-sm uppercase tracking-[6px] text-[#D8B46A]">
                    Account Settings
                </p>

                <h1 className="text-4xl font-semibold">
                    Security
                </h1>

                <p className="mt-4 text-gray-400">
                    Keep your account secure by updating your password regularly.
                </p>

            </div>

            <div className="mx-auto max-w-3xl rounded-3xl border border-[#D8B46A]/15 bg-[#111]/80 p-10 backdrop-blur-lg">

                {/* Security Header */}

                <div className="mb-10 flex items-center gap-4 border-b border-white/10 pb-6">

                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#D8B46A]/10 text-[#D8B46A]">

                        <ShieldCheck size={28} />

                    </div>

                    <div>

                        <h2 className="text-2xl font-semibold">
                            Change Password
                        </h2>

                        <p className="mt-1 text-sm text-gray-400">
                            After changing your password, you'll need to log in again.
                        </p>

                    </div>

                </div>

                <form
                    onSubmit={handleSubmit}
                    className="space-y-7"
                >

                                        {/* Old Password */}

                    <div>
                        <label className="mb-2 block text-sm font-medium text-gray-300">
                            Current Password
                        </label>

                        <div className="relative">

                            <Lock
                                size={18}
                                className="absolute left-4 top-1/2 -translate-y-1/2 text-[#D8B46A]"
                            />

                            <input
                                type={showPassword.old ? "text" : "password"}
                                name="oldPassword"
                                value={formData.oldPassword}
                                onChange={handleChange}
                                placeholder="Enter current password"
                                className="h-14 w-full rounded-2xl border border-white/10 bg-white/[0.03] pl-12 pr-14 text-white outline-none transition-all duration-300 placeholder:text-gray-500 focus:border-[#D8B46A]"
                            />

                            <button
                                type="button"
                                onClick={() => togglePassword("old")}
                                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 transition hover:text-[#D8B46A]"
                            >
                                {showPassword.old ? (
                                    <EyeOff size={20} />
                                ) : (
                                    <Eye size={20} />
                                )}
                            </button>

                        </div>
                    </div>

                    {/* New Password */}

                    <div>
                        <label className="mb-2 block text-sm font-medium text-gray-300">
                            New Password
                        </label>

                        <div className="relative">

                            <Lock
                                size={18}
                                className="absolute left-4 top-1/2 -translate-y-1/2 text-[#D8B46A]"
                            />

                            <input
                                type={showPassword.new ? "text" : "password"}
                                name="newPassword"
                                value={formData.newPassword}
                                onChange={handleChange}
                                placeholder="Enter new password"
                                className="h-14 w-full rounded-2xl border border-white/10 bg-white/[0.03] pl-12 pr-14 text-white outline-none transition-all duration-300 placeholder:text-gray-500 focus:border-[#D8B46A]"
                            />

                            <button
                                type="button"
                                onClick={() => togglePassword("new")}
                                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 transition hover:text-[#D8B46A]"
                            >
                                {showPassword.new ? (
                                    <EyeOff size={20} />
                                ) : (
                                    <Eye size={20} />
                                )}
                            </button>

                        </div>

                        <p className="mt-2 text-xs text-gray-500">
                            Password must contain at least 8 characters.
                        </p>

                    </div>

                    {/* Confirm Password */}

                    <div>
                        <label className="mb-2 block text-sm font-medium text-gray-300">
                            Confirm Password
                        </label>

                        <div className="relative">

                            <Lock
                                size={18}
                                className="absolute left-4 top-1/2 -translate-y-1/2 text-[#D8B46A]"
                            />

                            <input
                                type={showPassword.confirm ? "text" : "password"}
                                name="confirmPassword"
                                value={formData.confirmPassword}
                                onChange={handleChange}
                                placeholder="Confirm new password"
                                className="h-14 w-full rounded-2xl border border-white/10 bg-white/[0.03] pl-12 pr-14 text-white outline-none transition-all duration-300 placeholder:text-gray-500 focus:border-[#D8B46A]"
                            />

                            <button
                                type="button"
                                onClick={() => togglePassword("confirm")}
                                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 transition hover:text-[#D8B46A]"
                            >
                                {showPassword.confirm ? (
                                    <EyeOff size={20} />
                                ) : (
                                    <Eye size={20} />
                                )}
                            </button>

                        </div>
                    </div>
                                        {/* Security Notice */}

                    <div className="rounded-2xl border border-[#D8B46A]/15 bg-[#D8B46A]/5 p-5">

                        <h3 className="text-sm font-semibold uppercase tracking-[2px] text-[#D8B46A]">
                            Security Notice
                        </h3>

                        <p className="mt-2 text-sm leading-7 text-gray-400">
                            Changing your password will log you out from this device.
                            You'll need to sign in again using your new password.
                        </p>

                    </div>

                    {/* Update Button */}

                    <button
                        type="submit"
                        disabled={loading}
                        className="flex h-14 w-full items-center justify-center rounded-2xl border border-[#D8B46A] bg-[#D8B46A]/10 font-semibold text-[#D8B46A] transition-all duration-300 hover:bg-[#D8B46A] hover:text-black hover:shadow-[0_0_35px_rgba(216,180,106,.25)] disabled:cursor-not-allowed disabled:opacity-60"
                    >
                        {loading ? "Updating Password..." : "Update Password"}
                    </button>

                </form>

                {/* Divider */}

                <div className="my-10 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

                {/* Logout Section */}

                <div>

                    <h2 className="text-xl font-semibold">
                        Logout
                    </h2>

                    <p className="mt-2 text-sm leading-7 text-gray-400">
                        Sign out from your account on this device.
                    </p>

                    <button
                        type="button"
                        onClick={async () => {
                            await logout();
                            navigate("/");
                        }}
                        className="mt-6 flex h-14 w-full items-center justify-center gap-3 rounded-2xl border border-red-500/30 bg-red-500/10 font-medium text-red-400 transition-all duration-300 hover:bg-red-500 hover:text-white"
                    >
                        <LogOut size={20} />
                        Logout
                    </button>

                </div>
                            </div>

        </section>
    );
}

export default Settings;