import { IoHandLeft } from "react-icons/io5";
import { Link } from "react-router-dom";
import { useMobileNav } from "../../contexts/MobileNavContext";
import { FiArrowRight } from "react-icons/fi";
import { FaArrowRight } from "react-icons/fa";

const NavButton = () => {
  const { handleClick } = useMobileNav();
  return (
    <button className="rounded-sm relative">
      <Link
        to="/contact"
        onClick={handleClick}
        className="flex justify-center items-center  focus:outline-none uppercase inline-block text-center"
      >
        <button className="bg-indigo-500 inter-medium  text-white text-sm py-2 px-4 rounded hover:bg-indigo-700 transition duration-300">
          Get A Quote
        </button>
      </Link>
    </button>
  );
};

export default NavButton;
