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
  FaWrench,
  FaTachometerAlt,
  FaDollarSign,
} from "react-icons/fa";
import ServiceHeader from "./ServiceHeader";
import ServiceCard from "./ServiceCard";
import ServiceCategorySelection from "./ServiceCategorySelection";
import ServicePagination from "./ServicePagination";
import { useCategoryClick } from "../../contexts/CategoryClickContext";

const servicesData = [
  // Development
  {
    icon: <FaLaptopCode />,
    title: "Custom Software Development",
    description:
      "Develop tailored software solutions to meet your unique business requirements, ensuring efficiency and scalability.",
    category: "development",
    list: [
      "Game development",
      "Responsive web design",
      "Mobile app development",
      "Enterprise software development",
      "Cloud-native application development",
    ],
    image:
      "https://st4.depositphotos.com/12981370/24312/i/450/depositphotos_243120806-stock-photo-programmer-working-software-development-coding.jpg",
    slug: "custom-software-development",
  },
  {
    icon: <FaMobileAlt />,
    title: "Mobile App Development",
    description:
      "Create innovative mobile applications for both iOS and Android platforms, focusing on user engagement and functionality.",
    category: "development",
    list: [
      "Game development",
      "Responsive web design",
      "Cross-platform development",
      "Progressive web apps",
      "Native app development",
    ],
    image:
      "https://media.istockphoto.com/id/1174690086/photo/software-developer-freelancer-working-at-home.jpg?s=612x612&w=0&k=20&c=loFqul06ggwtkwqSmzZnYfA72Vk7nFQOvDSzAN6YbtQ=",
    slug: "mobile-app-development",
  },
  {
    icon: <FaCode />,
    title: "Web Development",
    description:
      "Offer comprehensive full-stack development services, from front-end design to back-end integration, for scalable and secure applications.",
    category: "development",
    list: [
      "Game development",
      "Responsive web design",
      "E-commerce development",
      "CMS development",
      "Static website development",
    ],
    image:
      "https://media.istockphoto.com/id/1075599562/photo/programmer-working-with-program-code.jpg?s=612x612&w=0&k=20&c=n3Vw5SMbMCWW1YGG6lnTfrwndNQ8B_R4Vw-BN7LkqpA=",
    slug: "web-development",
  },
  {
    icon: <FaDollarSign />,
    title: "Payment Gateway Integration",
    description:
      "Facilitate secure online transactions with our payment gateway integration services. We provide solutions that enable seamless and secure payment processing for your e-commerce platforms.",
    category: "development",
    list: [
      "Game development",
      "Responsive web design",
      "PCI compliance",
      "Payment APIs",
      "Fraud prevention",
    ],
    image: "https://example.com/custom-software-development-image.jpg",
    slug: "payment-gateway-integration",
  },

  // Design
  {
    icon: <FaPencilRuler />,
    title: "User Experience Design",
    description:
      "Design intuitive and engaging user experiences, focusing on usability, accessibility, and user satisfaction.",
    category: "design",
    list: [
      "Game development",
      "Responsive web design",
      "Prototyping",
      "Wireframing",
      "User research",
    ],
    image: "https://example.com/custom-software-development-image.jpg",
    slug: "user-experience-design",
  },
  {
    icon: <FaVideo />,
    title: "Video Editing",
    description:
      "Provide professional video editing services, enhancing visual storytelling with creative and technical expertise.",
    category: "design",
    list: [
      "Game development",
      "Responsive web design",
      "Motion graphics",
      "Color grading",
      "Sound editing",
    ],
    image: "https://example.com/custom-software-development-image.jpg",
    slug: "video-editing",
  },

  // Customization
  {
    icon: <FaWrench />,
    title: "API Development and Integration",
    description:
      "Enhance your software capabilities with our API development and integration services. We create secure and efficient APIs that enable seamless communication between your applications.",
    category: "customization",
    list: [
      "Game development",
      "Responsive web design",
      "Third-party integration",
      "RESTful APIs",
      "GraphQL APIs",
    ],
    image:
      "https://cdn.create.vista.com/api/media/small/378111324/stock-photo-cloud-computing-technology-online-data-storage-business-network-concept-computer",
    slug: "api-development-and-integration",
  },

  // Editing
  {
    icon: <FaVideo />,
    title: "Video Editing",
    description:
      "Provide professional video editing services, enhancing visual storytelling with creative and technical expertise.",
    category: "editing",
    list: [
      "Game development",
      "Responsive web design",
      "Motion graphics",
      "Color grading",
      "Sound editing",
    ],
    image: "https://example.com/custom-software-development-image.jpg",
    slug: "video-editing",
  },

  // Marketing
  {
    icon: <FaSearch />,
    title: "SEO Services",
    description:
      "Enhance your online visibility and drive organic traffic with expert SEO strategies, including keyword research, on-page optimization, and link building.",
    category: "marketing",
    list: [
      "Game development",
      "Responsive web design",
      "Local SEO",
      "Content marketing",
      "Social media marketing",
    ],
    image: "https://example.com/custom-software-development-image.jpg",
    slug: "seo-services",
  },

  // Support
  {
    icon: <FaTools />,
    title: "IT Support and Maintenance",
    description:
      "Ensure your systems run smoothly with our IT support and maintenance services. Our team provides reliable and timely support to keep your operations uninterrupted.",
    category: "support",
    list: [
      "Game development",
      "Responsive web design",
      "Network security",
      "Server maintenance",
      "Backup and recovery",
    ],
    image: "https://example.com/custom-software-development-image.jpg",
    slug: "it-support-and-maintenance",
  },
  {
    icon: <FaCogs />,
    title: "Quality Assurance and Testing",
    description:
      "Ensure the reliability of your software with our quality assurance and testing services. We conduct thorough testing to identify and resolve issues, delivering high-quality products.",
    category: "support",
    list: [
      "Game development",
      "Responsive web design",
      "Automated testing",
      "Manual testing",
      "Performance testing",
    ],
    image: "https://example.com/custom-software-development-image.jpg",
    slug: "quality-assurance-and-testing",
  },
  {
    icon: <FaTachometerAlt />,
    title: "Performance Optimization",
    description:
      "Boost the performance of your software with our optimization services. We analyze and enhance your applications to ensure they run smoothly and efficiently.",
    category: "support",
    list: [
      "Game development",
      "Responsive web design",
      "Code refactoring",
      "Database optimization",
      "Caching strategies",
    ],
    image: "https://example.com/custom-software-development-image.jpg",
    slug: "performance-optimization",
  },
  {
    icon: <FaTools />,
    title: "Digital Transformation Consulting",
    description:
      "Transform your business with our digital transformation consulting services. We guide you through the process of adopting new technologies and optimizing your operations for the digital age.",
    category: "support",
    list: [
      "Game development",
      "Responsive web design",
      "Technology audits",
      "Change management",
      "Digital strategy development",
    ],
    image: "https://example.com/custom-software-development-image.jpg",
    slug: "digital-transformation-consulting",
  },
];

