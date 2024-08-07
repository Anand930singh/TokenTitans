import React, { useState } from 'react';
import './Add_music.css';

const Add_music = ({ onClose }) => {
  const [artistName, setArtistName] = useState('');
  const [albumName, setAlbumName] = useState('');
  const [title, setTitle] = useState('');
  const [dateOfCreation, setDateOfCreation] = useState('');
  const [category, setCategory] = useState('pop');
  const [mp3File, setMp3File] = useState(null);
  const [thumbnail, setThumbnail] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the form submission, e.g., send the data to a server
    console.log('Artist Name:', artistName);
    console.log('Album Name:', albumName);
    console.log('Title:', title);
    console.log('Date of Creation:', dateOfCreation);
    console.log('Category:', category);
    console.log('MP3 File:', mp3File);
    console.log('Thumbnail:', thumbnail);
  };

  const handleFileChange = (e, setFile) => {
    setFile(e.target.files[0]);
  };

  return (
    <div className="form-popup">
      <div className="form-popup-content">
        <span className="close" onClick={onClose}>&times;</span>
        <h2 className="form-popup-title">Add New Music</h2>
        <form className="mint-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-column">
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
                <label htmlFor="title">Title</label>
                <input
                  type="text"
                  id="title"
                  placeholder="Enter title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="dateOfCreation">Date of Creation</label>
                <input
                  type="date"
                  id="dateOfCreation"
                  value={dateOfCreation}
                  onChange={(e) => setDateOfCreation(e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="form-column">
              <div className="form-group">
                <label htmlFor="category">Category</label>
                <select
                  id="category"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  required
                >
                  <option value="pop">Pop</option>
                  <option value="rock">Rock</option>
                  <option value="hip-hop/rap">Hip-Hop/Rap</option>
                  <option value="r&b/soul">R&B/Soul</option>
                  <option value="country">Country</option>
                  <option value="electronic/dance">Electronic/Dance</option>
                  <option value="jazz">Jazz</option>
                  <option value="classical">Classical</option>
                  <option value="blues">Blues</option>
                  <option value="reggae">Reggae</option>
                  <option value="latin">Latin</option>
                  <option value="metal">Metal</option>
                  <option value="punk">Punk</option>
                  <option value="folk">Folk</option>
                  <option value="alternative">Alternative</option>
                  <option value="indie">Indie</option>
                  <option value="gospel">Gospel</option>
                  <option value="disco">Disco</option>
                  <option value="funk">Funk</option>
                  <option value="opera">Opera</option>
                  <option value="ska">Ska</option>
                  <option value="house">House</option>
                  <option value="trance">Trance</option>
                  <option value="techno">Techno</option>
                  <option value="dubstep">Dubstep</option>
                  <option value="k-pop">K-Pop</option>
                  <option value="j-pop">J-Pop</option>
                  <option value="world music">World Music</option>
                  <option value="ambient">Ambient</option>
                  <option value="soundtrack">Soundtrack</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="mp3File">MP3 File</label>
                <input
                  type="file"
                  id="mp3File"
                  accept=".mp3"
                  style={{ display: 'none' }}
                  onChange={(e) => handleFileChange(e, setMp3File)}
                  required
                />
                <label htmlFor="mp3File" className="custom-file-label">
                  {mp3File ? mp3File.name : 'Choose MP3 File'}
                </label>
              </div>
              <div className="form-group">
                <label htmlFor="thumbnail">Thumbnail</label>
                <input
                  type="file"
                  id="thumbnail"
                  accept="image/*"
                  style={{ display: 'none' }}
                  onChange={(e) => handleFileChange(e, setThumbnail)}
                  required
                />
                <label htmlFor="thumbnail" className="custom-file-label">
                  {thumbnail ? thumbnail.name : 'Choose Thumbnail'}
                </label>
              </div>
            </div>
          </div>
          <button type="submit" className="mint-button">Mint</button>
        </form>
      </div>
    </div>
  );
};

export default Add_music;
