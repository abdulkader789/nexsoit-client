import React, { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const ApproachCard = ({ title, description, imageURL, index }) => {
  const imageVariants = {
    visible: { opacity: 1, transition: { duration: 3 } },
    hidden: { opacity: 0 },
  };

  const textVariants = {
    visible: { opacity: 1, transition: { duration: 2 } },
    hidden: { opacity: 0 },
  };

  const imageControls = useAnimation();
  const textControls = useAnimation();
  const [imageRef, imageInView] = useInView();
  const [textRef, textInView] = useInView();

  useEffect(() => {
    if (imageInView) {
      imageControls.start("visible");
    } else {
      imageControls.start("hidden");
    }
  }, [imageControls, imageInView]);

  useEffect(() => {
    if (textInView) {
      textControls.start("visible");
    } else {
      textControls.start("hidden");
    }
  }, [textControls, textInView]);

  return (
    <div
      className={`w-full relative flex flex-col md:flex-row mb-5 md:mb-10 md:h-[450px] custom-boxShadow
        ${index % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"}`}
    >
      <motion.div
        className="md:h-full md:w-[55%] h-60  "
        ref={imageRef}
        animate={imageControls}
        initial="hidden"
        variants={imageVariants}
      >
        <img
          className="h-full w-full object-cover"
          src={imageURL}
          alt={title}
        />
      </motion.div>

      <motion.div
        className="h-full relative md:w-[45%] shadow-sm flex flex-col justify-center items-center p-5 lg:px-20 border-blue-500 border"
        ref={textRef}
        animate={textControls}
        initial="hidden"
        variants={textVariants}
      >
        <div>
          <h3 className="text-xl lg:text-2xl xl:text-3xl font-semibold mb-2 syne-bold text-orange-400">
            {title}
          </h3>
          <p className="work-sans text-sm lg:text-lg montserrat-regular">
            {description}
          </p>
        </div>

        <div
          className={`absolute bg-gray-200 hidden montserrat-semibold md:flex top-[45%] h-20 w-20 text-2xl justify-center items-center shadow__btn text-slate-700 rounded-full ${
            index % 2 === 0 ? "-right-10" : "-left-10"
          }`}
        >
          {index + 1}
        </div>
      </motion.div>
    </div>
  );
};

const OurApproach = () => {
  const cardData = [
    {
      title: "Expert Team",
      description:
        "Our team comprises experienced professionals in web development, mobile app development, and custom software solutions. We bring extensive industry knowledge and technical expertise to every project.",
      imageURL:
        "https://onix-systems.com/_next/image?url=https%3A%2F%2Fadmin.onix-systems.com%2Fuploads%2Fp_G_Yi_NH_Hh_KM_2v_Yjaxsk_Sg_T05kajm_IF_Ts_N_68f41f8139.jpg&w=3840&q=100",
    },
    {
      title: "Customized solutions",
      description:
        "We understand that every business is unique. Our custom software solutions are designed to meet your specific needs, ensuring that you get the best results for your business goals.",
      imageURL:
        "https://www.enfintechnologies.com/wp-content/uploads/mob-app-scaled.jpg",
    },
    {
      title: "Ongoing Support",
      description:
        "We provide continuous support and maintenance services to ensure your software remains up-to-date and bug-free. Our dedicated team is always ready to assist you with any issues.",
      imageURL:
        "https://images.ctfassets.net/l6o0o2yu98mw/7hkvVbrEjgXG8HEySgHJFI/b97a10db2e1b43f98b1a3376c4e1f977/WMK_Oct_Blog_-2_2023_Website_Dev_Handoff.jpg?w=1500&h=844&fl=progressive&q=90&fm=jpg",
    },
    {
      title: "Client-Centric Approach",
      description:
        "We prioritize our clients' needs and satisfaction. Our innovative approach and commitment to delivering high-quality software solutions ensure that your business objectives are met effectively.",
      imageURL:
        "https://miro.medium.com/v2/resize:fit:1400/1*budTgAVH0jERpQRNp4LGpA.png",
    },
  ];

  return (
    <div className="bg-[background: radial-gradient(circle at 10% 20%, rgb(254, 255, 165) 0%, rgb(255, 232, 182) 90%);] max-w-full py-2">
      <section className="py-6">
        <div className="text-center poppins-regular mb-8">
          <h4 className="text-sm lg:text-lg text-yellow-600">Our Approach</h4>
          <h2 className="text-2xl lg:text-3xl font-bold syne-bold">
            Reasons to Choose Us
          </h2>
        </div>
        <div className="w-full lg:w-2/3 mx-auto">
          <p className="text-center montserrat-regular text-sm lg:text-lg px-3 lg:px-0">
            At Our Company, we take pride in our customer-centric approach. Our
            team of experts is dedicated to understanding your unique needs and
            providing tailored solutions to help you achieve your goals. With a
            focus on innovation and quality, we strive to exceed expectations
            and deliver exceptional results. Choose us for a partnership built
            on trust, reliability, and excellence.
          </p>
        </div>
      </section>
      <section className="w-full lg:px-40 px-3 lg:py-10">
        {cardData.map((card, index) => (
          <ApproachCard
            key={index}
            title={card.title}
            description={card.description}
            imageURL={card.imageURL}
            index={index}
          />
        ))}
      </section>
    </div>
  );
};

export default OurApproach;
