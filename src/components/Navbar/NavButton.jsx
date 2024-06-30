import { Link } from "react-router-dom";

const NavButton = () => {
  return (
    <button className="bg-blue-900 py-2 px-8 capitalize bricolage-grotesque-regular text-xl text-white  rounded hover:bg-indigo-700 transition duration-300">
      <Link to="/contact">Get Quote</Link>
    </button>
  );
};

export default NavButton;
