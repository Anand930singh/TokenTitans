import React, { useEffect } from "react";
import "./Home.css";
import { useAddress } from "@thirdweb-dev/react";
import { useNavigate } from "react-router-dom";

import MusicCard from "../../components/MusicCard/MusicCard";
import DummySong from "../../assets/DummySong.mp3";
import HomeMusicCards from "../../components/HomeMusicCards/HomeMusicCards";
import MusicList from "../../components/MusicList/MusicList";

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
