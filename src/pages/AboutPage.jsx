import React from "react";
import AboutBanner from "../components/About/AboutBanner";
import AboutAgency from "../components/About/AboutAgency";
import AboutUs from "../components/About/AboutUs";
import OurSpecialties from "../components/OurSpecialties/OurSpecialties";
import AboutHeader from "../components/About/AboutHeader";
import Footer from "./../components/Footer/Footer";
import OurVision from "../components/About/OurVision";
import TeamOverview from "../components/Team/TeamOverview";

const AboutPage = () => {
  return (
    <div className="pt-8">
      <AboutUs />
      <OurVision />
<<<<<<< HEAD
      <OurSpecialist />
      <TeamOverview />
   
=======
      <OurSpecialties />
      {/* <TeamOverview /> */}
>>>>>>> 36fbd2489370766c33eecc6aeab7482b2c8e2f0f
    </div>
  );
};

export default AboutPage;
