import React from 'react';
import './landing.css'
import EarthGrid from '../../assets/EarthGrid.png'
import Footer from './footer.jsx';


function Landing() {
  return (
    <div className='landing'>
      <div className="oneLineContainer">
      <img src={EarthGrid} className='earthImage'/>
      </div>
      <Footer />
    </div>
  );
}

export default Landing;
