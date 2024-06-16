import { IoHandLeft } from "react-icons/io5";
import { Link } from "react-router-dom";
import { useMobileNav } from "../../contexts/MobileNavContext";
import { FiArrowRight } from 'react-icons/fi';
import { FaArrowRight } from "react-icons/fa";

const NavButton = () => {
  const { handleClick } = useMobileNav();
  return (
    <button className="rounded-sm relative">
      <Link
        to="/contact"
        onClick={handleClick}
        className="montserrat-regular flex justify-center items-center text-[10px] lg:text-[12px] focus:outline-none uppercase inline-block text-center"
      >
        Start A Project <FaArrowRight className="ml-2"/>
      </Link>
    </button>
  );
};

export default NavButton;
