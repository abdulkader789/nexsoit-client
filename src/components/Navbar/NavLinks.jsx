import { Link } from 'react-router-dom';
import { useState } from 'react';

const navLinks = [
    { title: 'Home', path: '/' },
    { title: 'About', path: '/about' },
    { title: 'Services', path: '/services', dropdown: true, submenu: ['Service 1', 'Service 2', 'Service 3'] },
    { title: 'Blogs', path: '/blogs' },
    { title: 'Contact', path: '/contact' }
];

const NavLinks = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    return (
        <ul className="nav-links flex flex-col lg:flex-row   w-full">
            {navLinks.map((link, index) => (
                <li
                    key={index}
                    className="relative flex-1 py-4 border border-gray-200 lg:border-none  px-5"
                    onMouseEnter={() => setActiveIndex(index)}
                    onMouseLeave={() => setActiveIndex(null)}
                >
                   {link.dropdown ? (
                        <div className="relative">
                            <span className="block uppercase cursor-pointer" onMouseEnter={() => setActiveIndex(index)}>{link.title}</span>
                            {activeIndex === index && (
                                <ul className="lg:absolute lg:top-full lg:left-0 bg-white border border-gray-200 py-2 px-4 lg:w-48 lg:py-5">
                                    {link.submenu.map((item, subIndex) => (
                                        <li key={subIndex} className="text-gray-800 mb-2  cursor-pointer py-1">
                                            <Link to={`${link.path}/${item.toLowerCase().replace(/\s+/g, '-')}`}>{item}</Link>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    ) : (
                        <Link to={link.path} className="block uppercase">{link.title}</Link>
                    )}
                </li>
            ))}
        </ul>
    );
};

export default NavLinks;
