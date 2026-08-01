import {
  Heart,
  Search,
  ShoppingBag,
  User,
  X,
  Package,
  LayoutDashboard,
  LogOut,
  ChevronRight,
} from "lucide-react";

import { NavLink, useLocation, useNavigate } from "react-router-dom";

import { useAuth } from "../../context/AuthContext";
import { useCart } from "../../context/CartContext";
import { useWishlist } from "../../context/WishlistContext";

const navLinks = [
  {
    name: "Home",
    target: "home",
    type: "scroll",
  },
  {
    name: "Shop",
    path: "/shop",
    type: "route",
  },
  {
    name: "Brands",
    target: "brands",
    type: "scroll",
  },
  {
    name: "About",
    target: "about",
    type: "scroll",
  },
  {
    name: "Contact",
    target: "contact",
    type: "scroll",
  },
];

function MobileNav({ isOpen, setIsOpen }) {
  const location = useLocation();
  const navigate = useNavigate();

  const { user, logout } = useAuth();
  const { cartCount } = useCart();
  const { wishlistCount } = useWishlist();

  const firstName =
    user?.fullName?.trim()?.split(" ")[0] || "Guest";

  const avatarLetter =
    firstName.charAt(0).toUpperCase();

  const handleLogout = async () => {
    await logout();

    setIsOpen(false);

    navigate("/");
  };

  const handleScrollNavigation = (target) => {
    setIsOpen(false);

    if (location.pathname !== "/") {
      navigate("/", {
        state: {
          scrollTo: target,
        },
      });

      return;
    }

    if (target === "home") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

      return;
    }

    const element = document.getElementById(target);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <div
      className={`fixed inset-0 z-[999] lg:hidden transition-all duration-500 ${
        isOpen
          ? "visible opacity-100"
          : "invisible opacity-0"
      }`}
    >
      {/* Overlay */}

      <div
        onClick={() => setIsOpen(false)}
        className="absolute inset-0 bg-black/80 backdrop-blur-md"
      />

      {/* Drawer */}

      <aside
        className={`absolute right-0 top-0 flex h-screen w-[350px] max-w-[90%] flex-col overflow-hidden rounded-l-[34px] border-l border-primary/15 bg-[#090909]/95 shadow-[0_0_80px_rgba(0,0,0,0.8)] backdrop-blur-3xl transition-all duration-500 ${
          isOpen
            ? "translate-x-0"
            : "translate-x-full"
        }`}
      >
        {/* Header */}

        <div className="relative border-b border-white/5 px-6 pb-6 pt-7">

          <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-transparent to-transparent" />

          <div className="relative flex items-center justify-between">

            <div>

              <p className="text-[10px] uppercase tracking-[0.45em] text-primary/70">
                Luxury Collection
              </p>

              <h2 className="mt-2 text-2xl font-semibold tracking-[0.28em] text-primary">
                BLACK OAK
              </h2>

            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition-all duration-300 hover:rotate-90 hover:border-primary hover:bg-primary hover:text-black"
            >
              <X size={18} />
            </button>

          </div>

        </div>

        {/* Scroll Area */}

        <div className="flex-1 overflow-y-auto px-6 py-6">

          {/* User Card */}

          {user ? (
            <div className="rounded-[26px] border border-primary/20 bg-gradient-to-br from-primary/10 via-white/[0.03] to-transparent p-5">

              <div className="flex items-center gap-4">

                <div className="flex h-16 w-16 items-center justify-center rounded-full border border-primary/30 bg-primary text-xl font-bold text-black shadow-[0_0_25px_rgba(212,175,55,0.35)]">
                  {avatarLetter}
                </div>

                <div>

                  <p className="text-xs uppercase tracking-[0.35em] text-primary/70">
                    Welcome
                  </p>

                  <h3 className="mt-1 text-xl font-semibold text-white">
                    {firstName}
                  </h3>

                </div>

              </div>

            </div>
          ) : (
            <NavLink
              to="/login"
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-center gap-3 rounded-2xl border border-primary bg-primary py-4 font-semibold text-black transition-all duration-300 hover:scale-[1.02]"
            >
              <User size={18} />

              Login Account
            </NavLink>
          )}

          {/* Search */}
          
          <button
            className="mt-7 flex w-full items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-4 text-left transition-all duration-300 hover:border-primary/40 hover:bg-primary/10"
          >
            <Search
              size={20}
              className="text-primary"
            />

            <span className="text-sm tracking-wide text-gray-300">
              Search Premium Collection
            </span>
          </button>

          {/* Divider */}

          <div className="my-8 flex items-center gap-3">

            <div className="h-px flex-1 bg-white/10" />

            <div className="h-2 w-2 rounded-full bg-primary" />

            <div className="h-px flex-1 bg-white/10" />

          </div>

          {/* Navigation Starts Here */}


                    <nav>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.name}>
                  {link.type === "route" ? (
                    <NavLink
                      to={link.path}
                      onClick={() => setIsOpen(false)}
                      className={({ isActive }) =>
                        `group flex items-center justify-between rounded-2xl border px-5 py-4 transition-all duration-300 ${
                          isActive
                            ? "border-primary/40 bg-primary/10 text-primary shadow-[0_0_25px_rgba(212,175,55,0.12)]"
                            : "border-white/10 bg-white/[0.03] text-gray-300 hover:border-primary/30 hover:bg-primary/5 hover:text-primary"
                        }`
                      }
                    >
                      <span className="font-medium tracking-wide">
                        {link.name}
                      </span>

                      <ChevronRight
                        size={18}
                        className="transition-transform duration-300 group-hover:translate-x-1"
                      />
                    </NavLink>
                  ) : (
                    <button
                      onClick={() =>
                        handleScrollNavigation(link.target)
                      }
                      className="group flex w-full items-center justify-between rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4 text-gray-300 transition-all duration-300 hover:border-primary/30 hover:bg-primary/5 hover:text-primary"
                    >
                      <span className="font-medium tracking-wide">
                        {link.name}
                      </span>

                      <ChevronRight
                        size={18}
                        className="transition-transform duration-300 group-hover:translate-x-1"
                      />
                    </button>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          {/* Divider */}

          <div className="my-8 flex items-center gap-3">
            <div className="h-px flex-1 bg-white/10" />
            <div className="h-2 w-2 rounded-full bg-primary" />
            <div className="h-px flex-1 bg-white/10" />
          </div>

          {/* Quick Actions */}

          <div className="grid grid-cols-2 gap-4">

            <NavLink
              to="/wishlist"
              onClick={() => setIsOpen(false)}
              className="group rounded-2xl border border-white/10 bg-white/[0.04] p-5 transition-all duration-300 hover:border-primary/40 hover:bg-primary/10"
            >
              <div className="flex items-center justify-between">

                <Heart
                  size={22}
                  className="text-primary"
                />

                {user && wishlistCount > 0 && (
                  <span className="flex h-7 min-w-[28px] items-center justify-center rounded-full bg-primary px-2 text-xs font-bold text-black">
                    {wishlistCount}
                  </span>
                )}

              </div>

              <p className="mt-6 text-sm font-medium text-gray-300 transition group-hover:text-primary">
                Wishlist
              </p>

            </NavLink>

            <NavLink
              to="/cart"
              onClick={() => setIsOpen(false)}
              className="group rounded-2xl border border-white/10 bg-white/[0.04] p-5 transition-all duration-300 hover:border-primary/40 hover:bg-primary/10"
            >
              <div className="flex items-center justify-between">

                <ShoppingBag
                  size={22}
                  className="text-primary"
                />

                {user && cartCount > 0 && (
                  <span className="flex h-7 min-w-[28px] items-center justify-center rounded-full bg-primary px-2 text-xs font-bold text-black">
                    {cartCount}
                  </span>
                )}

              </div>

              <p className="mt-6 text-sm font-medium text-gray-300 transition group-hover:text-primary">
                Cart
              </p>

            </NavLink>

          </div>

          {user && (
            <>
              {/* Divider */}

              <div className="my-8 flex items-center gap-3">
                <div className="h-px flex-1 bg-white/10" />
                <div className="h-2 w-2 rounded-full bg-primary" />
                <div className="h-px flex-1 bg-white/10" />
              </div>

              {/* Account */}

              <div className="space-y-3">

                <NavLink
                  to="/orders"
                  onClick={() => setIsOpen(false)}
                  className="group flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4 transition-all duration-300 hover:border-primary/30 hover:bg-primary/5"
                >
                  <div className="flex items-center gap-4">
                    <Package
                      size={20}
                      className="text-primary"
                    />

                    <span className="font-medium text-gray-300 group-hover:text-primary">
                      My Orders
                    </span>
                  </div>

                  <ChevronRight
                    size={18}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </NavLink>

                {user.role === "admin" && (
                  <NavLink
                    to="/admin"
                    onClick={() => setIsOpen(false)}
                    className="group flex items-center justify-between rounded-2xl border border-primary/20 bg-primary/10 px-5 py-4 transition-all duration-300 hover:bg-primary/15"
                  >
                    <div className="flex items-center gap-4">
                      <LayoutDashboard
                        size={20}
                        className="text-primary"
                      />

                      <span className="font-medium text-primary">
                        Admin Dashboard
                      </span>
                    </div>

                    <ChevronRight
                      size={18}
                      className="text-primary transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </NavLink>
                )}

                <button
                  onClick={handleLogout}
                  className="group flex w-full items-center justify-between rounded-2xl border border-red-500/20 bg-red-500/5 px-5 py-4 transition-all duration-300 hover:bg-red-500/10"
                >
                  <div className="flex items-center gap-4">
                    <LogOut
                      size={20}
                      className="text-red-400"
                    />

                    <span className="font-medium text-red-300">
                      Sign Out
                    </span>
                  </div>

                  <ChevronRight
                    size={18}
                    className="text-red-400 transition-transform duration-300 group-hover:translate-x-1"
                  />
                </button>

              </div>
            </>
          )}

                    {/* Bottom Branding */}

          <div className="mt-10 rounded-[28px] border border-primary/15 bg-gradient-to-br from-primary/[0.08] via-transparent to-primary/[0.03] p-6">

            <div className="mb-5 flex items-center gap-3">
              <div className="h-px flex-1 bg-primary/20" />
              <div className="h-2 w-2 rounded-full bg-primary shadow-[0_0_12px_rgba(212,175,55,0.6)]" />
              <div className="h-px flex-1 bg-primary/20" />
            </div>

            <h3 className="text-center text-lg font-semibold tracking-[0.28em] text-primary">
              BLACK OAK
            </h3>

            <p className="mt-3 text-center text-xs uppercase tracking-[0.3em] text-gray-500">
              Crafted for the Extraordinary
            </p>

            <div className="mt-6 flex items-center justify-center gap-3">
              <div className="h-2 w-2 rounded-full bg-primary/80" />
              <div className="h-px w-10 bg-primary/30" />
              <div className="h-2 w-2 rounded-full bg-primary/80" />
            </div>

          </div>

        </div>

      </aside>

    </div>
  );
}

export default MobileNav;