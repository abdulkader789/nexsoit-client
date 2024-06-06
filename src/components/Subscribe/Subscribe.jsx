import React from "react";

const Subscribe = () => {
  return (
    <div className="bg-[#1768FE] py-28">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-5 md:gap-6 justify-between items-center px-3 sm:px-4 lg:px-5">
        <div className="text-center md:text-left">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-9 font-bold text-white md:leading-10">
            Get Start Your New Job With Us!
          </h2>
          <p className="sm:mt-2 md:mt-4 max-w-lg md:max-w-2xl mx-auto text-sm sm:text-base text-gray-300">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis.
          </p>
        </div>
        <button className="px-5 py-3 text-sm sm:text-base font-medium rounded-md text-white bg-[#FEAC36] hover:opacity-90">
          Create an Account
        </button>
      </div>
    </div>
  );
};

export default Subscribe;
