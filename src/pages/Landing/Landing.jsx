import React, { useState } from "react";
import Footer from "../../components/Footer/Footer";
import Icons from "../../components/MarqueeIcons";
import AnonAadhaarButton from "../../components/AnonAdharButton";

import GridLines from "react-gridlines";
import Navbar from "../../components/Navbar/Navbar";

function Landing() {


  return (

    <GridLines
      cellWidth={25}
      strokeWidth={2}
      cellWidth2={600}
      lineColor="#1f1d2b"
    >
      <Navbar/>
      <div className="h-full w-full  mx-auto p-6">
        <div className="flex flex-col items-center justify-center min-h-screen my-12">
          <h1 className="text-4xl text-white hover:text-purple-600 font-bold transition ease-in-out hover:cursor-pointer">
            Welcome to Token Titans
          </h1>
          <p className="text-white text-center my-4 max-w-md">
            The platform automates music rights and royalties with transparency
            and secure, seamless transactions.
          </p>
          <AnonAadhaarButton />


          <Icons />
        </div>
        <Footer />
      </div>
    </GridLines>
  );
}

export default Landing;
