import React from "react";
import appStore from "../../assets/App Store.png";
import googlePlay from "../../assets/Play Store.png";
import phone from "../../assets/Mockup.png";

const BookBody = () => {
  return (
    <div className="bg-black w-full h-auto flex flex-col md:flex-row justify-between">
      {/* Left Side */}
      <div className="p-8 md:p-20 text-center md:text-left flex flex-col justify-center">
        <h1 className="text-white text-3xl md:text-5xl">
          Professional <span className="font-bold">Motorbike Services</span> at
          your door-step
        </h1>
        <p className="text-gray-300 text-lg md:text-3xl my-4">
          Delivering the best services for your bikes at your door-step
        </p>
        <p className="text-white text-sm md:text-[13px] tracking-tight">
          DOWNLOAD OUR APP
        </p>
        <div className="flex flex-col md:flex-row gap-4 mt-5 md:mt-7 items-center justify-center md:justify-start">
          <img src={appStore} alt="App Store" className="w-[150px] md:w-auto" />
          <img
            src={googlePlay}
            alt="Google Play Store"
            className="w-[150px] md:w-auto"
          />
        </div>
      </div>

      {/* Right Side */}
      <div className="w-full md:w-[500px]  top-[100px] relative z-50 left-[-300px] flex justify-center items-center">
        <div className="bg-white rounded-3xl relative p-6 m-6 md:m-0">
          <div className="bg-gray-100 rounded-3xl p-5">
            <img
              className="w-[150px] md:w-[200px] mx-auto"
              src={phone}
              alt="Phone Mockup"
            />
          </div>
          <div className="text-center mt-6   relative z-50 top-[-150px] bg-white">
            <h1 className="font-semibold text-lg md:text-xl">
              Download the app
            </h1>
            <p className="text-gray-500 mx-4 md:mx-8 my-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum,
              suscipit est architecto expedita placeat facere minima quia.
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
              <img
                className="w-[120px] md:w-[120px]"
                src={appStore}
                alt="App Store"
              />
              <img
                className="w-[120px] md:w-[120px]"
                src={googlePlay}
                alt="Google Play Store"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookBody;
