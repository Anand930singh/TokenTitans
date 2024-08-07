import React from 'react';
import './HomeMusicCard.css';

function HomeMusicCards() {
    const genres = [
        "Pop",
        "Rock",
        "Hip-Hop/Rap",
        "R&B/Soul",
        "Country",
        "Electronic/Dance",
        "Jazz",
        "Classical",
        "Blues",
        "Reggae",
        "Latin",
        "Metal",
        "Punk",
        "Folk",
        "Alternative",
        "Indie",
        "Gospel",
        "Disco",
        "Funk",
        "Opera",
        "Ska",
        "House",
        "Trance",
        "Techno",
        "Dubstep",
        "K-Pop",
        "J-Pop",
        "World Music",
        "Ambient",
        "Soundtrack"
    ];

    const colors = [
        '#ff6347', '#ff4500', '#ff8c00', '#e9967a', '#8b0000', '#a52a2a',
        '#b22222', '#d2691e', '#cd5c5c', '#800000', '#556b2f', '#8b4513',
        '#9932cc', '#8a2be2', '#9400d3', '#4b0082', '#483d8b', '#2e8b57',
        '#4682b4', '#5f9ea0', '#6495ed', '#4169e1', '#00008b', '#008b8b',
        '#008080', '#20b2aa', '#3cb371', '#2f4f4f', '#8b008b', '#6a5acd'
    ];

    return (
        <div className='feed'>
            {/* <div className="musicGenre"> */}
                {genres.map((genre, index) => (
                    <div key={index} className="genre" style={{ backgroundColor: colors[index % colors.length] }}>
                    {genre}
                    </div>
                ))}
            {/* </div> */}
        </div>
    );
}

export default HomeMusicCards;
