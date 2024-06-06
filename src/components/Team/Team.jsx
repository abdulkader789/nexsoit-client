import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShareNodes } from "@fortawesome/free-solid-svg-icons";

const Team = () => {
  const TeamData = [
    {
      image:
        "https://eu-images.contentstack.com/v3/assets/blt69509c9116440be8/blt1df1b84a6c2caa3a/64bf4841758146773ef28ccd/softwaredevelopers-SeventyFour_Images-alamy.jpg?width=850&auto=webp&quality=95&format=jpg&disable=upscale",
      name: "Development Team",
      designation: "Director",
    },
    {
      image:
        "https://blog.adobe.com/en/publish/2022/06/27/media_19a03340c6a3b5e760e8a8e03735d9e2c43c26da8.jpeg?width=1200&format=pjpg&optimize=medium",
      name: "Design Team",
      designation: "Director",
    },
    {
      image: "https://lvivity.com/wp-content/uploads/2018/08/dev_team.jpg",
      name: "Marketing Team",
      designation: "Director",
    },
    {
      image:
        "https://northwest.education/wp-content/uploads/2021/03/how-to-communicate-effcetive_y-1.jpg",
      name: "Support Team",
      designation: "Director",
    },
  ];
  return (
    <div className="py-10">
      <div className="py-5 mb-5">
        <p className="uppercase text-center text-blue-700 mb-1">
          <small>professional team</small>
        </p>
        <h2 className="text-center text-3xl poppins-bold font-bold text-gray-900">
          Meet Our Experienced Team
        </h2>
      </div>

      <div className="py-10 px-2 flex flex-wrap ">
        {TeamData.map((item, index) => (
          <div
            key={index}
            className=" mx-auto text-center lg:mb-0 md:md-4 mb-5"
          >
            <div className="relative h-60 w-60 md:h-72 md:w-72 lg:w-96 lg:h-96 ">
              <img
                src={item.image}
                alt="Blog Image"
                className="object-cover h-full w-full rounded-full border-solid border-[15px] border-t-gray-200 border-r-gray-200 border-l-white border-b-white"
              />
              <FontAwesomeIcon
                icon={faShareNodes}
                className="bg-white text-gray-800 p-3 text-base rounded-full cursor-pointer shadow-md absolute lg:top-10 lg:left-[9%] md:top-8 md:left-[5%] top-5 left-[10%]"
              />
            </div>
            <h3 className="text-md font-bold mt-3 michroma-bold ">
              {item.name}
            </h3>
            {/* <p className="font-semibold text-gray-600">{item.designation}</p> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
