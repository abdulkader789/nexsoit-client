import { Link } from 'react-router-dom';
import { useMobileNav } from '../contexts/MobileNavContext';
import '../styles/feature.css'

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "../components/BannerCarousel/BannerCarousel.css";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import websiteImage from '../../public/website-image.jpg'
import portfolioImage from '../../public/portfolio-image.jpg'

import appImage from '../../public/app-image.jpg'
import blogImage from '../../public/blog-image.jpg'


// import required modules
import {Navigation, Pagination, Autoplay, A11y } from "swiper/modules";
const heroSectionSlides = [
  // {
  //   title: "Transform Your Business with Custom ERP Systems",
  //   image: websiteImage
  // },
  // {
  //   title: "Optimize Operations with Advanced Inventory Management Software",
  //   image: "https://img.freepik.com/free-vector/flat-design-online-shopping-web-page-template_23-2148528206.jpg?t=st=1718448827~exp=1718452427~hmac=8e3f9f4cc49e011051f3f7c72b3cb7fa1243bcba59197f1af62cc4222197144f&w=740g"
  // },
  // {
  //   title: "Boost Customer Relationships with Tailored CRM Systems",
  //  image: "https://img.freepik.com/free-vector/flat-design-online-shopping-web-page-template_23-2148528206.jpg?t=st=1718448827~exp=1718452427~hmac=8e3f9f4cc49e011051f3f7c72b3cb7fa1243bcba59197f1af62cc4222197144f&w=740g"
  // },
  {
    title: "launch your business with mern stack e-commerce",
    image: websiteImage
  },
  {
    title: "app solutions that fit your goals",
    image: appImage
  },
  // {
  //   title: "interface design for websites and apps with figma",
  //   image: appImage
  // },
  {
    title: "Showcase Your Work with Stunning Portfolio Websites",
    image: portfolioImage
  },
  {
    title: "Connect with Readers through Personal Blogs",
    image: blogImage
  },

  // {
  //   title: "Build Communities with Social Networking Apps",
  //   image: "path/to/social-networking-apps-image.jpg"
  // },
  // {
  //   title: "Increase Productivity with Innovative Apps",
  //   image: "path/to/productivity-apps-image.jpg"
  // },
  // {
  //   title: "Create Buzz with Promotional Videos",
  //   image: "path/to/promotional-videos-image.jpg"
  // },
  // {
  //   title: "Demonstrate Products with High-Quality Demos",
  //   image: "path/to/product-demos-image.jpg"
  // },
  // {
  //   title: "Educate Your Audience with Engaging Training Videos",
  //   image: "path/to/training-videos-image.jpg"
  // },
  // {
  //   title: "Attract Attention with Event Posters",
  //   image: "path/to/event-posters-image.jpg"
  // },
  // {
  //   title: "Boost Marketing Campaigns with Creative Posters",
  //   image: "path/to/marketing-posters-image.jpg"
  // },
  // {
  //   title: "Inform and Educate with Detailed Posters",
  //   image: "path/to/detailed-posters-image.jpg"
  // },
  // {
  //   title: "Increase Online Visibility with Expert SEO Services",
  //   image: "path/to/seo-services-image.jpg"
  // },
  // {
  //   title: "Drive Engagement with Effective Content Marketing",
  //   image: "path/to/content-marketing-image.jpg"
  // },
  // {
  //   title: "Expand Your Reach with Targeted Social Media Campaigns",
  //   image: "path/to/social-media-campaigns-image.jpg"
  // }
];
const splitTitle = (title) => {
  const words = title.split(' ');
  const middleIndex = Math.ceil(words.length / 2);
  const firstHalf = words.slice(0, middleIndex).join(' ');
  const secondHalf = words.slice(middleIndex).join(' ');
  return { firstHalf, secondHalf };
};

