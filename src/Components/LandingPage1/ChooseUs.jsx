import React from "react";
import video from "../../assets/Video.png";

const ChooseUs = () => {
  return (
    <>
      <div className="w-full h-auto bg-[#0884CC] bg-opacity-10 p-5 md:p-10 lg:p-14 xl:p-16 2xl:p-36 flex flex-col">
        {/* Content */}
        <div className="text-center my-6 md:my-8">
          <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-3xl font-semibold">
            Why you should choose us?
          </h1>
          <p className="mx-4 md:mx-[100px] lg:mx-[250px] text-[16px] md:text-[18px] lg:text-[20px] my-4">
            Offering convenience, reliability, and innovation at every
            touchpoint and targeting Lorem ipsum.
          </p>
        </div>

        {/* Left and Right */}
        <div
          className="flex flex-col md:flex-row justify-center xl:px-32 gap-5 sm:gap-10
        md:gap-11 xl:gap-12 
        "
        >
          {/* Left */}
          <div className="w-full md:w-1/2 md:mt-4 lg:mt-4 xl:mt-5 2xl:mt-2">
            <img
              className="w-full md:w-[700px] lg:w-[800px] xl:w-[900px] 2xl:w-[1000px] h-auto object-cover rounded-lg"
              src={video}
              alt="Video"
            />
          </div>

          {/* Right */}
          <div className="w-full md:w-1/2 flex flex-col justify-center gap-5 md:gap-4 lg:gap-10 xl:gap-11 2xl:gap-14   ">
            <div className="flex flex-col md:flex-row gap-3 items-start">
              <div className="bg-purple-100 flex items-center justify-center w-10 h-10 rounded-full">
                <span className="text-xl md:text-2xl  text-blue-500">1</span>
              </div>
              <span className="flex flex-col">
                <h1 className="text-lg md:text-xl lg:text-xl font-semibold">
                  Easy Booking
                </h1>
                <p className="text-gray-500 mt-2 text-sm pr-20 lg:pr-12 ">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem,
                  ipsum dolor..
                </p>
              </span>
            </div>

            <div className="flex flex-col md:flex-row gap-3 items-start">
              <div className="bg-purple-100 flex items-center justify-center w-10 h-10 rounded-full">
                <span className="text-xl md:text-2xl  text-blue-500">2</span>
              </div>
              <span className="flex flex-col">
                <h1 className="text-lg md:text-xl lg:text-xl font-semibold">
                  Flexible Payment Options
                </h1>
                <p className="text-gray-500 mt-2 text-sm pr-20 lg:pr-12  ">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem,
                  ipsum dolor..
                </p>
              </span>
            </div>

            <div className="flex flex-col md:flex-row gap-3 items-start">
              <div className="bg-purple-100 flex items-center justify-center w-10 h-10 rounded-full">
                <span className="text-xl md:text-2xl  text-blue-500">3</span>
              </div>
              <span className="flex flex-col">
                <h1 className="text-lg  md:text-xl lg:text-xl font-semibold">
                  Customer Support
                </h1>
                <p className="text-gray-500 mt-2 text-sm pr-20 lg:pr-12">
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
