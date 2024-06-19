import React from "react";
import { useSwiper } from "swiper/react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const SwiperNavButtons = () => {
  const swiper = useSwiper();

  return (
    <div className="swiper-nav-btns">
      <button className="prev-btn" onClick={() => swiper.slidePrev()}>
        <FiChevronLeft />
      </button>
      <button className="next-btn" onClick={() => swiper.slideNext()}>
        <FiChevronRight />
      </button>
    </div>
  );
};

export default SwiperNavButtons;
