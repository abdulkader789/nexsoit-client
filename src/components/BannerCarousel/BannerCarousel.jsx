// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { EffectFade, Navigation, Pagination, Autoplay } from "swiper/modules";

const BannerCarousel = () => {
  const bannerSlides = [
    {
      heading: "Join Our Team Today",
      paragraph:
        "Looking for a challenging and rewarding career opportunity? Join Our Company and become part of a dynamic team that values creativity, collaboration, and continuous growth. Explore our current job openings and take the next step in your career journey with us.",
      imageURL: "https://www.myhrtoolkit.com/hubfs/strategicvstacticalhr.jpg",
      redirect: "/join-our-team",
    },
    {
      heading: "Discover Our Latest Products",
      paragraph:
        "Explore Our Company's latest products and services designed to meet the evolving needs of our customers. From advanced technology solutions to innovative design concepts, we are dedicated to delivering quality products that enhance lives and drive success.",
      imageURL:
        "https://ica.coop/sites/default/files/styles/full_image/public/news-item-fullimage/ballpen-blur-close-461077-2013101013.jpg?itok=F-Fwb7Lb",
      redirect: "/discover-our-products",
    },
    {
      heading: "Explore Our Services",
      paragraph:
        "At Our Company, we offer a comprehensive range of services tailored to meet the diverse needs of our clients. From consulting and strategy development to implementation and support, our team is committed to delivering exceptional results at every stage of the project lifecycle.",
      imageURL:
        "https://www.hsestudyguide.com/wp-content/uploads/2023/08/pexels-photo-7014337.jpeg",
      redirect: "/explore-our-services",
    },
    {
      heading: "Our Mission and Values",
      paragraph:
        "At Our Company, our mission is to empower individuals and organizations to achieve their full potential through innovative solutions and exceptional service. We are guided by a set of core values that define who we are and how we do business.",
      imageURL: "https://www.myhrtoolkit.com/hubfs/strategicvstacticalhr.jpg",
      redirect: "/our-mission-and-values",
    },
    {
      heading: "Upcoming Events",
      paragraph:
        "Stay up-to-date with the latest news and events from Our Company. From industry conferences and networking events to product launches and webinars, there's always something exciting happening in our community. Join us and be part of the conversation.",
      imageURL:
        "https://ica.coop/sites/default/files/styles/full_image/public/news-item-fullimage/ballpen-blur-close-461077-2013101013.jpg?itok=F-Fwb7Lb",
      redirect: "/upcoming-events",
    },
    {
      heading: "Stay Connected with Us",
      paragraph:
        "Connect with Our Company on social media and stay informed about our latest news, updates, and promotions. Follow us on Facebook, Twitter, LinkedIn, and Instagram to join the conversation and be part of our online community. We look forward to connecting with you!",
      imageURL:
        "https://www.hsestudyguide.com/wp-content/uploads/2023/08/pexels-photo-7014337.jpeg",
      redirect: "/stay-connected",
    },
  ];

  return (
    <section className="relative">
      <Swiper
        style={{ zIndex: 1 }}
        spaceBetween={30}
        effect={"fade"}
        navigation={true}
        // pagination={{ clickable: true }}
        autoplay={{ delay: 2000 }}
        modules={[EffectFade, Navigation, Autoplay]}
        className="mySwiper"
        simulateTouch={false}
      >
        {bannerSlides.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-[50vh] lg:h-[88vh]  flex justify-center items-center">
              <div className="area">
                <ul className="circles">
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                </ul>
              </div>
              <img
                src={item.imageURL}
                alt={` ${index + 1}`}
                className="w-full h-full object-cover"
              />
              <div className="absolute w-full h-full bg-blue-400 opacity-70"></div>{" "}
              {/* Cyan overlay */}
              <div className="absolute w-full text-center">
                <div className="lg:w-1/2 mx-auto">
                  <h2 className="text-2xl lg:text-5xl outfit-bold mb-3 text-white">
                    {item.heading}
                  </h2>
                  <p className="text-md lg:text-xl mb-3 text-white ">
                    {item.paragraph}
                  </p>
                </div>
                <div className="flex w-full space-x-2 md:space-x-5 px-2 justify-center  pt-5 ">
                  <button
                    className="glow-btn glow-effect flex  bg-green-400 items-center justify-center h-12 w-1/2 sm:w-auto sm:px-10  lg:px-14"
                    // style={{
                    //   backgroundImage: "linear-gradient(#447cf7, #3f7cee)",
                    // }}
                  >
                    <span className="capitalize poppins-regular text-sm text-white">
                      view details
                    </span>
                  </button>

                  <button className="glow-btn bg-white h-12  flex justify-center items-center w-1/2 sm:w-auto sm:px-10  lg:px-14">
                    <span className="capitalize poppins-regular text-sm text-black ">
                      contact us
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default BannerCarousel;
