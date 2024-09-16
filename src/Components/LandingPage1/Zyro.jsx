import React from "react";
import app from "../../assets/App Store.png";
import play from "../../assets/Play Store.png";
import img from "../../assets/Group 35935.png";

const Zyro = () => {
  return (
    <div className="w-full h-auto p-6 sm:p-8 md:p-12 lg:p-16 bg-gradient-to-b from-gray-50 to-gray-200 mb-20 md:mb-40 lg:mb-56 flex flex-col md:flex-row justify-between items-center gap-10">
      {/* Left Section */}
      <div className="flex flex-col gap-6 sm:gap-8 md:gap-12 md:ml-10 max-w-lg text-center md:text-left">
        <h1 className="font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl text-gray-800 leading-tight md:leading-snug drop-shadow-lg">
          Zyro offers a lot more services and selling-buying of used motorbikes.
          <br className="hidden md:block" />
          Get your hands on it and forget all worries.
        </h1>
        <div>
          <span className="font-semibold text-sm md:text-base text-gray-600 mb-4 block">
            DOWNLOAD OUR APP
          </span>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-center justify-center md:justify-start">
            <img
              className="w-36 sm:w-40 md:w-44 lg:w-48 hover:scale-105 transition-transform duration-300 ease-in-out"
              src={app}
              alt="App Store"
            />
            <img
              className="w-36 sm:w-40 md:w-44 lg:w-48 hover:scale-105 transition-transform duration-300 ease-in-out"
              src={play}
              alt="Play Store"
            />
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="w-full md:w-auto mt-5 md:mt-0 flex justify-center">
        <img
          className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg h-auto drop-shadow-xl hover:scale-105 transition-transform duration-300 ease-in-out"
          src={img}
          alt="Zyro app promo"
        />
      </div>
    </div>
  );
};

export default Zyro;
