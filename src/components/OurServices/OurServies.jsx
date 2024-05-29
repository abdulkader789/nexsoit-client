import React from "react";
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
      <section className="bg-white p-8 shadow-md text-center">
        <h2 className="text-blue-600 italic text-2xl mb-4">What We Do</h2>
        <h3 className="font-bold text-black text-2xl mb-4">Our Services</h3>
        <p className="text-gray-800 w-1/2 mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </section>

      <section className="flex w-full justify-center items-center px-32  h-full  flex-wrap py-16 bg-gray-100">
        {servicesData.map((service, index) => (
          <div key={index} className="w-96 mb-20 mx-5">
            <div className="bg-white h-[400px] shadow-sm p-4 border transition duration-300 hover:border border-transparent hover:border-blue-500">
              <div className="flex flex-col items-center mb-2">
                <div className="rounded-full flex text-2xl justify-center items-center relative -top-14 bg-white h-20 w-20 border">
                  {service.imageURL}
                </div>
                <div className="text-center relative -top-5 h-full py-16">
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
