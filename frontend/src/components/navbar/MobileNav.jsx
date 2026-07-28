import {
  Heart,
  Search,
  ShoppingBag,
  User,
  X,
} from "lucide-react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";

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
      className={`fixed inset-0 z-50 lg:hidden transition-all duration-300 ${
        isOpen ? "visible opacity-100" : "invisible opacity-0"
      }`}
    >
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={() => setIsOpen(false)}
      />

      <aside
        className={`absolute right-0 top-0 flex h-screen w-[320px] flex-col bg-background px-8 py-8 shadow-2xl transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="mb-10 flex items-center justify-between">
          <h2 className="text-xl font-bold tracking-[0.2em] text-primary">
            BLACK OAK
          </h2>

          <button onClick={() => setIsOpen(false)}>
            <X size={28} />
          </button>
        </div>

        <nav>
          <ul className="space-y-7">
            {navLinks.map((link) => (
              <li key={link.name}>
                {link.type === "route" ? (
                  <NavLink
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className={({ isActive }) =>
                      `block text-lg transition duration-300 ${
                        isActive
                          ? "text-primary"
                          : "text-text hover:text-primary"
                      }`
                    }
                  >
                    {link.name}
                  </NavLink>
                ) : (
                  <button
                    onClick={() =>
                      handleScrollNavigation(link.target)
                    }
                    className="block text-lg text-text transition duration-300 hover:text-primary"
                  >
                    {link.name}
                  </button>
                )}
              </li>
            ))}
          </ul>
        </nav>

        <div className="mt-12 flex items-center gap-6">
          <button>
            <Search size={22} />
          </button>

          <button>
            <Heart size={22} />
          </button>

          <NavLink
            to="/cart"
            onClick={() => setIsOpen(false)}
            className="relative"
          >
            <ShoppingBag size={22} />

            <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-[10px] font-semibold text-background">
              0
            </span>
          </NavLink>
        </div>

        <NavLink
          to="/login"
          onClick={() => setIsOpen(false)}
          className="mt-10 flex items-center justify-center gap-2 rounded-full border border-primary py-3 transition duration-300 hover:bg-primary hover:text-background"
        >
          <User size={18} />
          Login
        </NavLink>
      </aside>
    </div>
  );
}

export default MobileNav;