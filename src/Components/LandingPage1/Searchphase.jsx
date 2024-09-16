import React, { useState } from "react";
import { IoLocation } from "react-icons/io5";
import { TiArrowSortedDown } from "react-icons/ti";

const Searchphase = () => {
  const [isLocationDropdownOpen, setIsLocationDropdownOpen] = useState(false);

  const toggleLocationDropdown = () => {
    setIsLocationDropdownOpen(!isLocationDropdownOpen);
  };

  return (
    <div className="w-full flex justify-center relative top-[-40px] md:top-[-20px] lg:top-[-12px] xl:top-[-10px] z-10">
      <div className="w-full md:w-4/5 lg:w-3/5 bg-white shadow-2xl rounded-xl flex flex-col md:flex-row justify-between items-center gap-4 md:gap-3 lg:gap-4 p-4 md:p-6">
        {/* Location Dropdown */}
        <div
          className="relative w-full md:w-1/3"
          onClick={toggleLocationDropdown}
        >
          <div className="flex items-center justify-between p-3 border rounded-xl hover:cursor-pointer hover:shadow-md transition-all duration-200 ease-in-out">
            <span className="flex items-center gap-2">
              <IoLocation className="text-blue-500" />
              <span className="text-gray-700">Select Location</span>
            </span>
            <TiArrowSortedDown className="text-gray-500" />
          </div>

          {isLocationDropdownOpen && (
            <div className="absolute left-0 right-0 mt-2 p-3 bg-white border rounded-xl shadow-lg z-20">
              <ul className="space-y-2">
                <li className="p-2 rounded-md hover:bg-gray-100 hover:cursor-pointer">
                  New York
                </li>
                <li className="p-2 rounded-md hover:bg-gray-100 hover:cursor-pointer">
                  Delhi
                </li>
                <li className="p-2 rounded-md hover:bg-gray-100 hover:cursor-pointer">
                  Mumbai
                </li>
                <li className="p-2 rounded-md hover:bg-gray-100 hover:cursor-pointer">
                  Noida
                </li>
                <li className="p-2 rounded-md hover:bg-gray-100 hover:cursor-pointer">
                  Gurugram
                </li>
              </ul>
            </div>
          )}
        </div>

        {/* Date Picker */}
        <div className="relative w-full md:w-1/3">
          <div className="flex items-center justify-between p-3 border rounded-xl hover:cursor-pointer hover:shadow-md transition-all duration-200 ease-in-out">
            <span className="flex items-center gap-2">
              <input
                type="date"
                className="w-full outline-none text-gray-700"
              />
            </span>
            <TiArrowSortedDown className="text-gray-500" />
          </div>
        </div>

        {/* Search Button */}
        <div className="w-full md:w-1/3">
          <button className="w-full p-3 bg-blue-600 text-white rounded-xl flex justify-center items-center hover:bg-blue-700 hover:shadow-lg transition-all duration-200 ease-in-out">
            <span className="text-lg">Search Place</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Searchphase;