const BannerCarousel = () => {


  return (
    <section className="relative h-full w-full ">
      <Swiper
                autoplay={{ delay: 5000 }}
                speed={2000}
                modules={[ Autoplay, Navigation,  A11y ]}
                className="mySwiper h-full w-full"
                simulateTouch={false}
              // navigation={{
              //   clickable: true,       
              //  }}
         
            
        
      >
        {heroSectionSlides.map((item, index) => {
          const { firstHalf, secondHalf } = splitTitle(item.title);
          return (
            <SwiperSlide key={index} className='h-full w-full relative'>
              <div className="relative w-full h-full flex justify-center items-center">
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
                <main className='h-full w-full flex justify-center items-center  flex-col lg:flex-row md:pt-32 lg:pt-0 '>
                  <section className='pb-5 h-20 lg:pb-0  lg:w-1/2 flex justify-center items-center lg:h-full relative'>
                    <h2 className='syne-bold text-lg text-white  lg:text-2xl capitalize'>
                      <span className=' '>{firstHalf}</span><br /><span className='bg-blue-700 px-2 relative rotate-[-2deg] inline-block'>{secondHalf}</span>
                    </h2>
                  </section>
                  <section className='lg:w-1/2 lg:h-full relative'>
                    <div className="w-full h-full flex items-center justify-center ">
                      <img className='h-full lg:h-auto w-full relative   rounded-md ' src={item.image} />
                    </div>
                  </section>


                </main>
               
              </div>
            </SwiperSlide>
          );
        })}
      <SwiperNavButtons />

      </Swiper>
  
    </section>
  );
};


const navLinks = [
    { title: "home" },
    { title: "about" },
    { title: "services" },
    { title: "team" },
    { title: "contact" }
];





const FeaturedNavLinks = ()=>{
  
        const { handleClick } = useMobileNav();


  return (
    <ul className=" flex flex-col  lg:flex-row relative  w-full lg:w-auto">
      {navLinks.map((link, index) => (
        <li
          key={index}
          className="flex-1 px-10 lg:px-5   py-4 border-b-[1px] border-gray-200 lg:border-none "
          onClick={handleClick}
        >
          <Link to={link.path} className="block capitalize text-md leading-7 syne-bold">
            {link.title}
          </Link>
        </li>
      ))}
    </ul>

    )
}

import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import NavLogo from "../components/Navbar/NavLogo";
import FaBars from "../components/Navbar/FaBars/FaBars";
import NavButton from "../components/Navbar/NavButton";
import { SwiperNavButtons } from './SwiperNavButtons';

export const FeaturedNav = () => {
  const location = useLocation(); // Use the useLocation hook
  const { isActive, handleClick } = useMobileNav();
  const [scrolling, setScrolling] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [scrollThreshold, setScrollThreshold] = useState(100);
  const [isScrolled, setIsScrolled] = useState(false);
  const navRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      const scrolledDistance = Math.abs(currentScrollPos - prevScrollPos);

      if (scrolledDistance > scrollThreshold) {
        setScrolling(currentScrollPos > prevScrollPos);
        setPrevScrollPos(currentScrollPos);
      }

      setIsScrolled(currentScrollPos > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos, scrollThreshold]);

  return (
    <nav
      className={`w-full fixed bg-transparent montserrat-regular z-50 top-0  transition-all duration-400 ease-in-out`}
      ref={navRef}
    >
     
      <main
        className={`small-screen-bg text-white w-full px-10 py-2 lg:py-0 lg:w-auto h-[6vh] lg:h-auto flex justify-between items-center ${
          isScrolled ? "bg-glassy" : ""
        } ${
          location.pathname !== "/" && location.pathname !== "/home"
            ? "bg-glassy"
            : ""
        }`}
      >
        <div className="w-40">
          <NavLogo />
        </div>
        <div className="flex justify-center h-full items-center lg:hidden">
          <FaBars />
        </div>
        <section
          className={`h-[94vh] sidebar-bg left-0 lg:h-auto lg:-translate-x-0 w-full absolute lg:relative top-[6vh] lg:top-0  transition-all duration-500 ease-in-out ${
            isActive ? "-translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="w-full flex">
            <section className="h-full w-full flex flex-col lg:flex-row justify-end lg:justify-center items-center montserrat-bold">
              <div className="mb-10 lg:mb-0 w-full lg:w-auto">
                <FeaturedNavLinks />
              </div>
              {/* <NavButton /> */}
              <div className=' flex justify-center items-center absolute right-0'>
              <NavButton/>
              </div>
           
            </section>
         
          </div>
        </section>
      </main>
    </nav>
  );
};






const FeaturedHome = ()=>{
    return(
        <div className='h-screen  bg-gray-900 relative' >
     
            <div className='h-full'>
            <BannerCarousel/>
            </div>
            <div className='w-full absolute bottom-0 z-20 oveflow-hidden'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1250 250" >
  <path fill="#ffffff" fill-opacity="1" d="M0,160L205.7,96L411.4,96L617.1,160L822.9,160L1028.6,192L1234.3,224L1440,288L1440,320L1234.3,320L1028.6,320L822.9,320L617.1,320L411.4,320L205.7,320L0,320Z"></path>
  
</svg>
            </div>
           
        </div>
    )
}

export default FeaturedHome