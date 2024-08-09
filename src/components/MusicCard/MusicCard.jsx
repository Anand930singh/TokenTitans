import React, { useState, useRef, useEffect } from "react";
import "./MusicCard.css";

const MusicCard = ({ track }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const audioRef = useRef(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.load();
      setIsPlaying(false);
      setProgress(0);
    }
  }, [track]);

  const togglePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      const currentTime = audioRef.current.currentTime;
      const duration = audioRef.current.duration;
      setProgress((currentTime / duration) * 100);
    }
  };

  const music=sessionStorage.getItem("selectedTrack");

  return (
    <div className="music-card">
      <img src={track.image} alt={track.title} className="cover" />
      <div className="details">
        <h3>{track.title}</h3>
        <p>{track.name}</p>
      </div>
      <div className="progress-bar">
        <div className="progress" style={{ width: `${progress}%` }}></div>
      </div>
      
      <button onClick={togglePlayPause} className="play-pause-button">
        {isPlaying ? "Pause" : "Play"}
      </button>
      <audio ref={audioRef} src={track.audio} onTimeUpdate={handleTimeUpdate} />
    </div>
  );
};

export default MusicCard;