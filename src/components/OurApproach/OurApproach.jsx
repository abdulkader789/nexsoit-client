import React from "react";

const OurApproach = () => {
  const cardsData = [
    {
      title: "Card 1",
      imageURL: "imageURL1.jpg",
      description: "Description for card 1",
    },
    {
      title: "Card 2",
      imageURL: "imageURL2.jpg",
      description: "Description for card 2",
    },
    {
      title: "Card 3",
      imageURL: "imageURL3.jpg",
      description: "Description for card 3",
    },
    {
      title: "Card 4",
      imageURL: "imageURL4.jpg",
      description: "Description for card 4",
    },
    {
      title: "Card 5",
      imageURL: "imageURL5.jpg",
      description: "Description for card 5",
    },
    {
      title: "Card 6",
      imageURL: "imageURL6.jpg",
      description: "Description for card 6",
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
      <section>
        <div className="flex flex-wrap justify-center">
          {cardsData.map((card, index) => (
            <div key={index} className="w-full sm:w-1/2 md:w-1/3 p-4">
              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <img
                  src={card.imageURL}
                  alt={card.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl font-bold mb-2">{card.title}</h3>
                  <p className="text-gray-700">{card.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default OurApproach;
