import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaGooglePlusG,
  FaPinterestP,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const SocialIcons = [
  { Icon: FaFacebookF, text: "Facebook" },
  { Icon: FaTwitter, text: "Twitter" },
  { Icon: FaLinkedinIn, text: "LinkedinIn" },
  { Icon: FaGooglePlusG, text: "GooglePlus" },
  { Icon: FaPinterestP, text: "Pinterest" },
];

const servicesData = [
  {
    title: "All",
    slug: "all",
  },
  {
    title: "Development",
    slug: "development",
  },
  {
    title: "Design",
    slug: "design",
  },
  {
    title: "Marketing",
    slug: "marketing",
  },
  {
    title: "Support",
    slug: "support",
  },
];

const Footer = () => {
  return (
    <footer className="bg-white  poppins-regular pb-10">
      <div className="grid grid-cols-1 lg:grid-cols-4 p-20 ">
        <div className="px-4  place-self-center">
          <h4 className="text-2xl font-medium text-[#1768FE] michroma-bold mb-3">
            NEXSOIT
          </h4>
          <ul className="list-none ">
            <li className="mb-3">
              <p className="text-gray-500 ">
                Your partner for innovative tech solutions. From development to
                design, marketing, and support, we drive digital transformation
                for businesses worldwide. Join us and thrive in the digital age
              </p>
            </li>
            <li className="">
              <p className="text-gray-500">
                <strong>Email:</strong> nexsoitinfo@gmail.com
              </p>
            </li>
            <li className="">
              <p className="text-gray-500">
                <strong>Phone:</strong> +880 1788838782
              </p>
            </li>
            <li className="">
              <p className="text-gray-500">
                <strong>Location:</strong> Natun Bazar, Gulshan-2
              </p>
            </li>
          </ul>
        </div>

        <div className="capitalize poppins-regular place-self-center">
          <h4 className="text-lg font-medium  text-gray-600 mb-5">
            Quick Links
          </h4>
          <ul className="list-none">
            <li className="">
              <a href="#" className="text-gray-500 no-underline">
                home
              </a>
            </li>
            <li className="">
              <a href="#" className="text-gray-500 no-underline">
                about
              </a>
            </li>
            <li className="">
              <a href="#" className="text-gray-500 no-underline">
                services
              </a>
            </li>
            <li className="">
              <a href="#" className="text-gray-500 no-underline">
                team
              </a>
            </li>
            <li className="">
              <a href="#" className="text-gray-500 no-underline">
                contact
              </a>
            </li>
          </ul>
        </div>

        <div className=" px-4  place-self-center">
          <h4 className="text-lg font-medium text-gray-600 mb-5">Services</h4>
          <ul className="list-none">
            {servicesData.map((service, index) => (
              <li key={index} className="">
                <Link to={`/services`} className="text-gray-500 no-underline">
                  {service.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="px-4">
          <h4 className="text-lg font-medium  text-gray-600 mb-5">
            Sign Up for Everyday Newsletter
          </h4>
          <ul className="list-none">
            <li className="">
              <p className="text-gray-500 mb-5">
                Subscribe to newsletter to get the latest jobs posted,
                candidates, and other latest news stay update
              </p>
            </li>
            <li className="flex items-center">
              <input
                type="text"
                placeholder="Email Address..."
                className="pl-5 py-2 pr-2 rounded-sm bg-gray-100 max-w-60 md:max-w-48 lg:max-w-56"
              />
              <a href="" className="ml-[-35px]">
                <img src="./send-btn.png" className="w-6" alt="Send Button" />
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className=" py-4 bg-gray-100 place-self-center">
        <div className="max-w-6xl mx-auto px-4 flex gap-3 flex-col sm:flex-row justify-center sm:justify-between items-center sm:items-end">
          <p className="order-2 sm:order-1 text-center sm:text-left text-gray-500">
            &copy; Copyright 2019{" "}
            <strong className="michroma-regular">Nexsoit</strong> - Powered By{" "}
            <span className="michroma-regular">Nexsoit</span>
          </p>
          <div className="flex gap-3 order-1 sm:order-2">
            {SocialIcons.map((socialIcon, index) => (
              <div key={index} className="bg-blue-600 rounded-full">
                <socialIcon.Icon className="cursor-pointer px-1 py-2 text-white text-3xl" />
              </div>
            ))}
            <a href="" className="w-[30px]">
              <img
                src="./top-btn.png"
                className="w-full object-cover"
                alt="Button"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
