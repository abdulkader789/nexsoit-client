import { Link } from "react-router-dom";
import { useMobileNav } from "../../contexts/MobileNavContext";
import LoaderShape from "../../utils/LoaderShape";

const NavLogo = () => {
  return (
    <div className="michroma-regular text-white ">
      <Link to="/">
        {/* <p className="text-[12px]">Next Solution IT</p> */}
        <div className="flex justify-center items-center ">
          <LoaderShape />

          <h1 className="text-xl pl-5 font-extrabold uppercase">Nexsoit</h1>
        </div>
      </Link>
    </div>
  );
};

export default NavLogo;
