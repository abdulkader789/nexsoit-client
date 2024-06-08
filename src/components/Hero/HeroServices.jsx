import React from "react";

import {
  FaLaptopCode,
  FaMobileAlt,
  FaCode,
  FaPencilRuler,
  FaVideo,
  FaSearch,
} from "react-icons/fa";

const colors = [
  "bg-skyBlue",
  "bg-darkBlue",
  "bg-blackShade",
  "bg-lightBlue",
  "bg-navyBlue",
  "bg-charcoalBlack",
];

const servicesData = [
  {
    imageURL: <FaLaptopCode />,
    heading: "Custom Software Development",
    description:
      "Develop tailored software solutions to meet your unique business requirements, ensuring efficiency and scalability.",
    bgClass: colors[0],
  },
  {
    imageURL: <FaMobileAlt />,
    heading: "Mobile App Development",
    description:
      "Create innovative mobile applications for both iOS and Android platforms, focusing on user engagement and functionality.",
    bgClass: colors[1],
  },
  {
    imageURL: <FaCode />,
    heading: "Web Development",
    description:
      "Offer comprehensive full-stack development services, from front-end design to back-end integration, for scalable and secure applications.",
    bgClass: colors[2],
  },
  {
    imageURL: <FaPencilRuler />,
    heading: "User Experience Design",
    description:
      "Design intuitive and engaging user experiences, focusing on usability, accessibility, and user satisfaction.",
    bgClass: colors[3],
  },
  {
    imageURL: <FaVideo />,
    heading: "Video Editing",
    description:
      "Provide professional video editing services, enhancing visual storytelling with creative and technical expertise.",
    bgClass: colors[4],
  },
  {
    imageURL: <FaSearch />,
    heading: "SEO Services",
    description:
      "Enhance your online visibility and drive organic traffic with expert SEO strategies, including keyword research, on-page optimization, and link building.",

    bgClass: colors[5],
  },
];

const HeroCard = () => {
  return <div></div>;
};

const HeroServices = () => {
  return (
    <main className="relative z-30 lg:px-20    w-full ">
      <div className=" h-full w-full relative  lg:-top-40 shadow-md    bg-gray-100 px-2 lg:px-20 py-10 rounded-md">
        <h1 className="noto-sans-medium uppercase text-2xl md:text-4xl mb-5 text-center">
          Empowering Digital Solutions
        </h1>
        <section className="grid grid-cols-1  sm:grid-cols-2  gap-3 w-full xl:grid-cols-3 xl:gap-5  py-5">
          {servicesData.map((item, index) => (
            <div
              key={index}
              className={`flex p-4 h-72 xl:mx-auto   justify-center items-center  border w-full  bg-white text-black `}
            >
              <div className="flex flex-col  lg:p-10 ">
                {/* First Div - Icon */}
                <div
                  className={` text-5xl mb-3 flex justify-center text-blue-500`}
                >
                  {item.imageURL}
                </div>
                {/* Second Div - Header and Paragraph */}
                <div className="flex flex-col justify-center">
                  <h2 className="mb-2 text-sm lg:text-xl  text-center poppins-semibold">
                    {item.heading}
                  </h2>
                  <p className=" text-sm work-sans text-center">
                    {item.description}
                  </p>
                  <div className="flex justify-center py-6">
                    <button className="btn-learn-more z-10 py-2 text-sm px-5 poppins-regular">
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </section>
      </div>
    </main>
  );
};

export default HeroServices;
