import React from "react";
import car from "../../assets/Background.png";
import { BsArrowUpRight } from "react-icons/bs";

const FairPrice = () => {
  return (
    <div className="w-full h-auto flex flex-col lg:flex-row">
      <div className="flex flex-col lg:flex-row gap-9 p-8 md:p-12 lg:p-16">
        {/* Left side - Full screen gray background */}
        <div className="w-full md:h-auto lg:w-1/2 flex items-center justify-center">
          <img
            src={car}
            alt="Car"
            className="w-full h-auto md:w-[400px] lg:w-[400px] xl:w-[500px]"
          />
        </div>

        {/* Right side - Full screen white background */}
        <div className="w-full lg:w-1/2 h-full bg-white pt-8 md:pt-12 lg:pt-14 flex flex-col justify-center">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold">
            Get A Fair Price For Your <br /> Car Sell To Us Today
          </h1>
          <p className="my-4 md:my-6 text-base md:text-lg lg:text-xl text-gray-500">
            We are committed to providing our customers with exceptional
            service, competitive pricing, and a wide range of benefits.
          </p>

          <div>
            <div className="flex flex-col gap-4 mt-4 md:mt-5">
              {[
                "We are the UK's largest provider, with more patrols in more places",
                "You get 24/7 roadside assistance",
                "We fix 4 out of 5 cars at the roadside",
              ].map((text, index) => (
                <span key={index} className="flex items-start gap-3">
                  <div className="p-1 bg-blue-50 rounded-full">
                    <input type="checkbox" className="w-4 h-4" />
                  </div>
                  <p className="text-sm md:text-base">{text}</p>
                </span>
              ))}
            </div>

            <div className="flex w-full mt-5 md:mt-6 sm:w-1/2 lg:w-1/3 p-3 justify-around items-center gap-2 bg-blue-600 text-white rounded-lg cursor-pointer">
              <span className="text-sm md:text-[17px]">Get Started</span>
              <BsArrowUpRight className="w-5 h-5 md:w-6 md:h-6" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FairPrice;
