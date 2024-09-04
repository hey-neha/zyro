import React from "react";
import car from "../../assets/Background.png";
import { BsArrowUpRight } from "react-icons/bs";

const FairPrice = () => {
  return (
    <div className="w-full h-auto md:h-screen flex flex-col md:flex-row">
      {/* Left side - Full screen gray background */}
      <div className="w-full md:w-1/2 h-auto bg-gray-50 flex items-center justify-center p-10 md:p-20">
        <img
          src={car}
          alt="Car"
          className="w-full h-auto ml-0 md:ml-16 lg:ml-40"
        />
      </div>

      {/* Right side - Full screen white background */}
      <div className="w-full md:w-1/2 h-full bg-white p-10 md:p-16 flex flex-col justify-center">
        <h1 className="text-3xl md:text-4xl font-bold">
          Get A Fair Price For Your <br /> Car Sell To Us Today
        </h1>
        <p className="my-4 md:my-6 text-lg md:text-xl text-gray-500">
          We are committed to providing our customers with exceptional service,
          competitive pricing, and a wide range of benefits.
        </p>

        <div>
          <div className="flex flex-col gap-4 mt-6">
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

          <div className="mt-8 md:mt-12 flex justify-around items-center gap-2 p-3 bg-blue-600 text-white rounded-lg w-full md:gap-4 md:w-1/3 cursor-pointer">
            <span>Get Started</span>
            <BsArrowUpRight className="w-5 h-5" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FairPrice;
