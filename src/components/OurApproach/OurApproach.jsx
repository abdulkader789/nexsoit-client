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
      imageURL:
        "https://content.jdmagicbox.com/comp/bangalore/s5/080pxx80.xx80.121003092947.a1s5/catalogue/justitia-kothanur-bangalore-lawyers-for-accident-claims-mmw79n21nh.jpg",
    },
  ];

  return (
    <div>
      <section className="py-6">
        <div className="text-center mb-8">
          <h4 className="text-lg text-gray-500">Our Approach</h4>
          <h2 className="text-3xl font-bold">Why Choose Us</h2>
        </div>
        <div className="w-2/3 mx-auto">
          <p className="text-center text-gray-600">
            At OurCompany, we take pride in our customer-centric approach. Our
            team of experts is dedicated to understanding your unique needs and
            providing tailored solutions to help you achieve your goals. With a
            focus on innovation and quality, we strive to exceed expectations
            and deliver exceptional results. Choose us for a partnership built
            on trust, reliability, and excellence.
          </p>
        </div>
      </section>
      <section className="w-full p-20 bg-orange-100">
        {cardData.map((card, index) => (
          <div
            key={index}
            className={`w-full flex h-[500px] ${
              index % 2 === 1 ? "flex-row-reverse" : "flex-row"
            }`}
          >
            <div className="h-full w-[45%] shadow-sm  bg-white flex flex-col justify-center items-center px-20">
              <h3 className="text-4xl font-semibold mb-2">{card.title}</h3>
              <p className="text-gray-600">{card.description}</p>
            </div>
            <div className="h-full w-[55%] border">
              <img
                className="h-full w-full object-cover"
                src={card.imageURL}
                alt={card.title}
              />
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default OurApproach;
