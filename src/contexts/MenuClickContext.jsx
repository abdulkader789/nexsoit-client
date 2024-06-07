import React, { createContext, useContext, useState, useEffect } from "react";
import MobileNavProvider from "./MobileNavContext";

// Create the context
const MenuClickContext = createContext();

// Create a custom hook to use the MenuClickContext
export const useMenuClick = () => {
  return useContext(MenuClickContext);
};

// Create the MenuClickProvider component
export const MenuClickProvider = ({ children }) => {
  // State to track if menu is clicked
  const [isMenuClicked, setIsMenuClicked] = useState(true);

  // Function to handle menu click
  const handleMenuClick = () => {
    setIsMenuClicked((prev) => !prev);
  };

  // Value provided by the context
  const contextValue = {
    isMenuClicked,
    handleMenuClick,
  };

  return (
    <MenuClickContext.Provider value={contextValue}>
      {children}
    </MenuClickContext.Provider>
  );
};

export default MenuClickProvider;
