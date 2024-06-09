import React from "react";

const VideoSection = () => {
  return (
    <div className="flex flex-col items-center w-full p-10 lg:w-2/3 mx-auto">
      <div className=" ">
        <div className="poppins-bold text-5xl mb-5">
          <h2>Revolutionizing Business Solutions With AI & Machine Learning</h2>
        </div>
        <div className="montserrat-regular text-xl mb-5">
          <p>
            At Nexsoit Technologies, we are integrating cutting-edge Computer
            Vision, AI, and Machine Learning technologies to transform
            businesses.
          </p>
        </div>
      </div>
      <div className="relative w-full h-[600px]">
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
