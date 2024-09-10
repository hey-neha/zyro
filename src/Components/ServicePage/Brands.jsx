import React from "react";

import { SiBmw } from "react-icons/si";
import { SiFord } from "react-icons/si";
import { SiMercedes } from "react-icons/si";
import { SiPeugeot } from "react-icons/si";

const Brands = () => {
  return (
    <div className="w-full h-auto p-20 md:p-28">
      {/*    content */}
      <div className="text-center">
        <h1 className=" text-3xl md:text-4xl font-semibold">
          Explore Our Premimum Brands
        </h1>
        <p className=" text-[19px]  md:text-[21px] p-7 md:p-8 md:mx-32 lg:mx-36 text-gray-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci,
          doloribus Lorem ipsum dolor sit amet..
        </p>
      </div>

      <div className="flex w-full mt-5 md:mt-10 p-3 md:p-4 lg:p-5 px-5 md:px-20 lg:px-14  border flex-col md:flex-row justify-center gap-8 md:gap-10">
        <span className=" mt-2 p-4 md:p-7 flex flex-col justify-center  gap-2 text-center rounded-lg">
          <SiBmw className="w-10 h-10 md:w-20 md:h-20  ml-16  md:ml-0 " />
          <h1>WMB</h1>
        </span>

        <span className="p-4 md:p-7 flex  justify-center flex-col gap-2 text-center">
          <SiFord className="w-10 h-10 md:w-20 md:h-20  ml-16 md:ml-0  " />

          <h1>Ford</h1>
        </span>

        <span className=" p-4 md:p-7  flex flex-col justify-center gap-2 text-center">
          <SiMercedes className="w-10 h-10 md:w-20 md:h-20  ml-16  md:ml-0 " />

          <h1>Mercedes-Benz</h1>
        </span>

        <span className="p-4  md:p-7  flex flex-col justify-center gap-2 text-center">
          <SiPeugeot className="w-10 h-10 md:w-20 md:h-20 ml-16 md:ml-0" />

          <h1>Peugeot</h1>
        </span>
      </div>
    </div>
  );
};

export default Brands;
