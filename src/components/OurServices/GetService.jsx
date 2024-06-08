import React from "react";
import { Link } from "react-router-dom";
import "./GetService.css";

const GetService = () => {
  return (
    <section className="bg-black text-white py-20 relative">
      <div className="bubbles">
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
      </div>

      <div className="lg:container mx-auto flex flex-col lg:flex-row items-center my-12 md:my-24">
        <div className="flex flex-col w-full lg:w-1/2 justify-center items-start p-8">
          <h1 className="text-3xl md:text-5xl michroma-bold capitalize text-yellow-300 tracking-loose mb-5">
            take the first step towards success
          </h1>

          <p className="text-sm md:text-bas mb-5 e lg:text-lg noto-sans-thin  text-gray-50 ">
            From strategy to execution, our comprehensive services are designed
            to enhance your business performance. Reach out to learn how we can
            assist you.
          </p>
          <Link
            to="/contact"
            className="bg-transparent poppins-regular hover:bg-yellow-300  text-yellow-300 hover:text-black rounded shadow hover:shadow-lg py-2 px-4 border border-yellow-300 hover:border-transparent"
          >
            Send Us A Message
          </Link>
        </div>
        <div className="lg:w-1/2">
          <div className="h-full w-full scale-up-down ">
            <img
              className="h-full w-full object-cover"
              src="https://marvel-b1-cdn.bc0a.com/f00000000100045/www.elmhurst.edu/wp-content/uploads/2018/12/computer-information-systems-vs-information-technology-illustration.jpg"
              alt="Image2"
              style={{
                clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetService;
