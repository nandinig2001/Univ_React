import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/videos/video-1.mp4' autoPlay loop muted />
      <h1>xyz</h1>
      <p>Company that provides managed training services including custom content development and curriculum design, learning administration, learning delivery, strategic sourcing, and learning technology.</p>
      <div className='hero-btns'>
        <Button className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >Register/Login</Button>
        <Button className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >Explore</Button>
      </div>
    </div>
  );
}

export default HeroSection;
