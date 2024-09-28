"use client";

import React, { useEffect } from "react";
import SwiperCore from "swiper/core";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { RightIcon } from "./icons/RightIcon";

import AOS from "aos";
import "aos/dist/aos.css";

SwiperCore.use([Pagination]);

const eventsData = [
  {
    id: 1,
    title: "Birthday Parties",
    price: "$189",
    imgSrc: "img/event-birthday.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    details:
      "Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    items: [
      "Ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      "Duis aute irure dolor in reprehenderit in voluptate velit.",
      "Ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    ],
  },
  {
    id: 2,
    title: "Private Parties",
    price: "$290",
    imgSrc: "img/event-private.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    details:
      "Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    items: [
      "Ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      "Duis aute irure dolor in reprehenderit in voluptate velit.",
      "Ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    ],
  },
  {
    id: 3,
    title: "Custom Parties",
    price: "$99",
    imgSrc: "img/event-custom.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    details:
      "Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    items: [
      "Ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      "Duis aute irure dolor in reprehenderit in voluptate velit.",
      "Ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    ],
  },
];

const Events = () => {
  useEffect(() => {
    AOS.init({
      duration: 700,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <section id="events" className="events py-8 lg:py-16 ">
      <div className="container mx-auto" data-aos="fade-up">
        <div className="text-left mb-12">
          <div className="flex items-center mb-2">
            <h2 className="text-3xl font-bold">Events</h2>
            <div className="w-16 h-0.5 bg-primary ml-4"></div>
          </div>
          <p className="text-xl mt-2 text-primary">
            Organize Your Events in our Restaurant
          </p>
        </div>

        <Swiper
          spaceBetween={30}
          pagination={{ clickable: true }}
          data-aos="fade-up"
          data-aos-delay="100"
          className="swiper-pagination-below "
        >
          {eventsData.map((event) => (
            <SwiperSlide key={event.id}>
              <div className="flex flex-col lg:flex-row items-center">
                <div className="w-full lg:w-1/2">
                  <img
                    src={event.imgSrc}
                    className="img-fluid rounded-lg shadow-lg mb-8"
                    alt={event.title}
                  />
                </div>
                <div className="w-full lg:w-1/2 lg:pl-8 pt-4 pt-lg-0">
                  <h3 className="text-2xl font-semibold">{event.title}</h3>
                  <div className="price mt-2">
                    <p className="text-lg font-bold">{event.price}</p>
                  </div>
                  <p className="italic text-gray-600 mt-4">
                    {event.description}
                  </p>
                  <ul className="list-none mt-4 space-y-2">
                    {event.items.map((item, index) => (
                      <li key={index} className="flex items-center">
                        <RightIcon />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <p className="text-gray-700 mt-4 mb-8">{event.details}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Events;
