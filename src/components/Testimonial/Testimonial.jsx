import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";

const testimonialData = [
  {
    id: 1,
    name: "Sammy Winchell",
    image: "./testimonial-01.jpg",
    quote:
      "Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent",
  },
  {
    id: 2,
    name: "Another Person",
    image: "./testimonial-02.jpg",
    quote: "Another quote here",
  },
  // Add more testimonial objects as needed
];

const Testimonial = () => {
  return (
    <div className="">
      <div className="py-6">
        <h2 className="text-5xl font-bold mb-8 text-center">Testimonials</h2>
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay, Pagination]}
          className="mx-auto w-full h-full"
        >
          {testimonialData.map((testimonial) => (
            <SwiperSlide
              key={testimonial.id}
              className="text-center flex items-center justify-center"
            >
              <img
                src={testimonial.image}
                className="object-cover w-[128px] block mx-auto rounded-full mb-6"
                alt="Profile Image"
              />
              <p className="uppercase text-lg font-light text-gray-500">
                {testimonial.name}
              </p>
              <h3 className="uppercase text-2xl font-bold mb-3 mt-[-7px]">
                {testimonial.name}
              </h3>
              <img
                src="./quote-mark.png"
                className="mb-3 mx-auto w-8"
                alt="Quote Symbol"
              />
              <p className="italic max-w-xl mx-auto px-3 mb-12 text-gray-400">
                {testimonial.quote}
              </p>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonial;
