import React from "react";
import video from "../../assets/Video.png";

const ChooseUs = () => {
  return (
    <>
      <div className="w-full h-auto bg-[#0884CC] bg-opacity-10 p-10 md:p-14 flex flex-col">
        {/* Content */}
        <div className="text-center my-8">
          <h1 className="text-3xl font-semibold">Why you should choose us?</h1>
          <p className="md:mx-[200px] lg:mx-[350px] text-[18px] my-5">
            Offering convenience, reliability, and innovation at every
            touchpoint and targeting Lorem ipsum.
          </p>
        </div>

        {/* Left and Right */}
        <div className="flex flex-col md:flex-row justify-center gap-10 md:gap-14 ">
          {/* Left */}
          <div>
            <img
              className="w-full h-auto object-cover"
              src={video}
              alt="Video"
            />
          </div>

          {/* Right */}
          <div className="flex flex-col justify-center gap-5 md:gap-10">
            <div className="flex flex-col md:flex-row gap-3 items-start">
              <span className="rounded-full text-xl text-blue-500">1</span>
              <span className="flex flex-col">
                <h1 className="text-xl font-semibold">Easy Booking</h1>
                <p className="text-gray-500 mt-3">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
              </span>
            </div>

            <div className="flex flex-col md:flex-row gap-3 items-start">
              <span className="text-xl text-blue-500">2</span>
              <span className="flex flex-col">
                <h1 className="text-xl font-semibold">
                  Flexible Payment Options
                </h1>
                <p className="text-gray-500 mt-3">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
              </span>
            </div>

            <div className="flex flex-col md:flex-row gap-3 items-start">
              <span className="rounded-full text-xl text-blue-500">3</span>
              <span className="flex flex-col">
                <h1 className="text-xl font-semibold">Customer Support</h1>
                <p className="text-gray-500 mt-3">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
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
