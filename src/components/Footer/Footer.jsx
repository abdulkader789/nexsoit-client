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
    <div>
      <footer className="bg-white py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 px-10 xl:px-40">
          <div className="px-4 mb-8 md:mb-0">
            <h4 className="text-2xl font-medium mb-5 text-[#1768FE]">
              NEXSOIT
            </h4>
            <ul className="list-none">
              <li className="mb-6">
                <p className="text-gray-500">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Minima nemo architecto eaque similique veniam consequatur
                  reiciendis sit, quaerat aut natus.
                </p>
              </li>
              <li className="mb-2">
                <p className="text-gray-500">
                  <strong>Email:</strong> example@headoffice.com
                </p>
              </li>
              <li>
                <p className="text-gray-500">
                  <strong>Phone:</strong> +41 123 456 789
                </p>
              </li>
            </ul>
          </div>

          <div className="capitalize poppins-regular px-4 mb-8 md:mb-0">
            <h4 className="text-lg font-medium mb-5 text-gray-600">
              Quick Links
            </h4>
            <ul className="list-none">
              <li className="mb-2">
                <a href="#" className="text-gray-500 no-underline">
                  home
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-gray-500 no-underline">
                  about
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-gray-500 no-underline">
                  services
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-gray-500 no-underline">
                  team
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-gray-500 no-underline">
                  contact
                </a>
              </li>
            </ul>
          </div>

          <div className=" px-4 mb-8 sm:mb-0">
            <h4 className="text-lg font-medium mb-5 text-gray-600">Services</h4>
            <ul className="list-none">
              {servicesData.map((service, index) => (
                <li key={index} className="mb-2">
                  <Link to={`/services`} className="text-gray-500 no-underline">
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="px-4">
            <h4 className="text-lg font-medium mb-5 text-gray-600">
              Sign Up for Everyday Newsletter
            </h4>
            <ul className="list-none">
              <li className="mb-5">
                <p className="text-gray-500">
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

        <div className="mt-16 py-4 bg-gray-100">
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
    </div>
  );
};

export default Footer;
