import React from "react";
import { MdOutlineMail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { IoLocation } from "react-icons/io5";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

const Body = () => {
  return (
    <>
      <div className="w-full h-auto flex flex-col p-5 md:p-20 justify-between">
        {/* first contaienr--------------------------------- */}
       {/*  <div>
          <h1 className="text-center md:text-[30px]  mb-5 md:mb-11  text-[24px] lg:text-[36px] font-semibold ">
            Contact{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#53ADE4] to-[#277BA8]">
              Vereda digital Technology
            </span>
          </h1>
        </div> */}

        {/* second container -------------------------------------------*/}

        <div className=" w-full h-auto flex flex-col md:flex-row justify-around pt-5 md:pt-14 lg:pt-16">
          <div className="w-full text-start h-auto md:w-1/2 p-3 md:p-6 shadow-2xl   ">
            <h1 className="font-semibold text-3xl">Get in touch</h1>
            <p className="mt-4 mb-5 md:mb-10">
              Our friendly team would love to hear from you.
            </p>

            {/*   /*  className="my-5 md:my-7 m-5 md:m-6 " */}
            <form action="#">
              {/* first name and last name */}
              <div className="flex flex-col w-full gap-4  md:gap-6 md:flex-row">
                <div className=" w-full md:w-[300px]">
                  <label className="text-start block" htmlFor="firstName">
                    First Name
                  </label>
                  <input
                    className="w-full  my-2 p-2 outline-none border rounded"
                    type="text"
                    id="firstName"
                    placeholder="First name"
                  />
                </div>

                <div className="w-full md:w-[300px] ">
                  <label className="text-start block" htmlFor="lastName">
                    Last Name
                  </label>
                  <input
                    className="w-full outline-none my-2 p-2  border rounded"
                    type="text"
                    id="lastName"
                    placeholder="Last Name"
                  />
                </div>
              </div>

              {/* email */}
              <div className="w-full mt-2 ">
                <label className="text-start block" htmlFor="email">
                  Email
                </label>
                <input
                  className="w-full text-start outline-none  my-2 p-2 border rounded-lg"
                  type="text"
                  id="email"
                  placeholder="You@company.com"
                />
              </div>

              {/* phone number with country code */}

              <div className=" w-full mt-2 ">
                <label className="text-start block " htmlFor="phone">
                  Phone number
                </label>
                {/* <input
                className="w-full my-2 p-2 px-10 border rounded"
                type="text"
                id="email"
                placeholder="You@company.com"
              /> */}

                <div className="w-full outline-none border my-2 flex flex-row rounded-lg ">
                  <select
                    className="p-2 border-none outline-none"
                    id="country"
                    defaultValue="+1"
                    placeholder="+1(555) 000-0000"
                  >
                    <option value="+1">USA (+1)</option>
                    <option value="+44">UK (+44)</option>
                    <option value="+91">India (+91)</option>
                  </select>

                  <input
                    className=" w-full  outline-none p-2  border-none rounded "
                    type="text"
                    placeholder="+1(555) 000-0000"
                  />
                </div>
              </div>

              {/* message */}
              <div className="mt-2">
                <label className="text-start block" htmlFor="message">
                  Message
                </label>
                <textarea
                  className="w-full outline-none text-start my-2 p-2 px-10 border rounded-lg resize-none"
                  id="message"
                ></textarea>
              </div>

              {/* privacy policy */}
              <div className="mb-3 flex flex-row gap-4">
                <input className="w-5 border rounded-full" type="checkbox" />
                <p className="text-start text-gray-400">
                  You agree to our friendly privacy policy
                </p>
              </div>

              {/* submit button */}
              <div className="w-full p-2 border rounded h-auto  bg-blue-800 text-center">
                <a className="text-white" href="#">
                  Send message
                </a>
              </div>
            </form>
          </div>

          {/* /* bg-gradient-to-r from-[#277BA8] to-[#277BA8]  */ }
          <div className=" bg-blue-700 text-center w-full h-auto md:w-1/2 ">
            <div className="flex flex-col p-5 md:p-16 lg:pt-40 text-center gap-5">
              <div className="flex flex-row gap-5 text-center ">
                {/*  <img
                  className="w-16 md:w-14 lg:w-8 h-auto bg-gray-100 rounded-full"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKxH9XmxELRdQpAmHgS1xbuxbdvoPx12b0t2ciGuqtacep26_RMGECKg6HC-D7YRrWsA4&usqp=CAU"
                  alt=""
                /> */}
                <div className=" p-3 rounded-full  bg-gray-100 bg-opacity-20 w-12 md:w-12 lg:w-14 text-center ">
                  <MdOutlineMail className=" flex justify-center w-6 md:w-7 h-auto   text-white" />
                </div>

                <div
                  className="text-start 
                 "
                >
                  <p className="text-gray-200 font-semibold">EMAIL US</p>
                  <p className="text-white">Support@vereda.co.in</p>
                </div>
              </div>

              <div className="flex flex-row gap-5 text-center ">
                {/*  <img
                  className="w-16 md:w-14 lg:w-8 h-auto bg-gray-100 rounded-full"
                  src="https://png.pngtree.com/png-vector/20190120/ourmid/pngtree-calling-vector-icon-png-image_470733.jpg"
                  alt=""
                /> */}
                <div className=" p-3 rounded-full  bg-gray-100 bg-opacity-20 w-12 md:w-12 lg:w-14 h-12 md:h-12 lg:h-14 text-center">
                  <FaPhoneAlt className="flex text-white  mt-2 justify-center w-5 md:w-6 h-5 md:h-6" />
                </div>

                <div
                  className="text-start 
                 "
                >
                  <p className="text-gray-200 font-semibold">PHONE NUMBER</p>
                  <p className="text-white">+91 9570994444</p>
                </div>
              </div>

              <div className="flex flex-row gap-5 text-center ">
                {/*  <img
                  className="w-16 md:w-14 lg:w-8 h-auto bg-gray-100 rounded-full"
                  src="https://w7.pngwing.com/pngs/561/324/png-transparent-location-address-position-linear-icon-location-address-position-thumbnail.png"
                  alt=""
                /> */}
                <div className=" p-3 rounded-full  bg-gray-100 bg-opacity-20 w-12 md:w-12 lg:w-14  h-12 md:h-12 lg:h-14 text-center">
                  <IoLocation
                    className=" flex justify-center w-6 md:w-7 
                  h-6 md:h-7
                  text-white"
                  />
                </div>

                <div
                  className="text-start 
                 "
                >
                  <p className="text-gray-200 font-semibold ">ADDRESS</p>
                  <p className="text-white">
                    Sinha Library road , Venture park <br /> patna
                  </p>
                </div>
              </div>
            </div>

            {/* images------------------------------------ */}
            <div className="mt-5 md:mt-10 text-center">
              <p className="md:mr-36 lg:mr-36 text-white">-connect with us:</p>
              <div className="flex flex-row md:flex-row ml-16 gap-2 lg:ml-36  mt-1 md:mt-3">
                {/*  <img
                  className="w-7 md:w-14 lg:w-8 h-auto"
                  src={facebook}
                  alt=""
                /> */}

                <div className="  bg-gray-100  rounded text-white hover:bg-blue-500 bg-opacity-5 p-3 ">
                  <FaFacebookF />
                </div>
                {/*  <img
                  className="w-7 md:w-14 lg:w-8 h-auto"
                  src={twitter}
                  alt=""
                /> */}
                <div className="text-blue-400 bg-white rounded p-3  ">
                  <FaTwitter />
                </div>
                {/* <img
                  className="w-7 md:w-14 lg:w-8 h-auto"
                  src={linkedin}
                  alt=""
                /> */}

                <div className="text-white bg-gray-100 rounded p-3 bg-opacity-10 ">
                  <FaLinkedinIn />
                </div>
                {/*  <img
                  className="w-7 md:w-14 lg:w-8 h-auto"
                  src={intagram}
                  alt=""
                /> */}

                <div className="text-white bg-gray-100 rounded p-3 bg-opacity-10 ">
                  <FaInstagram />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Body;
