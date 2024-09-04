import React from "react";
import img1 from "../../assets/Oval (1).png";
import img2 from "../../assets/Oval (2).png";
import img3 from "../../assets/Oval (3).png";
import { GoStarFill } from "react-icons/go";

const AboutUs = () => {
  return (
    <div className="w-full h-auto flex flex-col p-10 md:p-24">
      {/* Content */}
      <div className="text-center mt-3 md:mt-8">
        <h1 className="text-3xl font-semibold">What people say about us</h1>
        <p className="mx-5 md:mx-36 lg:mx-72 text-gray-500 my-8">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem
          ratione tempore labore magnam, assumenda sunt.
        </p>
      </div>

      {/* Boxes */}
      <div className="flex flex-col justify-between md:flex-row gap-6 p-5">
        {/* Box 1 */}
        <div className="border rounded-lg p-6 md:p-7 hover:shadow-lg m-2  flex flex-col items-center">
          <img src={img3} className="w-12 h-12" alt="Person 1" />
          <div className="flex flex-row gap-2 text-yellow-600 mt-2">
            <GoStarFill className="w-6 h-6" />
            <GoStarFill className="w-6 h-6" />
            <GoStarFill className="w-6 h-6" />
            <GoStarFill className="w-6 h-6" />
            <GoStarFill className="w-6 h-6" />
          </div>
          <p className="text-start mt-2 text-gray-600 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
            harum vero beatae esse blanditiis ducimus non animi neque hic
            reiciendis.
          </p>
        </div>

        {/* Box 2 */}
        <div className="border rounded-lg p-6 hover:shadow-lg m-2 flex flex-col items-center">
          <img src={img1} className="w-12 h-12" alt="Person 2" />
          <div className="flex flex-row gap-2 text-yellow-600 mt-2">
            <GoStarFill className="w-6 h-6" />
            <GoStarFill className="w-6 h-6" />
            <GoStarFill className="w-6 h-6" />
            <GoStarFill className="w-6 h-6" />
            <GoStarFill className="w-6 h-6" />
          </div>
          <p className="text-start mt-2 text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
            harum vero beatae esse blanditiis ducimus non animi neque hic
            reiciendis.
          </p>
        </div>

        {/* Box 3 */}
        <div className="border rounded-lg p-6 hover:shadow-lg m-2 flex flex-col items-center">
          <img src={img2} className="w-12 h-12" alt="Person 3" />
          <div className="flex flex-row gap-2 text-yellow-600 mt-2">
            <GoStarFill className="w-6 h-6" />
            <GoStarFill className="w-6 h-6" />
            <GoStarFill className="w-6 h-6" />
            <GoStarFill className="w-6 h-6" />
            <GoStarFill className="w-6 h-6" />
          </div>
          <p className="text-start mt-2 text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
            harum vero beatae esse blanditiis ducimus non animi neque hic
            reiciendis.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
