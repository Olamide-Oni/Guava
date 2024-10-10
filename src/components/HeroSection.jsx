import React from 'react'
import heroVideo from '../assets/GuavaHSvid.MP4'

const HeroSection = () => {
  return (
    <div className="hero-section">
      <video 
        src={heroVideo} 
        autoPlay 
        muted 
        loop 
        className="hero-video"
        type="video/mp4"
      />
      <div className="hero-text">
        <p>Investing in: <span>Real Estate and Technology</span></p>
      </div>
    </div>
  )
}

export default HeroSection
