import React from "react";
import { PhoneIcon } from "./icons/PhoneIcon";
import { ClockIcon } from "./icons/ClockIcon";

const Topbar = () => {
  return (
    <div className="text-white py-1 px-4 top-0 left-0 w-full z-50 mb-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Section de l'information de contact */}
        <div className="flex items-center">
          <div className="flex items-center text-primary">
            <PhoneIcon size={18} />
          </div>
          <span className="hidden md:block">+221 76 909 94 65</span>
          <div className="flex items-center ml-4 text-primary">
            <ClockIcon size={18} />
          </div>
          <span className="hidden md:block">Mon-Sat: 11AM - 23PM</span>
        </div>

        {/* Section des langues */}
        <div className="hidden md:flex items-center">
          <ul className="flex space-x-4">
            <li>
              <a href="#" className="text-white hover:text-primary">
                En
              </a>
            </li>
            <li>
              <a href="#" className="text-white hover:text-primary">
                Fr
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
