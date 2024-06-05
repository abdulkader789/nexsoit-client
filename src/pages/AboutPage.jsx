import React from "react";
import AboutBanner from "../components/About/AboutBanner";
import AboutAgency from "../components/About/AboutAgency";
import AboutUs from "../components/About/AboutUs";
import OurSpecialist from "../components/OurSpecialist/OurSpecialist";
import Team from "../components/Team/Team";
import AboutHeader from "../components/About/AboutHeader";
import Footer from "./../components/Footer/Footer";
import OurVision from "../components/About/OurVision";
import Subscribe from "../components/Subscribe/Subscribe";

const AboutPage = () => {
  return (
    <div>
      <AboutUs />
      <OurVision />
      <OurSpecialist />
      <Team />
      <Subscribe />
      <Footer />
    </div>
  );
};

export default AboutPage;
