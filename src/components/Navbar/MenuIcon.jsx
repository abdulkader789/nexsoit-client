import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { useMenuClick } from '../../contexts/MenuClickContext';

const MenuIcon = () => {
    const [isOpen, setIsOpen] = useState(false);

    const { handleMenuClick } = useMenuClick(); // Use the context hook to access the handleMenuClick function

    const toggleMenu = () => {
        setIsOpen(!isOpen);
        handleMenuClick(); // Call the handleMenuClick function from the context
    };

    return (
        <div onClick={toggleMenu} className="cursor-pointer">
            {isOpen ? <FaTimes /> : <FaBars />}
        </div>
    );
};

export default MenuIcon;
