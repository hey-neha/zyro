import React from "react";
import {
  FaTwitter,
  FaFacebook,
  FaInstagramSquare,
  FaLinkedin,
} from "react-icons/fa";

const Fotter = () => {
  return (
    <>
      <div
        className="w-full flex flex-col p-8 md:p-16 text-gray-300"
        style={{ backgroundColor: "#161C2D" }}
      >
        {/* Flex container for the main content */}
        <div className="flex flex-col md:flex-row justify-around items-start gap-8 px-4 md:px-8">
          {/* Company Section */}
          <div>
            <p className="text-gray-500 text-[17px]">Company</p>
            <ul className="flex flex-col gap-3 mt-4">
              <li>About us</li>
              <li>Contact us</li>
              <li>Careers</li>
              <li>Press</li>
            </ul>
          </div>

          {/* Product Section */}
          <div>
            <p className="text-gray-500 text-[17px]">Product</p>
            <ul className="flex flex-col gap-3 mt-4">
              <li>Features</li>
              <li>Pricing</li>
              <li>News</li>
              <li>Help desk</li>
              <li>Support</li>
            </ul>
          </div>

          {/* Services Section */}
          <div>
            <p className="text-gray-500 text-[17px]">Services</p>
            <ul className="flex flex-col gap-3 mt-4">
              <li>Digital Marketing</li>
              <li>Content Writing</li>
              <li>SEO for Business</li>
              <li>UI Design</li>
            </ul>
          </div>

          {/* Legal Section */}
          <div>
            <p className="text-gray-500 text-[17px]">Legal</p>
            <ul className="flex flex-col gap-3 mt-4">
              <li>Privacy Policy</li>
              <li>Terms & Conditions</li>
              <li>Return Policy</li>
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <p className="text-gray-500 text-[17px]">Contact us</p>
          </div>
        </div>

        {/* Horizontal line */}
        <hr className="mt-12 md:mt-16 border-gray-700" />

        {/* Social media icons */}
        <div className="mt-6 flex justify-center md:justify-end gap-4">
          <FaTwitter className="w-6 h-6 text-white hover:text-blue-600" />
          <FaFacebook className="w-6 h-6 text-white hover:text-blue-600" />
          <FaInstagramSquare className="w-6 h-6 text-white hover:text-blue-600" />
          <FaLinkedin className="w-6 h-6 text-white hover:text-blue-600" />
        </div>
      </div>
    </>
  );
};

export default Fotter;
