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
    <nav className="w-full bg-black h-auto flex flex-col md:flex-row justify-between p-5 md:px-14 lg:px-16 xl:px-20 2xl:px-28">
      {/* Logo */}
      <div className="flex justify-between items-center w-full md:w-auto">
        <img src={logo} alt="Logo" className="w-20 md:w-24 lg:w-28 " />
        {/* Hamburger Menu for Mobile */}
        <div className="md:hidden">
          <button
            onClick={popUp}
            className="text-white text-3xl focus:outline-none"
          >
            <GiHamburgerMenu />
          </button>
        </div>
      </div>

      {/* Navigation Links - Hidden on small screens and shown on tablet+ */}
      <div
        className={`${
          state ? "block" : "hidden"
        } md:flex flex-col md:flex-row text-white  gap-4 md:gap-8 w-full md:w-auto`}
      >
        <ul className="flex flex-col md:flex-row text-center mt-5 md:mt-2 gap-4 md:gap-8 w-full md:w-auto">
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
        <div className="cursor-pointer text-center text-white p-3 bg-blue-600 w-full md:w-36 rounded mt-4 md:mt-0">
          <NavLink to="/booknow" activeClassName="text-blue-400">
            Book now
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
