import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/Asset 5 3.png";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const [state, setState] = useState(false);

  const popUp = () => {
    setState(!state);
  };

  return (
    <div className="w-full bg-black h-auto flex flex-col md:flex-row justify-between  p-5 md:px-14 lg:px-28">
      {/* Logo */}
      <div className="mb-4 md:mb-0">
        <img src={logo} alt="Logo" />
      </div>

      {/* Navigation Links */}
      <div className="hidden md:block">
        <div className="flex flex-col md:flex-row gap-5 md:gap-8 items-center">
          <ul className="flex flex-col md:flex-row text-white gap-4 md:gap-8 text-center">
            <li>
              <NavLink exact to="/" activeClassName="text-blue-400">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/service" activeClassName="text-blue-400">
                Service
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" activeClassName="text-blue-400">
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" activeClassName="text-blue-400">
                Contact
              </NavLink>
            </li>
          </ul>

          {/* Book Now Button */}
          <div className="cursor-pointer text-center text-white p-3 bg-blue-600 w-full md:w-48 rounded mt-4 md:mt-0">
            <NavLink to="/booknow" activeClassName="text-blue-400">
              Book now
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
