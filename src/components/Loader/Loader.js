// components/Loader/index.js
import React from 'react';
import './Loader.css';
import styled from 'styled-components';
import { FaFacebookSquare } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa6";
import HeroImg from '../../images/HeroImage.jpeg'

const Loader = () => {
    const handleIconClick = (url) => {
      window.open(url, '_blank');
    };

  return (
    <div className="loader-container" id="loader-container">
  <div className="loading-wrapper">
    <div className="image-wrap loader-img-animation" id="loader-animation">
      <img
        src={HeroImg}
        alt="Muhammad Muntazir Mehdi"
      />
    </div>
    <div className="loader-name loader-name-animation " id="loader-name">
      <strong>Muhammad Muntazir Mehdi</strong>
    </div>
    <p className="loader-job loader-job-animation" id="loader-job">
      Blockchain Engineer
    </p>
    
    <div className="social-icons">
    <FaFacebookSquare
        onClick={() => handleIconClick('https://www.facebook.com/profile.php?id=100048841306265')}
        style={{ cursor: 'pointer', margin: '0 10px' }}
        size={32}
      />
      <FaGithub
        onClick={() => handleIconClick('https://github.com/MehdiKhosa50/')}
        style={{ cursor: 'pointer', margin: '0 10px' }}
        size={32}
      />
      <FaLinkedin
        onClick={() => handleIconClick('https://www.linkedin.com/in/mehdikhosa/')}
        style={{ cursor: 'pointer', margin: '0 10px' }}
        size={32}
      />
      <IoMdMail
        onClick={() => handleIconClick('mailto:mehdikhosa50@gmail.com')}
        style={{ cursor: 'pointer', margin: '0 10px' }}
        size={32}
      />
  </div>
</div>
</div>
  );
};

export default Loader;
