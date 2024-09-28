import React from "react";
import Section from "./Section";
import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-black bg-opacity-70 p-4">
      <Section>
        <div className="container mx-auto flex flex-row justify-between items-center font-sans">
          <h1 className="text-3xl  ">
            <Link href="/">THE DARLYN'S</Link>
          </h1>
          <nav id="navbar" className="flex-grow">
            <ul className="flex space-x-4 justify-center">
              <li>
                <Link
                  className="hover:text-primary transition duration-300 ease-in-out"
                  href="/home"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-primary transition duration-300 ease-in-out"
                  href="/about"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-primary transition duration-300 ease-in-out"
                  href="/menu"
                >
                  Menu
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-primary transition duration-300 ease-in-out"
                  href="/specials"
                >
                  Specials
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-primary transition duration-300 ease-in-out"
                  href="/events"
                >
                  Events
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-primary transition duration-300 ease-in-out"
                  href="/chefs"
                >
                  Chefs
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-primary transition duration-300 ease-in-out"
                  href="/gallery"
                >
                  Gallery
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-primary transition duration-300 ease-in-out"
                  href="/contact"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
          <Link
            href="/book-a-table"
            className="hidden lg:flex border border-primary text-white py-2 px-4 rounded-full hover:bg-primary hover:text-white transition duration-300 ease-in-out"
          >
            Book a table
          </Link>
        </div>
      </Section>
    </header>
  );
};

export default Header;
