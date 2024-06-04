import React from "react";
import AboutBanner from "../components/About/AboutBanner";
import AboutAgency from "../components/About/AboutAgency";
import AboutUs from "../components/About/AboutUs";
import OurSpecialist from "../components/OurSpecialist/OurSpecialist";
import Team from "../components/Team/Team";

const AboutPage = () => {
  return (
    <div>
      <AboutAgency />
      <AboutUs />
      <OurSpecialist />
      <Team />
    </div>
  );
};

export default AboutPage;
