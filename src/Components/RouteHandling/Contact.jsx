import React from "react";
import Navbar from "../LandingPage1/Navbar";
import Body from "../ContactUs/Body";
import Fotter from "../LandingPage1/Fotter";
import ContBody from "../ContactUs/ContBody";

const Contact = () => {
  return (
    <div>
      <Navbar />
      <ContBody/>
      <Body />
      <Fotter />
    </div>
  );
};

export default Contact;
