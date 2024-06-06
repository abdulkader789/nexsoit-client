import React, { useState } from "react";
import {
  FaLaptopCode,
  FaMobileAlt,
  FaCode,
  FaPencilRuler,
  FaVideo,
  FaSearch,
  FaTools,
  FaCogs,
  FaCloud,
  FaChartLine,
  FaTachometerAlt,
  FaDollarSign,
  FaAngleDoubleRight,
} from "react-icons/fa";

const servicesData = [
  // Development
  {
    icon: <FaLaptopCode />,
    title: "Custom Software Development",
    description:
      "Develop tailored software solutions to meet your unique business requirements, ensuring efficiency and scalability.",
    category: "Development",
    list: [
      "Game development",
      "Responsive web design",
      "Mobile app development",
      "Enterprise software development",
      "Cloud-native application development",
    ],
  },
  {
    icon: <FaMobileAlt />,
    title: "Mobile App Development",
    description:
      "Create innovative mobile applications for both iOS and Android platforms, focusing on user engagement and functionality.",
    category: "Development",
    list: [
      "Game development",
      "Responsive web design",
      "Cross-platform development",
      "Progressive web apps",
      "Native app development",
    ],
  },
  {
    icon: <FaCode />,
    title: "Web Development",
    description:
      "Offer comprehensive full-stack development services, from front-end design to back-end integration, for scalable and secure applications.",
    category: "Development",
    list: [
      "Game development",
      "Responsive web design",
      "E-commerce development",
      "CMS development",
      "Static website development",
    ],
  },
  {
    icon: <FaCloud />,
    title: "API Development and Integration",
    description:
      "Enhance your software capabilities with our API development and integration services. We create secure and efficient APIs that enable seamless communication between your applications.",
    category: "Development",
    list: [
      "Game development",
      "Responsive web design",
      "Third-party integration",
      "RESTful APIs",
      "GraphQL APIs",
    ],
  },

  // Design
  {
    icon: <FaPencilRuler />,
    title: "User Experience Design",
    description:
      "Design intuitive and engaging user experiences, focusing on usability, accessibility, and user satisfaction.",
    category: "Design",
    list: [
      "Game development",
      "Responsive web design",
      "Prototyping",
      "Wireframing",
      "User research",
    ],
  },
  {
    icon: <FaVideo />,
    title: "Video Editing",
    description:
      "Provide professional video editing services, enhancing visual storytelling with creative and technical expertise.",
    category: "Design",
    list: [
      "Game development",
      "Responsive web design",
      "Motion graphics",
      "Color grading",
      "Sound editing",
    ],
  },

  // Marketing
  {
    icon: <FaSearch />,
    title: "SEO Services",
    description:
      "Enhance your online visibility and drive organic traffic with expert SEO strategies, including keyword research, on-page optimization, and link building.",
    category: "Marketing",
    list: [
      "Game development",
      "Responsive web design",
      "Local SEO",
      "Content marketing",
      "Social media marketing",
    ],
  },
  {
    icon: <FaChartLine />,
    title: "SEO and Digital Marketing",
    description:
      "Increase your online visibility with our SEO and digital marketing services. We offer comprehensive strategies to improve search engine rankings and drive traffic to your website.",
    category: "Marketing",
    list: [
      "Game development",
      "Responsive web design",
      "PPC advertising",
      "Email marketing",
      "Influencer marketing",
    ],
  },

  // Support
  {
    icon: <FaTools />,
    title: "IT Support and Maintenance",
    description:
      "Ensure your systems run smoothly with our IT support and maintenance services. Our team provides reliable and timely support to keep your operations uninterrupted.",
    category: "Support",
    list: [
      "Game development",
      "Responsive web design",
      "Network security",
      "Server maintenance",
      "Backup and recovery",
    ],
  },
  {
    icon: <FaCogs />,
    title: "Quality Assurance and Testing",
    description:
      "Ensure the reliability of your software with our quality assurance and testing services. We conduct thorough testing to identify and resolve issues, delivering high-quality products.",
    category: "Support",
    list: [
      "Game development",
      "Responsive web design",
      "Automated testing",
      "Manual testing",
      "Performance testing",
    ],
  },
  {
    icon: <FaTachometerAlt />,
    title: "Performance Optimization",
    description:
      "Boost the performance of your software with our optimization services. We analyze and enhance your applications to ensure they run smoothly and efficiently.",
    category: "Support",
    list: [
      "Game development",
      "Responsive web design",
      "Code refactoring",
      "Database optimization",
      "Caching strategies",
    ],
  },
  {
    icon: <FaDollarSign />,
    title: "Payment Gateway Integration",
    description:
      "Facilitate secure online transactions with our payment gateway integration services. We provide solutions that enable seamless and secure payment processing for your e-commerce platforms.",
    category: "Support",
    list: [
      "Game development",
      "Responsive web design",
      "PCI compliance",
      "Payment APIs",
      "Fraud prevention",
    ],
  },
  {
    icon: <FaTools />,
    title: "Digital Transformation Consulting",
    description:
      "Transform your business with our digital transformation consulting services. We guide you through the process of adopting new technologies and optimizing your operations for the digital age.",
    category: "Support",
    list: [
      "Game development",
      "Responsive web design",
      "Technology audits",
      "Change management",
      "Digital strategy development",
    ],
  },
  {
    icon: <FaLaptopCode />,
    title: "Innovative Software Solutions",
    description:
      "Discover cutting-edge software solutions tailored to meet the unique needs of your business. Our team of experts delivers innovative and efficient systems that drive productivity and growth.",
    category: "Support",
    list: [
      "Game development",
      "Responsive web design",
      "Blockchain development",
      "AI and machine learning",
      "IoT solutions",
    ],
  },
];

