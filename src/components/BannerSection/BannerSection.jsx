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
    <div className="relative overflow-hidden lg:h-screen banner-section flex flex-col md:flex-row md:pt-20 lg:pt-0 mb-20 lg:mb-0">
      <section className="pt-32 flex  flex-col pl-8 xl:pl-0  sm:items-center w-full md:w-1/2 lg:h-full sm:justify-center md:pt-0">
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
            <h1 className="bricolage-grotesque-bold mb-3 text-4xl sm:6xl lg:text-7xl">
              {theme.texts[0].text}
            </h1>
            <h1 className="montserrat-alternates-medium mb-3 text-4xl sm:6xl lg:text-6xl">
              {theme.texts[1].text}
            </h1>
            <h1 className="bricolage-grotesque-bold text-4xl sm:6xl lg:text-7xl">
              {theme.texts[2].text}
            </h1>
            <CustomButton
              name={"Learn More"}
              slug={"contact"}
              classes={
                "after:bg-black bricolage-grotesque-regular mt-5  text-base bg-blue-600 font-button text-white  hover:bg-blue-700 transition duration-300 rounded-sm after:rounded-sm px-7 py-[7px] lg:px-16 lg:py-[10px]"
              }
            />
          </motion.div>
        ))}
      </section>

      <section className=" flex  flex-col justify-center items-center w-full md:w-1/2 lg:h-full">
        <div className="relative w-full h-full z-10 ">
          <Lottie
            animationData={animationData}
            loop={true}
            className="w-full h-full "
          />
        </div>
        {/* <div className="">
          <img className="" src={mobile} />
        </div>
        <div className="w-full h-full  absolute animated-bg transform translate-x-40 translate-y-0 lg:translate-x-40 lg:translate-y-20 ">
          <Blob />
        </div> */}
      </section>
    </div>
  );
};

export default BannerSection;
