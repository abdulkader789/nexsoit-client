import React from "react";

const AboutUs = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-center pt-20 relative p-20">
      {/* Left Side */}
      <div className="lg:w-1/2 w-full ">
        {/* Top Image */}
        <div className="">
          <img
            src="https://images.rawpixel.com/image_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvcm0yMThiYXRjaDQta2F0aWUtMTcuanBn.jpg"
            alt="Top Image"
            className="h-full w-full"
          />
        </div>
      </div>

      {/* Right Side */}
      <div className="w-full lg:w-1/2 px-10">
        <h3 className="text-lg font-bold">Small Heading</h3>
        <h2 className="text-3xl font-bold mb-4">Big Heading</h2>
        <p className="mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <div className="mb-4">
          <h4 className="text-lg font-bold mb-2">First Tick Marked Text</h4>
          <h4 className="text-lg font-bold mb-2">Second Tick Marked Text</h4>
          <div className="w-full bg-gray-300 rounded-full h-4 mb-2">
            <div className="bg-blue-500 rounded-full h-4 w-3/4"></div>
          </div>
        </div>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default AboutUs;
