import React from "react";

const AboutAgency = () => {
  return (
    <div className="flex flex-col lg:flex-row  justify-center pt-20 relative">
      {/* Left Side */}
      <div className="lg:w-1/2 w-full">
        <div className="flex justify-center">
          {/* Top Image */}
          <div className="absolute lg:relative -top-16 lg:-top-0 lg:left-32">
            <img
              src="https://yesyemindustries.com/images/whatwedo/ab1.jpg"
              alt="Top Image"
              className="rounded-full h-60 w-60"
            />
          </div>
          {/* Bottom Image */}
          <div>
            <img
              src="https://yesyemindustries.com/images/whatwedo/ab1.jpg"
              alt="Bottom Image"
              className="rounded-full h-96 w-96"
            />
          </div>
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

export default AboutAgency;
