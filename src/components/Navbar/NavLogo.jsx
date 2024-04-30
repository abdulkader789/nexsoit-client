import { Link } from "react-router-dom";

const NavLogo = () => {

    return (
        <div className="">
            <h1 className="text-xl  michroma-regular  font-extrabold uppercase">
                <Link to='/home'>ByteFolks</Link>
            </h1>
        </div>
    )
}

export default NavLogo;