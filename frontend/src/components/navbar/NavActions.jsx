import { Heart, LogOut, Search, ShoppingBag, User } from "lucide-react";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

function NavActions() {
    const { user, logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = async () => {
        await logout();
        navigate("/");
    };

    return (
        <div className="hidden items-center gap-6 lg:flex">
            <button
                type="button"
                aria-label="Search"
                className="transition duration-300 hover:text-primary"
            >
                <Search size={20} strokeWidth={1.8} />
            </button>

            <button
                type="button"
                aria-label="Wishlist"
                className="transition duration-300 hover:text-primary"
            >
                <Heart size={20} strokeWidth={1.8} />
            </button>

            <NavLink
                to="/cart"
                className="relative transition duration-300 hover:text-primary"
            >
                <ShoppingBag size={20} strokeWidth={1.8} />

                <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-[10px] font-semibold text-background">
                    0
                </span>
            </NavLink>

            {user ? (
                <button
                    type="button"
                    onClick={handleLogout}
                    className="flex items-center gap-2 rounded-full border border-primary px-5 py-2 text-sm font-medium transition duration-300 hover:bg-primary hover:text-background"
                >
                    <LogOut size={18} strokeWidth={1.8} />
                    Logout
                </button>
            ) : (
                <NavLink
                    to="/login"
                    className="flex items-center gap-2 rounded-full border border-primary px-5 py-2 text-sm font-medium transition duration-300 hover:bg-primary hover:text-background"
                >
                    <User size={18} strokeWidth={1.8} />
                    Login
                </NavLink>
            )}
        </div>
    );
}

export default NavActions;