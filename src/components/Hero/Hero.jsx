import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import {
  FaUserTie,
  FaCode,
  FaChartBar,
  FaHeadset,
  FaPaintBrush,
  FaUsers,
} from "react-icons/fa";
import { FaChartLine, FaChartPie, FaMoneyBillWaveAlt } from "react-icons/fa";

const servicesData = [
  {
    imageURL: <FaChartLine />,
    heading: "Business and Financial Planning",
    description:
      "Create strategic business plans and financial forecasts to guide decision-making and achieve organizational objectives.",
  },
  {
    imageURL: <FaChartPie />,
    heading: "Analysis & Projections",
    description:
      "Conduct in-depth financial analysis and develop projections to identify trends, opportunities, and potential risks.",
  },
  {
    imageURL: <FaMoneyBillWaveAlt />,
    heading: "Investment Advice",
    description:
      "Provide expert investment advice and portfolio management services to optimize returns and minimize risks.",
  },
];
const jobData = [
  {
    designation: "Accountant",
    imageURL: <FaChartBar />,
    vacancy: "5 Positions Available",
    redirect: "/accountant-job",
  },
  {
    designation: "Software Engineer",
    imageURL: <FaCode />,
    vacancy: "3 Positions Available",
    redirect: "/software-engineer-job",
  },
  {
    designation: "Marketing Manager",
    imageURL: <FaUsers />,
    vacancy: "7 Positions Available",
    redirect: "/marketing-manager-job",
  },
  {
    designation: "Customer Service Representative",
    imageURL: <FaHeadset />,
    vacancy: "2 Positions Available",
    redirect: "/customer-service-job",
  },
  {
    designation: "Graphic Designer",
    imageURL: <FaPaintBrush />,
    vacancy: "4 Positions Available",
    redirect: "/graphic-designer-job",
  },
  {
    designation: "Human Resources Specialist",
    imageURL: <FaUserTie />,
    vacancy: "6 Positions Available",
    redirect: "/hr-specialist-job",
  },
];
const colors = ["bg-skyBlue", "bg-darkBlue", "bg-blackShade"];

const HeroSection = () => {
  return (
    <main className="relative z-30 px-20  w-full h-[60vh] ">
      <div className=" h-full w-full relative  -top-36 shadow-md    bg-gray-100 rounded-md">
        <section className="flex justify-center items-center    h-1/2 ">
          {jobData.map((item, index) => (
            <div
              key={index}
              className={`flex-1  h-full  border-gray-300 pt-10 ${
                index !== jobData.length - 1 ? "border-r-2" : ""
              }`}
            >
              <div className=" h-full">
                <h2 className="mb-5 h-14 text-xl font-bold text-center">
                  {item.designation}
                </h2>
                <div className=" mb-2 flex  justify-center items-center  text-center text-3xl ">
                  {item.imageURL}
                </div>
                <p className="text-lg text-center">{item.vacancy}</p>
              </div>
            </div>
          ))}
        </section>

        <section className="flex h-1/2 ">
          {servicesData.map((item, index) => (
            <div
              key={index}
              className={`flex flex-1 justify-center  mb-4 ${colors[index]} h-full text-white `}
            >
              <div className="flex   h-full p-10 ">
                {/* First Div - Icon */}
                <div className="mr-2 text-5xl">{item.imageURL}</div>
                {/* Second Div - Header and Paragraph */}
                <div className="">
                  <h2 className="mb-2 text-2xl font-bold">{item.heading}</h2>
                  <p className="mb-2 text-xl">{item.description}</p>
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
