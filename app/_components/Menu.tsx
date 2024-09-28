"use client";

import React, { useEffect, useMemo, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const menuItems = [
  {
    filter: "starters",
    imgSrc: "/img/menu/lobster-bisque.jpg",
    title: "Lobster Bisque",
    price: "7000 XAF",
    ingredients:
      "Lorem, deren, trataro, filede, nerada                          ",
  },
  {
    filter: "specialty",
    imgSrc: "/img/menu/bread-barrel.jpg",
    title: "Bread Barrel",
    price: "9500 XAF",
    ingredients:
      "Lorem, deren, trataro, filede, nerada                          ",
  },
  {
    filter: "starters",
    imgSrc: "/img/menu/cake.jpg",
    title: "Crab Cake",
    price: "6000 XAF",
    ingredients:
      "A delicate crab cake served on a toasted roll with lettuce and tartar sauce",
  },
  {
    filter: "salads",
    imgSrc: "/img/menu/caesar.jpg",
    title: "Caesar Selections",
    price: "11.500 XAF",
    ingredients:
      "Lorem, deren, trataro, filede, nerada                          ",
  },
  {
    filter: "specialty",
    imgSrc: "/img/menu/tuscan-grilled.jpg",
    title: "Tuscan Grilled",
    price: "18.000 XAF",
    ingredients:
      "Grilled chicken with provolone, artichoke hearts, and roasted red pesto",
  },
  {
    filter: "starters",
    imgSrc: "/img/menu/mozzarella.jpg",
    title: "Mozzarella Stick",
    price: "10.000",
    ingredients:
      "Lorem, deren, trataro, filede, nerada egg, and warm bacon vinaigrette",
  },
  {
    filter: "salads",
    imgSrc: "/img/menu/greek-salad.jpg",
    title: "Greek Salad",
    price: "3900 XAF",
    ingredients:
      "Fresh spinach, crisp romaine, tomatoes, and Greek olives , and roasted ",
  },
  {
    filter: "salads",
    imgSrc: "/img/menu/spinach-salad.jpg",
    title: "Spinach Salad",
    price: "5000 XAF",
    ingredients:
      "Lorem, Fresh spinach with mushrooms, hard boiled egg, and warm bacon ",
  },
  {
    filter: "specialty",
    imgSrc: "/img/menu/lobster-roll.jpg",
    title: "Lobster Roll",
    price: "14.000 XAF",
    ingredients:
      "Plump lobster meat, mayo and crisp lettuce on a toasted bulky roll  ",
  },
];

const Menu = () => {
  const [filter, setFilter] = useState("all");

  // Filter items based on the selected filter
  const filteredItems = useMemo(() => {
    const items =
      filter === "all"
        ? menuItems
        : menuItems.filter((item) => item.filter === filter);
    console.log("les items", items);
    return items;
  }, [filter]);

  useEffect(() => {
    AOS.init({
      duration: 700,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <section id="menu" className="menu bg-custom-menu py-8 lg:py-16">
      <div className="container mx-auto" data-aos="fade-up">
        <div className="text-left mb-12">
          <div className="flex items-center mb-2">
            <h2 className="text-3xl font-bold">Menu</h2>
            <div className="w-16 h-0.5 bg-primary ml-4"></div>
          </div>
          <p className="text-xl mt-2 text-primary">Check Our Tasty Menu</p>
        </div>

        <div className="flex justify-center mb-12">
          <ul className="flex space-x-4">
            <li
              className={`cursor-pointer text-primary font-semibold ${
                filter === "all" ? "text-bold border-b-2 border-primary" : ""
              }`}
              onClick={() => setFilter("all")}
            >
              All
            </li>
            <li
              className={`cursor-pointer text-primary font-semibold ${
                filter === "starters"
                  ? "text-bold border-b-2 border-primary"
                  : ""
              }`}
              onClick={() => setFilter("starters")}
            >
              Starters
            </li>
            <li
              className={`cursor-pointer text-primary font-semibold ${
                filter === "salads" ? "text-bold border-b-2 border-primary" : ""
              }`}
              onClick={() => setFilter("salads")}
            >
              Salads
            </li>
            <li
              className={`cursor-pointer text-primary font-semibold ${
                filter === "specialty"
                  ? "text-bold border-b-2 border-primary"
                  : ""
              }`}
              onClick={() => setFilter("specialty")}
            >
              Specialty
            </li>
          </ul>
        </div>

        <div className="flex flex-wrap -mx-4">
          {filteredItems.map((item, index) => (
            <div
              key={index}
              className={`w-full md:w-1/2 px-4 mb-8 menu-item filter-${item.filter}`}
              data-aos="fade-up"
              data-aos-delay={(index + 1) * 100}
            >
              <div className="flex items-center">
                <img
                  src={item.imgSrc}
                  alt={item.title}
                  className="w-32 h-32 border-4 object-cover rounded-full shadow-lg"
                />
                <div className="ml-4 flex-1">
                  <div className="flex items-center">
                    <a href="#" className="text-lg font-semibold flex-1 pr-4">
                      {item.title}
                      <span className="after:block after:absolute after:right-0 after:w-full after:text-right after:overflow-hidden">
                        &nbsp;
                      </span>
                    </a>
                    <span className="text-lg font-semibold text-primary">
                      {item.price}
                    </span>
                  </div>
                  <p className="text-gray-600 mt-2">{item.ingredients}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;