const ServiceList = () => {
  const { categoryClicked } = useCategoryClick();
  const [selectedCategory, setSelectedCategory] = useState(
    categoryClicked || "all"
  );
  const [currentPage, setCurrentPage] = useState(1);
  const servicesPerPage = 6;

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setCurrentPage(1); // Reset current page to 1 when category changes
  };

  const filteredServices =
    selectedCategory === "all"
      ? servicesData
      : servicesData.filter((service) => service.category === selectedCategory);

  const indexOfLastService = currentPage * servicesPerPage;
  const indexOfFirstService = indexOfLastService - servicesPerPage;
  const currentServices = filteredServices.slice(
    indexOfFirstService,
    indexOfLastService
  );

  const totalPages = Math.ceil(filteredServices.length / servicesPerPage);

  return (
    <div className="w-full 2xl:w-[80%] mx-auto pb-10 px-2 md:px-6">
      <main className="relative">
        <ServiceCategorySelection
          categories={[
            "all",
            "development",
            "design",
            "customization",
            "editing",
            "marketing",
            "support",
          ]}
          selectedCategory={selectedCategory}
          onSelectCategory={handleCategoryChange} // Update onSelectCategory
        />

        <ServicePagination
          totalPages={totalPages}
          currentPage={currentPage}
          onPageChange={setCurrentPage}
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-3 lg:gap-10 ">
          {currentServices.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              list={service.list}
              image={service.image}
              slug={service.slug}
            />
          ))}
        </div>
      </main>
    </div>
  );
};

export default ServiceList;
