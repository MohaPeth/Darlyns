"use client";

import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const specialsData = [
  {
    id: "tab-1",
    title: "Cuisses de grenouilles",
    subtitle: "Architecto ut aperiam autem id",
    description:
      "Qui laudantium consequatur laborum sit qui ad sapiente dila parde sonata raqer a videna mareta paulona marka",
    details:
      "Et nobis maiores eius. Voluptatibus ut enim blanditiis atque harum sint. Laborum eos ipsum ipsa odit magni. Incidunt hic ut molestiae aut qui. Est repellat minima eveniet eius et quis magni nihil. Consequatur dolorem quaerat quos qui similique accusamus nostrum rem vero",
    imgSrc: "/img/specials-1.png",
  },
  {
    id: "tab-2",
    title: "Thiebou guinar",
    subtitle: "Et blanditiis nemo veritatis excepturi",
    description:
      "Qui laudantium consequatur laborum sit qui ad sapiente dila parde sonata raqer a videna mareta paulona marka",
    details:
      "Ea ipsum voluptatem consequatur quis est. Illum error ullam omnis quia et reiciendis sunt sunt est. Non aliquid repellendus itaque accusamus eius et velit ipsa voluptates. Optio nesciunt eaque beatae accusamus lerode pakto madirna desera vafle de nideran pal",
    imgSrc: "/img/specials-2.png",
  },
  {
    id: "tab-3",
    title: "Spaghetti bolognaise",
    subtitle: "Impedit facilis occaecati odio neque aperiam sit",
    description:
      "Eos voluptatibus quo. Odio similique illum id quidem non enim fuga. Qui natus non sunt dicta dolor et. In asperiores velit quaerat perferendis aut",
    details:
      "Iure officiis odit rerum. Harum sequi eum illum corrupti culpa veritatis quisquam. Neque necessitatibus illo rerum eum ut. Commodi ipsam minima molestiae sed laboriosam a iste odio. Earum odit nesciunt fugiat sit ullam. Soluta et harum voluptatem optio quae",
    imgSrc: "/img/specials-3.png",
  },
  {
    id: "tab-4",
    title: "Thibou yapp",
    subtitle:
      "Fuga dolores inventore laboriosam ut est accusamus laboriosam dolore",
    description:
      "Totam aperiam accusamus. Repellat consequuntur iure voluptas iure porro quis delectus",
    details:
      "Eaque consequuntur consequuntur libero expedita in voluptas. Nostrum ipsam necessitatibus aliquam fugiat debitis quis velit. Eum ex maxime error in consequatur corporis atque. Eligendi asperiores sed qui veritatis aperiam quia a laborum inventore",
    imgSrc: "/img/specials-4.png",
  },
  {
    id: "tab-5",
    title: "Escalope",
    subtitle: "Est eveniet ipsam sindera pad rone matrelat sando reda",
    description:
      "Omnis blanditiis saepe eos autem qui sont debitis porro quia.",
    details:
      "Exercitationem nostrum omnis. Ut reiciendis repudiandae minus. Omnis recusandae ut non quam ut quod eius qui. Ipsum quia odit vero atque qui quibusdam amet. Occaecati sed est sint aut vitae molestiae voluptate vel",
    imgSrc: "/img/specials-5.png",
  },
];

const Specials = () => {
  const [activeTab, setActiveTab] = useState("tab-1");

  useEffect(() => {
    AOS.init({
      duration: 700,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <section id="specials" className="specials py-8 lg:py-16 bg-black">
      <div className="container mx-auto" data-aos="fade-up">
        <div className="text-left mb-12">
          <div className="flex items-center mb-2">
            <h2 className="text-3xl font-bold">Specials</h2>
            <div className="w-16 h-0.5 bg-primary ml-4"></div>
          </div>
          <p className="text-xl mt-2 text-primary">Check Our Specials</p>
        </div>

        <div
          className="flex flex-col lg:flex-row"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <div className="w-full lg:w-1/4 mb-4 lg:mb-0">
            <ul className="nav nav-tabs flex flex-col">
              {specialsData.map((special) => (
                <li key={special.id} className="nav-item">
                  <div className="relative">
                    <a
                      className={`cursor-pointer py-2 px-4 w-full block transition-colors duration-300 ${
                        activeTab === special.id
                          ? "bg-primary text-white"
                          : "bg-transparent text-white hover:text-primary"
                      }`}
                      onClick={() => setActiveTab(special.id)}
                    >
                      {special.title}
                    </a>
                    <div className="absolute right-0 top-0 h-full w-1 bg-primary"></div>{" "}
                    {/* Trait vertical */}
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="w-full lg:w-3/4 mt-4 lg:mt-0 ml-5">
            {specialsData.map((special) => (
              <div
                key={special.id}
                className={`tab-pane ${
                  activeTab === special.id ? "active show" : "hidden"
                }`}
              >
                <div className="flex flex-col lg:flex-row">
                  <div className="w-full lg:w-2/3 order-2 lg:order-1">
                    <h3 className="text-2xl font-semibold">
                      {special.subtitle}
                    </h3>
                    <p className="italic text-gray-300 mt-2">
                      {special.description}
                    </p>
                    <p className="text-gray-400 mt-4">{special.details}</p>
                  </div>
                  <div className="w-full lg:w-1/3 text-center order-1 lg:order-2 mb-4 lg:mb-0">
                    <img
                      src={special.imgSrc}
                      alt={special.title}
                      className="w-full h-auto rounded-lg shadow-lg"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Specials;
