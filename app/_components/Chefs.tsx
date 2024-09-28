"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import { Facebook } from "./icons/Facebook";
import { Instagram } from "./icons/Instagram";
import { Twitter } from "./icons/Twitter";

const chefsData = [
  {
    id: 1,
    name: "Walter White",
    title: "Master Chef",
    imgSrc: "/img/chefs/chefs-1.jpg",
    socialLinks: {
      twitter: "#",
      facebook: "#",
      instagram: "#",
      linkedin: "#",
    },
  },
  {
    id: 2,
    name: "Sarah Jhonson",
    title: "Patissier",
    imgSrc: "/img/chefs/chefs-2.jpg",
    socialLinks: {
      twitter: "#",
      facebook: "#",
      instagram: "#",
      linkedin: "#",
    },
  },
  {
    id: 3,
    name: "William Anderson",
    title: "Cook",
    imgSrc: "/img/chefs/chefs-3.jpg",
    socialLinks: {
      twitter: "#",
      facebook: "#",
      instagram: "#",
      linkedin: "#",
    },
  },
];

const Chefs = () => {
  useEffect(() => {
    AOS.init({
      duration: 700,
      easing: "ease-out-cubic",
      once: true,
    });
  }, []);

  return (
    <section id="chefs" className="bg-custom-bg py-8 lg:py-16">
      <div className="container mx-auto" data-aos="fade-up">
        <div className="mb-12">
          <div className="flex items-center mb-2">
            <h2 className="text-3xl font-bold ">Chefs</h2>
            <div className="w-16 h-0.5 bg-primary ml-4"></div>
          </div>
          <p className="text-xl mt-2 text-primary">Our Professional Chefs</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {chefsData.map((chef) => (
            <div
              key={chef.id}
              className="relative group"
              data-aos="zoom-in"
              data-aos-delay={`${chef.id * 100}`}
            >
              <Image
                src={chef.imgSrc}
                alt={`Portrait of ${chef.name}, ${chef.title}`}
                className="rounded-lg shadow-lg"
                layout="responsive"
                width={500}
                height={500}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black to-transparent opacity-0 group-hover:opacity-60 transition-opacity duration-300 ease-in-out rounded-lg flex flex-col justify-end">
                <div className="text-center text-white p-2">
                  <h4 className="text-2xl font-bold">{chef.name}</h4>
                  <span className="text-gray-300">{chef.title}</span>
                </div>
                <div className="flex justify-center space-x-4 p-2">
                  <a
                    href={chef.socialLinks.twitter}
                    className="text-white hover:text-primary transition-colors duration-300"
                  >
                    <Twitter />
                  </a>
                  <a
                    href={chef.socialLinks.facebook}
                    className="text-white hover:text-primary transition-colors duration-300"
                  >
                    <Facebook />
                  </a>
                  <a
                    href={chef.socialLinks.instagram}
                    className="text-white hover:text-primary transition-colors duration-300"
                  >
                    <Instagram />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Chefs;
