import { Link } from "react-router-dom";
import { useMobileNav } from "../../contexts/MobileNavContext";
import LoaderShape from "../../utils/LoaderShape";
import agencyLogo from "/AgencyLogo.png";
const NavLogo = () => {
  return (
    <div className="">
      <Link className="h-full flex justify-start items-center" to="/">
        {/* <p className="text-[12px]">Next Solution IT</p> */}
        <img className="w-64" src={agencyLogo} />
        {/* <h1 className="text-2xl uppercase amita-bold">Nexsoit</h1> */}
      </Link>
    </div>
  );
};

export default NavLogo;