const ServiceCard = ({ icon, title, description, list }) => {
  return (
    <div className="rounded overflow-hidden shadow-lg bg-gray-800">
      <div className="px-6 py-4">
        <div className="flex flex-col mb-4  relative">
          <div className="mr-4 text-6xl mb-5 text-green-300">{icon}</div>
          <div className="text-xl  montserrat-semibold text-white">{title}</div>
          <button className="absolute right-0 h-10 w-10 text-white hover:text-orange-300 rounded-full border  top-2 transition duration-200 ease-in-out transform hover:scale-105">
            <span className="hover:translate-x-1  h-full flex justify-center items-center w-full transition duration-300 ease-in-out ">
              <FaAngleDoubleRight />
            </span>
          </button>
        </div>
        <p className="text-white text-base roboto-regular">{description}</p>
        <ul className="mt-4">
          {list &&
            list.map((item, i) => (
              <li
                key={i}
                className="flex items-center text-gray-100 text-sm work-sans"
              >
                <svg
                  className="w-3 h-3 fill-current mr-2 text-orange-400"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M0 0h24v24H0z" fill="none" />
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                </svg>
                {item}
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

const ServiceList = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Filter services based on selected category
  const filteredServices =
    selectedCategory === "All"
      ? servicesData
      : servicesData.filter((service) => service.category === selectedCategory);

  // Define categories
  const categories = ["All", "Development", "Design", "Marketing", "Support"];

  return (
    <div className="w-full 2xl:w-[80%] mx-auto pb-10 px-2 md:px-6">
      <div className="flex flex-wrap justify-between items-center text-white py-10">
        <div className="mb-2">
          <h2 className="text-3xl  md:text-4xl lg:text-5xl montserrat-bold  capitalize">
            We are a digitally-led, full-service <br /> creative agency{" "}
          </h2>
        </div>
        <div>
          <h2 className=" michroma-bold text-3xl uppercase  md:text-4xl lg:text-5xl mb-1 text-blue-400">
            Nexsoit
          </h2>
          <p className="poppins-regular">
            Bringing IT Solutions to Empower You
          </p>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row   justify-center mb-8">
        {categories.map((category, index) => (
          <button
            key={index}
            className={`px-4 py-4 flex-1 michroma-regular text-sm ${
              selectedCategory === category
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-800"
            }`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-10">
        {/* Render each filtered service using ServiceCard component */}
        {filteredServices.map((service, index) => (
          <ServiceCard
            key={index}
            icon={service.icon}
            title={service.title}
            description={service.description}
            list={service.list}
          />
        ))}
      </div>
    </div>
  );
};

export default ServiceList;
