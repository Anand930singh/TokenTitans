import React from 'react';
import { FaDiscord, FaInstagram, FaTelegram, FaTwitter, FaEnvelope, FaLinkedin, FaReddit, FaArrowRight } from 'react-icons/fa';
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="input-container">
          <input type="text" placeholder="Enter something" />
          <FaArrowRight className="icon arrow" />
      </div>
      <div className="flexbox">
        <a className='upa' href="#home">Home</a>
        <a className='upa' href="#blogs">Blogs</a>
        <a className='upa' href="#jobs">Jobs</a>
        <a className='upa' href="#docs">Docs</a>
      </div>
      <div className="flexbox">
        <a className='downa' href="#status">Status</a>
        <a className='downa' href="#testnet">Testnet</a>
        <a className='downa' href="#privacy-policy">Privacy Policy</a>
        <a className='downa' href="#terms-of-service">Terms of Service</a>
        <a className='downa' href="#brand-assets">Brand Assets</a>
        <a className='downa' href="#partnership-requests">Partnership Requests</a>
        <a className='downa' href="#forum">Forum</a>
        <a className='downa' href="#security">Security</a>
      </div>
      <div className="icons-container">
        <FaDiscord className="icon" />
        <FaInstagram className="icon" />
        <FaTelegram className="icon" />
        <FaTwitter className="icon" />
        <FaEnvelope className="icon" />
        <FaLinkedin className="icon" />
        <FaReddit className="icon" />
      </div>
    </footer>
  );
};

export default Footer;
