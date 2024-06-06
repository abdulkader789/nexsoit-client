import React from "react";
import CoSolutions from "../components/CoSolutions/CoSolutions";
import ServiceList from "../components/OurServices/ServiceList";
import Subscribe from "../components/Subscribe/Subscribe";
import Footer from "../components/Footer/Footer";

const ServicesPage = () => {
  return (
    <div>
      <div
        className="pt-10 min-h-screen lg:pt-32 h-full w-full"
        style={{
          backgroundImage:
            "url(https://storage.googleapis.com/moises-cms-music-ai/bg_music_ai_65815bc7f1/bg_music_ai_65815bc7f1.svg)",
        }}
      >
        <ServiceList />
      </div>
      <Subscribe />
      <Footer />
    </div>
  );
};

export default ServicesPage;
