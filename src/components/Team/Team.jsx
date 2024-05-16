import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShareNodes } from "@fortawesome/free-solid-svg-icons";

const Team = () => {
  const TeamData = [
    {
      image: "./team-01.jpg",
      name: "Mike Hardson",
      designation: "Director",
    },
    {
      image: "./team-02.jpg",
      name: "Aleesha Brown",
      designation: "Director",
    },
    {
      image: "./team-03.jpg",
      name: "David Cooper",
      designation: "Director",
    },
    {
      image: "./team-04.jpg",
      name: "David Cooper",
      designation: "Director",
    },
  ];
  return (
    <div className="py-10">
      <p className="uppercase text-center text-blue-700">
        <small>professional team</small>
      </p>
      <h2 className="text-center text-3xl font-bold text-gray-900">
        Meet Our Experienced <br /> People Now
      </h2>
      <div className="max-w-6xl mx-auto my-8 px-2 grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1">
        {TeamData.map((item, index) => (
          <div
            key={index}
            className="overflow-hidden max-w-[300px] mx-auto text-center lg:mb-0 md:md-4 mb-5"
          >
            <div className="relative">
              <img
                src={item.image}
                alt="Blog Image"
                className="object-cover w-full max-w-[250px] mx-auto rounded-full border-solid border-[15px] border-t-gray-200 border-r-gray-200 border-l-white border-b-white"
              />
              <FontAwesomeIcon
                icon={faShareNodes}
                className="bg-white text-gray-800 p-3 text-base rounded-full cursor-pointer shadow-md absolute lg:top-5 lg:left-[9%] md:top-8 md:left-[5%] top-5 left-[10%]"
              />
            </div>
            <h3 className="text-xl font-bold mt-3">{item.name}</h3>
            <p className="font-semibold text-gray-600">{item.designation}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
