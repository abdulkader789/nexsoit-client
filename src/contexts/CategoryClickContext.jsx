import React, { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

// Create the context
const CategoryClickContext = createContext();

// Create a custom hook to use the CategoryClickContext
export const useCategoryClick = () => {
  return useContext(CategoryClickContext);
};

// Create the CategoryClickProvider component
export const CategoryClickProvider = ({ children }) => {
  // State to track the selected category
  const [categoryClicked, setCategoryClicked] = useState("all");

  // Function to handle category click
  const handleCategoryClick = (category) => {
    setCategoryClicked(category);
  };

  // Value provided by the context
  const contextValue = {
    categoryClicked,
    handleCategoryClick,
  };

  return (
    <CategoryClickContext.Provider value={contextValue}>
      {children}
    </CategoryClickContext.Provider>
  );
};

export default CategoryClickProvider;
