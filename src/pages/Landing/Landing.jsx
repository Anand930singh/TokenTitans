import React from "react";

import Navbar from "../../components/Navbar/Navbar";
import GridLines from "react-gridlines";

function Landing() {
  return (
    <div className="h-full bg-[#0e0c22]">
      <GridLines
        className="grid-area"
        cellWidth={25}
        strokeWidth={1}
        cellWidth2={600}
        lineColor="#1f1d2b"
      >
        <Navbar />
        <div className="flex flex-col items-center justify-center h-screen">
          <h1 className="text-4xl text-white">Welcome to Token Titans</h1>
          <p className="text-white text-center mt-4 max-w-md">
            A platform for developers to learn, build, and grow their skills in
            blockchain development.
          </p>
          <button className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg text-white border border-white border-opacity-20 px-10 py-2 rounded-md shadow-lg hover:bg-gradient-to-r from-violet-500 to-blue-500 mt-6">
            Get Started
          </button>
        </div>
      </GridLines>
    </div>
  );
}

export default Landing;
