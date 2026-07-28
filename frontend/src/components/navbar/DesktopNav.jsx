import { useEffect, useState } from "react";
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

function DesktopNav() {
  const location = useLocation();
  const navigate = useNavigate();

  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    if (location.pathname !== "/") {
      setActiveSection("");
      return;
    }

    const sections = ["home", "brands", "about", "contact"];

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries.find(
          (entry) => entry.isIntersecting
        );

        if (visibleSection) {
          setActiveSection(visibleSection.target.id);
        }
      },
      {
        threshold: 0.6,
        rootMargin: "-100px 0px -35% 0px",
      }
    );

    sections.forEach((id) => {
      const element = document.getElementById(id);

      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [location.pathname]);

  const handleScrollNavigation = (target) => {
    if (location.pathname !== "/") {
      navigate("/", {
        state: {
          scrollTo: target,
        },
      });

      return;
    }

    // Home button
    if (target === "home") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

      setActiveSection("home");

      return;
    }

    const element = document.getElementById(target);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });

      setActiveSection(target);
    }
  };

  return (
    <nav className="hidden lg:block">
      <ul className="flex items-center gap-10">
        {navLinks.map((link) => (
          <li key={link.name}>
            {link.type === "route" ? (
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  `relative pb-1 text-sm font-medium uppercase tracking-[0.18em] transition-all duration-300 ${isActive
                    ? "text-primary"
                    : "text-text hover:text-primary"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {link.name}
                    <span
                      className={`absolute -bottom-1 left-0 h-[2px] bg-primary transition-all duration-300 ${isActive ? "w-full" : "w-0"
                        }`}
                    />
                  </>
                )}
              </NavLink>
            ) : (
              <button
                type="button"
                onClick={() => handleScrollNavigation(link.target)}
                className={`relative pb-1 text-sm font-medium uppercase tracking-[0.18em] transition-all duration-300 ${(link.target === "home" && activeSection === "home") ||
                  activeSection === link.target
                  ? "text-primary"
                  : "text-text hover:text-primary"
                  }`}
              >
                {link.name}

                <span
                  className={`absolute -bottom-1 left-0 h-[2px] bg-primary transition-all duration-300 ${(link.target === "home" && activeSection === "home") ||
                    activeSection === link.target
                    ? "w-full"
                    : "w-0"
                    }`}
                />
              </button>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default DesktopNav;