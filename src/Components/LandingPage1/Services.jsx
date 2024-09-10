import React from "react";
import man1 from "../../assets/Rectangle 112.png";
import man2 from "../../assets/Rectangle 113.png";
import { IoArrowForward } from "react-icons/io5";
import Searchphase from "./Searchphase";

const Services = () => {
  return (
    // Apply relative positioning and z-index here
    <div className=" bg-white relative z-10 top-[-200px] w-full  min-h-max ">
      <div className=" ">
        <Searchphase />
      </div>
      <div className="w-full h-auto flex flex-col  px-5 md:px-20">
        {/*   content ----------------------*/}

        <div className="text-center mt-3 md:mt-32 lg:mt-36">
          <h1 className="text-3xl font-semibold">Services we offer for you</h1>
          <p className="mx-5  md:mx-40 lg:mx-72  my-5 text-[18px] text-gray-500">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi
            explicabo, delectus, neque asperiores at.
          </p>
        </div>

        {/* boxes --------------------------------*/}

        <div className="flex flex-col md:flex-row mt-5 ">
          <div className="p-5 flex flex-col gap-3 md:gap-4 text-center">
            <h1 className="text-start font-semibold text-[17px]">
              Repairs and Maintainance
            </h1>
            <img src={man1} alt="" />
            <p className="text-start text-gray-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Necessitatibus, doloremque nemo! Laborum hic tenetur temporibus
              magni atque soluta quia enim.
            </p>
            <div className="flex gap-5 text-blue-600">
              <p>Learn more</p>
              <IoArrowForward className="mt-2" />
            </div>
          </div>

          <div className="p-5 flex flex-col gap-3 md:gap-4 text-center">
            <h1 className="text-start font-semibold text-[17px]">
              Repairs and Maintainance
            </h1>
            <img src={man2} alt="" />
            <p className="text-start text-gray-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Necessitatibus, doloremque nemo! Laborum hic tenetur temporibus
              magni atque soluta quia enim.
            </p>
            <div className="flex gap-5 text-blue-600">
              <p>Learn more</p>
              <IoArrowForward className="mt-2" />
            </div>
          </div>

          <div className="p-5 flex flex-col gap-3 md:gap-4 text-center">
            <h1 className="text-start font-semibold text-[17px]">
              Repairs and Maintainance
            </h1>
            <img src={man1} alt="" />
            <p className="text-start text-gray-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Necessitatibus, doloremque nemo! Laborum hic tenetur temporibus
              magni atque soluta quia enim.
            </p>
            <div className="flex gap-5 text-blue-600">
              <p>Learn more</p>
              <IoArrowForward className="mt-2" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
