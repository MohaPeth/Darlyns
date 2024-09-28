"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const WhyUs = () => {
  useEffect(() => {
    AOS.init({
      duration: 700,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <section className="why-us py-8 lg:py-16">
      <div className="container mx-auto" data-aos="fade-up">
        <div className="text-left mb-12">
          <div className="flex items-center mb-2">
            <h2 className="text-3xl font-bold">WHY US</h2>
            <div className="w-16 h-0.5 bg-primary ml-4"></div>
          </div>
          <p className="text-xl mt-2 text-primary">Why Choose Our Restaurant</p>
        </div>

        <div className="flex flex-wrap justify-center">
          <div className="w-full md:w-1/3 px-4 mb-8">
            <div
              className="box p-8 bg-custom-menu hover:bg-primary rounded-lg shadow-lg hover:text-white text-primary"
              data-aos="zoom-in"
              data-aos-delay="100"
            >
              <span className="text-4xl font-bold ">01</span>
              <h4 className="text-2xl font-semibold mt-4 mb-2 text-white">
                Service rapide
              </h4>
              <p className="text-gray-600">
                Ulamco laboris nisi ut aliquip ex ea commodo consequat. Et
                consectetur ducimus vero placeat
              </p>
            </div>
          </div>

          <div className="w-full md:w-1/3 px-4 mb-8">
            <div
              className="box p-8 bg-custom-menu hover:bg-primary rounded-lg shadow-lg hover:text-white text-primary"
              data-aos="zoom-in"
              data-aos-delay="200"
            >
              <p className="text-4xl font-bold ">02</p>
              <h4 className="text-2xl font-semibold mt-4 mb-2 text-white">
                Bonne ambiance
              </h4>
              <p className="text-gray-600">
                Dolorem est fugiat occaecati voluptate velit esse. Dicta
                veritatis dolor quod et vel dire leno para dest
              </p>
            </div>
          </div>

          <div className="w-full md:w-1/3 px-4 mb-8">
            <div
              className="box p-8 bg-custom-menu hover:bg-primary rounded-lg shadow-lg hover:text-white text-primary"
              data-aos="zoom-in"
              data-aos-delay="300"
            >
              <span className="text-4xl font-bold">03</span>
              <h4 className="text-2xl font-semibold mt-4 mb-2 text-white">
                Menu familiale
              </h4>
              <p className="text-gray-600">
                Molestiae officiis omnis illo asperiores. Aut doloribus vitae
                sunt debitis quo vel nam quis vero placeat
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
