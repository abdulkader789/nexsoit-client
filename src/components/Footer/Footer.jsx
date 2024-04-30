import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="bg-white py-12">
        <div className="max-w-6xl mx-auto flex flex-wrap">
          <div className="footer-col md:w-[30%] sm:w-1/2 w-full px-4 mb-8 md:mb-0">
            <h4 className="text-2xl font-medium mb-5 text-[#1768FE]">
              Kormosala
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

          <div className="footer-col md:w-1/5 sm:w-1/2 w-full px-4 mb-8 md:mb-0">
            <h4 className="text-lg font-medium mb-5 text-gray-600">Employer</h4>
            <ul className="list-none">
              <li className="mb-2">
                <a href="#" className="text-gray-500 no-underline">
                  Browse Candidates
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-gray-500 no-underline">
                  Post a Job
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-gray-500 no-underline">
                  Employer Listing
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-gray-500 no-underline">
                  Resume Page
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-gray-500 no-underline">
                  DashBoard
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-500 no-underline">
                  Job Packages
                </a>
              </li>
            </ul>
          </div>

          <div className="footer-col md:w-1/5 sm:w-1/2 w-full px-4 mb-8 sm:mb-0">
            <h4 className="text-lg font-medium mb-5 text-gray-600">
              Candidate
            </h4>
            <ul className="list-none">
              <li className="mb-2">
                <a href="#" className="text-gray-500 no-underline">
                  Browse Jobs
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-gray-500 no-underline">
                  Submit Resume
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-gray-500 no-underline">
                  DashBoard
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-gray-500 no-underline">
                  Browse Categories
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-gray-500 no-underline">
                  My Bookmarks
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-500 no-underline">
                  Candidate Listing
                </a>
              </li>
            </ul>
          </div>

          <div className="footer-col md:w-[30%] sm:w-1/2 w-full px-4">
            <h4 className="text-lg font-medium mb-5 text-gray-600">
              Sign Up for Everyday Newsletter
            </h4>
            <ul className="list-none">
              <li className="mb-5">
                <p className="text-gray-500">
                  Subscribe to kormosala Pacific newsletter to get the latest
                  jobs posted, candidates, and other latest news stay update
                </p>
              </li>
              <li>
                <input
                  type="text"
                  placeholder="Email Address..."
                  className="pl-5 py-2 pr-2 rounded-sm bg-gray-100 max-w-60 md:max-w-48 lg:max-w-56"
                />
              </li>
            </ul>
          </div>
        </div>

        <div className="socials">
          <p></p>
          <div className="icons"></div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
