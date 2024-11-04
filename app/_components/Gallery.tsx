"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

const galleryItems = [
  { id: 1, src: "/img/gallery/gallery-1.jpg", alt: "Gallery Image 1" },
  { id: 2, src: "/img/gallery/gallery-2.jpg", alt: "Gallery Image 2" },
  { id: 3, src: "/img/gallery/gallery-3.jpg", alt: "Gallery Image 3" },
  { id: 4, src: "/img/gallery/gallery-4.jpg", alt: "Gallery Image 4" },
  { id: 5, src: "/img/gallery/gallery-5.jpg", alt: "Gallery Image 5" },
  { id: 6, src: "/img/gallery/gallery-6.jpg", alt: "Gallery Image 6" },
  { id: 7, src: "/img/gallery/gallery-7.jpg", alt: "Gallery Image 7" },
  { id: 8, src: "/img/gallery/gallery-8.jpg", alt: "Gallery Image 8" },
];

const Gallery = () => {
  useEffect(() => {
    AOS.init({
      duration: 700,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <section id="gallery" className="bg-custom-bg py-8 lg:py-16 ">
      <div className="text-left mb-12 ml-8">
        <div className="flex items-center mb-2">
          <h2 className="text-3xl font-bold ml-8">Gallery</h2>
          <div className="w-16 h-0.5 bg-primary ml-4"></div>
        </div>
        <p className="text-xl mt-2 text-primary ml-8">
          Some photos from Our Restaurant
        </p>
      </div>
      <div
        className="container-fluid mx-auto border-4"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
          {galleryItems.map((item) => (
            <div
              key={item.id}
              className="gallery-item relative overflow-hidden group"
            >
              <a
                href={item.src}
                className="gallery-lightbox"
                data-gall="gallery-item"
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  className="img-fluid rounded-lg shadow-lg transform transition-transform duration-300 ease-in-out group-hover:scale-105"
                  layout="responsive"
                  width={500}
                  height={500}
                />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
