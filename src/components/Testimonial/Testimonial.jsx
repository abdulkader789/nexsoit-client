import React from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Pagination } from "swiper/modules";

const Testimonial = () => {
  return (
    <div>
      <div className="py-6">
        <h2 className="text-3xl font-bold mb-8 text-center">Testimonial</h2>
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          // navigation={true}
          modules={[Autoplay, Pagination]}
          className="mx-auto w-full h-full"
        >
          <SwiperSlide className="text-center flex items-center justify-center">
            <img
              src="./js.png"
              className="object-cover w-[128px] block mx-auto rounded-full mb-8"
              alt="Profile Image"
            />
            <p className="uppercase text-lg font-light text-gray-500">Sammy</p>
            <h3 className="uppercase text-2xl font-bold mb-3 mt-[-7px]">
              Winchell
            </h3>
            <img
              src="./quote.png"
              className="mb-3 mx-auto w-8"
              alt="Quote Symbol"
            />
            <p className="italic max-w-xl mx-auto px-3 mb-12 text-gray-400">
              Duis autem vel eum iriure dolor in hendrerit in vulputate velit
              esse molestie consequat, vel illum dolore eu feugiat nulla
              facilisis at vero eros et accumsan et iusto odio dignissim qui
              blandit praesent
            </p>
          </SwiperSlide>
          <SwiperSlide className="text-center flex items-center justify-center">
            <img
              src="./js.png"
              className="object-cover w-[128px] block mx-auto rounded-full mb-8"
              alt="Profile Image"
            />
            <p className="uppercase text-lg font-light text-gray-500">Sammy</p>
            <h3 className="uppercase text-2xl font-bold mb-3 mt-[-7px]">
              Winchell
            </h3>
            <img
              src="./quote.png"
              className="mb-3 mx-auto w-8"
              alt="Quote Symbol"
            />
            <p className="italic max-w-xl mx-auto px-3 mb-12 text-gray-400">
              Duis autem vel eum iriure dolor in hendrerit in vulputate velit
              esse molestie consequat, vel illum dolore eu feugiat nulla
              facilisis at vero eros et accumsan et iusto odio dignissim qui
              blandit praesent
            </p>
          </SwiperSlide>
          <SwiperSlide className="text-center flex items-center justify-center">
            <img
              src="./js.png"
              className="object-cover w-[128px] block mx-auto rounded-full mb-8"
              alt="Profile Image"
            />
            <p className="uppercase text-lg font-light text-gray-500">Sammy</p>
            <h3 className="uppercase text-2xl font-bold mb-3 mt-[-7px]">
              Winchell
            </h3>
            <img
              src="./quote.png"
              className="mb-3 mx-auto w-8"
              alt="Quote Symbol"
            />
            <p className="italic max-w-xl mx-auto px-3 mb-12 text-gray-400">
              Duis autem vel eum iriure dolor in hendrerit in vulputate velit
              esse molestie consequat, vel illum dolore eu feugiat nulla
              facilisis at vero eros et accumsan et iusto odio dignissim qui
              blandit praesent
            </p>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonial;
