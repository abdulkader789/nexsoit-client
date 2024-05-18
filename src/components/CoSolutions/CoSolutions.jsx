import React from "react";
import "./Animation.css";

const CoSolutions = () => {
  const CardData = [
    {
      image: "./services-1.jpg",
      title: "Business Consulting",
      description:
        "Assisting clients with financial planning, budgeting, investment strategies",
      link: "Read More",
    },
    {
      image: "./services-2.jpg",
      title: "Artificial Intelligence",
      description:
        "Assisting clients with financial planning, budgeting, investment strategies",
      link: "Read More",
    },
    {
      image: "./services-3.jpg",
      title: "Human Resources",
      description:
        "Assisting clients with financial planning, budgeting, investment strategies",
      link: "Read More",
    },
    {
      image: "./services-4.jpg",
      title: "Marketing & Branding",
      description:
        "Assisting clients with financial planning, budgeting, investment strategies",
      link: "Read More",
    },
    {
      image: "./services-5.jpg",
      title: "IT and Technology",
      description:
        "Assisting clients with financial planning, budgeting, investment strategies",
      link: "Read More",
    },
    {
      image: "./services-6.jpg",
      title: "Financial Advisory",
      description:
        "Assisting clients with financial planning, budgeting, investment strategies",
      link: "Read More",
    },
  ];
  return (
    <div>
      <section className="py-10 px-5 text-center">
        <h2 className="font-bold md:text-3xl sm:text-2xl text-xl mb-5">
          Discover Company Solutions <br /> Tailored to Your Needs
        </h2>
        <p className="md:w-2/4 w-4/5 mx-auto">
          Sed ut perspiciatis unde omnis iste sit voluptatem accusantium
          doloremque laudantium rem aperiam eaqups quae ab illo inventore
          veritatis et quasi architecto
        </p>
      </section>
      <section className="grid place-items-center pt-5 pb-14 px-8 mx-auto">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-y-20 gap-x-10">
          {CardData.map((item, index) => (
            <article key={index} className="article relative overflow-hidden">
              <img
                src={item.image}
                alt="Image"
                className="w-80 cursor-pointer rounded-2xl"
              />
              <div className="data cursor-pointer z-20 absolute left-0 right-0 -bottom-36 mx-auto max-w-72 p-6 bg-white shadow-lg rounded-xl opacity-0 transition-opacity duration-300 delay-1000">
                <span className="block text-xl font-bold mb-2">
                  {item.title}
                </span>
                <h3 className="text-base font-semibold mb-3">
                  {item.description}
                </h3>
                <a href="#" className="font-bold hover:underline">
                  {item.link}
                </a>
              </div>
              <div className="title z-10 absolute top-4 left-4 bg-white rounded-lg py-1 px-2">
                <h4 className="font-bold">{item.title}</h4>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
};

export default CoSolutions;
