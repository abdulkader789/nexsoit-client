import { Link } from "react-router-dom";
import { useMobileNav } from "../../contexts/MobileNavContext";

const NavLogo = () => {
  const { handleClick } = useMobileNav();
  return (
    <div className="michroma-regular text-white">
      <Link to="/" onClick={handleClick}>
        <h1 className="text-xl   font-extrabold uppercase">Nexsoit</h1>
        {/* <p className="text-[12px]">Next Solution IT</p> */}
      </Link>
    </div>
  );
};

export default NavLogo;
