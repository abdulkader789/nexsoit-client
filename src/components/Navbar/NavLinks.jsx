import { Link } from 'react-router-dom';
import { useState } from 'react';

const navLinks = [
    { title: 'Home', path: '/' },
    { title: 'About', path: '/about' },
    { title: 'Services', path: '/services' },
    { title: 'Contact', path: '/contact' }
];

const NavLinks = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    return (
        <ul className="nav-links flex flex-col justify-evenly items-center w-full">
            {navLinks.map((link, index) => (
                <li
                    key={index}
                    className="relative flex-1"
                    onMouseEnter={() => setActiveIndex(index)}
                    onMouseLeave={() => setActiveIndex(null)}
                >
                    <Link to={link.path} className="block uppercase text-center">{link.title}</Link>
                    {activeIndex === index && (
                        <div className="absolute -top-2 left-0 w-full h-[1px] bg-black"></div>
                    )}
                </li>
            ))}
        </ul>
    );
};

export default NavLinks;
