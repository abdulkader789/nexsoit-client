import { Link } from "react-router-dom";
import { useMobileNav } from "../../contexts/MobileNavContext";
import LoaderShape from "../../utils/LoaderShape";
import navlogo from '../../../public/nexlogo.png'
const NavLogo = () => {
  return (
    <div className="syne-bold ">
      <Link className="h-full flex justify-start items-center" to="/">
        {/* <p className="text-[12px]">Next Solution IT</p> */}
          <img className="h-6" src={navlogo}/>
                    <h1 className="text-sm text-black uppercase michroma-regular">Nexsoit</h1>

      </Link>
    </div>
  );
};

export default NavLogo;
