import React from "react";
import BookBody from "../BookNow/BookBody";
import Navbar from "../LandingPage1/Navbar";
import ChooseUs from "../LandingPage1/ChooseUs";
import AboutUs from "../LandingPage1/AboutUs";
import Location from "../LandingPage1/Location";
import Zyro from "../LandingPage1/Zyro";
import Fotter from "../LandingPage1/Fotter";
import Services from "../LandingPage1/Services";

const BookNow = () => {
  return (
    <div>
      <Navbar />
      <BookBody />
      <Services />
      <ChooseUs />
      <AboutUs />
      <Location />
      <Zyro />
      <Fotter />
    </div>
  );
};

export default BookNow;
