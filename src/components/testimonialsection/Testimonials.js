import React from "react";

import TestimonialCard from "./TestimonialCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Autoplay, Navigation, Pagination } from "swiper/modules";
import Heading from "../common/Heading";

function Testimonials({ testimonialData }) {
  return (
    <div className="w-full my-20 lg:px-28 md:px-16 sm:px-8 px-5">
      <Heading name={"Testimonials."} subtitle={"What they say behind my back."}/>
      <Swiper
        slidesPerView={1}
        breakpoints={{
          // When screen width is 640px or more
          640: {
            slidesPerView: 1,
          },
          // When screen width is 768px or more
          768: {
            slidesPerView: 1,
          },
          // When screen width is 1024px or more
          1024: {
            slidesPerView: 1,
          },
          // When screen width is 1280px or more
          1280: {
            slidesPerView: 2,
          },
          // When screen width is 1536px or more
          1536: {
            slidesPerView: 2,
          },
        }}
        spaceBetween={30}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Navigation, Pagination, Autoplay]}
        className="pt-6"
      >
        {testimonialData.map((item, index) => {
          return (
            <SwiperSlide key={index}>
              <TestimonialCard
                name={item.name}
                img={item.img}
                quote={item.detail}
                position={item.job}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}

export default Testimonials;
