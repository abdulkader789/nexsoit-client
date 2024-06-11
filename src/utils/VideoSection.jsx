import React from "react";

const VideoSection = () => {
  return (
    <div className="flex flex-col items-center w-full px-3 py-5 lg:px-0 lg:py-20  xl:w-[90vw] 2xl:w-[80vw] mx-auto">
      <div className=" w-full">
        <div className="poppins-bold text-5xl mb-5">
          <h2 className="text-center">Revolutionizing Business Solutions</h2>
        </div>
        <div className="montserrat-regular text-xl mb-5 text-center xl:px-40">
          <p>
            At Nexsoit Technologies, we specialize in delivering a wide range of
            innovative software solutions. Our expertise encompasses the
            development of robust web and mobile applications, as well as
            providing comprehensive digital services tailored to transform
            businesses.
          </p>
        </div>
      </div>
      <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px]  ">
        <iframe
          title="video"
          src="https://www.youtube.com/embed/LB8KwiiUGy0"
          allowFullScreen
          className=" w-full h-full rounded-md"
        ></iframe>
      </div>
    </div>
  );
};

export default VideoSection;
