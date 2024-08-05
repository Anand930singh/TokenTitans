import React from 'react';
import './landing.css'
import EarthGrid from '../../assets/EarthGrid.png'

function Landing() {
  return (
    <div className='landing'>
      <div className="oneLineContainer">
      <img src={EarthGrid} className='earthImage'/>
      </div>
    </div>
  );
}

export default Landing;
