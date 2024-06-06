import { Link } from "react-router-dom";

const NavLogo = () => {
  return (
    <div className="michroma-regular ">
      <Link to="/">
        <h1 className="text-xl text-white   font-extrabold uppercase">
          Nexsoit
        </h1>
        <p className="text-[12px]">Next Solution IT</p>
      </Link>
    </div>
  );
};

export default NavLogo;
