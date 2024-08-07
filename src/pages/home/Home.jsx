import React, { useEffect, useState } from "react";
import "./Home.css";
import { useAddress } from "@thirdweb-dev/react";
import { useNavigate } from "react-router-dom";
import Add_music from "../../components/Form/Add_music";
import Modal from "../../components/Modal/Modal";

import MusicCard from "../../components/MusicCard/MusicCard";
import DummySong from "../../assets/DummySong.mp3";
import HomeMusicCards from "../../components/HomeMusicCards/HomeMusicCards";
import MusicList from "../../components/MusicList/MusicList";

function Home() {
  const [showAddMusic, setShowAddMusic] = useState(false);

  const handleAddMusicClick = () => {
    setShowAddMusic(true);
  };

  const handleCloseModal = () => {
    setShowAddMusic(false);
  };
  const address = useAddress();
  const navigate = useNavigate();
  useEffect(() => {
    if (!address) {
      navigate("/");
    }
  }, [address, navigate]);
  const track = {
    title: "Punjabi",
    artist: "Ajay Bhakar",
    cover:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXJA32WU4rBpx7maglqeEtt3ot1tPIRWptxA&s",
    src: DummySong,
  };
  return (
    <div className="homeContain mx-auto">
      <div className="homeSideBar"></div>
      <div className="mainHome">
        <div className="homeContainNavBar">Your Feed</div>
        <div className="homeMusicCards">
          <HomeMusicCards />
        </div>
        <div className="musicList">
          <MusicList />
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
        </div>
      </div>
      <div className="musicPlayArea">
        <div className="musicCard">
          <MusicCard track={track} />
        </div>
      </div>
    </div>
  );
}

export default Home;
