import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import NavLogo from "../components/Navbar/NavLogo";
import NavIcons from "../components/Navbar/NavIcons";
import NavLinks from "../components/Navbar/NavLinks";
import NavContacts from "../components/Navbar/NavContacts";
import FaBars from "../components/Navbar/FaBars/FaBars";
import { useMobileNav } from "../contexts/MobileNavContext";
import TopNavbar from "../components/Navbar/TopNavbar";
import { defineDriver } from "localforage";
import NavButton from "../components/Navbar/NavButton";
import { useMenuClick } from "../contexts/MenuClickContext";

const Navbar = () => {
  const location = useLocation(); // Use the useLocation hook
  const { isActive, handleClick } = useMobileNav();
  const [scrolling, setScrolling] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [scrollThreshold, setScrollThreshold] = useState(100);
  const [isScrolled, setIsScrolled] = useState(false);
  const navRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      const scrolledDistance = Math.abs(currentScrollPos - prevScrollPos);

      if (scrolledDistance > scrollThreshold) {
        setScrolling(currentScrollPos > prevScrollPos);
        setPrevScrollPos(currentScrollPos);
      }

      setIsScrolled(currentScrollPos > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos, scrollThreshold]);

  return (
    <nav
      className={`w-full fixed bg-transparent montserrat-regular z-50 top-0  transition-all duration-400 ease-in-out`}
      ref={navRef}
    >
      {/* <header
        className={`text-black relative hidden lg:block bg-white ${
          scrolling ? "lg:hidden" : ""
        }`}
      >
        <TopNavbar />
      </header> */}
      <main
        className={`small-screen-bg  w-full px-10 py-2 lg:py-0 lg:w-auto h-[6vh] lg:h-auto flex justify-between items-center ${
          isScrolled ? "bg-glassy" : ""
        } ${
          location.pathname !== "/" && location.pathname !== "/home"
            ? "bg-glassy"
            : ""
        }`}
      >
        <div className="w-40">
          <NavLogo />
        </div>
        <div className="flex justify-center h-full items-center lg:hidden">
          <FaBars />
        </div>
        <section
          className={`h-[94vh] w-full sidebar-bg left-0 lg:h-auto lg:-translate-x-0 w-full absolute lg:relative top-[6vh] lg:top-0 z-20 transition-all duration-500 ease-in-out ${
            isActive ? "-translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="w-full flex">
            <section className="h-full w-full flex flex-col lg:flex-row justify-end lg:justify-center items-center ">
              <div className="lg:mb-0 w-full lg:w-auto">
                <NavLinks />
              </div>
              {/* <NavButton /> */}
              <div className="w-full items-center py-4 lg:py-0 lg:w-auto px-10 lg:px-0 flex justify-start lg:justify-center lg:absolute lg:right-0">
                <NavButton />
              </div>
            </section>
          </div>
        </section>
      </main>
    </nav>
  );
};

export default Navbar;
