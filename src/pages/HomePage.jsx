import React from "react";
import Testimonial from "../components/Testimonial/Testimonial";
import BannerCarousel from "../components/BannerCarousel/BannerCarousel";
import Footer from "../components/Footer/Footer";

import BlogPost from "./../components/BlogPost/BlogPost";
import OurApproach from "../components/OurApproach/OurApproach";

import FeaturedServices from "../components/FeaturedServices/FeaturedServices";
import BannerSlider from "../components/BannerSlider/BannerSlider";
import BannerSection from "../components/BannerSection/BannerSection";

const HomePage = () => {
  return (
    <div>
      <BannerSection/>
      {/* <BannerSlider/> */}

      <FeaturedServices/>
      <OurApproach />
      {/* <BlogPost />
      <Testimonial /> */}
    </div>
  );
};

export default HomePage;
