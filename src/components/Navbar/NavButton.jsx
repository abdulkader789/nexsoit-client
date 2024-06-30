import { Link } from "react-router-dom";

const NavButton = () => {
  return (
    <button className="bg-indigo-500 py-2 px-5 capitalize bricolage-grotesque-regular text-xl text-white  rounded hover:bg-indigo-700 transition duration-300">
      <Link to="/contact">Start Project</Link>
    </button>
  );
};

export default NavButton;
