import React from "react";
import appStore from "../../assets/App Store.png";
import googlePlay from "../../assets/Play Store.png";
import phone from "../../assets/Mockup.png";

const Professional = () => {
  return (
    <>
      <div className="bg-black h-auto w-full overflow-hidden flex flex-col md:flex-row">
        {/* Left side */}
        <div className=" flex flex-col lg:gap-2 xl:gap-3   p-8 sm:p-10 md:p-12 lg:p-20 xl:p-28 2xl:p-32 mb-5 sm:mb-10 md:mb-52 lg:mb-28  xl:mb-44 2xl:mb-40 ">
          <h1 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-5xl 2xl:text-6xl">
            Professional <span className="font-bold"> Motorbike Services </span>{" "}
            at your doorstep
          </h1>
          <p className="text-gray-400 text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-3xl 2xl:text-5xl my-4 md:my-5">
            Delivering the best services for your bikes at your doorstep
          </p>
          <p className="text-white text-[5px] sm:text-[10px] md:text-[13px]  tracking-tight">
            DOWNLOAD OUR APP
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 md:gap-8 mt-5 md:mt-7 mr-36 md:mr-24 lg:mr-40 xl:mr-56 2xl:mr-80">
            {/* App Store Button */}
            <img
              className="w-28 sm:w-32 md:w-32 lg:w-36 xl:w-44 h-auto object-contain"
              src={appStore}
              alt="App Store"
            />

            {/* Google Play Button */}
            <img
              className="w-32 sm:w-36 md:w-32 lg:w-36 xl:w-48 h-auto object-contain"
              src={googlePlay}
              alt="Google Play"
            />
          </div>
        </div>

        {/* Right side */}
        {/*  mr-3 md:mr-10 lg:mr-16 xl:mr-24 2xl:mr */}
        <div className=" mr-3 md:mr-20  mt-10 md:mt-11 lg:mt-20 flex justify-center">
          {/*      sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl 2xl:max-w-xl */}
          <img
            className="w-full sm:w-[400px] md:w-[500px] lg:w-[600px] xl:w-[650px] 2xl:w-[700px]  h-auto"
            src={phone}
            alt="Phone Mockup"
          />
        </div>
      </div>
    </>
  );
};

export default Professional;
