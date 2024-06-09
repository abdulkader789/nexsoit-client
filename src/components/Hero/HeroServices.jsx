import {
  FaLaptopCode,
  FaPencilRuler,
  FaWrench,
  FaVideo,
  FaBullhorn,
  FaTools,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { useCategoryClick } from "../../contexts/CategoryClickContext";

const colors = [
  "bg-skyBlue",
  "bg-darkBlue",
  "bg-blackShade",
  "bg-lightBlue",
  "bg-navyBlue",
  "bg-charcoalBlack",
];

const servicesData = [
  {
    imageURL: <FaLaptopCode />,
    heading: "Development",
    description:
      "Deliver robust software development services to build scalable and efficient solutions tailored to your business needs.",
    bgClass: colors[0],
    slug: "development",
  },
  {
    imageURL: <FaPencilRuler />,
    heading: "Design",
    description:
      "Craft engaging and visually appealing designs that enhance user experience and reflect your brand's identity.",
    bgClass: colors[1],
    slug: "design",
  },
  {
    imageURL: <FaWrench />,
    heading: "Customization",
    description:
      "Provide customized solutions to modify existing systems or develop unique features that align with your specific requirements.",
    bgClass: colors[2],
    slug: "customization",
  },
  {
    imageURL: <FaVideo />,
    heading: "Editing",
    description:
      "Offer professional editing services for video content, ensuring high-quality and compelling visual narratives.",
    bgClass: colors[3],
    slug: "editing",
  },
  {
    imageURL: <FaBullhorn />,
    heading: "Marketing",
    description:
      "Implement strategic marketing solutions to enhance your online presence, drive traffic, and boost conversions.",
    bgClass: colors[4],
    slug: "marketing",
  },
  {
    imageURL: <FaTools />,
    heading: "Support",
    description:
      "Provide comprehensive IT support, including maintenance, integration, and troubleshooting to ensure your systems run smoothly and efficiently.",
    bgClass: colors[5],
    slug: "support",
  },
];

const ServiceCard = ({ imageURL, heading, description, bgClass, slug }) => {
  const { handleCategoryClick } = useCategoryClick();
  return (
    <div
      className={`flex p-4 h-72 xl:mx-auto justify-center items-center border w-full bg-white text-black`}
    >
      <div className="flex flex-col lg:p-10">
        {/* First Div - Icon */}
        <div className={`text-5xl mb-3 flex justify-center text-blue-500`}>
          {imageURL}
        </div>
        {/* Second Div - Header and Paragraph */}
        <div className="flex flex-col justify-center">
          <h2 className="mb-2 text-sm lg:text-xl text-center poppins-semibold">
            {heading}
          </h2>
          <p className="text-sm work-sans text-center">{description}</p>
          <div className="flex justify-center py-6">
            <Link to={`/services`} onClick={() => handleCategoryClick(slug)}>
              <button className="btn-learn-more z-10 py-2 text-sm px-5 poppins-regular">
                Learn More
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

const HeroServices = () => {
  return (
    <main className="relative z-30 lg:px-20 w-full">
      <div className="h-full w-full relative lg:-top-40 shadow-md bg-gray-100 px-2 lg:px-20 py-10 rounded-md">
        <h1 className="marcellus-regular uppercase text-2xl md:text-4xl mb-5 text-center">
          Empowering Digital Solutions
        </h1>
        <section className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full xl:grid-cols-3 xl:gap-5 py-5">
          {servicesData.map((item, index) => (
            <ServiceCard
              key={index}
              imageURL={item.imageURL}
              heading={item.heading}
              description={item.description}
              bgClass={item.bgClass}
              slug={item.slug}
            />
          ))}
        </section>
      </div>
    </main>
  );
};

export default HeroServices;
