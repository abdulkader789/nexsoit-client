import React, { createContext, useContext, useState } from 'react';

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
        setIsMenuClicked(true);
    };

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
