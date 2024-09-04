import React from "react";
import { IoLocation } from "react-icons/io5";
import { TiArrowSortedDown } from "react-icons/ti";
import { MdDateRange } from "react-icons/md";

const Searchphase = () => {
  return (
    <div className="w-full relative z-10 top-[-23px] flex justify-center mt-3 md:mt-0 ml-2 md:ml-16 lg:ml-4">
      <div className="w-full flex flex-col justify-evenly p-4 md:p-5  md:flex-row  md:w-[700px]  bg-white shadow-2xl rounded-xl gap-4 md:gap-5">
        {/*    location */}
        <div className=" w-full md:w-1/2 gap-6 p-2 md:p-3 border rounded-xl flex justify-evenly ">
          <span className="flex flex-row  gap-2 mt-1 ">
            <IoLocation className="mt-1 " />
            <span>Select Location</span>
          </span>
          <TiArrowSortedDown className="mt-2" />
        </div>

        {/*   select date */}
        <div className=" w-full md:w-1/2 gap-6 p-2 md:p-3 border rounded-xl flex justify-evenly ">
          <span className="flex flex-row  gap-2 mt-1 ">
            <MdDateRange className="mt-1 " />
            <span>Select Date</span>
          </span>
          <TiArrowSortedDown className="mt-2" />
        </div>

        {/*    search phase */}

        <div className=" w-full md:w-1/2 gap-6 p-2 md:p-3 border rounded-xl flex justify-evenly  bg-blue-600 text-white">
          <span className="text-[18px]">Search place</span>
        </div>
      </div>
    </div>
  );
};

export default Searchphase;
