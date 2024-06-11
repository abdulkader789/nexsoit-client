import { Link } from "react-router-dom";
import { useMobileNav } from "../../contexts/MobileNavContext";
import LoaderShape from "../../utils/LoaderShape";

const NavLogo = () => {
  return (
    <div className="michroma-regular text-white flex">
      <div className=" mr-5">
        <LoaderShape />
      </div>
      <Link to="/">
        <h1 className="text-xl   font-extrabold uppercase">Nexsoit</h1>
        {/* <p className="text-[12px]">Next Solution IT</p> */}
      </Link>
    </div>
  );
};

export default NavLogo;
