import React from "react";
import AboutBanner from "../components/About/AboutBanner";
import AboutAgency from "../components/About/AboutAgency";
import AboutUs from "../components/About/AboutUs";
import Team from "../components/Team/Team";

const AboutPage = () => {
  return (
    <div>
      <AboutBanner />
      <AboutAgency />
      <AboutUs />
      <Team />
    </div>
  );
};

export default AboutPage;
