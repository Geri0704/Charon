import React from 'react';
import './LoadingScreen.css'; // Assuming you have a separate CSS file

const LoadingScreen = () => (
  <div className="loading-screen">
    <div className="loading-content">
      <div className="spinner"></div> {/* Placeholder for any loading spinner/animation */}
      <p>Loading map...</p>
    </div>
  </div>
);

export default LoadingScreen;