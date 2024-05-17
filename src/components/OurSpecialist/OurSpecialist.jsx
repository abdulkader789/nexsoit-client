import React from "react";

const OurSpecialist = () => {
  return (
    <div className="mb-20">
      <div className="bg-[url('./bg-specialist.jpg')] max-w-full bg-no-repeat bg-cover bg-center bg-blend-multiply bg-black/70">
        <div className="max-w-5xl mx-auto flex justify-center items-center lg:flex-row flex-col flex-wrap px-2 pt-14 lg:pb-20 pb-14">
          <div className="flex-1 text-white lg:basis-[40%] basis-[50%] text-center lg:text-left lg:mb-0 mb-10">
            <p className="uppercase">
              <small>our specialties</small>
            </p>
            <h2 className="text-4xl font-semibold max-w-md">
              Get the best consult from <span className="text-[#A6D16E]">your expert</span> advisors
            </h2>
            <button className="uppercase font-bold text-sm mt-6 px-5 py-2 border border-solid border-white rounded hover:bg-white hover:text-black">
              Book a consultation
            </button>
          </div>
          <div className="flex-1 lg:basis-[60%] basis-[50%] relative">
            <div className="grid grid-cols-2 text-center lg:mb-0 mb-8 uppercase text-white tracking-wide">
              <p className="flex flex-col max-w-[200px] mx-auto mb-8">
                <span className="text-4xl font-bold">1790</span>
                <small className="mt-2">Account Number</small>
              </p>
              <p className="flex flex-col max-w-[200px] mx-auto mb-8">
                <span className="text-4xl font-bold">491</span>
                <small className="mt-2">Trusted Advisers</small>
              </p>
              <p className="flex flex-col max-w-[200px] mx-auto">
                <span className="text-4xl font-bold">245</span>
                <small className="mt-2">Happy Clients</small>
              </p>
              <p className="flex flex-col max-w-[200px] mx-auto">
                <span className="text-4xl font-bold">1090</span>
                <small className="mt-2">Finished Projects</small>
              </p>
            </div>
            <div className="flex gap-4 items-center p-5 max-w-[500px] bg-[#98BF5A] rounded-md lg:absolute lg:mt-7 lg:left-16">
              <img
                src="./img-specialist.png"
                className="object-cover max-w-[90px]"
                alt="Image"
              />
              <p className="font-semibold">
                <span className="text-white font-bold">
                  We offer finance and consulting
                </span> services for companies
                <span className="text-white font-bold"> & businesses</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurSpecialist;
