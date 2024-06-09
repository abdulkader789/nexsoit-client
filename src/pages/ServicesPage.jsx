import React from "react";
import ServiceList from "../components/OurServices/ServiceList";
import Footer from "../components/Footer/Footer";
import ServiceHeader from "../components/OurServices/ServiceHeader";
import GetService from "../components/OurServices/GetService";
import { CreateAccountPromo } from "../components/CreateAccountPromo/CreateAccountPromo";
import VideoSection from "../utils/VideoSection";

const ServicesPage = () => {
  return (
    <div>
      <div
        className="pt-10 min-h-screen lg:pt-32 h-full w-full dark:bg-gray-900"
        // style={{
        //   backgroundImage:
        //     "url(https://storage.googleapis.com/moises-cms-music-ai/bg_music_ai_65815bc7f1/bg_music_ai_65815bc7f1.svg)",
        // }}
      >
        <ServiceHeader />
        <ServiceList />
      </div>
      <GetService />
      <VideoSection />
      <CreateAccountPromo />
      <Footer />
    </div>
  );
};

export default ServicesPage;
