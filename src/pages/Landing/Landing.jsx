import React, { useState } from "react";
import Footer from "../../components/Footer/Footer";
import Icons from "../../components/MarqueeIcons";
import AnonAadhaarButton from "../../components/AnonAdharButton";
import Add_music from "../../components/Form/Add_music";
import Modal from "../../components/Modal/Modal";
import GridLines from "react-gridlines";

function Landing() {
  const [showAddMusic, setShowAddMusic] = useState(false);

  const handleAddMusicClick = () => {
    setShowAddMusic(true);
  };

  const handleCloseModal = () => {
    setShowAddMusic(false);
  };
  return (
    <GridLines
      cellWidth={25}
      strokeWidth={2}
      cellWidth2={600}
      lineColor="#1f1d2b"
    >
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
          <button
            className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg text-white border border-white border-opacity-20 px-10 py-2 rounded-md shadow-lg hover:bg-gradient-to-r from-violet-500 to-blue-500 mt-6"
            onClick={handleAddMusicClick}
          >
            Add Music
          </button>
          {showAddMusic && (
            <Modal onClose={handleCloseModal}>
              <Add_music onClose={handleCloseModal} />
            </Modal>
          )}
          <Icons />
        </div>
        <Footer />
      </div>
    </GridLines>
  );
}

export default Landing;
