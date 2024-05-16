import React from "react";

const AboutBanner = () => {
  return (
    <section
      className="relative h-64 flex items-center justify-center text-white"
      style={{
        backgroundImage: `url('https://consumptionsolution.com/wp-content/uploads/2023/03/About-us-Corporate-Profile.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* <div className="absolute inset-0 bg-black opacity-50"></div> */}
      <div className="z-10 text-center">
        <p className="text-3xl font-bold pt-20">
          <a
            href="/"
            className="text-white hover:text-white transition duration-300"
          >
            Home
          </a>{" "}
          / About
        </p>
      </div>
    </section>
  );
};

export default AboutBanner;
