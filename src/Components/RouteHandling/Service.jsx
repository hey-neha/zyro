import React from "react";
import Navbar from "../LandingPage1/Navbar";
import Brands from "../ServicePage/Brands";
import ContServices from "../ServicePage/ContServices";
import FairPrice from "../ServicePage/FairPrice";
import BikeShell from "../ServicePage/BikeShell";
import Fotter from "../LandingPage1/Fotter";
import ContBody from "../ContactUs/ContBody";

const Service = () => {
  return (
    <div>
      <Navbar />
      <ContBody/>
      <Brands />
      <ContServices />
      <FairPrice />
      <BikeShell />
      <Fotter />
    </div>
  );
};

export default Service;
