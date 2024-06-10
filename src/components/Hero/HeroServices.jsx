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
    icon: <FaLaptopCode />,
    heading: "Development",
    description:
      "Deliver robust software development services to build scalable and efficient solutions tailored to your business needs.",
    bgClass: colors[0],
    slug: "development",
    image:
      "https://media.licdn.com/dms/image/D4E12AQEnNKiiNUKz9Q/article-cover_image-shrink_720_1280/0/1693476739453?e=2147483647&v=beta&t=vA7q5Jo23C2UXQE4FQ3lTlpB7ugmZa5QZzAfSQ5rQ-A",
  },
  {
    icon: <FaPencilRuler />,
    heading: "Design",
    description:
      "Craft engaging and visually appealing designs that enhance user experience and reflect your brand's identity.",
    bgClass: colors[1],
    slug: "design",
    image:
      "https://cdn.logojoy.com/wp-content/uploads/20200612115158/AdobeStock_88222430-1-min-scaled.jpeg",
  },

  {
    icon: <FaBullhorn />,
    heading: "Marketing",
    description:
      "Implement strategic marketing solutions to enhance your online presence, drive traffic, and boost conversions.",
    bgClass: colors[4],
    slug: "marketing",
    image:
      "https://images.shiksha.com/mediadata/ugcDocuments/images/wordpressImages/2021_03_digital-marketer.jpg",
  },
  {
    icon: <FaTools />,
    heading: "Support & Maintanance",
    description:
      "Provide comprehensive IT support, including maintenance, integration, and troubleshooting to ensure your systems run smoothly and efficiently.",
    bgClass: colors[5],
    slug: "support & maintanance",
    image:
      "https://st4.depositphotos.com/1026266/21522/i/450/depositphotos_215224420-stock-photo-business-woman-using-tablet-with.jpg",
  },
];

const ServiceCard = ({ icon, heading, description, bgClass, slug, image }) => {
  const { handleCategoryClick } = useCategoryClick();
  return (
    <div className="relative overflow-hidden h-[50vh] md:h-[70vh]">
      <div
        className={`flex flex-col justify-center items-center h-full w-full text-white relative overflow-hidden transform transition-transform duration-300 hover:scale-105 ${bgClass}`}
      >
        <div
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{ backgroundImage: `url(${image})` }}
        />
        <div className="flex flex-col justify-center text-center px-5 sm:px-10 bg-black h-full bg-opacity-50 relative ">
          {/* First Div - Icon */}
          {/* <div className="text-5xl mb-3 flex justify-center text-blue-500">
            {icon}
          </div> */}
          {/* Second Div - Header and Paragraph */}
          <h2 className="mb-2 text-sm lg:text-xl poppins-semibold">
            {heading}
          </h2>
          <p className="text-sm work-sans">{description}</p>
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
    <main className="relative w-full bg-slate-900">
      <div className="h-full w-full relative shadow-md  rounded-md ">
        {/* <h1 className="marcellus-regular uppercase text-2xl md:text-4xl mb-5 text-center">
          Empowering Digital Solutions
        </h1> */}
        <section className="grid grid-cols-1 sm:grid-cols-2 h-full  w-full xl:grid-cols-4">
          {servicesData.map((item, index) => (
            <ServiceCard
              key={index}
              icon={item.icon}
              heading={item.heading}
              description={item.description}
              bgClass={item.bgClass}
              slug={item.slug}
              image={item.image}
            />
          ))}
        </section>
      </div>
    </main>
  );
};

export default HeroServices;
