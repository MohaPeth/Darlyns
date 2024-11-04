"use client";

import React from "react";
import { ChevronRight } from "./icons/ChevronRight";
import { Twitter } from "./icons/Twitter";
import { Facebook } from "./icons/Facebook";
import { Instagram } from "./icons/Instagram";

const Footer = () => {
  return (
    <footer id="footer" className="bg-custom-bg text-white py-8">
      <div className="footer-top">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold">THE DARLYN&apos;S;</h3>
              <p className="mt-4">
                Plateau <br />
                Dakar, SN
                <br />
                <br />
                <strong>Phone:</strong> +221 76 909 94 65
                <br />
                <strong>Email:</strong> info@darline.com
                <br />
              </p>
              <div className="social-links mt-3 flex space-x-4">
                <a
                  href="#"
                  className="bg-custom-menu rounded-full p-3 flex items-center justify-center hover:bg-primary"
                >
                  <Twitter />
                </a>
                <a
                  href="#"
                  className="bg-custom-menu rounded-full p-3 flex items-center justify-center hover:bg-primary"
                >
                  <Facebook />
                </a>
                <a
                  href="#"
                  className="bg-custom-menu rounded-full p-3 flex items-center justify-center hover:bg-primary"
                >
                  <Instagram />
                </a>
              </div>
            </div>

            <div className="footer-links">
              <h4 className="text-xl font-semibold">Useful Links</h4>
              <ul className="mt-4 space-y-2">
                <li className="flex items-center space-x-2">
                  <ChevronRight />
                  <a href="#" className="text-white hover:text-primary">
                    Home
                  </a>
                </li>
                <li className="flex items-center space-x-2">
                  <ChevronRight />
                  <a href="#" className="text-white hover:text-primary">
                    About us
                  </a>
                </li>
                <li className="flex items-center space-x-2">
                  <ChevronRight />
                  <a href="#" className="text-white hover:text-primary">
                    Services
                  </a>
                </li>
                <li className="flex items-center space-x-2">
                  <ChevronRight />
                  <a href="#" className="text-white hover:text-primary">
                    Terms of service
                  </a>
                </li>
                <li className="flex items-center space-x-2">
                  <ChevronRight />
                  <a href="#" className="text-white hover:text-primary">
                    Privacy policy
                  </a>
                </li>
              </ul>
            </div>

            <div className="footer-links">
              <h4 className="text-xl font-semibold">Our Services</h4>
              <ul className="mt-4 space-y-2">
                <li className="flex items-center space-x-2">
                  <ChevronRight />
                  <a href="#" className="text-white hover:text-primary">
                    Birthday
                  </a>
                </li>
                <li className="flex items-center space-x-2">
                  <ChevronRight />
                  <a href="#" className="text-white hover:text-primary">
                    Karaoké
                  </a>
                </li>
                <li className="flex items-center space-x-2">
                  <ChevronRight />
                  <a href="#" className="text-white hover:text-primary">
                    Concert
                  </a>
                </li>
                <li className="flex items-center space-x-2">
                  <ChevronRight />
                  <a href="#" className="text-white hover:text-primary">
                    Mariage
                  </a>
                </li>
                <li className="flex items-center space-x-2">
                  <ChevronRight />
                  <a href="#" className="text-white hover:text-primary">
                    Brunch
                  </a>
                </li>
              </ul>
            </div>

            <div className="footer-newsletter">
              <h4 className="text-xl font-semibold">Our Newsletter</h4>
              <p className="mt-4 text-white">
                Tamen quem nulla quae legam multos aute sint culpa legam noster
                magna
              </p>
              <form action="" method="post" className="mt-4 relative flex">
                <input
                  type="email"
                  name="email"
                  className="w-full p-2 rounded-full bg-gray-700 text-white pr-32"
                  placeholder="Your Email"
                  required
                />
                <button
                  type="submit"
                  className="absolute right-0 top-0  px-4 py-2 rounded-full bg-primary text-white cursor-pointer"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Trait de séparation */}
      <div className="mt-8">
        <hr className="w-full border-t-2 border-d9ba85" />
      </div>

      <div className="container mx-auto mt-8 text-center">
        <div className="copyright">
          &copy; Copyright{" "}
          <strong>
            <span>P-E</span>
          </strong>
          . All Rights Reserved
        </div>
        <div className="credits">
          Designed by{" "}
          <a
            href="https://devdesign.com/"
            className="text-primary hover:underline"
          >
            DevDesign
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
