import React from "react";

const AboutUs = () => {
  return (
    <div className="relative flex flex-col-reverse py-16 lg:pt-0 lg:flex-col lg:pb-0 ">
      <div className="inset-y-0 top-0 right-0 z-0 w-full max-w-xl px-4 mx-auto md:px-0 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-7/12 lg:max-w-full lg:absolute xl:px-0">
        <svg
          className="absolute left-0 hidden h-full text-white transform -translate-x-1/2 lg:block"
          viewBox="0 0 100 100"
          fill="currentColor"
          preserveAspectRatio="none slice"
        >
          <path d="M50 0H100L50 100H0L50 0Z" />
        </svg>
        <img
          className="object-cover w-full h-56 rounded shadow-lg lg:rounded-none lg:shadow-none md:h-96 lg:h-full"
          src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
          alt=""
        />
      </div>
      <div className="relative flex flex-col items-start w-full max-w-xl px-4 mx-auto md:px-0 lg:px-8 lg:max-w-screen-xl ">
        <div className="mb-16 lg:my-40 lg:max-w-lg lg:pr-5 ">
          <h2 className="mb-5 font-sans text-3xl font-bold tracking-tight michroma-bold text-gray-900 sm:text-4xl sm:leading-none">
            About Us
          </h2>
          <p className="pr-5 mb-5 text-base poppins-regular text-gray-700 md:text-lg">
            At Our Company, we are passionate about creating high-quality
            software solutions tailored to meet the unique needs of our clients.
            As a dedicated software agency, we specialize in web development,
            mobile app development, and custom software solutions. Our team of
            experienced professionals brings extensive industry knowledge and
            technical expertise to every project, ensuring exceptional results.
          </p>
          <div className="flex items-center">
            <button href="/" className="button-quote michroma-bold">
              Get A Quote
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
