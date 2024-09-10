import React from "react";
import phone from "../../assets/Mockup.png";

import appStore from "../../assets/App Store.png";
import googlePlay from "../../assets/Play Store.png";

const Popup = () => {
  return (
    <>
      <div className="w-full h-auto fixed  max-w-md p-2 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 shadow-lg  md:w-1/2 rounded-lg  flex flex-col bg-white">
        <div className="bg-gray-100 mx-2 rounded-lg m-5 md:m-8 flex justify-center">
          <img
            src={phone}
            className="w-[200px] md:[230px] mt-5 md:mt-9"
            alt=""
          />
        </div>

        <div className="z- bg-white mt-[-140px] text-center">
          <h1 className="text-xl font-semibold">Download the app</h1>
          <p className="p-3">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat
            itaque id dolor excepturi? inventore.
          </p>

          <div className="flex flex-col md:flex-row gap-3 md:gap-4">
            <img src={appStore} className="" alt="" />
            <img src={googlePlay} className="" alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Popup;
