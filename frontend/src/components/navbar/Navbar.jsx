import { Menu } from "lucide-react";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";
import NavActions from "./NavActions";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      <header
        className={`fixed left-0 top-0 z-50 w-full transition-all duration-300 ${
          isScrolled
            ? "border-b border-border bg-background/80 shadow-lg backdrop-blur-xl"
            : "bg-transparent"
        }`}
      >
        <div className="container flex h-[88px] items-center justify-between">
          <NavLink
            to="/"
            className="text-2xl font-bold tracking-[0.25em] text-primary"
          >
            BLACK OAK
          </NavLink>

          <DesktopNav />

          <NavActions />

          <button
            type="button"
            className="lg:hidden"
            onClick={() => setIsOpen(true)}
            aria-label="Open Menu"
          >
            <Menu size={28} />
          </button>
        </div>
      </header>

      <MobileNav isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
}

export default Navbar;