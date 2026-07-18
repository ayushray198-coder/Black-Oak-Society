import { Menu } from "lucide-react";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";
import NavActions from "./NavActions";

import logo from "../../assets/logo/black-oak-logo.webp";

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        document.body.style.overflow = isOpen ? "hidden" : "";

        return () => {
            document.body.style.overflow = "";
        };
    }, [isOpen]);

    return (
        <>
            <header
                className={`
                    fixed
                    top-0
                    left-0
                    z-50
                    w-full

                    transition-all
                    duration-500
                    ease-out

                    ${
                        isScrolled
                            ? `
                                backdrop-blur-[22px]
                                bg-black/55
                                border-b
                                border-[#C89B3C]/10
                                shadow-[0_10px_45px_rgba(0,0,0,.45)]
                              `
                            : "bg-transparent"
                    }
                `}
            >
                {/* Premium Bottom Glow */}

                {isScrolled && (
                    <>
                        <div
                            className="
                                absolute
                                bottom-0
                                left-0
                                h-px
                                w-full
                                bg-gradient-to-r
                                from-transparent
                                via-[#C89B3C]/30
                                to-transparent
                                blur-sm
                            "
                        />

                        <div
                            className="
                                absolute
                                inset-0
                                pointer-events-none
                                shadow-[inset_0_-18px_30px_rgba(200,155,60,.04)]
                            "
                        />
                    </>
                )}

                <div className="container flex h-[92px] items-center justify-between">

                    {/* ================= Logo ================= */}

                    <NavLink
                        to="/"
                        className="
                            flex
                            items-center
                            transition-transform
                            duration-500
                            hover:scale-[1.03]
                        "
                    >
                        <img
                            src={logo}
                            alt="Black Oak Society"
                            className="
                                w-auto
                                object-contain
                                select-none
                                shrink-0

                                h-[64px]

                                sm:h-[72px]

                                md:h-[82px]

                                lg:h-[96px]

                                xl:h-[108px]

                                2xl:h-[118px]

                                drop-shadow-[0_0_35px_rgba(200,155,60,.20)]

                                transition-all
                                duration-500
                            "
                        />
                    </NavLink>

                    {/* Desktop Navigation */}

                    <DesktopNav />

                    {/* Right Side */}

                    <NavActions />

                    {/* Mobile */}

                    <button
                        type="button"
                        aria-label="Open Menu"
                        onClick={() => setIsOpen(true)}
                        className="
                            lg:hidden
                            transition-all
                            duration-300
                            hover:text-[#C89B3C]
                            hover:scale-110
                        "
                    >
                        <Menu size={28} />
                    </button>

                </div>
            </header>

            <MobileNav
                isOpen={isOpen}
                setIsOpen={setIsOpen}
            />
        </>
    );
}

export default Navbar;