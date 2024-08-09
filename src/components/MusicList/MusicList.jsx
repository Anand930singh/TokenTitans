import React, { useState, useEffect } from "react";
import "./MusicList.css";
import axios from "axios";

function MusicList({ setTrackPlay }) {
  const [musicArray, setMusicList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8000/retrieve");
        const musicData = await Promise.all(
          response.data.map(async (item) => {
            const res = await axios.get(
              `https://jade-decent-jackal-694.mypinata.cloud/ipfs/${item.IpfsHash}`
            );
            return res.data;
          })
        );
        setMusicList(musicData);
        console.log("Data fetched successfully", musicData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  const handleCardClick = (music) => {
    // Store the selected track in sessionStorage

    sessionStorage.setItem("selectedTrack", JSON.stringify(music));
    
    // Update the state to immediately play the selected track
    setTrackPlay(music);
  };

  return (
    <div className="music-container">
      {musicArray.map((music, index) => (
        <div
          className="music-card-differ"
          key={index}
          onClick={() => handleCardClick(music)}
        >
          <div className="music-image">
            <img src={music.image} alt={music.title} />
          </div>
          <div className="music-details">
            <div className="music-title-name">
              <h3>{music.title}</h3>
              <p className="music-name">{music.name}</p>
            </div>
            <p className="music-description">{music.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default MusicList;