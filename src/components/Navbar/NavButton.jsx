import { IoHandLeft } from "react-icons/io5";
import { Link } from "react-router-dom";
import { useMobileNav } from "../../contexts/MobileNavContext";

const NavButton = () => {
  const { handleClick } = useMobileNav();
  return (
    <button className="px-4  border  rounded-sm relative">
      <Link
        to="/contact"
        onClick={handleClick}
        className="montserrat-regular text-[10px] lg:text-[12px] focus:outline-none uppercase inline-block text-center"
      >
        Start A Project
      </Link>
    </button>
  );
};

export default NavButton;
