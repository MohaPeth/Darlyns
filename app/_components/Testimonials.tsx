"use client";

import React, { useEffect } from "react";
import SwiperCore from "swiper/core";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";

import AOS from "aos";
import "aos/dist/aos.css";

SwiperCore.use([Pagination]);

const testimonialData = [
  {
    id: 1,
    name: "John Doe",
    title: "Customer",
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    avatarSrc: "/img/testimonials/testimonials-1.jpg",
  },
  {
    id: 2,
    name: "Jane Smith",
    title: "Client",
    quote:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    avatarSrc: "/img/testimonials/testimonials-2.jpg",
  },
  {
    id: 3,
    name: "Jane Doe",
    title: "Client",
    quote:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    avatarSrc: "/img/testimonials/testimonials-3.jpg",
  },
  {
    id: 4,
    name: "Jane Doe",
    title: "Client",
    quote:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    avatarSrc: "/img/testimonials/testimonials-4.jpg",
  },
  {
    id: 5,
    name: "Jane Smith",
    title: "Client",
    quote:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    avatarSrc: "/img/testimonials/testimonials-5.jpg",
  },
  {
    id: 6,
    name: "Ant Smith",
    title: "Client",
    quote:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    avatarSrc: "/img/testimonials/testimonials-1.jpg",
  },
];

const Testimonials = () => {
  useEffect(() => {
    AOS.init({
      duration: 700,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <section id="testimonials" className=" py-8 lg:py-16 bg-custom-menu">
      <div className="container mx-auto" data-aos="fade-up">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">Testimonials</h2>
          <p className="text-xl mt-2">What our clients say about us</p>
        </div>

        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 3,
            },
          }}
          pagination={{ clickable: true }}
          data-aos="fade-up"
          data-aos-delay="100"
          className="swiper-pagination-below"
        >
          {testimonialData.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              <div className="bg-primary rounded-lg shadow-lg p-4 md:p-6 mb-10">
                <p className="text-gray-700 mb-2">{testimonial.quote}</p>
                <img
                  src={testimonial.avatarSrc}
                  className="rounded-full w-16 h-16 mx-auto ml-2"
                  alt={testimonial.name}
                />
                <p className="text-lg font-semibold ml-2">{testimonial.name}</p>
                <p className="text-gray-600 mb-2 ml-2">{testimonial.title}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
