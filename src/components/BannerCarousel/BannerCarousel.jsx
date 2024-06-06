// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { EffectFade, Navigation, Pagination, Autoplay } from "swiper/modules";
import { Link, redirect } from "react-router-dom";

const BannerCarousel = () => {
  const bannerSlides = [
    {
      title: "Innovative Software Solutions",
      description:
        "Discover cutting-edge software solutions tailored to meet the unique needs of your business. Our team of experts delivers innovative and efficient systems that drive productivity and growth",
      imageURL: "https://www.myhrtoolkit.com/hubfs/strategicvstacticalhr.jpg",
      redirect: "software-service",
    },
    {
      title: "Digital Transformation Consulting",
      description:
        "Transform your business with our digital transformation consulting services. We guide you through the process of adopting new technologies and optimizing your operations for the digital age.",
      imageURL:
        "https://ica.coop/sites/default/files/styles/full_image/public/news-item-fullimage/ballpen-blur-close-461077-2013101013.jpg?itok=F-Fwb7Lb",
      redirect: "consultation-service",
    },
    {
      title: "IT Support and Maintenance",
      description:
        "Ensure your systems run smoothly with our IT support and maintenance services. Our team provides reliable and timely support to keep your operations uninterrupted.",
      imageURL:
        "https://www.hsestudyguide.com/wp-content/uploads/2023/08/pexels-photo-7014337.jpeg",
      redirect: "support-maintenance-service",
    },
    {
      title: "API Development and Integration",
      description:
        "Enhance your software capabilities with our API development and integration services. We create secure and efficient APIs that enable seamless communication between your applications.",
      imageURL: "https://www.myhrtoolkit.com/hubfs/strategicvstacticalhr.jpg",
      redirect: "api-development-service",
    },
    {
      title: "Quality Assurance and Testing",
      description:
        "Ensure the reliability of your software with our quality assurance and testing services. We conduct thorough testing to identify and resolve issues, delivering high-quality products.",
      imageURL:
        "https://ica.coop/sites/default/files/styles/full_image/public/news-item-fullimage/ballpen-blur-close-461077-2013101013.jpg?itok=F-Fwb7Lb",
      redirect: "quality-testing-service",
    },
    {
      title: "Performance Optimization",
      description:
        "Boost the performance of your software with our optimization services. We analyze and enhance your applications to ensure they run smoothly and efficiently.",
      imageURL:
        "https://www.hsestudyguide.com/wp-content/uploads/2023/08/pexels-photo-7014337.jpeg",
      redirect: "performance-optimization-service",
    },
    {
      title: "Payment Gateway Integration",
      description:
        "Facilitate secure online transactions with our payment gateway integration services. We provide solutions that enable seamless and secure payment processing for your e-commerce platforms.",
      imageURL:
        "https://www.hsestudyguide.com/wp-content/uploads/2023/08/pexels-photo-7014337.jpeg",
      redirect: "payment-gateway-service",
    },
    {
      title: "SEO and Digital Marketing",
      description:
        "Increase your online visibility with our SEO and digital marketing services. We offer comprehensive strategies to improve search engine rankings and drive traffic to your website.",
      imageURL:
        "https://www.hsestudyguide.com/wp-content/uploads/2023/08/pexels-photo-7014337.jpeg",
      redirect: "seo-marketing-service",
    },
    {
      title: "Interactive Dashboards",
      description:
        "Visualize your data with our interactive dashboard solutions. We create customizable dashboards that provide real-time insights and analytics.",
      imageURL:
        "https://www.hsestudyguide.com/wp-content/uploads/2023/08/pexels-photo-7014337.jpeg",
      redirect: "dashboard-service",
    },
    {
      title: "Ultimate Video Solutions",
      description:
        "Elevate your video content with our comprehensive suite of services, from basic editing to advanced techniques, ensuring seamless delivery across all platforms.",
      imageURL:
        "https://www.hsestudyguide.com/wp-content/uploads/2023/08/pexels-photo-7014337.jpeg",
      redirect: "video-service",
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
                    {item.title}
                  </h2>
                  <p className="text-md lg:text-xl mb-3 text-white ">
                    {item.description}
                  </p>
                </div>
                <div className="flex w-full space-x-2 md:space-x-5 px-2 z-20 justify-center  pt-5 ">
                  <button className="capitalize poppins-regular text-sm text-white   bg-green-400  h-12 w-1/2 sm:w-auto sm:px-10  lg:px-14 glow-btn glow-effect">
                    <Link
                      to={`/services`}
                      className="h-full w-full flex justify-center items-center"
                    >
                      view details
                    </Link>
                  </button>

                  <button className="capitalize poppins-regular text-sm text-black   bg-white  h-12 w-1/2 sm:w-auto sm:px-10  lg:px-14 glow-btn">
                    <Link
                      to={`/contact`}
                      className="h-full w-full flex justify-center items-center"
                    >
                      Contact Us
                    </Link>
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
