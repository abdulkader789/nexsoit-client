import React from "react";

const ServicePagination = ({ totalPages, currentPage, onPageChange }) => {
  return (
    <div className="flex 2xl:flex-col 2xl:absolute 2xl:top-44 2xl:-right-20 justify-center 2xl:py-10">
      {Array.from({ length: totalPages }, (_, index) => (
        <button
          key={index}
          className={`h-6 w-6 rounded-full text-[12px] mx-2 2xl:mx-0 my-5 poppins-regular ${
            currentPage === index + 1
              ? "bg-orange-300 text-white"
              : "bg-gray-200 text-gray-800"
          }`}
          onClick={() => onPageChange(index + 1)}
        >
          {index + 1}
        </button>
      ))}
    </div>
  );
};

export default ServicePagination;
