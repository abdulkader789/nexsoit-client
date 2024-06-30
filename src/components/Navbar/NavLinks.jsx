import { Link, useLocation } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { FaAngleDown } from "react-icons/fa"; // Import the down arrow icon
import { useMobileNav } from "../../contexts/MobileNavContext";

const navLinks = [
  { title: "Home", path: "/home" },
  { title: "About", path: "/about" },
  {
    title: "Services",
    path: "/services",
    dropdown: true,
    submenu: ["web development", "app development", "ui/ux design"],
  },
  { title: "Team", path: "/team" },
  { title: "Contact", path: "/contact" },
];

const NavLinks = () => {
  const { handleClick } = useMobileNav();
  const [showDropdown, setShowDropdown] = useState(false);

  // Function to toggle dropdown
  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  // Function to close dropdown
  const closeDropdown = () => {
    setShowDropdown(false);
  };
  const dropdownRef = useRef(null); // Ref for dropdown menu

  // Effect to detect outside clicks
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        closeDropdown();
      }
    };

    if (showDropdown) {
      document.addEventListener("mousedown", handleOutsideClick);
    } else {
      document.removeEventListener("mousedown", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [showDropdown]);
  return (
    <ul
      className="flex flex-col lg:flex-row relative z-50 w-full lg:w-auto"
      ref={dropdownRef}
    >
      {navLinks.map((link, index) => (
        <li
          key={index}
          className="flex-1 pl-8 lg:pl-0 lg:px-10 py-4 border-b-[1px] border-gray-200 lg:border-none"
        >
          {link.dropdown ? (
            <>
              <span
                className="uppercase flex bricolage-grotesque-medium text-[18px] text-blue-800 lg:text-black cursor-pointer"
                onClick={toggleDropdown}
              >
                {link.title}{" "}
                <FaAngleDown className="inline-block ml-1 relative top-1" />
              </span>
              {showDropdown && (
                <ul className="  mt-1 lg:mt-0 py-2  px-10 lg:px-14 lg:absolute lg:top-full lg:shadow-md lg:bg-blue-700">
                  {link.submenu.map((item, idx) => (
                    <li
                      key={idx}
                      className=" text-gray-800 hover:text-blue-500 cursor-pointer py-5 lg:text-white lg:hover:text-blue-200 border-b-[1px] border-gray-200 lg:border-none"
                      onClick={() => {
                        handleClick(); // Close mobile nav
                        closeDropdown(); // Close dropdown
                      }}
                    >
                      <Link
                        to={"/services"}
                        className=" uppercase bricolage-grotesque-medium"
                      >
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </>
          ) : (
            <Link
              to={link.path}
              className="block uppercase bricolage-grotesque-medium text-[18px] text-blue-800 lg:text-black"
            >
              {link.title}
            </Link>
          )}
        </li>
      ))}
    </ul>
  );
};

export default NavLinks;
