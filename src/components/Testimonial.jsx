import React from "react";
import { TEST_DATA } from "../utils/helper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const TestimonialSlider = () => {
  return (
    <section className="py-16 bg-white">
      <h2 className="text-center text-orange-500 font-semibold text-sm mb-2">
        Testimonial
      </h2>
      <h3 className="text-center text-3xl font-bold mb-10">
        What Our Customers Say
      </h3>

      <Swiper
        modules={[Navigation]}
        navigation={{
          nextEl: ".next-btn",
          prevEl: ".prev-btn",
        }}
        loop
        spaceBetween={30}
        className="max-w-4xl mx-auto"
      >
        {TEST_DATA.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="flex flex-col md:flex-row items-center gap-8 p-6 rounded-xl">
              <img
                src={item.pizza}
                alt="testimonial"
                className="w-100 h-50"
              />
              <div className="text-left space-y-4 bg-[#ffffff] rounded-xl shadow-xl ">
                <p className="text-gray-600 ml-10" >{item.text}</p>
                <div>
                  <h4 className="font-bold text-xl ml-10">{item.name}</h4>
                  <p className="text-gray-500 ml-10">{item.role}</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
        <div className="flex justify-center gap-4 mt-6">
          <button className="prev-btn bg-gray-200 p-2 rounded hover:bg-gray-300">
            <FaArrowLeft />
          </button>
          <button className="next-btn bg-orange-500 p-2 rounded text-white hover:bg-orange-600">
            <FaArrowRight />
          </button>
        </div>
      </Swiper>
    </section>
  );
};

export default TestimonialSlider;