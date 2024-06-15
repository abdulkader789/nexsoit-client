import { IoHandLeft } from "react-icons/io5";
import { Link } from "react-router-dom";
import { useMobileNav } from "../../contexts/MobileNavContext";

const NavButton = () => {
  const { handleClick } = useMobileNav();
  return (
    <button className="px-4 py-1 border  rounded-sm relative">
      <Link
        to="/contact"
        onClick={handleClick}
        className="syne-bold focus:outline-none text-md capitalize inline-block text-center"
      >
        Start A Project
      </Link>
    </button>
  );
};

export default NavButton;
