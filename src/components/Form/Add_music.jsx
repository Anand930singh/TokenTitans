import React, { useState } from 'react';
import './Add_music.css';

const Add_music = ({ onClose }) => {
  const [artistName, setArtistName] = useState('');
  const [albumName, setAlbumName] = useState('');
  const [year, setYear] = useState('');
  const [mp3File, setMp3File] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the form submission, e.g., send the data to a server
    console.log('Artist Name:', artistName);
    console.log('Album Name:', albumName);
    console.log('Year of Creation:', year);
    console.log('MP3 File:', mp3File);
  };

  return (
    <div className="form-popup">
      <div className="form-popup-content">
        <span className="close" onClick={onClose}>&times;</span>
        <h2 className="form-popup-title">Add New Music</h2>
        <form className="mint-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="artistName">Artist Name</label>
            <input
              type="text"
              id="artistName"
              placeholder="Enter artist name"
              value={artistName}
              onChange={(e) => setArtistName(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="albumName">Album Name</label>
            <input
              type="text"
              id="albumName"
              placeholder="Enter album name"
              value={albumName}
              onChange={(e) => setAlbumName(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="year">Year of Creation</label>
            <input
              type="number"
              id="year"
              placeholder="Enter year of creation"
              value={year}
              onChange={(e) => setYear(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="mp3File">MP3 File</label>
            <input
              type="file"
              id="mp3File"
              accept=".mp3"
              onChange={(e) => setMp3File(e.target.files[0])}
              required
            />
          </div>
          <button type="submit" className="mint-button">Mint</button>
        </form>
      </div>
    </div>
  );
};

export default Add_music;
