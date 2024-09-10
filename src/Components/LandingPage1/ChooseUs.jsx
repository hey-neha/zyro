import React from "react";
import video from "../../assets/Video.png";

const ChooseUs = () => {
  return (
    <>
      <div className="w-full h-auto bg-[#0884CC] bg-opacity-10 p-5 md:p-10 lg:p-14 px-10 md:px-20 lg:px-24 flex flex-col">
        {/* Content */}
        <div className="text-center my-6 md:my-8">
          <h1 className="text-2xl md:text-3xl font-semibold">
            Why you should choose us?
          </h1>
          <p className="mx-4 md:mx-[100px] lg:mx-[250px] text-[16px] md:text-[18px] my-4">
            Offering convenience, reliability, and innovation at every
            touchpoint and targeting Lorem ipsum.
          </p>
        </div>

        {/* Left and Right */}
        <div className="flex flex-col md:flex-row justify-center gap-8 md:gap-10 lg:gap-14 ">
          {/* Left */}
          <div className="w-full md:w-1/2">
            <img
              className="w-full h-auto object-cover rounded-lg"
              src={video}
              alt="Video"
            />
          </div>

          {/* Right */}
          <div className="w-full md:w-1/2 flex flex-col justify-center gap-5 md:gap-8 lg:gap-10">
            <div className="flex flex-col md:flex-row gap-3 items-start">
              <div className="bg-purple-100 flex items-center justify-center w-10 h-10 rounded-full">
                <span className="text-xl text-blue-500">1</span>
              </div>
              <span className="flex flex-col">
                <h1 className="text-lg md:text-xl font-semibold">
                  Easy Booking
                </h1>
                <p className="text-gray-500 mt-2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem,
                  ipsum dolor..
                </p>
              </span>
            </div>

            <div className="flex flex-col md:flex-row gap-3 items-start">
              <div className="bg-purple-100 flex items-center justify-center w-10 h-10 rounded-full">
                <span className="text-xl text-blue-500">2</span>
              </div>
              <span className="flex flex-col">
                <h1 className="text-lg md:text-xl font-semibold">
                  Flexible Payment Options
                </h1>
                <p className="text-gray-500 mt-2 ">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem,
                  ipsum dolor..
                </p>
              </span>
            </div>

            <div className="flex flex-col md:flex-row gap-3 items-start">
              <div className="bg-purple-100 flex items-center justify-center w-10 h-10 rounded-full">
                <span className="text-xl text-blue-500">3</span>
              </div>
              <span className="flex flex-col">
                <h1 className="text-lg md:text-xl font-semibold">
                  Customer Support
                </h1>
                <p className="text-gray-500 mt-2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem,
                  ipsum dolor..
                </p>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChooseUs;
