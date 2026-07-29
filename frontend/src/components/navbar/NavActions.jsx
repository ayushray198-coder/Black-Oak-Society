import {
  Heart,
  Search,
  ShoppingBag,
  User,
} from "lucide-react";

import { NavLink, useNavigate } from "react-router-dom";

import ProfileDropdown from "./ProfileDropdown";

import { useAuth } from "../../context/AuthContext";
import { useWishlist } from "../../context/WishlistContext";
import { useCart } from "../../context/CartContext";

function NavActions({ setSearchOpen }) {
  const { user } = useAuth();

  const { wishlistCount } = useWishlist();
  const { cartCount } = useCart();



  return (
    <div className="hidden items-center gap-6 lg:flex">

      {/* Search */}

      <button
        type="button"
        aria-label="Search"
        onClick={() => setSearchOpen(true)}
        className="transition-all duration-300 hover:scale-110 hover:text-[#D8B46A]"
      >
        <Search size={20} strokeWidth={1.8} />
      </button>

      {/* Wishlist */}

      <NavLink
        to="/wishlist"
        className="relative transition-all duration-300 hover:scale-110 hover:text-[#D8B46A]"
      >
        <Heart size={20} strokeWidth={1.8} />

        {user && wishlistCount > 0 && (
          <span
            className="
              absolute
              -right-2
              -top-2
              flex
              h-5
              w-5
              items-center
              justify-center
              rounded-full
              bg-[#D8B46A]
              text-[10px]
              font-bold
              text-black
              shadow-[0_0_12px_rgba(216,180,106,.5)]
            "
          >
            {wishlistCount}
          </span>
        )}
      </NavLink>

      {/* Cart */}

      <NavLink
        to="/cart"
        className="relative transition-all duration-300 hover:scale-110 hover:text-[#D8B46A]"
      >
        <ShoppingBag size={20} strokeWidth={1.8} />

        {user && cartCount > 0 && (
          <span
            className="
              absolute
              -right-2
              -top-2
              flex
              h-5
              w-5
              items-center
              justify-center
              rounded-full
              bg-[#D8B46A]
              text-[10px]
              font-bold
              text-black
              shadow-[0_0_12px_rgba(216,180,106,.5)]
           " >
            {cartCount}
          </span>
        )}
      </NavLink>

      {/* Auth */}

      {user ? (
        <ProfileDropdown />
      ) : (
        <NavLink
          to="/login"
          className="flex items-center gap-2 rounded-full border border-[#D8B46A] px-5 py-2 text-sm font-medium transition-all duration-300 hover:bg-[#D8B46A] hover:text-black hover:shadow-[0_0_25px_rgba(216,180,106,.25)]"
        >
          <User size={18} strokeWidth={1.8} />
          Login
        </NavLink>
      )}
    </div>
  );
}

export default NavActions;