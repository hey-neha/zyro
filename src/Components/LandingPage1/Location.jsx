import React from "react";
import girls from "../../assets/Oval (3).png";

const Location = () => {
  return (
    <div className="w-full h-auto bg-[#0884CC] bg-opacity-10 p-8 md:p-10  px-5 md:px-16 lg:px-32 flex flex-col">
      {/* Content */}
      <div className="text-center mt-8 md:mt-20">
        <h1 className="text-3xl md:text-4xl font-semibold">
          Location service we provide
        </h1>
        <p className="mx-4 md:mx-28 lg:mx-40 my-5 text-base md:text-lg text-gray-500">
          Lorem ipsum dolor sit, elit. Ex nostrum quam consequuntur Lorem, ipsum
          Lorem ipsum dolor sit amet, consectetur adipisicing. dolor.
        </p>
      </div>

      {/* Boxes */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6  mt-8 md:mt-12 mb-5 md:mb-10 justify-center">
        <div className="flex flex-col gap-2 items-center text-center">
          <img
            className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28"
            src={girls}
            alt="Location"
          />
          <h1 className="font-bold text-lg md:text-xl">Bihar</h1>
        </div>

        <div className="flex flex-col gap-2 items-center text-center">
          <img
            className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28"
            src={girls}
            alt="Location"
          />
          <h1 className="font-bold text-lg md:text-xl">Bihar</h1>
        </div>

        <div className="flex flex-col gap-2 items-center text-center">
          <img
            className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28"
            src={girls}
            alt="Location"
          />
          <h1 className="font-bold text-lg md:text-xl">Bihar</h1>
        </div>

        <div className="flex flex-col gap-2 items-center text-center">
          <img
            className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28"
            src={girls}
            alt="Location"
          />
          <h1 className="font-bold text-lg md:text-xl">Bihar</h1>
        </div>

        <div className="flex flex-col gap-2 items-center text-center">
          <img
            className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28"
            src={girls}
            alt="Location"
          />
          <h1 className="font-bold text-lg md:text-xl">Bihar</h1>
        </div>

        <div className="flex flex-col gap-2 items-center text-center">
          <img
            className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28"
            src={girls}
            alt="Location"
          />
          <h1 className="font-bold text-lg md:text-xl">Bihar</h1>
        </div>
      </div>
    </div>
  );
};

export default Location;
