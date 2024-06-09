import React from "react";
import Testimonial from "../components/Testimonial/Testimonial";
import BannerCarousel from "../components/BannerCarousel/BannerCarousel";
import Footer from "../components/Footer/Footer";

import BlogPost from "./../components/BlogPost/BlogPost";
import OurApproach from "../components/OurApproach/OurApproach";
import HeroServices from "../components/Hero/HeroServices";
import { CreateAccountPromo } from "../components/CreateAccountPromo/CreateAccountPromo";

const HomePage = () => {
  return (
    <div>
      <BannerCarousel />
      <HeroServices />
      {/* <OurServices /> */}
      <OurApproach />
      {/* <BlogPost />
      <Testimonial /> */}
      <CreateAccountPromo />
      <Footer />
    </div>
  );
};

export default HomePage;
