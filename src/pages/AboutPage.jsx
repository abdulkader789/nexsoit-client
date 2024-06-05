import React from "react";
import AboutBanner from "../components/About/AboutBanner";
import AboutAgency from "../components/About/AboutAgency";
import AboutUs from "../components/About/AboutUs";
import OurSpecialist from "../components/OurSpecialist/OurSpecialist";
import Team from "../components/Team/Team";
import AboutHeader from "../components/About/AboutHeader";
import Footer from "./../components/Footer/Footer";

const AboutPage = () => {
  return (
    <div>
      <AboutUs />
      <OurSpecialist />
      <Team />
      <Footer />
    </div>
  );
};

export default AboutPage;
