import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import website from "../../../public/website-3d.png";
import mobile from "../../../public/mobile-3d.png";
import { useInView } from "framer-motion";
import Lottie from "lottie-react";
import animationData from "../../../public/Animation - 1718739852610.json";
import Blob from "./Blob";
import Button from "../Buttton/Button";
import WaveSVG from "../WaveSVG/WaveSVG";
const BannerSection = () => {
  return (
    <div className="lg:h-screen w-full relative flex flex-col lg:items-center lg:flex-row mb-5">
      <section className="w-full flex flex-col justify-start lg:justify-center items-center  pt-20 lg:pt-0  lg:w-1/2">
        <div className="w-full lg:w-auto pl-10 text-3xl lg:text-7xl">
          <h1 className="bricolage-grotesque-bold ">
            Designing and developing
          </h1>
          <h1 className="libre-baskerville-italic">web and mobile</h1>
          <h1 className="bricolage-grotesque-bold ">applications</h1>
          {/* <h1 className='libre-baskerville-italic text-5xl capitalize'>IT agency</h1> */}
          <div className="mt-8 flex w-full">
            {/* <button className="bg-green-500 inter-medium  text-white text-sm py-2 px-4 rounded hover:bg-green-700 transition duration-300">
              Start Your Project
            </button> */}
            <Button
              name={"Book A Call"}
              slug={"contact"}
              classes={
                "after:bg-black bg-blue-600 text-white inter-medium hover:bg-blue-700 transition duration-300 rounded-sm after:rounded-sm"
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
              className="h-40 lg:h-96  w-auto absolute right-0 bottom-0"
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
