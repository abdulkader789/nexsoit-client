import { Link } from "react-router-dom";
import { useMobileNav } from "../../contexts/MobileNavContext";
import LoaderShape from "../../utils/LoaderShape";
import agencyLogo from "../../../public/AgencyLogo.png";
const NavLogo = () => {
  return (
    <div className="michroma-regular text-white ">
      <Link to="/">
        {/* <p className="text-[12px]">Next Solution IT</p> */}
        <div className="flex justify-center items-center ">
          {/* <h1 className="text-xl pl-5 font-extrabold uppercase">Nexsoit</h1> */}
          <img src={agencyLogo} />
        </div>
      </Link>
    </div>
  );
};

export default NavLogo;
