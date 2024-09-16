import React from "react";
import man1 from "../../assets/Rectangle 112.png";
import man2 from "../../assets/Rectangle 113.png";
import { IoArrowForward } from "react-icons/io5";
import Searchphase from "./Searchphase";

const Services = () => {
  return (
    // Apply relative positioning and z-index here
    <div className="bg-white relative z-50 top-[-180px] sm:top-[-300px] md:top-[-165px]  lg:top-[-150px] xl:top-[-230px] 2xl:top-[-200px] w-full h-auto mb-0">
      {/* Container for the content */}
      <div>
        <Searchphase />
      </div>
      <div className="w-full h-auto flex flex-col px-5 md:px-20 mb-0">
        {/* Content Heading */}

        <div className="text-center mt-5 md:mt-20 lg:mt-28 xl:mt-32 2xl:mt-40 ">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold">
            Services we offer for you
          </h1>
          <p className="mx-7 sm:mx-1 md:mx-32 lg:mx-44 xl:mx-52 2xl:mx-80 my-5 text-[16px] md:text-[18px] text-gray-500">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi
            explicabo, delectus, neque asperiores at.
          </p>
        </div>

        {/* Boxes for services */}
        <div className="flex flex-col lg:flex-row justify-center items-stretch mt-5 md:mt-6 lg:mt-10 gap-5 md:gap-8">
          {/* Service Box 1 */}
          <div className="p-5 flex flex-col gap-3 md:gap-4 text-center bg-gray-100 rounded-lg shadow-md w-full lg:w-1/3">
            <h1 className="text-start font-semibold text-[17px] lg:text-lg">
              Repairs and Maintenance
            </h1>
            <img
              src={man1}
              alt="Repair and Maintenance"
              className="rounded-lg"
            />
            <p className="text-start text-gray-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Necessitatibus, doloremque nemo! Laborum hic tenetur temporibus
              magni atque soluta quia enim.
            </p>
            <div className="flex gap-2 items-center text-blue-600 text-start">
              <p>Learn more</p>
              <IoArrowForward />
            </div>
          </div>

          {/* Service Box 2 */}
          <div className="p-5 flex flex-col gap-3 md:gap-4 text-center bg-gray-100 rounded-lg shadow-md w-full lg:w-1/3">
            <h1 className="text-start font-semibold text-[17px] lg:text-lg">
              Repairs and Maintenance
            </h1>
            <img
              src={man2}
              alt="Repair and Maintenance"
              className="rounded-lg"
            />
            <p className="text-start text-gray-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Necessitatibus, doloremque nemo! Laborum hic tenetur temporibus
              magni atque soluta quia enim.
            </p>
            <div className="flex gap-2 items-center text-blue-600 text-start">
              <p>Learn more</p>
              <IoArrowForward />
            </div>
          </div>

          {/* Service Box 3 */}
          <div className="p-5 flex flex-col gap-3 md:gap-4 text-center bg-gray-100 rounded-lg shadow-md w-full lg:w-1/3">
            <h1 className="text-start font-semibold text-[17px] lg:text-lg">
              Repairs and Maintenance
            </h1>
            <img
              src={man1}
              alt="Repair and Maintenance"
              className="rounded-lg"
            />
            <p className="text-start text-gray-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Necessitatibus, doloremque nemo! Laborum hic tenetur temporibus
              magni atque soluta quia enim.
            </p>
            <div className="flex gap-2 items-center text-blue-600 text-start">
              <p>Learn more</p>
              <IoArrowForward />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
