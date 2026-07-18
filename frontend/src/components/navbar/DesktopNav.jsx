import { NavLink } from "react-router-dom";

const navLinks = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Shop",
    path: "/shop",
  },
  {
    name: "Brands",
    path: "/brands",
  },
  {
    name: "About",
    path: "/about",
  },
  {
    name: "Contact",
    path: "/contact",
  },
];

function DesktopNav() {
  return (
    <nav className="hidden lg:block">
      <ul className="flex items-center gap-10">
        {navLinks.map((link) => (
          <li key={link.path}>
            <NavLink
              to={link.path}
              className={({ isActive }) =>
                `relative pb-1 text-sm font-medium uppercase tracking-[0.18em] transition-all duration-300 ${
                  isActive
                    ? "text-primary"
                    : "text-text hover:text-primary"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {link.name}

                  <span
                    className={`absolute -bottom-1 left-0 h-[2px] bg-primary transition-all duration-300 ${
                      isActive ? "w-full" : "w-0"
                    }`}
                  />
                </>
              )}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default DesktopNav;