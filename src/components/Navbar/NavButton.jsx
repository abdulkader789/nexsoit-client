import { Link } from "react-router-dom";

const NavButton = () => {
  return (
    <div className="px-4 py-2 uppercase text-[10px] border lg:text-[12px] text-white hover:bg-black hover:text-white rounded-sm">
      <Link
        to="/contact"
        className=" michroma-regular   focus:outline-none inline-block text-center"
      >
        Start A Project
      </Link>
    </div>
  );
};

export default NavButton;
