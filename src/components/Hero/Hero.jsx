import React from "react";

import {
  FaChartLine,
  FaChartPie,
  FaMoneyBillWaveAlt,
  FaLaptopCode,
  FaMobileAlt,
  FaCode,
  FaDatabase,
  FaCloud,
  FaShieldAlt,
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
    heading: "Full-Stack Development",
    description:
      "Offer comprehensive full-stack development services, from front-end design to back-end integration, for scalable and secure applications.",
    bgClass: colors[2],
  },
  {
    imageURL: <FaDatabase />,
    heading: "Database Management",
    description:
      "Provide robust database management services, ensuring data integrity, security, and performance optimization.",
    bgClass: colors[3],
  },
  {
    imageURL: <FaCloud />,
    heading: "Cloud Computing",
    description:
      "Leverage cloud computing technologies to enhance your business operations with scalable and flexible cloud solutions.",
    bgClass: colors[4],
  },
  {
    imageURL: <FaShieldAlt />,
    heading: "Cybersecurity Services",
    description:
      "Implement advanced cybersecurity measures to protect your business from cyber threats and ensure data confidentiality.",
    bgClass: colors[5],
  },
];

const HeroCard = () => {
  return <div></div>;
};

const HeroSection = () => {
  return (
    <main className="relative z-30 lg:px-20   bg-white w-full ">
      <div className=" h-full w-full relative  lg:-top-40 shadow-md    bg-gray-100 px-2 lg:px-20 py-10 rounded-md">
        <h1 className="poppins-extrabold text-4xl mb-5 text-center">
          Our Servies
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
                <div className="">
                  <h2 className="mb-2 text-sm lg:text-xl  text-center poppins-semibold">
                    {item.heading}
                  </h2>
                  <p className=" text-sm work-sans text-center">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </section>
      </div>
    </main>
  );
};

export default HeroSection;
