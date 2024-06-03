import { Link } from "react-router-dom";

const NavLogo = () => {
  return (
    <div className="">
      <h1 className="text-xl text-white  michroma-regular  font-extrabold uppercase">
        <Link to="/home">logo</Link>
      </h1>
    </div>
  );
};

export default NavLogo;
