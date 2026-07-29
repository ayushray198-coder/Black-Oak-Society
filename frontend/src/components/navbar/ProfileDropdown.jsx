import { useEffect, useRef, useState } from "react";
import {
    ChevronDown,
    User,
    Package,
    Heart,
    MapPin,
    LayoutDashboard,
    LogOut,
} from "lucide-react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";

import { useAuth } from "../../context/AuthContext";

function ProfileDropdown() {
    const { user, logout } = useAuth();

    const navigate = useNavigate();
    const location = useLocation();

    const dropdownRef = useRef(null);

    const [open, setOpen] = useState(false);

    const avatarLetter =
        user?.fullName?.charAt(0)?.toUpperCase() || "U";

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(e.target)
            ) {
                setOpen(false);
            }
        };

        const handleEscape = (e) => {
            if (e.key === "Escape") {
                setOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        window.addEventListener("keydown", handleEscape);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
            window.removeEventListener("keydown", handleEscape);
        };
    }, []);

    const handleLogout = async () => {
        await logout();
        setOpen(false);
        navigate("/");
    };

    const menuClass = (path) =>
        `flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition-all duration-300 ${location.pathname === path
            ? "bg-[#D8B46A] text-black shadow-[0_0_18px_rgba(216,180,106,.25)]"
            : "text-white hover:bg-[#D8B46A]/10 hover:text-[#D8B46A]"
        }`;

    return (
        <div className="relative" ref={dropdownRef}>

            {/* Profile Button */}

            <button
                type="button"
                onClick={() => setOpen((prev) => !prev)}
                className="group flex items-center gap-3 rounded-full border border-[#D8B46A]/25 bg-white/[0.03] px-2 py-2 transition-all duration-300 hover:border-[#D8B46A] hover:bg-white/[0.05] hover:shadow-[0_0_30px_rgba(216,180,106,.12)]"
            >

                {/* Avatar */}

                {user?.avatar ? (
                    <img
                        src={user.avatar}
                        alt={user.fullName}
                        className="h-11 w-11 rounded-full object-cover border border-[#D8B46A]/40"
                    />
                ) : (
                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-[#F1D38A] to-[#C89B3C] text-base font-bold text-black shadow-[0_0_18px_rgba(216,180,106,.35)]">
                        {avatarLetter}
                    </div>
                )}

                <div className="hidden xl:block text-left">
                    <p className="max-w-[120px] truncate text-sm font-semibold">
                        {user?.fullName}
                    </p>

                    <p className="max-w-[120px] truncate text-xs text-gray-400">
                        {user?.role}
                    </p>
                </div>

                <ChevronDown
                    size={17}
                    className={`transition-all duration-300 ${open ? "rotate-180 text-[#D8B46A]" : ""
                        }`}
                />

            </button>

            {/* Dropdown */}

            <div
                className={`absolute right-0 mt-5 w-[320px] origin-top-right overflow-hidden rounded-3xl border border-[#D8B46A]/20 bg-[#0F0F0F]/95 backdrop-blur-xl shadow-[0_25px_80px_rgba(0,0,0,.55)] transition-all duration-300 ${open
                    ? "pointer-events-auto translate-y-0 opacity-100 scale-100"
                    : "pointer-events-none -translate-y-3 opacity-0 scale-95"
                    }`}
            >

                {/* Gold Accent */}

                <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-[#D8B46A] to-transparent" />

                {/* User Header */}

                <div className="p-6 border-b border-[#D8B46A]/10">

                    <div className="flex items-center gap-4">


                        {user?.avatar ? (
                            <img
                                src={user.avatar}
                                alt={user.fullName}
                                className="h-16 w-16 rounded-full border-2 border-[#D8B46A]/40 object-cover shadow-[0_0_20px_rgba(216,180,106,.20)]"
                            />
                        ) : (
                            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-[#F3D58E] via-[#D8B46A] to-[#B8892F] text-2xl font-bold text-black shadow-[0_0_25px_rgba(216,180,106,.35)]">
                                {avatarLetter}
                            </div>
                        )}

                        <div className="min-w-0 flex-1">

                            <h5 className="truncate text-lg font-semibold text-white">
                                {user?.fullName}
                            </h5>

                            <p className="truncate text-sm text-gray-400">
                                {user?.email}
                            </p>

                            <span className="mt-2 inline-flex rounded-full border border-[#D8B46A]/20 bg-[#D8B46A]/10 px-3 py-1 text-xs font-semibold uppercase tracking-[2px] text-[#D8B46A]">
                                {user?.role}
                            </span>

                        </div>
                    </div>
                </div>

                {/* Menu */}

                <div className="space-y-1 p-3">


                    <NavLink
                        to="/profile"
                        onClick={() => setOpen(false)}
                        className={menuClass("/profile")}
                    >
                        <User size={18} />
                        <span>My Profile</span>
                    </NavLink>


                    <NavLink
                        to="/orders"
                        onClick={() => setOpen(false)}
                        className={menuClass("/orders")}
                    >
                        <Package size={18} />
                        <span>My Orders</span>
                    </NavLink>

                    <NavLink
                        to="/wishlist"
                        onClick={() => setOpen(false)}
                        className={menuClass("/wishlist")}
                    >
                        <Heart size={18} />
                        <span>Wishlist</span>
                    </NavLink>





                    {/* Admin Section */}

                    {user?.role === "admin" && (
                        <>
                            <div className="my-2 h-px bg-gradient-to-r from-transparent via-[#D8B46A]/20 to-transparent" />

                            <NavLink
                                to="/admin"
                                onClick={() => setOpen(false)}
                                className={menuClass("/admin")}
                            >
                                <LayoutDashboard size={18} />

                                <div className="flex flex-1 items-center justify-between">
                                    <span>Admin Dashboard</span>

                                    <span className="rounded-full bg-[#D8B46A]/15 px-2 py-1 text-[10px] font-semibold uppercase tracking-wider text-[#D8B46A]">
                                        Admin
                                    </span>
                                </div>
                            </NavLink>
                        </>
                    )}

                    {/* Divider */}

                    <div className="my-2 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

                    {/* Logout */}

                    <button
                        type="button"
                        onClick={handleLogout}
                        className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-white transition-all duration-300 hover:bg-[#D8B46A] hover:text-black hover:shadow-[0_0_25px_rgba(216,180,106,.20)]"
                    >
                        <LogOut size={18} />
                        <span>Logout</span>
                    </button>

                </div>

                {/* Footer */}

                <div className="border-t border-[#D8B46A]/10 bg-white/[0.02] px-5 py-4">

                    <p className="text-center text-[11px] tracking-[3px] text-[#D8B46A]/70 uppercase">
                        Black Oak Society
                    </p>

                    <p className="mt-1 text-center text-[10px] text-gray-500">
                        Crafted for the Extraordinary
                    </p>

                </div>

            </div>

        </div>

    );
}

export default ProfileDropdown;