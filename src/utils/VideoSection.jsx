import React from "react";

const VideoSection = () => {
  return (
    <div className="flex flex-col p-3 items-center w-full lg:p-10 lg:px-20 mx-auto">
      <div className="w-full">
        <div className="poppins-bold text-lg sm:text-4xl md:text-5xl mb-5">
          <h2 className="text-center">Revolutionizing Business Solutions</h2>
        </div>
        <div className="montserrat-regular text-base sm:text-lg md:text-xl mb-5 text-center ">
          <p>
            At Nexsoit Technologies, we specialize in delivering a wide range of
            innovative software solutions. Our expertise encompasses the
            development of robust web and mobile applications, as well as
            providing comprehensive digital services tailored to transform
            businesses.
          </p>
        </div>
      </div>
      <div className="relative w-full h-[350px] lg:h-[500px]">
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
