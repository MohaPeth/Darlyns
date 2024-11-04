"use client";

import React, { useState } from "react";
import Section from "./Section";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="bg-black bg-opacity-70 p-4">
      <Section>
        <div className="container mx-auto flex flex-row justify-between items-center font-sans">
          <h1 className="text-3xl">
            <Link href="/">THE DARLYN&apos;S</Link>
          </h1>

          {/* Bouton menu hamburger pour petits écrans */}
          <button
            onClick={toggleMenu}
            type="button"
            aria-label="Toggle menu"
            className="lg:hidden text-3xl text-white focus:outline-none"
          >
            {isOpen ? <FiX /> : <FiMenu />}
          </button>

          {/* Menu overlay pour petits écrans */}
          <div
            className={`fixed inset-0 bg-black bg-opacity-100 z-50 transform ${
              isOpen ? "translate-x-0" : "translate-x-full"
            } transition-transform duration-300 ease-in-out lg:hidden`}
          >
            <button
              onClick={toggleMenu}
              type="button"
              aria-label="Close menu"
              className="absolute top-4 right-4 text-white text-3xl focus:outline-none"
            >
              <FiX />
            </button>
            <nav className="flex flex-col items-center justify-center h-full space-y-6">
              {[
                { href: "/", label: "Home" },
                { href: "#About", label: "About" },
                { href: "#menu", label: "Menu" },
                { href: "#specials", label: "Specials" },
                { href: "#events", label: "Events" },
                { href: "#chefs", label: "Chefs" },
                { href: "#gallery", label: "Gallery" },
                { href: "#contact", label: "Contact" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-2xl text-white hover:text-primary transition duration-300 ease-in-out"
                  onClick={() => setIsOpen(false)} // Ferme le menu quand on clique sur un lien
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Menu de navigation pour grands écrans */}
          <nav
            id="navbar"
            className="hidden lg:flex flex-grow justify-center space-x-4"
          >
            <ul className="flex space-x-4">
              {[
                { href: "/", label: "Home" },
                { href: "#about", label: "About" },
                { href: "#menu", label: "Menu" },
                { href: "#specials", label: "Specials" },
                { href: "#events", label: "Events" },
                { href: "#chefs", label: "Chefs" },
                { href: "#gallery", label: "Gallery" },
                { href: "#contact", label: "Contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="hover:text-primary transition duration-300 ease-in-out"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Bouton de réservation */}
          <Link
            href="/book-a-table"
            className="hidden lg:flex border border-primary text-white py-2 px-4 rounded-full hover:bg-primary transition duration-300 ease-in-out"
          >
            Book a table
          </Link>
        </div>
      </Section>
    </header>
  );
};

export default Header;
