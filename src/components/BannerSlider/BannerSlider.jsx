import { Link } from 'react-router-dom';

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import websiteImage from '../../../public/website-image.jpg'
import portfolioImage from '../../../public/portfolio-image.jpg'

import appImage from '../../../public/app-image.jpg'
import blogImage from '../../../public/blog-image.jpg'


// import required modules
import {Navigation, Pagination, Autoplay, A11y } from "swiper/modules";
import { SwiperNavButtons } from '../../feature/SwiperNavButtons';
import AnimatedShape from '../AnimatedShape/AnimatedShape';
import WaveSVG from '../WaveSVG/WaveSVG';
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

const BannerSlider = () => {


  return (
    <section className="relative h-screen w-full bg-black">
         <WaveSVG/>
      <Swiper
                autoplay={{ delay: 5000 }}
                speed={1000}
                modules={[ Autoplay, Navigation,  A11y ]}
                className="mySwiper h-full w-full relative"
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

<AnimatedShape/>
<SwiperNavButtons />

      </Swiper>
  
    </section>
  );
};

export default BannerSlider;