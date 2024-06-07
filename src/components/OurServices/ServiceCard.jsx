import { Link } from "react-router-dom";
import React, { useState } from "react";
import { FaAngleDoubleRight } from "react-icons/fa";
const ServiceCard = ({ icon, title, description, list, image, slug }) => {
  return (
    <div className="relative rounded overflow-hidden shadow-lg bg-gray-700 group">
      <div
        className="absolute inset-0 bg-cover scale-125 bg-center opacity-0 group-hover:opacity-70  transform transition-transform duration-700 ease-in-out group-hover:scale-100"
        style={{
          backgroundImage: `url(${image})`,
        }}
      ></div>
      <div className="absolute inset-0 bg-black bg-opacity-60 backdrop-blur-sm transition-opacity duration-500"></div>

      <div className="relative px-6 py-4">
        <div className="flex flex-col mb-4 relative">
          <div className="mr-4 text-6xl mb-5 text-green-300">{icon}</div>
          <div className="text-xl montserrat-semibold text-white">{title}</div>
          <button className="absolute right-0 h-10 w-10 text-white hover:text-orange-300 rounded-full border top-2 transition duration-200 ease-in-out transform hover:scale-105">
            <Link to={`/services/${slug}`}>
              <span className="hover:translate-x-1 h-full flex justify-center items-center w-full transition duration-300 ease-in-out">
                <FaAngleDoubleRight />
              </span>
            </Link>
          </button>
        </div>
        <p className="text-white text-base roboto-regular">{description}</p>
        <ul className="mt-4">
          {list &&
            list.map((item, i) => (
              <li
                key={i}
                className="flex items-center text-gray-100 text-sm work-sans"
              >
                <svg
                  className="w-3 h-3 fill-current mr-2 text-orange-400"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M0 0h24v24H0z" fill="none" />
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                </svg>
                {item}
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default ServiceCard;
