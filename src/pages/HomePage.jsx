import React from "react";
import Testimonial from "../components/Testimonial/Testimonial";
import BannerCarousel from "../components/BannerCarousel/BannerCarousel";
import Subscribe from "../components/Subscribe/Subscribe";
import Footer from "../components/Footer/Footer";

import OurServices from "../components/OurServices/OurServies";
import BlogPost from "./../components/BlogPost/BlogPost";
import OurApproach from "../components/OurApproach/OurApproach";
import HeroServices from "../components/Hero/HeroServices";

const HomePage = () => {
  return (
    <div>
      <BannerCarousel />
      <HeroServices />
      {/* <OurServices /> */}
      <OurApproach />
      {/* <BlogPost />
      <Testimonial /> */}
      <Subscribe />
      <Footer />
    </div>
  );
};

export default HomePage;
