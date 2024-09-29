import React from 'react';
import { FaYoutube } from "react-icons/fa";
import './Ytlive.css'; // Add your styles here

const Ytlive = () => {
  const handleClick = () => {
    alert('Button clicked!');
  };

  return (
    <a href='https://www.youtube.com/live/1tQRODn5yj8'>
    <button className="floating-button">
      <div className='content'>
        <FaYoutube className="yt-icon" />
        <p className="watchLive">WATCH LIVE</p>
      </div>
      {/* <FaYoutube className="yt-icon" /> */}
    </button>
    </a>
  );
};

export default Ytlive;
