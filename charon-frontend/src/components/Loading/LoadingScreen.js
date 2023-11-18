import React from 'react';
import '../../style/LoadingScreen.css'; // Assuming you have a separate CSS file
import logo from '../assets/logo.png';
const LoadingScreen = () => (
  <div className="loading-screen">
    <div className="loading-content">
      <div className="spinner"></div> { 
        <img src={logo} className="spinning-image" alt="My Application Logo" />

      }
    </div>
  </div>
);

export default LoadingScreen;