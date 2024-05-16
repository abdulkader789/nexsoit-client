import React from "react";
import { FaPaintBrush, FaUsers } from "react-icons/fa";
import { FaChartBar, FaCode } from "react-icons/fa";

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
    title: "Web Development",
    imageURL: <FaCode />,
    projectsCompleted: 100,
    clientsWorkedWith: 50,
    redirect: "/web-development-jobs",
  },
  {
    title: "Web Design",
    imageURL: <FaPaintBrush />,
    projectsCompleted: 80,
    clientsWorkedWith: 40,
    redirect: "/web-design-jobs",
  },
  {
    title: "UI/UX Design",
    imageURL: <FaPaintBrush />,
    projectsCompleted: 60,
    clientsWorkedWith: 30,
    redirect: "/ui-ux-design-jobs",
  },
  {
    title: "SEO",
    imageURL: <FaChartBar />,
    projectsCompleted: 120,
    clientsWorkedWith: 60,
    redirect: "/seo-jobs",
  },
  {
    title: "Marketing",
    imageURL: <FaUsers />,
    projectsCompleted: 150,
    clientsWorkedWith: 75,
    redirect: "/marketing-jobs",
  },
  {
    title: "Photo & Video Editing",
    imageURL: <FaPaintBrush />,
    projectsCompleted: 70,
    clientsWorkedWith: 35,
    redirect: "/photo-video-editing-jobs",
  },
];

const colors = ["bg-skyBlue", "bg-darkBlue", "bg-blackShade"];

const HeroSection = () => {
  return (
    <main className="relative z-30 lg:px-20  w-full lg:h-[60vh]  ">
      <div className=" h-full w-full relative  lg:-top-36 shadow-md    bg-gray-100 rounded-md">
        <section className="flex flex-col lg:flex-row justify-center items-center    h-1/2 ">
          {jobData.map((item, index) => (
            <div
              key={index}
              className={`lg:flex-1  h-full  border-gray-300 pt-10 ${
                index !== jobData.length - 1 ? "lg:border-r-2" : ""
              }`}
            >
              <div className=" h-full">
                <h2 className="mb-5 h-14 text-xl font-bold text-center">
                  {item.title}
                </h2>
                <div className=" mb-2 flex  justify-center items-center  text-center text-3xl ">
                  {item.imageURL}
                </div>
                {/* <div className="">
                  <p className="text-lg text-center">
                    Projects completed {item.projectsCompleted}
                  </p>
                  <p className="text-lg text-center">
                    Number of our clients {item.clientsWorkedWith}
                  </p>
                </div> */}
              </div>
            </div>
          ))}
        </section>

        <section className="flex h-1/2 flex-col lg:flex-row ">
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
