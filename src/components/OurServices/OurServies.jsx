import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

// Import your background image
import backgroundImage from "../../../public/services-bg.png";
import {
  FaUserTie,
  FaClipboardCheck,
  FaBriefcase,
  FaChalkboardTeacher,
  FaHandshake,
  FaMoneyCheckAlt,
} from "react-icons/fa";

const servicesData = [
  {
    imageURL: <FaUserTie />,
    heading: "Talent Acquisition",
    text: "Source, recruit, and onboard top talent to meet your company's staffing needs.",
  },
  {
    imageURL: <FaClipboardCheck />,
    heading: "HR Compliance",
    text: "Ensure compliance with labor laws, regulations, and industry standards to mitigate legal risks.",
  },
  {
    imageURL: <FaBriefcase />,
    heading: "Employee Benefits",
    text: "Design and administer competitive benefits packages to attract and retain employees.",
  },
  {
    imageURL: <FaChalkboardTeacher />,
    heading: "Training & Development",
    text: "Offer comprehensive training and development programs to enhance employee skills and performance.",
  },
  {
    imageURL: <FaHandshake />,
    heading: "Employee Relations",
    text: "Manage employee relations, conflicts, and grievances to foster a positive work environment.",
  },
  {
    imageURL: <FaMoneyCheckAlt />,
    heading: "Compensation Management",
    text: "Develop fair and equitable compensation structures to reward employees and drive performance.",
  },
];

const OurServices = () => {
  return (
    <div>
      <section className="bg-white p-8 shadow-md  text-center">
        <h2 className="text-blue-600 italic text-2xl mb-4">What We Do</h2>
        <h3 className="font-bold text-black text-2xl mb-4">Our Services</h3>
        <p className="text-gray-800 w-1/2 mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </section>

      <section className="grid grid-cols-1 lg:px-20 md:grid-cols-2 lg:grid-cols-3 gap-x-8 py-16 bg-gray-100">
        {servicesData.map((service, index) => (
          <div key={index} className="mx-auto mb-8">
            <div className="bg-white shadow-sm p-4 border">
              <div className="flex flex-col items-center mb-2">
                <div className="rounded-full flex text-2xl justify-center items-center relative -top-14 bg-white h-20 w-20 border">
                  {service.imageURL}
                </div>
                <div className="text-center relative -top-5 h-full">
                  <h4 className="font-bold text-2xl mb-2">{service.heading}</h4>
                  <p>{service.text}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default OurServices;
