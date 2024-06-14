import React from "react";
import ServiceList from "../components/OurServices/ServiceList";
import Footer from "../components/Footer/Footer";
import ServiceHeader from "../components/OurServices/ServiceHeader";
import GetService from "../components/OurServices/GetService";
import VideoSection from "../utils/VideoSection";

const ServicesPage = () => {
  return (
    <div>
      <div
        className="pt-10 min-h-screen lg:pt-32 h-full w-full bg-gray-900"

      >
        <ServiceHeader />
        <ServiceList />
      </div>
      <GetService />
      <VideoSection />
    
    </div>
  );
};

export default ServicesPage;
