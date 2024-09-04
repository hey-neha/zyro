import React from "react";
import logo from "../../assets/Asset 5 3.png";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div
      /*  style={{ backgroundColor: "#262D36" }} */
      className="w-full bg-black h-auto flex flex-col md:flex-row justify-between p-5 md:px-14 lg:px-28"
    >
      {/*   logo */}
      <div>
        <img src={logo} alt="" />
      </div>

      <div className=" flex flex-col  justify-between md:flex-row  gap-5 md:gap-8 ">
        <ul className="flex justify-between text-white  gap-5 md:gap-8 mt-3">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/service"> Service</NavLink>
          </li>
          <li>
            <NavLink to="/about"> About</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>

        <div className=" text-center text-white p-3 bg-blue-600 w-full rounded md:w-48 ">
          <NavLink to="/booknow">Book Now</NavLink>
        </div>


      </div>
    </div>
  );
};

export default Navbar;
