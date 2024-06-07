import React from "react";

const ServiceCategorySelection = ({
  categories,
  selectedCategory,
  onSelectCategory,
}) => {
  return (
    <div className="flex flex-col lg:flex-row justify-center mb-2 lg:mb-8">
      {categories.map((category, index) => (
        <button
          key={index}
          className={`px-4 py-4 flex-1 michroma-regular text-sm ${
            selectedCategory === category
              ? "bg-blue-500 text-white"
              : "bg-gray-200 text-gray-800"
          }`}
          onClick={() => {
            onSelectCategory(category);
          }}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default ServiceCategorySelection;
