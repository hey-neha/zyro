import React from "react";
import blueBike from "../../assets/Preview.png";

const BikeShell = () => {
  return (
    <div className="w-full p-10 md:p-16 lg:p-24 h-auto px-10 md:px-20 flex flex-col bg-gray-50">
      {/* Content */}
      <div className="text-center">
        <h1 className="text-2xl md:text-3xl font-semibold">Bike for Sale</h1>
        <p className="text-base text-[19px] md:text-[22px] text-gray-500 mx-4 md:mx-40 lg:mx-52 my-4 md:my-5">
          With lots of unique blocks, you can easily build a page without
          coding. Build your next landing page.
        </p>
      </div>

      {/* Boxes */}
      <div className="flex mt-5 md:mt-8 flex-col md:flex-row flex-wrap gap-5 md:gap-6 justify-center">
        {[...Array(8)].map((_, index) => (
          <div
            key={index}
            className="w-full sm:w-[48%] md:w-[30%] lg:w-[22%] bg-white border rounded-lg shadow"
          >
            <img src={blueBike} alt="Bike" className="w-full h-auto" />
            <span className="m-2 text-center block">
              <p className="text-sm md:text-base font-semibold">
                Cannondale Bad Boy 3
              </p>
              <p className="text-sm md:text-base">$620,000</p>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BikeShell;
