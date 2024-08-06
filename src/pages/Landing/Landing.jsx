import React from "react";
import GridLines from "react-gridlines";
import Footer from "../../components/Footer/Footer";
import Icons from "../../components/MarqueeIcons";
import Navbar from "../../components/Navbar/Navbar";
import AnonAadhaarButton from "../../components/AnonAdharButton";

function Landing() {
  return (
    <GridLines
      className="grid-area"
      cellWidth={25}
      strokeWidth={1}
      cellWidth2={600}
      lineColor="#1f1d2b"
    >
      <div className="h-full w-full lg:max-w-7xl mx-auto p-6">
        <Navbar />
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
