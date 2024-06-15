import { Link } from "react-router-dom";
import { useMobileNav } from "../../contexts/MobileNavContext";
import LoaderShape from "../../utils/LoaderShape";

const NavLogo = () => {
  return (
    <div className="syne-bold  flex  items-center">
      <Link to="/">
        {/* <p className="text-[12px]">Next Solution IT</p> */}
          <h1 className="text-xl font-extrabold capitalize">Nexsoit</h1>
      </Link>
    </div>
  );
};

export default NavLogo;
