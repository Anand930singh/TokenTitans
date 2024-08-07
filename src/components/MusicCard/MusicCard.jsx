import React, { useState, useRef, useEffect } from 'react';
import './MusicCard.css';

const MusicCard = ({ track }) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [progress, setProgress] = useState(0);
    const [hoverTime, setHoverTime] = useState(null);
    const audioRef = useRef(null);
    const progressBarRef = useRef(null);

    const togglePlayPause = () => {
        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play();
        }
        setIsPlaying(!isPlaying);
    };

    const handleTimeUpdate = () => {
        const { currentTime, duration } = audioRef.current;
        setProgress((currentTime / duration) * 100);
    };

    const handleAudioEnded = () => {
        setIsPlaying(false);
        setProgress(0);
    };

    const handleProgressBarClick = (e) => {
        const { duration } = audioRef.current;
        const clickX = e.nativeEvent.offsetX;
        const progressBarWidth = progressBarRef.current.clientWidth;
        const clickPositionRatio = clickX / progressBarWidth;
        const newTime = duration * clickPositionRatio;
        audioRef.current.currentTime = newTime;
        setProgress(clickPositionRatio * 100);
    };

    const handleMouseMove = (e) => {
        const { duration } = audioRef.current;
        const hoverX = e.nativeEvent.offsetX;
        const progressBarWidth = progressBarRef.current.clientWidth;
        const hoverPositionRatio = hoverX / progressBarWidth;
        const hoverTime = duration * hoverPositionRatio;
        setHoverTime(hoverTime);
    };

    const handleMouseLeave = () => {
        setHoverTime(null);
    };

    useEffect(() => {
        const audio = audioRef.current;
        audio.addEventListener('timeupdate', handleTimeUpdate);
        audio.addEventListener('ended', handleAudioEnded);

        return () => {
            audio.removeEventListener('timeupdate', handleTimeUpdate);
            audio.removeEventListener('ended', handleAudioEnded);
        };
    }, []);

    const formatTime = (time) => {
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);
        return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    };

    return (
        <div className="music-card">
            <img src={track.cover} alt={track.title} className="cover" />
            <div className="details">
                <h3>{track.title}</h3>
                <p>{track.artist}</p>
            </div>
            <div
                className="progress-bar"
                ref={progressBarRef}
                onClick={handleProgressBarClick}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
            >
                <div className="progress" style={{ width: `${progress}%` }}></div>
                {hoverTime !== null && (
                    <div className="hover-time" style={{ left: `${(hoverTime / audioRef.current.duration) * 100}%` }}>
                        {formatTime(hoverTime)}
                    </div>
                )}
            </div>
            <button onClick={togglePlayPause} className="play-pause-button">
                {isPlaying ? 'Pause' : 'Play'}
            </button>
            <audio ref={audioRef} src={track.src} />
        </div>
    );
};

export default MusicCard;
