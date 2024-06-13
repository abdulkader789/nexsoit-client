import React from "react";
import Testimonial from "../components/Testimonial/Testimonial";
import BannerCarousel from "../components/BannerCarousel/BannerCarousel";
import Footer from "../components/Footer/Footer";

import BlogPost from "./../components/BlogPost/BlogPost";
import OurApproach from "../components/OurApproach/OurApproach";
import HeroServices from "../components/Hero/HeroServices";
import { CreateAccountPromo } from "../components/CreateAccountPromo/CreateAccountPromo";
import LoaderShape from "../utils/LoaderShape";
import HeroSection from "../components/HeroSection/HeroSection";

const HomePage = () => {
  return (
    <div>
      {/* <BannerCarousel /> */}
      <HeroSection/>
      <HeroServices />

      {/* <OurServices /> */}
      <OurApproach />
      {/* <BlogPost />
      <Testimonial /> */}
    </div>
  );
};

export default HomePage;
