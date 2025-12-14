import React from 'react';
import '../App.css';

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1>Krishna's Technology</h1>
        <p className="tagline">
          We Provide Senior Software Developers on Contract
          <br />
          <span className="tech-stack">Ruby on Rails • MERN • Full Stack • DevOps</span>
        </p>
        <button className="cta-button">Contact Us</button>
      </div>
    </section>
  );
};

export default HeroSection;