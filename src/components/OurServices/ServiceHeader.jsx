const ServiceHeader = () => {
  return (
    <div className="flex flex-wrap w-full 2xl:w-[80%] mx-auto pb-10 px-2 md:px-6 justify-between items-center text-white py-10">
      <div className="mb-2">
        <h2 className="text-3xl  md:text-4xl lg:text-5xl montserrat-bold  capitalize">
          We are a digitally-led, full-service <br /> creative agency{" "}
        </h2>
      </div>
      <div>
        <h2 className=" michroma-bold text-3xl uppercase  md:text-4xl lg:text-5xl mb-1 text-blue-400">
          Nexsoit
        </h2>
        <p className="poppins-regular">Bringing IT Solutions to Empower You</p>
      </div>
    </div>
  );
};

export default ServiceHeader;
