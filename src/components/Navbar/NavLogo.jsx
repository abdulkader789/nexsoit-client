import { Link } from "react-router-dom";
import { useMobileNav } from "../../contexts/MobileNavContext";
import LoaderShape from "../../utils/LoaderShape";
import navlogo from "../../../public/nexlogo.png";
const NavLogo = () => {
  return (
    <div className="">
      <Link className="h-full flex justify-start items-center" to="/">
        {/* <p className="text-[12px]">Next Solution IT</p> */}
        <img className="h-8" src={navlogo} />
        <h1 className="text-2xl uppercase amita-bold">Nexsoit</h1>
      </Link>
    </div>
  );
};

export default NavLogo;
