import React from "react";
import icons1 from "../../assets/Icons (1).png";
import icons2 from "../../assets/Icons (2).png";
import icons3 from "../../assets/Icons (3).png";
import icons4 from "../../assets/Icons (4).png";
import icons5 from "../../assets/Icons (5).png";
import icons6 from "../../assets/Icons (6).png";
import icons from "../../assets/Icons.png";

const ContServices = () => {
  return (
    <div className="w-full h-auto bg-gray-50 p-10 md:p-20">
      {/* Content */}
      <div className="text-center mb-8 md:mb-12">
        <h1 className="text-3xl md:text-4xl font-semibold">
          Services we offer for you
        </h1>
        <p className="text-lg md:text-xl text-gray-500 mt-4 md:mt-6 mx-4 md:mx-20 lg:mx-60">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
          dolor similique vitae debitis amet.
        </p>
      </div>

      {/* Boxes */}
      <div className="flex flex-col md:flex-row flex-wrap justify-center gap-4 ">
        {[
          { src: icons, text: "Tyre & wheel care" },
          { src: icons1, text: "Denting & Painting" },
          { src: icons2, text: "Batteries" },
          { src: icons3, text: "Insurance Claims" },
          { src: icons4, text: "Oiling" },
          { src: icons5, text: "Engine" },
          { src: icons6, text: "Bike wash" },
          { src: icons, text: "Bike service" },
        ].map((item, index) => (
          <div
            key={index}
            className="w-full  flex flex-col items-center justify-center bg-white rounded-lg shadow md:w-1/5 p-4 "
          >
            <img className="w-12 h-12 mb-3" src={item.src} alt={item.text} />
            <p className="text-sm  text-gray-700 text-center">{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContServices;
