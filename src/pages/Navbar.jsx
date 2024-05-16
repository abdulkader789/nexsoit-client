import { useEffect, useRef, useState } from "react";
import NavLogo from "../components/Navbar/NavLogo";
import NavIcons from "../components/Navbar/NavIcons";
import NavLinks from "../components/Navbar/NavLinks";
import NavContacts from "../components/Navbar/NavContacts";
import BookButton from "../components/Navbar/BookButton";
import MenuIcon from "../components/Navbar/MenuIcon";
import { useMenuClick } from "../contexts/MenuClickContext";

const Navbar = () => {
  const [scrolling, setScrolling] = useState(false); // Modify initial state to false
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [scrollThreshold, setScrollThreshold] = useState(100); // Set your scroll threshold here
  const { isMenuClicked } = useMenuClick();
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
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos, scrollThreshold]);

  return (
    <nav
      className={`w-full montserrat-regular bg-transparent z-50 sticky top-0 flex flex-col xl:flex-row justify-between xl:justify-normal text-white `}
      ref={navRef}
      style={{
        backgroundColor: "#007cb9", // Black with 50% opacity
        backdropFilter: "blur(10px)", // Glassy effect
      }}
    >
      <header className="w-full lg:w-auto px-5 h-[5vh] lg:h-auto flex justify-between items-center">
        <NavLogo />
        <div className="flex justify-center items-center lg:hidden">
          <MenuIcon />
        </div>
      </header>
      <main
        className={`h-[95vh] bg-slate-700 lg:bg-transparent lg:h-auto lg:-translate-x-0  w-full absolute lg:relative top-12 lg:top-0 z-20   transition-all duration-500 ease-in-out ${
          isMenuClicked ? "-translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="w-full flex flex-col-reverse lg:flex-col lg:px-14">
          <section
            className={`flex flex-col lg:flex-row items-center  xl:justify-between lg:py-0 w-full ${
              scrolling ? "lg:hidden" : ""
            }`}
          >
            <div className="my-5   px-5 lg:px-0">
              <NavIcons />
            </div>
            <div className="mb-5  lg:py-3 lg:mb-0 px-5">
              <NavContacts />
            </div>
            <div>
              <BookButton />
            </div>
          </section>
          <section className="  montserrat-bold">
            <NavLinks />
          </section>
        </div>
      </main>
    </nav>
  );
};

export default Navbar;
