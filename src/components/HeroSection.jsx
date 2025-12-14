import React from 'react';
import { FaReact, FaNodeJs, FaAws, FaJava, FaPython } from 'react-icons/fa';
import { SiRubyonrails } from 'react-icons/si';
import '../App.css';

const HeroSection = () => {
  // Simple tech icons using only Font Awesome which we know works
  const techIcons = [
    { icon: <FaReact style={{ fontSize: '2rem', color: '#61DAFB' }} />, label: 'React', color: '#61DAFB' },
    { icon: <FaNodeJs style={{ fontSize: '2rem', color: '#339933' }} />, label: 'Node.js', color: '#339933' },
    { icon: <SiRubyonrails style={{ fontSize: '2rem', color: '#CC0000' }} />, label: 'Ruby on Rails', color: '#CC0000' },
    { icon: <FaJava style={{ fontSize: '2rem', color: '#ED8B00' }} />, label: 'Java', color: '#ED8B00' },
    { icon: <FaPython style={{ fontSize: '2rem', color: '#3776AB' }} />, label: 'Python', color: '#3776AB' },
    { icon: <FaAws style={{ fontSize: '2rem', color: '#FF9900' }} />, label: 'AWS', color: '#FF9900' }
  ];

  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1>Krishna's Technology</h1>
        <p className="tagline">
          We Provide Senior Software Developers on Contract
          <br />
        </p>
        
        {/* Technology Stack with Logos */}
        <div className="tech-stack-container" style={{ 
          display: 'flex', 
          justifyContent: 'center', 
          flexWrap: 'wrap', 
          gap: '20px', 
          marginTop: '30px',
          marginBottom: '30px'
        }}>
          {techIcons.map((tech, index) => (
            <div 
              key={index} 
              className="tech-item-with-icon"
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                color: tech.color,
                minWidth: '70px'
              }}
            >
              <div style={{ fontSize: '2rem', marginBottom: '8px' }}>
                {tech.icon}
              </div>
              <span style={{ fontSize: '0.8rem', textAlign: 'center' }}>{tech.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;