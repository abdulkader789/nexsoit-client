import React from "react";

const OurApproach = () => {
  const cardData = [
    {
      title: "Market Research",
      description:
        "Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      imageURL:
        "https://media.sproutsocial.com/uploads/2023/04/How-to-do-market-research_Final.jpg",
    },
    {
      title: "Data Analysis",
      description:
        "Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.",
      imageURL:
        "https://lpsonline.sas.upenn.edu/sites/default/files/2022-10/plpso-feratures-data-business.jpg",
    },
    {
      title: "Inventory Management",
      description:
        "Eorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      imageURL:
        "https://www.countmetech.com/media/featured_image/2022/11/12/Inventory_pic3.png",
    },
    {
      title: "Legal Support",
      description:
        "Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.",
      imageURL: "https://qcdc.org.qa/wp-content/uploads/2022/10/law_7974.jpg",
    },
  ];

  return (
    <div>
      <section className="py-6">
        <div className="text-center poppins-regular  mb-8">
          <h4 className="text-lg text-gray-500">Our Approach</h4>
          <h2 className="text-3xl font-bold">Why Choose Us</h2>
        </div>
        <div className="w-2/3 mx-auto">
          <p className="text-center text-gray-600 poppins-regular">
            At OurCompany, we take pride in our customer-centric approach. Our
            team of experts is dedicated to understanding your unique needs and
            providing tailored solutions to help you achieve your goals. With a
            focus on innovation and quality, we strive to exceed expectations
            and deliver exceptional results. Choose us for a partnership built
            on trust, reliability, and excellence.
          </p>
        </div>
      </section>
      <section className="w-full lg:px-40 px-2 lg:py-10 bg-orange-100">
        {cardData.map((card, index) => (
          <div
            key={index}
            className={`w-full relative flex flex-col md:flex-row  mb-3 md:mb-0 md:h-[450px] ${
              index % 2 === 1 ? "md:flex-row-reverse" : "md:flex-row"
            }`}
          >
            <div className="md:h-full md:w-[55%] h-60 border">
              <img
                className="h-full w-full object-cover"
                src={card.imageURL}
                alt={card.title}
              />
            </div>

            <div className="h-full relative md:w-[45%] shadow-sm  bg-white flex flex-col justify-center items-center p-5 lg:px-20">
              <h3 className="text-4xl font-semibold mb-2 montserrat-semibold">
                {card.title}
              </h3>
              <p className="text-gray-600 work-sans">{card.description}</p>
              <div
                className={`absolute hidden md:flex top-[45%] h-20 w-20 text-2xl justify-center items-center text-white  rounded-full bg-black
              ${index % 2 === 1 ? "-right-10" : "-left-10"}`}
              >
                {index + 1}
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default OurApproach;
