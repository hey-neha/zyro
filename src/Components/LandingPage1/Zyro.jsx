import React from "react";
import app from "../../assets/App Store.png";
import play from "../../assets/Play Store.png";
import img from "../../assets/Group 35935.png";

const Zyro = () => {
  return (
    <div className="w-full h-auto p-6 md:p-10 mb-20 md:mb-40 lg:mb-56 flex flex-col md:flex-row justify-around items-center gap-10 md:gap-0">
      {/* Left Section */}

      <div className="flex flex-col gap-8 md:gap-12  md:ml-10 max-w-lg">
        <h1 className="font-semibold text-2xl md:text-3xl text-center md:text-left">
          Zyro offers a lot more of services and selling-buying of used <br />
          motoebike. Get your hands on it and forget all worries.
        </h1>
        <div className="text-center md:text-left">
          <span className="font-semibold text-sm md:text-base block mb-4">
            DOWNLOAD OUR APP
          </span>
          <div className="flex flex-col md:flex-row gap-4 md:gap-6 justify-center md:justify-start">
            <img src={app} alt="App Store" />
            <img src={play} alt="Play Store" />
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="w-full md:w-auto mt-5 md:mt-10 flex justify-center">
        <img
          className="w-full md:w-[600px] h-auto"
          src={img}
          alt="Zyro app promo"
        />
      </div>
    </div>
  );
};

export default Zyro;
