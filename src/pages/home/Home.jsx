import React, { useEffect, useState } from "react";
import "./Home.css";
import { useAddress } from "@thirdweb-dev/react";
import { useNavigate } from "react-router-dom";

import MusicCard from "../../components/MusicCard/MusicCard";
import DummySong from "../../assets/DummySong.mp3";
import HomeMusicCards from "../../components/HomeMusicCards/HomeMusicCards";
import MusicList from "../../components/MusicList/MusicList";
import Add_music from "../../components/Form/Add_music";
import Modal from "../../components/Modal/Modal";
import Navbar from "../../components/Navbar/Navbar";

function Home() {
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
    cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXJA32WU4rBpx7maglqeEtt3ot1tPIRWptxA&s",
    src: DummySong,
  };

  const [showAddMusic, setShowAddMusic] = useState(false);

  const handleAddMusicClick = () => {
    setShowAddMusic(true);
  };

  const handleCloseModal = () => {
    setShowAddMusic(false);
  };

  const formatAddress = (address) => {
    if (!address) return '';
    return `${address.slice(0, 10)}...${address.slice(-4)}`;
  };

  const formattedAddress = formatAddress(address);

  return (
    <>
      <div className="homeContain mx-auto">
        <div className="homeSideBar">
          <svg
            width="30"
            height="40"
            viewBox="0 0 46 55"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M22.6 5.70001V27.2L17.7 24.4C9 19.4 3.59999 10.1 3.59999 0H0V24.6C0 32.6 4.59999 40 11.9 43.5L22.7 48.7V27.2L27.6 30C36.3 35 41.7 44.3 41.7 54.4H45.3V29.8C45.3 21.8 40.7 14.4 33.4 10.9L22.6 5.70001Z"
              fill="white"
            />
          </svg>
          <button className="but_home">Home</button>
          <button className="but_home">Profile</button>
          <button className="but_home">Subscription</button>
          <button className="but_home">More</button>
          <button
            className="but_home_add"
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
        <div className="mainHome">
          <div className="homeContainNavBar">Your Feed</div>
          <div className="homeMusicCards">
            <HomeMusicCards />
          </div>
          <div className="musicList">
            <MusicList />
          </div>
        </div>
        <div className="musicPlayArea">
          <button className="address_but">
            {formattedAddress}
          </button>
          <div className="musicCard">
            <MusicCard track={track} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
