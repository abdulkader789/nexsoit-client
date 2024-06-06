import { useEffect, useRef, useState } from "react";
import NavLogo from "../components/Navbar/NavLogo";
import NavIcons from "../components/Navbar/NavIcons";
import NavLinks from "../components/Navbar/NavLinks";
import NavContacts from "../components/Navbar/NavContacts";
import BookButton from "../components/Navbar/BookButton";
import FaBars from "../components/Navbar/FaBars/FaBars";
import { useMobileNav } from "../contexts/MobileNavContext";
import WelcomeMessage from "../components/Navbar/WelcomeMessage";
import TopNavbar from "../components/Navbar/TopNavbar";
import { defineDriver } from "localforage";

const Navbar = () => {
  const { isActive, handleClick } = useMobileNav();
  const [scrolling, setScrolling] = useState(false); // Modify initial state to false
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [scrollThreshold, setScrollThreshold] = useState(100); // Set your scroll threshold here
  const [isScrolled, setIsScrolled] = useState(false); // New state to determine if scroll is more than 0

  const navRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      const scrolledDistance = Math.abs(currentScrollPos - prevScrollPos);

      if (scrolledDistance > scrollThreshold) {
        // Scrolled past the threshold distance
        setScrolling(currentScrollPos > prevScrollPos);
        setPrevScrollPos(currentScrollPos);
      }

      // Set isScrolled to true if scrolled more than 0, otherwise false
      setIsScrolled(currentScrollPos > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos, scrollThreshold]);

  return (
    <nav
      className={`w-full fixed bg-transparent montserrat-regular z-50 top-0 text-white transition-all duration-400 ease-in-out`}
      ref={navRef}
    >
      <header
        className={`text-black relative hidden lg:block bg-white  ${
          scrolling ? "lg:hidden" : ""
        }`}
      >
        <TopNavbar />
      </header>
      <main
        className={`w-full px-10 py-2 lg:py-auto lg:w-auto h-[6vh] lg:h-auto flex justify-between items-center ${
          isScrolled ? "bg-glassy" : ""
        }  ${
          location.pathname !== "/" && location.pathname !== "/home"
            ? " bg-glassy"
            : " "
        }`}
      >
        <div className="w-40">
          <NavLogo />
        </div>
        <div className="flex justify-center h-full items-center lg:hidden">
          {/* <MenuIcon /> */}
          <FaBars />
        </div>
        <section
          className={`h-[94vh] sidebar-bg left-0 lg:h-auto lg:-translate-x-0 w-full absolute lg:relative top-[6vh] lg:top-0 z-20 transition-all duration-500 ease-in-out ${
            isActive ? "-translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="w-full flex">
            <section className="h-full w-full flex flex-col lg:flex-row justify-end items-center montserrat-bold">
              <div className="mb-10 lg:mb-0 w-full lg:w-auto ">
                <NavLinks />
              </div>
              <BookButton />
            </section>
          </div>
        </section>
      </main>
    </nav>
  );
};

export default Navbar;
