import React from "react";
import Navbar from "../LandingPage1/Navbar";
import Professional from "../LandingPage1/Professional";
import Service from "./Service";
import ChooseUs from "../LandingPage1/ChooseUs";
import AboutUs from "../LandingPage1/AboutUs";
import Location from "../LandingPage1/Location";
import Zyro from "../LandingPage1/Zyro";
import Fotter from "../LandingPage1/Fotter";
import Services from "../LandingPage1/Services";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Professional />
      <Services />
      <ChooseUs />
      <AboutUs />
      <Location />
      <Zyro />

      <Fotter />
    </div>
  );
};

export default Home;
