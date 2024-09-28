"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Hero = () => {
  useEffect(() => {
    AOS.init({
      disable: "phone",
      duration: 700,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <section className="flex items-center py-8 lg:py-16">
      <div
        className="container mx-auto relative text-center lg:text-left"
        data-aos="zoom-in"
        data-aos-delay="100"
      >
        <div className="flex flex-col lg:flex-row">
          <div className="lg:w-2/3">
            <h1 className="text-4xl font-bold mb-4 text-white drop-shadow-lg">
              Welcome to <span className="text-primary">Darline Delices</span>
            </h1>
            <h2 className="text-2xl mb-8 text-white drop-shadow-lg">
              Delivering great food for more than 18 years!
            </h2>
            <div className="space-x-4">
              <a
                href="#menu"
                className="border border-primary text-white py-2 px-4 rounded-full hover:bg-primary hover:text-white transition duration-300 ease-in-out animated fadeInUp scrollto"
              >
                Our Menu
              </a>
              <a
                href="#book-a-table"
                className="border border-primary text-white py-2 px-4 rounded-full hover:bg-primary hover:text-white transition duration-300 ease-in-out animated fadeInUp scrollto"
              >
                Book a Table
              </a>
            </div>
          </div>
          <div
            className="lg:w-1/3 flex items-center justify-center relative mt-8 lg:mt-0"
            data-aos="zoom-in"
            data-aos-delay="200"
          >
            <a
              href="https://www.youtube.com/watch?v=GlrxcuEDyF8"
              className="flex items-center justify-center w-16 h-16 bg-primary border border-transparent rounded-full hover:bg-primary"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="white"
                className="w-8 h-8"
              >
                <path
                  fillRule="evenodd"
                  d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
