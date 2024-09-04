import React from "react";
import React from "react";
import appStore from "../../assets/App Store.png";
import googlePlay from "../../assets/Play Store.png";
import phone from "../../assets/iPhone-13-Pro-Front.png";
const LoadingProfe = () => {
  return (
    <>
      <div className="bg-black w-full h-auto flex justify-between flex-col md:flex-row">
        {/*     left side  */}

        <div className="p-20 md:p-24">
          <h1 className="text-white text-5xl">
            Professional <span className="font-bold"> Motorbike Services </span>{" "}
            at your doop-step
          </h1>
          <p className="text-gray-300 text-3xl my-4">
            Delivering best services for your bikes at your door-step
          </p>
          <p className="text-white text-[13px] tracking-tight">
            DOWNLOAD OUR APP
          </p>

          <div className="flex flex-col md:flex-row gap-4 mt-5 md:mt-7">
            <img src={appStore} alt="" />
            <img src={googlePlay} alt="" />
          </div>
        </div>

        {/*    right side  */}

        <div className="mr-3 flex justify-center md:mr-40 lg:mr-24 mt-10 md:mt-20  ">
          <img className="md:w-[600px] h-auto" src={phone} alt="" />
        </div>
      </div>
    </>
  );
};

export default LoadingProfe;
