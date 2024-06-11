import React from "react";
import AboutBanner from "../components/About/AboutBanner";
import AboutAgency from "../components/About/AboutAgency";
import AboutUs from "../components/About/AboutUs";
import OurSpecialties from "../components/OurSpecialties/OurSpecialties";
import AboutHeader from "../components/About/AboutHeader";
import Footer from "./../components/Footer/Footer";
import OurVision from "../components/About/OurVision";
import { CreateAccountPromo } from "../components/CreateAccountPromo/CreateAccountPromo";
import TeamOverview from "../components/Team/TeamOverview";

const AboutPage = () => {
  return (
    <div className="pt-8">
      <AboutUs />
      <OurVision />
      <OurSpecialties />
      {/* <TeamOverview /> */}
    </div>
  );
};

export default AboutPage;
