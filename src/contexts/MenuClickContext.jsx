import React, { createContext, useContext, useState, useEffect } from 'react';

// Create the context
const MenuClickContext = createContext();

// Create a custom hook to use the MenuClickContext
export const useMenuClick = () => {
    return useContext(MenuClickContext);
};

// Create the MenuClickProvider component
export const MenuClickProvider = ({ children }) => {
    // State to track if menu is clicked
    const [isMenuClicked, setIsMenuClicked] = useState(false);

    // Function to handle menu click
    const handleMenuClick = () => {
        setIsMenuClicked(prev=>!prev);
    };

    // Effect to set the overflow style property of the body based on isMenuClicked state
    useEffect(() => {
        if (isMenuClicked) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }

        // Cleanup function to reset overflow property when component unmounts
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [isMenuClicked]);

    // Value provided by the context
    const contextValue = {
        isMenuClicked,
        handleMenuClick
    };

    return (
        <MenuClickContext.Provider value={contextValue}>
            {children}
        </MenuClickContext.Provider>
    );
};
