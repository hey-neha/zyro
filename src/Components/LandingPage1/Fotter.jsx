import React from "react";
import {
  FaTwitter,
  FaFacebook,
  FaInstagramSquare,
  FaLinkedin,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";

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
              <li>
                <NavLink to="/about">About us</NavLink>
              </li>
              <li>
                <NavLink to="/contact">Contact us</NavLink>
              </li>
              <li>
                <NavLink to="/careers">Careers</NavLink>
              </li>
              <li>
                <NavLink to="/press">Press</NavLink>
              </li>
            </ul>
          </div>

          {/* Product Section */}
          <div>
            <p className="text-gray-500 text-[17px]">Product</p>
            <ul className="flex flex-col gap-3 mt-4">
              <li>
                <NavLink to="#features">Features</NavLink>
              </li>
              <li>
                <NavLink to="#pricing">Pricing</NavLink>
              </li>
              <li>
                <NavLink to="#news">News</NavLink>
              </li>
              <li>
                <NavLink to="#help-desk">Help desk</NavLink>
              </li>
              <li>
                <NavLink to="#support">Support</NavLink>
              </li>
            </ul>
          </div>

          {/* Services Section */}
          <div>
            <p className="text-gray-500 text-[17px]">Services</p>
            <ul className="flex flex-col gap-3 mt-4">
              <li>
                <NavLink to="#services/digital-marketing">
                  Digital Marketing
                </NavLink>
              </li>
              <li>
                <NavLink to="#services/#content-writing">
                  Content Writing
                </NavLink>
              </li>
              <li>
                <NavLink to="#ervices/seo">SEO for Business</NavLink>
              </li>
              <li>
                <NavLink to="#services/ui-design">UI Design</NavLink>
              </li>
            </ul>
          </div>

          {/* Legal Section */}
          <div>
            <p className="text-gray-500 text-[17px]">Legal</p>
            <ul className="flex flex-col gap-3 mt-4">
              <li>
                <NavLink to="#privacy-policy">Privacy Policy</NavLink>
              </li>
              <li>
                <NavLink to="#terms">Terms & Conditions</NavLink>
              </li>
              <li>
                <NavLink to="#return-policy">Return Policy</NavLink>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <p className="text-gray-500 text-[17px]">Contact us</p>
            <ul className="flex flex-col gap-3 mt-4">
              <li>
                <NavLink to="/contact">Get in Touch</NavLink>
              </li>
            </ul>
          </div>
        </div>

        {/* Horizontal line */}
        <hr className="mt-12 md:mt-16 border-gray-700" />

        {/* Social media icons */}
        <div className="mt-6 flex justify-center md:justify-end gap-4">
          <FaTwitter
            onClick={() => window.open("https://twitter.com", "_blank")}
            className="w-6 h-6 text-white hover:text-blue-600 cursor-pointer"
          />
          <FaFacebook
            onClick={() => window.open("https://facebook.com", "_blank")}
            className="w-6 h-6 text-white hover:text-blue-600 cursor-pointer"
          />
          <FaInstagramSquare
            onClick={() => window.open("https://instagram.com", "_blank")}
            className="w-6 h-6 text-white hover:text-blue-600 cursor-pointer"
          />
          <FaLinkedin
            onClick={() => window.open("https://linkedin.com", "_blank")}
            className="w-6 h-6 text-white hover:text-blue-600 cursor-pointer"
          />
        </div>
      </div>
    </>
  );
};

export default Fotter;
