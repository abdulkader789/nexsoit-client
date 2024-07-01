import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import website from "../../../public/website-3d.png";
import mobile from "/mobile-3d.png";
import { useInView } from "framer-motion";
import Lottie from "lottie-react";
import animationData from "../../../public/Animation - 1718739852610.json";
import Blob from "./Blob";
import CustomButton from "../CustomButtton/CustomButton";
import WaveSVG from "../WaveSVG/WaveSVG";
import MouseEffect from "../MouseEffect/MouseEffect";
const themes = [
  {
    id: 1,
    texts: [
      {
        text: "Design & develop",
      },
      {
        text: "applications for",
      },
      { text: "web and mobile" },
    ],
  },
  {
    id: 2,
    texts: [
      {
        text: "Creative UI/UX",
      },
      {
        text: "design solution",
      },
      {
        text: "for interactivity",
      },
    ],
  },
  {
    id: 3,
    texts: [
      {
        text: "Fast eCommerce",
      },
      {
        text: "for businesses",
      },
      {
        text: "with frameworks",
      },
    ],
  },

  // Add more themes as needed
];

const BannerSection = () => {
  const [currentThemeIndex, setCurrentThemeIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentThemeIndex((prevIndex) =>
        prevIndex === themes.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000); // Change theme every 4 seconds

    return () => clearInterval(interval);
  }, []);
  return (
    <div className="lg:h-screen w-full relative flex flex-col lg:items-center lg:flex-row mb-5 banner-section overflow-hidden">
      <section className="w-full flex flex-col justify-start lg:justify-center items-center  pt-20 lg:pt-0  lg:w-1/2">
        <div className="w-full lg:w-auto pl-5 pt-5 lg:pt-0 ">
          {themes.map((theme, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={
                index === currentThemeIndex
                  ? { opacity: 1, y: 0 }
                  : { opacity: 0, y: -50 }
              }
              transition={{ duration: 0.8 }}
              style={{
                display: index === currentThemeIndex ? "block" : "none",
              }}
            >
              <h1 className="bricolage-grotesque-bold mb-2 text-4xl lg:text-7xl">
                {theme.texts[0].text}
              </h1>
              <h1 className="montserrat-alternates-medium mb-2 text-4xl lg:text-6xl">
                {theme.texts[1].text}
              </h1>
              <h1 className="bricolage-grotesque-bold text-4xl lg:text-7xl">
                {theme.texts[2].text}
              </h1>
            </motion.div>
          ))}
          <div className="mt-8 flex w-full ">
            {/* <button className="bg-green-500 inter-medium  text-white text-sm py-2 px-4 rounded hover:bg-green-700 transition duration-300">
              Start Your Project
            </button> */}
            <CustomButton
              name={"Learn More"}
              slug={"contact"}
              classes={
                "after:bg-black bricolage-grotesque-regular mr-4  sm:mr-8 uppercase text-base bg-blue-600 font-button text-white  hover:bg-blue-700 transition duration-300 rounded-sm after:rounded-sm px-7 py-[7px] lg:px-10 lg:py-[10px]"
              }
            />
            <CustomButton
              name={"Start Project"}
              slug={"contact"}
              classes={
                "after:bg-black text-base bricolage-grotesque-regular uppercase bg-green-500 font-button text-white  hover:bg-green-700 transition duration-300 rounded-sm after:rounded-sm px-7 py-[7px] lg:px-10 lg:py-[10px]"
              }
            />
          </div>
        </div>
        {/* Buttons */}
      </section>

      <section className="lg:w-1/2  relative ">
        <div className="relative flex items-center h-full overflow-hidden">
          <Lottie
            animationData={animationData}
            loop={true}
            className="relative w-full z-10"
          />
          <div className="h-full w-full flex items-center absolute z-20 ">
            <img
              className="h-40 lg:h-1/2  w-auto absolute right-0 bottom-0"
              src={mobile}
            />
          </div>
          <div className="w-full absolute animated-bg transform translate-x-40 translate-y-0 lg:translate-x-40 lg:translate-y-20 ">
            <Blob />
          </div>
        </div>
      </section>
    </div>
  );
};

export default BannerSection;
