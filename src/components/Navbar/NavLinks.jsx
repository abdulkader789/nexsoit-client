import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { FaAngleDown } from "react-icons/fa"; // Import the down arrow icon
import { useMobileNav } from "../../contexts/MobileNavContext";

const navLinks = [
  { title: "Home", path: "/home" },
  { title: "About", path: "/about" },
  {
    title: "Services",
    path: "/services",
    // dropdown: true,
    // submenu: ["Service 1", "Service 2", "Service 3"],
  },
  { title: "Team", path: "/team" },
  // { title: "Blogs", path: "/blogs" },
  { title: "Contact", path: "/contact" },
  // { title: "NewContact", path: "/newcontact" },
];

const NavLinks = () => {
  const { handleClick } = useMobileNav();
  const location = useLocation();

  return (
    <ul className=" flex flex-col  lg:flex-row relative z-50 w-full lg:w-auto">
      {navLinks.map((link, index) => (
        <li
          key={index}
          className="flex-1 px-10 lg:px-5   py-4 border-b-[1px] border-gray-200 lg:border-none "
          onClick={handleClick}
        >
          <Link
            to={link.path}
            className="block capitalize bricolage-grotesque-regular text-5xl  lg:text-[18px]  text-blue-800 lg:text-black"
          >
            {link.title}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default NavLinks;
