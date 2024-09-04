import React from "react";
import b1 from "../../assets/b2.jpg.png";
import b2 from "../../assets/b3.jpg.png";
import b3 from "../../assets/b4.jpg.png";
import b4 from "../../assets/b5.jpg.png";

const Brands = () => {
  return (
    <div className="w-full h-auto p-20 md:p-28">
      {/*    content */}
      <div className="text-center">
        <h1 className="text-4xl font-semibold">Explore Our Premimum Brands</h1>
        <p className="text-[21px] p-8 md:mx-32 lg:mx-36 text-gray-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci,
          doloribus Lorem ipsum dolor sit amet..
        </p>
      </div>

      <div className="flex  mt-5 md:mt-10  mx-16 border flex-col md:flex-row justify-center gap-10 md:gap-16">
        <span className=" mt-2 p-4 md:p-7 flex flex-col  gap-2 text-center rounded-lg">
          <img src={b1} className="w-10 h-10 md:w-20 md:h-20" alt="" />
          <h1>WMB</h1>
        </span>

        <span className="p-4 md:p-7 flex  flex-col gap-2 text-center">
          <img className="w-10 h-10 md:w-20 md:h-20" src={b2} alt="" />
          <h1>Ford</h1>
        </span>

        <span className=" p-4 md:p-7  flex flex-col gap-2 text-center">
          <img className="w-10 h-10 md:w-20 md:h-20" src={b3} alt="" />
          <h1>Mercedes-Benz</h1>
        </span>

        <span className="p-4  md:p-7  flex flex-col gap-2 text-center">
          <img className="w-10 h-10 md:w-20 md:h-20" src={b4} alt="" />
          <h1>Peugeot</h1>
        </span>
      </div>
    </div>
  );
};

export default Brands;
