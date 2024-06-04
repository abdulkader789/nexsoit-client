import React from "react";

const AboutBanner = () => {
  return (
    <section
      className="relative h-64 flex items-center justify-center text-white"
      style={{
        backgroundImage: `url('https://img.freepik.com/free-vector/abstract-geometric-wireframe-background_52683-59421.jpg?size=626&ext=jpg&ga=GA1.1.553209589.1715040000&semt=ais')`,
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
