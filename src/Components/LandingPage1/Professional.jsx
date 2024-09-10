import React from "react";
import appStore from "../../assets/App Store.png";
import googlePlay from "../../assets/Play Store.png";
import phone from "../../assets/Mockup.png";

const Professional = () => {
  return (
    <>
      <div className="bg-black  min-w-full min-h-full  overflow-hidden flex  flex-col  md:flex-row">
        {/*     left side  */}

        <div className="p-10 md:p-12 lg:p-20 mb-0 md:mb-0 lg:mb-32">
          <h1 className="text-white text-3xl md:text-4xl lg:text-5xl">
            Professional <span className="font-bold"> Motorbike Services </span>{" "}
            at your doop-step
          </h1>
          <p className="text-gray-300 text-2xl md:text-3xl my-4 md:my-5">
            Delivering best services for your bikes at your door-step
          </p>
          <p className="text-white text-[10px] md:text-[13px]  tracking-tight">
            DOWNLOAD OUR APP
          </p>

          <div className="flex flex-col md:flex-row gap-3 md:gap-4 mt-5 md:mt-7">
            <img className="w-40 md:w-auto" src={appStore} alt="App Store" />
            <img
              className="w-40 md:w-auto"
              src={googlePlay}
              alt="Google Play"
            />
          </div>
        </div>

        {/*    right side  */}

        <div className="mr-3  flex justify-center md:mr-40 lg:mr-24 mt-10 md:mt-20  ">
          <img className="md:w-[600px] h-auto" src={phone} alt="" />
        </div>
      </div>
    </>
  );
};

export default Professional;
