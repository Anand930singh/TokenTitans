import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import GridLines from "react-gridlines";

const Team = () => {
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
        <div className="h-screen max-w-6xl ">
          <div className="max-w-sm flex flex-col items-center justify-center text-white glass-effect p-4">
            <img
              src="https://media.licdn.com/dms/image/D5635AQF8vqCKI85TZQ/profile-framedphoto-shrink_800_800/0/1719443582564?e=1723489200&v=beta&t=EfjuoR0PXuyzphD2oDbJeGyotDqFjFmcmjn-SWNr-8Y"
              alt="Ajay Bhakar"
              className="w-32 h-32 rounded-full mb-4"
            />
            <h1 className="text-2xl font-semibold">Ajay Bhakar</h1>
            <ul className="mt-4 space-y-2 text-center">
              <li>React</li>
              <li>NodeJS</li>
              <li>IPFS</li>
              <li>The Graph</li>
            </ul>
          </div>
        </div>
      </GridLines>
    </div>
  );
};

export default Team;
