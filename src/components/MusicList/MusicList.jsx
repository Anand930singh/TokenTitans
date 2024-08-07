import React from "react";
import "./MusicList.css";

function MusicList() {
  const musicArray = [
    {
      title: "Blinding Lights",
      artist: "The Weeknd",
      album: "After Hours",
      coverImage:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXJA32WU4rBpx7maglqeEtt3ot1tPIRWptxA&s",
      musicUrl: "https://example.com/blinding-lights",
      genre: "Synthwave",
      releaseYear: 2020,
    },
    {
      title: "Watermelon Sugar",
      artist: "Harry Styles",
      album: "Fine Line",
      coverImage:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXJA32WU4rBpx7maglqeEtt3ot1tPIRWptxA&s",
      musicUrl: "https://example.com/watermelon-sugar",
      genre: "Pop",
      releaseYear: 2019,
    },
    {
      title: "Levitating",
      artist: "Dua Lipa",
      album: "Future Nostalgia",
      coverImage:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXJA32WU4rBpx7maglqeEtt3ot1tPIRWptxA&s",
      musicUrl: "https://example.com/levitating",
      genre: "Disco",
      releaseYear: 2020,
    },
  ];

  return (
    <div className="music-container">
      {musicArray.map((music, index) => (
        <div className="music-card-differ" key={index}>
          <div>
            <img src={music.coverImage} alt={music.title} />
          </div>
          <div className="music-details">
            <h3>{music.title}</h3>
            <p>Artist: {music.artist}</p>
            <p>Album: {music.album}</p>
            <p>Genre: {music.genre}</p>
            <p>Release Year: {music.releaseYear}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default MusicList;
